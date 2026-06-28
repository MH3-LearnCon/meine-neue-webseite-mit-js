import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Image from "next/image";
import OfferCard from "@/components/OfferCard";
import SaeulenAngebote from "@/components/SaeulenAngebote";
import ContactSection from "@/components/ContactSection";
import ShopvoteBadge from "@/components/ShopvoteBadge";
import SituationCard from "@/components/SituationCard";
import Reveal from "@/components/Reveal";
import { ProcessSteps } from "@/components/ProcessSteps";
import { R } from "@/components/R";
import { vortraegeFuerSaeule } from "@/data/vortraege";

export const metadata: Metadata = {
  title: "Führung entwickeln – Beratung & Sparring | MH3 LearnCon",
  description:
    "Führung ist kein Talent – Führung ist ein Handwerk. Praxiserprobte Methoden, klarer Blick auf Ihre Situation, über 20 Jahre Erfahrung mit Führungskräften.",
};

export default function FuehrungPage() {
  const fuehrungsVortraege = vortraegeFuerSaeule("Führung");

  return (
    <div className="animate-fade-in">
      {/* ── Abschnitt 1: Hero ─────────────────────────────────────── */}
      <Hero
        h1="Führung ist kein Talent – Führung ist ein Handwerk."
        subline="Werkzeuge, die im Führungsalltag wirklich tragen."
        body="Die meisten Führungskräfte steigen über die Fachlaufbahn auf und stehen dann vor Aufgaben, für die ihnen die Werkzeuge fehlen. Genau hier setze ich an – mit praxiserprobten Methoden, klarem Blick auf Ihre Situation und der Erfahrung aus über 20 Jahren mit Führungskräften aller Ebenen."
        image={
          <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
            <Image
              src="/hero-fuehrung.png"
              alt="Marcus Holzheimer, Berater für Führung"
              width={1448}
              height={1086}
              priority
              className="h-auto w-full"
            />
          </div>
        }
      />

      {/* ── Abschnitt 2: Vier Situationsbeschreibungen ────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <Reveal>
            <h2 className="text-h2 font-semibold text-brand-text mb-10 md:mb-12 leading-snug">
              In welcher Situation sind Sie?
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <Reveal className="grid" delay={0}>
              <SituationCard
                hover
                headline="Sie führen erfolgreich – und suchen einen Sparringspartner, der Ihre Sprache spricht?"
                body="Ihr Bereich läuft, Ihre Erfahrung ist fundiert. Gleichzeitig spüren Sie: Vorgaben von oben kommunizieren und umsetzen, Talente fördern trotz knapper Ressourcen, festgefahrene Strukturen aufbrechen – das ist anspruchsvoll, auch mit Erfahrung. Was fehlt, ist ein Gegenüber, das Ihre Realität kennt und auf Augenhöhe mitdenkt. Jemand, der nicht nur fragt, sondern auch eine Meinung hat."
              />
            </Reveal>
            <Reveal className="grid" delay={90}>
              <SituationCard
                hover
                headline="Sie wurden befördert – und merken, dass die neue Rolle andere Fähigkeiten verlangt?"
                body="Befördert zu werden ist eine Anerkennung. Gleichzeitig kann die neue Position Herausforderungen mit sich bringen, auf die niemand vorbereitet war: Entscheidungen unter Unsicherheit treffen, ein Team strukturieren, die eigene Führungskraft und die Mitarbeitenden gleichzeitig zufriedenstellen. Das lässt sich systematisch angehen – mit klaren Werkzeugen und einem Berater, der die Situation kennt, weil er sie selbst erlebt hat."
              />
            </Reveal>
            <Reveal className="grid" delay={180}>
              <SituationCard
                hover
                headline="Eine Ihrer Führungskräfte kommt an Grenzen – und Sie suchen eine diskrete Lösung?"
                body="Die Signale sind da: Mitarbeitende sind unzufrieden, Entscheidungen bleiben liegen, die Stimmung kippt. Sie sehen das Problem, wollen die Person gleichzeitig halten und entwickeln – und brauchen jemanden, der die Situation von außen einschätzt und professionell begleitet. Diskret, auf Augenhöhe mit beiden Seiten und mit dem Ziel, dass Ihre Führungskraft in ihrer Rolle ankommt."
              />
            </Reveal>
            <Reveal className="grid" delay={270}>
              <SituationCard
                hover
                headline="Sie wollen den nächsten Schritt machen – und sich professionell darauf vorbereiten?"
                body="Sie führen ein Team, die ersten Erfolge sind da, und Sie spüren: Da geht noch mehr. Der Wille zur Weiterentwicklung ist da – jetzt geht es darum, aus Intuition professionelles Handwerkszeug zu machen. Ob im Einzelgespräch, im Bootcamp mit anderen Führungskräften oder in der Community: Der Einstieg richtet sich nach dem, was zu Ihrer Situation passt."
              />
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="text-xl font-medium text-brand-text mt-14 mb-4 text-center">
              Wenn Sie sich in einer dieser Situationen wiederfinden — dann lohnt
              sich ein Gespräch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Abschnitt 3: Wie ich arbeite ───────────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* R12: Sektions-Trennlinie */}
          <div className="flex justify-center mb-10 md:mb-12" aria-hidden="true">
            <div className="w-[60px] h-0.5 bg-orange shrink-0" />
          </div>

          <h2 className="text-h2 font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Berater mit eigener Meinung – und den richtigen Fragen.
          </h2>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="w-full space-y-6 lg:w-[65%] lg:min-w-0">
              <p className="text-body text-brand-text">
                Ich bin Berater, kein Coach. Das ist eine bewusste Entscheidung,
                keine Wertung – gute Coaches leisten wichtige Arbeit, und manche
                meiner Klientinnen und Klienten arbeiten parallel mit einem Coach
                zusammen. Mein Ansatz ist ein anderer: Ich bringe eigene
                Erfahrung, fachliche Einschätzung und eine klare Meinung mit.
              </p>
              <p className="text-body text-brand-text">
                Gleichzeitig heißt das nicht, dass ich Ihnen sage, was Sache ist.
                Wenn ich einen Eindruck gewinne, stelle ich weitere Fragen – bis
                wir beide klar sehen. Denn Annahmen helfen niemandem. Was dann
                folgt, ist eine Lösung, die auf Ihrem Verständnis Ihrer Situation
                aufbaut, nicht auf meinem.
              </p>
              <p className="text-body text-brand-text">
                Bevor eine Empfehlung steht, spielen wir Szenarien durch: Wie
                könnten Beteiligte reagieren? Welche Risiken bestehen? Welche
                Alternativen gibt es? Diese konstruktive Widerspruchspflicht gehört
                zu meiner Arbeit wie die Bedarfsanalyse.
              </p>
            </div>
            <div className="w-full shrink-0 lg:w-[30%]">
              <Image
                src="/images/bio-marcus-sw.png"
                alt="Marcus Holzheimer, Berater und Sparringspartner für Führungskräfte"
                width={1080}
                height={1080}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 384px, 100vw"
                className="h-auto w-full rounded-xl"
              />
            </div>
          </div>

          <blockquote className="my-6 ml-10 mr-8 border-l-4 border-denver-blue py-3 pl-6">
            <p className="text-xl font-medium leading-relaxed text-brand-text">
              „Obligation to Dissent — die konstruktive Widerspruchspflicht.“
            </p>
          </blockquote>

          <div className="space-y-6">
            <p className="text-body text-brand-text">
              In jedem Projekt arbeite ich nach derselben Grundlogik: Zuerst
              verstehe ich Ihre Situation – durch Zuhören, Fragen und eine
              saubere Bedarfsanalyse. Dann zerlege ich die Komplexität in
              handhabbare Teile, analysiere bestehende Abläufe und wähle aus
              meinem Methodenkoffer das Werkzeug, das zu Ihrer Situation passt.
              In jedem Schritt prüfe ich, wo digitale Werkzeuge und KI den
              Prozess unterstützen können.
            </p>
            <p className="text-body text-brand-text">
              Wer mich beauftragt, bekommt mich – von der ersten Minute bis zum
              Abschluss. Kein Weiterreichen an Junioren, kein Teamwechsel mitten
              im Projekt. Das ist Chef-Service.
            </p>
          </div>

          <p className="mt-10">
            <Link
              href="/kein-coaching"
              className="text-orange font-semibold hover:text-denver-blue transition-colors"
            >
              {"Was ich unter \u201E(kein) Coaching\u201C verstehe \u2192"}
            </Link>
          </p>
        </div>
      </section>

      {/* ── Abschnitt 4: Themen ────────────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-10 md:mb-12" aria-hidden="true">
            <div className="w-[60px] h-0.5 bg-orange shrink-0" />
          </div>

          <h2 className="text-h2 font-semibold text-brand-text leading-snug">
            Themen, die in meiner Arbeit mit Führungskräften regelmäßig
            vorkommen.
          </h2>

          <p className="mt-8 text-body text-brand-text">
            Jedes Führungsprojekt ist anders – gleichzeitig gibt es Themen, die
            immer wieder auftauchen:
          </p>

          <Reveal>
            <ul
              className="mt-6 grid grid-cols-1 list-none gap-4 p-0 m-0 md:grid-cols-2"
              role="list"
            >
              {[
                {
                  lead: "Rollenklarheit",
                  benefit:
                    "Wissen, wofür Sie verantwortlich sind – und wo Ihre Grenze liegt.",
                },
                {
                  lead: "Selbstführung",
                  benefit:
                    "Den eigenen Tag regeln, statt vom Tag gesteuert zu werden.",
                },
                {
                  lead: "Prioritäten",
                  benefit:
                    "Das Wichtige zuerst, auch wenn das Dringende lauter ruft.",
                },
                {
                  lead: "Delegation",
                  benefit: "Abgeben und trotzdem den Überblick behalten.",
                },
                {
                  lead: "Kommunikation",
                  benefit: "Klar und direkt, sodass Ihre Botschaft ankommt.",
                },
                {
                  lead: "Konflikte",
                  benefit: "Unterschiede ansprechen, bevor sie eskalieren.",
                },
                {
                  lead: "Veränderung",
                  benefit: "Das Team mitnehmen, statt es zu überrollen.",
                },
                {
                  lead: "Führung auf Distanz",
                  benefit:
                    "Wirksam führen, auch wenn das Team nicht im selben Raum sitzt.",
                },
              ].map((t) => (
                <li
                  key={t.lead}
                  className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-orange bg-white px-5 py-4 shadow-sm"
                >
                  <p className="text-body text-brand-text">
                    <span className="font-bold text-denver-blue">{t.lead}.</span>{" "}
                    {t.benefit}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <p className="mt-8 text-body text-brand-text">
            Was davon relevant ist, zeigt die Bedarfsanalyse. Manchmal ist das
            Thema, mit dem jemand kommt, genau das richtige. Manchmal liegt der
            eigentliche Hebel woanders. Das herauszufinden, ist Teil meiner
            Arbeit.
          </p>
        </div>
      </section>

      {/* ── Abschnitt 5: Der Weg zur Zusammenarbeit ────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-10 md:mb-12" aria-hidden="true">
            <div className="w-[60px] h-0.5 bg-orange shrink-0" />
          </div>

          <h2 className="text-h2 font-semibold text-brand-text leading-snug">
            So kommen wir ins Gespräch.
          </h2>

          <ProcessSteps
            animated
            steps={[
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
            ]}
          />

          <p className="mt-10 text-body text-brand-text">
            Zwei Dinge sind mir wichtig: Wenn jemand anderes besser zu Ihnen
            passt, sage ich Ihnen das. Und wenn ein kurzes Gespräch reicht, um
            Ihre Frage zu klären, tun wir genau das – und Sie gehen mit einer
            Lösung nach Hause.
          </p>
        </div>
      </section>

      {/* ── Abschnitt 6: Aus der Praxis (Karten) ───────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-10 md:mb-12"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text leading-snug">
            Aus der Praxis.
          </h2>

          <p className="mt-8 text-body text-brand-text">
            Jedes Projekt beginnt mit einer Frage — und häufig ist die
            eigentliche Antwort eine andere als erwartet. Die Bedarfsanalyse
            zeigt, wo der wirkliche Hebel liegt. Drei Beispiele, wie das in der
            Praxis aussieht:
          </p>

          <Reveal>
          <div className="mt-8 space-y-6">
            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-md md:p-8">
              <h3 className="mb-4 text-base font-bold leading-snug text-brand-text md:text-lg">
                Die Anfrage: KI einführen. Der eigentliche Bedarf: Führung
                stärken.
              </h3>
              <p className="text-body text-brand-text">
                Eine Führungskraft wollte für sich und ihr Team KI-Werkzeuge
                einführen. Die Bedarfsanalyse zeigte: Der eigentliche
                Schmerzpunkt war Arbeitsbelastung und fehlende Struktur – keine
                Prioritäten, keine klaren Prozesse, keine Ziele. Das erste Projekt
                wurde ein Führungsprojekt: Selbstführung und Struktur der
                Führungsebene. Dann folgten die Prozesse. KI kam als dritter
                Schritt – dort, wo sie tatsächlich Sinn ergab.
              </p>
            </article>

            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-md md:p-8">
              <h3 className="mb-4 text-base font-bold leading-snug text-brand-text md:text-lg">
                Zwei Abteilungen, ein Ziel – und kein gemeinsames Verständnis.
              </h3>
              <p className="text-body text-brand-text">
                Nach einer Reorganisation sollten zwei Teams als eine Einheit
                funktionieren. Auf dem Papier war alles geregelt, in der Praxis
                arbeiteten beide Seiten aneinander vorbei. In einem strukturierten
                Prozess haben die Beteiligten selbst herausgearbeitet, wo die
                Reibungspunkte lagen – und gemeinsam Lösungen entwickelt, die im
                Alltag funktionierten. Weil die Ideen von den Mitarbeitenden
                kamen, wurden sie auch umgesetzt.
              </p>
            </article>

            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-md md:p-8">
              <h3 className="mb-4 text-base font-bold leading-snug text-brand-text md:text-lg">
                Vom fachlich Besten zur Führungskraft – ein Übergang, der selten
                von allein gelingt.
              </h3>
              <p className="text-body text-brand-text">
                Ein technisch exzellenter Experte wurde zum Abteilungsleiter
                befördert. Die Fachkompetenz war unbestritten, die
                Führungskompetenz fehlte – und das Team spürte es. In einer
                vertraulichen Zusammenarbeit hat er Schritt für Schritt
                Werkzeuge für seinen Führungsalltag aufgebaut: Delegation,
                schwierige Gespräche, Prioritäten setzen. Heute führt er
                souverän – mit seinem eigenen Stil, nicht nach Lehrbuch.
              </p>
            </article>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ── Abschnitt 7: Bootcamp und Community-Teaser ───────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-10 md:mb-12"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Führung lernen – auch über das Einzelgespräch hinaus.
          </h2>

          <p className="text-body text-brand-text mb-8 md:mb-10">
            Neben der individuellen Zusammenarbeit gibt es mehrere Formate, die
            besonders für Führungskräfte im Aufbau passen:
          </p>

          <Reveal>
          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <OfferCard
              title={"Bootcamp „Geh in Führung“"}
              kategorie="Live-Workshop-Reihe"
              ctaHref="/angebote"
              ctaText="Mehr zum Bootcamp →"
            >
              Sechs Live-Workshops in kleiner Gruppe (max. 9 Teilnehmende), mit
              Übungen, Fallbeispielen und einer individuellen Einzelberatung im
              Nachgang. Kompakt, praxisnah und mit direktem Transfer in den
              Führungsalltag.
            </OfferCard>

            <OfferCard
              title={
                <>
                  MH3-EAZEE<R /> Community
                </>
              }
              kategorie="Community"
              ctaHref="/community"
              ctaText="Mehr zur Community →"
            >
              Ein geschlossenes Netzwerk für Führungskräfte und Fachkräfte, die
              sich regelmäßig austauschen, voneinander lernen und gemeinsam
              weiterentwickeln wollen. Stammtische, Vorträge, Challenges – auf
              Augenhöhe und vertraulich.
            </OfferCard>
          </div>
          </Reveal>

          <div className="mx-auto mt-6 w-full max-w-5xl md:mt-8">
            <SaeulenAngebote vortraege={fuehrungsVortraege} saeule="Führung" />
          </div>
        </div>
      </section>

      {/* ── Abschnitt 8: Shopvote-Bewertungen ───────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-10 md:mb-12"
            aria-hidden="true"
          />

          <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <div className="w-full min-w-0 lg:w-[60%]">
              <h2 className="text-h2 font-semibold text-brand-text leading-snug mb-6 md:mb-8 lg:whitespace-nowrap">
                Was meine Klientinnen und Klienten sagen.
              </h2>
              <p className="mt-6 text-body text-brand-text">
                Empfehlungen sind die Grundlage meiner Arbeit. „Tue Gutes – und
                rede darüber“ – da mir das schwerfällt, bevorzuge ich: „Tue Gutes –
                und lass darüber reden.“
              </p>
              <blockquote className="my-6 ml-10 mr-8 border-l-4 border-denver-blue py-3 pl-6">
                <p className="text-xl font-medium leading-relaxed text-brand-text lg:whitespace-nowrap">
                  Über 65 verifizierte Bewertungen — 5 von 5 Sternen.
                </p>
              </blockquote>
              <p className="text-body text-brand-text">
                Alle Bewertungen werden von Shopvote unabhängig geprüft – hier
                schreiben echte Klientinnen und Klienten über ihre Erfahrungen.
              </p>
              <p className="mt-4 text-body text-brand-text">
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
          </Reveal>
        </div>
      </section>

      {/* ── Abschnitt 9: Kontakt ────────────────────────────────────── */}
      <ContactSection />
    </div>
  );
}
