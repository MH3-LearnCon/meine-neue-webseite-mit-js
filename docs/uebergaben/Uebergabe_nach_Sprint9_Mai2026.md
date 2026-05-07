# Übergabe-Knowledge-Baustein — nach Sprint 9

**Datum:** 4. Mai 2026
**Letzter Commit:** `357564b` (docs: vier Cursor-Skills für Subpage-Bau (Sprint 9.4))
**Branch:** main, gepusht zu origin/main, Worktree sauber

Dieser Baustein dokumentiert den Stand nach Sprint 9. Er dient als Einstiegsgrundlage für Sprint 10 (Karriere-Seite).

---

## Sprint-9-Ergebnis

Sprint 9 hatte zwei Ziele: (1) den offenen Feinschliff-Punkt aus Sprint 8 schließen (Kurzprofil-Foto Alignment) und (2) vier Cursor-Skills erstellen, die den Subpage-Bau ab der Karriere-Seite deutlich beschleunigen sollen. Beide Ziele sind erreicht.

---

## Erledigte Commits (chronologisch)

| Commit | Beschreibung |
|---|---|
| `2f1af64` | Kurzprofil-Foto vertikal zentriert: items-center auf Grid (Sprint 9.1) |
| `e3e34d5` | Kurzprofil-Foto max-w-[280px] für bessere Proportionen (Sprint 9.2) |
| `9abc034` | Beschnittenes Foto committed — transparenter Raum über Scheitel entfernt (Sprint 9.3) |
| `357564b` | Vier Cursor-Skills für Subpage-Bau committed (Sprint 9.4) |

---

## Neue Dateien im Repo

### Cursor-Skills (`.claude/skills/`)

| Datei | Zweck |
|---|---|
| `section-bauen.md` | Checkliste für jede einzelne Section: Spacing, Farbwechsel, Divider, Container, Farblogik, Typografie, Karten-Hierarchie |
| `subpage-bauen.md` | Blueprint für eine komplette Subpage mit Führungsseite als Referenz. Abschnittsfolge, Variationen pro Seite, Komponenten-Inventar |
| `projekt-regeln.md` | Arbeitsregeln, Lessons Learned, Farbpalette, Sprach-/Textregeln, Kennzahlen, DSGVO, SEO-Grundregeln |
| `text-einbauen.md` | Regeln für Textübernahme aus Textdokumenten: Anführungszeichen, Gendering, Trademarks, kein Umformulieren |

Diese Skills werden von Cursor automatisch gelesen, wenn Aufträge thematisch passen. Kein spezieller Verweis in Cursor-Aufträgen nötig.

---

## Verbindliche Design-Entscheidungen aus Sprint 9

### Kurzprofil-Foto (Startseite, „Drei Perspektiven")

| Eigenschaft | Wert |
|---|---|
| Grid | lg:grid-cols-3 gap-8 lg:gap-12 items-center |
| Foto max-width | max-w-[280px] mx-auto |
| Foto-Datei | `public/Offen_laecheln.png` — oben beschnitten (transparenter Raum entfernt) |
| Sonstiges | w-full h-auto rounded-lg, kein Rahmen, kein Schatten |

### CTA-Abstände

Auf der Startseite wurde der CTA-Abstand bewusst NICHT verändert. Mobile-Ansicht ist sauber (Text → Statement Card → CTA in natürlicher Folge). Desktop-Abstand in Statement-Card-Sections ist Grid-bedingt und akzeptiert.

---

## Was in Sprint 9 NICHT gemacht wurde (bewusst)

- **CLAUDE.md-Update:** Sprint-8-Entscheidungen waren bereits im Commit b351bd5 dokumentiert. Skills decken die Regeln kompakter ab. Update auf v1.2 nach der Karriere-Seite.
- **Design System v1.2:** Wird nach der Karriere-Seite erstellt, damit Erfahrungen aus dem ersten Subpage-Bau mit Skills einfließen.
- **Karriere-Seite:** Eigener Sprint (Sprint 10).

---

## Nächster Sprint: Sprint 10 — Karriere-Seite

### Pflichtlektüre

- `Karriere_Texte_MH3_v1.md` (Textquelle)
- `Webseiten_Konzept_MH3_v1_2.md` (Abschnitt 4.3 — Karriere)
- `SEO_Strategie_MH3_v1_2.md` (Title-Tag, Meta-Description, Keywords)
- Skills unter `.claude/skills/` (werden von Cursor automatisch geladen)

### Besonderheiten der Karriere-Seite

- Wichtigste Pfad-B-Seite (organische Entdeckung)
- Vier Personas: Sandra, Christian, Philipp, Thomas
- Abschnitt „Formate" statt „Angebote": 0-Euro-Kurs, „Finde dein Was", Einzelberatung
- Du-Hinweis bei Privatzahler:innen
- Kontakt-Section wärmer formuliert als auf Führungsseite
- Steuerliche Absetzbarkeit erwähnen

### Geplante Cursor-Auftrags-Aufteilung (aus subpage-bauen.md)

| Block | Inhalt |
|---|---|
| Block 1 | Page-Datei anlegen + Hero |
| Block 2 | Situationen — vier SituationCards |
| Block 3 | Abgrenzung + Themen |
| Block 4 | Formate + Prozess |
| Block 5 | Praxis + Shopvote + ContactSection |

---

## Offene Punkte (fortgeschrieben)

### Hausaufgaben Marcus (seit Sprint 4/6 offen)
- Shopvote-Reviews durchgehen: 2–3 passende Zitate pro Seite identifizieren
- Foto-Session planen (Abschnitt 3 Platzhalter, Hero-Platzhalter)
- SVG-Hexagon-Komposition (seit Sprint 4 offen)

### Querschnitt (nach Karriere-Seite)
- Design System v1.2 erstellen
- CLAUDE.md ggf. ergänzen
- Cookie-Consent für Shopvote-Widget (Launch-Sprint)
- Mobile-Gesamttest Startseite + Führungsseite
- Akkordeon-Token R9 (relevant für Simulation und Über-mich)

---

## Lessons Learned Sprint 9

1. **Foto-Probleme zuerst an der Quelle lösen:** Der CSS-Fix (items-center) hatte keinen sichtbaren Effekt, weil das eigentliche Problem im Bild lag (transparenter Leerraum). Bildbearbeitung vor CSS-Tricks.
2. **Skills als Wissenssicherung:** Memory-Inhalte aus dem Chat existieren nicht für Cursor. Skills unter `.claude/skills/` schließen diese Lücke strukturell.
3. **CTA-Abstände nicht vorschnell vereinheitlichen:** Desktop-Abstände in Grid-Layouts sind strukturbedingt. Wenn Mobile sauber ist, muss Desktop nicht erzwungen werden.

---

*Erstellt am 4. Mai 2026 nach Abschluss Sprint 9.*
