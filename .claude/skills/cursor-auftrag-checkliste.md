# Cursor-Auftrag-Checkliste

> Operative Kurzfassung. Das ausführliche Begleitdokument "Prompt-Disziplin und Drift-Vermeidung" liegt im Claude-Chat-Projektwissen.
> Diese Checkliste ist verbindlich. Sie wird durchgegangen, BEVOR ein Cursor-Auftrag geschrieben wird.

## Zweck

Über die Sprints traten dieselben Drift-Klassen wiederholt auf: "Pattern wie X" ohne Klassenkette, Hero generisch behandelt, neue Farbwerte eingeschmuggelt, Prompts aus dem Gedächtnis, falscher Auftrags-Zuschnitt, unabgestimmte Annahmen. Diese Checkliste verhindert das.

## Die neun Punkte

1. **Baut der Auftrag etwas Bestehendes nach?** (Hero, Karten, Quote, ProcessSteps, ContactSection, Hinweis-Box, Button, OfferCard, SituationCard, ShopvoteBadge ...) Dann im Auftrag explizit: "Öffne Datei X, notiere die vollständige Klassenkette von außen nach innen, übernimm sie 1:1." Niemals nur "Pattern wie X". Existiert eine Komponente — namentlich importieren, nicht inline nachbauen.

2. **Inline-Stil beschrieben?** Wenn der Auftrag `bg-[#...]`, `rounded-...`, `shadow-...` als freie Beschreibung enthält statt eine Komponente zu referenzieren: Stopp. Komponente referenzieren oder als bewusste Pattern-Entscheidung Marcus vorlegen.

3. **Hero-Sonderregel.** Hero hat `max-w-7xl` (Design System Abschnitt 10) — kein Drift, sondern Regel. Hero ist zweispaltig mit `HeroImagePlaceholder`. Jede seitenweite Container-Änderung muss den Hero explizit ausnehmen oder einschließen — nie implizit.

4. **Neuer Farbwert / Token?** Wenn der Wert nicht im Design System v1.2 steht, existiert er nicht. Keine Tailwind-Standardfarben (gray-100 etc.) als Ersatz. Neue Werte brauchen Marcus' Freigabe vor dem Auftrag.

5. **Quellen geöffnet, nicht aus dem Gedächtnis?** Jeder Text, jede Kennzahl, jede Struktur stammt aus einer geöffneten Datei. Kennzahlen besonders streng (Gründung 2006, 5.800+ weltweit, ~600 eigene, 6-48 pro Simulation, Tel 0171 88 202 77). Fehlt ein Pflichtdokument: stoppen und nachfragen.

6. **Entscheidung für Marcus, die nicht gefragt wurde?** (Mobile-Verhalten, Button-Typ, Textkürzung, Section-Weglassung, Layout-Varianten) Nicht annehmen, fragen — als eigene Mikroschritt-Frage. "never assume" ist verbindlich.

7. **Stimmt der Zuschnitt?** Zusammengehörige reine Reproduktionen in EINEN Auftrag. Komplexe Themen mit Layout-Entscheidungen in einen eigenen, fokussierten Auftrag — nicht als Sub-Punkt. Max. 2 echte Änderungen pro Auftrag (Wiederholung desselben Patterns zählt als eine).

8. **Bericht-Auflage für Cursor drin?** Der Auftrag fordert Cursor explizit auf, die riskante Stelle zu dokumentieren: welche Klassenkette übernommen, 1:1 oder mit Abweichung, welche id/Props gesetzt. Drift wird im Bericht sichtbar, nicht erst im Screenshot.

9. **Fester Nach-dem-Coden-Block?** pnpm dev STOPPEN → pnpm build → git add nur geänderte Dateien → git commit → (git push bleibt manuell bei Marcus) → pnpm dev STARTEN. Plus Pre-Flight am Anfang (git status, log, branch) und Self-Reporting am Ende.

## Rollentrennung

Marcus ist die letzte visuelle Prüfinstanz, nicht die erste. Diese Checkliste läuft bei Claude Chat, bevor der Auftrag Marcus erreicht. Driftet ein Auftrag trotzdem, ist es ein nachvollziehbares Versagen gegen eine schriftliche Regel — kein "nicht dran gedacht".
