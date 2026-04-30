import type { Metadata } from "next";
import HeroImagePlaceholder from "@/components/HeroImagePlaceholder";

export const metadata: Metadata = {
  title: "Führung | Marcus Holzheimer",
  description:
    "Führung ist kein Talent – Führung ist ein Handwerk. Praxiserprobte Methoden, klarer Blick auf Ihre Situation, über 20 Jahre Erfahrung mit Führungskräften.",
};

export default function FuehrungPage() {
  return (
    <div className="animate-fade-in">
      {/* ── Abschnitt 1: Hero ─────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text-Spalte */}
            <div className="flex flex-col gap-6">
              <h1 className="text-h1 font-extrabold text-brand-text leading-tight">
                Führung ist kein Talent – Führung ist ein Handwerk.
              </h1>
              <p className="text-body text-brand-gray-dark leading-relaxed max-w-lg">
                Gute Führungskräfte werden selten auf ihre Rolle vorbereitet.
                Die meisten steigen über die Fachlaufbahn auf, bewähren sich
                fachlich – und stehen dann vor Aufgaben, für die ihnen die
                Werkzeuge fehlen. Genau hier setze ich an: mit praxiserprobten
                Methoden, einem klaren Blick auf Ihre Situation und der
                Erfahrung aus über 20 Jahren Arbeit mit Führungskräften aller
                Ebenen.
              </p>
            </div>

            {/* Bild-Platzhalter */}
            <div>
              <HeroImagePlaceholder label="Bild Führung-Hero folgt" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
