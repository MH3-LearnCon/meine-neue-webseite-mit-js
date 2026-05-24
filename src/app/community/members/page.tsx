import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member-Bereich – MH3-EAZEE Community | Marcus Holzheimer",
  description: "Der geschützte Mitgliederbereich der MH3-EAZEE Community.",
  robots: { index: false, follow: false },
};

export default function CommunityMembersPage() {
  return (
    <div className="animate-fade-in">
      <section className="bg-white pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 font-extrabold text-brand-text leading-tight">
            Member-Bereich.
          </h1>

          <p className="text-base leading-relaxed text-brand-text mt-8">
            Der Mitgliederbereich ist in Vorbereitung. Aktuelle Mitglieder
            erhalten den Zugang per E-Mail, sobald er live ist. Wenn du noch kein
            Mitglied bist und Interesse an der MH3-EAZEE Community hast, sprich
            mich an.
          </p>

          <p className="text-center mt-10 md:mt-12">
            <a
              href="tel:+491718820277"
              className="text-3xl md:text-4xl font-bold text-denver-blue transition-opacity hover:opacity-80"
            >
              0171 88 202 77
            </a>
          </p>

          <p className="text-center mt-4">
            <a
              href="https://calendly.com/mh-learncon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange font-semibold hover:text-denver-blue transition-colors"
            >
              Termin für ein persönliches Gespräch vereinbaren →
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
