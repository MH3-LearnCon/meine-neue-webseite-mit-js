# Design-System MH3 LearnCon® GmbH
## Version 1.2 — Sprint 11 (Mai 2026)

> **Zugehörig zu:** CLAUDE.md (technische Umsetzung), Brand Voice Guide v2.3 (Sprache), Webseiten-Konzept v1.2 (Struktur)
> **Zweck:** Referenzdokument für alle Design-Entscheidungen. Verbindlich für Cursor, Gemini-Audits und manuelle Prüfungen.
> **Änderungen v1.1 → v1.2:** Statement Cards Sprint-8-Proportionen (Abschnitt 3.6), Sequenz-Karten als neue Komponente (Abschnitt 3.7), Card-Hierarchie aktualisiert (Abschnitt 3), Transition Hook Lernnotiz (Abschnitt 6), Container-Breiten Vertrieb-Seite (Abschnitt 10), Farblogik Sequenz-Karten (Abschnitt 1)
> **Ergänzung 7. Mai 2026 (Sprint 11.2-fix2):** Link-Styling Abschnitt 7 um Underline-Verbot und Konsequenzen für klickbare Karten erweitert.

---

## 1. Farbpalette

### Primärfarben

| Bezeichnung | Hex | CSS-Variable / Tailwind | Rolle |
|---|---|---|---|
| Denver-Blau | #002244 | `denver-blue` | Architektur-Akzent: Linien, Borders, Quotes, Prozess-Kreise |
| Orange | #FF9B01 | `orange` / `text-orange` | Interaktions-Akzent: Buttons, CTAs, HexagonBullets, Offset-Schatten |
| Anthrazit | #222222 | `text-brand-text` | Fließtext, Button-Text |

### Sekundärfarben

| Bezeichnung | Hex | CSS-Variable / Tailwind | Rolle |
|---|---|---|---|
| Hellgrau | #F5F5F5 | `bg-brand-gray-light` | Alternating Section-Hintergrund, Hover-State OfferCards |
| Mittelgrau hell | #D9D9D9 | `border-brand-gray-mid-light` | Card-Borders (alle Karten-Typen) |
| Mittelgrau | #9D9D9D | `text-brand-gray-mid` | Tertiäre Elemente |
| Dunkelgrau | #828282 | — | Subtexte, Platzhalter-Text |
| Weiß | #FFFFFF | — | Hintergrund, Card-Füllung |

### Farblogik (verbindlich)

- **Orange** = Leser-Perspektive: SituationCards (Orange-Leiste), HexagonBullets, Themen, CTAs
- **Denver-Blau** = Marcus-Perspektive: Quotes, Praxis-Karten (Denver-Blau-Leiste), Sequenz-Karten (Denver-Blau-Leiste), OfferCards (Border-Top), Prozessschritte, Footer-Trennlinie, ContactSection-Trennlinie
- **Denver-Blau ist eine Linien- und Akzentfarbe, keine Flächenfarbe.** Kein Denver-Blau-Hintergrund auf großen Flächen (z.B. Footer).

### Kontrast-Hinweis

Orange (#FF9B01) auf Weiß hat nur ca. 2.8:1 Kontrast. Orange ausschließlich für große Überschriften (ab 18px bold), Buttons und dekorative Elemente. Niemals für Fließtext.

### Farbdisziplin

Keine neuen Farbwerte ohne explizite Freigabe. Keine Tailwind-Standard-Farben (gray-100, gray-200 etc.) als Ersatz. Wenn der Wert nicht in dieser Tabelle steht, ist er nicht erlaubt.

---

## 2. Typografie

### Schriftfamilie

Montserrat, lokal eingebunden via `next/font`. Kein externer Google-Fonts-Aufruf (DSGVO).

### Größen und Gewichte

| Element | Größe | Gewicht | Hinweis |
|---|---|---|---|
| H1 | 48px / 3rem | 800 (Fett) | Genau eine pro Seite |
| H2 | 32px / 2rem | 600 (Halbfett) | Abschnitts-Überschriften |
| Section Header | 28px / 1.75rem | 500 (Medium) | — |
| Paragraph | 16px / 1rem | 400 (Regular) | Standard-Fließtext |
| Quote-Text | 20px / 1.25rem | 500 (Medium) | Denver-Blau-Linie links |
| Transition Hook | text-xl | 500 (Medium) | Zentriert, zwischen Sections |
| Kennzahl-Quote | text-xl | 500 (Medium) | z.B. „Über 65 Bewertungen" |

### Regeln

- Kein Italic — projektweite Regel, keine Ausnahmen
- Große Schriftgrößen, großzügiger Zeilenabstand — Zielgruppe ist 35–55 Jahre
- rem-basierte Typografie durchgängig

---

## 3. Card-Hierarchie

Sieben Karten-Typen, klar differenziert nach Funktion und visueller Gewichtung.

### 3.1 SituationCards (primäre Karten, Leser-Perspektive)

| Eigenschaft | Wert |
|---|---|
| Hintergrund | bg-white |
| Border | border border-brand-gray-mid-light (#D9D9D9) |
| Schatten | shadow-md |
| Radius | rounded-lg (8px) |
| Akzent | border-l-4 border-orange (volle Card-Höhe) |
| Padding | p-6 md:p-8 |
| Layout | 2×2-Grid (md:grid-cols-2), Stack auf Mobile |
| Hover | — (nicht klickbar) |
| Verwendung | Situationsfragen an den Besucher (Abschnitt 2) |

### 3.2 Praxis-Karten (Fallbeispiel-Container, Marcus-Perspektive)

| Eigenschaft | Wert |
|---|---|
| Hintergrund | bg-white |
| Border | border border-brand-gray-mid-light (#D9D9D9) |
| Schatten | shadow-md |
| Radius | rounded-lg |
| Akzent | border-l-4 border-denver-blue |
| Padding | p-6 md:p-8 |
| Layout | einspaltig, space-y-6 |
| Hover | — (nicht klickbar) |
| Verwendung | Fallbeispiele aus der Praxis (Abschnitt 6) |

Unterschied zu SituationCards: Denver-Blau-Leiste statt Orange → Marcus-Perspektive statt Leser-Perspektive.

### 3.3 OfferCards (Angebots-Karten, klickbar)

| Eigenschaft | Wert |
|---|---|
| Hintergrund | bg-white |
| Border | bestehend + border-t Denver-Blau |
| Schatten | shadow-md |
| Radius | rounded-lg |
| Padding | p-6 md:p-8 |
| Layout | Grid max-w-5xl mx-auto innerhalb max-w-6xl Container |
| Hover | hover:bg-[#F5F5F5], cursor-pointer, transition-colors |
| Klickbar | Gesamte Karte als next/link-Wrapper |
| CTA | font-semibold + Pfeil (→), hover:text-denver-blue |
| Titel | font-bold |
| Verwendung | Angebote mit Weiterleitung (Bootcamp, Community) |

### 3.4 Themen-Karten (sekundäre Container)

| Eigenschaft | Wert |
|---|---|
| Hintergrund | bg-white |
| Border | border border-brand-gray-mid-light (#D9D9D9) |
| Schatten | shadow-sm (leichter als primäre Karten) |
| Radius | rounded-lg |
| Padding | px-4 py-3 |
| Layout | grid-cols-1 md:grid-cols-2 gap-4 |
| Hover | — (nicht klickbar) |
| Akzent | — (kein Akzent, HexagonBullet übernimmt Farbsignal) |
| HexagonBullet | items-start + mt-1.5, size 12px, text-orange |
| Verwendung | Scan-Listen (Themen in Abschnitt 4) |

### 3.5 Akkordeon-Trigger (interaktive Elemente)

| Eigenschaft | Wert |
|---|---|
| Hintergrund | #E5E5E5 |
| Hover | #D8D8D8 |
| Border | — (kein Border) |
| Schatten | — (kein Schatten) |
| Icon | Plus/Minus in Orange |
| Verwendung | Simulation, Über-mich (nicht auf Führungsseite) |
| Regel | Erstes Element standardmäßig offen |

### 3.6 Statement Cards (Startseite, Z-Pattern)

| Eigenschaft | Wert |
|---|---|
| Hintergrund | bg-white |
| Border | border-[3px] border-denver-blue |
| Schatten | shadow-[4px_4px_0px_0px_#FF9B01] (harter orangener Offset) |
| Text | text-lg lg:text-xl, font-semibold |
| Proportion | lg:aspect-square |
| Layout | lg:grid-cols-4, 1:3 (vier Cards) + Kurzprofil-Foto lg:grid-cols-3, 1:2 |
| Verwendung | Ausschließlich Startseite, Z-Pattern |

Hinweis: Ältere Werte (6px Border, 8px Schatten, 32px Text) sind überholt — Sprint 8 hat die finalen Proportionen definiert.

### 3.7 Sequenz-Karten (Argumentationsschritte, Marcus-Perspektive)

| Eigenschaft | Wert |
|---|---|
| Hintergrund | bg-white |
| Border | border border-brand-gray-mid-light (#D9D9D9) |
| Schatten | shadow-sm (bewusst leichter als Praxis-Karten) |
| Radius | rounded-lg |
| Akzent | border-l-4 border-denver-blue |
| Padding | p-6 md:p-8 |
| Layout | einspaltig, max-w-4xl mx-auto, space-y-6 |
| Nummer | text-2xl font-bold text-denver-blue, inline mit Titel (flex items-baseline gap-3) |
| Titel | text-lg font-bold |
| Hover | — (nicht klickbar) |
| Verwendung | Sequenzielle Argumentationsschritte (Marcus-Perspektive). Abfolge, kein Menü. |

Unterschied zu Praxis-Karten: Nummern signalisieren Sequenz + shadow-sm + schmalerer Container (max-w-4xl statt max-w-5xl). Gleiche Karten-Familie (Denver-Blau-Leiste = Marcus-Perspektive), anderer Zweck.

### Hierarchie-Übersicht (von stärkstem zu schwächstem Element)

1. SituationCards: shadow-md + Orange-Leiste → primäre Karten
2. Praxis-Karten: shadow-md + Denver-Blau-Leiste → Fallbeispiele
3. OfferCards: shadow-md + Denver-Blau Border-Top → klickbare Angebote
4. Sequenz-Karten: shadow-sm + Denver-Blau-Leiste + Nummern → Argumentationsschritte
5. Statement Cards: border-[3px] + orangener Offset-Schatten → Startseite Z-Pattern
6. Themen-Karten: shadow-sm, kein Akzent → Scan-Liste
7. Akkordeon-Trigger: Füllung, kein Border → interaktiv

---

## 4. Prozessschritte mit Verbindungslinie

Sequenzielle Abläufe (z.B. „So kommen wir ins Gespräch").

| Eigenschaft | Wert |
|---|---|
| Kreise Mobile | w-12 h-12 (48px) |
| Kreise Desktop | w-16 h-16 (64px) |
| Kreis-Hintergrund | bg-white |
| Kreis-Border | border-[3px] border-denver-blue |
| Kreis-Schatten | shadow-[2px_2px_0px_0px_#FF9B01] (harter orangener Offset) |
| Zahl | text-denver-blue font-semibold text-xl |
| Verbindungslinie | w-0.5 bg-denver-blue, vertikal zwischen Kreisen |
| Alignment | items-center |
| Gap | gap-8 md:gap-16 |
| Text | max-w-prose |
| Container | max-w-5xl |

Wiederverwendbar auf allen Seiten mit sequenziellen Abläufen (Karriere, Vertrieb, Simulation).

---

## 5. Quote-Format

Herausgestellte Aussagen mit Denver-Blau-Linie links.

| Eigenschaft | Wert |
|---|---|
| Linie | border-l-4 border-denver-blue |
| Einrückung | ml-10 mr-8 pl-6 py-3 |
| Schrift | text-xl font-medium |
| Umbruch | lg:whitespace-nowrap (einzeilig auf Desktop, Umbruch auf Mobile erlaubt) |
| Hintergrund | — (transparent, kein Rahmen) |

Verwendung: Marcus-Perspektive — Obligation to Dissent, Kennzahlen, prägnante Aussagen.

---

## 6. Transition Hook

Einzelner Satz zwischen zwei Sections, der Erkennung in Relevanz überführt.

| Eigenschaft | Wert |
|---|---|
| Schrift | text-xl font-medium text-brand-text |
| Ausrichtung | text-center |
| Abstand | mt-14 mb-4 |
| Container | — (kein eigener Container, innerhalb der Section) |

Kein Design-Element, sondern ein Textmuster. Nicht standardmäßig einsetzen. Nur verwenden, wenn der Hero-Text keinen eigenen starken Schluss hat. Auf der Vertrieb-Seite (Sprint 11) wurde ein Transition Hook nach dem Hero getestet und wieder entfernt, weil der Hero bereits mit einem starken Schlusssatz endete und die Überleitung redundant wirkte.

---

## 7. Link-Styling

### Verbindlicher Standard

| Eigenschaft | Wert |
|---|---|
| Farbe | `text-orange` |
| Gewicht | `font-semibold` |
| Pfeil | → am Ende des Textes |
| Hover | `hover:text-denver-blue transition-colors` |
| Position | Eigenständige Zeile, nicht im Fließtext |
| Unterstreichung | KEINE — weder Default noch Hover noch Focus |

Beispiele: „Mehr zum Bootcamp →", „Alle Bewertungen ansehen →", „Mehr zum Thema Führung →", „Was ich unter ‚(kein) Coaching' verstehe →"

### Underline-Verbot (Sprint 11.2-fix2 definiert)

Verboten in jedem State und in jeder Komponente:
- `underline`
- `hover:underline`
- `group-hover:underline`
- `decoration-*` (alle Varianten)
- `underline-offset-*` (alle Varianten)

**Begründung:** Orange (#FF9B01) auf Weiß hat nur ca. 2.8:1 Kontrast. Eine Unterstreichung mit Orange auf Weiß schwächt die Lesbarkeit zusätzlich und schneidet die Unterlängen von Montserrat (g, j, p, q, y) an. Das Hover-Signal ist ausschließlich der Farbwechsel zu Denver-Blau.

### Konsequenz für klickbare Karten-Komponenten

Bei klickbaren Karten (OfferCard, ggf. weitere) gilt:
- CTA-Spans innerhalb der Karte dürfen kein `group-hover:underline` tragen
- Das Hover-Signal der Karte ist ausschließlich `hover:bg-[#F5F5F5]`
- Der CTA-Span erbt nichts vom Hover der umgebenden Karte außer der Farb-Transition
- Konkret betroffen war beim Audit: `src/components/OfferCard.tsx` (Sprint 11.2-fix2 bereinigt)

### Querverweis-Position

Interne Querverweise zwischen Subpages werden als eigenständige Zeile gesetzt. Niemals in Fließtext einbetten. Begründung: Lesefluss bleibt sauber, Klickziel ist eindeutig, Pfeil hat Platz, Hover-Wechsel ist deutlich erkennbar.

---

## 8. Section-Divider

| Eigenschaft | Wert |
|---|---|
| Breite | 60px |
| Höhe | 2px |
| Farbe | bg-orange |
| Position | Zentriert, nur an inhaltlichen Übergängen |

Nicht zwischen allen Sections — nur wo ein thematischer Wechsel stattfindet. Die ContactSection verwendet stattdessen eine Denver-Blau-Linie (siehe Abschnitt 14).

---

## 9. Footer

| Eigenschaft | Wert |
|---|---|
| Trennlinie | h-0.5 w-full bg-denver-blue (seitenbreit, am oberen Rand) |
| Textfarbe Inhalte | text-brand-text (#222222) |
| Textfarbe Copyright | text-brand-gray-dark |
| Hintergrund | Kein Denver-Blau — bleibt hell |

---

## 10. Container-Breiten

### Führungsseite (Referenz)

| Abschnitt | Container | Begründung |
|---|---|---|
| Hero | max-w-7xl | Voller visueller Impact |
| Situationskarten | max-w-6xl | Karten-Grid braucht Breite |
| Berater mit Meinung | max-w-6xl | Zwei-Spalten (Text + Foto) |
| Themen | max-w-6xl | Zweispaltiges Karten-Grid |
| Prozessschritte | max-w-5xl | Eigener Rhythmus |
| Aus der Praxis | max-w-5xl | Einspaltige Karten |
| OfferCards | max-w-6xl, Grid max-w-5xl | Karten eingerückt |
| Shopvote | max-w-5xl | Zwei-Spalten (Text + Widget) |
| Kontakt | max-w-4xl (äußerer), max-w-3xl (Karte) | Shared Component, Einladungskarte |

### Vertrieb-Seite

| Abschnitt | Container | Begründung |
|---|---|---|
| Hero | max-w-7xl | Voller visueller Impact |
| Umleitung (Sequenz-Karten) | max-w-6xl (H2), max-w-4xl (Karten) | Karten schmaler als Überschrift für Lesefluss |
| Branchenkompetenz | max-w-6xl | Fließtext mit Quote |
| Themen | max-w-6xl | Zweispaltiges Karten-Grid |
| Kontakt | max-w-4xl (äußerer), max-w-3xl (Karte) | Shared Component |

Prinzip: Strukturierte Layouts (Karten, Grids) brauchen Breite. Lesezonen und Prozesselemente bleiben schmaler.

---

## 11. Shopvote-Widget

| Eigenschaft | Wert |
|---|---|
| Skalierung Desktop | scale-150 |
| Skalierung Mobile | scale-100 (keine Skalierung) |
| Transform-Origin | origin-center |
| Layout | Zwei-Spalten mit Text links (60%), Widget rechts (40%) |
| Kennzahl | „Über 65 verifizierte Bewertungen" (gerundeter Wert, ca. halbjährlich prüfen) |
| Externer Link | shopvote.de/bewertung_mh_learncon_com_21607.html |
| Cookie-Consent | Für Launch klären (externes Script) |

---

## 12. Foto-Platzhalter

| Eigenschaft | Wert |
|---|---|
| Hintergrund | bg-[#E5E5E5] |
| Radius | rounded-xl |
| Text | „Foto folgt" in text-sm text-[#828282], zentriert |
| Format | aspect-square (1:1) für Abschnitt 3, individuell pro Kontext |

Platzhalter werden durch echte Fotos ersetzt, wenn Marcus die Foto-Session durchgeführt hat.

---

## 13. Section-Spacing (Sprint 7 definiert)

Verbindliche vertikale Abstände für alle Subpages.

### Subpage-Sections (Abschnitte 2–8)

| Eigenschaft | Wert |
|---|---|
| Padding oben | pt-6 md:pt-8 (24px / 32px) |
| Padding unten | pb-12 md:pb-16 (48px / 64px) |
| Prinzip | Asymmetrisch: oben wenig (Divider nah am Farbwechsel), unten mehr |

### Hero-Sections (Abschnitt 1)

| Eigenschaft | Wert |
|---|---|
| Mindesthöhe | min-h-[60vh] |
| Padding | py-12 md:py-16 (symmetrisch) |
| Prinzip | Beginn der nächsten Section am unteren Bildschirmrand angeschnitten sichtbar |

### Hintergrund-Alternierung

| Eigenschaft | Wert |
|---|---|
| Reihenfolge | Hero (weiß) → Abschnitt 2 (grau) → Abschnitt 3 (weiß) → usw. |
| Grau-Wert | bg-[#F5F5F5] |
| Position | bg-Klasse auf dem äußersten `<section>`-Element, nicht auf inneren Divs |

---

## 14. ContactSection (Shared Component, Sprint 7 definiert)

Einheitliches Design auf allen Seiten, unabhängig von der vorhergehenden Section-Farbe.

| Eigenschaft | Wert |
|---|---|
| Section-Hintergrund | bg-[#F5F5F5] — fest in der Komponente |
| Trennlinie oben | h-0.5 w-full bg-denver-blue — bündig am oberen Section-Rand, VOR dem Padding |
| Padding-Container | pt-6 md:pt-8 pb-12 md:pb-16 — auf innerem Div NACH der Linie |
| Einladungskarte | bg-white rounded-lg shadow-md p-8 md:p-12 |
| Karten-Breite | mx-auto max-w-3xl |
| Karten-Ausrichtung | text-center |
| Section-Divider | Kein oranger Divider — Denver-Blau-Linie ersetzt ihn |
| Props auf Seiten | Nur `headline` und `subtext` übergeben, keine outerClassName für Farbe/Padding |

### Farblogik-Begründung

Die Denver-Blau-Linie passt zur Farblogik: Denver-Blau = Marcus-Perspektive. Die ContactSection IST Marcus' Einladung zum Gespräch. Die Denver-Blau-Linien oben (ContactSection) und unten (Footer) rahmen diese Einladung ein.

---

*Version 1.2 — aktualisiert am 7. Mai 2026 nach Sprint 11.*
*Änderungen v1.1 → v1.2: Statement Cards Sprint-8-Proportionen (3.6), Sequenz-Karten (3.7), Card-Hierarchie aktualisiert (3), Transition Hook Lernnotiz (6), Link-Styling Lernnotiz (7), Container-Breiten Vertrieb-Seite (10), Farblogik Sequenz-Karten (1).*
*Nächste Aktualisierung: Bei neuen Design-Entscheidungen in Folge-Sprints.*
