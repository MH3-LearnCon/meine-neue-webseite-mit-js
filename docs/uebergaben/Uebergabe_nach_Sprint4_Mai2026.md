# Übergabe-Knowledge-Baustein — nach Sprint 4

**Datum:** 1. Mai 2026
**Letzter Commit:** `90cd8c8` ("fix(fuehrung): Link-Text Anführungszeichen korrigiert")
**Branch:** main, gepusht zu origin/main, Worktree sauber (lokale Änderungen an CLAUDE.md und docs/* nicht committed — bewusst)

Dieser Baustein dokumentiert den Stand nach Sprint 4 (Führungsseite Abschnitte 3–5). Er dient als Einstiegsgrundlage für Sprint 5.

---

## Stand auf main (Sprint 4)

```
90cd8c8 fix(fuehrung): Link-Text Anführungszeichen korrigiert
e75efc4 feat(fuehrung): Abschnitt 5 – Der Weg zur Zusammenarbeit mit Schritt-Kreisen (Sprint 4, R12)
bfe2369 feat(fuehrung): Abschnitt 4 – Themen mit HexagonBullets (Sprint 4, R10)
a3ec691 feat(fuehrung): Abschnitt 3 – Wie ich arbeite (Sprint 4)
bda7ea4 chore: Dev-Stub-Page /dev/situation-card entfernen
```

---

## Erledigt in Sprint 4

| Commit | Inhalt |
|---|---|
| `a3ec691` | Abschnitt 3 „Wie ich arbeite" — reine Lesezone, fünf Fließtext-Absätze, Link zu /kein-coaching |
| `bfe2369` | Abschnitt 4 „Themen" — sieben Einträge mit HexagonBullet-Komponente (R10 abgeschlossen), Einleitungs- und Abschluss-Absatz |
| `e75efc4` | Abschnitt 5 „Der Weg zur Zusammenarbeit" — drei Schritte mit nummerierten Outline-Kreisen (R12), Abschluss-Absatz |
| `90cd8c8` | Fix: Anführungszeichen im Link-Text zu /kein-coaching korrigiert |

Sektions-Trennlinien (R12) zwischen allen neuen Abschnitten: 60px × 2px, `bg-orange`.

---

## Verbindliche Designentscheidungen aus Sprint 4

- **Sektions-Trennlinie:** 60px breit, 2px hoch, `bg-orange`, zentriert, am Beginn jeder neuen Section
- **Token-Hinweis:** `bg-brand-orange` existiert nicht im Projekt — korrekter Token ist `bg-orange` (= #FF9B01)
- **HexagonBullet-Import:** `@/components/icons/HexagonBullet` (nicht im Komponenten-Root)
- **Hintergrund-Alternierung bestätigt:** Abschnitt 2 weiß → Abschnitt 3 weiß → Abschnitt 4 `bg-brand-gray-light` → Abschnitt 5 weiß. Hinweis: Abschnitt 2 und 3 haben beide weißen Hintergrund — Alternierung beginnt erst ab Abschnitt 3→4
- **Container-Breite Abschnitte 3–5:** `max-w-4xl` (von Abschnitt 2 übernommen). Gesamtabstimmung auf Hero-Breite in Sprint 6

---

## Offene Design-Themen für Sprint 6 (Gesamtbild)

- **Container-Breiten:** Alle Abschnitte auf Hero-Breite (`max-w-7xl`) prüfen, insbesondere Abschnitt 2 und 4
- **Schritt-Kreise:** Aktuell Outline (orange Border, weiß gefüllt). Design-Alternativen testen: gefüllt, Denver-Blau-Akzent, Schatten-Variante
- **Foto in Abschnitt 3:** Platzhalter für Foto rechts neben Fließtext (2-Spalten-Layout). Foto-Strategie ist Marcus' Hausaufgabe
- **Quote/Akzent in Abschnitt 3:** Marcus erinnert sich an eine geplante Quote in der Textmitte — im Sprint-6-Sparring klären
- **Link-Styling Subpages:** Einheitliches Pattern definieren (fett + Pfeil, wie auf Startseite). Aktuell nur schlichter Textlink in Orange
- **Abschnitt 4 Themen-Layout:** Zweispaltige Variante testen (aktuell einspaltig)
- **Statement Cards Startseite:** Fehlen noch — eigener Scope, nicht Teil der Führungsseite-Sprints

---

## Lessons Learned aus Sprint 4

- **Dev-Server nach Build neu starten:** Jeder Cursor-Prompt muss mit `pnpm dev` enden, sonst ist localhost:3000 nicht erreichbar. Marcus hat keine Möglichkeit, das selbst zu erkennen oder zu beheben
- **`git add -A` vermeiden** wenn lokale Änderungen/Untracked außerhalb des Sprint-Scopes existieren. Cursor hat korrekt nur `src/app/fuehrung/page.tsx` gestaged
- **Link-Texte aus Quelldokumenten prüfen:** Anführungszeichen-Verschachtelung (äußere „" um innere „") führte zu doppelter Quotierung auf der Seite

---

## Nächste Schritte

### Sprint 5 — Führungsseite vervollständigen
Vier verbleibende Content-Sektionen aufbauen (reiner Inhalt, keine Design-Optimierung):
1. Abschnitt 6: Kurzfallbeispiele (Texte in Fuehrung_Texte_MH3_v1.md)
2. Abschnitt 7: Bootcamp und Community-Teaser
3. Abschnitt 8: Shopvote
4. Abschnitt 9: ContactSection

### Sprint 6 — Design-Gesamtbild Führungsseite
Container-Breiten, Schritt-Kreise, Foto/Akzente in Abschnitt 3, Link-Styling — alles in einer Runde am vollständigen Screenshot.

### Separat (eigener Scope)
- Statement Cards Startseite
- Akkordeon-Einsatz (FuehrungAccordion-Salvage vorhanden, R9 Hex-Werte offen)