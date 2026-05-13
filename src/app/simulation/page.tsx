import type { Metadata } from "next";
import HeroImagePlaceholder from "@/components/HeroImagePlaceholder";

export const metadata: Metadata = {
  title:
    "Management Simulation für Teams und Führungskräfte | Marcus Holzheimer",
  description:
    "Management Simulation für 6 bis 48 Teilnehmende: Teambuilding, Assessment-Alternative, Führungskräfteentwicklung — mit konkretem Transfer ins Tagesgeschäft. Weltweit über 5.800 Teilnehmende, über 600 in meinen Durchführungen. Deutsch und englisch.",
};

export default function SimulationPage() {
  return (
    <div className="animate-fade-in">
      {/* ── Abschnitt 1: Hero ─────────────────────────────────────── */}
      <section className="bg-white min-h-[60vh] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-h1 font-extrabold text-brand-text leading-tight">
                Management Simulation für Teams und Führungskräfte
              </h1>

              <p className="text-xl font-semibold text-orange">
                Wenn Sie sehen wollen, wie Ihr Team und Sie wirklich
                funktionieren.
              </p>

              <p className="text-body text-brand-text leading-relaxed max-w-lg">
                Ich bin professioneller Simulant — das klingt ungewöhnlich,
                und genau das ist es auch. Die computergestützte Management
                Simulation zeigt Verhaltensmuster, die in keinem Meeting und
                keiner Selbsteinschätzung sichtbar werden. Ihre Teams managen
                unter realistischem Druck einen virtuellen Freizeitpark und
                erleben dabei Führung, Zusammenarbeit und Entscheidungsdruck
                als Werkzeug, nicht als Theorie. Für 6 bis 48 Teilnehmende,
                als Halbtages- oder Mehrtagesformat, auf Deutsch und Englisch.
              </p>
            </div>

            <div>
              <HeroImagePlaceholder label="Bild Simulation-Hero folgt" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
