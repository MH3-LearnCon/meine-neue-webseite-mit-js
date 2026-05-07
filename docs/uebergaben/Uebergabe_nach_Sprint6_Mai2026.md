# Übergabe nach Sprint 6 — Design-Gesamtbild Führungsseite

**Datum:** 2. Mai 2026
**Letzter Commit:** `3a0b174` (Footer-Textfarben) — ggf. aktuellerer Commit nach Footer-Fix
**Branch:** main, gepusht zu origin/main
**Worktree:** sauber

---

## Sprint-6-Ergebnis

Sprint 6 hatte das Ziel, das Design-Gesamtbild der Führungsseite zu überarbeiten. Alle neun Abschnitte wurden visuell überprüft und verbessert. Drei neue Design-Elemente wurden definiert und in CLAUDE.md dokumentiert.

---

## Erledigte Commits (chronologisch)

| Commit | Beschreibung |
|---|---|
| `40b7aa1` | Abschnitt 2 Container-Breite auf max-w-6xl |
| `7124a49` | Abschnitte 4+7 Container-Breite auf max-w-6xl |
| `a60d2a2` | Abschnitt 3 Zwei-Spalten-Layout mit Foto-Platzhalter und Quote |
| `c1ccf91` | Abschnitt 3 Foto-Alignment auf items-start, Quote-Dopplung entfernt |
| `f639546` | Abschnitt 3 Container-Breite auf max-w-6xl |
| `2938dfc` | Abschnitt 3 Quote gekürzt, Absatz hochgezogen, Foto schmaler |
| `cd0c636` | Abschnitt 4 Themen zweispaltig mit Karten-Rahmen |
| `87d89a3` | Abschnitt 4 Themen-Karten mit shadow-sm und #D9D9D9 Border |
| `8d774a1` | Abschnitt 4 HexagonBullet-Alignment auf items-start |
| `bfe04b0` | Abschnitt 4 HexagonBullet vertikaler Versatz zur Textzeile |
| `262598b` | Themen-Karten-Design in CLAUDE.md dokumentiert |
| `58eee5f` | Abschnitt 5 Prozessschritte-Design mit Denver-Blau-Kreisen und Verbindungslinie |
| `7c16f68` | Abschnitt 5 Feinschliff – Schatten kleiner, Gap größer, Container max-w-5xl |
| `6afc8bd` | Abschnitt 5 Kreise 64px Desktop, Mobile-Alignment |
| `7f39334` | Abschnitt 5 Gap verdoppelt, Alignment zurück auf items-center |
| `6ab7ce9` | Transition Hook Abschnitt 2, Praxis-Karten statt Akkordeon Abschnitt 6 |
| `c2abca9` | Transition Hook stärker, Praxis-Karten + Prozessschritte in CLAUDE.md |
| `9b1e9ec` | Abschnitt 7 OfferCards eingerückt, shadow-md, klickbar, Link-Styling |
| `89deb7b` | OfferCard Titel bold, EAZEE Trademark hochgestellt |
| `17483e6` | Abschnitt 8 Shopvote zweispaltig, Zusatztext und Link |
| `69fed71` | Shopvote-Link korrigiert, Widget größer |
| `dce2b6c` | Shopvote Widget auf 125% skaliert |
| `f0e0171` | Shopvote Widget auf 150% skaliert, vertikal zentriert |
| Diverse | Shopvote Widget origin-center, Mobile-Skalierung, nowrap-Fixes |
| `d0520eb` | Abschnitt 8 Kennzahl über 65 Bewertungen, Mobile-Skalierung 125% |
| `1cbca09` | Abschnitt 8 Einleitungssatz und Quote Tue Gutes |
| `49438a7` | Abschnitt 8 Tue Gutes in Einleitung, Kennzahl als Quote |
| `522a9aa` | Abschnitt 8 Quote nowrap, Textbreite 60%, Widget Mobile zentriert |
| `0b4c77b` | Quote/Überschrift nowrap nur Desktop, Widget Mobile zentriert |
| `3a0b174` | ContactSection Textfarbe kräftiger, Footer Denver-Blau Trennlinie |
| letzter | Footer-Textfarben auf brand-text für bessere Lesbarkeit |

---

## Neue Design-Elemente (in CLAUDE.md dokumentiert)

### 1. Themen-Karten (sekundäre Container)
- bg-white, border border-brand-gray-mid-light (#D9D9D9), shadow-sm, rounded-lg
- px-4 py-3, kein Hover, kein Orange-Akzent
- HexagonBullet: items-start + mt-1.5
- Grid: grid-cols-1 md:grid-cols-2 gap-4
- Hierarchie: unterhalb SituationCards, oberhalb Akkordeon

### 2. Praxis-Karten (Fallbeispiel-Container)
- SituationCard-Basis: bg-white, border #D9D9D9, shadow-md, rounded-lg, p-6 md:p-8
- Akzent: border-l-4 border-denver-blue (statt Orange bei SituationCards)
- Farblogik: Denver-Blau = Marcus-Perspektive, Orange = Leser-Perspektive
- Layout: einspaltig, space-y-6

### 3. Prozessschritte mit Verbindungslinie
- Kreise: w-12/w-16, bg-white, border-[3px] border-denver-blue, shadow-[2px_2px_0px_0px_#FF9B01]
- Zahl: text-denver-blue font-semibold text-xl
- Verbindungslinie: w-0.5 bg-denver-blue
- items-center, gap-8 md:gap-16, max-w-5xl

---

## Design-Entscheidungen aus Sprint 6

| Entscheidung | Begründung |
|---|---|
| Container-Breiten differenziert: max-w-4xl bis max-w-6xl | Strukturabschnitte breit, Lesezonen schmaler |
| Denver-Blau als Linien-/Akzentfarbe, nicht als Fläche | Footer bleibt hell, kein Denver-Blau-Hintergrund |
| Farblogik Orange vs. Denver-Blau | Orange = Leser-Perspektive, Denver-Blau = Marcus-Perspektive |
| Akkordeon in Abschnitt 6 durch offene Karten ersetzt | Drei kurze Beispiele rechtfertigen kein Verstecken |
| Erstes Akkordeon-Element offen (Regel für zukünftige Seiten) | UX-Pattern: Interaktion sichtbar machen |
| Transition Hook als Textmuster, kein Design-Element | Kein eigener Container, nur text-xl font-medium zentriert |
| Kein CTA nach SituationCards | Zu früh — Marcus hat noch nichts gezeigt |
| Shopvote Widget extern skaliert (scale-150 Desktop) | Widget-Größe nicht nativ steuerbar |
| Footer-Trennlinie in Denver-Blau, seitenbreit | Klarer Abschluss des Inhalts |
| OfferCards komplett klickbar | next/link-Wrapper, hover:bg-[#F5F5F5] |

---

## Offene Punkte für nachfolgende Sprints

### Design-Feinschliff Führungsseite
- Shopvote Widget Mobile-Zentrierung: Feinschliff bei echtem Widget-Typ prüfen
- Section-Abstände (vertikale Rhythmen) als Querschnittsthema
- Shopvote-Zitate mit Datum und ShopVoter-ID (Marcus wählt passende Reviews aus)
- Foto-Platzhalter ersetzen (Marcus liefert echte Fotos)
- Kontakt-Section Hintergrundfarbe: auf Startseite #F5F5F5, auf Führungsseite weiß — konsistent machen

### Startseite
- Statement Cards (fehlen komplett, Shadow-Tokenisierung R7 offen)
- Link-Styling fett + Pfeil konsistent über alle Seiten
- Container-Breiten-Konvention von Führungsseite übertragen (nach visueller Prüfung)

### Querschnitt
- Design-System-Page (/design-system) als Living Style Guide
- Cookie-Consent für Shopvote-Widget (Launch-Sprint)
- Akkordeon-Token R9: hinfällig für Führungsseite, relevant für Simulation und Über-mich
- R3 (Footer Denver-Blau): bewusst verworfen — Denver-Blau ist Akzentfarbe, keine Fläche
- Transition Hooks auf allen Subpages prüfen
- Next.js Update (eigenes Arbeitspaket)

### Hausaufgaben Marcus
- Shopvote-Reviews durchgehen: 2–3 passende Zitate für die Führungsseite identifizieren
- Foto-Session planen (Abschnitt 3 Platzhalter, Hero-Platzhalter)
- SVG-Hexagon-Komposition (seit Sprint 4 offen)

---

## Lessons Learned Sprint 6

1. **Design ist iterativ:** Kein Mockup ersetzt den visuellen Test auf localhost. Mockups helfen bei der Grundstruktur, Feinschliff passiert im Browser.

2. **Externe Widgets sind nicht kontrollierbar:** Shopvote-Widget hat eigene interne Breite/Höhe. CSS-Transform (scale) ist der pragmatische Workaround, hat aber Grenzen bei der Zentrierung.

3. **Farblogik vor Farb-Einsatz:** Bevor eine Farbe in einem neuen Kontext eingesetzt wird, prüfen, ob das zur bestehenden Farblogik passt. Denver-Blau gefüllte Kreise wären ein Bruch gewesen.

4. **Keine neuen Farben ohne Grund:** #CCCCCC, gray-100 und andere „fast passende" Werte wurden bewusst abgelehnt. Bestehende Palette nutzen.

5. **Cursor-Aufträge brauchen den Nach-dem-Coden-Block:** War zu Beginn des Sprints vergessen, jetzt in Memory festgeschrieben.

6. **Projektdokumente als Dateien:** Nicht als Markdown im Chat ausgeben. In Memory festgeschrieben.

7. **Design-Variablen statt „Tokens":** Begriffstrennung — Design-Variablen (Farben/Abstände) vs. Token (Claude-Verbrauchseinheit).

8. **Tapeten-Regel beachten:** Ein Thema nach dem anderen, Bestätigung abwarten.

---

## Chat-Eröffnung für den Folge-Chat

```
[CHAT-START — bitte vollständig lesen, bevor du irgendetwas tust]

PFLICHTLEKTÜRE in dieser Reihenfolge:
1. Leitfaden_Zusammenarbeit_MH3_v3_2.md
2. Statusbogen_R-Bloecke_April2026.md (aktualisiert nach Sprint 6)
3. Uebergabe_nach_Sprint6_Mai2026.md
4. Chat_Eroeffnung_Template.md
5. Fuehrung_Texte_MH3_v1.md
6. Webseiten_Konzept_MH3_v1_2.md
7. CLAUDE.md

AKTUELLER STAND:
* Letzter Commit: [COMMIT-HASH hier eintragen]
* Branch: main, gepusht zu origin/main, Worktree sauber
* Sprint 6 komplett abgeschlossen (Design-Gesamtbild Führungsseite)
* Sprint 7 startet jetzt

AUFGABE DIESES CHATS: [Aufgabe hier definieren]

WERKZEUG-PLAN:
* Sparring und Designentscheidungen in DIESEM Chat
* Cursor-Aufträge als kopierbare Blöcke formulieren

VERHALTEN: [Standard-Block aus Chat_Eroeffnung_Template.md übernehmen]

Modell: Opus 4.6
```

---

*Erstellt am 2. Mai 2026 nach Abschluss Sprint 6.*
