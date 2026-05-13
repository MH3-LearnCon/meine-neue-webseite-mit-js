# Layout-Inventar: Simulation-Seite

**Stand:** Sprint 13.2 (Setup + Hero + Anwendungsfälle)
**Pflege-Pflicht:** Bei jeder Layout-Änderung dieses Inventar mitaktualisieren.

## Seitenstruktur (geplant — 9 Abschnitte)

1. Hero ✅ (Sprint 13.1)
2. Anwendungsfälle (5 SituationCards einspaltig) ✅ (Sprint 13.2)
3. Was macht diese Simulation anders?
4. So funktioniert es
5. Kennzahlen und Preise
6. Jährliches offenes Event
7. So kommen wir ins Gespräch (ProcessSteps, 3 Schritte)
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

## SEO-Metadata

| Element | Wert |
|---|---|
| Title-Tag | Management Simulation für Teams und Führungskräfte \| Marcus Holzheimer |
| Meta-Description | Management Simulation für 6 bis 48 Teilnehmende: Teambuilding, Assessment-Alternative, Führungskräfteentwicklung — mit konkretem Transfer ins Tagesgeschäft. Weltweit über 5.800 Teilnehmende, über 600 in meinen Durchführungen. Deutsch und englisch. |
| Primär-Keyword | Management Simulation |
| H1 (on-page) | Management Simulation für Teams und Führungskräfte |
