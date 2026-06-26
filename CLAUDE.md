# CLAUDE.md - Projekt-Regeln & Tech-Stack

This file provides strict guidance to Cursor and Claude when working with code in this repository.

## Commands

`pnpm dev` # Start development server at http://localhost:3000
`pnpm build` # Build for production
`pnpm lint` # Run ESLint

## 🚨 STRIKT EINZUHALTEN (Tech-Stack) 🚨

- **Next.js 15** with App Router (Verwende keine v16-spezifischen Features!)
- **React 19, TypeScript** (strict mode)
- **Tailwind CSS 3.4** (WICHTIG: Nutze ausschließlich v3.4, NIEMALS v4! Wir benötigen eine klassische tailwind.config.ts)
- **shadcn/ui** (new-york style, slate base)
- **Node.js 22 LTS**
- Package manager: **pnpm**

## Architecture & Styling

- `src/app/` — Next.js App Router pages and layouts.
- `src/components/ui/` — shadcn-generated UI primitives
- `src/components/` — custom components
- `src/lib/utils.ts` — exports `cn()` for conditional class merging

## Entwicklungs-Prinzipien

- Triff keine Annahmen bei fehlenden Informationen, sondern frage nach.
- Schreibe sauberen, modularen TypeScript-Code.
- Bevorzuge bei UI-Elementen immer zuerst die Standard-Komponenten von shadcn/ui.

---

## 🎨 Design-System

### Farben (CSS-Variablen in globals.css)
| Bezeichnung | Hex | Verwendung |
|---|---|---|
| Denver-Blau | #002244 | Architektur-Akzent: Linien, Borders, Quotes, Prozess-Kreise |
| Orange (Akzent) | #FF9B01 | Buttons, CTAs, Zahnrad-Elemente, HexagonBullets, Offset-Schatten |
| Anthrazit | #222222 | Fließtext, Button-Text (Accessibility) |
| Hellgrau | #F5F5F5 | Alternating Section-Hintergrund, Hover-State auf Karten |
| Mittelgrau hell | #D9D9D9 | Card-Borders (SituationCards, Themen-Karten, Praxis-Karten) |
| Mittelgrau | #9D9D9D | Tertiäre Elemente |
| Dunkelgrau | #828282 | Subtexte, Platzhalter-Text |
| Weiß | #FFFFFF | Hintergrund, Card-Füllung |

**Farblogik (Sprint 6 definiert):**
- **Orange** = Leser-Perspektive (SituationCards, HexagonBullets, Themen des Besuchers)
- **Denver-Blau** = Marcus-Perspektive (Quotes, Praxis-Karten, OfferCards, Prozessschritte, Footer-Trennlinie)
- Denver-Blau ist eine **Linien- und Akzentfarbe**, keine Flächenfarbe. Kein Denver-Blau-Hintergrund auf großen Flächen.

**WICHTIG:** Orange (#FF9B01) auf Weiß hat nur ca. 2.8:1 Kontrast. Orange NUR für große Überschriften (ab 18px bold), Buttons und dekorative Elemente. NIEMALS für Fließtext.

**Keine neuen Farben einführen** ohne explizite Freigabe. Bestehende Palette verwenden.

### Typografie (Montserrat, lokal eingebunden via next/font)
| Element | Größe | Gewicht |
|---|---|---|
| H1 | 48px / 3rem | 800 (Fett) |
| H2 | 32px / 2rem | 600 (Halbfett) |
| Section Header | 28px / 1.75rem | 500 (Medium) |
| Paragraph | 16px / 1rem | 400 (Regular) |

Große Schriftgrößen, großzügiger Zeilenabstand – Zielgruppe ist 35–55 Jahre.
Kein Italic (projektweite Regel).

### Hover-Konvention
- **Projektweite Konvention:** Hover-Hintergrund ist Denver-Blau (#002244 → `hover:bg-denver-blue`), Textfarbe wechselt auf Weiß (`hover:text-white`).
- **OfferCards:** hover:bg-[#F5F5F5] (dezenter, weil die Karte als Ganzes klickbar ist)
- **Links:** hover:text-denver-blue (Textfarb-Wechsel, kein Hintergrund)
- Alle Hover mit `transition-colors duration-200`.

### Visuelle Markenelemente
- Zahnräder in Orange: dezent, wiederkehrend (Maschinenbau-Hintergrund)
- Kein Parallax-Scrolling, keine einfliegenden Textblöcke, kein Auto-Play
- Sanftes Einblenden, Hover-Effekte, flüssige Akkordeons erlaubt

#### Zahnrad-Signatur: `SingleGear` (Vorträge-Pass 2026-06-26)
- **Eine einzige Signatur-Figur:** `src/components/icons/SingleGear.tsx` (linke Hälfte gefüllt, rechte Hälfte Kontur; viewBox 1063×1014). Der frühere generische `GearIcon` (Lucide-Zahnkranz) ist **abgelöst und gelöscht** — NICHT wieder einführen.
- **Props/Defaults:** `width`/`height` = 32, `strokeWidth` = 10, `className` = `text-orange` (Orange #FF9B01; Farbe via `currentColor`/`className` themebar).
- **Eingesetzte Größen:** 24 px an Footer + Startseite-Hero, 32 px an der Startseite-H2; `flex items-center gap-2`, links neben dem Element.
- **Platzierung:** Footer, Startseite-Hero, Startseite-H2. **NICHT** auf klickbaren Katalog-/Themen-Karten und **nicht** auf den Format-Karten (Zahnräder dort bewusst entfernt).
- **SVG-Asset** `public/images/gears/03_Einzelzahnrad_v2.svg` (Orange #FF9B01 fest eingebacken, Strichstärke 10) = eigenständiges Zusatz-Asset; **Live-Marke bleibt die React-Komponente** (`currentColor`).

---

## 🃏 Card-Hierarchie (Sprint 6 definiert, Sprint 8 erweitert)

### SituationCards (primäre Karten, Leser-Perspektive)
- Hintergrund: bg-white
- Border: border border-brand-gray-mid-light (#D9D9D9)
- Schatten: shadow-md
- Border-Radius: rounded-lg (8px)
- Akzent: border-l-4 border-orange (Orange-Leiste links, volle Card-Höhe)
- Padding: p-6 md:p-8
- Layout: 2×2-Grid auf md+ (md:grid-cols-2), Stack auf mobile
- Sektions-agnostisch (auf grau und weiß validiert)

### Praxis-Karten (Fallbeispiel-Container, Marcus-Perspektive)
- Basiert auf SituationCard-Design
- Hintergrund: bg-white
- Border: border border-brand-gray-mid-light (#D9D9D9)
- Schatten: shadow-md
- Border-Radius: rounded-lg
- Akzent: border-l-4 border-denver-blue (statt border-orange)
- Padding: p-6 md:p-8
- Kein Hover-Effekt
- Layout: einspaltig, space-y-6
- Farblogik: Denver-Blau-Leiste = Marcus-Perspektive (Arbeitsweise, Praxis)

### Themen-Karten (sekundäre Container)
- Hintergrund: bg-white
- Border: border border-brand-gray-mid-light (#D9D9D9)
- Schatten: shadow-sm (leichter als SituationCards/Praxis-Karten)
- Border-Radius: rounded-lg
- Padding: px-4 py-3
- Kein Hover-Effekt, keine Akzent-Leiste
- HexagonBullet: items-start + mt-1.5 (vertikaler Versatz zur ersten Textzeile)
- Grid-Layout: grid-cols-1 md:grid-cols-2 gap-4
- Sektions-agnostisch (funktioniert auf weiß und auf #F5F5F5)

### OfferCards (Angebots-Karten, klickbar)
- Basiert auf bestehendem OfferCard-Design
- Denver-Blau Border-Top
- shadow-md
- Komplett klickbar (next/link-Wrapper)
- hover:bg-[#F5F5F5], cursor-pointer, transition-colors
- CTA-Links: font-semibold + Pfeil (→)
- Titel: font-bold
- Grid: max-w-5xl mx-auto innerhalb max-w-6xl Container

### Format-Karten (Format-Übersicht, Info — Vorträge-Pass 2026-06-26)
- **Leisten-Konvention (verbindlich):** **linke** Leiste = Info / **nicht** klickbar; **obere** Leiste = klickbar (OfferCards/Katalog). An der Leisten-Position ist die Karten-Rolle ablesbar.
- Basiert auf der Praxis-/Info-Karte: bg-white, border border-brand-gray-mid-light (#D9D9D9), shadow-md, rounded-lg, Padding p-6
- Akzent: **border-l-4 border-denver-blue** (linke Denver-Leiste = Info)
- **Nicht klickbar**, **kein Zahnrad** (bewusst entfernt)
- Verwendung: Format-Übersicht auf `/vortraege` (beschreibt Liefer-Formate, keine Aktion)
- Klassenkette (verifiziert `vortraege/page.tsx`): `rounded-lg border border-brand-gray-mid-light border-l-4 border-denver-blue bg-white p-6 shadow-md`

### StatementCards (Marken-Akzent, Marcus-Perspektive)
- Hintergrund: bg-white
- Border: border-[3px] border-denver-blue
- Schatten: shadow-[4px_4px_0px_0px_#FF9B01] (harter orangener Offset)
- Border-Radius: rounded-lg
- Schrift: text-lg lg:text-xl, font-semibold, text-denver-blue
- Text-Ausrichtung: zentriert (flex items-center justify-center)
- Format Desktop: lg:aspect-square
- Format Mobile: kein erzwungenes Seitenverhältnis, p-6
- Kein Hover-Effekt
- Verwendung: Pointierte Aussagen im Z-Pattern (Startseite), Begleiter zu Content-Sections
- Farblogik: Denver-Blau-Border + Text = Marcus-Perspektive

### Hierarchie-Übersicht
1. SituationCards: shadow-md + Orange-Leiste = primäre Karten (Leser)
2. Praxis-Karten: shadow-md + Denver-Blau-Leiste = Fallbeispiele (Marcus)
3. OfferCards: shadow-md + Denver-Blau Border-Top = Angebote (klickbar)
4. Themen-Karten: shadow-sm, kein Akzent = sekundäre Container (Scan-Liste)
5. Akkordeon-Trigger: #E5E5E5-Füllung, kein Border = interaktive Trigger
6. StatementCards: border-[3px] Denver-Blau + orangener Offset-Schatten = Marken-Akzent

---

## 🔄 Prozessschritte mit Verbindungslinie

- Kreise: w-12 h-12 (Mobile) / w-16 h-16 (Desktop)
- Kreise: bg-white, border-[3px] border-denver-blue, shadow-[2px_2px_0px_0px_#FF9B01]
- Zahl: text-denver-blue font-semibold text-xl
- Verbindungslinie: w-0.5 bg-denver-blue, vertikal zwischen den Kreisen
- Alignment: items-center, gap-8 md:gap-16
- Text: max-w-prose
- Container: max-w-5xl
- Wiederverwendbar auf allen Seiten mit sequenziellen Abläufen

---

## 💬 Quote-Format (Denver-Blau-Linie)

- border-l-4 border-denver-blue
- Eingerückt: ml-10 mr-8 pl-6 py-3
- Text: text-xl font-medium (gleiche oder leicht größere Schrift als Fließtext)
- Kein Hintergrund, kein Rahmen — nur die Linie als Signal
- Desktop: lg:whitespace-nowrap wenn der Text einzeilig bleiben soll
- Verwendung: Marcus-Perspektive (Obligation to Dissent, Kennzahlen)

---

## 📐 Container-Breiten (Führungsseite + Startseite als Referenz)

### Führungsseite

| Abschnitt | Container | Begründung |
|---|---|---|
| Hero | max-w-7xl | Voller visueller Impact |
| Situationskarten (2) | max-w-6xl | Karten-Grid braucht Breite |
| Berater mit Meinung (3) | max-w-6xl | Zwei-Spalten-Layout (Text + Foto) |
| Themen (4) | max-w-6xl | Zweispaltiges Karten-Grid |
| Prozessschritte (5) | max-w-5xl | Prozess-Element, eigener Rhythmus |
| Aus der Praxis (6) | max-w-5xl | Einspaltige Karten, Lesezone |
| OfferCards (7) | max-w-6xl, Grid max-w-5xl | Karten eingerückt |
| Shopvote (8) | max-w-5xl | Zwei-Spalten (Text + Widget) |
| Kontakt (9) | max-w-6xl (äußerer), max-w-5xl (Karte) | Shared Component, Einladungskarte |

### Startseite

| Abschnitt | Container | Begründung |
|---|---|---|
| Hero | max-w-7xl | Voller visueller Impact (2-Spalten-Grid) |
| 4 Situations-Sections | max-w-6xl | Z-Pattern mit Statement Card (lg:grid-cols-4) |
| Drei Perspektiven | max-w-6xl | Z-Pattern mit Foto (lg:grid-cols-3) |
| Shopvote | max-w-4xl | Zentrierter Content, kein Z-Pattern |
| ContactSection | intern geregelt | Shared Component |

---

### Asymmetrisch eingerückter Inhaltsblock (Sprint 17 Auftrag 11-19)

Verwendung: Wenn innerhalb einer breiten Section (max-w-7xl) ein Inhaltsblock (z. B. eine Liste, eine Aufzählung, ein hervorgehobener Textblock) visuell aus der Hauptspalte herausgehoben werden soll. Beispiel: EAZEE-Werte-Liste auf `/community` zwischen breiter Einleitung und breitem Schluss-Absatz.

Wrapper-Klassenkette (final getestet bei `/community` Section 3):

```
<div className="ml-4 mr-4 md:ml-[5%] md:mr-[22%]">
  ... Inhalt ...
</div>
```

Logik:
- Mobile (kein Breakpoint): `ml-4 mr-4` — symmetrisch, Standard-Abstände
- Tablet/Desktop (ab md): `ml-[5%]` (kleiner linker Versatz vom Container-Rand) plus `mr-[22%]` (deutlich größerer rechter Versatz)
- Resultierende Block-Breite: 73% des umgebenden Containers
- Block sitzt nicht zentriert, sondern links eingerückt mit rechtem Freiraum
- Auf 1920px Viewport mit max-w-7xl Container (1280px) ergibt das: Block-Breite ca. 936px, left=413px vom Viewport-Rand, right=1349px

Wichtig bei abweichenden Anforderungen:
- NIE Pixel oder Prozente raten — siehe Skill-Datei `layout-messung`
- Vor Anpassung: aktuelle Geometrie per Playwright im gerenderten DOM messen
- Nach Anpassung: erneut messen, Ergebnis im Self-Reporting dokumentieren

---

## 🔀 Z-Pattern Startseite (Sprint 8 definiert)

Die vier Situations-Sections und die Kurzprofil-Section nutzen ein Zwei-Spalten-Grid mit alternierenden Seiten (Zick-Zack).

### Layout-Spezifikation

| Section | Grid | Visuell links | Visuell rechts |
|---|---|---|---|
| Führung | lg:grid-cols-4 (1:3) | StatementCard | Text + CTA |
| Karriere | lg:grid-cols-4 (1:3) | Text + CTA | StatementCard |
| Vertrieb | lg:grid-cols-4 (1:3) | StatementCard | Text + CTA |
| Simulation | lg:grid-cols-4 (1:3) | Text + CTA | StatementCard |
| Drei Perspektiven | lg:grid-cols-3 (1:2) | Foto | Text + CTA |

### Statement-Card-Texte (Startseite)

| Section | Text |
|---|---|
| Führung | „Gute Führung braucht Sparring, keine Schonhaltung." |
| Karriere | „Nicht mehr Bewerbungen. Sondern der unterschriftsreife Vertrag." |
| Vertrieb | „Struktur schlägt Intuition. Prozess schlägt Zufall." |
| Simulation | „Führung und Teamdynamik erleben statt besprechen." |

### Mobile-Verhalten
- Reihenfolge: H2 → Fließtext → StatementCard/Foto → CTA-Link
- Kein aspect-square auf Mobile (Card wird kompakt mit p-6)

### Kurzprofil-Foto
- Datei: `/Offen_laecheln.png` (PNG mit transparentem Hintergrund)
- Alt-Text: „Marcus Holzheimer, Berater für Führung, Karriere und Vertrieb"
- Styling: rounded-lg, w-full h-auto, kein Rahmen, kein Schatten

---

## 📏 Section-Spacing (Sprint 7 definiert)

### Subpage-Sections (Abschnitte 2–8)
- **Asymmetrisches Padding:** `pt-6 md:pt-8 pb-12 md:pb-16`
- Oben wenig Luft (Divider nah am Farbwechsel), unten mehr (Abstand zum nächsten Farbwechsel)
- Gilt für ALLE Seiten (Startseite, Führung, Karriere, Vertrieb, Simulation, Über mich, Community)

### Hero-Sections (Abschnitt 1)
- **Mindesthöhe:** `min-h-[60vh]`
- **Symmetrisches Padding:** `py-12 md:py-16`
- Bewirkt, dass der Beginn der nächsten Section am unteren Bildschirmrand angeschnitten sichtbar ist
- **Hero-Body-Textbreite (`Hero.tsx`, Vorträge-Pass 2026-06-26):** `max-w-2xl lg:max-w-lg` — im umgebrochenen Zustand (Bild gestapelt) breiter lesbar, ab `lg` auf `max-w-lg` gedeckelt (Balance, da das Bild dann rechts daneben steht). Desktop-Maß unverändert.

### Hintergrund-Alternierung
- Abschnitte alternieren zwischen `bg-white` und `bg-[#F5F5F5]`
- Reihenfolge beginnt mit: Hero (weiß) → Abschnitt 2 (grau) → Abschnitt 3 (weiß) → usw.
- Die `bg-`-Klasse gehört auf das äußerste `<section>`-Element, nicht auf innere Divs

---

## 🔗 Link-Styling

**Verbindlicher Standard für alle internen Querverweise (alle Subpages, alle Karten-Komponenten):**

- Farbe: `text-orange`
- Gewicht: `font-semibold`
- Pfeil: → am Ende
- Hover: `hover:text-denver-blue transition-colors`
- Position: eigenständige Zeile, NICHT in Fließtext einbetten
- Muster: „Mehr zum Bootcamp →", „Alle Bewertungen ansehen →", „Mehr zum Thema Führung →"

**Underline-Verbot (Sprint 11.2-fix2 definiert):**
- KEINE Unterstreichung in keinem State — weder Default noch Hover noch Focus
- Niemals `underline`, `hover:underline`, `group-hover:underline`, `decoration-*` oder `underline-offset-*`
- Begründung: Orange auf Weiß hat ohnehin geringen Kontrast (2.8:1). Unterstreichung mit Orange auf Weiß schwächt die Lesbarkeit weiter und schneidet die Unterlängen von Montserrat (g, j, p, q, y) an.
- Hover-Signal ist ausschließlich der Farbwechsel zu Denver-Blau

**Konsequenz für klickbare Karten-Komponenten (z. B. OfferCard):**
- CTA-Spans innerhalb klickbarer Karten dürfen kein `group-hover:underline` haben
- Hover-Signal der Karte ist ausschließlich `hover:bg-[#F5F5F5]`
- Der CTA-Span erbt nichts vom Hover der umgebenden Karte außer Farb-Transitions

---

## 🔶 Section-Divider (Sprint 8 definiert)

- Breite: 60px (`w-[60px]`)
- Höhe: 2px (`h-[2px]`)
- Farbe: Orange (#FF9B01, `bg-orange`)
- Position: zentriert (`mx-auto`)
- Abstand nach unten: `mb-6 md:mb-8`
- Platzierung: Erstes Element innerhalb jeder Content-Section, nach dem Container-Beginn
- Accessibility: `aria-hidden="true"`
- NICHT in: Hero-Section, ContactSection (hat eigene Denver-Blau-Linie)
- Verwendung: Markiert den Beginn einer neuen inhaltlichen Section, gibt vertikalen Rhythmus

---

## ✍️ Brand Voice & Textregeln (STRIKT EINZUHALTEN)

### Firmenname & Markenzeichen
- Firmenname: **MH3 LearnCon® GmbH** (mit ® bei erster/prominentester Nennung pro Seite, im Footer und Impressum)
- Community: **MH3-EAZEE®** (mit ® bei erster Nennung pro Seite, ® als `<sup>®</sup>` hochgestellt)
- Im Fließtext nach der ersten Nennung: ohne ®
- In Schema.org JSON-LD und Title-Tags: **OHNE ®** (Suchmaschinen interpretieren ® inkonsistent)

### Ansprache
- **Sie** auf: Startseite, Führung, Karriere, Vertrieb, Simulation, Über mich, (kein) Coaching
- **Du** auf: Community (`/community` und Unterseiten), Kurse, Blog
- **„Ich" nicht „Wir"** – Marcus ist Einzelunternehmer. Ausnahme: „Wir" als Zusammenarbeits-Wir (Marcus + Klient:in gemeinsam)

### No-Go-Begriffe (NIEMALS verwenden)
- „Aber" → stattdessen: „gleichzeitig", „jedoch", „doch", „und"
- „Nachhaltig", „bahnbrechend", „state-of-the-art", „agil"
- „Coaching" → außer als „(kein) Coaching"
- „Wir" wenn „Ich" gemeint ist
- „Feedback" → „Rückmeldung"
- „Um ehrlich zu sein" → „um offen zu sein"
- „Kosten" → „Investition"

### Negierungen vermeiden
Kein „Keine Angst", „nicht schlimm", „kein Risiko". Stattdessen positiv: „Sie sind in guten Händen." Ausnahme: Bewusste Kontrastpaare („Nicht beim bestellten Thema, sondern beim wahren Bedarf.").

### Merkmal-Nutzen-Übersetzung
Kein Merkmal ohne Kundennutzen. Jede Leistung wird mit dem konkreten Vorteil für die Klient:in verbunden.

### Phrasen-Blacklist (Auszug)
NIEMALS: „Kennst du das?", „Stell dir vor", „Absoluter Gamechanger", „Auf das nächste Level", „In der heutigen digitalen Welt", „Lass uns gemeinsam eintauchen", „Potenzial entfalten", „Navigieren"

---

## 🔍 SEO-Grundregeln

- Jede Seite: eigener Title-Tag (max. 60 Zeichen), eigene Meta-Description (max. 155 Zeichen)
- Genau eine H1 pro Seite (enthält Primär-Keyword)
- Schema.org JSON-LD im Head jeder Seite (LocalBusiness + Person)
- `jobTitle`: „Geschäftsführender Gesellschafter und Berater"
- `name`: „MH3 LearnCon GmbH" (Firma), „Marcus Holzheimer" (Person) – beide Varianten im Text
- Sprechende URLs: `/fuehrung`, `/karriere`, `/vertrieb`, `/simulation`, `/ueber-mich`, `/community`
- Sitemap.xml automatisch generieren
- Alt-Texte für alle Bilder

---

## 📊 Kennzahlen (korrekt verwenden)

- Management Simulation: **weltweit über 5.800 Teilnehmende** (Format gesamt), **über 600 in Marcus' eigenen Durchführungen**
- Teilnehmerzahl pro Simulation: **6–48** (NICHT 6–56)
- Shopvote: **5/5 Sterne**, **über 65 verifizierte Bewertungen** (gerundeter Wert, ca. halbjährlich prüfen)
- Selbstständigkeit: **seit 2006** / **20 Jahre** (beides korrekt)
- Tagessätze Simulation: **3.750€–5.250€+** je nach Gruppengröße

---

## 📞 Kontaktdaten (einheitlich auf allen Seiten)

- Telefon: **0171 88 202 77** (immer klickbar: `tel:+491718820277`)
- E-Mail: **kontakt@mh-learncon.com**
- Adresse: **Grafenberger Allee 60, 40237 Düsseldorf**
- Calendly: Verlinkt (NICHT eingebettet – DSGVO)

Reihenfolge im Kontaktbereich: Telefon → E-Mail → Calendly

---

## 🛡️ DSGVO

- Google Fonts: NICHT extern laden. Montserrat über `next/font` lokal einbinden.
- Analytics: Plausible oder Fathom (oder keins). KEIN Google Analytics.
- Calendly: NUR verlinken, NICHT per iframe einbetten.
- Shopvote-Widget: Lädt externes Script — Cookie-Consent-Einbindung für Launch klären.
- Ziel: Seite so sauber bauen, dass KEIN Cookie-Banner nötig ist.

---

## 🔧 Build-Hygiene & Stolperfallen

### Build-Prozess
- **`pnpm dev` STOPPEN vor `pnpm build`.** Paralleles Laufen zerschießt den `.next`-Cache. Nach unerwartetem Build-Verhalten: `.next`-Ordner löschen, Dev-Server neu starten.
- **Stabilität (Lessons 2026-06-26 — verbindlich):** Der Cursor-Agent **verwaltet den Dev-Server nicht** und **baut nicht lokal** — es läuft EIN persistenter Dev-Server (von Marcus gehalten, PC 24/7), die **CI baut den committeten Stand** (lokal gab es OOM). Daten gehören in **neutrale Module** (`src/data/…`, ohne `use client`); Werte aus `use client`-Dateien sind server-seitig nicht importierbar (→ `… .filter is not a function`). Nach Struktur-Umbau oder `git checkout`: `.next` löschen + Neustart ist **Routine, kein Alarm** (Symptome „clientModules", oder Filter zeigt trotz Parameter „Alle" = Cache, nicht Code). Begründung/Volltext: Second-Brain-Prüftisch 26.06.

### Git-Disziplin
- **Maximal 2 Änderungen pro Claude-Code-Block.** Ausnahmen nur mit Begründung im Commit-Body.
- **Kein Git-Befehl ohne vorheriges `git status` + `git log`.**
- **Auto-Commit nach jedem erfolgreichen Block.**
- **"Co-authored-by: Cursor"-Trailer in Commits — Soll: entfernen** (Information Disclosure, nicht erwünscht). **Ist (Stand 19. Mai 2026): faktisch nicht abschaltbar.** Der Trailer kommt aus der Cursor-/IDE-Integration, nicht aus einem Repo-Hook — jeder vom Cursor-Agent erzeugte Commit trägt ihn, manuell (außerhalb des Agents) erzeugte Commits nicht. **Bewusste, dokumentierte Duldung (Variante A, mehrfach bestätigt):** KEIN nachträglicher Force-Push auf `main` zur Trailer-Entfernung — das History-Risiko wiegt schwerer als die Kosmetik. Diese Soll-Ist-Lücke ist bekannt und akzeptiert; sie ist NICHT als Defekt zu „reparieren".

### Qualitätssicherung
- **`/visual-check` nach jedem Layout-/Farb-/Strukturblock.** Manuell anhand `.claude/skills/visual-check.md`.
- **Pre-Inspektion vor Edits an Layout-Containern.** Keine Container-Breiten ändern, ohne vorher den tatsächlichen Dateiinhalt gelesen zu haben.

### Sicherheit
- **Allowlist nur für reine Leseoperationen.** Niemals für verändernde Befehle (Schreiben, Löschen, Git-Commits).

### Cursor-Agent-Hänger
- **Bei Stillstand >5 Minuten ohne Status-Update:** Stop drücken, Agent idle abwarten, `git --no-pager status` + `git --no-pager log -3 --oneline` im Terminal prüfen, dann bewerten ob committet oder uncommittet. Uncommittet → `pnpm build`, gezieltes `git add`, `git commit`, Push manuell.
- **Vollständiges Schritt-für-Schritt-Protokoll:** `docs/Cursor_Settings_Anleitung_v1.md`, Abschnitt 5 (Hänger-Handlungsprotokoll) — verbindlich. Hier in CLAUDE.md nur die Kurzform.

### Cursor Beenden & Update (Variante B — verbindlich seit 19. Mai 2026)
- **Updates werden strikt gesammelt, nicht zeit-/sprintgetaktet.** Im Alltag immer „Later", nie „Install Now", nie mit anstehendem Update schließen/rebooten. Update nur bei echtem Bedarf (funktional oder erzwungen), bei leerem, frisch gestartetem Cursor.
- **Vollständiges Beenden- und Update-Ritual:** `docs/Cursor_Beenden_und_Update_Ritual_v1.md` — verbindlich. Hintergrund: abgebrochener Cursor-Selbst-Austausch beim Schließen/Reboot zerstörte mehrfach die Installation.

### Cursor-Bau-Modell (Modellwechsel-Regel — verbindlich seit 19. Mai 2026)
- **Kein Modellwechsel innerhalb einer laufenden Sprint-Phase**, nur an Sprint-Grenzen. Stille Wechsel (Auto-Update) sind ein zu prüfender Vorfall, kein vollzogener Zustand.
- **Aktueller Stand:** Composer 2.5 (fast) — aktiv, aber **unter Beobachtung**. Der nächste Sprint-14-Auftrag ist der Beobachtungs-Lauf (Drift/Hänger/Anweisungstreue); dessen Ergebnis entscheidet über den Verbleib.
- **Vollständige Regel:** `docs/Modellwechsel_Regel_v1.md`.

### content/-Sync (verbindlich seit 7. Mai 2026)

Der Ordner `content/` ist die lebende Redaktionsschicht zur Live-Seite. Er wird NICHT zur Build-Zeit gelesen — Texte sind als JSX-Strings in `page.tsx` hardcoded. Trotzdem ist `content/` verbindlich aktuell zu halten, weil dort Audits (Gemini-TQM), Korrekturlesen und externe Beteiligte den Live-Stand ohne Code-Zugriff prüfen.

**Regel:** Jede Textänderung in einer `page.tsx` wird in DERSELBEN Iteration auch in der entsprechenden `content/X.md` nachgepflegt — ohne Rückfrage.

**Mapping page.tsx → content/:**
- `src/app/page.tsx` → `content/Startseite_Texte_MH3_v1_1.md`
- `src/app/fuehrung/page.tsx` → `content/Fuehrung_Texte_MH3_v1_1.md`
- `src/app/karriere/page.tsx` → `content/Karriere_Texte_MH3_v1.md`
- `src/app/vertrieb/page.tsx` → `content/Vertrieb_Texte_MH3_v1.md`
- `src/app/simulation/page.tsx` → `content/Simulation_Texte_MH3_v1.md`
- `src/app/ueber-mich/page.tsx` → `content/Ueber_mich_Texte_MH3_v1.md`
- `src/app/community/page.tsx` → `content/Community_Texte_MH3_v1.md`

**Pflicht im Commit-Message:** Sync explizit erwähnen, z. B. `"feat(vertrieb): Abschnitt 5 gebaut + content/-Sync"` oder als zweite Zeile `"+ content/Vertrieb_Texte_MH3_v1.md synchron"`.

Bei reinen Code-Refactorings (keine Textänderung): kein Sync nötig. Bei Layout- oder Strukturänderungen mit Text-Bezug: Sync nötig. Im Zweifel: synchronisieren. Doppelpflege ist günstiger als Drift.

### Cursor-Auftrags-Format
Jeder Cursor-Auftrag enthält am Ende den festen 8-Schritt-Nach-dem-Coden-Block (gerahmt von Pre-Flight am Anfang und Self-Reporting am Ende, die nicht mitnummeriert werden):

> **Überholt (2026-06-26):** Der Agent verwaltet den Dev-Server nicht und baut nicht lokal — Schritte **1, 2, 6, 8 entfallen**. Es bleiben **3 → 4 → 5** (`git add` → `commit` → `push`); die CI baut + deployt den committeten Stand. Siehe „Stabilität" unter Build-Prozess.

1. `pnpm dev` STOPPEN (paralleler Dev-Server korrumpiert den `.next`-Cache)
2. `pnpm build` — muss fehlerfrei durchlaufen
3. `git add` nur geänderte Dateien (kein `git add -A`)
4. `git commit -m "passende Message"`
5. `git push origin main` — bleibt MANUELL bei Marcus, NICHT im Auftrag (im Auftrag nur als Hinweis dokumentiert)
6. `npx kill-port 3000`
7. `pnpm screenshots` — nur wenn `screenshots: ja` im Auftrags-Header
8. `pnpm dev` STARTEN

---

## 🏗️ Footer

- Trennlinie: seitenbreite Denver-Blau-Linie (h-0.5 w-full bg-denver-blue) am oberen Rand
- Textfarben: text-brand-text (#222222) für alle Inhalte, text-brand-gray-dark für Copyright-Zeile
- Kein Denver-Blau-Hintergrund (Denver-Blau ist Akzentfarbe, keine Fläche)

---

## 📬 ContactSection (Shared Component, Sprint 7 definiert)

- **Hintergrund Section:** `bg-[#F5F5F5]` — fest in der Komponente, NICHT per outerClassName überschreiben
- **Denver-Blau-Linie:** `h-0.5 w-full bg-denver-blue` — bündig am oberen Section-Rand, VOR dem Padding
- **Padding-Container:** `pt-6 md:pt-8 pb-12 md:pb-16` — auf einem inneren Div NACH der Linie
- **Einladungskarte:** `bg-white rounded-lg shadow-md p-8 md:p-12 mx-auto max-w-5xl text-center`
- **Kein oranger Section-Divider** — die Denver-Blau-Linie ersetzt ihn
- **Einbindung auf Seiten:** Nur `headline` und `subtext` als Props übergeben. Keine outerClassName für Farbe/Padding.
- **Funktioniert auf jeder Seite identisch**, unabhängig von der vorhergehenden Section-Farbe

### ⚠️ Soll-Ist-Lücke: max-w-5xl vs. max-w-3xl
- CLAUDE.md-Dokumentation (oben) nennt `max-w-5xl` für die Einladungskarte
- Tatsächlicher Komponenten-Code in `src/components/ContactSection.tsx`: `max-w-5xl`
- **Backlog-Punkt (nach Sprint 14):** Klären, welcher Wert der gewollte ist, beide Quellen angleichen. Bis dahin: bei Re-Use der Klassenkette IMMER aus der Komponente lesen, nicht aus dieser Datei.

---

## 🆕 Muster aus Sprint 14 (Über-mich)

### H3-Stufe für Werdegang-Strukturierung (Sprint 14, Abschnitt 5)
- **Klassenkette:** `mt-10 mb-3 text-xl md:text-2xl font-semibold text-denver-blue leading-snug`
- **Verwendung:** Kapitel-Marker innerhalb langer Storytelling-Sections (4+ Absätze, mehrere Lebensphasen/Themen)
- **Begründung Farbwahl:** Denver-Blau = Marcus-Perspektive, korrekt für autobiografische Inhalte
- **NICHT verwenden für:** Karten-interne Überschriften (dort weiterhin font-bold text-base)

### Lead-Wort-Konvention (Sprint 14, Abschnitt 8)
- **Muster:** Absatz-Lead-Wort in Denver-Blau-Bold mit Punkt, gefolgt von Leerzeichen und Body-Text
- **Klassenkette:** `<span className="font-bold text-denver-blue">Lead-Wort.</span> Body-Text...`
- **Verwendung:** Wenn ein Fließtext-Abschnitt aus mehreren thematisch verschiedenen Absätzen besteht, die als Aufzählung wirken (Persönliches, Themen-Liste). Ersatz für Hexagon-Bullet-Karten dort, wo Karten zu strukturiert wären.
- **Abgrenzung zu Mid-Sentence-Bolding:** Lead-Wort steht IMMER am Absatzanfang, NIE mitten im Satz. Mid-Sentence-Bolding bleibt verboten.

### Custom-Schatten als bewusster Sonderfall (Sprint 14, Abschnitt 7)
- **Klassenkette:** `shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]`
- **Verwendung:** EINMALIG in Abschnitt 7 (Sie/Du-Einladungskarte) für stärkere Tiefenwirkung auf weißem Section-Hintergrund, wo `shadow-2xl` nicht trägt.
- **Wichtig:** KEINE Norm — bei jeder weiteren Stelle, die Custom-Shadow verlangen würde, erst explizit klären, bevor übernommen.

### A7-Karte: Übergangs-Karte (Sprint 14)
- **Klassenkette Wrapper:** `mx-auto max-w-3xl rounded-lg bg-white p-8 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] md:p-12`
- **Abgrenzung zur ContactSection-Karte:** Die A7-Übergangs-Karte ist BEWUSST schmaler (max-w-3xl) als die ContactSection-Karte (Komponente nutzt max-w-5xl). Übergang in der Seitenmitte ist Verdichtung, Abschluss-Karte ist Einladung — verschiedene Semantik, verschiedene Breite.

### Foto neben Text — einfaches 1:2-Grid (Sprint 14, A9)
- **Grid-Wrapper:** `grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center mt-8`
- **Linke Spalte (Bild):** `lg:col-span-1` (keine flex/justify/row-span)
- **Rechte Spalte (Text):** `lg:col-span-2`
- **next/image sizes:** `(min-width: 1024px) 33vw, 100vw`
- **Abgrenzung zum Startseiten-Z-Pattern:** Dieses Muster nutzt KEINE row-span/col-start-Konstrukte — bewusst einfach gehalten für reine Foto+Text-Sections ohne zusätzliche Elemente.

---

Gemini Project DNA Status: Technisches Setup (Node 22, pnpm 10, Git). Workflow: Gemini (Didaktik/Strategie) <-> Cursor/Claude (Execution).
