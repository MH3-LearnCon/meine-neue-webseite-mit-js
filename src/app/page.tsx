import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import GearIcon from "@/components/GearIcon";
import StatementCard from "@/components/StatementCard";

export const metadata: Metadata = {
  title: "MH3 LearnCon GmbH",
  description:
    "Beratung auf Augenhöhe: Führungskräfteentwicklung, Karrierestrategie und Vertriebsoptimierung. Über 20 Jahre Erfahrung. Düsseldorf und deutschlandweit.",
};

const SITUATIONS = [
  {
    href: "/fuehrung",
    cta: "Mehr zu Führung",
    h2: "Sie führen ein Team – und merken, dass Erfahrung allein nicht mehr reicht?",
    text: "Vorgaben von oben kommunizieren, Talente entwickeln, festgefahrene Strukturen aufbrechen – und dabei den eigenen Anspruch an gute Führung halten. Das ist anspruchsvoll, besonders wenn die Werkzeuge fehlen oder das Tagesgeschäft alles andere verdrängt. Ich arbeite mit Führungskräften auf allen Ebenen: vom Gruppenleiter, der seine erste Führungsrolle ausfüllen will, bis zum Bereichsleiter, der seinen Bereich strategisch weiterentwickelt.",
    statement:
      "Gute Führung braucht Sparring, keine Schonhaltung.",
  },
  {
    href: "/karriere",
    cta: "Mehr zu Karriere",
    h2: "Sie planen Ihren nächsten Karriereschritt – und wollen ihn richtig angehen?",
    text: "Ob Bewerbung, Gehaltsverhandlung oder berufliche Neuorientierung: Die meisten gehen auf Hörensagen statt auf Strategie. Das Ergebnis sind Bewerbungen, die ins Leere laufen, und Entscheidungen, die sich im Nachhinein als vorschnell herausstellen. Ich unterstütze Sie dabei, zuerst Klarheit über Ihr Ziel zu gewinnen – und dann den Weg dorthin systematisch zu gehen. Nicht mehr Bewerbungen, sondern ein unterschriftsreifer Vertrag.",
    statement:
      "Nicht mehr Bewerbungen. Sondern der unterschriftsreife Vertrag.",
  },
  {
    href: "/vertrieb",
    cta: "Mehr zu Vertrieb",
    h2: "Ihr Vertrieb soll bessere Ergebnisse liefern \u2013 und Sie wissen, dass \u201Emehr Termine\u201C nicht die Antwort ist?",
    text: "Wenn jeder im Team anders arbeitet, kein einheitlicher Prozess existiert und die Geschäftsführung trotzdem mehr Umsatz erwartet, liegt das Problem selten bei den einzelnen Mitarbeitenden. Ich analysiere mit Ihnen, wo die eigentlichen Hebel liegen – und entwickle einen Vertriebsansatz, der zu Ihrem Unternehmen passt, statt ein Standardtraining aufzusetzen.",
    statement: "Struktur schlägt Intuition. Prozess schlägt Zufall.",
  },
  {
    href: "/simulation",
    cta: "Mehr zur Management Simulation",
    h2: "Sie suchen ein Format, das Ihr Team wirklich fordert – und in Erinnerung bleibt?",
    text: "Klassische Teambuilding-Events machen Spaß, verändern im Arbeitsalltag wenig. Die computergestützte Management Simulation ist anders: Ihre Teams managen unter realistischem Druck einen virtuellen Freizeitpark – und zeigen dabei Verhaltensmuster, die in keinem Workshop sichtbar werden. Für 6 bis 48 Teilnehmende, auf Deutsch und Englisch.",
    statement:
      "Führung und Teamdynamik erleben statt besprechen.",
  },
];

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* ── Abschnitt 1: Hero ─────────────────────────────────────── */}
      <section className="bg-white min-h-[60vh] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text-Spalte */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <GearIcon size={20} className="text-orange" />
                <span className="text-sm font-semibold tracking-wide text-[#222222]">
                  MH3 LearnCon<sup className="text-xs font-normal">®</sup> GmbH
                </span>
              </div>

              <h1 className="text-h1 font-extrabold text-brand-text leading-tight">
                Führung stärken.{" "}
                <span className="text-orange">Karriere gestalten.</span>{" "}
                Vertrieb professionalisieren.
              </h1>

              <p className="text-2xl font-semibold text-orange tracking-wide">
                Einfach. Machen.
              </p>

              <p className="text-body text-brand-gray-dark leading-relaxed max-w-lg">
                Ich bin Berater, Trainer und Sparringspartner – bewusst allein,
                mit der Erfahrung und dem Setup für internationale Projekte. Ob
                Führung, Karriere oder Vertrieb: Ich starte dort, wo der
                eigentliche Bedarf liegt, und entwickle gemeinsam mit Ihnen eine
                Lösung, die zu Ihrer Situation passt.
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

            {/* Foto */}
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/Marcus_Holzheimer_Startseit.jpg"
                alt="Marcus Holzheimer – Berater, Trainer und Sparringspartner"
                width={480}
                height={640}
                className="w-full max-w-sm rounded-xl object-cover"
                priority
              />
              <p className="text-base font-semibold text-brand-text">
                Marcus Holzheimer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 2: Vier Situations-Sektionen ───────────────── */}
      {SITUATIONS.map(({ href, cta, h2, text, statement }, index) => {
        const visualLeft = index % 2 === 0;
        return (
          <section
            key={href}
            className={`${index % 2 === 0 ? "bg-[#F5F5F5]" : "bg-white"} pt-6 md:pt-8 pb-12 md:pb-16`}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div
                  className={`lg:col-span-2 flex flex-col ${visualLeft ? "lg:order-2" : "lg:order-1"}`}
                >
                  <h2 className="text-h2 font-semibold text-brand-text mb-5 leading-snug">
                    {h2}
                  </h2>
                  <p className="text-body text-brand-gray-dark leading-relaxed mb-8">
                    {text}
                  </p>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-orange font-semibold hover:text-denver-blue transition-colors group"
                  >
                    {cta}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
                <div
                  className={`lg:col-span-1 ${visualLeft ? "lg:order-1" : "lg:order-2"}`}
                >
                  <StatementCard text={statement} />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Abschnitt 3: Kurzprofil ──────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 flex flex-col lg:order-2">
              <div className="flex items-center gap-3 mb-5">
                <GearIcon size={24} className="text-orange flex-shrink-0" />
                <h2 className="text-h2 font-semibold text-brand-text leading-snug">
                  Drei Perspektiven. Ein Ansprechpartner.
                </h2>
              </div>
              <p className="text-body text-brand-gray-dark leading-relaxed mb-8">
                Ich war selbst internationale Führungskraft mit eigenen Teams,
                habe als Auftraggeber Berater und Trainer in Projekte
                eingebunden – und arbeite seit 2006 als selbstständiger Berater.
                Diese Kombination prägt meine Arbeit: Ich kenne die Perspektive
                der Führungskraft, die des Auftraggebers und die des Beraters –
                und weiß, was in der Realität zwischen Strategie und
                Tagesgeschäft passiert. Mein Sitz ist in Düsseldorf, meine
                Projekte reichen durch den gesamten DACH-Raum und darüber
                hinaus.
              </p>
              <Link
                href="/ueber-mich"
                className="inline-flex items-center gap-2 text-orange font-semibold hover:text-denver-blue transition-colors group"
              >
                Mehr über mich
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
            <div className="lg:col-span-1 lg:order-1">
              <Image
                src="/Offen_laecheln.png"
                alt="Marcus Holzheimer, Berater für Führung, Karriere und Vertrieb"
                width={1080}
                height={1080}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 4: Shopvote-Platzhalter ────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 font-semibold text-brand-text mb-3">
            Was meine Klientinnen und Klienten sagen.
          </h2>
          <p className="text-sm text-brand-gray-dark mb-10">
            Alle Bewertungen werden von Shopvote unabhängig geprüft – hier
            schreiben echte Klientinnen und Klienten über ihre Erfahrungen.
          </p>
          {/* Shopvote Widget: DSGVO-Prüfung vor Einbindung erforderlich */}
          <div className="border-2 border-dashed border-brand-gray-mid-light rounded-xl py-16 px-8 text-brand-gray-mid text-sm">
            Shopvote-Widget wird hier eingebunden
          </div>
        </div>
      </section>

      {/* ── Abschnitt 5: Kontakt ─────────────────────────────────── */}
      <ContactSection
        headline="Sprechen wir miteinander."
        subtext="Das Kennenlerngespräch ist ein offenes Gespräch auf Augenhöhe – ich höre zu, stelle Fragen und gebe Ihnen eine erste Einschätzung. Danach entscheiden Sie in Ruhe, ob eine Zusammenarbeit für Sie Sinn ergibt. Am einfachsten erreichen Sie mich telefonisch."
      />
    </div>
  );
}
