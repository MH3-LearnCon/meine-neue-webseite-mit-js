import type { Metadata } from "next";
import Link from "next/link";
import HeroImagePlaceholder from "@/components/HeroImagePlaceholder";
import OfferCard from "@/components/OfferCard";
import FuehrungAccordion from "@/components/FuehrungAccordion";
import ContactSection from "@/components/ContactSection";
import ShopvoteBadge from "@/components/ShopvoteBadge";
import HexagonBullet from "@/components/icons/HexagonBullet";
import SituationCard from "@/components/SituationCard";

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

      {/* ── Abschnitt 2: Vier Situationsbeschreibungen ────────────── */}
      <section className="bg-brand-gray-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="text-h2 font-semibold text-brand-text mb-10 md:mb-12 leading-snug">
            In welcher Situation sind Sie?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <SituationCard
              headline="Sie führen erfolgreich – und suchen einen Sparringspartner, der Ihre Sprache spricht?"
              body="Ihr Bereich läuft, Ihre Erfahrung ist fundiert. Gleichzeitig spüren Sie: Vorgaben von oben kommunizieren und umsetzen, Talente fördern trotz knapper Ressourcen, festgefahrene Strukturen aufbrechen – das ist anspruchsvoll, auch mit Erfahrung. Was fehlt, ist ein Gegenüber, das Ihre Realität kennt und auf Augenhöhe mitdenkt. Jemand, der nicht nur fragt, sondern auch eine Meinung hat."
            />
            <SituationCard
              headline="Sie wurden befördert – und merken, dass die neue Rolle andere Fähigkeiten verlangt?"
              body="Befördert zu werden ist eine Anerkennung. Gleichzeitig kann die neue Position Herausforderungen mit sich bringen, auf die niemand vorbereitet war: Entscheidungen unter Unsicherheit treffen, ein Team strukturieren, die eigene Führungskraft und die Mitarbeitenden gleichzeitig zufriedenstellen. Das lässt sich systematisch angehen – mit klaren Werkzeugen und einem Berater, der die Situation kennt, weil er sie selbst erlebt hat."
            />
            <SituationCard
              headline="Eine Ihrer Führungskräfte kommt an Grenzen – und Sie suchen eine diskrete Lösung?"
              body="Die Signale sind da: Mitarbeitende sind unzufrieden, Entscheidungen bleiben liegen, die Stimmung kippt. Sie sehen das Problem, wollen die Person gleichzeitig halten und entwickeln – und brauchen jemanden, der die Situation von außen einschätzt und professionell begleitet. Diskret, auf Augenhöhe mit beiden Seiten und mit dem Ziel, dass Ihre Führungskraft in ihrer Rolle ankommt."
            />
            <SituationCard
              headline="Sie wollen den nächsten Schritt machen – und sich professionell darauf vorbereiten?"
              body="Sie führen ein Team, die ersten Erfolge sind da, und Sie spüren: Da geht noch mehr. Der Wille zur Weiterentwicklung ist da – jetzt geht es darum, aus Intuition professionelles Handwerkszeug zu machen. Ob im Einzelgespräch, im Bootcamp mit anderen Führungskräften oder in der Community: Der Einstieg richtet sich nach dem, was zu Ihrer Situation passt."
            />
          </div>
        </div>
      </section>

      {/* ── Abschnitt 3: Wie ich arbeite ───────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* R12: Sektions-Trennlinie */}
          <div className="flex justify-center mb-10 md:mb-12" aria-hidden="true">
            <div className="w-[60px] h-0.5 bg-orange shrink-0" />
          </div>

          <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Berater mit eigener Meinung – und den richtigen Fragen.
          </h2>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end">
            <div className="w-full space-y-6 lg:w-[58%] lg:min-w-0">
              <p className="text-base leading-relaxed text-brand-text">
                Ich bin Berater, kein Coach. Das ist eine bewusste Entscheidung,
                keine Wertung – gute Coaches leisten wichtige Arbeit, und manche
                meiner Klientinnen und Klienten arbeiten parallel mit einem Coach
                zusammen. Mein Ansatz ist ein anderer: Ich bringe eigene
                Erfahrung, fachliche Einschätzung und eine klare Meinung mit.
              </p>
              <p className="text-base leading-relaxed text-brand-text">
                Gleichzeitig heißt das nicht, dass ich Ihnen sage, was Sache ist.
                Wenn ich einen Eindruck gewinne, stelle ich weitere Fragen – bis
                wir beide klar sehen. Denn Annahmen helfen niemandem. Was dann
                folgt, ist eine Lösung, die auf Ihrem Verständnis Ihrer Situation
                aufbaut, nicht auf meinem.
              </p>
            </div>
            <div className="w-full shrink-0 lg:w-[38%]">
              <div className="flex aspect-square items-center justify-center rounded-xl bg-[#E5E5E5]">
                <span className="text-center text-sm text-[#828282]">
                  Foto folgt
                </span>
              </div>
            </div>
          </div>

          <blockquote className="my-6 ml-10 mr-8 border-l-4 border-denver-blue py-3 pl-6">
            <p className="text-base font-medium leading-relaxed text-brand-text">
              „Und wenn ich dabei ein Risiko sehe, das Sie noch nicht auf dem
              Schirm haben, spreche ich es an – auch wenn das unbequem ist.“
            </p>
          </blockquote>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-brand-text">
              Bevor eine Empfehlung steht, spielen wir Szenarien durch: Wie
              könnten Beteiligte reagieren? Welche Risiken bestehen? Welche
              Alternativen gibt es? Und wenn ich dabei ein Risiko sehe, das Sie
              noch nicht auf dem Schirm haben, spreche ich es an – auch wenn das
              unbequem ist. Diese konstruktive Widerspruchspflicht gehört zu
              meiner Arbeit wie die Bedarfsanalyse.
            </p>
            <p className="text-base leading-relaxed text-brand-text">
              In jedem Projekt arbeite ich nach derselben Grundlogik: Zuerst
              verstehe ich Ihre Situation – durch Zuhören, Fragen und eine
              saubere Bedarfsanalyse. Dann zerlege ich die Komplexität in
              handhabbare Teile, analysiere bestehende Abläufe und wähle aus
              meinem Methodenkoffer das Werkzeug, das zu Ihrer Situation passt.
              In jedem Schritt prüfe ich, wo digitale Werkzeuge und KI den
              Prozess unterstützen können.
            </p>
            <p className="text-base leading-relaxed text-brand-text">
              Wer mich beauftragt, bekommt mich – von der ersten Minute bis zum
              Abschluss. Kein Weiterreichen an Junioren, kein Teamwechsel mitten
              im Projekt. Das ist Chef-Service.
            </p>
          </div>

          <p className="mt-10">
            <Link
              href="/kein-coaching"
              className="text-orange hover:underline underline-offset-4 decoration-2"
            >
              {"Was ich unter \u201E(kein) Coaching\u201C verstehe"}
            </Link>
          </p>
        </div>
      </section>

      {/* ── Abschnitt 4: Themen ────────────────────────────────────── */}
      <section className="bg-brand-gray-light py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-10 md:mb-12" aria-hidden="true">
            <div className="w-[60px] h-0.5 bg-orange shrink-0" />
          </div>

          <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug">
            Themen, die in meiner Arbeit mit Führungskräften regelmäßig
            vorkommen.
          </h2>

          <p className="mt-8 text-base leading-relaxed text-brand-text">
            Jedes Führungsprojekt ist anders – gleichzeitig gibt es Themen, die
            immer wieder auftauchen:
          </p>

          <ul className="mt-6 space-y-4 list-none p-0 m-0" role="list">
            {[
              "Teammanagement und Delegation",
              "Kommunikation mit Mitarbeitenden und Vorgesetzten",
              "Rollenklarheit in der Führungsposition",
              "Umgang mit Konflikten",
              "Veränderungsprozesse gestalten und das Team mitnehmen",
              "Führung auf Distanz und hybride Zusammenarbeit",
              "Prioritätenmanagement im Führungsalltag",
            ].map((label) => (
              <li key={label} className="flex items-center gap-3">
                <HexagonBullet size={12} className="text-orange" />
                <span className="text-base leading-relaxed text-brand-text">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base leading-relaxed text-brand-text">
            Was davon relevant ist, zeigt die Bedarfsanalyse. Manchmal ist das
            Thema, mit dem jemand kommt, genau das richtige. Manchmal liegt der
            eigentliche Hebel woanders. Das herauszufinden, ist Teil meiner
            Arbeit.
          </p>
        </div>
      </section>

      {/* ── Abschnitt 5: Der Weg zur Zusammenarbeit ────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-10 md:mb-12" aria-hidden="true">
            <div className="w-[60px] h-0.5 bg-orange shrink-0" />
          </div>

          <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug">
            So kommen wir ins Gespräch.
          </h2>

          <div className="mt-8 space-y-8">
            {[
              {
                step: 1,
                title: "Kennenlerngespräch.",
                body: "Sie rufen an oder buchen einen Termin. Im Erstgespräch höre ich zu, stelle Fragen und gebe Ihnen eine erste Einschätzung – als neutraler Gesprächspartner, mit dem Ziel, den eigentlichen Bedarf zu verstehen.",
              },
              {
                step: 2,
                title: "Bedarfsanalyse.",
                body: "Wenn wir gemeinsam sehen, dass eine Zusammenarbeit Sinn ergibt, folgt die tiefere Analyse. Die Bedarfsanalyse liefert Ihnen eigenständigen Wert – unabhängig davon, ob danach ein Projekt entsteht. Die Investition wird bei einem Folgeauftrag verrechnet.",
              },
              {
                step: 3,
                title: "Individuelle Lösung.",
                body: "Auf Basis der Analyse entwickle ich ein Konzept, das zu Ihrer Situation passt – ob Einzelberatung, Workshop, Sparring oder eine Kombination.",
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="flex items-start gap-4 md:gap-6"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-orange bg-white"
                  aria-hidden="true"
                >
                  <span className="text-lg font-semibold text-orange">
                    {step}
                  </span>
                </div>
                <div className="flex min-w-0 flex-col">
                  <p className="text-base font-semibold text-brand-text md:text-lg">
                    {title}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-brand-text">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-base leading-relaxed text-brand-text">
            Zwei Dinge sind mir wichtig: Wenn jemand anderes besser zu Ihnen
            passt, sage ich Ihnen das. Und wenn ein kurzes Gespräch reicht, um
            Ihre Frage zu klären, tun wir genau das – und Sie gehen mit einer
            Lösung nach Hause.
          </p>
        </div>
      </section>

      {/* ── Abschnitt 6: Kurzfallbeispiele (Akkordeon) ─────────────── */}
      <section className="bg-brand-gray-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-10 md:mb-12"
            aria-hidden="true"
          />

          <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Aus der Praxis.
          </h2>

          <FuehrungAccordion />
        </div>
      </section>

      {/* ── Abschnitt 7: Bootcamp und Community-Teaser ───────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-10 md:mb-12"
            aria-hidden="true"
          />

          <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Führung lernen – auch über das Einzelgespräch hinaus.
          </h2>

          <p className="text-base leading-relaxed text-brand-text mb-8 md:mb-10">
            Neben der individuellen Zusammenarbeit gibt es zwei Formate, die
            besonders für Führungskräfte im Aufbau passen:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <OfferCard
              title={"Bootcamp „Geh in Führung“"}
              ctaHref="/angebote"
              ctaText="Mehr zum Bootcamp"
            >
              Sechs Live-Workshops in kleiner Gruppe (max. 9 Teilnehmende), mit
              Übungen, Fallbeispielen und einer individuellen Einzelberatung im
              Nachgang. Kompakt, praxisnah und mit direktem Transfer in den
              Führungsalltag.
            </OfferCard>

            <OfferCard
              title="MH3-EAZEE® Community"
              ctaHref="/community"
              ctaText="Mehr zur Community"
            >
              Ein geschlossenes Netzwerk für Führungskräfte und Fachkräfte, die
              sich regelmäßig austauschen, voneinander lernen und gemeinsam
              weiterentwickeln wollen. Stammtische, Vorträge, Challenges – auf
              Augenhöhe und vertraulich.
            </OfferCard>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 8: Shopvote-Bewertungen ───────────────────────── */}
      <section className="bg-brand-gray-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-10 md:mb-12"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug mb-6 md:mb-8">
                Was meine Klientinnen und Klienten sagen.
              </h2>
              <p className="text-base leading-relaxed text-brand-text">
                Alle Bewertungen werden von Shopvote unabhängig geprüft – hier
                schreiben echte Klientinnen und Klienten über ihre Erfahrungen.
              </p>
            </div>

            <div className="flex justify-center">
              <ShopvoteBadge />
            </div>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 9: Kontakt ────────────────────────────────────── */}
      <ContactSection
        headline="Sprechen wir über Ihre Situation."
        subtext="Das Kennenlerngespräch ist ein offenes Gespräch auf Augenhöhe – ich höre zu, stelle Fragen und gebe Ihnen eine erste Einschätzung. Danach entscheiden Sie in Ruhe, ob eine Zusammenarbeit für Sie Sinn ergibt. Am einfachsten erreichen Sie mich telefonisch."
        outerClassName="bg-white py-16 md:py-24"
        withR5Divider
      />
    </div>
  );
}
