# Layout-Inventar — Styleguide (`/styleguide`)

Layout-Inventar für `/styleguide`. Sprint 12.1 deckt Section 0 (Hinweis),
Section 1 (Farbpalette), Section 2 (Typografie), Section 3 (Karten) ab.
Sprint 12.2 ergänzt Buttons, Quotes, Prozessschritte, Hinweis-Boxen,
HexagonBullets, Section-Divider, ContactSection, ShopvoteBadge, Foto-Platzhalter,
Container-Breiten-Tabelle.

**Pflege:** Bei Layout-Änderungen an einer Section dieses Inventar mitziehen.

**Letzte Aktualisierung:** 12. Mai 2026 (Sprint 12.1-fix)

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

---

## Standard-Konvention (Styleguide)

- **Outer / Inner:** durchgängig `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` für alle Sections mit Content (inkl. Section 0)
- **Subpage-Section-Padding:** `pt-6 md:pt-8 pb-12 md:pb-16` für Sections 1–3
- **Hintergrund-Alternierung:** Section 0 grau → Section 1 weiß → Section 2 grau → Section 3 weiß
- **Header/Footer:** unverändert über `RootLayout` (keine Navigations-Ergänzung für `/styleguide`)

---

## Watchlist

- **Akkordeon-Trigger:** Aktuelles Design im Sprint-12.1-Stand (Trigger #E5E5E5, kein Border, kein Schatten) wirkt isoliert zu unscheinbar. Bei Bau der ersten Seite mit Akkordeon (Simulation oder Über-mich) mit echtem Inhalt iterieren.
