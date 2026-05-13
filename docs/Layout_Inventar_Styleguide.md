# Layout-Inventar — Styleguide (`/styleguide`)

Layout-Inventar für `/styleguide`. Sprint 12.1 / 12.1-fix: Sections 0–3 (Hinweis,
Farbpalette, Typografie, Karten). Sprint 12.2: Sections 4–8 (Buttons, Quotes und
Hervorhebungen, strukturelle Elemente, Shared Components, Container-Breiten).

**Pflege:** Bei Layout-Änderungen an einer Section dieses Inventar mitziehen.

**Letzte Aktualisierung:** 12. Mai 2026 (Sprint 12.2-fix — Buttons-Section Standard-Muster)

---

## Section 0 — Hinweis (Seitenkopf)

- **Outer Container:** `section` ohne zusätzlichen Wrapper
- **Inner Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section-Spacing:** `pt-12 md:pt-16 pb-6 md:pb-8` (Abweichung vom Subpage-Standard: mehr Luft oben, weniger unten vor Section 1)
- **Section-Background:** `bg-[#F5F5F5]`
- **Section-Divider:** nein (H1 steht in der Hinweis-Box)
- **Hauptkomponenten:** Hinweis-Box (`border-l-[3px] border-orange`, `bg-white`, `p-6`, `rounded-r-lg`, `shadow-sm`), H1 „Styleguide“, Fließtext
- **Besonderheiten:** Route absichtlich nicht in der Navigation; kein oranger Divider vor dem H1

## Section 1 — Farbpalette

- **Outer Container:** `section` mit Standard-Padding
- **Inner Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section-Spacing:** `pt-6 md:pt-8 pb-12 md:pb-16` (Subpage-Standard)
- **Section-Background:** `bg-white`
- **Section-Divider:** ja (`w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8`, `aria-hidden`)
- **Hauptkomponenten:** H2 „Farbpalette“, H3 „Primärfarben“ / „Sekundärfarben“, jeweils Responsive-Grid mit Farb-Swatches (Meta: Name, Hex, Token, Rolle), abschließende Farblogik-Hinweis-Box (gleiches Pattern wie Section 0)
- **Besonderheiten:** Sekundärfarben Weiß und Hellgrau mit sichtbarem Rahmen am Swatch (`border border-brand-gray-mid-light`)

## Section 2 — Typografie

- **Outer Container:** `section`
- **Inner Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section-Spacing:** `pt-6 md:pt-8 pb-12 md:pb-16`
- **Section-Background:** `bg-[#F5F5F5]`
- **Section-Divider:** ja (60×2px orange)
- **Hauptkomponenten:** H2 „Typografie“, kurzer Montserrat/DSGVO-Absatz, sieben Typ-Samples in weißen Boxen (`border border-brand-gray-mid-light`, `shadow-sm`), Meta-Spalte rechts ab `md:flex`, Italic-Regel-Hinweis-Box am Ende
- **Besonderheiten:** Keine Hero-Section; gleicher Divider-/H2-Rhythmus wie Vertrieb-Subpages

## Section 3 — Karten

- **Outer Container:** `section`
- **Inner Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section-Spacing:** `pt-6 md:pt-8 pb-12 md:pb-16`
- **Section-Background:** `bg-white`
- **Section-Divider:** ja (60×2px orange)
- **Hauptkomponenten:** H2 „Karten“, Einleitungsabsatz, sieben vertikale Blöcke (`space-y-12`) mit je H3, Verwendungsabsatz und Live-Beispiel in `max-w-3xl` (Ausnahme Statement-Card: `max-w-xs` für realistische schmale Spaltenbreite); Sequenz-Karten-Demo identisch zum Vertrieb-Pattern (`shadow-[2px_2px_0px_0px_#FF9B01]`, große Nummer links, zweispaltiges Innen-Layout); `HexagonBullet`-Komponente bei Themen-Karte; OfferCard-Demo ohne `Link`; unter Akkordeon-Trigger eine Watchlist-Hinweis-Box (`border-l-[3px] border-orange`, `p-4`, `mt-4`)
- **Besonderheiten:** Kartenzug nach Design-System-Hierarchie (Situation → Praxis → Offer → Sequenz → Statement → Themen → Akkordeon); Statement-Card absichtlich in schmalem Wrapper, damit `lg:aspect-square` nicht überbreit wirkt

## Section 4 — Buttons

- **Outer Container:** `section`
- **Inner Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section-Spacing:** `pt-6 md:pt-8 pb-12 md:pb-16`
- **Section-Background:** `bg-[#F5F5F5]`
- **Section-Divider:** ja (60×2px orange)
- **Hauptkomponenten:** H2 „Buttons“, Einleitungstext, `grid grid-cols-1 md:grid-cols-3 gap-6`: pro Spalte **Standard-Muster** H3 (`text-xl font-bold mb-2`) → Verwendungs-Absatz (`text-base text-brand-text mb-6 leading-relaxed`) → `<button type="button">`-Demo (lucide `Phone`, `Mail`, `CalendarDays`) wie in `ContactSection`/`page.tsx`; Hover-Test-Hinweis-Box (`border-l-[3px] border-orange`, `p-4`, `mt-6`)
- **Besonderheiten:** Gleiche Button-Klassen wie Live (Primär `border-transparent bg-orange` + Hover Denver-Blau; Sekundär/Tertiär `border-brand-gray-mid-light bg-white`); `transition-colors duration-200`; keine zweiten Mini-Beschriftungen unter den Buttons

## Section 5 — Quotes und Hervorhebungen

- **Outer Container:** `section`
- **Inner Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section-Spacing:** `pt-6 md:pt-8 pb-12 md:pb-16`
- **Section-Background:** `bg-white`
- **Section-Divider:** ja (60×2px orange)
- **Hauptkomponenten:** H2, Einleitung, drei Blöcke (`space-y-12`): Quote als `<blockquote>` mit `ml-10 mr-8 pl-6 py-3 border-l-4 border-denver-blue text-xl font-medium`; Kennzahl-Quote als `<div>` gleicher Rand-/Typo-Klassen; Transition Hook als `<p>` `text-center mt-14 mb-4 text-xl font-medium text-brand-text`
- **Besonderheiten:** Transition Hook ohne Denver-Linie (reines Textmuster laut Design System Abschnitt 6)

## Section 6 — Strukturelle Elemente

- **Outer Container:** `section`
- **Inner Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section-Spacing:** `pt-6 md:pt-8 pb-12 md:pb-16`
- **Section-Background:** `bg-[#F5F5F5]`
- **Section-Divider:** ja (60×2px orange)
- **Hauptkomponenten:** H2, vier Blöcke (`space-y-12`): Live-Embed `ProcessSteps` mit drei Demo-Schritten im Wrapper `max-w-5xl` (`containerClassName="mt-0"`); Hinweis-Box (`border-l-[3px] border-orange`, `rounded-r-lg`, `shadow-sm`, `p-6`) „Gut zu wissen:“; HexagonBullets Standalone + Liste (`items-start`, `mt-1.5`); Section-Divider-Demo in weißer Demo-Karte (`rounded-lg shadow-sm p-8`, Linie `w-[60px] h-[2px] bg-orange mx-auto`)
- **Besonderheiten:** Divider-Höhe im Demo `h-[2px]` (60×2px gemäß Design System)

## Section 7 — Shared Components

- **Outer Container:** `section`
- **Inner Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section-Spacing:** `pt-6 md:pt-8 pb-12 md:pb-16`
- **Section-Background:** `bg-white` (**nur** der äußere Styleguide-Rahmen)
- **Section-Divider:** ja (60×2px orange)
- **Hauptkomponenten:** H2; `<ContactSection />` ohne Props (bringt eigenes `bg-[#F5F5F5]`, Denver-Blau-Streifen, Padding und Einladungskarte mit); `ShopvoteBadge` mit `enlargeOnDesktop={false}` + Hinweis-Box zu `scale-150` auf Live-Seiten; drei Foto-Platzhalter (`grid-cols-1 md:grid-cols-3 gap-6`) mit `aspect-square` / `aspect-video` / `aspect-[4/3]`
- **Besonderheiten:** ContactSection bildet bewusst eine **graue Insel** auf der weißen Section — so wie sitewide eingebunden; ShopvoteBadge: Prop nur für Styleguide, Live-Seiten unverändert `lg:scale-150`

## Section 8 — Container-Breiten

- **Outer Container:** `section`
- **Inner Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section-Spacing:** `pt-6 md:pt-8 pb-12 md:pb-16`
- **Section-Background:** `bg-[#F5F5F5]`
- **Section-Divider:** ja (60×2px orange)
- **Hauptkomponenten:** H2, Referenz-Tabelle (`table` drei Spalten, `text-sm`, Ränder `border-brand-gray-mid-light`), H3 „Außenkonvention“ mit Hinweis-Box statt zweiter Tabelle
- **Besonderheiten:** Letzte Section der Seite; Inhalt aus Design System Abschnitt 10 / Führungs-Referenz abgeleitet

---

## Standard-Konvention (Styleguide)

- **Outer / Inner:** durchgängig `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` für alle Sections mit Content (inkl. Section 0)
- **Subpage-Section-Padding:** `pt-6 md:pt-8 pb-12 md:pb-16` für Sections **1–8**; Section **0** davon ausgenommen (`pt-12 md:pt-16 pb-6 md:pb-8`)
- **Hintergrund-Alternierung:** Section 0 grau → 1 weiß → 2 grau → 3 weiß → 4 grau → 5 weiß → 6 grau → 7 weiß → 8 grau
- **Header/Footer:** unverändert über `RootLayout` (keine Navigations-Ergänzung für `/styleguide`)

---

## Watchlist

- **Akkordeon-Trigger:** Aktuelles Design im Sprint-12.1-Stand (Trigger #E5E5E5, kein Border, kein Schatten) wirkt isoliert zu unscheinbar. Bei Bau der ersten Seite mit Akkordeon (Simulation oder Über-mich) mit echtem Inhalt iterieren.
