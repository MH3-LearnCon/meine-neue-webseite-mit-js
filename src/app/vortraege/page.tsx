import type { Metadata } from "next";

import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import VortraegeListe from "@/components/VortraegeListe";

export const metadata: Metadata = {
  title: "Vorträge & Impulse: Führung, Karriere & mehr | MH3 LearnCon",
  description:
    "Vorträge & Impulse zu Führung, Karriere, Kommunikation und Netzwerken — interaktiv, mit Zauberkunststücken, die eine Botschaft tragen. Auf Deutsch und Englisch.",
};

const FORMAT_KARTEN = [
  {
    titel: "Impuls",
    text: "Ein kurzer, aktivierender Anstoß (oft 20–30 Minuten), der ein Thema öffnet und Lust auf mehr macht — häufig Türöffner für Bootcamp oder Beratung.",
  },
  {
    titel: "Vortrag",
    text: "Ein Thema in der Tiefe, 2–3 Stunden nach Wunsch; interaktiv und mit Anschauungsmaterial.",
  },
  {
    titel: "Keynote",
    text: "Ein pointierter Leit-Vortrag mit Bühnenwert für den großen Rahmen.",
  },
] as const;

export default function VortraegePage() {
  return (
    <div className="animate-fade-in">
      {/* ── Abschnitt 1: Hero ─────────────────────────────────────── */}
      <Hero
        h1="Vorträge & Impulse, die hängen bleiben."
        subline="Für Führung, Karriere, Kommunikation, Soft Skills und mehr — auf Deutsch und Englisch."
        body="Mit viel Interaktion, Anschauungsmaterial und Zauberkunststücken, die jeweils eine Botschaft tragen — damit Inhalte hängen bleiben und in die Umsetzung kommen. Viele Themen auch als Workshop möglich."
        imageLabel="Bühne / Vortrag"
      />

      {/* ── Abschnitt 2: So funktionieren meine Vorträge ──────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
            aria-hidden="true"
          />
          <h2 className="mb-6 text-h2 font-semibold leading-snug text-brand-text md:mb-8">
            So funktionieren meine Vorträge
          </h2>
          <p className="text-body text-brand-text">
            Alle Formate sind interaktiv — mit lebendiger Sprache, Storytelling,
            Anschauungsmaterial und Zauberkunststücken, die eine Botschaft
            tragen. Gelegentlich kommt ein Arbeitsblatt für eigene Notizen dazu.
            Geübt und vertieft wird im Workshop; im Vortrag wird erlebt,
            mitgedacht und mitgemacht.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {FORMAT_KARTEN.map((karte) => (
              <article
                key={karte.titel}
                className="rounded-lg border border-brand-gray-mid-light bg-white px-4 py-3 shadow-sm"
              >
                <h3 className="mb-2 text-base font-bold text-brand-text md:text-lg">
                  {karte.titel}
                </h3>
                <p className="text-body text-brand-text">{karte.text}</p>
              </article>
            ))}
          </div>

          <h3 className="mb-4 mt-10 text-base font-semibold text-brand-text md:mt-12 md:text-lg">
            Für welche Anlässe?
          </h3>
          <p className="text-body text-brand-text">
            Tagungen & Kongresse · Kick-offs · Mitarbeiter- & Kundenevents ·
            Führungskräfte-Runden · Abend- & Rahmenprogramm.
          </p>
        </div>
      </section>

      {/* ── Abschnitt 3: Katalog ──────────────────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
            aria-hidden="true"
          />
          <VortraegeListe />
        </div>
      </section>

      {/* ── Abschnitt 4: Der technische Rahmen ────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
            aria-hidden="true"
          />
          <h2 className="mb-6 text-h2 font-semibold leading-snug text-brand-text md:mb-8">
            Der technische Rahmen
          </h2>
          <p className="text-body text-brand-text">
            Üblicherweise stellt die einladende Organisation den Rahmen: Beamer
            mit Leinwand und ein Flipchart mit Stiften. Das ist der Standard.
          </p>
          <p className="mt-4 text-body text-brand-text">
            Haben Sie andere Rand- und Rahmenbedingungen oder besondere Wünsche,
            stimmen wir uns vorab kurz ab — ein Anlass zum Gespräch, kein
            Ausschlusskriterium.
          </p>
        </div>
      </section>

      {/* ── Abschnitt 5: Kontakt ──────────────────────────────────── */}
      <ContactSection />
    </div>
  );
}
