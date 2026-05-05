import type { Metadata } from "next";
import HeroImagePlaceholder from "@/components/HeroImagePlaceholder";
import SituationCard from "@/components/SituationCard";
import HexagonBullet from "@/components/icons/HexagonBullet";
import OfferCard from "@/components/OfferCard";

export const metadata: Metadata = {
  title:
    "Karriereberatung für Fach- und Führungskräfte – Strategie statt Lebenslauf | Marcus Holzheimer",
  description:
    "Berufliche Neuorientierung, Karrierestrategie und Bewerbungsberatung für erfahrene Fach- und Führungskräfte. Nicht mehr Bewerbungen, sondern mehr unterschriftsreife Verträge. Düsseldorf und online.",
};

export default function KarrierePage() {
  return (
    <div className="animate-fade-in">
      {/* ── Abschnitt 1: Hero ─────────────────────────────────────── */}
      <section className="bg-white min-h-[60vh] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-h1 font-extrabold text-brand-text leading-tight">
                Karriereberatung für Fach- und Führungskräfte
              </h1>

              <p className="text-2xl font-semibold text-orange tracking-wide">
                Karriere ist kein Zufall – Karriere ist eine Entscheidung.
              </p>

              <p className="text-body text-brand-text leading-relaxed max-w-lg">
                Die meisten Menschen gehen ihre Karriere reaktiv an: Sie
                bewerben sich auf ausgeschriebene Stellen, verlassen sich auf
                Hörensagen und hoffen, dass es passt. Das geht auch anders. Ich
                unterstütze Sie dabei, Ihren nächsten Schritt strategisch zu
                planen – mit einem klaren Ziel, einem realistischen Weg und dem
                Ergebnis, das zählt: ein unterschriftsreifer Vertrag, der zu
                Ihnen passt.
              </p>
            </div>

            <div>
              <HeroImagePlaceholder label="Bild Karriere-Hero folgt" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 2: SituationCards ───────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text mb-10 md:mb-12 leading-snug">
            Wo stehen Sie gerade?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <SituationCard
              headline="Sie wissen, was Sie wollen – und suchen den Weg dorthin."
              body="Sie haben einen guten Job und verdienen gut. Gleichzeitig spüren Sie: Da geht mehr. Das Ziel ist im Grunde klar – nur der Weg dorthin ist es noch nicht. Sie verschicken Bewerbungen auf ausgeschriebene Stellen, statt Ihre Karriere aktiv zu gestalten. Was Ihnen fehlt, ist ein strukturierter Prozess mit klaren Schritten und Meilensteinen. Oft reicht genau das, um den Unterschied zu machen."
            />
            <SituationCard
              headline="Sie wissen, dass sich etwas ändern muss – nur noch nicht, was genau."
              body="Die Unzufriedenheit ist da, das Ziel noch nicht. Bevor Sie den nächsten Schritt planen können, brauchen Sie Klarheit darüber, wohin es eigentlich gehen soll. Das klingt nach einer großen Frage – und ist es auch. Gleichzeitig lässt sie sich systematisch beantworten. Ich arbeite mit Ihnen zuerst am WAS, bevor wir über das WIE sprechen."
            />
            <SituationCard
              headline="Sie sind eigentlich am richtigen Ort – und trotzdem unzufrieden."
              body="Das Unternehmen passt, die Vergütung stimmt, und trotzdem fehlt etwas – die Führungskraft, die Aufgaben oder beides. Der erste Impuls ist oft: weg hier. Das Risiko dabei: vom Regen in die Traufe. Gemeinsam gehen wir systematisch durch, was sich im aktuellen Umfeld verändern lässt und was einen Wechsel tatsächlich rechtfertigt. Damit Sie eine Entscheidung treffen, die in drei Jahren noch die richtige ist."
            />
            <SituationCard
              headline="Sie stehen vor einem ungewollten Umbruch – und wollen ihn professionell gestalten."
              body="Nach einer Umstrukturierung oder Trennung stehen erfahrene Führungskräfte vor einer Situation, die sie seit Jahren nicht mehr kannten: sich beruflich neu orientieren. Dazu kommt: Der Markt hat sich verändert, die Bewerbungsprozesse ebenfalls, und Diskretion ist entscheidend. Ich kenne die Outplacement-Branche aus der Insider-Perspektive – als ehemaliger Auftraggeber und als Berater. Diese Erfahrung ermöglicht mir eine ehrliche Einschätzung Ihrer Optionen. Stundenbasiert, ohne Paketpreis und ohne Laufzeitbindung."
            />
          </div>

          <p className="text-xl font-medium text-brand-text mt-14 mb-4 text-center">
            Wenn Sie sich in einer dieser Situationen wiederfinden — dann lohnt
            sich ein Gespräch.
          </p>
        </div>
      </section>

      {/* ── Abschnitt 3: Abgrenzung ──────────────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Warum ich Karriere anders angehe als die meisten.
          </h2>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-brand-text">
              Mein Hintergrund ist ein anderer: Ich war selbst internationale
              Führungskraft mit eigenen Teams, habe als Auftraggeber
              Einstellungsentscheidungen getroffen und kenne den
              Bewerbungsprozess von der Seite, die Bewerber:innen normalerweise
              nicht sehen. Diese Perspektive macht einen Unterschied – weil ich
              Ihnen erklären kann, wie Entscheider:innen tatsächlich denken und
              worauf es in der Praxis ankommt.
            </p>
          </div>

          <blockquote className="my-6 ml-10 mr-8 border-l-4 border-denver-blue py-3 pl-6">
            <p className="text-xl font-medium leading-relaxed text-brand-text">
              „Viele Karriereberater:innen starten beim Lebenslauf. Ich starte
              beim Menschen."
            </p>
          </blockquote>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-brand-text">
              Ich arbeite nach derselben Grundlogik wie in meinen Führungs- und
              Vertriebsprojekten: Zuerst verstehe ich Ihre Situation – durch
              Zuhören, Fragen und eine saubere Bedarfsanalyse. Dann zerlege ich
              die Komplexität in handhabbare Schritte und wähle die Werkzeuge,
              die zu Ihrer Situation passen. In jedem Schritt prüfe ich, wo
              digitale Werkzeuge und KI den Prozess unterstützen können.
            </p>

            <p className="text-base leading-relaxed text-brand-text">
              Dazu gehört, jeden Schritt vorauszudenken: Wie reagiert der
              Arbeitgeber auf diese Forderung? Was passiert, wenn das Gespräch
              anders verläuft als geplant? Welche Alternativen haben Sie? Und
              wenn ich sehe, dass ein Weg mehr Risiko birgt, als er auf den
              ersten Blick vermuten lässt, sage ich Ihnen das – klar und
              konstruktiv.
            </p>

            <p className="text-base leading-relaxed text-brand-text">
              Die Beratung findet wahlweise persönlich in Düsseldorf oder online
              statt. Online ist dabei kein Kompromiss – Teleprompter für
              durchgängigen Blickkontakt, Echtzeit-Visualisierung und
              professionelle Studio-Qualität sorgen dafür, dass die
              Beratungsqualität mindestens gleichwertig ist. Viele meiner
              Klientinnen und Klienten – auch aus der Region – bevorzugen
              Online, weil es besser in ihren Alltag passt.
            </p>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 4: Themen ──────────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug">
            Themen, die in meiner Karriereberatung regelmäßig vorkommen.
          </h2>

          <ul
            className="mt-8 grid grid-cols-1 list-none gap-4 p-0 m-0 md:grid-cols-2"
            role="list"
          >
            {[
              "Berufliche Neuorientierung und die Frage \u201EWas will ich eigentlich?\u201C",
              "Bewerbungsstrategie und aktive Karrieregestaltung statt reaktiver Bewerbung",
              "Positionierung und Selbstmarketing im Bewerbungsprozess",
              "Gehaltsverhandlung und Vertragsgestaltung",
              "Karriereplanung über den nächsten Schritt hinaus",
              "Umgang mit Umstrukturierung und Trennung",
              "Einschätzung von Outplacement-Angeboten",
            ].map((label) => (
              <li
                key={label}
                className="flex items-start gap-3 rounded-lg border border-brand-gray-mid-light bg-white px-4 py-3 shadow-sm"
              >
                <HexagonBullet size={12} className="mt-1.5 shrink-0 text-orange" />
                <span className="text-base leading-relaxed text-brand-text">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base leading-relaxed text-brand-text">
            Was davon relevant ist, zeigt das Erstgespräch. Manchmal steht das
            Thema von Anfang an fest. Manchmal stellt sich heraus, dass der
            eigentliche Hebel woanders liegt – und dann starten wir dort.
          </p>
        </div>
      </section>

      {/* ── Abschnitt 5: Formate / OfferCards ────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Zwei Wege, mit mir zu starten.
          </h2>

          <p className="text-base leading-relaxed text-brand-text mb-8 md:mb-10">
            Ob als Einstieg in Eigenregie oder als angeleiteter Kurs – der Weg
            richtet sich nach Ihrer Situation.
          </p>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <OfferCard
              title="Der Standard-Bewerbungsprozess – 0-Euro-Kurs"
              ctaHref="#"
              ctaText="Zum 0-Euro-Kurs →"
            >
              Sie wollen sich zunächst ein eigenes Bild machen, bevor Sie mich
              kontaktieren? Dieser Kurs zeigt Ihnen, wie die meisten
              Bewerber:innen vorgehen – und welche Fehler sich dabei
              wiederholen. Mit dem begleitenden Workbook ordnen Sie Ihre eigene
              Situation ein. Sofort verfügbar.
            </OfferCard>

            <OfferCard
              title={
                "\u201EFinde dein Was\u201C \u2013 wenn das Ziel noch fehlt"
              }
              ctaHref="#"
              ctaText="Mehr erfahren →"
            >
              Sie wissen, dass sich etwas ändern muss, nur noch nicht, was
              genau? Dieser Kurs unterstützt Sie dabei, Klarheit über Ihre
              berufliche Richtung zu gewinnen – als eigenständiger Schritt
              oder als Vorbereitung auf die Zusammenarbeit mit mir.
            </OfferCard>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 6: Der Weg zur Zusammenarbeit ──────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug">
            So kommen wir ins Gespräch.
          </h2>

          <div className="mt-10 flex flex-col">
            {[
              {
                step: 1,
                title: "Kennenlerngespräch.",
                body: "Sie rufen an oder buchen einen Termin. Im Erstgespräch höre ich zu, stelle Fragen und gebe Ihnen eine erste Einschätzung. Ziel ist, den eigentlichen Bedarf zu verstehen \u2013 manchmal ist das Thema sofort klar, manchmal braucht es einen genaueren Blick.",
              },
              {
                step: 2,
                title: "Klarer Plan.",
                body: "Wenn eine Zusammenarbeit Sinn ergibt, entwickle ich mit Ihnen einen individuellen Fahrplan: Welche Schritte, in welcher Reihenfolge, mit welchem Ziel.",
              },
              {
                step: 3,
                title: "Umsetzung.",
                body: "Ob Einzelberatung, Kurs oder Kombination \u2013 Sie entscheiden, wie intensiv und wie lange. Stundenbasiert, jederzeit pausierbar, ohne Paketpreis und ohne Laufzeitbindung.",
              },
            ].map(({ step, title, body }, index) => (
              <div key={step}>
                <div className="flex items-center gap-8 md:gap-16">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-denver-blue bg-white shadow-[2px_2px_0px_0px_#FF9B01] md:h-16 md:w-16"
                    aria-hidden="true"
                  >
                    <span className="text-xl font-semibold text-denver-blue">
                      {step}
                    </span>
                  </div>
                  <div className="min-w-0 max-w-prose flex-1">
                    <p className="text-base font-semibold text-brand-text md:text-lg">
                      {title}
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-brand-text">
                      {body}
                    </p>
                  </div>
                </div>
                {index < 2 ? (
                  <div className="flex gap-4 md:gap-6">
                    <div className="flex w-12 shrink-0 justify-center py-4 md:w-16">
                      <div
                        className="w-0.5 min-h-12 shrink-0 bg-denver-blue"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-brand-gray-mid-light bg-white px-6 py-4">
            <p className="text-sm leading-relaxed text-brand-gray-dark">
              <span className="font-semibold text-brand-text">
                Gut zu wissen:
              </span>{" "}
              Die Investition in eine professionelle Karriereberatung lässt sich
              in der Regel als Werbungskosten steuerlich geltend machen.
              Sprechen Sie dazu mit Ihrer Steuerberaterin oder Ihrem
              Steuerberater.
            </p>
          </div>

          <p className="mt-10 text-base leading-relaxed text-brand-text">
            Zwei Dinge sind mir wichtig: Wenn jemand anderes besser zu Ihnen
            passt, sage ich Ihnen das. Und wenn ein kurzes Gespräch reicht, um
            Ihre Frage zu klären, tun wir genau das – und Sie gehen mit einer
            Lösung nach Hause.
          </p>
        </div>
      </section>
    </div>
  );
}
