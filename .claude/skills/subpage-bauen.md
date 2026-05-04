# Skill: Subpage bauen — MH3 LearnCon® GmbH

> **Zweck:** Blueprint für den Aufbau einer kompletten Subpage. Die Führungsseite ist die Referenz-Implementierung.
> **Wann lesen:** VOR dem ersten Cursor-Auftrag für eine neue Subpage.
> **Abhängigkeit:** `section-bauen.md` (für Einzel-Section-Regeln)
> **Ablage im Repo:** `.claude/skills/subpage-bauen.md`

---

## 1. Grundprinzip: Subpages ≠ Startseite

Subpages sind **Persuasion-Seiten** (erkennen → verstehen → handeln). Die Startseite ist ein Verteiler mit Z-Pattern und Statement Cards. Das Z-Pattern / Statement-Card-Layout auf Subpages zu übertragen ist ein Kategoriefehler.

Subpages nutzen stattdessen **Lesezonen mit eingebetteten strukturellen Akzenten** — Fließtext, Karten, Quotes und Prozessschritte im Wechsel.

---

## 2. Standard-Abschnittsfolge (Führungsseite als Vorlage)

Die Führungsseite hat 9 Abschnitte. Nicht jede Subpage braucht alle, aber die Reihenfolge und Logik gelten:

| Nr. | Abschnitt | Zweck | Komponenten | Container |
|---|---|---|---|---|
| 1 | **Hero** | Situativer Einstieg, Eyebrow + H1 + Text + Foto-Platzhalter | HeroImagePlaceholder | max-w-7xl |
| 2 | **Situationen** | Erkennungsmoment — Leser:in erkennt sich wieder | SituationCard (Orange-Leiste) | max-w-6xl |
| 3 | **Wie ich arbeite** | Lesezone — Marcus' Ansatz, Abgrenzung, Quote | Fließtext + Quote + Foto-Platzhalter | max-w-6xl |
| 4 | **Themen** | Scan-Liste — was fällt alles darunter | Themen-Karten + HexagonBullet | max-w-6xl |
| 5 | **Der Weg** | Prozess — so kommen wir ins Gespräch | Prozessschritte mit Verbindungslinie | max-w-5xl |
| 6 | **Aus der Praxis** | Fallbeispiele — Marcus zeigt Kompetenz | Praxis-Karten (Denver-Blau-Leiste) | max-w-5xl |
| 7 | **Angebote** | Weiterführende Formate (Bootcamp, Community) | OfferCard (klickbar) | max-w-6xl |
| 8 | **Shopvote** | Social Proof | ShopvoteBadge | max-w-5xl |
| 9 | **Kontakt** | Einladung zum Gespräch | ContactSection (Shared) | intern geregelt |

### Variationen pro Seite

| Seite | Abweichungen von der Führungsseite |
|---|---|
| **Karriere** | Abschnitt 5 → Formate (0-Euro-Kurs, „Finde dein Was", Einzelberatung). Du-Hinweis bei Privatzahler:innen. Kontakt wärmer formuliert. |
| **Vertrieb** | Abschnitt 2–3 = Umleitungs-Dramaturgie (Anerkennung → Perspektivwechsel → Brücke). Branchenkompetenz als eigener Abschnitt. |
| **Simulation** | Abschnitt 2 = Anwendungsfälle als Akkordeon. Abschnitt 4 = „So funktioniert es" (Erklärung). Abschnitt 5 = Kennzahlen + Preistabelle. Abschnitt 6 = Jährliches Event. |
| **Über mich** | Storytelling-Seite, ausführlichster Fließtext. Video geplant. Akkordeon für Stationen möglich. |
| **Community** | Eigenständige Struktur — ergibt sich aus EAZEE-Grundlagen. |

---

## 3. Neue Subpage anlegen — Schritt für Schritt

### Vorbereitung (vor dem ersten Cursor-Auftrag)

1. **Textdokument identifizieren:** `[Seite]_Texte_MH3_v1.md` im Repo unter `content/`
2. **Webseiten-Konzept prüfen:** Abschnitt 4.x im Webseiten-Konzept gibt die Abschnittsfolge vor
3. **SEO-Strategie prüfen:** Title-Tag, Meta-Description, H1, Keywords aus SEO-Strategie v1.2
4. **Bestehende Komponenten inventarisieren:** Welche gibt es schon? (→ Abschnitt 5 unten)

### Cursor-Aufträge planen

Pro Cursor-Auftrag **maximal 2 Abschnitte**. Typische Aufteilung:

| Block | Inhalt |
|---|---|
| Block 1 | Page-Datei anlegen + Hero (Abschnitt 1) |
| Block 2 | Situationen (Abschnitt 2) — SituationCards einbauen |
| Block 3 | Wie ich arbeite + Themen (Abschnitte 3–4) |
| Block 4 | Prozess + Praxis (Abschnitte 5–6) |
| Block 5 | OfferCards + Shopvote + ContactSection (Abschnitte 7–9) |

Jeder Block endet mit dem **Nach-dem-Coden-Block** (siehe `projekt-regeln.md`).

---

## 4. Page-Datei-Struktur

Jede Subpage liegt unter `src/app/[slug]/page.tsx`. Grundgerüst:

```
- Metadata (title, description aus SEO-Strategie)
- Schema.org JSON-LD im Head
- Hero-Section (weiß)
- Abschnitt 2 (grau)
- Abschnitt 3 (weiß)
- ... (alternierend)
- ContactSection
```

### Navigation

Die Seite wird in `src/components/Header.tsx` in die Navigation eingehängt (Desktop + Mobile).

---

## 5. Komponenten-Inventar (vor Neubau prüfen!)

| Komponente | Pfad | Wiederverwendbar? |
|---|---|---|
| SituationCard | `src/components/SituationCard.tsx` | Ja — Props: headline, text, Orange-Leiste links |
| OfferCard | `src/components/OfferCard.tsx` | Ja — Denver-Blau Border-Top, klickbar |
| HexagonBullet | `src/components/icons/HexagonBullet.tsx` | Ja — 10–12px, orange, filled |
| ShopvoteBadge | `src/components/ShopvoteBadge.tsx` | Ja — Client-Komponente, next/script lazyOnload |
| ContactSection | `src/components/ContactSection.tsx` | Ja — nur headline + subtext übergeben |
| HeroImagePlaceholder | `src/components/HeroImagePlaceholder.tsx` | Ja — aspect-ratio individualisierbar |

**Regel:** Keine neue Komponente bauen, wenn eine bestehende passt. Bei Bedarf: bestehende Komponente erweitern (Props), nicht duplizieren.

---

## 6. Hintergrund-Alternierung

Reihenfolge steht fest, unabhängig von der Seitenlänge:

```
Hero         → weiß
Abschnitt 2  → bg-[#F5F5F5]
Abschnitt 3  → weiß
Abschnitt 4  → bg-[#F5F5F5]
...
ContactSection → bg-[#F5F5F5] (intern geregelt, nicht überschreiben)
```

bg-Klasse immer auf dem äußersten `<section>`-Element.

---

## 7. Transition Hooks

Einzelner Satz zwischen zwei Sections, der Erkennung in Relevanz überführt:

- `text-xl font-medium text-brand-text text-center mt-14 mb-4`
- Kein eigener Container, kein Design-Element — reines Textmuster
- Auf jeder Subpage prüfen: Gibt es nach dem Erkennungsmoment (Abschnitt 2) einen natürlichen Übergang?
- Nicht erzwingen — nur verwenden, wenn der Text einen klaren Brückensatz bietet

---

## 8. SEO-Checkliste pro Subpage

- [ ] Title-Tag aus SEO-Strategie übernommen (max. 60 Zeichen)
- [ ] Meta-Description aus SEO-Strategie (max. 155 Zeichen)
- [ ] Genau eine H1 (enthält Primär-Keyword)
- [ ] Schema.org JSON-LD im Head (LocalBusiness + Person)
- [ ] Sprechende URL (`/fuehrung`, `/karriere`, etc.)
- [ ] Alt-Texte für alle Bilder/Platzhalter
- [ ] Interne Verlinkung zur Startseite und zu verwandten Subpages

---

## 9. Qualitäts-Checkliste vor Abschluss der Seite

- [ ] Alle Abschnitte laut Webseiten-Konzept vorhanden?
- [ ] Texte 1:1 aus Textdokument übernommen (keine Umformulierungen)?
- [ ] Hintergrund-Alternierung korrekt (weiß/grau/weiß/...)?
- [ ] Section-Spacing asymmetrisch auf allen Abschnitten?
- [ ] Section-Divider an den richtigen Stellen?
- [ ] Farblogik Orange/Denver-Blau eingehalten?
- [ ] Bestehende Komponenten verwendet?
- [ ] ContactSection mit seitenspezifischen Texten?
- [ ] ShopvoteBadge eingebaut?
- [ ] Navigation aktualisiert?
- [ ] pnpm build fehlerfrei?
- [ ] /visual-check auf Desktop?

---

*Erstellt am 4. Mai 2026 als Cursor-Skill für Sprint 9+.*
*Quellen: Webseiten-Konzept v1.2, Führungsseite (Sprint 2–8), Design System v1.1, CLAUDE.md.*
