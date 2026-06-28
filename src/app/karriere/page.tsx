import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";
import SituationCard from "@/components/SituationCard";
import Reveal from "@/components/Reveal";
import OfferCard from "@/components/OfferCard";
import ContactSection from "@/components/ContactSection";
import Note from "@/components/Note";
import ShopvoteBadge from "@/components/ShopvoteBadge";
import { ProcessSteps } from "@/components/ProcessSteps";
import SaeulenAngebote from "@/components/SaeulenAngebote";
import { vortraegeFuerSaeule } from "@/data/vortraege";

export const metadata: Metadata = {
  title: "Karriereberatung für Fach- & Führungskräfte | MH3 LearnCon",
  description:
    "Berufliche Neuorientierung, Karrierestrategie und Bewerbungsberatung für erfahrene Fach- und Führungskräfte. Nicht mehr Bewerbungen, sondern mehr unterschriftsreife Verträge. Düsseldorf und online.",
};

export default function KarrierePage() {
  const karriereVortraege = vortraegeFuerSaeule("Karriere");

  return (
    <div className="animate-fade-in">
      {/* ── Abschnitt 1: Hero ─────────────────────────────────────── */}
      <section className="bg-white min-h-[60vh] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 font-extrabold text-brand-text leading-tight">
            Karriereberatung für Fach- und Führungskräfte
          </h1>

          <div className="mt-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="flex flex-col gap-6 lg:col-span-3">
              <p className="text-pointe font-semibold text-orange tracking-wide">
                Karriere ist kein Zufall – Karriere ist eine Entscheidung.
              </p>

              <p className="text-body text-brand-text leading-relaxed max-w-lg">
                Die meisten gehen ihre Karriere reaktiv an – Bewerbungen auf
                Verdacht, Entscheidungen auf Hörensagen. Das geht anders: Ich
                plane mit Ihnen den nächsten Schritt strategisch – klares Ziel,
                realistischer Weg, und am Ende das, was zählt: ein
                unterschriftsreifer Vertrag, der zu Ihnen passt.
              </p>

              <div className="flex pt-2">
                <a
                  href="tel:+491718820277"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-orange px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:border-denver-blue hover:bg-denver-blue hover:text-white"
                  aria-label="Jetzt anrufen: 0171 88 202 77"
                >
                  <Phone size={18} aria-hidden="true" />
                  0171 88 202 77
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
                <Image
                  src="/hero-karriere.png"
                  alt="Marcus Holzheimer im Karriere-Beratungsgespräch am Tisch"
                  width={1448}
                  height={1086}
                  priority
                  className="h-auto w-full"
                />
              </div>
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

          <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <SituationCard
              hover
              headline="Sie wissen, was Sie wollen – und suchen den Weg dorthin."
              body="Sie haben einen guten Job und verdienen gut. Gleichzeitig spüren Sie: Da geht mehr. Das Ziel ist im Grunde klar – nur der Weg dorthin ist es noch nicht. Sie verschicken Bewerbungen auf ausgeschriebene Stellen, statt Ihre Karriere aktiv zu gestalten. Was Ihnen fehlt, ist ein strukturierter Prozess mit klaren Schritten und Meilensteinen. Oft reicht genau das, um den Unterschied zu machen."
            />
            <SituationCard
              hover
              headline="Sie wissen, dass sich etwas ändern muss – nur noch nicht, was genau."
              body="Die Unzufriedenheit ist da, das Ziel noch nicht. Bevor Sie den nächsten Schritt planen können, brauchen Sie Klarheit darüber, wohin es eigentlich gehen soll. Das klingt nach einer großen Frage – und ist es auch. Gleichzeitig lässt sie sich systematisch beantworten. Ich arbeite mit Ihnen zuerst am WAS, bevor wir über das WIE sprechen."
            />
            <SituationCard
              hover
              headline="Sie sind eigentlich am richtigen Ort – und trotzdem unzufrieden."
              body="Das Unternehmen passt, die Vergütung stimmt, und trotzdem fehlt etwas – die Führungskraft, die Aufgaben oder beides. Der erste Impuls ist oft: weg hier. Das Risiko dabei: vom Regen in die Traufe. Gemeinsam gehen wir systematisch durch, was sich im aktuellen Umfeld verändern lässt und was einen Wechsel tatsächlich rechtfertigt. Damit Sie eine Entscheidung treffen, die in drei Jahren noch die richtige ist."
            />
            <SituationCard
              hover
              headline="Sie stehen vor einem ungewollten Umbruch – und wollen ihn professionell gestalten."
              body="Nach einer Umstrukturierung oder Trennung stehen erfahrene Führungskräfte vor einer Situation, die sie seit Jahren nicht mehr kannten: sich beruflich neu orientieren. Dazu kommt: Der Markt hat sich verändert, die Bewerbungsprozesse ebenfalls, und Diskretion ist entscheidend. Ich kenne die Outplacement-Branche aus der Insider-Perspektive – als ehemaliger Auftraggeber und als Berater. Diese Erfahrung ermöglicht mir eine ehrliche Einschätzung Ihrer Optionen. Stundenbasiert, ohne Paketpreis und ohne Laufzeitbindung."
            />
          </div>
          </Reveal>

          <p className="text-xl font-medium text-brand-text mt-14 mb-4 text-center">
            Wenn Sie sich in einer dieser Situationen wiederfinden — dann lohnt
            sich ein Gespräch.
          </p>

          <p className="text-center">
            <Link
              href="/karriere/outplacement-check"
              className="text-orange font-semibold hover:text-denver-blue transition-colors"
            >
              Vor einem ungewollten Umbruch? Zum Outplacement-Check →
            </Link>
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

          <h2 className="text-h2 font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Warum ich Karriere anders angehe als die meisten.
          </h2>

          <div className="space-y-6">
            <p className="text-body text-brand-text">
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
            <p className="text-body text-brand-text">
              Ich arbeite nach derselben Grundlogik wie in meinen Führungs- und
              Vertriebsprojekten: Zuerst verstehe ich Ihre Situation – durch
              Zuhören, Fragen und eine saubere Bedarfsanalyse. Dann zerlege ich
              die Komplexität in handhabbare Schritte und wähle die Werkzeuge,
              die zu Ihrer Situation passen. In jedem Schritt prüfe ich, wo
              digitale Werkzeuge und KI den Prozess unterstützen können.
            </p>

            <p className="text-body text-brand-text">
              Dazu gehört, jeden Schritt vorauszudenken: Wie reagiert der
              Arbeitgeber auf diese Forderung? Was passiert, wenn das Gespräch
              anders verläuft als geplant? Welche Alternativen haben Sie? Und
              wenn ich sehe, dass ein Weg mehr Risiko birgt, als er auf den
              ersten Blick vermuten lässt, sage ich Ihnen das – klar und
              konstruktiv.
            </p>

            <p className="text-body text-brand-text">
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

          <h2 className="text-h2 font-semibold text-brand-text leading-snug">
            Themen, die in meiner Karriereberatung regelmäßig vorkommen.
          </h2>

          <Reveal>
            <ul
              className="mt-8 grid grid-cols-1 list-none gap-4 p-0 m-0 md:grid-cols-2"
              role="list"
            >
              {[
                {
                  lead: "Neuorientierung",
                  benefit:
                    "Erst klären, wohin – bevor Sie sich auf den Weg machen.",
                },
                {
                  lead: "Strategie",
                  benefit:
                    "Karriere aktiv gestalten, statt passiv zu reagieren.",
                },
                {
                  lead: "Positionierung",
                  benefit:
                    "Sichtbar machen, was Sie wirklich auszeichnet.",
                },
                {
                  lead: "Gehalt",
                  benefit: "Die Konditionen verhandeln, die Sie wert sind.",
                },
                {
                  lead: "Planung",
                  benefit: "Damit die Strategie in die Umsetzung kommt.",
                },
                {
                  lead: "Umbruch",
                  benefit:
                    "Eine Trennung professionell und diskret gestalten.",
                },
                {
                  lead: "Outplacement",
                  benefit: "Angebote einordnen, bevor Sie unterschreiben.",
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

          <h2 className="text-h2 font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Klarheit gewinnen – auch schon vor dem Erstgespräch.
          </h2>

          <p className="text-body text-brand-text mb-8 md:mb-10">
            Ob als Einstieg in Eigenregie oder als angeleiteter Kurs – der Weg
            richtet sich nach Ihrer Situation.
          </p>

          <Reveal>
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
          </Reveal>

          <div className="mt-10 rounded-lg border-l-4 border-denver-blue bg-[#F5F5F5] px-6 py-5 md:px-8 md:py-6">
            <p className="text-xl font-medium text-denver-blue">
              Das Kennenlerngespräch ist kostenfrei — die Beratung beginnt erst,
              wenn es passt.
            </p>
            <p className="mt-2 text-body text-brand-text">
              Die persönlichste Form ist die individuelle Einzelberatung:
              stundenbasiert, ohne Paketpreis. Ob und wie sie zu Ihnen passt,
              klären wir vorab in einem unverbindlichen Kennenlerngespräch.
            </p>
          </div>

          <p className="mt-10 text-body text-brand-text">
            Über die individuelle Beratung hinaus bringe ich Karrierethemen auch
            in die Breite — als Vortrag oder Impuls, einzeln oder als Reihe. Ein
            Klick öffnet die Inhalte:
          </p>

          <div className="mt-6 md:mt-8">
            <SaeulenAngebote vortraege={karriereVortraege} saeule="Karriere" />
          </div>
        </div>
      </section>

      {/* ── Abschnitt 6: Der Weg zur Zusammenarbeit ──────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text leading-snug">
            So kommen wir ins Gespräch.
          </h2>

          <ProcessSteps
            animated
            steps={[
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
            ]}
          />

          <Note className="mt-10">
            <span className="font-semibold">Gut zu wissen:</span> Die Investition
            in eine professionelle Karriereberatung lässt sich in der Regel als
            Werbungskosten steuerlich geltend machen. Sprechen Sie dazu mit Ihrer
            Steuerberaterin oder Ihrem Steuerberater.
          </Note>

          <p className="mt-10 text-body text-brand-text">
            Zwei Dinge sind mir wichtig: Wenn jemand anderes besser zu Ihnen
            passt, sage ich Ihnen das. Und wenn ein kurzes Gespräch reicht, um
            Ihre Frage zu klären, tun wir genau das – und Sie gehen mit einer
            Lösung nach Hause.
          </p>
        </div>
      </section>

      {/* ── Abschnitt 7: Aus der Praxis ──────────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text leading-snug">
            Aus der Praxis.
          </h2>

          <p className="mt-8 text-body text-brand-text">
            Jedes Karriereprojekt beginnt mit einer Frage — und häufig ist die
            eigentliche Antwort eine andere als erwartet. Drei Beispiele, wie
            das in der Praxis aussieht:
          </p>

          <Reveal>
          <div className="mt-8 space-y-6">
            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-md md:p-8">
              <h3 className="mb-4 text-base font-bold leading-snug text-brand-text md:text-lg">
                Über 100 Bewerbungen, kein Ergebnis – dann ein anderer Weg.
              </h3>
              <p className="text-body text-brand-text">
                Eine Ingenieurin hatte sich auf über 100 ausgeschriebene Stellen
                beworben – mit einem ordentlichen Lebenslauf und guten
                Qualifikationen. Das Ergebnis: Absagen oder Schweigen. Im
                Erstgespräch wurde klar, dass der Prozess das Problem war, nicht
                die Person. Innerhalb weniger Wochen hatte sie eine klare
                Positionierung, eine gezielte Ansprache – und einen
                unterschriftsreifen Vertrag bei ihrem Wunscharbeitgeber.
              </p>
            </article>

            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-md md:p-8">
              <h3 className="mb-4 text-base font-bold leading-snug text-brand-text md:text-lg">
                Unzufrieden im Job – und die Lösung lag nicht im Wechsel.
              </h3>
              <p className="text-body text-brand-text">
                Eine erfahrene Führungskraft wollte raus aus ihrem Unternehmen –
                die Unzufriedenheit war groß, der erste Impuls klar. Die
                systematische Analyse zeigte: Das Unternehmen passte, die Rolle
                nicht. Statt eines riskanten Wechsels hat sie gezielt verändert,
                was veränderbar war – und ist heute zufriedener als in den
                Jahren zuvor. Im gleichen Unternehmen, in einer anderen
                Konstellation.
              </p>
            </article>

            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-md md:p-8">
              <h3 className="mb-4 text-base font-bold leading-snug text-brand-text md:text-lg">
                Nach 18 Jahren im selben Unternehmen plötzlich auf dem Markt.
              </h3>
              <p className="text-body text-brand-text">
                Ein erfahrener Manager wurde nach einer Umstrukturierung
                freigesetzt. Die letzte aktive Bewerbung lag fast zwei
                Jahrzehnte zurück – der Markt, die Prozesse und die
                Erwartungen hatten sich grundlegend verändert. In einer
                vertraulichen Zusammenarbeit hat er seine Positionierung
                geschärft, den aktuellen Bewerbungsprozess kennengelernt und
                eine Strategie entwickelt, die seinem Niveau entsprach. Ohne
                Paketpreis, ohne Laufzeitbindung – Schritt für Schritt, bis der
                Vertrag stand.
              </p>
            </article>
          </div>
          </Reveal>
        </div>
      </section>

      {/* ── Abschnitt 8: Shopvote-Bewertungen ────────────────────── */}
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
                rede darüber" – da mir das schwerfällt, bevorzuge ich: „Tue
                Gutes – und lass darüber reden."
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

      {/* ── Abschnitt 9: Kontakt ─────────────────────────────────── */}
      <ContactSection />
    </div>
  );
}
