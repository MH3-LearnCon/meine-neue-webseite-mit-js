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
| Orange (Akzent) | #FF9B01 | Buttons, CTAs, Zahnrad-Elemente, Rahmen |
| Schwarz | #222222 | Fließtext |
| Hellgrau | #F2F2F2 | Hintergründe, Boxen |
| Mittelgrau hell | #D9D9D9 | Sekundäre Elemente |
| Mittelgrau | #9D9D9D | Tertiäre Elemente |
| Dunkelgrau | #828282 | Subtexte |
| Weiß | #FFFFFF | Hintergrund |

**WICHTIG:** Orange (#FF9B01) auf Weiß hat nur ca. 2.8:1 Kontrast. Orange NUR für große Überschriften (ab 18px bold), Buttons und dekorative Elemente. NIEMALS für Fließtext.

### Typografie (Montserrat, lokal eingebunden via next/font)
| Element | Größe | Gewicht |
|---|---|---|
| H1 | 48px / 3rem | 800 (Fett) |
| H2 | 32px / 2rem | 600 (Halbfett) |
| Section Header | 28px / 1.75rem | 500 (Medium) |
| Paragraph | 16px / 1rem | 400 (Regular) |

Große Schriftgrößen, großzügiger Zeilenabstand – Zielgruppe ist 35–55 Jahre.

### Visuelle Markenelemente
- Zahnräder in Orange: dezent, wiederkehrend (Maschinenbau-Hintergrund)
- Kein Parallax-Scrolling, keine einfliegenden Textblöcke, kein Auto-Play
- Sanftes Einblenden, Hover-Effekte, flüssige Akkordeons erlaubt

### Hover-Konvention (projektweit verbindlich)
- **Alle Buttons** (Primär, Sekundär, Outline): `hover:bg-denver-blue hover:text-white hover:border-denver-blue`
- **Inline-Links und Wegweiser**: `hover:text-denver-blue`
- **Nav-Items**: `hover:text-denver-blue hover:bg-brand-gray-light`
- **Logo**: kein Hover-Effekt
- KEINE anderen Hover-Farben auf Buttons verwenden. Keine veralteten Flächen-Hover auf Anthrazit oder Orange-Dunkler, keine separaten Hover-Token außerhalb dieser Liste.

---

## ✍️ Brand Voice & Textregeln (STRIKT EINZUHALTEN)

### Firmenname & Markenzeichen
- Firmenname: **MH3 LearnCon® GmbH** (mit ® bei erster/prominentester Nennung pro Seite, im Footer und Impressum)
- Community: **MH3-EAZEE®** (mit ® bei erster Nennung pro Seite)
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
- Shopvote: **5/5 Sterne**, Anzahl Bewertungen aus Widget übernehmen
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
- Shopvote-Widget: DSGVO-Konformität beim Einbau prüfen.
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

---

Gemini Project DNA Status: Technisches Setup (Node 22, pnpm 10, Git). Workflow: Gemini (Didaktik/Strategie) <-> Cursor/Claude (Execution).
