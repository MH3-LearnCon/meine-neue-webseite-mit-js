# Übergabe nach Sprint 13 — 13. Mai 2026

**Phase:** Webseitenbau MH3 LearnCon GmbH, Sprint 13 abgeschlossen (Simulation-Seite vollständig, 13.1 bis 13.9 inkl. aller Fix-Iterationen)
**Erstellt am:** 13. Mai 2026
**Letzter Commit:** `4cd0195` (docs: Cursor-Auftrag-Checkliste als Skill + CLAUDE.md-Verweis)
**Branch:** main, synchron mit origin/main, Worktree sauber
**Modell-Setup während des Sprints:** Claude Opus 4.7 (Chat), Cursor Composer 2 Fast (Code)

---

## 1. Sprint-13-Ergebnis im Überblick

Sprint 13 hatte ein Ziel: die Simulation-Seite (`/simulation`) vollständig bauen — die schwierigste Subpage, weil sie ein „Invisible Product" erklären muss, nach dem niemand sucht.

Erreicht. Alle neun Abschnitte sind live: Hero, Anwendungsfälle, Werkzeug-vs-Programm, So funktioniert es, Kennzahlen und Preise, Das offene Kennenlern-Event, So kommen wir ins Gespräch, Shopvote-Block, ContactSection.

Zusätzlich wurde am Tagesende ein strukturelles Problem adressiert, das sich über mehrere Sprints gezogen hat: wiederkehrende Drift in Cursor-Aufträgen. Daraus entstanden zwei neue Dokumente — `Prompt_Disziplin_und_Drift_Vermeidung.md` (Projektwissen) und `.claude/skills/cursor-auftrag-checkliste.md` (Repo) — siehe Abschnitt 10.

---

## 2. Stand der Webseite (welche Seiten live, welche offen)

| Seite | Status |
|---|---|
| Startseite (`/`) | live |
| Führung (`/fuehrung`) | live |
| Karriere (`/karriere`) | live |
| Vertrieb (`/vertrieb`) | live |
| Styleguide (`/styleguide`) | live, NICHT in Navigation, NICHT indexiert |
| Simulation (`/simulation`) | live — Sprint 13 abgeschlossen |
| Über mich (`/ueber-mich`) | NEXT — geplant Sprint 14 |
| MH3-EAZEE Community (`/community`) | offen |
| (kein) Coaching (`/kein-coaching`) | offen |
| Empfehlungen (`/empfehlungen`) | offen |

---

## 3. Strukturelle Mikroschritt-Entscheidungen vor dem Bau

Vor dem ersten Abschnitt wurden vier Grundsatzentscheidungen getroffen:

- **9 Sections** statt der ursprünglich 8 aus dem Webseiten-Konzept — der Abschnitt „So kommen wir ins Gespräch" (ProcessSteps) wurde ergänzt, weil er bei einem Invisible Product den Weg zur Zusammenarbeit explizit zeigt. Die Simulation-Texte v1 hatten ihn nicht vorgesehen; der Text wurde im Sprint neu formuliert.
- **Kein Akkordeon auf der Seite.** Die Anwendungsfälle wurden als fünf SituationCards einspaltig gebaut, nicht als Akkordeon. Begründung: SEO-Strategie v1.2 Abschnitt 5.3 warnt vor Akkordeons für KI-Crawler. Der Akkordeon-Watchlist-Punkt wandert auf die Über-mich-Seite (Werdegang).
- **Hero-Pattern wie die anderen Subpages:** SEO-optimiertes H1 → emotionaler Satz (orange) → Fließtext, zweispaltig mit Foto-Platzhalter.
- **SEO finalisiert:** Title-Tag „Management Simulation für Teams und Führungskräfte | Marcus Holzheimer", Meta-Description mit internationalem Scope. „Assessment-Alternative" ersetzt „Diagnostik" durchgängig (Marcus bietet keine Diagnostik, nur Sichtbarmachung).

---

## 4. Die neun Abschnitte — was gebaut wurde

### Abschnitt 1 — Hero (`6227139`, Fix `f361a60`)
Zweispaltiger Hero mit `HeroImagePlaceholder`-Komponente. H1 „Management Simulation für Teams und Führungskräfte", emotionaler Satz „Wenn Sie sehen wollen, wie Ihr Team und Sie wirklich funktionieren.", Fließtext mit „professioneller Simulant" als Neugier-Anker. Setup-Commit `6227139` enthält Route, Title/Meta und Hero mit Foto-Platzhalter. Fix `f361a60`: Foto-Platzhalter von Inline-`bg-[#E5E5E5]` auf die `HeroImagePlaceholder`-Komponente umgestellt (Drift-Korrektur, Konsistenz mit Vertrieb). Zwischen Setup und Fix liegt der eigenständige Doku-Commit `f563f36` (Cursor-Settings-Anleitung v1).

### Abschnitt 2 — Anwendungsfälle (`77e6f42`)
Fünf SituationCards einspaltig, Orange-Leiste links (Leser-Perspektive). Jede Karte: Schmerzpunkt-Frage + Erklärungstext.

### Abschnitt 3 — Werkzeug, nicht Programm (`4cf4a2b`, Fix `26f97d6`)
Vier Absätze Differenzierungs-Argument plus Denver-Blau-Quote. Fix `26f97d6`: Container-Drift behoben — `max-w-4xl` auf `max-w-6xl`, doppelte Verengung durch `max-w-prose` entfernt (analog Vertrieb Abschnitt 3).

### Abschnitt 4 — So funktioniert es (`3832608`, Fixes `3f09c93`, `23acf30`)
„In 90 Sekunden erklärt." Ursprünglich vier Fließtext-Absätze (Setup `3832608`: Szenario, Ablauf, Rollen, Ergebnis). Fix `3f09c93`: Umbau zu vier Sequenz-Karten — visuelle Präsenz plus Reihenfolge-Logik (Marcus' Befund: zu farblos). Fix `23acf30`: Container-Klassenkette 1:1 an Vertrieb Abschnitt 2 angeglichen (zwei verschachtelte Container, vorher nur einer).

### Abschnitt 5 — Kennzahlen und Preise (`0e4c78c`, Fixes `bffa5cb`, `ce42696`, `7449de8`, `5658b3f`)
Inhaltlich dichtester Abschnitt. Setup `0e4c78c`: Kennzahl-Karten (NEUES PATTERN), Preistabelle (NEUES PATTERN), „Im Tagessatz enthalten"-Liste, Einordnungs-Absatz. Fix-Iterationen:
- `bffa5cb` — Nachschärfung: Kennzahl-Hierarchie zur H2, En-Dash-Konsistenz, Karte-4-Lesart, Preistabelle visuell aufgewertet, Einordnungs-Absatz als Hinweis-Box analog Karriere.
- `ce42696` — Kennzahl-Karte 3 Untertext gekürzt, Karte 4 Zahl-Zeile mit Schrift-Hierarchie.
- `7449de8` — Kennzahl-Karten von 4 auf 5 in 3+2-Layout (Trust-Karten oben, Format-Karten unten).
- `5658b3f` — Reihe 2 der Kennzahl-Karten auf Mobile einspaltig.

### Abschnitt 6 — Das offene Kennenlern-Event (`3222d08`, Fix `4a9c5a9`)
Reine Text-Section mit Denver-Blau-Quote. Setup `3222d08`: zunächst als OfferCard mit Gatekeeper-Text und Anker-CTA. Fix `4a9c5a9`: von Karten-Zwitter auf Fließtext mit Denver-Blau-Quote umgestellt (Pattern-Konsistenz mit Abschnitt 3). Quote: „Manche Formate muss man sehen, um sie zu verstehen. Genau dafür gibt es dieses eine Event im Jahr." Enthält den Gatekeeper-Gedanken (Variante B1) und einen dezenten Text-Link-CTA „Sprechen Sie mich an →" als Anker auf `#kontakt`.

### Abschnitt 7 — So kommen wir ins Gespräch (`eac9e97`, Fix `4ac830d`)
Drei ProcessSteps (Kennenlerngespräch → Konzept und Abstimmung → Durchführung und Transfer), Text neu für Simulation formuliert, plus Multitool-Abschlussabsatz. Fix `4ac830d`: Auftraggeber-Dynamik-Hinweis als orange Box zwischen ProcessSteps und Abschlussabsatz ergänzt — adressiert die Multiplikator-Konstellation (jemand entdeckt die Simulation, der nicht das Budget hat).

### Abschnitt 8 — Shopvote-Block (`176091d`)
Pattern 1:1 von Vertrieb Abschnitt 8 übernommen. Zwei-Spalten-Layout, Text links, ShopvoteBadge rechts. Die veraltete „Slider-Format"-Angabe aus Simulation-Texte v1 wurde bewusst ignoriert — das etablierte AllVotes-Pattern gewinnt.

### Abschnitt 9 — ContactSection (`4ef5014`)
ContactSection-Komponente als letzter Abschnitt. Zusätzlich: Die `ContactSection`-Komponente hat `id="kontakt"` bekommen (sitewide-Änderung — wirkt auf alle Seiten, ändert nur die Anker-Erreichbarkeit, nicht das Aussehen). Damit funktioniert der Anker-Link aus Abschnitt 6.

---

## 5. Neue Patterns aus Sprint 13

Zwei neue Patterns wurden eingeführt. Beide sind noch NICHT im Design System v1.2 dokumentiert — siehe Abgleichbedarf, Abschnitt 8.

### Kennzahl-Karte

| Eigenschaft | Wert |
|---|---|
| Hintergrund | `bg-white` |
| Border | `border border-brand-gray-mid-light` |
| Schatten | `shadow-sm` |
| Radius | `rounded-lg` |
| Padding | `p-6 md:p-8` |
| Zahl | `text-3xl md:text-4xl font-bold text-orange` |
| Untertext | `text-sm md:text-base text-brand-text mt-2` |
| Ausrichtung | `text-center` |
| Layout Simulation | 3+2: Reihe 1 `grid-cols-1 md:grid-cols-3`, Reihe 2 `grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto` |

### Preistabelle

Semantische HTML-`<table>` mit Tailwind-Styling. Header-Zeile `border-b-2 border-denver-blue`, Zeilen `border-b border-brand-gray-mid-light`, Preise rechtsbündig `font-semibold text-denver-blue`. Tabelle in `max-w-xl mx-auto` für engere Spalten.

---

## 6. Verbindliche Entscheidungen aus Sprint 13

- **Sequenz-Karten auch für Mechanik-Erklärung:** Abschnitt 4 nutzt das Sequenz-Karten-Pattern für die Schritte Szenario → Ablauf → Rollen → Ergebnis. Begründung: Die Reihenfolge ist konstitutiv. Anders als bei den Anwendungsfällen (Auswahl-Charakter → SituationCards).
- **Quote-Pattern für aufzuwertende Text-Sections:** Wenn eine reine Text-Section visuell zu flach wirkt, ist die Lösung ein Denver-Blau-Quote in der Mitte — kein neues Karten-Pattern. So gelöst in Abschnitt 6. Quote sitzt zwischen zwei Absätzen (Aufbau → Quote → Auflösung).
- **Gatekeeper über Text, nicht über Technik:** Das offene Event hat keinen Anmelde-Button und kein Formular. Der Weg führt über ein Gespräch. Der Gatekeeper-Effekt entsteht durch die Abwesenheit eines Self-Service-Pfads plus einen klarstellenden Textabschnitt.
- **Cursor-Allowlist:** `Set-Location` allein auf der Allowlist reicht nicht bei zusammengesetzten Befehlsketten mit `;` — sobald ein Kettenglied nicht auf der Allowlist steht, fragt Cursor für die ganze Kette. Konsequenz: `Set-Location` in Cursor-Aufträgen auf eine eigene Zeile, nicht in die Pre-Flight-Kette einbauen.

---

## 7. Watchlist / Geparkte Punkte

### Neu aus Sprint 13

- **Führung Abschnitt 6 „Zwei Dinge sind mir wichtig"-Absatz** auf Hinweis-Box-Pattern angleichen (analog Karriere „Gut zu wissen:" und Simulation „Zum Vergleich:"). Entdeckte Drift — das Hinweis-Box-Pattern wurde nach dem Führungs-Bau eingeführt, aber nicht zurück angewendet.
- **ContactSection-Props:** Die Komponente nimmt nur `outerClassName` entgegen, keine Text-Props. Simulation zeigt deshalb live den seitenneutralen Standard-Text („Sprechen wir miteinander."), nicht den Simulation-spezifischen Zieltext aus den Texten. Anpassung via optionale Props möglich — eigener Mini-Sprint.
- **Foto-Platzhalter-Wertkonflikt:** Design System v1.2 Abschnitt 12 nennt `bg-[#E5E5E5]`, die `HeroImagePlaceholder`-Komponente nutzt aber `bg-brand-gray-mid-light` (#D9D9D9). Dokument und Code abgleichen — Code gewinnt, also Dokument korrigieren.
- **„½ – 2 Tage" Kennzahl-Karte 4:** Aktuell gelöst über Schrift-Hierarchie. Falls beim Gesamt-Review doch unbefriedigend, ist die Rückfallebene dokumentiert (Layout-Inventar Simulation).
- **Shopvote-Widget rendert lokal nicht zuverlässig** — externes Script lädt im Dev-Modus nicht immer. Kein Code-Fehler. Beim Gesamt-Check vor Launch auf Vercel verifizieren. Außerdem das bekannte Shopvote-Zeitraum-Problem: Badge zeigt nur den letzten Zeitraum (~8 Bewertungen), nicht alle. Kein Code-Thema, Klärung im Shopvote-Konto.
- **„Vier Skill-Dateien" im Kopf:** Wiederkehrender Fehler — Claude Chat arbeitet mit veralteten Momentaufnahmen statt die aktuelle Lage zu prüfen. Gehört als Ergänzung ins Disziplin-Dokument.
- **Mikroschritt-Methode greift nicht bei Dokumenten:** Claude Chat hat in Sprint 13 mehrfach Artefakte (Dokumente) gebaut, während noch echte Fragen offen waren. Die Pre-Flight-Checkliste deckt nur Cursor-Aufträge ab, nicht alle Artefakte. Ergänzung fürs Disziplin-Dokument: „Solange eine echte Frage offen ist, wird kein Artefakt gebaut — kein Dokument, kein Auftrag, kein Plan. Erst Antwort, dann Bau."

### Bestehende Watchlist (aus Sprint 12 fortgeschrieben)

- Themen-Karten-Aufwertung (wartet auf Marcus' HexagonBullet-SVG-Komposition)
- Akkordeon-Trigger-Design — wird relevant bei der Über-mich-Seite (Werdegang)
- Tooling-Review Cursor → VS Code + Claude Code (Post-Launch, nicht aus Kostenargument allein)
- VUCA/BANI-Keyword-Integration ohne Buzzword-Gefahr
- Foto-Strategie: KI-Platzhalter durch echte Fotografie ersetzen — für Simulation macht Marcus eigene Smartphone-Fotos vom Spielmaterial (Hero-Übersicht, Karten/Handbuch, Dashboard), DSGVO-sicher ohne Personen
- Video-Produktion (ein Video für Über-mich-Seite geplant)
- Karriere-Seite „Gut zu wissen"-Box: Ausrichtung noch nicht vollständig gelöst
- Speed Insights und Web Analytics für Vercel: bei Launch-Vorbereitung aktivieren
- HexagonBullet-SVG-Komposition (Marcus-Hausaufgabe seit Sprint 4)
- Positionierung v2.6: „Diagnostik" / „diagnostisches Werkzeug" bei Katrin-Persona überarbeiten (Konsistenz mit „Assessment-Alternative")

---

## 8. Abgleichbedarf — Konsistenz über alle Dokumente

Dieser Abschnitt ist neu in dieser Übergabe und auf Marcus' ausdrücklichen Wunsch entstanden: Die Live-Seite ist über viele Sprint-Schritte gewachsen, mehrere Projektdokumente hinken nun hinterher. Bevor aus diesen Dokumenten weitergearbeitet wird (Unterseiten, Produktentwicklung), muss Konsistenz hergestellt werden.

| Was | Soll-Zustand | Priorität |
|---|---|---|
| `Simulation_Texte_MH3_v1.md` (Projektwissen) | Auf finalen Live-Stand bringen — am besten als v1.1 oder v2, mit nachvollziehbarem Änderungsvermerk. Die Cursor-gepflegte `content/Simulation_Texte_MH3_v1.md` im Repo hat den aktuellen Stand, das Projektdokument nicht. | hoch |
| `Design_System_MH3_v1_2.md` | Um Kennzahl-Karten (Abschnitt 3.8) und Preistabelle ergänzen. Dreifach-Pflege: Design System, Styleguide-Seite, Layout-Inventar Styleguide. | hoch |
| `Chat_Eroeffnung_Template.md` | Verweist noch auf `Leitfaden_Zusammenarbeit_MH3_v3_0.md` — aktuell ist v3_4. Außerdem fehlt das neue Disziplin-Dokument in der Pflichtlektüre. Template aktualisieren (Schritt 4 des Tagesabschlusses). | hoch |
| `Design_System_MH3_v1_2.md` Abschnitt 12 | Foto-Platzhalter-Wert `#E5E5E5` → tatsächlicher Komponenten-Wert `#D9D9D9` (`bg-brand-gray-mid-light`). | mittel |
| `ContactSection.tsx` | Optionale Text-Props ergänzen, damit seitenspezifische Kontakt-Texte möglich sind (Simulation-Zieltext liegt bereit). | mittel |
| `Fuehrung_Texte` / Führung-Seite | „Zwei Dinge sind mir wichtig"-Absatz auf Hinweis-Box-Pattern angleichen. | mittel |
| `Positionierung_MH3_v2_6.md` | „Diagnostik"-Begriff bei Katrin-Persona auf „Assessment-Alternative" / „sichtbar machen" anpassen. | niedrig |

---

## 9. Was für Sprint 14 ansteht — Über mich

### Warum Über mich als nächste Seite

Aus dem Sprint-12-Plan und dem Sprint-13-Abschluss: Über mich und die Community-Seite stehen als Nächstes an. Über mich zuerst, weil sie als „Marcus als Mensch"-Seite Storytelling als Gestaltungsprinzip hat und damit eigene Pattern-Fragen aufwirft (u.a. das erste echte Akkordeon für den Werdegang).

### Bekannte Herausforderungen Über mich

- **Storytelling als Gestaltungsprinzip** — die Seite darf und soll ausführlich sein, das ist ein anderer Charakter als die bisherigen B2B-Seiten.
- **Akkordeon-Einsatz:** Der Werdegang ist der Kandidat für das erste echte Akkordeon — der Watchlist-Punkt zum Akkordeon-Trigger-Design wird hier eingelöst.
- **Video-Produktion:** Ein Video ist für die Über-mich-Seite geplant — Einbindung klären (DSGVO, kein externes Embed ohne Prüfung).
- **Du/Sie-Übergang:** Die Über-mich-Seite hat laut Webseiten-Konzept einen Hinweis zum Sie/Du-Wechsel.

### Pflichtlektüre für den neuen Chat

1. `Leitfaden_Zusammenarbeit_MH3_v3_4.md`
2. `CLAUDE.md` (Stand 13. Mai 2026, mit Sprint-13-Updates inkl. Cursor-Auftrag-Checkliste-Verweis)
3. `Prompt_Disziplin_und_Drift_Vermeidung.md` (NEU — verbindliche Pre-Flight-Checkliste)
4. `Design_System_MH3_v1_2.md`
5. `Uebergabe_nach_Sprint13_Mai2026.md` (dieses Dokument)
6. `Ueber_mich_Texte_MH3_v1.md`
7. `Webseiten_Konzept_MH3_v1_2.md`
8. `Brand_Voice_Guide_v2_3.md`
9. `Positionierung_MH3_v2_6.md`
10. `SEO_Strategie_MH3_v1_2.md`

---

## 10. Lernpunkte aus Sprint 13

### 10.1 Drei Container-Drifts in einem Sprint — chronisches Muster

Sprint 13 hatte drei Container-/Pattern-Drifts: Foto-Platzhalter (13.1), Container Abschnitt 3 (13.3), Container Abschnitt 4 (13.4). Alle drei gingen auf denselben Prompt-Fehler zurück: „Pattern wie X" statt expliziter Forderung der vollständigen Klassenkette. Die Recherche durch die Projekthistorie zeigte: Dasselbe Muster gab es in Sprint 11.3 und in der April-Crash-Phase. Es ist eine chronische Krankheit, kein Sprint-13-Ausrutscher.

**Antwort:** Das Dokument `Prompt_Disziplin_und_Drift_Vermeidung.md` mit einer neunteiligen Pre-Flight-Checkliste. Verankert an drei Stellen — Projektwissen, `.claude/skills/`, Chat-Eröffnungs-Template. Die Checkliste läuft bei Claude Chat, bevor ein Auftrag Marcus erreicht.

### 10.2 Der Diagnose-Schritt funktioniert nachweislich

Ab Sprint 13.4-fix2 wurde der Diagnose-Schritt zum Standard: Cursor öffnet die Vorbild-Datei, notiert die vollständige Klassenkette, übernimmt 1:1, berichtet darüber. Ab diesem Punkt trat kein Container-Drift mehr auf — die Abschnitte 13.5 bis 13.9 liefen sauber. Das ist der Beweis, dass der Mechanismus wirkt.

### 10.3 „never assume" — auch bei beiläufigen Annahmen

Bei den Kennzahl-Karten wurde das Mobile-Verhalten von Reihe 2 als beiläufige „Annahme treffe ich für Dich" verpackt, statt als eigene Mikroschritt-Frage gestellt. Marcus hatte „Variante A" zum Desktop-Layout gesagt, nicht zum Mobile-Detail. Lehrwert: Bei mehreren offenen Entscheidungen keine davon stillschweigend mitentscheiden — auch nicht „zur Beschleunigung".

### 10.4 Auftrags-Zuschnitt — nicht künstlich trennen

Shopvote (13.8) und ContactSection (13.9) sind beide reine Reproduktionen etablierter Komponenten. Sie wurden künstlich in zwei Aufträge getrennt, aus Übervorsicht wegen der `id="kontakt"`-Frage. Marcus' berechtigter Einwand: Das hätte in einen Auftrag gehört. Lehrwert: Nicht jede Vorsicht rechtfertigt einen eigenen Schritt — die `id`-Sache hätte transparent im Sammelauftrag behandelt werden können.

### 10.5 Mikroschritt-Methode gilt für ALLE Artefakte, nicht nur Aufträge

Claude Chat hat in Sprint 13 mehrfach Dokumente gebaut, während noch echte Fragen offen waren — zuletzt das Übergabe-Dokument selbst. Die Pre-Flight-Checkliste deckt Cursor-Aufträge ab, aber die Mikroschritt-Methode gilt breiter: Solange eine echte Frage offen ist, wird kein Artefakt produziert — kein Dokument, kein Plan, kein Auftrag. Erst Antwort, dann Bau. Diese Ergänzung gehört ins Disziplin-Dokument (Watchlist Abschnitt 7).

### 10.6 Marcus' visuelles Auge ist die verlässliche letzte Instanz

Marcus hat in Sprint 13 jede Drift gefunden — Foto-Platzhalter-Inkonsistenz, Container-Sprünge, die „½ Tage – 2"-Lesart als Rechenaufgabe. Das Auge ist verlässlich. Aber es soll die letzte Prüfinstanz sein, nicht die erste. Die Pre-Flight-Checkliste verschiebt die Qualitätssicherung dorthin, wo sie hingehört: vor den Auftrag, bei Claude Chat.

### 10.7 Cursor-Reflexe weiterhin honoriert

Cursor hat durchgängig `content/Simulation_Texte_MH3_v1.md` proaktiv mitgepflegt und bei Sprint 13.9 die CLAUDE.md-Hierarchie selbstständig korrigiert (`##` → `###`, weil die Geschwister-Abschnitte `###` sind). Transparent berichtet. Lehrwert aus Sprint 12 bestätigt: Wenn Cursor proaktiv saubere Lösungen findet — bestätigen, nicht hinterfragen.

---

## 11. Aktualisierte und neue Dokumente

| Dokument | Status |
|---|---|
| `src/app/simulation/page.tsx` | NEU — neun Abschnitte vollständig |
| `src/components/ContactSection.tsx` | `id="kontakt"` ergänzt (sitewide) — Commit `4ef5014` |
| `docs/Layout_Inventar_Simulation.md` | NEU — alle neun Abschnitte dokumentiert, inkl. aller Drift-Korrekturen |
| `content/Simulation_Texte_MH3_v1.md` | Über alle Sprint-Schritte mitgepflegt (Cursor-Sync) — Projektdokument-Pendant muss noch nachgezogen werden, siehe Abschnitt 8 |
| `docs/Cursor_Settings_Anleitung_v1.md` | NEU — Allowlist, Pre-Flight, Self-Reporting — Commit `f563f36` |
| `Prompt_Disziplin_und_Drift_Vermeidung.md` | NEU — Projektwissen, verbindliche Pre-Flight-Checkliste |
| `.claude/skills/cursor-auftrag-checkliste.md` | NEU — operative Kurzfassung im Repo — Commit `4cd0195` |
| `CLAUDE.md` | Verweis auf Cursor-Auftrag-Checkliste ergänzt (unter Build-Hygiene & Stolperfallen) — Commit `4cd0195` |

---

*Erstellt am 13. Mai 2026 nach Abschluss Sprint 13. Diese Übergabe ist Pflichtlektüre für den Sprint-14-Chat (Über mich).*
