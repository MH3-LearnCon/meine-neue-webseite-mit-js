---
name: visual-check
description: Mechanischer Post-Block-Check für Build-Status, Layout-Drift, Token-Drift, Brand-Voice-Drift und content/-Sync. Use nach JEDEM Cursor-Block.
---

# Visual & Mechanical Check — MH3 LearnCon® GmbH

Prüfe die soeben umgesetzten Änderungen nach 13 Punkten. Pro Check: ✅ OK / ❌ FAIL / ⚠️ WARN. Bei FAIL: selbstständig korrigieren, dann Re-Run. Bei WARN: melden, nicht korrigieren.

Der Block gilt nur als ABGESCHLOSSEN, wenn alle Checks ✅ oder ⚠️ sind — keine ❌.

---

## 1. Build-Status
- `pnpm build` muss fehlerfrei durchlaufen
- Warnings auf kaputte Imports oder fehlende Dateien melden
- Bei Build-Fehler: STOPP, melde den Fehler, kein weiterer Check läuft

## 2. Container-Breiten + Layout-Inventar-Cross-Check
- Liste jede geänderte Section mit ihrem tatsächlichen `max-w-*`-Wert auf
- Vergleiche mit `docs/Layout_Inventar_[Seite].md` der jeweiligen Seite
- Sektionen mit Karten/Spalten dürfen nicht auf `max-w-prose` oder `max-w-3xl` stehen
- Wenn keine Layout-Inventar-Datei existiert: WARN

## 3. Asymmetrisches Spacing
- Jede Content-Section (nicht Hero, nicht ContactSection) muss `pt-6 md:pt-8 pb-12 md:pb-16` enthalten
- Bei Abweichung: FAIL mit Datei/Zeile

## 4. Hover-Konvention
- Jeder Button muss eine der zwei dokumentierten Hover-Varianten haben:
  - Standard: `hover:bg-denver-blue hover:text-white hover:border-denver-blue`
  - OfferCard (klickbare Karte): `hover:bg-[#F5F5F5]`
- Verboten: `hover:bg-anthracite`, `hover:bg-orange`, `hover:bg-gray-*`
- Bei Treffer: FAIL

## 5. Underline-Verbot
- Grep auf `underline`, `decoration-`, `underline-offset-`, `hover:underline`, `group-hover:underline`
- Bei Treffer: FAIL — Hover-Signal ist ausschließlich Farbwechsel zu Denver-Blau

## 6. Farbwert-Whitelist
Erlaubte Hex-Werte:
- #002244 (Denver-Blau)
- #FF9B01 (Orange)
- #222222 (Anthrazit)
- #F5F5F5 (Hellgrau)
- #D9D9D9 (Mittelgrau hell)
- #9D9D9D (Mittelgrau)
- #828282 (Dunkelgrau)
- #FFFFFF (Weiß)
- #E5E5E5 (Akkordeon-Trigger, Foto-Platzhalter)

Prüfe in geänderten Dateien:
- `bg-[#...]`, `text-[#...]`, `border-[#...]`, `shadow-[...#...]` mit Hex-Werten außerhalb der Liste → FAIL
- `bg-brand-orange`, `text-brand-orange`, `border-brand-orange` (Geister-Token, existieren nicht) → FAIL
- Tailwind-Standard-Grautöne (`gray-100`, `gray-200`, `gray-300` etc. als Ersatz) → FAIL

## 7. Anführungszeichen
- Grep in JSX-Text-Children (zwischen `>` und `<`) auf englische `"…"` Pattern
- Erlaubt nur in HTML-Attributen (`className=""`, `href=""`, `alt=""` etc.) und in JSON-LD-Strings
- Bei Treffer in sichtbarem Anzeigetext: FAIL
- Korrekt: deutsche Anführungszeichen „…" oder Unicode-Escape

## 8. Trademark-Disziplin
- ® in `<title>`-Tags oder Schema.org `name:`-Feldern → FAIL
- Wenn die Seite „MH3 LearnCon" oder „MH3-EAZEE" im Fließtext enthält: mindestens ein `®` muss vorhanden sein (bei erster Nennung pro Seite)
- Bei Fehlen → FAIL

## 9. Italic-Verbot
- Grep auf `italic`, `font-italic`, `<em>`, `<i>` (außer in Kommentaren)
- Bei Treffer: FAIL — projektweite Regel, keine Ausnahmen

## 10. Firmenname-Konsistenz
- Grep auf Varianten: „MH3 LEARNCON", „MH3-LearnCon", „MH3Learncon", „MH3 Learncon"
- Bei Treffer: FAIL — korrekt ist „MH3 LearnCon" oder „MH3 LearnCon GmbH"

## 11. Entfernte Elemente
- Wurde etwas in der vorherigen Version vorhanden, das im Prompt NICHT zum Entfernen genannt wurde, jetzt aber fehlt?
- Bei ja: FAIL — Element wiederherstellen oder an Marcus melden, NICHT auto-fixen

## 12. Cross-Section-Konsistenz
- Sections in geänderten Dateien von oben nach unten durchgehen
- Container-Breiten konsistent? Keine Sprünge zwischen benachbarten Sektionen?
- Bei sichtbarem Bruch: FAIL

## 13. content/-Sync
- Bei `page.tsx`-Änderungen prüfen, ob die zugehörige `content/X.md` ebenfalls modifiziert wurde
- Mapping:
  - `src/app/page.tsx` → `content/Startseite_Texte_MH3_v1_1.md`
  - `src/app/fuehrung/page.tsx` → `content/Fuehrung_Texte_MH3_v1_1.md`
  - `src/app/karriere/page.tsx` → `content/Karriere_Texte_MH3_v1.md`
  - `src/app/vertrieb/page.tsx` → `content/Vertrieb_Texte_MH3_v1.md`
  - `src/app/simulation/page.tsx` → `content/Simulation_Texte_MH3_v1.md`
  - `src/app/ueber-mich/page.tsx` → `content/Ueber_mich_Texte_MH3_v1.md`
  - `src/app/community/page.tsx` → `content/Community_Texte_MH3_v1.md`
- Wenn `page.tsx` Textänderungen hat (Strings in JSX-Children) und `content/X.md` nicht modifiziert: WARN
- Bei reinen Layout-/Code-Refactorings ohne Textänderung: kein Sync nötig, kein WARN

---

## Ausgabe pro Block

Pro Check:
- ✅ OK, mit kurzer Begründung
- ❌ FAIL, mit Datei/Zeile und Fix-Vorschlag
- ⚠️ WARN, mit Datei/Zeile und Hinweis (kein Auto-Fix)

Am Ende:
- **Block ist ABGESCHLOSSEN** — nur wenn alle Checks ✅ oder ⚠️ sind
- **Block ist NICHT ABGESCHLOSSEN** — wenn mindestens ein ❌

Bei NICHT ABGESCHLOSSEN: Behebe die FAIL-Punkte selbstständig (außer bei Punkt 11 „Entfernte Elemente" — dort melden und auf Marcus warten), laufe den Check erneut, bevor du dem Nutzer meldest, dass der Block fertig ist.
