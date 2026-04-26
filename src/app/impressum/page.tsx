import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Marcus Holzheimer",
  description: "Impressum der MH3 LearnCon GmbH",
};

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-fade-in">
      <h1 className="text-h1 font-extrabold text-brand-text mb-8">Impressum</h1>

      <section className="space-y-4 text-body text-brand-text">
        <div>
          <h2 className="font-semibold text-lg mb-1">Angaben gemäß § 5 TMG</h2>
          <p>
            MH3 LearnCon GmbH
            <br />
            Grafenberger Allee 60
            <br />
            40237 Düsseldorf
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-1">Kontakt</h2>
          <p>
            Telefon:{" "}
            <a
              href="tel:+491718820277"
              className="text-orange font-semibold hover:text-orange-600 transition-colors"
            >
              0171 88 202 77
            </a>
            <br />
            E-Mail:{" "}
            <a
              href="mailto:kontakt@mh-learncon.com"
              className="hover:text-orange transition-colors"
            >
              kontakt@mh-learncon.com
            </a>
          </p>
        </div>

        <p className="italic text-brand-gray-dark">
          Weitere Angaben (Handelsregister, USt-IdNr., Verantwortlicher) folgen.
        </p>
      </section>
    </div>
  );
}
