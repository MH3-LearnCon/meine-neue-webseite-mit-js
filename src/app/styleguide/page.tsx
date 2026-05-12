import type { Metadata } from "next";
import type { ReactNode } from "react";
import HexagonBullet from "@/components/icons/HexagonBullet";

export const metadata: Metadata = {
  title: "Styleguide — MH3 LearnCon (intern)",
  robots: { index: false, follow: false },
};

export default function StyleguidePage() {
  return (
    <div className="animate-fade-in">
      {/* Section 0 — Hinweis */}
      <section className="bg-[#F5F5F5] pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-[3px] border-orange bg-white p-6 rounded-r-lg shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-3">
              Styleguide
            </h1>
            <div className="space-y-4 text-brand-text text-base leading-relaxed">
              <p>
                Diese Seite ist eine interne Referenz für Bauarbeiten an der
                Webseite. Sie ist nicht für Besucher gedacht und nicht in der
                Navigation gelistet.
              </p>
              <p>
                Single Source of Truth bleibt das Dokument
                Design_System_MH3_v1_2.md. Diese Seite spiegelt visuell — bei
                Konflikten gewinnt das Design-System-Dokument.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — Farbpalette */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-8 md:mb-10">
            Farbpalette
          </h2>

          <h3 className="text-xl font-semibold text-brand-text mb-4">
            Primärfarben
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <ColorSwatch
              name="Denver-Blau"
              hex="#002244"
              token="denver-blue"
              role="Architektur-Akzent: Linien, Borders, Quotes, Marcus-Perspektive."
              swatchClassName="bg-denver-blue"
            />
            <ColorSwatch
              name="Orange"
              hex="#FF9B01"
              token="orange / text-orange"
              role="Interaktions-Akzent: Buttons, CTAs, HexagonBullets, Leser-Perspektive."
              swatchClassName="bg-orange"
            />
            <ColorSwatch
              name="Anthrazit"
              hex="#222222"
              token="text-brand-text"
              role="Fließtext, Button-Text."
              swatchClassName="bg-brand-text"
            />
          </div>

          <h3 className="text-xl font-semibold text-brand-text mb-4">
            Sekundärfarben
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ColorSwatch
              name="Hellgrau"
              hex="#F5F5F5"
              token="bg-brand-gray-light"
              role="Alternating Section-Hintergrund, Hover OfferCards."
              swatchClassName="bg-brand-gray-light border border-brand-gray-mid-light"
            />
            <ColorSwatch
              name="Mittelgrau hell"
              hex="#D9D9D9"
              token="border-brand-gray-mid-light"
              role="Card-Borders (alle Karten-Typen)."
              swatchClassName="bg-[#D9D9D9]"
            />
            <ColorSwatch
              name="Mittelgrau"
              hex="#9D9D9D"
              token="text-brand-gray-mid"
              role="Tertiäre Elemente."
              swatchClassName="bg-brand-gray-mid"
            />
            <ColorSwatch
              name="Dunkelgrau"
              hex="#828282"
              token="—"
              role="Subtexte, Platzhalter-Text."
              swatchClassName="bg-[#828282]"
            />
            <ColorSwatch
              name="Weiß"
              hex="#FFFFFF"
              token="—"
              role="Hintergrund, Card-Füllung."
              swatchClassName="bg-white border border-brand-gray-mid-light"
            />
          </div>

          <div className="border-l-[3px] border-orange bg-white p-6 shadow-sm rounded-r-lg mt-12 space-y-3 text-sm text-brand-text leading-relaxed">
            <p className="font-semibold text-brand-text">
              Farblogik (verbindlich):
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Orange = Leser-Perspektive (SituationCards, HexagonBullets,
                CTAs)
              </li>
              <li>
                Denver-Blau = Marcus-Perspektive (Quotes, Praxis-Karten,
                Prozessschritte, OfferCards)
              </li>
              <li>
                Denver-Blau ist Linien- und Akzentfarbe, keine Flächenfarbe.
              </li>
            </ul>
            <p>
              Keine neuen Farbwerte ohne explizite Freigabe. Keine
              Tailwind-Standard-Farben (gray-100 etc.) als Ersatz.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Typografie */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8">
            Typografie
          </h2>

          <p className="text-base text-brand-text leading-relaxed max-w-3xl mb-8">
            Montserrat, lokal eingebunden via next/font. Kein externer
            Google-Fonts-Aufruf (DSGVO).
          </p>

          <div className="space-y-8">
            <TypeSample
              sample={
                <p className="text-5xl font-extrabold text-brand-text">
                  Überschrift Ebene 1
                </p>
              }
              meta="H1 · 48px / 3rem · 800 (Bold)"
              usage="Genau eine H1 pro Seite (SEO)."
            />
            <TypeSample
              sample={
                <p className="text-2xl md:text-3xl font-bold text-brand-text">
                  Überschrift Ebene 2
                </p>
              }
              meta="H2 · 32px / 2rem · 600 (Semibold) - 700 (Bold)"
              usage="Abschnitts-Überschriften."
            />
            <TypeSample
              sample={
                <p className="text-xl md:text-2xl font-medium text-brand-text">
                  Abschnittstitel
                </p>
              }
              meta="Section Header · 28px / 1.75rem · 500 (Medium)"
              usage="Unter-Abschnitts-Titel innerhalb einer Section."
            />
            <TypeSample
              sample={
                <p className="text-base leading-relaxed text-brand-text">
                  Dies ist Standard-Fließtext, der den Großteil der Inhalte
                  trägt. Die Zielgruppe ist 35–55 Jahre, daher großzügiger
                  Zeilenabstand und angenehme Lesegröße.
                </p>
              }
              meta="Paragraph · 16px / 1rem · 400 (Regular)"
              usage="Standard-Fließtext."
            />
            <TypeSample
              sample={
                <p className="text-xl font-medium text-brand-text border-l-4 border-denver-blue pl-6 py-3">
                  „Eine herausgestellte Aussage in Marcus&apos; Stimme.“
                </p>
              }
              meta="Quote · 20px / 1.25rem · 500 (Medium)"
              usage="Marcus-Perspektive, Quote-Format (siehe Karten-Section)."
            />
            <TypeSample
              sample={
                <p className="text-xl font-medium text-center text-brand-text">
                  Ein zentrierter Satz zwischen zwei Sections.
                </p>
              }
              meta="Transition Hook · text-xl · 500 (Medium), zentriert"
              usage="Erkennung in Relevanz überführen. Selten einsetzen."
            />
            <TypeSample
              sample={
                <p className="text-xl font-medium text-brand-text border-l-4 border-denver-blue pl-6 py-3">
                  Über 65 verifizierte Bewertungen
                </p>
              }
              meta="Kennzahl-Quote · text-xl · 500 (Medium)"
              usage="Prägnante Zahlen, Shopvote-Section."
            />
          </div>

          <div className="border-l-[3px] border-orange bg-white p-6 shadow-sm rounded-r-lg mt-12">
            <p className="text-sm text-brand-text leading-relaxed">
              Regel: Kein Italic — projektweite Regel, keine Ausnahmen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Karten */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8">
            Karten
          </h2>

          <p className="text-base text-brand-text leading-relaxed max-w-3xl mb-12">
            Sieben Karten-Typen, klar differenziert nach Funktion und
            visueller Gewichtung. Hierarchie von stark zu schwach. Bei neuer
            Karten-Anforderung: prüfen, ob eine existierende Variante passt,
            bevor eine neue erstellt wird.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                SituationCards
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Situationsfragen an den Besucher. Orange-Leiste links
                signalisiert Leser-Perspektive. Primäre Karten, höchste
                visuelle Gewichtung. Layout im echten Einsatz: 2×2-Grid
                (md:grid-cols-2), Stack auf Mobile.
              </p>
              <div className="max-w-3xl">
                <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-orange bg-white p-6 shadow-md md:p-8">
                  <h4 className="font-bold text-lg mb-2 text-brand-text">
                    Beispiel: Situationsfrage
                  </h4>
                  <p className="text-brand-text leading-relaxed">
                    Beschreibender Text, in dem eine typische Situation des
                    Lesers gespiegelt wird.
                  </p>
                </article>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                Praxis-Karten
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Fallbeispiele aus der Praxis. Denver-Blau-Leiste links
                signalisiert Marcus-Perspektive. Layout im echten Einsatz:
                einspaltig, space-y-6.
              </p>
              <div className="max-w-3xl">
                <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-md md:p-8">
                  <h4 className="font-bold text-lg mb-2 text-brand-text">
                    Beispiel: Vom Workshop zum Projekt.
                  </h4>
                  <p className="text-brand-text leading-relaxed">
                    Kurzfassung des Falls — Anfrage, Bedarfsanalyse, Ergebnis.
                    Marcus erzählt aus eigener Erfahrung.
                  </p>
                </article>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                OfferCards
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Klickbare Angebots-Karten (Bootcamp, Community). Denver-Blau
                Border-Top als Akzent, gesamte Karte klickbar mit
                hover:bg-[#F5F5F5]. Pfeil-CTA am Fuß.
              </p>
              <div className="max-w-3xl">
                <div className="rounded-lg border border-brand-gray-mid-light border-t-4 border-t-denver-blue bg-white p-6 shadow-md transition-colors hover:bg-[#F5F5F5] cursor-pointer md:p-8">
                  <h4 className="font-bold text-lg mb-2 text-brand-text">
                    Beispiel-Angebot
                  </h4>
                  <p className="text-brand-text mb-4 leading-relaxed">
                    Beschreibung dessen, was angeboten wird.
                  </p>
                  <span className="text-orange font-semibold hover:text-denver-blue transition-colors duration-200">
                    Mehr erfahren →
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                Sequenz-Karten
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Sequenzielle Argumentationsschritte (z.B.
                Vertrieb-Umleitung). Denver-Blau-Leiste + Nummer signalisieren
                Marcus-Perspektive in Reihenfolge. Bewusst leichter (shadow-sm)
                als Praxis-Karten. Layout im echten Einsatz: einspaltig,
                max-w-4xl, space-y-6.
              </p>
              <div className="max-w-3xl">
                <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-sm md:p-8">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-bold text-denver-blue">
                      1
                    </span>
                    <h4 className="text-lg font-bold text-brand-text">
                      Schritt-Titel
                    </h4>
                  </div>
                  <p className="text-brand-text leading-relaxed">
                    Beschreibung des Schritts in einer kurzen
                    Argumentations-Kette.
                  </p>
                </article>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                Statement Cards
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Marken-Akzent auf der Startseite (Z-Pattern). Border 3px
                Denver-Blau + harter Orange-Offset-Schatten. Pointierte
                Aussagen in Marcus-Stimme. Ausschließlich Startseite.
              </p>
              <div className="max-w-3xl">
                <div className="bg-white border-[3px] border-denver-blue shadow-[4px_4px_0px_0px_#FF9B01] rounded-lg p-6 lg:aspect-square flex items-center justify-center text-center text-lg lg:text-xl font-semibold text-denver-blue">
                  <p>Eine pointierte Aussage in zwei Zeilen.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                Themen-Karten
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Sekundäre Container für Scan-Listen (z.B.
                Themen-Abschnitte). Kein Akzent, shadow-sm. HexagonBullet
                übernimmt das Farbsignal. Layout im echten Einsatz:
                grid-cols-1 md:grid-cols-2 gap-4.
              </p>
              <div className="max-w-3xl">
                <div className="bg-white border border-brand-gray-mid-light shadow-sm rounded-lg px-4 py-3">
                  <div className="flex items-start gap-3">
                    <HexagonBullet
                      size={12}
                      className="mt-1.5 shrink-0 text-orange"
                    />
                    <span className="text-brand-text">
                      Beispiel-Thema in einer Zeile
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                Akkordeon-Trigger
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Interaktive Trigger für aufklappbare Inhalte (Simulation,
                Über-mich). #E5E5E5-Füllung, kein Border, kein Schatten.
                Plus/Minus-Icon in Orange.
              </p>
              <div className="max-w-3xl">
                <div
                  className="bg-[#E5E5E5] hover:bg-[#D8D8D8] rounded-lg p-4 flex items-center justify-between cursor-pointer transition-colors duration-200"
                  role="presentation"
                >
                  <span className="font-medium text-brand-text">
                    Akkordeon-Trigger Beispiel
                  </span>
                  <span className="text-orange text-2xl leading-none">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ColorSwatch({
  name,
  hex,
  token,
  role,
  swatchClassName,
}: {
  name: string;
  hex: string;
  token: string;
  role: string;
  swatchClassName: string;
}) {
  return (
    <div>
      <div
        className={`aspect-square w-full rounded-lg ${swatchClassName}`}
        aria-hidden="true"
      />
      <div className="mt-3 space-y-1">
        <p className="font-bold text-lg text-brand-text">{name}</p>
        <p className="font-mono text-sm text-brand-gray-mid">{hex}</p>
        <p className="font-mono text-sm text-brand-gray-mid">{token}</p>
        <p className="text-sm text-brand-text">{role}</p>
      </div>
    </div>
  );
}

function TypeSample({
  sample,
  meta,
  usage,
}: {
  sample: ReactNode;
  meta: string;
  usage: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg border border-brand-gray-mid-light shadow-sm">
      <div className="md:flex md:justify-between md:items-baseline md:gap-8">
        <div className="min-w-0 flex-1 mb-4 md:mb-0">{sample}</div>
        <div className="shrink-0 md:max-w-xs md:text-right">
          <p className="text-sm text-brand-gray-mid font-mono">{meta}</p>
          <p className="text-sm text-brand-text mt-2 leading-relaxed">
            {usage}
          </p>
        </div>
      </div>
    </div>
  );
}
