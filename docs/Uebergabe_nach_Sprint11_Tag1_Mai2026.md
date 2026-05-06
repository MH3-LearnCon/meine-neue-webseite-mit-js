# Übergabe-Knowledge-Baustein — nach Sprint 11 (Teilstand)

**Datum:** 7. Mai 2026
**Letzter Commit:** Revert Josefin Sans Test (exakter Hash in Cursor prüfen)
**Branch:** main, gepusht zu origin/main, Worktree sauber

Dieser Baustein dokumentiert den Stand nach dem ersten Tag Sprint 11. Er dient als Einstiegsgrundlage für die Fortsetzung Sprint 11 (Vertrieb-Seite fertigbauen).

---

## Sprint-11-Ergebnis (Tag 1)

### Gebaut und committed

| Commit | Beschreibung |
|---|---|
| Sprint 11.1 | Vertrieb-Seite Setup, Hero, Umleitung |
| Sprint 11.1-fix | Hook entfernt, Umleitung als Denver-Blau-Karten (dreispaltig) |
| Sprint 11.1-fix2 | Umleitung einspaltig mit Denver-Blau-Nummern (finale Version) |
| Sprint 11.2 | Branchenkompetenz + Themen mit HexagonBullets |
| Sprint 11-Test | Josefin Sans als Akzentschrift getestet |
| Revert | Josefin Sans entfernt, zurück zu Montserrat |
| docs | Design System v1.2 ins Repo |
| docs | Vier Cursor-Skills aktualisiert (Sprint 10–11 Learnings) |
| docs | CLAUDE.md aktualisiert (Sequenz-Karten, Farblogik, Container-Breiten) |

### SEO-Elemente Vertrieb (freigegeben)

| Element | Wert |
|---|---|
| H1 | Vertriebsberatung für den Lösungsvertrieb |
| Title-Tag | Vertriebsberatung für den Lösungsvertrieb \| Marcus Holzheimer |
| Meta-Description | Sie suchen eine Vertriebsschulung? Reden wir zuerst über Ihren Vertriebsprozess. Vertriebsberatung für komplexen B2B-Vertrieb — von der Strategie bis zur erfolgreichen Umsetzung. Deutschlandweit und international. |
| Primär-Keyword | Vertriebsberatung Lösungsvertrieb |
| Emotionaler Satz | Professioneller Vertrieb ist erlernbar. |

### Neue Design-Entscheidungen

| Entscheidung | Details |
|---|---|
| Sequenz-Karten | Neuer Kartentyp: einspaltig, border-l-4 Denver-Blau, shadow-sm, Nummern (text-2xl font-bold text-denver-blue). Für sequenzielle Argumentationsschritte. |
| Karten-Hierarchie | Jetzt 7 Typen (Sequenz-Karten als Rang 4 eingefügt) |
| Transition Hook Regel | Nicht standardmäßig einsetzen. Nur wenn Hero keinen starken Schluss hat. |
| Link-Styling Regel | Interne Querverweise als eigenständige Zeile, nicht in Fließtext einbetten. |
| Einleitungstext-Regel | Zwischen H2 und Listen immer ein bis zwei einleitende Sätze. |
| H2 Abschnitt 3 korrigiert | „Lösungsvertrieb – meine Kernkompetenz." (ohne „in technischen Unternehmen") |

### Dokumenten-Updates

| Dokument | Version | Was geändert |
|---|---|---|
| Design_System_MH3 | v1.1 → v1.2 | Statement Cards Sprint-8-Proportionen, Sequenz-Karten, Card-Hierarchie 7 Typen, Transition Hook Lernnotiz, Link-Styling Lernnotiz, Container-Breiten Vertrieb |
| section-bauen.md | aktualisiert | Sequenz-Karten in Hierarchie, Link-Styling Lernnotiz, Einleitungstext-Regel |
| subpage-bauen.md | aktualisiert | Transition Hook verschärft, Vertrieb-Variationen aktualisiert |
| text-einbauen.md | aktualisiert | H1-Regel differenziert (SEO-H1 hat Vorrang) |
| projekt-regeln.md | aktualisiert | Sprint 10–11 Lessons Learned |
| CLAUDE.md | aktualisiert | Sequenz-Karten, Farblogik, Container-Breiten Vertrieb |

---

## Offener Fix-Auftrag: Sprint 11.2-fix

Freigegeben, aber noch NICHT gebaut. Muss der erste Auftrag im neuen Chat sein.

### Abschnitt 3 (Branchenkompetenz) — drei Änderungen

1. **Branchen ergänzen** in Absatz 1: „Beratungsunternehmen" und „Institute" zur Branchenliste hinzufügen
2. **Quote bleibt nach Absatz 3** (nicht verschieben)
3. **Zwei Sätze NACH dem Quote einfügen:**
   „Genau deshalb ist mein Themenspektrum breiter, als die meisten Anfragen vermuten lassen. Wenn der Hebel im Geschäftsmodell liegt, arbeite ich mit Ihnen auch daran – mit erprobten Werkzeugen wie der Business Model Canvas (BMC) oder dem St. Galler Business Model Navigator mit 55+ Geschäftsmodellmustern."

### Abschnitt 4 (Themen) — zwei Änderungen

1. **Einleitungssätze** zwischen H2 und HexagonBullets einfügen (aus Schlussabsatz destillieren: „Was davon relevant ist, zeigt die Bedarfsanalyse.")
2. **Link „Manchmal ist die beste Vertriebs-Maßnahme ein Führungsworkshop"** aus dem Fließtext lösen, als eigenständige Zeile kürzer formulieren: „Mehr zum Thema Führung →"

---

## Noch zu bauende Abschnitte (Vertrieb-Seite)

| Abschnitt | Inhalt | Komponenten | Hintergrund |
|---|---|---|---|
| 5 | Wie ich arbeite (Methodik) | Text + Quote | weiß |
| 6 | Der Weg zur Zusammenarbeit | Prozessschritte (3 Schritte + Hinweis-Box) | #F5F5F5 |
| 7 | Fallbeispiele (3 Stück) | Praxis-Karten (Denver-Blau-Leiste) | weiß |
| 8 | Shopvote | Shopvote-Widget | #F5F5F5 |
| 9 | Kontakt | ContactSection (shared) | #F5F5F5 (intern) |

### Geplante Cursor-Auftrags-Aufteilung

| Block | Inhalt |
|---|---|
| Sprint 11.2-fix | Abschnitt 3 + 4 Korrekturen (oben beschrieben) |
| Sprint 11.3 | Abschnitt 5 (Methodik) + Abschnitt 6 (Zusammenarbeit) |
| Sprint 11.4 | Abschnitt 7 (Fallbeispiele) + Abschnitt 8 (Shopvote) + Abschnitt 9 (ContactSection) |

---

## Geparkter Transition Hook

Der Satz „Denn wer nach einer Schulung sucht, hat den richtigen Impuls – nur selten die passende Lösung." wurde aus dem Hero entfernt. Prüfen, ob er als Denver-Blau-Quote in Abschnitt 5 (Methodik) passt.

---

## Geparkte Themen (nach Vertrieb-Seite)

### Styleguide-Seite
- `/styleguide` (nicht in Navigation, nur Direktaufruf)
- Alle Komponenten mit Varianten auf einer Seite
- Vereinbart als eigener kleiner Sprint direkt nach der Vertrieb-Seite

### Design-Sprint (nach Fertigbau aller Seiten)

Drei Hebel identifiziert und von Marcus freigegeben:

1. **Micro-Interactions:** Scroll-getriggerte Einblendungen, dezente Animationen. Guidelines erlauben es bereits.
2. **Typografische Akzente:** Zweitschrift oder größere Größen an Schlüsselstellen. Josefin Sans getestet und revertiert — Ansatz richtig, Umsetzung braucht andere Lösung.
3. **Scrollytelling:** Visuelle Abwechslung zwischen Sections, asymmetrische Layouts, Vollbreite-Elemente.

Reihenfolge: Styleguide → Referenzseiten recherchieren (Architektur-Einzelbüros, Boutique-Strategieberatungen, Industriedesign-Studios, Premium-B2B-SaaS) → Prototypen auf echten Sections → Marcus entscheidet visuell → Ausrollen auf alle Seiten.

### AI-Lesbarkeit
- Prüfschicht für jede fertige Seite: Sind Antworten auf typische Fragen direkt im Text findbar?
- Genug semantische Ankerpunkte (wer, was, für wen, wo, seit wann)?
- Als Prüfpunkt in Seiten-Abschluss aufnehmen

### SVGs
- Marcus hat Material gesammelt, weiß aber noch nicht, wie er es zu passenden Elementen zusammenbaut
- Kann parallel reifen — wenn Marcus Beispiele zeigt, gemeinsam sparren

---

## Offene Hausaufgaben Marcus (fortgeschrieben)

- Shopvote-Reviews: 2–3 passende Zitate pro Seite identifizieren
- Foto-Session planen
- SVG-Hexagon-Komposition weiterentwickeln
- Design System v1.2 ins Project Knowledge hochladen (alte v1.1 entfernen)

---

## Lessons Learned Sprint 11 (Tag 1)

1. **Dreispaltige Karten verstärken Textlängen-Unterschiede.** Bei unterschiedlich langen Texten einspaltig testen.
2. **Sequenz ≠ Auswahl.** Drei gleichwertige Karten nebeneinander signalisieren „pick one", nicht „lies der Reihe nach." Nummern oder einspaltige Anordnung für Sequenz verwenden.
3. **Transition Hooks nicht standardmäßig einsetzen.** Wenn der Hero einen starken Schluss hat, ist ein Hook redundant.
4. **Schrifttests im Browser, nicht im Schriftmuster.** Die Wirkung neben realen Karten und Texten ist anders als im isolierten Vergleich.
5. **Zweitschrift als H1 braucht mindestens gleiche optische Gewichtung** wie die Standardschrift — sonst wirkt sie leiser statt mutiger.
6. **PDCA zwischen Sprints einplanen.** Die Retrospektive nach Sprint 10 hat drei Design-System-Lücken und vier Skill-Updates aufgedeckt, die sonst stillschweigend weitervererbt worden wären.

---

*Erstellt am 7. Mai 2026 nach Sprint 11, Tag 1.*
