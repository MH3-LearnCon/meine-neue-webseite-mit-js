import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CalendarDays, Mail, Phone } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import Note from "@/components/Note";
import { ProcessSteps } from "@/components/ProcessSteps";
import ShopvoteBadge from "@/components/ShopvoteBadge";
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

          <p className="text-body text-brand-text leading-relaxed max-w-3xl mb-8">
            Montserrat, lokal eingebunden via next/font. Kein externer
            Google-Fonts-Aufruf (DSGVO). Alle Größen sind responsive Tokens
            (clamp): Desktop-Obergrenze wie bisher, auf Mobile skalieren sie
            herunter — zoom- und WCAG-sicher.
          </p>

          <div className="space-y-8">
            <TypeSample
              sample={
                <p className="text-h1 text-brand-text">
                  Überschrift Ebene 1
                </p>
              }
              meta="H1 · Token text-h1 · clamp 32→48px (responsiv) · 800"
              usage="Genau eine H1 pro Seite (SEO)."
            />
            <TypeSample
              sample={
                <p className="text-h2 text-brand-text">
                  Überschrift Ebene 2
                </p>
              }
              meta="H2 · Token text-h2 · clamp 24→32px (responsiv) · 600"
              usage="Abschnitts-Überschriften."
            />
            <TypeSample
              sample={
                <p className="text-h3 font-medium text-brand-text">
                  Abschnittstitel
                </p>
              }
              meta="H3 · Token text-h3 · clamp 20→24px (responsiv)"
              usage="Unter-Abschnitts-Titel innerhalb einer Section."
            />
            <TypeSample
              sample={
                <p className="text-body text-brand-text">
                  Dies ist Standard-Fließtext, der den Großteil der Inhalte
                  trägt. Die Zielgruppe ist 35–55 Jahre, daher großzügiger
                  Zeilenabstand und angenehme Lesegröße.
                </p>
              }
              meta="Paragraph · Token text-body · clamp 16→18px (responsiv) · 400"
              usage="Standard-Fließtext."
            />
            <TypeSample
              sample={
                <p className="text-pointe font-semibold text-orange">
                  Werkzeuge, die im Führungsalltag wirklich tragen.
                </p>
              }
              meta="Pointe · Token text-pointe · clamp 20→24px (responsiv)"
              usage="Orange Subline unter H1 (Lesersicht-Akzent)."
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
                Sequenzielle Argumentationsschritte (Marcus-Perspektive). Im echten
                Einsatz immer in einer Reihe mit aufeinander folgenden Nummern —
                das Reihen-Signal trägt die Argumentations-Kette. Große
                Denver-Blau-Nummer in fester Größe + Orange-Offset-Schatten
                differenzieren visuell klar von Praxis-Karten.
              </p>
              <div className="max-w-3xl">
                <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-[2px_2px_0px_0px_#FF9B01] md:p-8">
                  <div className="flex items-start gap-4 md:gap-6">
                    <span className="text-5xl md:text-6xl font-bold text-denver-blue leading-none shrink-0 min-w-[3rem] md:min-w-[4rem]">
                      1
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold mb-2 text-brand-text">
                        Schritt-Titel
                      </h4>
                      <p className="text-base text-brand-text leading-relaxed">
                        Beschreibung des Schritts in einer kurzen
                        Argumentations-Kette.
                      </p>
                    </div>
                  </div>
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
              <div className="max-w-xs">
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
                <div className="border-l-[3px] border-orange bg-white p-4 rounded-r-lg shadow-sm mt-4">
                  <p className="text-sm text-brand-text leading-relaxed">
                    Watchlist: Das aktuelle Akkordeon-Trigger-Design (#E5E5E5-Füllung,
                    kein Border, kein Schatten) wirkt isoliert sehr unscheinbar.
                    Aktuell ist noch kein Akkordeon auf einer Seite verbaut. Beim Bau
                    der ersten Seite mit Akkordeon (vermutlich Simulation oder
                    Über-mich) mit echtem Inhalt iterieren und entscheiden, ob mehr
                    Klickbarkeits-Signal nötig ist (Border, Schatten, prominenteres
                    Plus-Icon).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Buttons */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8">
            Buttons
          </h2>
          <p className="text-base text-brand-text leading-relaxed max-w-3xl mb-8">
            Zwei optische Tiers: Primär (T1) und Sekundär (T2). Telefon ist die
            Primär-Aktion (orange gefüllt); E-Mail und Calendly teilen sich
            dieselbe Sekundär-Optik (Denver-Blau-Rahmen) — es gibt kein drittes
            Button-Tier. Die Reihenfolge Telefon → E-Mail → Calendly regelt die
            Priorität, nicht das Aussehen. Projektweite Hover-Konvention:
            Hintergrund wechselt auf Denver-Blau, Text auf Weiß, Border auf
            Denver-Blau — mit transition-colors duration-200. Keine Ausnahmen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-brand-text mb-2">
                Primär (T1)
              </h3>
              <p className="text-base text-brand-text mb-6 leading-relaxed">
                Telefon-CTA, höchste Priorität. Orange gefüllt, weiße Schrift.
                Wird nur einmal pro Section eingesetzt — der wichtigste
                Klickziel-Anker.
              </p>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-orange px-6 py-3 font-semibold text-white shadow-sm transition-colors duration-200 hover:border-denver-blue hover:bg-denver-blue hover:text-white self-start"
              >
                <Phone size={18} aria-hidden="true" />
                0171 88 202 77
              </button>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-brand-text mb-2">
                Sekundär (T2) · E-Mail
              </h3>
              <p className="text-base text-brand-text mb-6 leading-relaxed">
                E-Mail-CTA. Denver-Blau-Rahmen mit Denver-Blau-Schrift auf Weiß,
                dezenter als der gefüllte Primär-Button. Gleiche T2-Optik wie der
                Calendly-Button.
              </p>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-denver-blue bg-white px-6 py-3 font-semibold text-denver-blue shadow-sm transition-colors duration-200 hover:border-denver-blue hover:bg-denver-blue hover:text-white self-start"
              >
                <Mail size={18} aria-hidden="true" />
                E-Mail schreiben
              </button>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-brand-text mb-2">
                Sekundär (T2) · Calendly
              </h3>
              <p className="text-base text-brand-text mb-6 leading-relaxed">
                Calendly-CTA. Optisch dasselbe Tier wie E-Mail (T2) — das
                Kalender-Icon ersetzt den Briefumschlag. In der
                Kontaktreihenfolge an dritter Stelle (Telefon → E-Mail →
                Calendly); das ist Priorität, kein eigenes Button-Tier.
              </p>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-denver-blue bg-white px-6 py-3 font-semibold text-denver-blue shadow-sm transition-colors duration-200 hover:border-denver-blue hover:bg-denver-blue hover:text-white self-start"
              >
                <CalendarDays size={18} aria-hidden="true" />
                Termin online vereinbaren
              </button>
            </div>
          </div>

          <div className="border-l-[3px] border-orange bg-white p-4 rounded-r-lg shadow-sm mt-6">
            <p className="text-sm text-brand-text leading-relaxed">
              Hover-Test: Fahre mit der Maus über die Buttons. Alle drei wechseln
              einheitlich auf Denver-Blau-Hintergrund mit weißer Schrift. Dieser
              Wechsel ist projektweite Konvention und gilt für jeden Button auf
              jeder Seite.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — Quotes */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8">
            Quotes und Hervorhebungen
          </h2>
          <p className="text-base text-brand-text leading-relaxed max-w-3xl mb-10">
            Vier Hervorhebungs-Muster. Quote-Format und Kennzahl-Quote nutzen die
            Denver-Blau-Linie links (Marcus-Perspektive). Der Transition Hook ist
            ein eigenständiges, zentriertes Textmuster ohne Linie. Die Hinweis-Box
            (Note) ist die kanonische „gut-zu-wissen"-Aside (Lesersicht, oranger
            Zahnrad-Akzent).
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                Quote-Format
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Herausgestellte Aussagen in Marcus&apos; Stimme. Denver-Blau-Linie
                links, eingerückt vom Fließtext, größere Schrift als Body. Für
                Obligation to Dissent, prägnante Aussagen und Marcus-Statements im
                Lesefluss.
              </p>
              <blockquote className="border-l-4 border-denver-blue ml-10 mr-8 pl-6 py-3 text-xl font-medium text-brand-text">
                „Es ist nicht der größte Methodenkoffer, der trägt. Sondern die
                Werkzeuge, die im Tagesgeschäft wirken.“
              </blockquote>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                Kennzahl-Quote
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Kompakte Hervorhebung einer prägnanten Zahl oder Aussage. Gleiches
                Pattern wie Quote-Format, aber meist ohne Anführungszeichen.
                Verwendet z.B. in der Shopvote-Section.
              </p>
              <div className="border-l-4 border-denver-blue ml-10 mr-8 pl-6 py-3 text-xl font-medium text-brand-text">
                Über 65 verifizierte Bewertungen — 5 von 5 Sternen.
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                Transition Hook
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Einzelner zentrierter Satz zwischen zwei Sections, der Erkennung in
                Relevanz überführt. KEIN Design-Element, sondern ein Textmuster.
                Nicht standardmäßig einsetzen — nur, wenn der Hero-Text keinen
                eigenen starken Schluss hat. Auf der Vertrieb-Seite getestet und
                wieder entfernt, weil der Hero stark genug war.
              </p>
              <p className="text-xl font-medium text-brand-text text-center mt-14 mb-4">
                Wenn Sie sich in einer dieser Situationen wiederfinden — dann
                lohnt sich ein Gespräch.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                Hinweis-Box (Note)
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Kanonische „gut-zu-wissen"-Aside. Wiederverwendbare
                <code className="mx-1 rounded bg-brand-gray-light px-1.5 py-0.5 text-sm">
                  &lt;Note&gt;
                </code>
                -Komponente: weiße Karte, Zahnrad-Cluster (oranger Rand) links in
                vollhöher Zone. Lesersicht-Akzent. Abstände per className. Ersetzt
                die früheren orange-/Denver-Linie-Boxen (BoxedNote entfernt).
              </p>
              <Note>
                <span className="font-semibold">Gut zu wissen:</span> Ein kurzer
                Hinweis, der den Lesefluss ergänzt, ohne ihn zu unterbrechen.
              </Note>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Strukturelle Elemente */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8">
            Strukturelle Elemente
          </h2>
          <p className="text-base text-brand-text leading-relaxed max-w-3xl mb-10">
            Bausteine für Section-Strukturen: Prozessschritte, Hinweis-Boxen,
            HexagonBullets und der Section-Divider selbst.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                Prozessschritte (ProcessSteps-Komponente)
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Sequenzielle Abläufe mit nummerierten Kreisen und Verbindungslinie.
                Drei oder vier Schritte. Wiederverwendbare Komponente — Section
                regelt Hintergrund, Container-Breite und Divider, die Komponente
                selbst nur die Schritte.
              </p>
              <div className="max-w-5xl">
                <ProcessSteps
                  containerClassName="mt-0"
                  steps={[
                    {
                      step: 1,
                      title: "Kennenlerngespräch",
                      body: "Ein offenes Gespräch auf Augenhöhe — ich höre zu und stelle Fragen.",
                    },
                    {
                      step: 2,
                      title: "Klarer Plan",
                      body: "Gemeinsam definieren wir Ziel, Rahmen und nächste Schritte.",
                    },
                    {
                      step: 3,
                      title: "Umsetzung",
                      body: "Wir arbeiten am Thema — vor Ort, remote oder in Mischform.",
                    },
                  ]}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                Hinweis-Boxen
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Hervorgehobene Hinweise neben dem Fließtext. Orange-Linie links als
                Akzent (border-l-[3px] border-orange). Verwendet z.B. als „Gut zu
                wissen:“-Box auf Karriere oder als Auftraggeber-Dynamik-Hinweis auf
                Vertrieb. Eingesetzt für seitenspezifische Klarstellungen oder
                Steuerhinweise.
              </p>
              <div className="border-l-[3px] border-orange bg-white p-6 rounded-r-lg shadow-sm max-w-3xl">
                <p className="font-bold text-brand-text mb-2">Gut zu wissen:</p>
                <p className="text-base text-brand-text leading-relaxed">
                  Hier steht der Hinweis-Text, der eine ergänzende Information zum
                  Hauptinhalt der Section liefert.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                HexagonBullets
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Hexagon-förmige Bullets in Orange. Verwendet in Themen-Karten und
                überall dort, wo Listen einen Brand-Akzent brauchen. Default-Größe
                12px, text-orange.
              </p>
              <div className="space-y-8 max-w-3xl">
                <div className="flex flex-wrap gap-4 items-center">
                  <HexagonBullet size={12} className="text-orange shrink-0" />
                  <HexagonBullet size={12} className="text-orange shrink-0" />
                  <HexagonBullet size={12} className="text-orange shrink-0" />
                </div>
                <ul className="space-y-3">
                  {[
                    "Listenpunkt mit HexagonBullet als Marker",
                    "Zweiter Punkt",
                    "Dritter Punkt",
                    "Vierter Punkt",
                  ].map((label) => (
                    <li key={label} className="flex items-start gap-3">
                      <HexagonBullet
                        size={12}
                        className="mt-1.5 shrink-0 text-orange"
                      />
                      <span className="text-brand-text">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                Section-Divider
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                60×2px orange Linie, zentriert. Markiert den Beginn einer neuen
                inhaltlichen Section. Nicht zwischen allen Sections — nur an
                thematischen Übergängen. Die ContactSection nutzt stattdessen eine
                Denver-Blau-Linie (siehe Section 7).
              </p>
              <div className="bg-white rounded-lg shadow-sm p-8 max-w-md">
                <div
                  className="h-[2px] w-[60px] bg-orange mx-auto"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Shared Components */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8">
            Shared Components
          </h2>
          <p className="text-base text-brand-text leading-relaxed max-w-3xl mb-10">
            Seitenübergreifende Komponenten, die zentral gepflegt werden. Bei
            Änderung an einer dieser Komponenten ändern sich alle Seiten gleichzeitig
            — bewusste Konsistenz.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                ContactSection
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Einheitliche Kontakt-Section am Ende jeder Subpage. Eine Komponente,
                ein Text, sitewide. Keine seitenspezifischen Props. Wird ohne Wrapper
                eingebunden — die Komponente regelt Hintergrund, Padding,
                Denver-Blau-Linie und Einladungskarte selbst.
              </p>
              <ContactSection />
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                ShopvoteBadge
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Shopvote AllVotes-Grafik II (statisch, Gesamtbewertung). Eingebettet
                über ShopvoteBadge-Komponente. Auf Führung, Karriere und Vertrieb
                identisch eingesetzt. Typische Verwendung: rechte Spalte einer
                zwei-spaltigen Section, daneben Marcus-Text und Kennzahl-Quote.
              </p>
              <ShopvoteBadge enlargeOnDesktop={false} />
              <div className="border-l-[3px] border-orange bg-white p-4 rounded-r-lg shadow-sm mt-4 max-w-3xl">
                <p className="text-sm text-brand-text leading-relaxed">
                  Im echten Einsatz auf Desktop mit scale-150 skaliert (siehe Design
                  System v1.2 Abschnitt 11). Hier in nativer Größe gezeigt.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                Foto-Platzhalter
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Platzhalter für noch fehlende Fotos. bg-[#E5E5E5], rounded-xl,
                Text „Foto folgt&quot; in text-sm text-[#828282], zentriert. Format
                variiert je nach Kontext (aspect-square für Hero-Bildplätze,
                aspect-video für Video-Vorschau, individuelle Verhältnisse).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
                <div>
                  <div className="bg-[#E5E5E5] rounded-xl aspect-square flex items-center justify-center">
                    <span className="text-sm text-[#828282]">Foto folgt</span>
                  </div>
                  <p className="text-sm text-brand-gray-mid mt-2">
                    1:1 (z.B. Profilfoto)
                  </p>
                </div>
                <div>
                  <div className="bg-[#E5E5E5] rounded-xl aspect-video flex items-center justify-center">
                    <span className="text-sm text-[#828282]">Foto folgt</span>
                  </div>
                  <p className="text-sm text-brand-gray-mid mt-2">
                    16:9 (z.B. Video-Vorschau)
                  </p>
                </div>
                <div>
                  <div className="bg-[#E5E5E5] rounded-xl aspect-[4/3] flex items-center justify-center">
                    <span className="text-sm text-[#828282]">Foto folgt</span>
                  </div>
                  <p className="text-sm text-brand-gray-mid mt-2">
                    4:3 (individuell)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Container-Breiten */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8">
            Container-Breiten
          </h2>
          <p className="text-base text-brand-text leading-relaxed max-w-3xl mb-8">
            Referenz-Tabelle für Standard-Container-Breiten pro Seite und Abschnitt-
            Typ. Bei Bau einer neuen Section: hier nachschlagen, statt aus dem
            Gedächtnis zu wählen. Quelle: Design System v1.2 Abschnitt 10.
          </p>

          <h3 className="text-xl font-semibold text-brand-text mb-4">
            Subpages — Standard pro Abschnitt-Typ
          </h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left font-bold text-brand-text px-4 py-2 border-b border-brand-gray-mid-light">
                    Abschnitt-Typ
                  </th>
                  <th className="text-left font-bold text-brand-text px-4 py-2 border-b border-brand-gray-mid-light">
                    Container
                  </th>
                  <th className="text-left font-bold text-brand-text px-4 py-2 border-b border-brand-gray-mid-light">
                    Begründung
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Hero",
                    "max-w-7xl",
                    "Voller visueller Impact",
                  ],
                  [
                    "Situationskarten",
                    "max-w-6xl",
                    "Karten-Grid braucht Breite",
                  ],
                  [
                    "Berater mit Meinung (Z-Layout)",
                    "max-w-6xl",
                    "Zwei-Spalten (Text + Foto)",
                  ],
                  [
                    "Themen-Karten",
                    "max-w-6xl",
                    "Zweispaltiges Karten-Grid",
                  ],
                  [
                    "Prozessschritte",
                    "max-w-5xl",
                    "Eigener Rhythmus",
                  ],
                  [
                    "Aus der Praxis (Praxis-Karten)",
                    "max-w-5xl",
                    "Einspaltige Karten",
                  ],
                  [
                    "OfferCards",
                    "max-w-6xl (outer) / max-w-5xl (grid)",
                    "Karten eingerückt",
                  ],
                  [
                    "Shopvote",
                    "max-w-5xl",
                    "Zwei-Spalten (Text + Widget)",
                  ],
                  [
                    "Sequenz-Karten",
                    "max-w-6xl (H2) / max-w-4xl (Karten)",
                    "Karten schmaler als Überschrift",
                  ],
                  [
                    "ContactSection",
                    "intern geregelt",
                    "Shared Component",
                  ],
                ].map(([a, b, c]) => (
                  <tr key={String(a)}>
                    <td className="px-4 py-2 border-b border-brand-gray-mid-light text-brand-text align-top">
                      {a}
                    </td>
                    <td className="px-4 py-2 border-b border-brand-gray-mid-light text-brand-text align-top font-mono text-xs md:text-sm">
                      {b}
                    </td>
                    <td className="px-4 py-2 border-b border-brand-gray-mid-light text-brand-text align-top">
                      {c}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-brand-text mb-4">
            Außenkonvention (alle Sections)
          </h3>
          <div className="border-l-[3px] border-orange bg-white p-6 rounded-r-lg shadow-sm max-w-3xl">
            <p className="text-sm text-brand-text leading-relaxed space-y-3">
              <span className="block">
                Standard-Außen-Container für ALLE Sections (außer Hero und intern
                geregelte Shared Components):{" "}
                <span className="font-mono text-xs md:text-sm">
                  max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
                </span>
              </span>
              <span className="block mt-3">
                Section-Spacing:{" "}
                <span className="font-mono text-xs md:text-sm">
                  pt-6 md:pt-8 pb-12 md:pb-16
                </span>{" "}
                (asymmetrisch)
              </span>
              <span className="block mt-3">
                Hintergrund alternierend:{" "}
                <span className="font-mono text-xs md:text-sm">bg-white</span> und{" "}
                <span className="font-mono text-xs md:text-sm">bg-[#F5F5F5]</span>
              </span>
              <span className="block mt-3">
                Inner Container: nur bei expliziter Begründung (z.B. Sequenz-Karten
                schmaler als H2, ContactSection-Einladungskarte mit max-w-3xl)
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 9 — Link-System / CTA-Hierarchie */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8">
            Link-System / CTA-Hierarchie
          </h2>
          <p className="text-base text-brand-text leading-relaxed max-w-3xl mb-10">
            Die Rangordnung aller anklickbaren Elemente — von der stärksten
            Aktion bis zum dezenten Verweis: T1–T5 plus externer Link. Sie
            regelt, welches optische Gewicht ein Klickziel bekommt: eine
            Primär-Aktion pro Section, der Rest tritt zurück. Zwei Prinzipien
            tragen das System. Erstens: Ein Link ist nie kleiner als der
            Fließtext seines Kontexts — Seiteninhalt{" "}
            <span className="font-mono text-sm">text-body</span>, Karten-intern{" "}
            <span className="font-mono text-sm">text-base</span>. Zweitens:
            intern oder extern entscheidet sich an der Kontrolle (eigene Domain,
            kein fremder Cookie-Banner), nicht an{" "}
            <span className="font-mono text-sm">target=_blank</span> — eigene
            PDFs sind intern (→), fremde Ziele wie Shopvote oder ablefy extern
            (↗).
          </p>

          <h3 className="text-xl font-bold text-brand-text mb-3">
            CTA-Leiter (Überblick)
          </h3>
          <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
            Die ganze Hierarchie auf einen Blick, von stark zu schwach. Jede
            Zeile trägt links einen Farbchip mit ihrer Behandlung; die vollen
            Live-Demos der Buttons (T1/T2) stehen in der Section „Buttons", die
            der OfferCard (T5) in der Section „Karten".
          </p>
          <div className="rounded-lg border border-brand-gray-mid-light bg-white shadow-sm divide-y divide-brand-gray-mid-light max-w-3xl mb-12">
            {[
              {
                tier: "T1",
                name: "Primär-Button",
                rule: "Stärkste Aktion, orange gefüllt, Hover → Denver-Blau. Eine pro Section.",
                token: "bg-orange text-white",
                specimen: (
                  <span className="inline-flex items-center justify-center rounded bg-orange px-3 py-1.5 text-xs font-semibold text-white">
                    Aa
                  </span>
                ),
              },
              {
                tier: "T2",
                name: "Sekundär-Button",
                rule: "Denver-Blau-Rahmen auf Weiß, Hover → Denver-Blau-Füllung. E-Mail und Calendly.",
                token: "border-denver-blue text-denver-blue",
                specimen: (
                  <span className="inline-flex items-center justify-center rounded border border-denver-blue bg-white px-3 py-1.5 text-xs font-semibold text-denver-blue">
                    Aa
                  </span>
                ),
              },
              {
                tier: "T3",
                name: "Weiterführender Link (intern)",
                rule: "Oranger Textlink mit →, eigene Zeile. Interner Querverweis.",
                token: "text-body text-orange font-semibold · →",
                specimen: (
                  <span className="text-orange font-semibold">Aa →</span>
                ),
              },
              {
                tier: "T4",
                name: "Dezenter Link",
                rule: "Navigation und Footer. Kein Orange, Hover → Denver-Blau.",
                token: "text-brand-text hover:text-denver-blue",
                specimen: <span className="text-brand-text">Aa</span>,
              },
              {
                tier: "T5",
                name: "OfferCard",
                rule: "Ganze Karte klickbar plus sichtbarer CTA. Titel text-body, Body und CTA text-base.",
                token: "OfferCard-Komponente",
                specimen: (
                  <span className="inline-flex items-center justify-center rounded border-t-2 border-denver-blue bg-white px-3 py-1.5 text-xs font-semibold text-brand-text shadow-sm">
                    Aa
                  </span>
                ),
              },
              {
                tier: "Extern",
                name: "Externer Link",
                rule: "Wie T3, aber ↗ statt → (Orange/currentColor). Öffnet im neuen Tab.",
                token: "text-body text-orange font-semibold · ↗",
                specimen: (
                  <span className="text-orange font-semibold">Aa ↗</span>
                ),
              },
            ].map(({ tier, name, rule, token, specimen }) => (
              <div
                key={tier}
                className="flex items-center gap-4 px-4 py-3"
              >
                <span className="font-bold text-denver-blue shrink-0 w-16">
                  {tier}
                </span>
                <span className="shrink-0 w-20 flex justify-start">
                  {specimen}
                </span>
                <div className="min-w-0">
                  <p className="text-brand-text leading-relaxed">
                    <span className="font-semibold">{name}</span> — {rule}
                  </p>
                  <p className="font-mono text-xs text-brand-gray-mid mt-0.5">
                    {token}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                T3 — Weiterführender Link (intern)
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Interner Querverweis auf eine andere Seite. Orange, halbfett,
                Pfeil → am Ende, immer als eigene Zeile — nicht in den Fließtext
                eingebettet. Größe text-body: so groß wie der Fließtext seines
                Kontexts, nie kleiner. Hover-Signal ist allein der Farbwechsel
                zu Denver-Blau, keine Unterstreichung.
              </p>
              <span className="inline-block text-body text-orange font-semibold hover:text-denver-blue transition-colors cursor-pointer">
                Mehr zum Thema Führung →
              </span>
              <p className="font-mono text-xs text-brand-gray-mid mt-3">
                text-body text-orange font-semibold hover:text-denver-blue
                transition-colors · → · eigene Zeile · kein underline
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                T4 — Dezenter Link
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Navigation und Footer-Recht. Kein Orange — dezent in Textfarbe,
                das Hover-Signal ist nur der Wechsel zu Denver-Blau. Trägt keine
                Aktion, sondern Orientierung; kein Pfeil.
              </p>
              <span className="inline-block text-brand-text hover:text-denver-blue transition-colors cursor-pointer">
                Impressum
              </span>
              <p className="font-mono text-xs text-brand-gray-mid mt-3">
                text-brand-text hover:text-denver-blue transition-colors · kein
                Orange · kein Pfeil
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                Externer Link
              </h3>
              <p className="text-base text-brand-text max-w-3xl mb-6 leading-relaxed">
                Ziel außerhalb unserer Kontrolle, mit möglichem fremdem
                Cookie-Banner: Shopvote, ablefy, die Calendly-Seite. Optik wie
                T3, aber mit ↗ statt → als Extern-Signal — in Orange bzw.
                currentColor, nicht Denver-Blau (sonst Über-Signalisierung).
                Öffnet im neuen Tab (target=_blank rel=noopener noreferrer).
              </p>
              <span className="inline-block text-body text-orange font-semibold hover:text-denver-blue transition-colors cursor-pointer">
                Alle Bewertungen bei Shopvote ansehen ↗
              </span>
              <p className="font-mono text-xs text-brand-gray-mid mt-3">
                text-body text-orange font-semibold hover:text-denver-blue · ↗
                statt → · target=_blank rel=noopener noreferrer
              </p>
              <p className="text-base text-brand-text max-w-3xl mt-6 mb-6 leading-relaxed">
                Affiliate-Sonderfall: Amazon-Partnerlinks tragen statt ↗ den
                Zusatz „(bezahlter Link)". Der trägt Extern- und
                Offenlegungs-Signal zugleich — deshalb kein zusätzliches ↗.
              </p>
              <span className="inline-block text-body text-orange font-semibold hover:text-denver-blue transition-colors cursor-pointer">
                Mein Buch-Tipp bei Amazon (bezahlter Link)
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                T1 / T2 — Buttons (Detail: Section „Buttons")
              </h3>
              <p className="text-base text-brand-text max-w-3xl leading-relaxed">
                Primär- und Sekundär-Button sind oben in der Section „Buttons"
                in Live-Größe gezeigt: T1 orange gefüllt (stärkste Aktion, eine
                pro Section), T2 mit Denver-Blau-Rahmen. T2 umfasst E-Mail und
                Calendly gleichberechtigt.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                T5 — OfferCard (Detail: Section „Karten")
              </h3>
              <p className="text-base text-brand-text max-w-3xl leading-relaxed">
                Die klickbare Angebots-Karte steht in der Section „Karten": die
                ganze Karte ist klickbar und trägt zusätzlich einen sichtbaren
                CTA zum selben Ziel. Titel text-body, Body und CTA bewusst
                text-base — Karten-intern eine Stufe kompakter als der
                Seiten-Fließtext.
              </p>
            </div>
          </div>

          <div className="border-l-[3px] border-orange bg-white p-6 shadow-sm rounded-r-lg mt-12 space-y-3 text-sm text-brand-text leading-relaxed max-w-3xl">
            <p className="font-semibold text-brand-text">Regeln (verbindlich):</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Keine Unterstreichung in keinem State — Hover-Signal ist
                ausschließlich der Farbwechsel zu Denver-Blau.
              </li>
              <li>
                Größe: Ein Link ist nie kleiner als sein Kontext. Seiteninhalt =
                text-body, Karten-intern = text-base.
              </li>
              <li>
                Intern oder extern = Kontrolle/Cookie-Banner, nicht target=_blank.
                Eigener PDF intern (→), fremde Ziele extern (↗).
              </li>
              <li>
                tel: und mailto: sind Aktionen, kein ↗. Calendly-Button: das
                Kalender-Icon trägt das Signal, kein ↗.
              </li>
              <li>Amazon-Affiliate trägt „(bezahlter Link)" statt ↗.</li>
              <li>
                Alignment folgt dem Kontext: zentrierter Block → zentrierter
                Link, linksbündiger Inhalt → linksbündiger Link.
              </li>
              <li>
                Keine Hairline/Linie über Links (verworfen). Wo ein Link
                untergeht: über Platzierung und Weißraum lösen.
              </li>
              <li>
                Zahnrad-Note ist die kanonische „gut-zu-wissen"-Aside, kein
                CTA-Ersatz.
              </li>
            </ul>
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
