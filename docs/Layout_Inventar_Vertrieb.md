# Layout-Inventar — Vertrieb-Seite

**Zweck:** Diese Datei dokumentiert die Container-Logik jedes Abschnitts der Vertrieb-Seite.
Sie ist die verbindliche Quelle für Layout-Entscheidungen beim Bau neuer Abschnitte
und beim Refactoring bestehender Abschnitte.

**Pflege:** Bei jeder Layout-Änderung an einem Abschnitt MUSS dieses Inventar
mitaktualisiert werden — analog zur content-Sync-Pflicht.

**Letzte Aktualisierung:** 12. Mai 2026 (Sprint 12.1-fix — Sequenz-Karten Pattern)  
**Code-Stand:** siehe Commit Sprint 12.1-fix (Sequenz-Karten Orange-Offset + große Nummer)

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
- **Hauptkomponenten:** H2, drei Sequenz-Karten (`article`, einspaltig, `border-l-4 border-l-denver-blue`, `shadow-[2px_2px_0px_0px_#FF9B01]`, Innenlayout `flex items-start gap-4 md:gap-6`: linke Spalte große Nummer `text-5xl md:text-6xl font-bold text-denver-blue leading-none shrink-0 min-w-[3rem] md:min-w-[4rem]`, rechte Spalte `flex-1` mit `h3` Titel `text-lg font-bold mb-2` und Body `text-base text-brand-text leading-relaxed`)
- **Besonderheiten:** einziger gebauter Abschnitt mit **Inner `max-w-4xl`** für die Karten-Spalte — H2 und Divider liegen im breiteren `max-w-6xl`-Rahmen; Sequenz-Karten-Pattern verbindlich gleich mit `/styleguide` und Design-System Abschnitt 3.7

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

## Abschnitt 6 — Der Weg zur Zusammenarbeit

- **Outer Container:** `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`
- **Inner Container:** keiner
- **Section-Spacing:** `pt-6 md:pt-8 pb-12 md:pb-16`
- **Section-Background:** `bg-[#F5F5F5]`
- **Section-Divider:** ja (60×2px orange, zentriert)
- **Hauptkomponenten:** H2, `ProcessSteps` (3 Schritte), Hinweis-Absatz („Auftraggeber-Dynamik“ mit `font-semibold`-Präfix), Abschluss-Absatz
- **Besonderheiten:** Erste Verwendung von `ProcessSteps` auf der Vertrieb-Seite; **max-w-5xl** wie im Design-System für Prozessschritte (`max-w-5xl` lt. Führungsseiten-Referenz für denselben Aufbau)

## Abschnitt 7 — Fallbeispiele (Aus der Praxis)

- **Outer Container:** `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`
- **Inner Container:** keiner
- **Section-Spacing:** `pt-6 md:pt-8 pb-12 md:pb-16`
- **Section-Background:** `bg-white`
- **Section-Divider:** ja (60×2px orange, zentriert, `mb-6 md:mb-8`)
- **Hauptkomponenten:** H2; Einleitungssatz zwischen H2 und Karten (Standard-Fließtext, `mb-8`); drei Praxis-Karten (`article`, einspaltig, `space-y-6`, `border-l-4 border-l-denver-blue`, `shadow-md`)
- **Besonderheiten:** Pattern wie Führung Abschnitt 6 „Aus der Praxis.“ (Kartenmarkup); Einleitungssatz ergänzt (Sprint 11.4-fix)

## Abschnitt 8 — Shopvote

- **Outer Container:** `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`
- **Inner Container:** keiner
- **Section-Spacing:** `pt-6 md:pt-8 pb-12 md:pb-16`
- **Section-Background:** `bg-[#F5F5F5]`
- **Section-Divider:** ja (60×2px orange, zentriert, `mb-6 md:mb-8`)
- **Hauptkomponenten:** `ShopvoteBadge` (rechte Spalte); linke Spalte erweitert um Marcus-Absatz („Empfehlungen sind die Grundlage …“), Kennzahl-Quote, Widget-Folgeabsatz, Link „Alle Bewertungen ansehen →“
- **Besonderheiten:** zwei-Spalten Desktop (`lg:w-[60%]` / `lg:w-[45%]`), Stack Mobile; Inhalt und Struktur der linken Spalte **1:1 identisch zur Karriere-Seite Abschnitt 8** — beide Seiten bewusst synchron (Sprint 11.4-fix). Bei künftiger Drift entweder gemeinsam mitziehen oder als Shared Component extrahieren (Backlog). `ShopvoteBadge`-Skalierung `scale-100 lg:scale-150 origin-center` in der Komponente

## Abschnitt 9 — Kontakt

- **Outer Container:** durch `ContactSection` intern (`max-w-6xl`/`max-w-5xl`-Karte)
- **Inner Container:** durch `ContactSection` intern
- **Section-Spacing:** `pt-6 md:pt-8 pb-12 md:pb-16` (innen, unterhalb der Denver-Blau-Linie)
- **Section-Background:** `bg-[#F5F5F5]` (fest in `ContactSection`)
- **Section-Divider:** kein oranger Divider; **`h-0.5 w-full bg-denver-blue`** am oberen Rand der Section (`ContactSection`)
- **Hauptkomponenten:** `<ContactSection />` ohne Props
- **Besonderheiten:** Sprint-10 — eine Komponente, ein Text, sitewide; keine seitenspezifische Headline/Subtext für Vertrieb

---

## Standard-Konvention (abgeleitet aus bisherigen Abschnitten)

- **Outer Container Subpage Standard:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Inner Container:** im Regelfall **keiner** — Inhalte liegen direkt im max-w-6xl-Bereich
- **Ausnahme Hero:** `max-w-7xl`, symmetrisches Section-Padding, `min-h-[60vh]`
- **Ausnahme Sequenz-/Karten-Spalte (Abschnitt 2):** engerer Block `mx-auto max-w-4xl space-y-6` nur für die Karten, Überschrift bleibt außen
- **Ausnahme Prozessschritte auf Vertrieb (Abschnitt 6):** Outer `max-w-5xl` (statt `max-w-6xl`) für die gesamte Section inkl. `ProcessSteps` — siehe Abschnitt 6 oben
- **Ausnahme Fallbeispiele & Shopvote auf Vertrieb (Abschnitte 7–8):** Outer `max-w-5xl` — siehe Abschnitte 7–8 oben

**Beim Bau neuer Abschnitte:** Diese Standard-Konvention verwenden,
Abweichungen nur mit expliziter Begründung und Eintrag in dieses Inventar.
