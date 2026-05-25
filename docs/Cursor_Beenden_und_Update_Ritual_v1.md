# Cursor Beenden- und Update-Ritual (Variante B) — MH3 Webseiten-Projekt

> **Status:** Verbindlich ab 19. Mai 2026. Entstanden im Tooling-Stabilisierungs-Chat als Lösung für Problem 1 (Cursor-Beenden-Prozess instabil, Kernschmerz).
> **Grundsatzentscheidung:** Variante B — Updates werden strikt gesammelt und nur bei echtem Bedarf eingespielt, niemals als Nebeneffekt von Schließen oder Reboot, nicht zeit- oder sprintgetaktet.
> **Gilt für:** Marcus, an seinem Arbeitsrechner, jede Cursor-Sitzung.
> **Version:** 1.1 — 19. Mai 2026 (v1.0 → v1.1: Auslöser für den Update-Termin von „zwischen zwei Sprints" auf reine Bedarfslogik korrigiert; Mini-Notiz bei erzwungenem Update ergänzt).

---

## Warum dieses Ritual existiert (Diagnose in Kurzform)

Cursors Update-Routine auf Windows tauscht den kompletten Programmordner aus: alte Dateien löschen, neue hinlegen. Das gelingt nur, wenn in diesem Moment kein Cursor-Prozess mehr eine Datei aus diesem Ordner offen hält. Geschieht der Austausch, während Cursor oder ein Cursor-Node-Kind noch läuft (z. B. weil beim Schließen oder Reboot ein bereitstehendes Update halb eingespielt wird), bricht er mitten drin ab: Alt ist gelöscht, neu ist nicht da, übrig bleibt nur die Uninstall-Datei und ein verwaister Node-Prozess. Reparatur war bisher nur per Deinstallation, Reboot, Ordner-Löschung und Neuinstallation möglich. Dieser Vorfall ist im Sprint mehrfach eingetreten.

Die Gegenmaßnahme ist nicht „die richtige Einstellung finden" — Cursor bietet auf Windows keinen Schalter, der den Update-Zeitpunkt sauber kontrolliert (verifiziert: „Update Access" steuert nur den Kanal Default/Nightly, nicht den Zeitpunkt). Die Gegenmaßnahme ist ein Verhaltens-Ritual, das den gefährlichen Moment baulich ausschließt.

---

## Teil 1 — Alltag: niemals updaten

Während jeder normalen Arbeitsphase gilt ausnahmslos:

1. Erscheint unten rechts das Banner **„New update available — Later | Install Now"**: immer **„Later"** klicken. Niemals „Install Now".
2. „Later" schiebt das Update nachweislich wirklich auf — Cursor bereitet im Hintergrund nichts vor (im Stabilisierungs-Chat verifiziert: nach „Later" kein Update-Hinweis mehr sichtbar).
3. Erscheint im laufenden Betrieb irgendein anderer Update-Hinweis (Banner, Symbol in der Statusleiste): ignorieren bzw. „Later". Nie im laufenden Bau auf „Install" reagieren.

**Merksatz:** Im Alltag wird Cursor nie aktualisiert. Punkt. Das Banner ist Rauschen, kein Auslöser.

---

## Teil 2 — Sauberes Beenden (jedes Mal, wenn Cursor geschlossen wird)

Dieser Ablauf gilt bei **jedem** Schließen — egal ob danach ein Reboot, eine Pause oder ein Projektwechsel kommt. Er dauert wenige Sekunden und ist die eigentliche Versicherung.

1. **Arbeit sichern.** Aktuellen Gedanken zu Ende bringen. Wenn Code-Stand offen ist: nach dem 8-Schritt-Nach-dem-Coden-Block committen (und ggf. `git push origin main` manuell). Cursor nie mit ungesichertem Stand schließen.
2. **Cursors eigenes Terminal leeren.** Im integrierten Terminal-Panel unten prüfen: Läuft dort ein `pnpm dev` oder ein anderer langlaufender Prozess? Wenn ja: im Terminal mit `Strg` + `C` stoppen, bis wieder die normale Eingabezeile (`PS C:\Projekte\...>`) steht.
3. **Port freigeben.** Im selben Terminal diese Zeile ausführen:

```
   npx kill-port 3000
```

   Das beendet einen eventuell verwaisten Dev-Server, den Cursor selbst nicht mehr sieht.
4. **Cursor schließen** über das X oben rechts (oder `Datei → Fenster schließen`).
5. **Kontrollblick Task-Manager.** `Strg` + `Umschalt` + `Esc` → Task-Manager öffnen. In der Liste nachsehen:
   - Steht dort noch ein Eintrag **„Cursor"**? → Rechtsklick → **Task beenden**.
   - Steht dort noch ein **„Node.js"**-Prozess, den du Cursor zuordnest? → Rechtsklick → **Task beenden**.
   - **Wichtige Abgrenzung:** Ein „Node.js"-Prozess von **Elgato Stream Deck** läuft dauerhaft und gehört NICHT dazu — den in Ruhe lassen. Im Zweifel: in der Detailansicht die Spalte „Befehlszeile" einblenden; was auf `Cursor` oder dein Projektverzeichnis zeigt, gehört zu Cursor; was auf `Elgato` / `StreamDeck` zeigt, bleibt unangetastet.
6. Erst wenn weder „Cursor" noch ein zugehöriger Node mehr in der Liste steht, ist Cursor sauber beendet. Jetzt ist Reboot oder Herunterfahren gefahrlos.

**Merksatz:** Erst Terminal leeren, dann Port killen, dann schließen, dann im Task-Manager kontrollieren. Nie schließen und sofort rebooten, ohne den Kontrollblick.

---

## Teil 3 — Bewusster Update-Termin (nur bei echtem Bedarf)

Updates werden gesammelt und nur dann eingespielt, wenn ein echter Grund vorliegt — **nicht** zeit- oder sprintgetaktet. Die Sprint-Granularität in diesem Projekt ist bewusst feinteilig; ein Update pro Sprint-Wechsel würde Variante B aushebeln und faktisch zum Dauer-Update führen. Das Banner allein ist niemals ein Grund.

Ein Update-Termin wird nur ausgelöst, wenn einer dieser zwei Fälle vorliegt:

- **Bedarfsfall 1 — funktional:** Es gibt eine konkrete neue Cursor-Funktion oder einen Bugfix, den du *tatsächlich brauchst* — relevant für die Arbeit, nicht „nett zu haben".
- **Bedarfsfall 2 — erzwungen:** Cursor lässt keine Wahl mehr — eine Funktion bricht ohne Update, Login/Sync wird ohne Mindestversion abgelehnt, oder „Later" wird nicht mehr akzeptiert.

Liegt keiner dieser zwei Gründe vor, wird nicht geupdatet — egal wie viele Sprints vergangen sind, egal wie oft das Banner kam.

**Begründung zur Risikolage:** Cursor ist hier ein lokales Bau-Werkzeug an einem privaten Repo, kein exponierter Server. Das realistische Risiko eines aufgeschobenen Updates ist in diesem Kontext gering; das nachgewiesene Risiko eines zerschossenen Update-Vorgangs mitten im Bau ist real und mehrfach eingetreten. Die Abwägung trägt klar die Linie: lieber alt und stabil als aktuell und zerschossen.

Ablauf des Update-Termins (wenn ein Bedarfsfall vorliegt):

1. **Voraussetzung:** Kein offener Code-Stand. Alles committet und gepusht. Kein laufender Sprint-Auftrag.
2. **Sauberes Beenden nach Teil 2 vollständig durchführen** — inklusive Task-Manager-Kontrollblick. Cursor und alle Cursor-Node-Prozesse müssen restlos beendet sein. Das ist der Kern: Das Update darf nur auf einen Zustand treffen, in dem nichts mehr eine Datei im Cursor-Ordner hält.
3. **Cursor neu starten.** Es ist jetzt frisch gestartet, hält minimal Dateien.
4. **Update bewusst auslösen:** Sobald das Banner **„New update available"** erscheint, jetzt — und nur jetzt — auf **„Install Now"** klicken.
5. **Cursor das Update ungestört zu Ende führen lassen.** Während des Updates: nichts anklicken, nicht schließen, nicht rebooten, keinen zweiten Cursor starten. Warten, bis Cursor von selbst neu startet und normal hochkommt.
6. **Erfolg verifizieren:** Cursor öffnet sich normal, das Projekt ist da, das Terminal reagiert. Wenn ja: Update erfolgreich, Update-Termin abgeschlossen.
7. **Falls der Austausch erneut abbricht** (Verzeichnis nur noch mit Uninstall-Datei, Cursor startet nicht): Das ist der bekannte Crash-Pfad. Dann gilt der separate Wiederherstellungs-Weg — siehe unten. Kein Aktionismus, kein wildes Klicken.

**Mini-Notiz bei erzwungenem Update (Bedarfsfall 2):** Wenn das Update durch Bedarfsfall 2 erzwungen wurde — Cursor hat dich also faktisch gezwungen, nicht du hast aus eigenem Nutzen entschieden — beim nächsten Claude-Chat-Start eine Zeile erwähnen („Cursor hat am [Datum] ein Update erzwungen, Grund: …"). Eine Zeile, kein Aufwand. Zweck: Wenn Cursor anfängt, Updates regelmäßig zu erzwingen, ist das ein Tooling-Muster, das früh sichtbar sein muss. Ein freiwilliges Update aus Bedarfsfall 1 braucht diese Notiz nicht.

**Merksatz:** Update nur bei funktionalem oder erzwungenem Bedarf — bei leerem, frisch gestartetem Cursor — und dann ungestört durchlaufen lassen. Erzwungenes Update: eine Zeile in den nächsten Chat.

---

## Wiederherstellung, falls es doch einmal kracht

Wenn der Update-Austausch trotzdem abbricht (Programmordner nur noch mit Uninstall-Datei, „Shortcut nicht verknüpft", verwaister Node):

1. Task-Manager öffnen (`Strg` + `Umschalt` + `Esc`), jeden verbliebenen „Cursor"- und zugehörigen „Node.js"-Prozess beenden (Elgato-Node weiterhin in Ruhe lassen).
2. PC neu starten.
3. Cursor sauber neu installieren. **Wichtig:** Das Projekt NICHT neu klonen — der lokale Ordner `C:\Projekte\meine-neue-webseite-mit-js` ist der aktuelle Stand. Cursor nach der Neuinstallation einfach wieder mit diesem Ordner verbinden.
4. Nach Wiederverbindung: Settings-Verifikation durchführen (siehe separates Settings-Dokument), da eine Neuinstallation Einstellungen zurücksetzen kann.

Dieser Weg ist die Notfall-Reparatur, nicht der Normalfall. Das Ritual in Teil 1–3 existiert genau dazu, diesen Weg nie wieder zu brauchen.

---

## Verankerung

- Dieses Dokument: Projektwissen, als verbindliches Tooling-Dokument.
- Querverweis in `CLAUDE.md`, Abschnitt „Cursor-Agent-Hänger" / Build-Hygiene: ein Satz, der auf dieses Ritual und Variante B verweist.
- Rück-Übergabe an den Sprint-14-Bau-Chat: Variante-B-Entscheidung und Verweis auf dieses Dokument.

---

*Erstellt 19. Mai 2026 im Tooling-Stabilisierungs-Chat. Lösung für Problem 1. Grundsatzentscheidung Variante B (Updates strikt sammeln, nur bei Bedarf). v1.1: Bedarfslogik statt Sprint-Taktung, Mini-Notiz bei erzwungenem Update.*