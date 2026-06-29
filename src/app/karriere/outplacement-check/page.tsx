import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Image from "next/image";
import SituationCard from "@/components/SituationCard";
import OfferCard from "@/components/OfferCard";
import ContactSection from "@/components/ContactSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import Note from "@/components/Note";

export const metadata: Metadata = {
  title: "Outplacement-Check | MH3 LearnCon",
  description:
    "Sie haben ein Outplacement-Angebot vorliegen? Eine unabhängige, erfahrungsbasierte Einschätzung – was wirklich drinsteckt, wo Sie nachverhandeln können und welche Optionen Sie haben. Vertraulich, auf Augenhöhe.",
};

const CHECK_PUNKTE = [
  {
    lead: "Einordnung",
    benefit: "Was in Ihrem Paket wirklich steckt – und was davon trägt.",
  },
  {
    lead: "Nachverhandeln",
    benefit: "Wo es sich lohnt und wie Sie es ansprechen.",
  },
  {
    lead: "Format",
    benefit:
      "Ob ein strukturiertes Programm das Richtige ist oder ob ein paar gezielte Stunden mehr bringen.",
  },
  {
    lead: "Optionen",
    benefit: "Welche Wege Sie haben, die im Angebot gar nicht stehen.",
  },
  {
    lead: "Anbieter-Qualität",
    benefit:
      "Eine ehrliche Einschätzung – Outplacement-Berater ist keine geschützte Berufsbezeichnung.",
  },
];

export default function OutplacementCheckPage() {
  return (
    <div className="animate-fade-in">
      {/* ── Abschnitt 1: Hero ─────────────────────────────────────── */}
      <Hero
        h1="Outplacement-Check"
        subline="Ist das Angebot, das vor Ihnen liegt, wirklich gut für Sie?"
        body="Nach einer Trennung liegt schnell ein Outplacement-Paket auf dem Tisch – oft vom Arbeitgeber bezahlt, auf den ersten Blick großzügig. Ich kenne diese Branche von innen: als früherer Auftraggeber von Beratern und als Berater. Diese Erfahrung nutze ich, um Ihr Angebot und Ihre Lage ehrlich einzuschätzen – damit Ihre Entscheidung Ihnen wirklich nützt."
        image={
          <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
            <Image
              src="/hero-outplacement.png"
              alt="Marcus Holzheimer, Berater für den Outplacement-Check"
              width={1448}
              height={1086}
              priority
              className="h-auto w-full"
            />
          </div>
        }
      />

      {/* ── Abschnitt 2: Situationen ──────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8" aria-hidden="true" />
          <h2 className="text-h2 font-semibold text-brand-text mb-10 md:mb-12 leading-snug">
            Wann ein neutraler Blick hilft.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <Reveal delay={0}>
              <SituationCard
                headline="Ein Paket liegt auf dem Tisch – und Sie sind unsicher, ob es gut ist."
                body="Der Arbeitgeber bietet ein Outplacement-Programm an, und es wirkt großzügig. Gleichzeitig fehlt Ihnen der Vergleichsmaßstab: Ist das Angebot auf Ihre Situation zugeschnitten oder Standard von der Stange? Genau hier hilft ein neutraler Blick, bevor Sie unterschreiben."
                hover
              />
            </Reveal>
            <Reveal delay={90}>
              <SituationCard
                headline="Sie wollen den Prozess selbst in die Hand nehmen."
                body="Vielleicht möchten Sie kein vorgefertigtes Programm, sondern gezielte Unterstützung an den Stellen, die zählen. Eine ehrliche Einschätzung Ihrer Lage zeigt, welche Schritte Sie wirklich weiterbringen – und welche Sie sich sparen können."
                hover
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 3: Was der Check liefert ────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8" aria-hidden="true" />
          <h2 className="text-h2 font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Was der Check Ihnen liefert.
          </h2>
          <Reveal>
            <ul
              className="grid grid-cols-1 list-none gap-4 p-0 m-0 md:grid-cols-2"
              role="list"
            >
              {CHECK_PUNKTE.map((punkt) => (
                <li
                  key={punkt.lead}
                  className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-orange bg-white px-5 py-4 shadow-sm"
                >
                  <p className="text-body text-brand-text">
                    <span className="font-bold text-denver-blue">
                      {punkt.lead}.
                    </span>{" "}
                    {punkt.benefit}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Note className="mt-10">
            <p>
              <span className="font-semibold">Outplacement-Checkliste:</span>{" "}
              Die wichtigsten Prüfpunkte auf einen Blick – damit Sie ein Angebot
              auch ohne mich einordnen können. Kostenfrei.
            </p>
            <p className="mt-3">
              <a
                href="/downloads/Outplacement-Check-Liste.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange font-semibold hover:text-denver-blue transition-colors"
              >
                Checkliste herunterladen (PDF) →
              </a>
            </p>
            <p className="mt-2 text-sm text-brand-gray-dark">
              Öffnen mit dem Passwort MH3 – das gilt auch, wenn Sie die Checkliste
              weitergeben.
            </p>
          </Note>
        </div>
      </section>

      {/* ── Abschnitt 4: Zwei Wege ────────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8" aria-hidden="true" />
          <h2 className="text-h2 font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Zwei Wege, mit mir zu arbeiten.
          </h2>
          <Reveal>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
              <OfferCard title="Sie zahlen selbst" ctaHref="#kontakt" ctaText="Gespräch vereinbaren →">
                Stundenbasierte Einzelberatung und die Outplacement-Checkliste zur
                Selbsteinordnung – ohne Paketpreis, ohne Laufzeitbindung. Sie holen
                sich genau die Einschätzung und Unterstützung, die Sie brauchen.
              </OfferCard>
              <OfferCard title="Ihr Arbeitgeber zahlt" ctaHref="#kontakt" ctaText="Gespräch vereinbaren →">
                Ein schlankes Programm, das ich weitgehend selbst liefere – wenige
                Schnittstellen, ein Ansprechpartner statt einer
                Partner-Orchestrierung. Persönlich, diskret, auf Ihr Niveau
                zugeschnitten.
              </OfferCard>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Abschnitt 5: Leitsatz ─────────────────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8" aria-hidden="true" />
          <blockquote className="ml-10 mr-8 border-l-4 border-denver-blue py-3 pl-6">
            <p className="text-xl font-medium leading-relaxed text-brand-text">
              Nicht das längste Programm ist das beste – sondern das wirksamste.
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── Abschnitt 6: So läuft es ab ───────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8" aria-hidden="true" />
          <h2 className="text-h2 font-semibold text-brand-text leading-snug">
            So läuft der Check ab.
          </h2>
          <ProcessSteps
            animated
            steps={[
              {
                step: 1,
                title: "Kennenlernen.",
                body: "Sie schildern Ihre Situation und Ihr Angebot. Ich höre zu, stelle Fragen und gebe Ihnen eine erste Einordnung.",
              },
              {
                step: 2,
                title: "Ehrliche Einschätzung.",
                body: "Ich bewerte Angebot und Lage neutral – was trägt, was fehlt, wo Sie nachverhandeln können und welche Optionen Sie sonst noch haben.",
              },
              {
                step: 3,
                title: "Optionen und Umsetzung.",
                body: "Sie entscheiden, ob ein kurzes Gespräch reicht oder ob wir gezielt weiterarbeiten. Stundenbasiert, ohne Paketpreis, ohne Laufzeitbindung.",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Abschnitt 7: Kontakt ──────────────────────────────────── */}
      <ContactSection
        headline="Ist das Angebot wirklich gut für Sie?"
        subtext="Ein erstes Gespräch ist kostenfrei und unverbindlich. Schildern Sie mir Ihre Situation – Sie bekommen eine ehrliche Einschätzung, ganz ohne Verkaufsdruck."
      />
    </div>
  );
}
