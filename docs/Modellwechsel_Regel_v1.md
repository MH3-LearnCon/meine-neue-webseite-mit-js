# Modellwechsel-Regel (Cursor-Bau-Modell) — MH3 Webseiten-Projekt

> **Status:** Verbindlich ab 19. Mai 2026. Entstanden im Tooling-Stabilisierungs-Chat als Lösung für Problem 2 (Composer 2.5 wurde still aktiviert).

## Regel

1. **Kein Modellwechsel innerhalb einer laufenden Sprint-Phase.** Das Cursor-Bau-Modell wird nur an einer Sprint-Grenze gewechselt, nie mitten in einer Bau-Abfolge.
2. **Stille Wechsel werden nicht hingenommen.** Wenn Cursor das Modell selbsttätig umstellt (Auto-Update, Default-Änderung), ist das kein vollzogener Zustand, sondern ein zu prüfender Vorfall. Er wird beim nächsten Chat-Start gemeldet und bewusst entschieden — nicht stillschweigend übernommen.
3. **Neues Modell = Beobachtungs-Lauf vor produktiver Nutzung.** Ein neu aktiviertes Modell wird im ersten realen Auftrag nach dem Wechsel explizit gegengeprüft: Drift ja/nein, Agent-Hänger ja/nein, Anweisungstreue besser/schlechter als zuvor. Das Ergebnis entscheidet über den Verbleib — nicht der Hersteller-Claim.

## Aktueller Stand (19. Mai 2026)

- Eingestelltes Modell: **Composer 2.5 (fast)**.
- Entscheidung: behalten, **nicht** zurückrollen (ein Rückwechsel wäre selbst eine Änderung mitten im Sprint).
- Offene Verifikation: Der **nächste Sprint-14-Auftrag** ist der Beobachtungs-Lauf. Bis dessen Ergebnis vorliegt, gilt 2.5 als „aktiv, aber unter Beobachtung", nicht als bestätigt.
- Kontext für die Beobachtung: Dieser Sprint hatte wiederkehrende Auftrags-Drift (sechs dokumentierte Muster im Disziplin-Dokument) und einen Agent-Hänger im „Warming up". Der Hersteller-Claim zu 2.5 lautet „more reliable at following complex instructions" — genau das ist im Beobachtungs-Lauf zu prüfen, nicht zu glauben.
- Doppeltes Nutzungs-Kontingent von Cursor bis 25. Mai 2026 (zeitlich begrenzter Nebeneffekt, nicht entscheidungsleitend).

## Verankerungsorte

- `CLAUDE.md` — Kurzregel plus aktueller Modell-Stand (Abschnitt Build-Hygiene).
- `Chat_Eroeffnung_Template.md` — im WERKZEUG-PLAN: aktuelles Bau-Modell + „unter Beobachtung"-Status, damit jeder neue Bau-Chat den Stand kennt statt ihn aus dem Gedächtnis anzunehmen.
- Rück-Übergabe an den Sprint-14-Bau-Chat.

---

*Erstellt 19. Mai 2026 im Tooling-Stabilisierungs-Chat. Lösung für Problem 2.*
