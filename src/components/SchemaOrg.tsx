const BASE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MH3 LearnCon GmbH",
  description:
    "Beratung, Training und Sparring für Führung, Karriere und Vertrieb",
  url: "https://mh-learncon.com",
  telephone: "+491718820277",
  email: "kontakt@mh-learncon.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Grafenberger Allee 60",
    addressLocality: "Düsseldorf",
    postalCode: "40237",
    addressCountry: "DE",
  },
  founder: {
    "@type": "Person",
    name: "Marcus Holzheimer",
    jobTitle: "Geschäftsführender Gesellschafter und Berater",
  },
  areaServed: ["Düsseldorf", "Nordrhein-Westfalen", "Deutschland", "DACH"],
  priceRange: "$$-$$$",
};

interface SchemaOrgProps {
  pageSchema?: Record<string, unknown>;
}

export default function SchemaOrg({ pageSchema }: SchemaOrgProps) {
  const schema = pageSchema
    ? { ...BASE_SCHEMA, ...pageSchema }
    : BASE_SCHEMA;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
