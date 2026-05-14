# Layout-Inventar: Simulation-Seite

**Stand:** Sprint 13.7
**Pflege-Pflicht:** Bei jeder Layout-Änderung dieses Inventar mitaktualisieren.

## Seitenstruktur (geplant — 9 Abschnitte)

1. Hero ✅ (Sprint 13.1)
2. Anwendungsfälle (5 SituationCards einspaltig) ✅ (Sprint 13.2)
3. Was macht diese Simulation anders? ✅ (Sprint 13.3)
4. So funktioniert es ✅ (Sprint 13.4)
5. Kennzahlen und Preise ✅ (Sprint 13.5)
6. Das offene Kennenlern-Event ✅ (Sprint 13.6, 13.6-fix Format)
7. So kommen wir ins Gespräch (ProcessSteps, 3 Schritte) ✅ (Sprint 13.7)
8. Shopvote-Block
9. ContactSection

## Abschnitt 1 — Hero

| Eigenschaft | Wert |
|---|---|
| Container | max-w-7xl |
| Padding | py-12 md:py-16 (symmetrisch, Hero-Pattern) |
| Mindesthöhe | min-h-[60vh] |
| Hintergrund | weiß (`bg-white`, wie Vertrieb-Hero) |
| Layout Desktop | zweispaltiges Grid (Text links, Foto-Platzhalter rechts) |
| Layout Mobile | einspaltig (Text oben, Foto unten) |
| H1 | "Management Simulation für Teams und Führungskräfte" |
| Emotionaler Satz | "Wenn Sie sehen wollen, wie Ihr Team und Sie wirklich funktionieren." (text-orange) |
| Fließtext | Vier Sätze, Marcus-Stimme, "professioneller Simulant" als Neugier-Anker, schließt mit Rahmen-Daten (6–48 TN, halb/mehrtägig, dt/engl) |
| Foto-Platzhalter | HeroImagePlaceholder-Komponente (analog Vertrieb) |

## Abschnitt 2 — Anwendungsfälle (5 SituationCards einspaltig)

| Eigenschaft | Wert |
|---|---|
| Komponente | SituationCard (aus @/components/SituationCard) |
| Container | max-w-6xl |
| Section-Hintergrund | bg-[#F5F5F5] |
| Section-Spacing | pt-6 md:pt-8 pb-12 md:pb-16 |
| Section-Divider | 60×2px orange, zentriert, oben |
| H2 | "Fünf Situationen, in denen die Management Simulation den Unterschied macht." |
| Karten-Layout | einspaltig, `gap-10 md:gap-12` zwischen Karten (Abstand analog Führungs-SituationCards) |
| Karten-Inhalt | je Karte: Schmerzpunkt-Frage (Headline) + Erklärungstext |
| Akzent-Farbe | Orange-Leiste links (Leser-Perspektive) |
| Bewusste Entscheidung | KEIN Akkordeon — SEO-/KI-Lesbarkeit der fünf Persona-Andockpunkte bewusst maximiert (Sprint 13 Mikroschritt B) |

## Abschnitt 3 — Werkzeug, nicht Programm (Differenzierung)

| Eigenschaft | Wert |
|---|---|
| Container | max-w-6xl (analog Vertrieb Abschnitt 3) |
| Section-Hintergrund | bg-white |
| Section-Spacing | pt-6 md:pt-8 pb-12 md:pb-16 |
| Section-Divider | 60×2px orange, zentriert, oben |
| H2 | "Werkzeug, nicht Programm. Transfer, nicht nur Erlebnis." |
| Inhalt | vier Absätze (Differenzierungs-Argument + Chef-Service) |
| Quote | Denver-Blau (Marcus-Perspektive), zwischen Absatz 2 und 3 |
| Quote-Text | "Bei mir gehen sie mit konkreten Handlungsideen für ihren Arbeitsalltag nach Hause." |
| Quote-Format | border-l-4 border-denver-blue, ml-10 mr-8 pl-6 py-3, text-xl font-medium |
| Bewusste Entscheidung | Quote zieht Schlüssel-Satz aus Absatz 3 vor — Aussage erst, Begründung danach |
| Drift-Korrektur Sprint 13.3-fix | Container von max-w-4xl auf max-w-6xl, max-w-prose entfernt |

## Abschnitt 4 — So funktioniert es (Mechanik-Erklärung)

| Eigenschaft | Wert |
|---|---|
| Container | max-w-6xl äußerer Rahmen + `px`; Karten-Stack `mx-auto max-w-4xl` (1:1 wie Vertrieb Abschnitt 2) |
| Section-Hintergrund | bg-[#F5F5F5] (Alternierung nach Abschnitt 3 weiß) |
| Section-Spacing | pt-6 md:pt-8 pb-12 md:pb-16 |
| Section-Divider | 60×2px orange, zentriert, oben |
| H2 | "In 90 Sekunden erklärt." |
| Inhalt | vier Sequenz-Karten (Szenario, Ablauf, Rollen, Ergebnis) |
| Bewusste Entscheidung | Sequenz-Karten-Pattern (Sprint 12.1-fix) — konstitutive Reihenfolge, Marcus-Perspektive (Denver-Blau) |
| Drift-Korrektur Sprint 13.4-fix | Textwand → Sequenz-Karten für visuelle Präsenz und Reihenfolge-Logik |
| Drift-Korrektur Sprint 13.4-fix2 | Container-Klassenkette 1:1 an Vertrieb Abschnitt 2 angeglichen |

## Abschnitt 5 — Kennzahlen und Preise

| Eigenschaft | Wert |
|---|---|
| Container outer | max-w-6xl (analog Vertrieb Abschnitt 2) |
| Container inner (Stack) | max-w-4xl mx-auto |
| Section-Hintergrund | bg-white (Alternierung nach Abschnitt 4 grau) |
| Section-Spacing | pt-6 md:pt-8 pb-12 md:pb-16 |
| Section-Divider | 60×2px orange, zentriert, oben |
| H2 | "Zahlen, Rahmen und Investition." |
| Sub-Block 1 | Kennzahl-Karten in 3+2-Layout — Reihe 1: 3 Trust-Karten (`grid-cols-1 md:grid-cols-3`), Reihe 2: 2 Format-Karten (`grid-cols-1 md:grid-cols-2`, `max-w-2xl mx-auto`; Mobile: alle fünf Karten einspaltig) |
| Sub-Block 2 | Einleitungs-Absatz Preise |
| Sub-Block 3 | HTML-Preistabelle in `max-w-xl mx-auto`; Netto-Spalte `font-semibold text-denver-blue`; Header Denver-Blau Border |
| Sub-Block 4 | „Im Tagessatz enthalten:“ + Bullet (5 Punkte), `max-w-xl mx-auto`, nur `space-y-6` Abstand zur Tabelle |
| Sub-Block 5 | Hinweis-Box „Zum Vergleich:“ (Klassenkette 1:1 Karriere Steuerhinweis) |
| Abstand Ober- vs. mittler Block | Oberer Block `space-y-10`; Tabelle + Liste in `mt-10 space-y-6` |
| Kennzahl-Zahlen | `text-3xl md:text-4xl font-bold text-orange` |
| Neues Pattern | Kennzahl-Karte (Watchlist: Design System v1.2 Abschnitt 3.8 nach Sprint 13) |
| Neues Pattern | Preistabelle (Watchlist: Design System v1.2 nach Sprint 13) |
| Drift-Korrektur Sprint 13.5-fix | Kennzahl-Zahlen kleiner (text-3xl/4xl), En-Dash mit Leerzeichen, Karte 4 sprachlich neu, Preistabelle visuell aufgewertet (Denver-Blau, schmaler), „Im Tagessatz enthalten“ näher an Tabelle, Einordnungs-Absatz als Hinweis-Box (analog Karriere) |
| Pattern-Wiederverwendung | Hinweis-Box-Klassenkette 1:1 von Karriere-Seite (Steuerhinweis) übernommen |
| Drift-Korrektur Sprint 13.5-fix2 | Karte 3 Untertext gekürzt („pro Veranstaltung“); Karte 4 Zahl-Zeile mit Schrift-Hierarchie (Zahl groß/fett, „Tage“ kleiner als span für einzeiligen Umbruch) |
| Drift-Korrektur Sprint 13.5-fix3 | Kennzahl-Karten von 4 (4×1) auf 5 (3+2-Layout) — Karte 2 „in meinen Simulationen“, Karte 4 ohne span-Hierarchie, Karte 5 „DE / EN“ neu |
| Drift-Korrektur Sprint 13.5-fix4 | Reihe 2 Format-Karten auf Mobile einspaltig (`grid-cols-1 md:grid-cols-2`) — alle 5 Karten auf Mobile untereinander |

## Abschnitt 6 — Das offene Kennenlern-Event

| Eigenschaft | Wert |
|---|---|
| Container outer | max-w-6xl |
| Fliesstext-Breite | wie Abschnitt 3 (keine eingeschränkte Innen-Spalte) |
| Section-Hintergrund | bg-[#F5F5F5] |
| Section-Spacing | pt-6 md:pt-8 pb-12 md:pb-16 |
| Section-Divider | 60×2px orange, zentriert, oben |
| H2 | "Das offene Kennenlern-Event" |
| Einleitungssatz | unter H2 |
| Inhalt | 3 Absätze + Denver-Blau-Quote zwischen Absatz 1 und 2 |
| Quote | "Manche Formate muss man sehen…" — Format wie Abschnitt 3 |
| CTA | orangefarbener Text-Link „Sprechen Sie mich an →“ (`font-semibold text-orange hover:text-denver-blue`), Anker `#kontakt` |
| Bewusste Entscheidung | Reine Text-Section mit Quote — kein OfferCard/Statement-Card, kein neues Pattern; Quote wertet Section auf |
| Drift-Korrektur Sprint 13.6-fix | Karten-Zwitter aus 13.6 aufgelöst — auf Fliesstext-mit-Quote-Pattern (analog Abschnitt 3) umgestellt |

## Abschnitt 7 — So kommen wir ins Gespräch

| Eigenschaft | Wert |
|---|---|
| Container | max-w-5xl (ProcessSteps-Standard laut Design System) |
| Section-Hintergrund | bg-white (Alternierung nach Abschnitt 6 grau) |
| Section-Spacing | pt-6 md:pt-8 pb-12 md:pb-16 |
| Section-Divider | 60×2px orange, zentriert, oben |
| H2 | "So kommen wir ins Gespräch." (`text-h2` wie übrige Simulation-Abschnitte) |
| Inhalt | 3 Prozessschritte (`ProcessSteps`-Komponente) + Abschluss-Absatz |
| ProcessSteps | Denver-Blau-Kreise, Verbindungslinie, `shadow-[2px_2px_0px_0px_#FF9B01]` |
| Schritt 1 | Kennenlerngespräch |
| Schritt 2 | Konzept und Abstimmung |
| Schritt 3 | Durchführung und Transfer |
| Abschluss-Absatz | Multitool-Gedanke — `mt-10 text-base leading-relaxed text-brand-text` wie Führung Abschnitt 5 |
| Pattern-Wiederverwendung | `ProcessSteps` aus `@/components/ProcessSteps`, eingebettet wie Führung Abschnitt 5 |
| Watchlist | Schritt 3 ist textlich länger als Schritt 1+2 — falls visuell zu massiv (Desktop+Mobile prüfen), „Ich bringe alles mit“ ggf. in eigenen Schritt oder Abschluss-Absatz auslagern |

## SEO-Metadata

| Element | Wert |
|---|---|
| Title-Tag | Management Simulation für Teams und Führungskräfte \| Marcus Holzheimer |
| Meta-Description | Management Simulation für 6 bis 48 Teilnehmende: Teambuilding, Assessment-Alternative, Führungskräfteentwicklung — mit konkretem Transfer ins Tagesgeschäft. Weltweit über 5.800 Teilnehmende, über 600 in meinen Durchführungen. Deutsch und englisch. |
| Primär-Keyword | Management Simulation |
| H1 (on-page) | Management Simulation für Teams und Führungskräfte |
