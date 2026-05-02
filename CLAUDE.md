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

---

## 🃏 Card-Hierarchie (Sprint 6 definiert)

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

### Hierarchie-Übersicht
1. SituationCards: shadow-md + Orange-Leiste = primäre Karten (Leser)
2. Praxis-Karten: shadow-md + Denver-Blau-Leiste = Fallbeispiele (Marcus)
3. OfferCards: shadow-md + Denver-Blau Border-Top = Angebote (klickbar)
4. Themen-Karten: shadow-sm, kein Akzent = sekundäre Container (Scan-Liste)
5. Akkordeon-Trigger: #E5E5E5-Füllung, kein Border = interaktive Trigger

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

## 📐 Container-Breiten (Führungsseite als Referenz)

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
| Kontakt (9) | bestehend | Shared Component |

---

## 🔗 Link-Styling

- Farbe: text-orange
- Gewicht: font-semibold
- Pfeil: → am Ende
- Hover: hover:text-denver-blue transition-colors
- Muster: „Mehr zum Bootcamp →", „Alle Bewertungen ansehen →"

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

### Git-Disziplin
- **Maximal 2 Änderungen pro Claude-Code-Block.** Ausnahmen nur mit Begründung im Commit-Body.
- **Kein Git-Befehl ohne vorheriges `git status` + `git log`.**
- **Auto-Commit nach jedem erfolgreichen Block.**
- **"Made-with: Cursor"-Trailer in Commits entfernen.** Information Disclosure — nicht erwünscht.

### Qualitätssicherung
- **`/visual-check` nach jedem Layout-/Farb-/Strukturblock.** Manuell anhand `.claude/skills/visual-check.md`.
- **Pre-Inspektion vor Edits an Layout-Containern.** Keine Container-Breiten ändern, ohne vorher den tatsächlichen Dateiinhalt gelesen zu haben.

### Sicherheit
- **Allowlist nur für reine Leseoperationen.** Niemals für verändernde Befehle (Schreiben, Löschen, Git-Commits).

### Cursor-Agent-Hänger
- **Bei Stillstand >5 Minuten ohne Status-Update:** Stop drücken, `git status` im Terminal prüfen, dann entscheiden ob Neustart oder manuelles Fortsetzen.

### Cursor-Auftrags-Format
Jeder Cursor-Auftrag enthält am Ende den festen Nach-dem-Coden-Block:
1. `pnpm build` — muss fehlerfrei durchlaufen
2. `git add` nur geänderte Dateien (kein `git add -A`)
3. `git commit -m "passende Message"`
4. `git push origin main`
5. `pnpm dev` starten

---

## 🏗️ Footer

- Trennlinie: seitenbreite Denver-Blau-Linie (h-0.5 w-full bg-denver-blue) am oberen Rand
- Textfarben: text-brand-text (#222222) für alle Inhalte, text-brand-gray-dark für Copyright-Zeile
- Kein Denver-Blau-Hintergrund (Denver-Blau ist Akzentfarbe, keine Fläche)

---

Gemini Project DNA Status: Technisches Setup (Node 22, pnpm 10, Git). Workflow: Gemini (Didaktik/Strategie) <-> Cursor/Claude (Execution).
