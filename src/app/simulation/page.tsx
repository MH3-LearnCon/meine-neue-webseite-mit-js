import type { Metadata } from "next";
import HeroImagePlaceholder from "@/components/HeroImagePlaceholder";
import SituationCard from "@/components/SituationCard";

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

      {/* ── Abschnitt 2: Anwendungsfälle (5 SituationCards) ────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text mb-8 md:mb-10 leading-snug">
            Fünf Situationen, in denen die Management Simulation den Unterschied
            macht.
          </h2>

          <div className="flex flex-col gap-10 md:gap-12">
            <SituationCard
              headline="Sie wollen Potenziale sichtbar machen — unter echtem Druck, nicht auf dem Papier?"
              body="Assessment-Center und Selbsteinschätzungen zeigen, was Menschen über sich sagen. Die Simulation zeigt, wie sie tatsächlich handeln – unter Zeitdruck, mit unvollständigen Informationen und im Team. Wer übernimmt Verantwortung? Wer kommuniziert klar? Wer verliert den Überblick? Diese Erkenntnisse sind für Ihr Talent-Programm wertvoller als jeder Fragebogen."
            />
            <SituationCard
              headline="Zwei Teams sollen eins werden — und der Kletterpark reicht nicht?"
              body="Nach Reorganisationen, Fusionen oder Umstrukturierungen müssen Teams zusammenwachsen, die sich kaum kennen. Die Simulation erzeugt echte Zusammenarbeit unter realistischem Druck – und macht Dynamiken sichtbar, die in einem normalen Workshop verborgen bleiben. Am Ende des Tages haben Ihre Teams eine gemeinsame Erfahrung, über die sie noch Monate sprechen."
            />
            <SituationCard
              headline="Wie agieren Ihre Führungskräfte unter Druck — und was erkennen Mitarbeitende über sich selbst?"
              body="Nicht wie sie es in Gesprächen beschreiben, sondern wie sie es tun. Die Simulation macht sichtbar, wo Führungsstärken liegen, wie Teams unter Druck zusammenarbeiten und wie jede Person ihre eigene Rolle im Team wahrnimmt — und von anderen wahrgenommen wird. Eingesetzt vor und nach Entwicklungsprogrammen wird Veränderung messbar und für alle Beteiligten spürbar."
            />
            <SituationCard
              headline="Neue Teams, neue Projekte — und alle sollen vom gleichen Verständnis ausgehen?"
              body="Die Simulation schafft in wenigen Stunden ein gemeinsames Verständnis für Zusammenarbeit, Kommunikation und Prioritäten. Neue Mitarbeitende erleben die Unternehmenskultur live statt auf PowerPoint-Folien. Bestehende Teams kalibrieren sich neu – bevor das eigentliche Projekt startet."
            />
            <SituationCard
              headline="Sie planen ein Event für Ihr Team oder Ihre Partner — und wollen mehr als Unterhaltung?"
              body="Die Simulation macht Spaß – das sagen alle, die sie erlebt haben. Gleichzeitig nehmen die Teilnehmenden konkrete Erkenntnisse mit, die über den Tag hinaus wirken. Für Vertriebsteams, Handelspartner oder Netzwerkveranstaltungen: Sie stehen als Gastgeber gut da, weil das Event mehr bietet als ein netter Abend."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
