```markdown
# Übergabe-Knowledge-Baustein — nach Sprint 5

**Datum:** 1. Mai 2026
**Letzter Commit:** `7a9535f` ("fix: Hover-Konvention projektweit auf Denver-Blau vereinheitlicht, CLAUDE.md aktualisiert")
**Branch:** main, gepusht zu origin/main, Worktree sauber

Dieser Baustein dokumentiert den Stand nach Sprint 5 (Führungsseite Abschnitte 6–9 + Hover-Fix). Er dient als Einstiegsgrundlage für Sprint 6.

---

## Stand auf main (Sprint 5)

```
7a9535f fix: Hover-Konvention projektweit auf Denver-Blau vereinheitlicht, CLAUDE.md aktualisiert
ab6886a fix(contact): Primär-Button Hover-Regression korrigiert, orange-hover Token entfernt
09f1807 fix(contact): Hover-Farben an projektweite Konvention angepasst
149626c feat(fuehrung): Abschnitt 9 – ContactSection mit Führungs-Texten (Sprint 5, R5)
0418140 feat(fuehrung): Abschnitt 8 – Shopvote AllVotes-Badge mit ShopvoteBadge-Komponente (Sprint 5)
0d083aa feat(fuehrung): Abschnitt 7 – Bootcamp/Community als Zwei-Karten-Layout (Sprint 5)
f23702b refactor(fuehrung): OfferCard-Komponente extrahiert, Schatten an SituationCard angeglichen (Sprint 5)
465c01e feat(fuehrung): Abschnitt 7 – Bootcamp und Community-Teaser (Sprint 5)
ff84dee feat(fuehrung): Abschnitt 6 – Kurzfallbeispiele als Akkordeon (Sprint 5)
```

---

## Erledigt in Sprint 5

| Commit | Inhalt |
|---|---|
| `ff84dee` | Abschnitt 6 „Aus der Praxis." — Drei Kurzfallbeispiele als Akkordeon (FuehrungAccordion-Komponente), Plus/Minus in Orange, Trigger auf #E5E5E5 |
| `465c01e` + `0d083aa` + `f23702b` | Abschnitt 7 „Bootcamp und Community-Teaser" — Erst Fließtext, dann Umbau auf Zwei-Karten-Layout mit OfferCard-Komponente. Denver-Blau Akzentlinie oben (4px), shadow-md, rounded-lg |
| `0418140` | Abschnitt 8 „Shopvote" — ShopvoteBadge-Komponente (AllVotes-Grafik II, wiederverwendbar), zweispaltiges Layout (Text links, Badge rechts). Embed-Code dokumentiert in `docs/shopvote-embed-code.md` |
| `149626c` | Abschnitt 9 „ContactSection" — Bestehende Komponente mit Führungs-Texten eingebunden. Props `headline`, `subtext`, `outerClassName`, `withR5Divider` ergänzt. R5 Trennlinie umgesetzt |
| `09f1807` + `ab6886a` + `7a9535f` | Hover-Konvention: Drei Iterationen bis zur finalen Lösung. Alle Buttons projektweit auf `hover:bg-denver-blue hover:text-white hover:border-denver-blue`. In CLAUDE.md festgeschrieben. Fehlerhafter `orange-hover`-Token entfernt |

---

## Neue Komponenten aus Sprint 5

| Komponente | Pfad | Verwendung |
|---|---|---|
| OfferCard | `src/components/OfferCard.tsx` | Angebots-Karten (Bootcamp, Community). Denver-Blau Akzentlinie oben, wiederverwendbar für Shop-Elemente auf anderen Seiten |
| ShopvoteBadge | `src/components/ShopvoteBadge.tsx` | Shopvote AllVotes-Grafik II (Shop-ID 21607, Badge-Type 4). Client-Komponente mit next/script lazyOnload. Auf jeder Subpage einsetzbar |

---

## Verbindliche Designentscheidungen aus Sprint 5

- **Hover-Konvention (aktualisiert, ersetzt Sprint-1-Konvention):** Alle Buttons → `hover:bg-denver-blue hover:text-white hover:border-denver-blue`. Keine Ausnahmen. Inline-Links → `hover:text-denver-blue`. Logo → kein Hover. Festgeschrieben in CLAUDE.md.
- **OfferCard-Pattern:** Weiß, Border brand-gray-mid-light, shadow-md, rounded-lg, 4px Denver-Blau Akzentlinie oben. Für Angebote/Shop-Elemente (nicht für Situationsbeschreibungen — die haben orange Leiste links).
- **Shopvote-Format:** AllVotes-Grafik II (statisch, zeigt Gesamtbewertung über alle Zeiträume). Kein Slider-Widget.
- **Shopvote NICHT im Footer** (Entscheidung bestätigt, R4 bleibt offen für Footer-Bereinigung)
- **Hintergrund-Alternierung Abschnitte 6–9:** Abschnitt 6 bg-brand-gray-light → 7 weiß → 8 bg-brand-gray-light → 9 weiß

---

## Offene Themen (nicht in Sprint 5 erledigt)

- **Shopvote Zeitraum-Problem:** Badge zeigt nur 8 Bewertungen (letzter Zeitraum), nicht alle 69. Klärung in Shopvote-Konto nötig — kein Code-Thema
- **Shopvote Startseite:** Noch nicht auf AllVotes-Badge umgestellt (eigener Mini-Prompt)
- **Akkordeon Hex-Werte:** R9 (#E5E5E5/#D8D8D8) noch nicht als Token in tailwind.config.ts — funktioniert als Arbitrary Value, Tokenisierung in Sprint 6
- **Link-Styling:** CTA-Links in OfferCard und Abschnitten noch ohne fett + Pfeil (Sprint 6)

---

## Lessons Learned aus Sprint 5

- **Hover-Konvention muss in CLAUDE.md stehen, nicht nur in Chat-History.** Cursor liest nur Repo-Dateien. Alles, was nicht in CLAUDE.md oder einer referenzierten Datei steht, existiert für Cursor nicht. Drei Iterationen und Frustration hätten vermieden werden können.
- **Designentscheidungen sofort in CLAUDE.md festschreiben** — nicht „später beim Übergabe-Baustein". Das ist die einzige Datei, die Cursor zuverlässig liest.
- **OfferCard von Anfang an als Komponente planen**, nicht erst als Fließtext bauen und dann umbauen. Zwei Commits statt einem.

---

## Nächste Schritte

### Sprint 6 — Design-Gesamtbild Führungsseite
- Container-Breiten aller Abschnitte auf Hero-Breite prüfen
- Schritt-Kreise: Outline vs. gefüllt vs. Denver-Blau-Akzent
- Foto-Platzhalter in Abschnitt 3 (2-Spalten-Layout)
- Quote/Akzent in Abschnitt 3
- Link-Styling Subpages konsistent machen (fett + Pfeil wie Startseite)
- Abschnitt 4 Themen: zweispaltig testen
- Akkordeon-Token R9

### Separat
- Footer-Überarbeitung (R3 Denver-Blau, R4 Shopvote raus)
- Statement Cards Startseite
- Shopvote Startseite auf AllVotes-Badge umstellen
- Nächste Subpage (Karriere oder Vertrieb)
```