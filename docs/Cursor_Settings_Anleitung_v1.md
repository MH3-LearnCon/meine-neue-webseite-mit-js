# Cursor-Settings-Anleitung — Sichere Parallel-Arbeit

**Zweck:** Cursor-Aufträge sollen sicher und weitgehend selbständig durchlaufen, damit Marcus während der Ausführung andere Tätigkeiten erledigen kann. Risiko-relevante Befehle bleiben manuell.
**Erstellt:** 13. Mai 2026, vor Sprint 13.1
**Modell-Kontext:** Cursor Composer 2 Fast (oder Opus 4.6 High)

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

## 4. Angepasstes Nach-dem-Coden-Pattern (Sprint 9-Format, erweitert)

Das bestehende Pattern bleibt, wird aber um Pre-Flight-Check und Self-Reporting gerahmt. Reihenfolge in jedem Cursor-Auftrag:

```
1. Pre-Flight-Check
2. [Eigentliche Aufgabe]
3. pnpm dev STOPPEN
4. pnpm build (fehlerfrei)
5. git add <konkrete Dateien> — niemals git add -A
6. git commit mit passender Message
7. Self-Reporting
8. (KEIN automatischer git push)
9. pnpm dev STARTEN
```

Marcus führt nach Self-Reporting manuell aus:

```bash
git push origin main
```

---

## 5. Hänger-Erkennung (bleibt Marcus-Aufgabe)

Cursor-Composer kann hängen — auch mit Allowlist. Wenn länger als 5 Minuten keine Bewegung sichtbar ist:

1. **Stop** drücken
2. Im Terminal: `git status` und `git log -3 --oneline`
3. Entscheidung: Auftrag wiederholen, oder manuell fortsetzen, oder zurück zu Claude für Diagnose

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

*Erstellt vor Sprint 13.1. Falls die Konfiguration sich bewährt: in CLAUDE.md als „Cursor-Allowlist-Konvention" verankern, dieses Dokument bleibt als ausführliche Referenz im Project Knowledge.*
