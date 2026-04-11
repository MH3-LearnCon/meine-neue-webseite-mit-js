# MH3 LearnCon GmbH – Design System v2.0
## Stand: 06. April 2026

> Zentrale Leitplanke für Design (Claude Code) und Copywriting (Claude Chat).
> Dieses Dokument hat Vorrang vor älteren Angaben in einzelnen Strategiedokumenten.
> Bei Widersprüchen zu CLAUDE.md: Design System v2.0 gilt für visuelle Entscheidungen, CLAUDE.md gilt für Tech-Stack und Brand-Voice-Regeln.

---

## 1. Markenidentität & Kontext

- **Firma:** MH3 LearnCon® GmbH (immer mit ®, immer CamelCase "LearnCon", immer mit GmbH)
- **Person:** Marcus Holzheimer – Geschäftsführender Gesellschafter und Berater
- **Markenkern:** Senior-Berater und Sparringspartner auf Augenhöhe für Geschäftsführung, Führungskräfte und Expert:innen
- **Zielgruppe:** Technisches B2B-Umfeld, Schwerpunkt Maschinenbau und Industrie. Alter: 35–55 Jahre
- **Abgrenzung:** Kein "Erklärbär", kein Bullshit-Bingo, keine theoretischen Phrasen, kein Coaching
- **Tonalität:** Pragmatisch, analytisch, wertschätzend, direkt, ungeschönt, bodenständig, ergebnisorientiert
- **Perspektive:** "Ich" (nicht "Wir"). Ausnahme: Zusammenarbeits-Wir (Marcus + Klient:in)

---

## 2. Farbpalette

Die Webseite nutzt ein stark reduziertes, klares Farbschema. Zwei Akzentfarben (Orange, Denver-Blau) mit klaren Zuständigkeiten, ergänzt durch eine vollständige Grau-Abstufung.

### 2.1 Farbtabelle

| Bezeichnung | Hex | CSS-Variable | Tailwind-Name | Verwendung |
|---|---|---|---|---|
| Denver-Blau | #002244 | --color-denver-blue | denver-blue | Statement-Cards, Sekundär-Buttons, strukturelle Anker |
| Orange (Akzent) | #FF9B01 | --color-orange | orange | Primär-Buttons, CTAs, Zahnräder, Rahmen, Hover-States |
| Anthrazit | #222222 | --color-anthracite | anthracite | Fließtext, Überschriften, dunkle Flächen |
| Dunkelgrau | #828282 | --color-grey-dark | grey-dark | Subtexte, Meta-Informationen |
| Mittelgrau | #9D9D9D | --color-grey-medium | grey-medium | Tertiäre Elemente, Trennlinien |
| Mittelgrau hell | #D9D9D9 | --color-grey-light-mid | grey-light-mid | Sekundäre Elemente, Rahmen |
| Hellgrau | #F2F2F2 | --color-grey-light | grey-light | Hintergründe im Wechsel mit Weiß |
| Weiß | #FFFFFF | --color-white | white | Haupthintergrund |

### 2.2 CSS-Variablen (globals.css)

```css
:root {
  --color-denver-blue: #002244;
  --color-orange: #FF9B01;
  --color-anthracite: #222222;
  --color-grey-dark: #828282;
  --color-grey-medium: #9D9D9D;
  --color-grey-light-mid: #D9D9D9;
  --color-grey-light: #F2F2F2;
  --color-white: #FFFFFF;
}
```

### 2.3 Tailwind-Config-Erweiterung (tailwind.config.ts)

```typescript
theme: {
  extend: {
    colors: {
      'denver-blue': '#002244',
      'orange': '#FF9B01',
      'anthracite': '#222222',
      'grey-dark': '#828282',
      'grey-medium': '#9D9D9D',
      'grey-light-mid': '#D9D9D9',
      'grey-light': '#F2F2F2',
    }
  }
}
```

### 2.4 Farb-Reviere (verbindlich)

**Orange = Aktion & Energie.** Alles, was aktivieren soll: Primär-Buttons, Zahnräder, Button-Outlines, Hover-States, CTA-Akzente, Rahmen um Profilfoto, dekorative Elemente.

**Denver-Blau = Struktur & Autorität.** Alles, was Gewicht und Tiefe braucht: Statement-Cards, Sekundär-Buttons, ggf. Trennlinien und strukturelle Akzente.

**Nie zusammen auf demselben Element.** Kein blauer Button mit orangem Text. Kein oranger Button mit blauem Rand. Ergänzung durch Abwechslung, nicht durch Mischung.

**Verhältnis auf der Seite:** ca. 80% Orange-Präsenz, 20% Denver-Blau.

### 2.5 Kontrast-Regeln (WCAG 2.1 AA — STRIKT)

| Kombination | Kontrast | Status | Verwendung |
|---|---|---|---|
| Anthrazit (#222222) auf Weiß (#FFFFFF) | ~15.4:1 | ✅ AAA | Fließtext, Überschriften |
| Anthrazit (#222222) auf Orange (#FF9B01) | ~7.5:1 | ✅ AAA | Primär-Button-Text |
| Weiß (#FFFFFF) auf Denver-Blau (#002244) | ~16.0:1 | ✅ AAA | Statement-Cards, Sekundär-Button-Hover |
| Orange (#FF9B01) auf Weiß (#FFFFFF) | ~2.8:1 | ❌ Fail | **NUR** für große Überschriften (ab 24px bold), Zahnräder, dekorative Elemente. NIEMALS für Fließtext oder Button-Text |
| Weiß (#FFFFFF) auf Orange (#FF9B01) | ~2.8:1 | ❌ Fail | NIEMALS verwenden |

---

## 3. Typografie

### 3.1 Schriftart

**Montserrat** — ausschließlich. Lokal eingebunden via `next/font` (DSGVO). Keine zweite Schriftart.

### 3.2 Größen und Gewichte (responsive)

Desktop-Werte = Referenz. Mobile-Werte = proportionale Verkleinerung für sauberen Umbruch.

| Element | Mobile | Desktop (lg:) | Gewicht | Tailwind (Mobile) | Tailwind (Desktop) |
|---|---|---|---|---|---|
| H1 | 36px | 48px | 800 (ExtraBold) | text-4xl font-extrabold | lg:text-5xl |
| H2 | 28px | 32px | 600 (SemiBold) | text-3xl font-semibold | lg:text-4xl |
| H3 / Section Header | 24px | 28px | 500 (Medium) | text-2xl font-medium | lg:text-3xl |
| Paragraph | 16px | 16px | 400 (Regular) | text-base font-normal | — |

**Allgemeine Typografie-Regeln:**
- Alle Überschriften: `text-anthracite` (#222222). Keine farbigen Überschriften (Ausnahme: Hero-Sektion, s. Abschnitt 8)
- Zeilenabstand: `leading-relaxed` für Fließtext, `leading-tight` für H1, `leading-snug` für H2/H3
- Buchstabenabstand: `tracking-tight` für H1 und H2
- Große Schriftgrößen und großzügiger Zeilenabstand — Zielgruppe ist 35–55 Jahre

---

## 4. Spacing & Layout

### 4.1 Section Padding

Generöser Weißraum trennt die Themen und erzeugt Ruhe.

```
py-16 lg:py-24
```

### 4.2 Content Container

Max-Width für optimale Zeilenlänge und Lesbarkeit.

```
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

### 4.3 Z-Pattern-Grid (Desktop)

Asymmetrische 2/3 zu 1/3 Aufteilung. Text und Statement-Card wechseln die Seite (Zick-Zack).

```
grid grid-cols-1 lg:grid-cols-12 gap-12 items-start
```

- Text-Spalte: `lg:col-span-8`
- Statement-Card-Spalte: `lg:col-span-4`
- Ungerade Sektionen: Text links, Card rechts
- Gerade Sektionen: Card links, Text rechts (via `lg:order-first` auf der Card)

### 4.4 Sektions-Hintergründe

Fachliche Sektionen wechseln konsequent zwischen Weiß (#FFFFFF) und Hellgrau (#F2F2F2). Kein Block wird blau eingefärbt — Denver-Blau bleibt den Statement-Cards vorbehalten.

### 4.5 Mobile-Verhalten

Auf Mobile löst sich das Z-Pattern auf. Pro Sektion:

1. H2-Überschrift
2. Fließtext
3. Denver-Blue Statement-Card (volle Breite, als visueller Schlusspunkt)
4. → Nächste Sektion

Die Card kommt immer **nach** dem Textblock. Kein zusätzlicher Trenner nötig.

---

## 5. Border-Radius-System

Zwei konsistente Stufen:

| Element | Radius | Tailwind |
|---|---|---|
| Buttons | 6px | rounded-md |
| Cards (Denver-Blue, Content-Karten) | 12px | rounded-xl |

Keine Pillenform, keine scharfen Ecken. Dezent gerundet = Premium B2B.

---

## 6. Button-System

### 6.1 Primär-Button (wichtigste Aktion pro Seite)

- Hintergrund: Orange (#FF9B01)
- Schrift: Anthrazit (#222222) — **NICHT Weiß** (Kontrast-Fail)
- Kontrast: ~7.5:1 (WCAG AAA ✅)
- Hover: Leicht abgedunkelt (z.B. #E68A00)
- Radius: rounded-md (6px)
- Einsatz: "Jetzt anrufen", "Termin vereinbaren", primärer CTA

```
Tailwind: bg-orange text-anthracite font-semibold rounded-md px-6 py-3
Hover: hover:bg-[#E68A00]
```

### 6.2 Sekundär-Button (weitere Optionen)

- Rahmen: Denver-Blau (#002244)
- Schrift: Denver-Blau (#002244)
- Hintergrund: transparent
- Hover: Füllt sich mit Denver-Blau, Schrift wird Weiß (16:1 Kontrast ✅)
- Radius: rounded-md (6px)
- Einsatz: E-Mail, Calendly, sekundäre Aktionen

```
Tailwind: border-2 border-denver-blue text-denver-blue font-semibold rounded-md px-6 py-3
Hover: hover:bg-denver-blue hover:text-white
```

### 6.3 Kontaktbereich (drei Buttons nebeneinander)

- Telefon = Primär-Button (Orange)
- E-Mail = Sekundär-Button (Denver-Blau-Outline)
- Calendly = Sekundär-Button (Denver-Blau-Outline)

Reihenfolge fix: Telefon → E-Mail → Calendly

---

## 7. UI-Komponente: Denver-Blue Statement Card

### 7.1 Funktion

Ersetzt klassische Stockfotos und KI-Personenbilder in den 1/3-Spalten. Dient als visueller und inhaltlicher Anker neben dem Text. **Ersetzt auch die ehemals geplanten full-width Statement-Balken.**

### 7.2 Styling

- Format: 1:1 (Quadrat) oder 4:5 (Hochformat) — NICHT 16:9
- Hintergrund: Denver-Blau (#002244)
- Schrift: Weiß (#FFFFFF)
- Optionaler Orange-Akzent: Feiner Strich am linken Rand (3–4px, Orange)
- Radius: rounded-xl (12px)
- Schatten: shadow-lg

```
Tailwind: bg-denver-blue text-white p-10 lg:p-12 rounded-xl shadow-lg
          flex flex-col justify-center aspect-square lg:aspect-[4/5]
```

### 7.3 Typografie innerhalb der Card

```
text-2xl lg:text-3xl font-bold leading-snug text-white
```

### 7.4 Copy-Regeln für Card-Texte

1. **Extrem kurz:** Maximal 15–20 Wörter. Die Kachel muss atmen können.
2. **Kontrast-Prinzip:** Oft im Format "Nicht X, sondern Y" (Problem vs. Lösung).
3. **Keine Floskeln:** Keine Begrüßungen, keine CTAs in der Kachel. Reines Statement.
4. **Brand-Voice:** Bewusste Kontrastpaare sind erlaubt (Ausnahme Negierungs-Regel).

### 7.5 Finale Statement-Texte (Startseite + Bereichsseiten)

| Seite | Statement-Text |
|---|---|
| Startseite – Führung | Gute Führung braucht Sparring, keine Schonhaltung. |
| Startseite – Karriere | Nicht mehr Bewerbungen. Sondern der unterschriftsreife Vertrag. |
| Startseite – Vertrieb | Struktur schlägt Intuition. Prozess schlägt Zufall. |
| Startseite – Simulation | Führung und Teamdynamik erleben statt besprechen. |
| Über mich | Klare Meinung, eigene Erfahrung – und immer Ihr Ansprechpartner. |
| MH3-EAZEE | Handverlesen statt offen. Vertrauen statt Reichweite. |

**Startseite – Hero-Bereich:** "Hoffnung ist keine Strategie!" (Platzierung: TBD, ggf. eigene Behandlung im Hero statt Card)

**Bereichsseiten (Führung, Karriere, Vertrieb, Simulation):** Weitere Statement-Texte werden aus den jeweiligen Seitentexten / Customer Journeys abgeleitet — eigenes Arbeitspaker.

---

## 8. Hero-Sektion Startseite

### 8.1 Farbrhythmus der Headline

Drei Farben, drei Funktionen:

| Zeile | Text | Farbe | Funktion |
|---|---|---|---|
| 1 | Führung stärken. | Anthrazit (#222222) | Thema |
| 2 | Karriere gestalten. | Orange (#FF9B01) | Hervorhebung |
| 3 | Vertrieb professionalisieren. | Anthrazit (#222222) | Thema |
| 4 | Einfach. Machen. | Denver-Blau (#002244), bold italic | Claim / Signatur |

**Hinweis:** Denver-Blau für "Einfach. Machen." muss im Browser getestet werden. Falls der Kontrast zu Anthrazit visuell zu gering wirkt → Fallback: Orange (bold italic). Entscheidung fällt nach Live-Test.

### 8.2 Primär-CTA im Hero

Telefonnummer als Primär-Button (Orange, Anthrazit-Schrift). Klickbar: `tel:+491718820277`

---

## 9. Visuelle Markenelemente

### 9.1 Zahnräder (SVG)

- Farbe: Orange (#FF9B01)
- Einsatz als präzise Icons und als dezentes Wasserzeichen im Hintergrund
- Format: SVG (skalierbar, performant)
- Stil: Technisch-clean, nicht verspielt. Maschinenbau-Referenz.
- Werden in Affinity Designer v2 erstellt/bearbeitet, als SVG exportiert

### 9.2 CSS-Hintergrundmuster

Extrem feines Grid-Muster, via CSS/Tailwind programmiert. Kein Bild, keine externe Datei.
Dient als subtile Textur auf Weiß-Flächen, um "leere" Bereiche weniger steril wirken zu lassen.

### 9.3 Bildstrategie

- Keine generischen Stockfotos
- Authentische Studioaufnahmen von Marcus (B-Roll-Konzept): Arbeitend am Flipchart, über die Schulter, nicht permanente Frontalporträts
- B2B-Fokus: Klient:innen im Mittelpunkt, nicht der Berater
- KI-generierte Bilder: Werden in separater Phase erstellt (Phase 4 der Roadmap)

---

## 10. Animationen & Interaktion

- ✅ Sanftes Einblenden (Scroll-Reveal)
- ✅ Hover-Effekte auf Buttons und Cards
- ✅ Flüssige Akkordeons
- ❌ Kein Parallax-Scrolling
- ❌ Keine einfliegenden Textblöcke
- ❌ Kein Auto-Play (Video/Audio)

**Regel:** Animation dient dem Verständnis → willkommen. Animation dient dem Eindruck → überflüssig.

---

## 11. Änderungshistorie

| Version | Datum | Änderungen |
|---|---|---|
| v1.0 | April 2026 | Erstversion aus Gemini-Session |
| v2.0 | 06.04.2026 | Bereinigung durch Claude Chat: Markenname korrigiert, League Spartan entfernt, Typografie an CLAUDE.md angeglichen + responsive Skalierung, H3-Farbe auf Anthrazit, vollständige Grau-Palette ergänzt, Statement-Cards ersetzen Statement-Balken, Zahnräder ergänzt, CSS-Grid-Muster ergänzt, Button-System mit Barrierefreiheits-Konformität definiert, Border-Radius-System, Mobile-Verhalten Z-Pattern, Farb-Reviere Orange/Denver-Blau, Hero-Farbrhythmus |
