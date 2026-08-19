---
rolle: erzeugte-bestandsliste
titel: "Komponenten-Bestand (erzeugt, nicht von Hand gepflegt)"
erzeugt_am: 2026-08-19
quelle: "scripts/komponenten-inventar.mjs, gelesen aus src/"
status: aktuell
---

# Komponenten-Bestand

> **Diese Datei wird erzeugt.** Nicht von Hand ergaenzen — ausser in der Spalte
> „Wofuer", die beim naechsten Lauf erhalten bleibt. Neu erzeugen mit:
> `node scripts/komponenten-inventar.mjs`
>
> **Was diese Liste NICHT ist:** kein Design-System. Wie etwas aussieht, steht im
> Styleguide unter `/styleguide`; die Gestaltungsregeln stehen in `CLAUDE.md`.
> Hier steht nur, **welche Bauteile es gibt** — damit niemand ein zweites baut.

**Stand 2026-08-19: 34 Komponenten.**

| Komponente | Ort | Verwendet in | Wofuer |
|---|---|---|---|
| `accordion` | src/components/ui/accordion.tsx | 1 Dateien | — |
| `BookRecommendationCard` | src/components/cards/BookRecommendationCard.tsx | 1 Dateien | — |
| `ConditionalFooter` | src/components/ConditionalFooter.tsx | 1 Dateien | — |
| `ConditionalHeader` | src/components/ConditionalHeader.tsx | 1 Dateien | — |
| `ContactSection` | src/components/ContactSection.tsx | 12 Dateien | — |
| `ExternalQuoteCard` | src/components/ExternalQuoteCard.tsx | 1 Dateien | — |
| `Footer` | src/components/Footer.tsx | 1 Dateien | — |
| `FuehrungAccordion` | src/components/FuehrungAccordion.tsx | 0 Dateien ⚠ | — |
| `Header` | src/components/Header.tsx | 3 Dateien | — |
| `Hero` | src/components/Hero.tsx | 13 Dateien | — |
| `HeroImagePlaceholder` | src/components/HeroImagePlaceholder.tsx | 2 Dateien | — |
| `HexagonBullet` | src/components/icons/HexagonBullet.tsx | 4 Dateien | — |
| `HexagonCluster` | src/components/HexagonCluster.tsx | 0 Dateien ⚠ | — |
| `InlineContactSection` | src/components/InlineContactSection.tsx | 2 Dateien | — |
| `LegalPage` | src/components/LegalPage.tsx | 4 Dateien | — |
| `Note` | src/components/Note.tsx | 14 Dateien | — |
| `OfferCard` | src/components/OfferCard.tsx | 6 Dateien | — |
| `ProcessSteps` | src/components/ProcessSteps.tsx | 8 Dateien | — |
| `ProgressBar` | src/components/funnel/ProgressBar.tsx | 2 Dateien | — |
| `PullQuote` | src/components/PullQuote.tsx | 0 Dateien ⚠ | — |
| `R` | src/components/R.tsx | 14 Dateien | — |
| `Reveal` | src/components/Reveal.tsx | 10 Dateien | — |
| `SaeulenAngebote` | src/components/SaeulenAngebote.tsx | 3 Dateien | — |
| `SchemaOrg` | src/components/SchemaOrg.tsx | 1 Dateien | — |
| `ScrollProgress` | src/components/ScrollProgress.tsx | 1 Dateien | — |
| `ShopvoteBadge` | src/components/ShopvoteBadge.tsx | 6 Dateien | — |
| `SingleGear` | src/components/icons/SingleGear.tsx | 9 Dateien | — |
| `SituationCard` | src/components/SituationCard.tsx | 6 Dateien | — |
| `StatementCard` | src/components/StatementCard.tsx | 5 Dateien | — |
| `ThreeGearsCropped` | src/components/icons/ThreeGearsCropped.tsx | 2 Dateien | — |
| `ThreeGearsFull` | src/components/icons/ThreeGearsFull.tsx | 1 Dateien | — |
| `ThreeGearsWithBorder` | src/components/icons/ThreeGearsWithBorder.tsx | 1 Dateien | — |
| `VortraegeListe` | src/components/VortraegeListe.tsx | 1 Dateien | — |
| `VortragModal` | src/components/VortragModal.tsx | 2 Dateien | — |

## Nicht verwendet

- `FuehrungAccordion` (src/components/FuehrungAccordion.tsx) — keine Fundstelle ausserhalb der eigenen Datei. Vor dem Loeschen gegen den committeten Baum pruefen: `git grep FuehrungAccordion HEAD`.
- `HexagonCluster` (src/components/HexagonCluster.tsx) — keine Fundstelle ausserhalb der eigenen Datei. Vor dem Loeschen gegen den committeten Baum pruefen: `git grep HexagonCluster HEAD`.
- `PullQuote` (src/components/PullQuote.tsx) — keine Fundstelle ausserhalb der eigenen Datei. Vor dem Loeschen gegen den committeten Baum pruefen: `git grep PullQuote HEAD`.

## Methode und Grenzen

Gezaehlt werden Dateien unter `src/`, die den Komponentennamen als ganzes Wort
nennen — die eigene Datei ausgenommen. Das ist eine Textsuche, keine Auswertung des
Uebersetzungsbaums: Ein Name, der in einem Kommentar steht, zaehlt mit. Bei Null
Treffern ist die Aussage belastbar, bei niedrigen Zahlen lohnt der Blick in die Datei.

**Wichtige Grenze — Verwendung ist nicht Erreichbarkeit.** Gezaehlt wird die direkte
Nennung. Eine Komponente, die nur von einer anderen **ungenutzten** Komponente verwendet
wird, erscheint hier trotzdem als „verwendet". Belegter Fall vom 19.08.2026:
`ui/accordion` wird ausschliesslich von `FuehrungAccordion` benutzt — und die wird
von niemandem benutzt. Bei genau **einer** Fundstelle also nachsehen, ob diese Fundstelle
selbst noch lebt.
