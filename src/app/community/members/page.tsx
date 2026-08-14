import type { Metadata } from "next";
import InlineContactSection from "@/components/InlineContactSection";

export const metadata: Metadata = {
  title: "Member-Bereich – MH3-EAZEE Community | MH3 LearnCon",
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

          <p className="text-body text-brand-text mt-8">
            Dieser Bereich der Website ist in Vorbereitung. Perspektivisch
            findest du hier Workshop-Materialien und weitere Ressourcen.
          </p>

          <p className="text-body text-brand-text mt-6">
            Die Community selbst läuft auf Circle — als Mitglied kommst du dort
            jederzeit rein.
          </p>

          <p className="mt-6">
            <a
              href="https://mh3-eazee.circle.so"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-orange font-semibold hover:text-denver-blue transition-colors"
            >
              Zur MH3-EAZEE Community ↗
            </a>
          </p>
        </div>
      </section>

      <InlineContactSection />
    </div>
  );
}
