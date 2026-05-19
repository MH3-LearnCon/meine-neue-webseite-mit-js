# Cursor-Settings-Anleitung — Sichere Parallel-Arbeit

**Zweck:** Cursor-Aufträge sollen sicher und weitgehend selbständig durchlaufen, damit Marcus während der Ausführung andere Tätigkeiten erledigen kann. Risiko-relevante Befehle bleiben manuell.
**Erstellt:** 13. Mai 2026, vor Sprint 13.1
**Stand:** 19. Mai 2026 — §4 auf den verbindlichen 8-Schritt-Standard angeglichen; §5 durch das vollständige Hänger-Handlungsprotokoll ersetzt; Cursor-Sichtbarkeitsgrenze für externe Dev-Server ergänzt (Tooling-Stabilisierungs-Chat).
**Modell-Kontext:** Cursor Composer 2.5 (fast) — Stand 19. Mai 2026, unter Beobachtung (siehe `Modellwechsel_Regel_v1.md`). Bis Sprint 13: Composer 2 Fast / Opus 4.6 High.

---

## 1. Allowlist konfigurieren (einmalig)

In Cursor: **Settings → Features → Agent / Composer → Command Allowlist** (Pfad kann je nach Cursor-Version leicht variieren; bei Unklarheit in der Suche „allowlist" oder „auto-run" eingeben).

### Klasse A — Auto-erlaubt (keine Bestätigung nötig)

Diese Befehle laufen ohne Rückfrage durch. Sie sind entweder Lese-Operationen oder lokal-reversibel.

```
pnpm build
pnpm dev
pnpm install
pnpm lint
npx kill-port 3000
git status
git log
git diff
git branch
git show
ls
cat
grep
find
echo
```

### Klasse B — Bestätigung mit kurzem Blick

Diese Befehle dürfen ausgeführt werden, brauchen aber Bestätigung. Sie sind reversibel, aber verändern den Repo-Zustand.

```
git add <konkrete Dateinamen>
git commit -m "..."
git restore
git stash
```

**Wichtig:** `git add -A` und `git add .` gehören NICHT auf die Allowlist — niemals. Das war die Lehre aus dem April-Crash.

### Klasse C — Niemals auf Allowlist (immer manueller Klick)

Diese Befehle bleiben immer bei Marcus. Auch wenn Cursor sie vorschlägt, jedes Mal manuell prüfen und bestätigen.

```
git push
git push --force
git reset (jegliche Form)
git clean
git checkout <anderer Branch>
git checkout <Commit-Hash>
git rebase
git merge
rm
rm -rf
mv (außerhalb /home/claude oder dem Projekt-Ordner)
Befehle mit --force oder -f
Befehle mit sudo
```

Cursor fragt regelmäßig bei PowerShell-Befehlen nach. Die folgenden Regeln beschleunigen den Workflow, ohne die Sicherheit zu verringern.

### Allowlist-fähig (reine Read- und Filter-Operationen, keine Nebenwirkungen)

- `Get-*` (z. B. `Get-ChildItem`, `Get-Content`, `Get-Item`, `Get-Process`, `Get-Location`)
- `Select-Object`
- `Where-Object`
- `Sort-Object`
- `Measure-Object`
- `Format-Object` (`Format-List`, `Format-Table`)

**Begründung:** PowerShell-Konvention legt fest, dass diese Verb-Präfixe ausschließlich Lese- oder Filter-Operationen bezeichnen. Schreibende Operationen tragen die Präfixe `Set-`, `New-`, `Remove-`, `Add-`, `Clear-`, `Move-` etc. — diese kommen NICHT auf die Allowlist.

### Nicht allowlisten — auch wenn der Einzelfall harmlos ist

- **Property-Zugriffe** wie `.Length`, `.Count`, `.Name`: kontextabhängig, das Verhalten unterscheidet sich je nach Objekt. Eine generelle Allowlist-Regel wäre zu offen.
- **Variablen-Zuweisungen** wie `$f = "..."`: Session-State-Manipulation. Im Einzelfall harmlos, als generelle Regel zu offen.
- **Zusammengesetzte Befehlsketten mit `;` oder `|`**: Cursor prüft bei einem nicht-allowlisteten Glied ohnehin die ganze Kette (Sprint-13-Lehre). Eine Allowlist-Regel für Property-Zugriffe oder Zuweisungen würde hier keinen praktischen Vorteil bringen.

Diese Fälle werden pro Einzelfall mit Run bestätigt.

### Sonderfall `Set-Location` (`cd`)

`Set-Location` ist technisch eine harmlose Operation — sie verändert nur die Working Directory der aktuellen Session, nicht das Dateisystem. Auf der Allowlist wäre der Befehl nicht gefährlich.

Er steht trotzdem bewusst NICHT auf der Allowlist. Sprint 13 hat gezeigt: `Set-Location` allein bringt bei zusammengesetzten Befehlsketten mit `;` keinen Komfort, weil Cursor bei einem nicht-allowlisteten Kettenglied für die ganze Kette nachfragt. Konsequenz: `Set-Location` bleibt off-allowlist und wird in Cursor-Aufträgen auf eine eigene Zeile gesetzt, nicht in eine Pre-Flight-Kette eingebaut.

### Wenn Cursor nach einem neuen Befehl fragt

Faustregel zur Schnelleinordnung:

1. **Verb-Präfix prüfen:** `Get-`, `Select-`, `Where-`, `Sort-`, `Measure-`, `Format-` → Allowlist-fähig.
2. **Property-Zugriff oder Zuweisung?** → Run drücken, nicht allowlisten.
3. **Befehlskette mit `;` oder `|`?** → Run drücken, Allowlist bringt hier nichts.
4. **Unsicher?** → Run drücken. Defensiver Default kostet weniger als ein versehentlich allowlisteter Schreibbefehl.

---

## 2. Pre-Flight-Check (in jedem Cursor-Auftrag)

Jeder Cursor-Auftrag in Sprint 13 und folgenden beginnt mit diesem Block. Wenn der Worktree nicht clean ist oder nicht auf `main`, bricht Cursor ab und meldet zurück — ohne irgendetwas zu verändern.

```bash
# === PRE-FLIGHT-CHECK ===
echo "=== AKTUELLER STAND ==="
git status
git log -3 --oneline
git branch --show-current

# STOPP-BEDINGUNG:
# Wenn Worktree nicht clean ODER nicht auf main:
# - KEINE weiteren Befehle ausführen
# - Bericht an Marcus: "Pre-Flight-Check gescheitert. Bitte manuell prüfen."
# - Auf manuelle Anweisung warten.
```

**Funktion:** Schützt vor dem April-Crash-Szenario, in dem auf inkonsistenter Basis gearbeitet wurde. Wenn unverfolgte Dateien da sind oder ein anderer Branch aktiv ist, wird das sichtbar, bevor Schaden entsteht.

---

## 3. Self-Reporting am Ende jedes Auftrags

Jeder Cursor-Auftrag endet mit diesem Block. Marcus sieht auf einen Blick, was passiert ist, und kann den finalen Push entspannt einleiten.

```bash
# === AUFTRAG ABGESCHLOSSEN ===
echo "=== ENDSTAND ==="
git log -5 --oneline
git status
echo ""
echo "=== BEREIT FÜR PUSH ==="
echo "Wenn alles gut aussieht: git push origin main manuell ausführen."
```

**Funktion:** Du kannst zwei Stunden weg gewesen sein — wenn Du zurückkommst, zeigt Cursor Dir die fünf letzten Commits und den Worktree-Zustand. Push bleibt manuell, kein Risiko.

---

## 4. Nach-dem-Coden-Pattern (verbindlicher 8-Schritt-Standard)

Jeder Cursor-Auftrag wird durch einen **Pre-Flight-Check** (Abschnitt 2) am Anfang und ein **Self-Reporting** (Abschnitt 3) am Ende gerahmt. Diese beiden Rahmen-Blöcke sind **nicht** Teil der Nummerierung — sie umschließen sie.

Dazwischen, nach der eigentlichen Aufgabe, läuft der verbindliche 8-Schritt-Block. Diese Reihenfolge ist die einzige gültige; sie ist deckungsgleich mit CLAUDE.md und dem Disziplin-Dokument (Abschnitt 3, Punkt 9):

```
1. pnpm dev STOPPEN (Pflicht — paralleler Dev-Server korrumpiert den .next-Cache)
2. pnpm build (muss fehlerfrei durchlaufen)
3. git add <konkrete Dateien> — niemals git add -A
4. git commit mit passender Message
5. git push origin main — bleibt MANUELL bei Marcus, NICHT im Auftrag
6. npx kill-port 3000
7. pnpm screenshots — nur wenn `screenshots: ja` im Auftrags-Header
8. pnpm dev STARTEN
```

Schritt 5 ist im Auftrag als Hinweis dokumentiert, aber nicht ausgeführt. Marcus führt nach dem Self-Reporting manuell aus:

```bash
git push origin main
```

### Cursor-Sichtbarkeitsgrenze (externe Dev-Server)

Schritt 1 („pnpm dev STOPPEN") wirkt nur für einen Dev-Server, den Cursor in seinem **eigenen** integrierten Terminal gestartet hat. Ein außerhalb von Cursor gestarteter Dev-Server (separates PowerShell-Fenster) ist für Cursor **unsichtbar** — Schritt 1 läuft dann ins Leere, und der verwaiste Server wird faktisch erst durch Schritt 6 (`npx kill-port 3000`) plus den Task-Manager-Kontrollblick aus dem Beenden-Ritual beendet. Konsequenz: Dev-Server möglichst immer in Cursors eigenem Terminal starten; `kill-port` ist die zweite Sicherung, kein Ersatz für saubere Terminal-Hygiene.

---

## 5. Hänger-Handlungsprotokoll (Cursor-Agent / Warming-up-Stillstand)

Cursor-Agents können ohne Status-Update hängen bleiben — das ist kein seltener Ausnahmefall, sondern ein bekanntes Verhaltensmuster. Der gefährliche Fall ist ein Hänger im „Warming up" **nach** getaner Bau-Arbeit, aber **vor** dem Commit: Die Arbeit liegt dann uncommittet im Worktree und ist scheinbar verloren, ist es aber nicht.

Dieses Protokoll ist die verbindliche Schritt-für-Schritt-Reaktion. Es ersetzt Raten und Warten durch eine feste Sequenz.

### Auslöser

Der Agent steht länger als 5 Minuten ohne sichtbare Aktivität still (kein neuer Output, kein Datei-Diff, „Warming up" oder Spinner ohne Fortschritt).

### Protokoll

1. **Stop drücken.** Den Agent aktiv anhalten — nicht weiter warten, nicht hoffen. Hängende Agents lösen sich nicht von selbst.
2. **Warten, bis der Agent idle ist.** Nach dem Stop kurz abwarten, bis Cursor den Agent wirklich als gestoppt anzeigt (kein laufender Spinner mehr). Erst dann ins Terminal wechseln.
3. **Lage im Terminal feststellen — read-only, nichts verändern:**

   ```
   git --no-pager status
   ```
   ```
   git --no-pager log -3 --oneline
   ```

4. **Bewerten: committet oder uncommittet?**
   - **Worktree clean, letzter Commit ist der erwartete:** Die Arbeit ist gesichert, der Hänger war folgenlos. Agent/Cursor neu starten, Auftrag ggf. ab dem nächsten offenen Schritt fortsetzen.
   - **Worktree zeigt geänderte/neue Dateien (uncommittet):** Die Bau-Arbeit ist da, nur nicht committet. Sie wird jetzt **manuell** gesichert — nicht den Agent erneut darauf ansetzen.
5. **Nur im uncommitteten Fall — manuell sichern, in dieser Reihenfolge:**

   ```
   pnpm build
   ```

   Wenn der Build fehlerfrei durchläuft, gezielt die tatsächlich geänderten Dateien committen (kein `git add -A`):

   ```
   git add <konkrete Dateinamen aus git status>
   ```
   ```
   git commit -m "<passende Message, Bezug zum unterbrochenen Auftrag>"
   ```

   `git push origin main` bleibt manuell und bewusst bei Marcus — wie immer.
6. **Erst danach** entscheiden, ob der ursprüngliche Auftrag wiederholt, fortgesetzt oder zurück an Claude Chat zur Diagnose gegeben wird. Nie einen neuen Agent-Lauf auf einen uncommitteten Worktree setzen, bevor Schritt 5 abgeschlossen ist.

### Belegter Realfall (Sprint 14)

Cursor hing in Sprint 14 im „Warming up" nach getaner Bau-Arbeit, aber vor dem Nach-dem-Coden-Block. Die Arbeit lag uncommittet im Worktree. Vorgehen exakt nach diesem Protokoll: Stop → Agent idle → `git status` → uncommittet erkannt → `pnpm build` → gezieltes `git add` der zwei Dateien → `git commit` → manueller `git push`. Kein Arbeitsverlust. Dieses Protokoll ist die Verallgemeinerung genau dieser Rettung.

### Abgrenzung zum Beenden-Ritual

Dieses Protokoll greift bei einem **Hänger während der Arbeit**. Das saubere Beenden von Cursor (Terminal leeren, `kill-port`, Task-Manager-Kontrollblick) und der Update-Umgang sind separat geregelt im Dokument `Cursor_Beenden_und_Update_Ritual` (Variante B). Nicht vermischen: Hänger = dieses Protokoll; Schließen/Update = Beenden-Ritual.

---

## 6. Was Du währenddessen tun kannst

Mit Allowlist Klasse A aktiv und Pre-Flight + Self-Reporting im Auftrag:

**Sicher parallel möglich:**
- Mails beantworten
- Anrufe entgegennehmen
- An anderem Projekt arbeiten (aber NICHT im selben Repo-Ordner — nie zwei `pnpm dev` parallel)
- Fotos für die Simulation-Seite aufnehmen

**Pause unbedingt einlegen, wenn:**
- Cursor an einem Klasse-B-Befehl steht (Commit) — kurz hinschauen, Diff prüfen, bestätigen
- Cursor an einem Klasse-C-Befehl steht (Push) — immer manuell prüfen
- Cursor länger als 5 Minuten ohne Bewegung steht — Hänger-Verdacht

---

## 7. Schrittweises Vorgehen

**Sprint 13.1 (Setup + Hero) ist Testlauf.** Wenn er sauber durchläuft:
- Übernahme der Konfiguration für alle weiteren Sections in Sprint 13
- Übernahme für spätere Sprints (Über-mich, Community, etc.)

Wenn etwas hakt:
- Allowlist verfeinern
- Pre-Flight-Check erweitern
- Im Zweifel zurück zum manuelleren Modus

---

## 8. Anti-Reflex-Regeln (Crash-Lehren bleiben gültig)

Auch mit Allowlist gelten weiter:
- Niemals `git reset` oder `git clean -fd` ohne vorherigen `git status` und `git log`
- Maximale 2 Änderungen pro Cursor-Auftrag
- Nach jedem erfolgreichen Block committen
- Layout-Änderungen und UI-Kosmetik strikt trennen
- Unverfolgte Dateien nicht reflexartig löschen — können wertvolle Pre-Crash-Artefakte sein

---

*Erstellt vor Sprint 13.1. Aktualisiert 19. Mai 2026 im Tooling-Stabilisierungs-Chat: §4 auf den verbindlichen 8-Schritt-Standard angeglichen, Cursor-Sichtbarkeitsgrenze für externe Dev-Server ergänzt, §5 durch das vollständige Hänger-Handlungsprotokoll ersetzt, Modell-Kontext auf Composer 2.5 (fast, unter Beobachtung) gehoben. Dieses Dokument bleibt als ausführliche Referenz im Project Knowledge; Schließen/Update ist separat im Dokument `Cursor_Beenden_und_Update_Ritual` geregelt.*
