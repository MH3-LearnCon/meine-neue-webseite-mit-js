import type { Metadata } from "next";
import HeroImagePlaceholder from "@/components/HeroImagePlaceholder";
import { ProcessSteps } from "@/components/ProcessSteps";
import ShopvoteBadge from "@/components/ShopvoteBadge";
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

          <div className="mx-auto max-w-4xl space-y-6">
            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-[2px_2px_0px_0px_#FF9B01] md:p-8">
              <div className="flex items-start gap-4 md:gap-6">
                <span className="text-5xl md:text-6xl font-bold text-denver-blue leading-none shrink-0 min-w-[3rem] md:min-w-[4rem]">
                  1
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-brand-text">
                    Das Szenario
                  </h3>
                  <p className="text-base text-brand-text leading-relaxed">
                    Bis zu acht Teams übernehmen das Management identischer
                    Freizeitparks. Störungen werden per Computer generiert – alle
                    Entscheidungen treffen die Teilnehmenden selbst, mit
                    haptischen Spielelementen: Karten, Handbücher, ein
                    Echtzeit-Dashboard, das jede Auswirkung sofort sichtbar
                    macht.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-[2px_2px_0px_0px_#FF9B01] md:p-8">
              <div className="flex items-start gap-4 md:gap-6">
                <span className="text-5xl md:text-6xl font-bold text-denver-blue leading-none shrink-0 min-w-[3rem] md:min-w-[4rem]">
                  2
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-brand-text">
                    Der Ablauf
                  </h3>
                  <p className="text-base text-brand-text leading-relaxed">
                    Mehrere Spielrunden, unterbrochen von Reflexionsphasen. In
                    jeder Runde steigt der Druck. In jeder Reflexion arbeiten
                    die Teilnehmenden mit mir an konkreten Erkenntnissen –
                    abgestimmt auf die Lernziele, die Sie als Unternehmen
                    vorgeben.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-[2px_2px_0px_0px_#FF9B01] md:p-8">
              <div className="flex items-start gap-4 md:gap-6">
                <span className="text-5xl md:text-6xl font-bold text-denver-blue leading-none shrink-0 min-w-[3rem] md:min-w-[4rem]">
                  3
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-brand-text">
                    Die Rollen
                  </h3>
                  <p className="text-base text-brand-text leading-relaxed">
                    Jedes Team besetzt vier Positionen – Management, Leitstand,
                    technischer Support und operatives Geschäft. Wer welche
                    Rolle übernimmt, lässt sich gezielt steuern: Führungskräfte
                    können bewusst das Ruder abgeben, Nachwuchskräfte bewusst
                    Verantwortung übernehmen.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-[2px_2px_0px_0px_#FF9B01] md:p-8">
              <div className="flex items-start gap-4 md:gap-6">
                <span className="text-5xl md:text-6xl font-bold text-denver-blue leading-none shrink-0 min-w-[3rem] md:min-w-[4rem]">
                  4
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-brand-text">
                    Das Ergebnis
                  </h3>
                  <p className="text-base text-brand-text leading-relaxed">
                    Die Teams, die am konsequentesten kommunizieren,
                    priorisieren und Prozesse optimieren, liefern die besten
                    Ergebnisse. Das ist im Spiel so – und im Tagesgeschäft
                    genauso.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 5: Kennzahlen und Preise ────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text mb-8 md:mb-10 leading-snug">
            Zahlen, Rahmen und Investition.
          </h2>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-10">
              <div className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <article className="bg-white border border-brand-gray-mid-light rounded-lg shadow-sm p-6 md:p-8 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-orange">
                      5.800+
                    </div>
                    <div className="text-sm md:text-base text-brand-text mt-2">
                      Teilnehmende weltweit
                    </div>
                  </article>
                  <article className="bg-white border border-brand-gray-mid-light rounded-lg shadow-sm p-6 md:p-8 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-orange">
                      600+
                    </div>
                    <div className="text-sm md:text-base text-brand-text mt-2">
                      in meinen Simulationen
                    </div>
                  </article>
                  <article className="bg-white border border-brand-gray-mid-light rounded-lg shadow-sm p-6 md:p-8 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-orange">
                      6 – 48
                    </div>
                    <div className="text-sm md:text-base text-brand-text mt-2">
                      pro Veranstaltung
                    </div>
                  </article>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
                  <article className="bg-white border border-brand-gray-mid-light rounded-lg shadow-sm p-6 md:p-8 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-orange">
                      ½ – 2 Tage
                    </div>
                    <div className="text-sm md:text-base text-brand-text mt-2">
                      flexibles Format
                    </div>
                  </article>
                  <article className="bg-white border border-brand-gray-mid-light rounded-lg shadow-sm p-6 md:p-8 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-orange">
                      DE / EN
                    </div>
                    <div className="text-sm md:text-base text-brand-text mt-2">
                      zwei Sprachen
                    </div>
                  </article>
                </div>
              </div>

              <p className="text-base text-brand-text leading-relaxed">
                Die Tagessätze für die Management Simulation orientieren sich an der
                Gruppengröße. Sie sind als empfohlene Preise des Lizenzgebers zu
                verstehen — ich berate Sie gern, welches Format und welcher Umfang
                zu Ihrem Ziel passen.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <div className="max-w-xl mx-auto overflow-x-auto">
                <table className="w-full min-w-[280px] border-collapse">
                  <thead>
                    <tr className="border-b-2 border-denver-blue">
                      <th className="text-left py-3 px-4 text-brand-text font-bold">
                        Teilnehmende
                      </th>
                      <th className="text-right py-3 px-4 text-brand-text font-bold">
                        Tagessatz (netto)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-gray-mid-light">
                      <td className="py-3 px-4 text-brand-text">6 – 24</td>
                      <td className="py-3 px-4 text-right font-semibold text-denver-blue">
                        3.750 €
                      </td>
                    </tr>
                    <tr className="border-b border-brand-gray-mid-light">
                      <td className="py-3 px-4 text-brand-text">25 – 35</td>
                      <td className="py-3 px-4 text-right font-semibold text-denver-blue">
                        4.450 €
                      </td>
                    </tr>
                    <tr className="border-b border-brand-gray-mid-light">
                      <td className="py-3 px-4 text-brand-text">36 – 48</td>
                      <td className="py-3 px-4 text-right font-semibold text-denver-blue">
                        5.250 €
                      </td>
                    </tr>
                    <tr className="border-b border-brand-gray-mid-light">
                      <td className="py-3 px-4 text-brand-text">49+</td>
                      <td className="py-3 px-4 text-right font-semibold text-denver-blue">
                        Auf Anfrage
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="max-w-xl mx-auto text-base text-brand-text leading-relaxed">
                <p className="font-bold mb-2">Im Tagessatz enthalten:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Vorgespräch zur Klärung Ihrer Lernziele und Rahmenbedingungen
                  </li>
                  <li>
                    individuelle Anpassung der Drehbücher und Spielszenarien
                  </li>
                  <li>die gesamte IT-Hardware und das Spielmaterial</li>
                  <li>persönliche Durchführung und Moderation durch mich</li>
                  <li>Reflexionsphasen mit Transfer ins Tagesgeschäft</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 border-l-[3px] border-orange bg-white p-4 md:p-5">
              <p className="text-base leading-relaxed text-brand-text">
                <span className="font-semibold">Zum Vergleich:</span>{" "}
                Ein klassisches Training für 12 Teilnehmende erfordert bei 48 Personen vier
                separate Termine — mit jeweils eigenem Trainerhonorar, Raumkosten und
                Organisationsaufwand. Die Management Simulation bildet alle 48
                Teilnehmenden in einer einzigen Veranstaltung aus. Das spart Zeit,
                reduziert Organisationsaufwand und erzeugt eine gemeinsame Erfahrung,
                die separate Trainings nicht leisten können.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 6: Das offene Kennenlern-Event ───────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text mb-8 md:mb-10 leading-snug">
            Das offene Kennenlern-Event
          </h2>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-brand-text">
              Einmal im Jahr mache ich die Simulation öffentlich zugänglich.
            </p>

            <p className="text-base leading-relaxed text-brand-text">
              Die Management Simulation lässt sich beschreiben – aber
              beschreiben und erleben sind zwei verschiedene Dinge. Sie können
              auf dieser Seite lesen, wie das Format funktioniert, was es kostet
              und für welche Situationen es sich eignet. Was Sie nicht lesen
              können, ist, wie es sich anfühlt, wenn ein Team unter Druck
              zusammenwächst oder auseinanderfällt – und wie viel davon sich auf
              den Arbeitsalltag übertragen lässt.
            </p>
          </div>

          <blockquote className="my-6 ml-10 mr-8 border-l-4 border-denver-blue py-3 pl-6">
            <p className="text-xl font-medium leading-relaxed text-brand-text">
              Manche Formate muss man sehen, um sie zu verstehen. Genau dafür
              gibt es dieses eine Event im Jahr.
            </p>
          </blockquote>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-brand-text">
              Einmal im Jahr organisiere ich deshalb eine offene Management
              Simulation: einen vollen Tag, echte Spielbedingungen, gemischte
              Teilnehmende aus unterschiedlichen Unternehmen und Branchen. Es ist
              die Gelegenheit, das Format selbst zu durchlaufen – als
              Teilnehmender, nicht als Zuschauer –, bevor Sie entscheiden, ob und
              wie Sie es für Ihr Team einsetzen.
            </p>

            <p className="text-base leading-relaxed text-brand-text">
              Ich halte die Runde bewusst klein und gemischt – Menschen aus
              unterschiedlichen Branchen und Hintergründen, die eines verbindet:
              Sie wollen das Format mit eigenen Augen sehen, bevor sie es
              einsetzen oder weiterempfehlen. Wenn Sie dabei sein möchten,
              lassen Sie uns kurz sprechen – dann finden wir gemeinsam heraus,
              ob der Termin für Sie passt.
            </p>
          </div>

          <a
            href="#kontakt"
            className="mt-6 block text-base font-semibold text-orange transition-colors duration-200 hover:text-denver-blue"
          >
            Sprechen Sie mich an →
          </a>
        </div>
      </section>

      {/* ── Abschnitt 7: So kommen wir ins Gespräch ───────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text mb-8 md:mb-10 leading-snug">
            So kommen wir ins Gespräch.
          </h2>

          <ProcessSteps
            steps={[
              {
                step: 1,
                title: "Kennenlerngespräch.",
                body: "Sie rufen an oder buchen einen Termin. Im Erstgespräch erkläre ich Ihnen das Format, beantworte Ihre Fragen und höre zu: Was ist Ihr Anlass, was soll die Simulation bei Ihnen leisten? Ziel ist, gemeinsam einzuschätzen, ob und wie das Format zu Ihrem Vorhaben passt.",
              },
              {
                step: 2,
                title: "Konzept und Abstimmung.",
                body: "Wenn die Simulation der richtige Weg ist, stimmen wir die Details ab: Gruppengröße, Format und Dauer, vor allem Ihre Lernziele. Auf dieser Basis passe ich Drehbücher, Spielszenarien und Reflexionsphasen an Ihre Situation an – damit die Veranstaltung nicht generisch wird, sondern auf Ihr Ziel einzahlt.",
              },
              {
                step: 3,
                title: "Durchführung und Transfer.",
                body: "Ich leite die Simulation persönlich – von der Vorbereitung bis zum letzten Reflexionsgespräch. Und ich bringe alles mit: die gesamte Technik, die Laptops, das Spielmaterial. Sie stellen den Raum mit Tischen und Stühlen, um alles Weitere kümmere ich mich. In den Pausen zwischen den Spielrunden arbeiten wir an konkreten Erkenntnissen, die Ihre Teilnehmenden mit in den Arbeitsalltag nehmen. Wer mich beauftragt, bekommt mich.",
              },
            ]}
          />

          <div className="mt-10 border-l-[3px] border-orange bg-white p-4 md:p-5">
            <p className="text-base leading-relaxed text-brand-text">
              <span className="font-semibold">
                Ein Hinweis zur Auftraggeber-Dynamik:
              </span>{" "}
              Oft entdeckt jemand die Simulation, der nicht selbst über das
              Budget entscheidet – eine Führungskraft beim offenen Event, eine
              Person aus der Personalentwicklung, ein Teamleiter mit einer
              konkreten Idee. Das ist gut so. Ich helfe Ihnen, das Format intern
              überzeugend zu vertreten, und stimme den Auftrag am Ende mit der
              verantwortlichen Ebene ab. So entsteht eine Veranstaltung, die für
              alle Beteiligten trägt.
            </p>
          </div>

          <p className="mt-6 text-base leading-relaxed text-brand-text">
            Ein letzter Gedanke: Die Management Simulation ist kein fertiges
            Produkt von der Stange, sondern ein Werkzeug. Ob Teambuilding,
            Führungskräfteentwicklung, das Zusammenwachsen zweier Bereiche oder
            ein Event mit Tiefgang – dasselbe Format trägt sehr unterschiedliche
            Ziele. Welches Ihres ist, klären wir im Gespräch.
          </p>
        </div>
      </section>

      {/* ── Abschnitt 8: Shopvote ─────────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <div className="w-full min-w-0 lg:w-[60%]">
              <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug mb-6 md:mb-8 lg:whitespace-nowrap">
                Was meine Klientinnen und Klienten sagen.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-text">
                Empfehlungen sind die Grundlage meiner Arbeit. „Tue Gutes – und
                rede darüber" – da mir das schwerfällt, bevorzuge ich: „Tue
                Gutes – und lass darüber reden."
              </p>
              <blockquote className="my-6 ml-10 mr-8 border-l-4 border-denver-blue py-3 pl-6">
                <p className="text-xl font-medium leading-relaxed text-brand-text lg:whitespace-nowrap">
                  Über 65 verifizierte Bewertungen — 5 von 5 Sternen.
                </p>
              </blockquote>
              <p className="text-base leading-relaxed text-brand-text">
                Alle Bewertungen werden von Shopvote unabhängig geprüft – hier
                schreiben echte Klientinnen und Klienten über ihre Erfahrungen.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-text">
                Das Widget zeigt die Bewertungen der letzten Wochen. Alle
                Bewertungen sind auf shopvote.de einsehbar.
              </p>
              <p className="mt-4">
                <a
                  href="https://www.shopvote.de/bewertung_mh_learncon_com_21607.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange font-semibold hover:text-denver-blue transition-colors"
                >
                  Alle Bewertungen ansehen →
                </a>
              </p>
            </div>

            <div className="mx-auto mt-10 flex w-full min-w-[250px] flex-row items-center justify-center lg:mx-0 lg:mt-0 lg:w-[45%]">
              <ShopvoteBadge />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
