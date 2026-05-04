# Skill: Section bauen — MH3 LearnCon® GmbH

> **Zweck:** Checkliste und verbindliche Regeln für jede neue Section auf einer Subpage oder der Startseite.
> **Wann lesen:** VOR jedem Cursor-Auftrag, der eine Section anlegt, umbaut oder stylt.
> **Ablage im Repo:** `.claude/skills/section-bauen.md`

---

## 1. Spacing (asymmetrisch — keine Ausnahmen)

| Element | Klassen | Begründung |
|---|---|---|
| Subpage-Sections (Abschnitte 2–8) | `pt-6 md:pt-8 pb-12 md:pb-16` | Divider nah am Farbwechsel, Luft nach dem Inhalt |
| Hero-Sections | `min-h-[60vh] py-12 md:py-16` | Nächste Section am unteren Bildschirmrand angeschnitten sichtbar |

**Nicht** symmetrisch anfangen und dann korrigieren — sofort asymmetrisch.

---

## 2. Hintergrund-Alternierung

| Regel | Umsetzung |
|---|---|
| Reihenfolge | Hero (weiß) → Abschnitt 2 (`bg-[#F5F5F5]`) → Abschnitt 3 (weiß) → usw. |
| Klasse setzen auf | Äußerstes `<section>`-Element, nicht auf innere Divs |
| Grau-Wert | Ausschließlich `bg-[#F5F5F5]` (kein gray-100, kein bg-brand-gray-light ohne Prüfung) |

---

## 3. Section-Divider

| Eigenschaft | Wert |
|---|---|
| Breite | 60px (`w-[60px]`) |
| Höhe | 2px (`h-[2px]`) |
| Farbe | `bg-orange` (#FF9B01) |
| Position | `mx-auto mb-6 md:mb-8`, zentriert |
| Accessibility | `aria-hidden="true"` |
| Platzierung | Nur an inhaltlichen Übergängen — **nicht** zwischen allen Sections |
| Ausnahme | ContactSection: kein oranger Divider — Denver-Blau-Linie ersetzt ihn |

Der Divider sitzt innerhalb der Section, nach dem oberen Padding. Deshalb ist asymmetrisches Padding (oben wenig) nötig.

---

## 4. Container-Breiten

| Abschnittstyp | Container | Beispiel |
|---|---|---|
| Hero | `max-w-7xl mx-auto px-4` | Voller visueller Impact |
| Strukturierte Layouts (Karten-Grids, Z-Pattern) | `max-w-6xl mx-auto px-4` | SituationCards, Themen, OfferCards |
| Lesezonen, Prozesse | `max-w-5xl mx-auto px-4` | Fließtext, Prozessschritte, Praxis-Karten |
| Kontakt (Shared Component) | `max-w-4xl` (äußerer), `max-w-3xl` (Karte) | Intern geregelt — keine Änderungen |

**Vor Container-Änderungen:** Immer den aktuellen Wert im Code inspizieren (`git grep max-w`).

---

## 5. Farblogik (verbindlich bei jeder Design-Entscheidung)

| Farbe | Perspektive | Verwendung |
|---|---|---|
| Orange (#FF9B01) | Leser-Perspektive | SituationCards (Orange-Leiste), HexagonBullets, Section-Divider, CTAs, Buttons, Akkordeon-Icons |
| Denver-Blau (#002244) | Marcus-Perspektive | Quotes, Praxis-Karten (Denver-Blau-Leiste), OfferCards (Border-Top), Prozessschritte, ContactSection-Linie, Footer-Linie, Statement Cards (Border) |

**Denver-Blau ist eine Linien- und Akzentfarbe, keine Flächenfarbe.** Kein Denver-Blau-Hintergrund auf Flächen.

**Farbsperre:** Keine neuen Farbwerte ohne explizite Freigabe von Marcus. Keine Tailwind-Standard-Farben (gray-100, gray-200 etc.) als Ersatz.

---

## 6. Typografie

| Regel | Umsetzung |
|---|---|
| Schrift | Montserrat, via `next/font` lokal (kein Google-Fonts-Aufruf) |
| Einheiten | rem-basiert, kein px für Schriftgrößen |
| Kein Italic | Nirgends. Keine Ausnahmen. |
| H1 | Genau eine pro Seite, 3rem / 800 |
| H2 | 2rem / 600, Abschnitts-Überschriften |
| Fließtext | 1rem / 400 |
| Quote | text-xl / font-medium |
| Kontrast | Orange niemals für Fließtext (Kontrast zu gering). Nur für große Überschriften (ab 18px bold), Buttons, Deko. |

---

## 7. Karten-Hierarchie (von stark nach schwach)

| Rang | Typ | Erkennungsmerkmal | Wann verwenden |
|---|---|---|---|
| 1 | SituationCards | shadow-md + Orange-Leiste links | Erkennungsmoment (Leser-Perspektive) |
| 2 | Praxis-Karten | shadow-md + Denver-Blau-Leiste links | Fallbeispiele (Marcus-Perspektive) |
| 3 | OfferCards | shadow-md + Denver-Blau Border-Top, klickbar | Angebote mit Weiterleitung |
| 4 | Themen-Karten | shadow-sm, kein Akzent | Scan-Listen |
| 5 | Akkordeon-Trigger | #E5E5E5 Füllung, kein Border | Interaktive Elemente |
| 6 | Statement Cards | border-[3px] Denver-Blau + orangener Offset-Schatten | Marken-Akzent (nur Startseite) |

Neue Karten-Typen nur nach Sparring mit Marcus.

---

## 8. Wiederverwendbare Komponenten (vor Neubau prüfen!)

| Komponente | Pfad | Einsatz |
|---|---|---|
| SituationCard | `src/components/SituationCard.tsx` | Situations-Beschreibungen auf allen Subpages |
| OfferCard | `src/components/OfferCard.tsx` | Angebots-Karten (Bootcamp, Community, Shop) |
| HexagonBullet | `src/components/icons/HexagonBullet.tsx` | Themen-Listen (10–12px, orange, filled) |
| ShopvoteBadge | `src/components/ShopvoteBadge.tsx` | Shopvote AllVotes-Grafik II auf jeder Subpage |
| ContactSection | `src/components/ContactSection.tsx` | Shared, nur `headline` + `subtext` als Props |
| HeroImagePlaceholder | `src/components/HeroImagePlaceholder.tsx` | Foto-Platzhalter bis echte Fotos vorliegen |

**Regel:** Keine neue Komponente bauen, wenn eine bestehende passt. Erst prüfen, dann entscheiden.

---

## 9. Prozessschritte (wiederverwendbar)

Für sequenzielle Abläufe („So kommen wir ins Gespräch"):

| Eigenschaft | Wert |
|---|---|
| Kreise | w-12 h-12 (Mobile) / w-16 h-16 (Desktop) |
| Kreis-Style | bg-white, border-[3px] border-denver-blue, shadow-[2px_2px_0px_0px_#FF9B01] |
| Zahl | text-denver-blue font-semibold text-xl |
| Verbindungslinie | w-0.5 bg-denver-blue, vertikal |
| Container | max-w-5xl |

---

## 10. Quote-Format

| Eigenschaft | Wert |
|---|---|
| Linie | border-l-4 border-denver-blue |
| Einrückung | ml-10 mr-8 pl-6 py-3 |
| Schrift | text-xl font-medium |
| Desktop | lg:whitespace-nowrap (einzeilig, Umbruch auf Mobile erlaubt) |
| Hintergrund | transparent |

---

## 11. Link-Styling

| Eigenschaft | Wert |
|---|---|
| Farbe | text-orange |
| Gewicht | font-semibold |
| Pfeil | → am Ende (mit Leerzeichen davor) |
| Hover | hover:text-denver-blue transition-colors |
| Unterstrich | keiner |

---

## 12. Button-Hover (projektweit, keine Ausnahmen)

Alle Buttons: `hover:bg-denver-blue hover:text-white hover:border-denver-blue`
Inline-Links: `hover:text-denver-blue`
Logo: kein Hover

---

## 13. Checkliste vor dem Commit

- [ ] Spacing asymmetrisch? (pt-6/8, pb-12/16)
- [ ] Hintergrund alterniert korrekt? (bg auf `<section>`)
- [ ] Section-Divider nur an inhaltlichen Übergängen?
- [ ] Container-Breite passend zum Abschnittstyp?
- [ ] Farblogik Orange/Denver-Blau eingehalten?
- [ ] Keine neuen Farbwerte eingeführt?
- [ ] Kein Italic?
- [ ] Bestehende Komponente genutzt statt neu gebaut?
- [ ] `aria-hidden="true"` auf dekorativen Elementen?
- [ ] pnpm build fehlerfrei?

---

*Erstellt am 4. Mai 2026 als Cursor-Skill für Sprint 9+.*
*Quellen: Design System v1.1, CLAUDE.md, Übergabe-Bausteine Sprint 4–8, Lessons Learned Sprint 7.*
