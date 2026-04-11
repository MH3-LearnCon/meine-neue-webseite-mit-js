---
name: visual-check
description: Prüft nach UI-Änderungen, ob das visuelle Ergebnis der Anweisung entspricht — nicht nur ob der Code korrekt ist. Use nach jedem Block mit Layout-, Spalten-, Farb- oder Typografie-Änderungen.
---

Prüfe die soeben umgesetzten Änderungen visuell und strukturell. Der Code kann technisch korrekt sein und trotzdem das falsche Ergebnis produzieren.

## Pflicht-Checks

### 1. Build-Status
- Läuft `pnpm build` ohne Fehler durch?
- Gibt es Warnings, die auf kaputte Imports oder fehlende Dateien hinweisen?
- **Wenn der Build fehlschlägt: STOPP. Melde den Fehler. Der Block gilt nicht als fertig.**

### 2. Container-Breiten-Realität
- Liste jede geänderte Section mit ihrem tatsächlichen `max-w-*`-Wert auf
- Prüfe: Passt die Breite zur Inhaltsstruktur?
  - Fließtext allein → `max-w-prose` ist sinnvoll
  - 2+ Spalten nebeneinander → mindestens `max-w-5xl`, eher `max-w-6xl`
  - Mix aus Bild + Text → `max-w-6xl` oder breiter
- **Wenn eine Section mit Karten/Spalten auf `max-w-prose` oder `max-w-3xl` steht: Das ist ein Fehler, melde ihn.**

### 3. Entfernte Elemente
- Wurde etwas im Prompt NICHT erwähnt, aber trotzdem entfernt? (z.B. Hero-Bild, Header, Icons)
- **Wenn ja: Das ist ein Fehler, melde ihn.**

### 4. Farbwerte gegen CLAUDE.md
- Wurden Farben geändert? Prüfe jede gegen CLAUDE.md-Regeln
- Besonders: Orange auf Weiß NUR für große Überschriften und Buttons, NIE für Fließtext
- Ersatz-Grautöne für entfernte Italic: Müssen mindestens `#222222` (Anthrazit) oder höchstens `#828282` (Dunkelgrau) sein. `#9D9D9D` oder heller ist zu schwach.

### 5. Cross-Section-Konsistenz
- Öffne mental die Seite von oben nach unten. Wirken die Inhaltsbereiche konsistent breit?
- Gibt es Sprünge, bei denen eine Section deutlich schmaler oder breiter ist als ihre Nachbarn?
- **Wenn ja: Das ist ein Fehler, melde ihn.**

## Ausgabe

Pro Check:
- ✅ OK, mit kurzer Begründung
- ❌ FEHLER, mit Zeile/Datei und Fix-Vorschlag

Am Ende:
- **Block ist ABGESCHLOSSEN** (nur wenn alle Checks ✅)
- **Block ist NICHT ABGESCHLOSSEN** (wenn mindestens ein ❌)

Bei NICHT ABGESCHLOSSEN: Behebe die Fehler selbstständig und laufe den Check erneut, bevor du dem Nutzer meldest, dass der Block fertig ist.
