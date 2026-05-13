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

      {/* ── Abschnitt 3: Was macht diese Simulation anders? ───────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text mb-8 md:mb-10 leading-snug">
            Werkzeug, nicht Programm. Transfer, nicht nur Erlebnis.
          </h2>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-brand-text">
              Es gibt andere Anbieter von Planspielen und Simulationen. Der
              Unterschied liegt nicht im Spiel selbst, sondern in dem, was
              drumherum passiert.
            </p>

            <p className="text-base leading-relaxed text-brand-text">
              Ich nutze die Simulation als Werkzeug – nicht als fertiges
              Programm. In den Pausen zwischen den Spielrunden arbeite ich mit
              Ihren Teilnehmenden an konkreten Erkenntnissen: Was ist gerade
              passiert? Was bedeutet das für den Alltag? Welche Handlungsidee
              nehmen Sie mit in den Montag danach?
            </p>
          </div>

          <blockquote className="my-6 ml-10 mr-8 border-l-4 border-denver-blue py-3 pl-6">
            <p className="text-xl font-medium leading-relaxed text-brand-text">
              Bei mir gehen sie mit konkreten Handlungsideen für ihren
              Arbeitsalltag nach Hause.
            </p>
          </blockquote>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-brand-text">
              Bei einem Standard-Planspiel gehen die Teilnehmenden mit einem
              guten Erlebnis nach Hause. Bei mir gehen sie mit konkreten
              Handlungsideen für ihren Arbeitsalltag nach Hause. Das ist der
              Unterschied – und der Grund, warum Unternehmen die Simulation
              wiederholt einsetzen.
            </p>

            <p className="text-base leading-relaxed text-brand-text">
              Und wie bei allen meinen Projekten gilt: Wer mich beauftragt,
              bekommt mich. Ich leite die Simulation persönlich, bereite sie
              individuell auf Ihre Lernziele vor und sorge für den Transfer ins
              Tagesgeschäft. Chef-Service, auch hier.
            </p>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 4: So funktioniert es ───────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text mb-8 md:mb-10 leading-snug">
            In 90 Sekunden erklärt.
          </h2>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-brand-text">
              <strong>Das Szenario:</strong> Bis zu acht Teams übernehmen das
              Management identischer Freizeitparks. Störungen werden per Computer
              generiert – alle Entscheidungen treffen die Teilnehmenden selbst,
              mit haptischen Spielelementen: Karten, Handbücher, ein
              Echtzeit-Dashboard, das jede Auswirkung sofort sichtbar macht.
            </p>

            <p className="text-base leading-relaxed text-brand-text">
              <strong>Der Ablauf:</strong> Mehrere Spielrunden, unterbrochen von
              Reflexionsphasen. In jeder Runde steigt der Druck. In jeder
              Reflexion arbeiten die Teilnehmenden mit mir an konkreten
              Erkenntnissen – abgestimmt auf die Lernziele, die Sie als
              Unternehmen vorgeben.
            </p>

            <p className="text-base leading-relaxed text-brand-text">
              <strong>Die Rollen:</strong> Jedes Team besetzt vier Positionen –
              Management, Leitstand, technischer Support und operatives
              Geschäft. Wer welche Rolle übernimmt, lässt sich gezielt steuern:
              Führungskräfte können bewusst das Ruder abgeben,
              Nachwuchskräfte bewusst Verantwortung übernehmen.
            </p>

            <p className="text-base leading-relaxed text-brand-text">
              <strong>Das Ergebnis:</strong> Die Teams, die am konsequentesten
              kommunizieren, priorisieren und Prozesse optimieren, liefern die
              besten Ergebnisse. Das ist im Spiel so – und im Tagesgeschäft
              genauso.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
