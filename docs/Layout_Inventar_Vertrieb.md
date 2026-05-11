# Layout-Inventar — Vertrieb-Seite

**Zweck:** Diese Datei dokumentiert die Container-Logik jedes Abschnitts der Vertrieb-Seite.
Sie ist die verbindliche Quelle für Layout-Entscheidungen beim Bau neuer Abschnitte
und beim Refactoring bestehender Abschnitte.

**Pflege:** Bei jeder Layout-Änderung an einem Abschnitt MUSS dieses Inventar
mitaktualisiert werden — analog zur content-Sync-Pflicht.

**Letzte Aktualisierung:** 11. Mai 2026  
**Code-Stand:** Commit fb611d4 (Container-Breite Abschnitt 5 an Abschnitt 3 angeglichen)

---

## Abschnitt 1 — Hero

- **Outer Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Inner Container:** `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`
- **Section-Spacing:** `py-12 md:py-16` (symmetrisch, Hero-Regel)
- **Section-Background:** `bg-white`
- **Section-Divider:** nein
- **Hauptkomponenten:** H1, emotionaler Satz (orange), Body, `HeroImagePlaceholder`
- **Besonderheiten:** `min-h-[60vh]` auf der Section; Container-Breite **max-w-7xl** (nicht max-w-6xl); linke Spalte mit `max-w-lg` auf dem ersten Body-Absatz

## Abschnitt 2 — Umleitung

- **Outer Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Inner Container:** `mx-auto max-w-4xl space-y-6` (umschließt ausschließlich die drei Sequenz-Karten)
- **Section-Spacing:** `pt-6 md:pt-8 pb-12 md:pb-16`
- **Section-Background:** `bg-[#F5F5F5]`
- **Section-Divider:** ja (60×2px orange, zentriert)
- **Hauptkomponenten:** H2, drei Sequenz-Karten (`article`, nummeriert, einspaltig, `border-l-4 border-l-denver-blue`)
- **Besonderheiten:** einziger gebauter Abschnitt mit **Inner `max-w-4xl`** für die Karten-Spalte — H2 und Divider liegen im breiteren `max-w-6xl`-Rahmen

## Abschnitt 3 — Branchenkompetenz

- **Outer Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Inner Container:** keiner (gesamter Inhalt direkt im Outer)
- **Section-Spacing:** `pt-6 md:pt-8 pb-12 md:pb-16`
- **Section-Background:** `bg-white`
- **Section-Divider:** ja (60×2px orange, zentriert)
- **Hauptkomponenten:** H2, `div.space-y-6` mit drei Fließtextabsätzen, `blockquote` (Denver-Blau-Stil), abschließender Fließtext (BMC / St. Galler)
- **Besonderheiten:** Quote steht **zwischen** dem ersten `space-y-6`-Block (drei Absätze) und dem Schlussabsatz — kein eigener Breiten-Wrapper; gleiche äußere Zeile wie Fließtext

## Abschnitt 4 — Themen

- **Outer Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Inner Container:** keiner
- **Section-Spacing:** `pt-6 md:pt-8 pb-12 md:pb-16`
- **Section-Background:** `bg-[#F5F5F5]`
- **Section-Divider:** ja (60×2px orange, zentriert)
- **Hauptkomponenten:** H2, Einleitungstext, `HexagonBullet`-Themen-Grid (`ul`/`li`), Abschlussabsatz, Link zu `/fuehrung`
- **Besonderheiten:** —

## Abschnitt 5 — Methodik

- **Outer Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Inner Container:** keiner
- **Section-Spacing:** `pt-6 md:pt-8 pb-12 md:pb-16`
- **Section-Background:** weiß (kein bg-Class)
- **Section-Divider:** ja (60×2px orange, zentriert)
- **Hauptkomponenten:** H2, `div.space-y-6` mit Einleitungstext, `blockquote` (Denver-Blau), zwei Fließtextabsätze
- **Besonderheiten:** an Abschnitt 3 hinsichtlich **Outer** angeglichen (Commit fb611d4); **inhaltlich** weicht die Quote-Platzierung von Abschnitt 3 ab: Quote liegt **innerhalb** eines gemeinsamen `space-y-6`-Stacks zusammen mit allen Textabsätzen

---

## Standard-Konvention (abgeleitet aus bisherigen Abschnitten)

- **Outer Container Subpage Standard:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Inner Container:** im Regelfall **keiner** — Inhalte liegen direkt im max-w-6xl-Bereich
- **Ausnahme Hero:** `max-w-7xl`, symmetrisches Section-Padding, `min-h-[60vh]`
- **Ausnahme Sequenz-/Karten-Spalte (Abschnitt 2):** engerer Block `mx-auto max-w-4xl space-y-6` nur für die Karten, Überschrift bleibt außen

**Beim Bau neuer Abschnitte:** Diese Standard-Konvention verwenden,
Abweichungen nur mit expliziter Begründung und Eintrag in dieses Inventar.
