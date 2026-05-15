# Übergabe vor Sprint-14-Bau — 15. Mai 2026

**Phase:** Webseitenbau MH3 LearnCon GmbH, Sprint 14 in Vorbereitung (Über-mich-Seite `/ueber-mich`, Bau noch nicht begonnen)
**Erstellt am:** 15. Mai 2026
**Status dieses Bausteins:** Vor-Bau-Übergabe. Sprint 14 hat zwei Vor-Bau-Stränge in Parallel-Chats abgeschlossen (Skill-Härtung, Playwright-Setup). Der eigentliche Bau der Seite startet im Folge-Chat.
**Letzter Commit:** `6a63351` (chore(screenshots): Erst-Generation aller Live-Seiten als Sprint-14-Baseline)
**Branch:** main, synchron mit origin/main, Worktree sauber
**Modell-Setup während der Vor-Bau-Phase:** Claude Opus 4.7 (Chat), Cursor Composer 2 Fast (Code)

---

## 1. Warum dieser Baustein zwischen Sprint 13 und Sprint-14-Bau steht

Sprint 13 endete mit der vollständigen Simulation-Seite und einem strukturellen Befund: wiederkehrende Drift in Cursor-Aufträgen über mehrere Sprints. Daraus entstand das Disziplin-Dokument als verbindliche Pre-Flight-Checkliste.

Sprint 14 begann mit dem Sparring zur Über-mich-Seite — gleichzeitig wurden parallel zwei Infrastruktur-Stränge ausgelagert, die quer zum Sprint-Thema liegen:

1. **Skill-Triage und -Härtung** (Parallel-Chat 1) — fünf neue KI-Club-Skill-Dateien bewertet, daraus eine Übernahme (`recheck.md`), `visual-check.md` gehärtet, Pre-Flight-Checkliste erweitert.
2. **Playwright-Setup** (Parallel-Chat 2) — automatisierte Full-Page-Screenshots aller Live-Seiten in zwei Viewports, Baseline committet.

Beide Stränge haben den Nach-dem-Coden-Block, die Pflichtlektüre und die Auftrags-Header verändert. Der Sprint-14-Bau-Chat startet auf diesem neuen Stand, nicht auf dem Sprint-13-Stand. Dieser Baustein bündelt die Änderungen für den Übergang.

---

## 2. Stand der Webseite (welche Seiten live, welche offen)

| Seite | Status |
|---|---|
| Startseite (`/`) | live |
| Führung (`/fuehrung`) | live |
| Karriere (`/karriere`) | live |
| Vertrieb (`/vertrieb`) | live |
| Styleguide (`/styleguide`) | live, NICHT in Navigation, NICHT indexiert |
| Simulation (`/simulation`) | live |
| **Über mich (`/ueber-mich`)** | **NEXT — Bau startet im Folge-Chat** |
| MH3-EAZEE Community (`/community`) | offen |
| (kein) Coaching (`/kein-coaching`) | offen |
| Empfehlungen (`/empfehlungen`) | offen |

---

## 3. Über-mich-Seite — bereits getroffene Entscheidungen vor dem Bau

Im Sprint-14-Sparring-Chat wurden vier Vorentscheidungen getroffen, bevor der Chat aus Token-Effizienz-Gründen abgeschlossen wurde:

- **11 Abschnitte als Baseline** — Reihenfolge wie in `Ueber_mich_Texte_MH3_v1.md` und Webseiten-Konzept 4.6 dokumentiert. Hero → Drei-Perspektiven → Bewusst allein → (kein) Coaching → Werdegang → Engagement → Du-Übergang → Persönliches → Düsseldorf → Buchempfehlungen → ContactSection.
- **Werdegang erstmal klassisch als Fließtext** — die Akkordeon-Frage (Watchlist-Punkt aus Sprint 13) wird zurückgestellt. Begründung Marcus: Akkordeons sind für SEO und KI-Crawler ungünstig (analog zur Sprint-13-Entscheidung gegen Akkordeons auf der Simulation-Seite). Erst Fließtext bauen, sichtbare Wirkung prüfen, dann auf Basis der Design-Elemente im Bestand entscheiden, ob ein Akkordeon doch sinnvoll ist.
- **Video geparkt** — die Über-mich-Seite soll laut Sprint-13-Übergabe ein Video bekommen. Marcus hat aktuell kein Video und keine konkrete Inhaltsidee. Das Thema wandert in einen eigenen Sidestep-Chat, sobald Material existiert.
- **Du/Sie-Übergang als Detailfrage für später** — die Darstellung des Sie/Du-Wechsels (Abschnitt 7) ist gestalterisch wichtig, aber kein Show-Stopper für den Sectionsbau. Wird im Bau-Chat behandelt, sobald Abschnitt 7 ansteht.

---

## 4. Geänderte operative Regeln seit Sprint 13 (zwingend für den Bau-Chat)

### 4.1 Nach-dem-Coden-Block: jetzt 8 Schritte

Bis Sprint 13 waren es 5 Schritte. Inzwischen sind zwei Schritte ergänzt worden (`kill-port` seit Sprint 10 verbindlich, jetzt erst konsistent verankert; `screenshots` als bedingter Schritt 7 neu mit dem Playwright-Setup).

**Verbindliches 8-Schritt-Format (sitewide aktualisiert — CLAUDE.md, projekt-regeln.md, cursor-auftrag-checkliste.md, Cursor_Settings_Anleitung_v1.md §4):**

1. `pnpm dev` STOPPEN (Pflicht — paralleler Dev-Server korrumpiert `.next`-Cache)
2. `pnpm build` (muss fehlerfrei durchlaufen)
3. `git add` nur geänderte Dateien (kein `git add -A`)
4. `git commit` mit passender Message
5. `git push origin main` bleibt MANUELL bei Marcus — NICHT im Auftrag
6. `npx kill-port 3000`
7. `pnpm screenshots` — NUR wenn `screenshots: ja` im Auftrags-Header
8. `pnpm dev` STARTEN

### 4.2 Auftrags-Header mit zwei Pflicht-Markierungen

Jeder Cursor-Auftrag bekommt im Header beide Markierungen mit Kurz-Begründung. Entscheidung trifft Claude Chat beim Schreiben des Auftrags, nicht Cursor.

**Markierung 1 — `recheck: ja/nein`** — steuert, ob der `recheck.md`-Skill nach dem Bau läuft (Code-Quality-Check, Compliance, Brand-Voice, Edge-Cases). `recheck: ja` bei neuer Komponente, Logik-Änderung, externer Integration, Build-Config. `recheck: nein` bei reinen Doku-, Skill- oder Tooling-Edits sowie bei reproduzierten Komponenten ohne neue Logik.

**Markierung 2 — `screenshots: ja/nein`** — steuert, ob `pnpm screenshots` als Schritt 7 läuft. `screenshots: ja` wenn der Auftrag eine Live-Seite verändert. `screenshots: nein` bei reinen Doku-, Skill- oder Tooling-Edits.

### 4.3 Playwright-Setup live

- **Befehl:** `pnpm screenshots`
- **Skript:** `scripts/screenshots.mjs` (Node ESM)
- **Verhalten:** spawnt eigenen `pnpm dev`-Child-Prozess, HTTP-Polling auf `localhost:3000` (500 ms Intervall, 60 s Timeout), Full-Page-Screenshots gegen sechs Live-Seiten (start, fuehrung, karriere, vertrieb, styleguide, simulation) in zwei Viewports (Desktop 1440×900, Mobile 375×667). Continue-on-Error. Exit-Code 1 bei mindestens einem Fehler. Prominente End-Zusammenfassung mit Trennstrichen.
- **Ablage:** `docs/screenshots/<slug>-<viewport>.png` — keine Datums-/Hash-Suffixe (Vorher-Nachher-Vergleich via Git-Historie).
- **Baseline:** 12 von 12 Screenshots erfolgreich, committet als Sprint-14-Baseline (Commit `6a63351`).

**Mini-Task für den Sprint-14-Bau:** Sobald die Route `/ueber-mich` existiert, muss die Seiten-Konstante in `scripts/screenshots.mjs` einmalig um die neue Route ergänzt werden. Sinnvoller Zuschnitt: als Teil des ersten Hero-Auftrags mitziehen — Vorteil: Über-mich ist ab dem ersten Build im Screenshot-Set, eine Sache, ein Commit-Block. Entscheidung im Bau-Chat.

---

## 5. Geänderte und neue Dokumente seit Sprint-13-Übergabe

| Dokument | Status / Änderung |
|---|---|
| `Prompt_Disziplin_und_Drift_Vermeidung_v1_2.md` | **ersetzt v1.0 und v1.1** im Project Knowledge. Punkt 9 der Pre-Flight-Checkliste auf 8-Schritt-Format erweitert. Neuer Abschnitt 7 (Watchlist): 7.1 Mikroschritt-Methode gilt für ALLE Artefakte, 7.2 Repo-Inspektion statt Gedächtnis-Reproduktion (mit Sprint-14-Vorfall ergänzt). |
| `CLAUDE.md` | Nach-dem-Coden-Block auf 8 Schritte aktualisiert. Verweis auf `recheck.md` ergänzt. |
| `Chat_Eroeffnung_Template.md` | Nachgezogen — verweist auf aktuelle Pflichtlektüre-Versionen, enthält `recheck.md` in der Skill-Liste. |
| `.claude/skills/visual-check.md` | **Gehärtet auf 13 mechanische Checks** (Commit `3846cb3`). Frontmatter `description` erweitert. |
| `.claude/skills/recheck.md` | **NEU** (Commit `62c932d`). Zweischichtiger Code-Quality-Skill: Schicht A aktiv (7 Compliance-Checks, 5 Brand-Voice-Checks, 5 MH3-Edge-Cases, 3 Performance-Checks). Schicht B als Skizze (8 Themenbereiche, nicht aktiv bis ActiveCampaign/Datenbank). Auto-Fix-Verbot — Cursor meldet, korrigiert nicht. Selbst-Beobachtungs-Block am Lauf-Beginn (für späteren PDCA nach 3 Sprints). |
| `.claude/skills/cursor-auftrag-checkliste.md` | Auf 8-Schritt-Standard aktualisiert. |
| `.claude/skills/projekt-regeln.md` | Auf 8-Schritt-Standard aktualisiert. |
| `docs/Cursor_Settings_Anleitung_v1.md` | PowerShell-Allowlist-Regeln dokumentiert (Commit `01f2ed3`). Allowlist-fähig: `Get-*`, `Select-*`, `Where-*`, `Sort-*`, `Measure-*`, `Format-*`. Nicht allowlisten: Property-Zugriffe, Variablen-Zuweisungen, zusammengesetzte Befehlsketten. `Set-Location` (`cd`) bleibt off-allowlist (Sprint-13-Lehre). Restdrift auf 8-Schritt-Block in §4 ist Watchlist-Punkt. |
| `scripts/screenshots.mjs` | **NEU** (Commit `dcaa9f1`). Playwright-Setup. |
| `docs/screenshots/` | **NEU** — 12 PNGs als Sprint-14-Baseline (Commit `6a63351`). |
| `Knowledge_Baustein_Playwright_und_8-Schritt-Block_Mai2026.md` | **NEU** im Project Knowledge. Dokumentiert Playwright-Setup, 8-Schritt-Block-Hintergrund, PDCA-Termin für `recheck` und `screenshots`-Markierung gemeinsam (nach 3 `recheck`-Sprints fällig). |

---

## 6. Aktive Skills (vollständige Liste)

Skills unter `.claude/skills/`:

- `section-bauen.md`
- `subpage-bauen.md`
- `projekt-regeln.md`
- `text-einbauen.md`
- `visual-check.md` (gehärtet auf 13 mechanische Checks, Commit `3846cb3`)
- `cursor-auftrag-checkliste.md` (mit 8-Schritt-Standard)
- `recheck.md` (NEU, zweischichtig, nur bei `recheck: ja`)

**Triage-Entscheidungen zu den fünf KI-Club-Skill-Kandidaten** (zur Vermeidung von Memory-Drift dokumentiert):

| Kandidat | Entscheidung |
|---|---|
| `audit-checklist.md` | D — Ablehnen |
| `brand-rules.md` | D — Ablehnen (redundant zu CLAUDE.md und Brand Voice Guide) |
| `consulting-frontend-design.md` | D — Ablehnen (zu generisch, Drift-Risiko) |
| `page-patterns.md` | D — Ablehnen |
| `recheck.md` | B — Anpassen an MH3 und übernehmen |

---

## 7. Was für den Sprint-14-Bau-Chat ansteht

### Erste Aufgaben in Reihenfolge

1. **Hero (Abschnitt 1)** — H1 „Menschen machen Geschäfte mit Menschen.", Pattern wie die anderen Subpages (SEO-optimiertes H1 → emotionaler Satz orange → Fließtext, zweispaltig mit `HeroImagePlaceholder`-Komponente). Setup-Auftrag enthält Route, Title-Tag, Meta-Description, Hero-Section.
2. **Route-Ergänzung in `scripts/screenshots.mjs`** — Mini-Task, sinnvoll als Teil des Hero-Auftrags mitziehen (Entscheidung im Bau-Chat).
3. **Abschnitte 2–11** in der dokumentierten Reihenfolge, ein Abschnitt pro Auftrag (oder zwei zusammengehörige in einem Auftrag, falls sinnvoll — siehe Auftrags-Zuschnitt-Regel im Disziplin-Dokument).

### SEO-Eckpunkte aus SEO-Strategie v1.2 Abschnitt 2.7

- **Title-Tag:** „Über Marcus Holzheimer – Berater, Sparringspartner, Einzelunternehmer | MH3 LearnCon"
- **Meta-Description:** „Über 20 Jahre selbstständig. Führungskraft, Auftraggeber, Berater – drei Perspektiven in einer Person. Düsseldorf als Heimatbasis, deutschlandweit und international im Einsatz."
- **H1:** „Über Marcus Holzheimer" — Hinweis: in den Über-mich-Texten v1 lautet die H1 dagegen „Menschen machen Geschäfte mit Menschen." Das ist ein Konflikt zwischen SEO-Strategie und Texte-Dokument. Klärung im Bau-Chat, bevor der Hero gebaut wird. Empfehlung aus Sprint-13-Lehre: SEO-Strategie ist die maßgebliche Quelle für Title-Tags, das Texte-Dokument für den emotionalen Satz. Die H1 muss eine bewusste Entscheidung werden.
- **Schema.org:** Person (erweitertes Profil), mit `alumniOf`, `memberOf` (VDI).

### Bekannte Pattern-Fragen für die Über-mich-Seite

- **Werdegang als Fließtext** mit Storytelling, kein Akkordeon. Akkordeon-Entscheidung später anhand sichtbarer Wirkung.
- **Du/Sie-Übergang (Abschnitt 7)** — eigener Gestaltungs-Mikroschritt, sobald Abschnitt 7 ansteht.
- **Comic** (Evolution von Marcus, aktualisierte Version mit Vollbart) als visuelles Element zum Werdegang — laut Über-mich-Texte v1 Abschnitt 5 vorgesehen, Status der Datei noch zu klären.
- **Profilfoto mit Orange-Rahmen** im Hero — laut Über-mich-Texte v1 Abschnitt 1 vorgesehen; Pattern-Frage Foto-Platzhalter analog Sprint 13.

### Bewusst NICHT auf der Seite (aus Über-mich-Texte v1)

- Shopvote-Widget (Webseiten-Konzept 5.5)
- Preise
- Fort Fantastic
- Namentliche Nennung der TH Bingen

---

## 8. Watchlist / offene Tooling- und Doku-Punkte (nicht Sprint-14-Bau-relevant, aber zu wissen)

Diese Punkte stammen aus den Parallel-Chats und sind nicht Teil des Über-mich-Baus. Sie sind hier dokumentiert, damit sie nicht vergessen werden.

- **TQM-Auditor-Briefing v1.0 ist veraltet** (Design-System-Stand März, Versionen alle outdated, Audit-Prozess passt nicht zur Sprint-Realität). Update auf v2.0 vor dem nächsten Audit oder vor Pre-Launch. Eigener Sparring-Chat. Plus: Klärung, ob `TQM_Auditor_Briefing_Gemini_v1_1.md` (in Roadmap und EAZEE-Doc referenziert) tatsächlich existiert.
- **`recheck`-Schicht-B-Aktivierung** bei Phase-2-Start (ActiveCampaign, eigene Datenbank oder anderer Pfad).
- **PDCA-Auswertung** nach 3 `recheck`-Sprints — Marcus liefert Logs, ich werte aus und justiere Klassen-Grenzen. Gleichzeitig: Auswertung der `screenshots: ja/nein`-Markierung (wie oft ja, wie oft nein, wie oft im Nachhinein falsch, wie viel Zeit pro Lauf).
- **Restdrift in `docs/Cursor_Settings_Anleitung_v1.md` §4** — eigene 9-Schritt-Variante des Nach-dem-Coden-Patterns ohne `kill-port`. Auf 8-Schritt-Standard angleichen.
- **Cursor-Sichtbarkeitsgrenze** — externe Dev-Server (nicht in Cursors Terminal) sind für Cursor unsichtbar. Schritt 1 (`pnpm dev STOPPEN`) wird dann faktisch durch Schritt 6 (`kill-port`) repariert. Hinweis in Cursor-Settings-Anleitung aufnehmen.
- **Abgleichbedarf aus Sprint-13-Übergabe Abschnitt 8** weiterhin offen — u.a. `Simulation_Texte_MH3_v1.md` im Projektwissen auf Live-Stand bringen, Design System um Kennzahl-Karten und Preistabelle ergänzen, ContactSection-Props erweitern, Führung-Hinweis-Box-Pattern angleichen, Positionierung um „Diagnostik"-Begriff bereinigen.
- **Karriere-Seite „Gut zu wissen"-Box:** Ausrichtung noch nicht vollständig gelöst.
- **HexagonBullet-SVG-Komposition** (Marcus-Hausaufgabe seit Sprint 4).
- **Speed Insights und Web Analytics für Vercel:** bei Launch-Vorbereitung aktivieren.

---

## 9. Begründung für den Chat-Wechsel an dieser Stelle

Der Sparring-Chat zum Über-mich-Sprint hat substantielle Pflichtlektüre (10 Dokumente), drei Parallel-Updates aus den Infrastruktur-Strängen, Triage-Recherche per `conversation_search` und mehrere Iterationen zum Skill-Triage-Start-Prompt verarbeitet. Der Bau-Chat hat 11 Abschnitte vor sich. Ein frischer Chat mit klarer Pflichtlektüre und vollem Token-Fenster reduziert das Risiko, dass Folgeabschnitte unter Token-Druck driften (Pre-Flight wird kürzer, Klassenketten „aus dem Kopf" rekonstruiert).

Effizient, sicher, risikoreduzierend — alle drei Kriterien sprechen für den Wechsel.

---

## 10. Pflichtlektüre für den Sprint-14-Bau-Chat

1. `Leitfaden_Zusammenarbeit_MH3_v3_4.md`
2. `CLAUDE.md` (aktueller Stand mit 8-Schritt-Block)
3. `Prompt_Disziplin_und_Drift_Vermeidung_v1_2.md` (Punkt 9 auf 8 Schritte, Abschnitt 7 Watchlist)
4. `Uebergabe_vor_Sprint14_Bau_Mai2026.md` (dieses Dokument)
5. `Design_System_MH3_v1_2.md`
6. `Ueber_mich_Texte_MH3_v1.md`
7. `Webseiten_Konzept_MH3_v1_2.md`
8. `Brand_Voice_Guide_v2_3.md`
9. `Positionierung_MH3_v2_6.md`
10. `SEO_Strategie_MH3_v1_2.md`

Ergänzend im Project Knowledge verfügbar (keine Pflichtlektüre für den Start, aber bei Bedarf greifbar): `Knowledge_Baustein_Playwright_und_8-Schritt-Block_Mai2026.md`.

---

*Erstellt am 15. Mai 2026 vor dem Sprint-14-Bau. Dieser Baustein ist Pflichtlektüre für den Sprint-14-Bau-Chat (Über-mich-Seite).*
