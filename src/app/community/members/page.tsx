import type { Metadata } from "next";
import InlineContactSection from "@/components/InlineContactSection";

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
        </div>
      </section>

      <InlineContactSection />
    </div>
  );
}
