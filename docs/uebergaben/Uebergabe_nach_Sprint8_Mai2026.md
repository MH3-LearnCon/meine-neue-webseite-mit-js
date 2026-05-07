# Übergabe-Knowledge-Baustein — nach Sprint 8

**Datum:** 3. Mai 2026
**Letzter Commit:** `aebd8fc` (feat: Foto 1:2, Section-Divider, Link-Styling konsistent)
**Branch:** main, gepusht zu origin/main, Worktree sauber

Dieser Baustein dokumentiert den Stand nach Sprint 8 (Startseite Gesamtbild). Er dient als Einstiegsgrundlage für Sprint 9.

---

## Sprint-8-Ergebnis

Sprint 8 hatte das Ziel, die Startseite visuell auf das Niveau der Führungsseite zu bringen: Section-Spacing, Farbwechsel, Statement Cards im Z-Pattern, Kurzprofil-Foto, Section-Divider und Link-Styling. Alle Kernziele sind erreicht, ein Feinschliff-Punkt (Foto-Alignment) ist offen.

---

## Erledigte Commits (chronologisch)

| Commit | Beschreibung |
|---|---|
| `c335fa4` | Section-Spacing asymmetrisch pt-6/8 pb-12/16 + Hero min-h-[60vh] (Sprint 8.1) |
| `f7fb557` | Hintergrund-Alternierung weiß/grau auf allen Sections (Sprint 8.2) |
| — | ContactSection outerClassName geprüft — war bereits sauber, kein Commit nötig (Sprint 8.3) |
| `441878e` | Z-Pattern mit Statement Cards + Kurzprofil-Foto eingebaut (Sprint 8.4) |
| `0e7de7e` | Statement Card Proportionen: border 3px, shadow 4px, text-xl + Container max-w-6xl (Sprint 8.5) |
| `c8a9ab8` | Statement Cards lg:aspect-square, font-semibold, Mobile CTA-Reihenfolge (Sprint 8.6) |
| `3ca5ca1` | Grid 1:3 (lg:grid-cols-4), Textfarbe text-brand-text, vertikale Zentrierung (Sprint 8.7) |
| `aebd8fc` | Foto lg:grid-cols-3, orangene Section-Divider, Link-Styling konsistent (Sprint 8.8) |

---

## Verbindliche Design-Entscheidungen aus Sprint 8

### Statement Cards (Startseite, finale Spezifikation)

| Eigenschaft | Wert |
|---|---|
| Hintergrund | bg-white |
| Border | border-[3px] border-denver-blue |
| Schatten | shadow-[4px_4px_0px_0px_#FF9B01] |
| Border-Radius | rounded-lg |
| Schriftgröße | text-lg lg:text-xl |
| Schriftgewicht | font-semibold (600) |
| Schriftfarbe | text-denver-blue |
| Text-Ausrichtung | zentriert (flex items-center justify-center) |
| Format Desktop | lg:aspect-square |
| Format Mobile | kein erzwungenes Seitenverhältnis, p-6 |
| Hover | keiner |

### Statement-Card-Texte (Startseite)

| Section | Text |
|---|---|
| Führung | „Gute Führung braucht Sparring, keine Schonhaltung." |
| Karriere | „Nicht mehr Bewerbungen. Sondern der unterschriftsreife Vertrag." |
| Vertrieb | „Struktur schlägt Intuition. Prozess schlägt Zufall." |
| Simulation | „Führung und Teamdynamik erleben statt besprechen." |

### Z-Pattern (Startseite)

| Section | Grid | Links | Rechts |
|---|---|---|---|
| Führung | lg:grid-cols-4 (1:3) | Statement Card | Text + CTA |
| Karriere | lg:grid-cols-4 (1:3) | Text + CTA | Statement Card |
| Vertrieb | lg:grid-cols-4 (1:3) | Statement Card | Text + CTA |
| Simulation | lg:grid-cols-4 (1:3) | Text + CTA | Statement Card |
| Drei Perspektiven | lg:grid-cols-3 (1:2) | Foto | Text + CTA |

Mobile: Text immer zuerst → Statement Card / Foto → CTA-Link.

### Kurzprofil-Foto

| Eigenschaft | Wert |
|---|---|
| Datei | `/Offen_laecheln.png` |
| Format | PNG mit transparentem Hintergrund (Freisteller) |
| Alt-Text | „Marcus Holzheimer, Berater für Führung, Karriere und Vertrieb" |
| Styling | rounded-lg, w-full h-auto, kein Rahmen, kein Schatten |

### Section-Divider (Startseite)

| Eigenschaft | Wert |
|---|---|
| Breite | 60px |
| Höhe | 2px |
| Farbe | Orange (#FF9B01, bg-orange) |
| Position | zentriert (mx-auto) |
| Abstand nach unten | mb-6 md:mb-8 |
| Platzierung | In allen Content-Sections (nicht Hero, nicht ContactSection) |
| Accessibility | aria-hidden="true" |

### Link-Styling (bestätigt)

| Eigenschaft | Wert |
|---|---|
| Farbe | text-orange |
| Gewicht | font-semibold |
| Pfeil | → am Ende (mit Leerzeichen davor) |
| Hover | hover:text-denver-blue transition-colors |
| Unterstrich | keiner |

### Container-Breiten (Startseite, aktualisiert)

| Abschnitt | Container | Begründung |
|---|---|---|
| Hero | max-w-7xl | Voller visueller Impact (unverändert) |
| 4 Situations-Sections | max-w-6xl | Z-Pattern mit Statement Card braucht Breite |
| Drei Perspektiven | max-w-6xl | Z-Pattern mit Foto |
| Shopvote | max-w-4xl | Zentrierter Content, kein Z-Pattern |
| ContactSection | intern geregelt | Shared Component |

---

## Aktualisierte Dokumentation (nach Sprint 8 zu erledigen)

| Dokument | Status | Was fehlt |
|---|---|---|
| CLAUDE.md | Muss ergänzt werden | Statement Card Spezifikation, Z-Pattern Startseite, Section-Divider |
| Design System | v1.2 fällig | Statement Cards als 6. Karten-Typ, Section-Divider, Container-Breiten Startseite |
| Memory | Muss aktualisiert werden | Statement Card Proportionen (alt: 6px/8px → neu: 3px/4px) |

---

## Was in Sprint 8 NICHT gemacht wurde (bewusst)

- **Foto vertikale Zentrierung:** Das Kurzprofil-Foto endet unterhalb des CTA-Links und wirkt nicht mittig zum Text. Feinschliff-Fix für Sprint 9.
- **Shopvote-Widget:** Platzhalter steht weiterhin. Widget-Integration ist ein eigenes Thema (Cookie-Consent).
- **Mobile-Gesamttest:** Desktop wurde iterativ geprüft, Mobile nur punktuell. Systematischer Mobile-Test steht aus.
- **Design System v1.2 und CLAUDE.md-Update:** Ergänzungen sind vorbereitet, müssen ins Repo committed werden.

---

## Offene Punkte für nachfolgende Sprints

### Sprint 9 — Feinschliff + Querschnitt
- Foto-Alignment in Kurzprofil-Section korrigieren (vertikal mittig)
- CLAUDE.md und Design System v1.2 ins Repo committen
- Cookie-Consent für Shopvote-Widget
- Mobile-Gesamttest (Startseite + Führungsseite)
- Transition Hooks auf Startseite prüfen
- Shopvote-Zitate mit Datum und ShopVoter-ID

### Hausaufgaben Marcus (weiterhin offen)
- Shopvote-Reviews durchgehen: 2–3 passende Zitate für die Führungsseite identifizieren
- Foto-Session planen (Führungsseite Abschnitt 3 Platzhalter)
- SVG-Hexagon-Komposition (seit Sprint 4 offen)

---

## Lessons Learned Sprint 8

1. **Statement Cards iterativ entwickeln:** Vier Iterationen (8.4–8.7) waren nötig, um Border, Shadow, Schrift und Grid-Verhältnis richtig zu kalibrieren. Die ursprünglichen Vor-Crash-Werte (6px Border, 8px Shadow, 32px Schrift) waren für das Z-Pattern auf der Startseite zu dominant. Finale Werte: 3px/4px/text-xl. Für Subpages sofort mit den finalen Werten starten.

2. **Grid-Verhältnis hängt vom Inhalt ab:** Statement Cards (grafischer Akzent) brauchen 1:3, ein Personenfoto braucht 1:2. Das ist kein Fehler, sondern bewusste Differenzierung.

3. **Textfarbe explizit prüfen:** Die Fließtext-Farbe war in den Situations-Sections ein helleres Grau statt Anthrazit (#222222). Beim Aufbau neuer Sections immer `text-brand-text` explizit setzen.

4. **Mobile-Reihenfolge = Lesefluss:** Die natürliche Reihenfolge auf Mobile ist H2 → Text → Card → CTA. Die Card verstärkt die Botschaft, der CTA schließt ab. Card nach dem CTA wirkt wie ein Nachtrag.

5. **Section-Divider nur an Farbwechseln:** Die orangenen 60px-Linien markieren den Beginn einer neuen Section. Sie ersetzen keinen anderen Akzent (die ContactSection hat ihre eigene Denver-Blau-Linie).

---

*Erstellt am 3. Mai 2026 nach Abschluss Sprint 8.*
