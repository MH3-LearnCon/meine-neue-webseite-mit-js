# Übergabe-Knowledge-Baustein — nach Sprint 10

**Datum:** 5. Mai 2026
**Letzter Commit:** Sprint 10-polish4 (Prozessschritte Container auf max-w-6xl)
**Branch:** main, gepusht zu origin/main

Dieser Baustein dokumentiert den Stand nach Sprint 10. Er dient als Einstiegsgrundlage für Sprint 11 (Vertrieb-Seite oder nächstes Ziel).

---

## Sprint-10-Ergebnis

Sprint 10 hatte ein Ziel: Die Karriere-Seite komplett aufbauen. Dieses Ziel ist erreicht. Die Seite hat 9 Abschnitte und ist die zweite vollständige Subpage nach der Führungsseite. Zusätzlich wurde die ContactSection als seitenübergreifende Komponente vereinheitlicht.

---

## Erledigte Commits (chronologisch)

| Commit | Beschreibung |
|---|---|
| `fb4c7ed` | Karriere-Seite Setup, Hero, SituationCards, Transition Hook (Sprint 10.1) |
| `d84e03f` | Karriere Hero zweispaltig, Transition Hook korrigiert (Sprint 10.1-fix) |
| `012c5ac` | Karriere Abgrenzung mit Quote + Themen-Karten (Sprint 10.2) |
| — | Karriere OfferCards + Prozessschritte (Sprint 10.3) |
| — | Karriere OfferCards auf zwei Karten reduziert, Text gekürzt (Sprint 10.3-fix) |
| — | Karriere H2 OfferCards + Gut-zu-wissen-Box Design (Sprint 10.3-fix2) |
| — | Karriere Fallbeispiele, Shopvote, ContactSection (Sprint 10.4) |
| — | ContactSection Text vereinheitlicht, kostenfrei ergänzt, Breite angepasst (Sprint 10.4-fix) |
| — | Diverse Polish-Commits (Box-Ausrichtung, Container-Breite) |

---

## Seitenübergreifende Änderungen

### ContactSection (betrifft Startseite, Führung, Karriere)

| Eigenschaft | Vorher | Nachher |
|---|---|---|
| Überschrift | Variierte pro Seite | „Sprechen wir miteinander." (überall gleich) |
| Text | Variierte pro Seite | Einheitlicher Text mit Kennenlerngespräch-Beschreibung |
| Neuer Satz | — | „Das Kennenlerngespräch ist kostenfrei und unverbindlich." |
| Breite | max-w-3xl/4xl (zu schmal) | max-w-5xl/6xl (passend zum Seitenfluss) |
| Props | headline/subtext als Props | Fest eingebaut, keine Props mehr |

---

## Verbindliche Design-Entscheidungen aus Sprint 10

### Seitenübergreifende Regeln (NEU)

| Regel | Beschreibung |
|---|---|
| Hero-Muster Subpages | H1 (SEO-keyword-optimiert) → Emotionaler Satz (orange, visuell abgesetzt) → Fließtext. Gilt für alle Subpages. |
| Title-Tag-Muster Subpages | [Primär-Keyword] – [Abgrenzungsaussage] \| Marcus Holzheimer |
| Formate-H2-Muster | „[Thema] – auch [Relation]." (z.B. „Klarheit gewinnen – auch schon vor dem Erstgespräch.") |
| ContactSection | Eine Komponente, ein Text, überall. Keine seitenspezifischen Props. |

### Karriere-Seite spezifisch

| Eigenschaft | Wert |
|---|---|
| URL | /karriere |
| Title-Tag | Karriereberatung für Fach- und Führungskräfte – Strategie statt Lebenslauf \| Marcus Holzheimer |
| H1 | Karriereberatung für Fach- und Führungskräfte |
| Emotionaler Satz | Karriere ist kein Zufall – Karriere ist eine Entscheidung. |
| SituationCards | 4 Stück, 2×2-Grid, offen (kein Akkordeon) |
| Transition Hook | „Wenn Sie sich in einer dieser Situationen wiederfinden — dann lohnt sich ein Gespräch." |
| Quote (Abschnitt 3) | „Viele Karriereberater:innen starten beim Lebenslauf. Ich starte beim Menschen." — Variante B (mitten im Text) |
| OfferCards | 2 Karten (0-Euro-Kurs + „Finde dein Was"), NICHT 3. Einzelberatung bewusst entfernt. |
| Gut-zu-wissen-Box | Orange-Linie links, bg-white, text-base, text-brand-text |
| Prozessschritte | 3 Schritte (Kennenlerngespräch → Klarer Plan → Umsetzung) |
| Fallbeispiele | 3 Praxis-Karten, Denver-Blau-Leiste links, einspaltig |

### „Denn Hoffnung ist keine Strategie."

Dieser Satz wurde bewusst von der Karriere-Seite gestrichen. Der Gedanke steckt implizit im Hero-Statement „Karriere ist kein Zufall – Karriere ist eine Entscheidung."

---

## Was in Sprint 10 NICHT gemacht wurde (bewusst)

- **Dreizeilige H1:** Bleibt auf der Watchlist für den Foto-Sprint — wird sich mit dem echten Foto ändern.
- **Box/Schlussabsatz-Breitenausrichtung:** Vier Polish-Versuche. Ergebnis akzeptabel, aber nicht perfekt. Die rechte Kante der Gut-zu-wissen-Box ist etwas breiter als die Prozessschritt-Texte. Als offenen Punkt notiert.
- **Führungsseite Title-Tag korrigieren:** „Führung | Marcus Holzheimer" → sollte sein: „Sparringspartner für Führungskräfte – Beratung statt Coaching | Marcus Holzheimer". Separater Mini-Auftrag.
- **Führungsseite Hero-Muster nachrüsten:** Emotionaler Satz unter SEO-H1 ergänzen. Separater Auftrag.
- **SEO-Strategie Vertrieb-H1 korrigieren:** „Vertriebsberatung für technische Unternehmen" ist zu eng. Muss auf Lösungsvertrieb / komplexen B2B-Vertrieb erweitert werden.
- **Design System v1.2:** Wird nach der Karriere-Seite erstellt — jetzt fällig.
- **CLAUDE.md-Update:** Ebenfalls jetzt fällig.

---

## Offene Punkte (fortgeschrieben)

### Hausaufgaben Marcus (seit Sprint 4/6 offen)
- Shopvote-Reviews durchgehen: 2–3 passende Zitate pro Seite identifizieren
- Foto-Session planen (Hero-Platzhalter auf Führung + Karriere, Abschnitt 3 Platzhalter)
- SVG-Hexagon-Komposition (seit Sprint 4 offen)

### Nacharbeiten aus Sprint 10 (seitenübergreifend)
- Führungsseite: Title-Tag auf SEO-Version korrigieren
- Führungsseite: Emotionalen Satz unter H1 ergänzen (Hero-Muster)
- SEO-Strategie: Vertrieb-H1 inhaltlich korrigieren (Lösungsvertrieb statt technische Unternehmen)
- Design System v1.2 erstellen (Sprint-10-Entscheidungen einarbeiten)
- CLAUDE.md aktualisieren (neue Regeln, ContactSection-Änderung)

### Querschnitt (nach Karriere-Seite, fortgeschrieben)
- Cookie-Consent für Shopvote-Widget (Launch-Sprint)
- Mobile-Gesamttest Startseite + Führungsseite + Karriereseite
- Akkordeon-Token R9 (relevant für Simulation und Über-mich)

---

## Lessons Learned Sprint 10

1. **Hero-Layout im Auftrag visuell mitdenken:** Der erste Karriere-Hero hatte kein Foto und volle Breite — ein Fehler, den ein visueller Abgleich mit der Führungsseite VOR dem Auftrag verhindert hätte.
2. **Transition Hooks müssen logische Brücken sein:** „Denn Hoffnung ist keine Strategie." war ein Statement, keine Transition. Die Führungsseite als Referenz für Hook-Texte nutzen.
3. **Dritte OfferCard (Einzelberatung) kannibalisiert die ContactSection:** Wenn beide denselben CTA haben, wird einer überflüssig. Besser: Information in der Karte, Aktion in der ContactSection.
4. **ContactSection muss überall gleich sein:** Verschiedene Texte pro Seite schaffen Inkonsistenz und Wartungsaufwand. Eine Komponente, ein Text.
5. **Container-Breiten vereinheitlichen:** max-w-5xl neben max-w-6xl erzeugt sichtbare Sprünge zwischen Sektionen. Auf Subpages durchgängig max-w-6xl verwenden.
6. **Cursor-Context bei 80 %: Neue Session starten.** Ab 80 % Context-Verbrauch verdrängt Cursor ältere Informationen. Neue Session = voller Context für Skills und CLAUDE.md.
7. **Port-Konflikte einplanen:** `npx kill-port 3000` als Standard-Schritt vor `pnpm dev` in den Nach-dem-Coden-Block aufnehmen.

---

*Erstellt am 5. Mai 2026 nach Abschluss Sprint 10.*
