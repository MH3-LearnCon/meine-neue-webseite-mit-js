import type { Metadata } from "next";
import Image from "next/image";

const PERSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marcus Holzheimer",
  givenName: "Marcus",
  familyName: "Holzheimer",
  jobTitle: "Geschäftsführender Gesellschafter und Berater",
  worksFor: {
    "@type": "Organization",
    name: "MH3 LearnCon GmbH",
    url: "https://mh-learncon.com",
  },
  url: "https://mh-learncon.com/ueber-mich",
  image: "https://mh-learncon.com/Offen_laecheln.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Grafenberger Allee 60",
    postalCode: "40237",
    addressLocality: "Düsseldorf",
    addressCountry: "DE",
  },
  telephone: "+491718820277",
  email: "kontakt@mh-learncon.com",
  memberOf: {
    "@type": "Organization",
    name: "VDI – Verein Deutscher Ingenieure",
    url: "https://www.vdi.de",
  },
  sameAs: [
    "https://de.linkedin.com/in/marcusholzheimer",
    "https://www.xing.com/profile/Marcus_Holzheimer/",
    "https://www.facebook.com/mh3.learncon.gmbh",
    "https://www.researchgate.net/profile/Marcus_Holzheimer",
    "https://www.shopvote.de/bewertung_mh-learncon-com_21607.html",
  ],
};

export const metadata: Metadata = {
  title:
    "Über Marcus Holzheimer – Berater, Sparringspartner, Einzelunternehmer | MH3 LearnCon",
  description:
    "Über 20 Jahre selbstständig. Führungskraft, Auftraggeber, Berater – drei Perspektiven in einer Person. Düsseldorf als Heimatbasis, deutschlandweit und international im Einsatz.",
};

export default function UeberMichPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PERSON_LD),
        }}
      />
      <div className="animate-fade-in">
        {/* ── Abschnitt 1: Hero ─────────────────────────────────────── */}
        <section className="bg-white min-h-[60vh] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col gap-6">
                <h1 className="text-h1 font-extrabold text-brand-text leading-tight">
                  Über Marcus Holzheimer
                </h1>

                <p className="text-xl font-semibold text-orange">
                  Menschen machen Geschäfte mit Menschen.
                </p>

                <p className="text-body text-brand-text leading-relaxed max-w-lg">
                  Diesen Satz hören meine Klientinnen und Klienten häufig – weil
                  er das Fundament meiner Arbeit beschreibt. Bevor Sie
                  entscheiden, ob eine Zusammenarbeit für Sie passt, sollten Sie
                  wissen, mit wem Sie es zu tun haben. Nicht nur beruflich,
                  sondern auch als Mensch. Diese Seite gibt Ihnen genau das:
                  einen ehrlichen Einblick – in meinen Werdegang, meine
                  Arbeitsweise und das, was mich antreibt.
                </p>
              </div>

              <div>
                <Image
                  src="/Offen_laecheln.png"
                  alt="Marcus Holzheimer"
                  width={1080}
                  height={1080}
                  priority
                  className="w-full h-auto rounded-lg border-[3px] border-denver-blue shadow-[4px_4px_0px_0px_#FF9B01]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
