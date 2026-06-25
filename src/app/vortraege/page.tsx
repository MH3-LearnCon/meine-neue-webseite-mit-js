import type { Metadata } from "next";

import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import VortraegeListe from "@/components/VortraegeListe";

export const metadata: Metadata = {
  title: "Vorträge & Impulse: Führung, Karriere & mehr | MH3 LearnCon",
  description:
    "Vorträge & Impulse zu Führung, Karriere, Kommunikation und Netzwerken — interaktiv, mit Zauberkunststücken, die eine Botschaft tragen. Auf Deutsch und Englisch.",
};

export default function VortraegePage() {
  return (
    <div className="animate-fade-in">
      {/* ── Abschnitt 1: Hero ─────────────────────────────────────── */}
      <Hero
        h1="Vorträge & Impulse: Führung, Karriere, Kommunikation, Soft Skills und mehr …"
        subline="Inhalte, die hängen bleiben — und in die Umsetzung kommen."
        body="Mit viel Interaktion, Anschauungsmaterial und Zauberkunststücken, die jeweils eine Botschaft tragen — damit Inhalte hängen bleiben und in die Umsetzung kommen. Auf Deutsch und Englisch, viele auch als Workshop möglich."
        imageLabel="Bühne / Vortrag"
      />

      {/* ── Abschnitt 2: Katalog + Filter ─────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
            aria-hidden="true"
          />
          <VortraegeListe />
        </div>
      </section>

      {/* ── Abschnitt 3: Gut zu wissen ────────────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
            aria-hidden="true"
          />
          <h2 className="mb-8 text-h2 font-semibold leading-snug text-brand-text md:mb-10">
            Gut zu wissen
          </h2>
          <div className="space-y-6">
            <article className="rounded-lg border border-brand-gray-mid-light bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-base font-bold text-brand-text md:text-lg">
                Impuls
              </h3>
              <p className="text-body text-brand-text">
                Kurzer, aktivierender Beitrag (oft 20–30 Min), der ein Thema
                anstößt und Lust auf mehr macht — häufig Türöffner für Bootcamp
                oder Beratung.
              </p>
            </article>
            <article className="rounded-lg border border-brand-gray-mid-light bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-base font-bold text-brand-text md:text-lg">
                Vortrag
              </h3>
              <p className="text-body text-brand-text">
                2–3 Stunden nach Wunsch, interaktiv, mit Anschauungsmaterial und
                Übungsanteilen.
              </p>
            </article>
            <article className="rounded-lg border border-brand-gray-mid-light bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-base font-bold text-brand-text md:text-lg">
                Keynote
              </h3>
              <p className="text-body text-brand-text">
                Pointierter Leit-Vortrag mit Bühnenwert für den großen Rahmen.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 4: Für welche Anlässe? ──────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
            aria-hidden="true"
          />
          <h2 className="mb-6 text-h2 font-semibold leading-snug text-brand-text md:mb-8">
            Für welche Anlässe?
          </h2>
          <p className="text-body text-brand-text">
            Tagungen & Kongresse · Kick-offs · Mitarbeiter- & Kundenevents ·
            Führungskräfte-Runden · Abend- & Rahmenprogramm.
          </p>
        </div>
      </section>

      {/* ── Abschnitt 5: Was ich brauche ──────────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
            aria-hidden="true"
          />
          <h2 className="mb-6 text-h2 font-semibold leading-snug text-brand-text md:mb-8">
            Was ich brauche
          </h2>
          <p className="text-body text-brand-text">
            <span className="font-semibold">Pflicht:</span> Beamer mit Leinwand,
            Flipchart mit Stiften.
          </p>
          <p className="mt-4 text-body text-brand-text">
            <span className="font-semibold">Flexibel:</span> Bestuhlung egal
            (Reihen, Hörsaal, Kino — auch stehend). Ton meist nicht nötig (Voice
            Worker, 200–300 Personen ohne Mikro); wenn doch, Lavalier statt
            Handmikro.
          </p>
        </div>
      </section>

      {/* ── Abschnitt 6: Kontakt ──────────────────────────────────── */}
      <ContactSection />
    </div>
  );
}
