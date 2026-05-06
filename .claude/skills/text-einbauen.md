# Skill: Text einbauen — MH3 LearnCon® GmbH

> **Zweck:** Regeln für die korrekte Übernahme von Texten aus den Textdokumenten in Next.js-Komponenten. Verhindert stille Fehler bei Anführungszeichen, Gendering, Trademarks und eigenmächtigen Umformulierungen.
> **Wann lesen:** VOR jedem Cursor-Auftrag, der Texte aus einem `[Seite]_Texte_MH3_v1.md` in Code überträgt.
> **Ablage im Repo:** `.claude/skills/text-einbauen.md`

---

## 1. Textquellen — wo die Wahrheit liegt

| Seite | Textdokument | Ablage im Repo |
|---|---|---|
| Startseite | `Startseite_Texte_MH3_v1_1.md` | `content/` |
| Führung | `Fuehrung_Texte_MH3_v1_1.md` | `content/` |
| Karriere | `Karriere_Texte_MH3_v1.md` | `content/` |
| Vertrieb | `Vertrieb_Texte_MH3_v1.md` | `content/` |
| Simulation | `Simulation_Texte_MH3_v1.md` | `content/` |
| Über mich | `Ueber_mich_Texte_MH3_v1.md` | `content/` |
| Community | `Community_Texte_MH3_v1.md` | `content/` |

**Regel:** Das Textdokument ist die einzige Quelle. Keine Texte aus dem Webseiten-Konzept, aus Chat-Verläufen oder aus dem Gedächtnis übernehmen.

---

## 2. Abschnitt-Mapping — Textdokument → Seitenabschnitt

Jedes Textdokument ist in nummerierte Abschnitte gegliedert. Die Nummern im Textdokument entsprechen den Abschnitten auf der Seite:

```
Abschnitt 1: Hero-Bereich       → Hero-Section der Seite
Abschnitt 2: Situationen        → SituationCards
Abschnitt 3: Wie ich arbeite    → Fließtext-Lesezone
Abschnitt 4: Themen             → Themen-Karten + HexagonBullets
Abschnitt 5: Der Weg            → Prozessschritte
Abschnitt 6: Aus der Praxis     → Praxis-Karten / Akkordeon
Abschnitt 7: Angebote           → OfferCards
Abschnitt 8: Shopvote           → ShopvoteBadge-Section
Abschnitt 9: Kontakt            → ContactSection (headline + subtext)
```

Die Abschnittsfolge variiert je nach Seite (→ `subpage-bauen.md`, Abschnitt 2). Immer das konkrete Textdokument prüfen.

---

## 3. Kernregel: KEIN eigenmächtiges Umformulieren

Texte werden **1:1 aus dem Textdokument übernommen**. Cursor/Claude Code darf:

- ✅ Texte kopieren und in JSX einsetzen
- ✅ HTML-Entities für Sonderzeichen verwenden
- ✅ Zeilenumbrüche dem Layout anpassen

Cursor/Claude Code darf **NICHT**:

- ❌ Formulierungen „verbessern" oder kürzen
- ❌ Synonyme einsetzen
- ❌ Sätze umstellen
- ❌ Wörter ergänzen, die nicht im Textdokument stehen
- ❌ Gendering-Formen ändern (z.B. aus „Klient:innen" wird nicht „Klienten")

Wenn ein Text nicht passt oder ein Fehler vermutet wird: **Stopp und nachfragen**, nicht eigenständig korrigieren.

---

## 4. Typografische Anführungszeichen

| Richtig | Falsch |
|---|---|
| „Gute Führung braucht Sparring." | "Gute Führung braucht Sparring." |
| ‚inneres Zitat' | 'inneres Zitat' |

Im JSX:

```jsx
// Richtig — deutsche Anführungszeichen
<p>„Gute Führung braucht Sparring, keine Schonhaltung."</p>

// Falsch — englische Anführungszeichen
<p>"Gute Führung braucht Sparring, keine Schonhaltung."</p>
```

**Verschachtelung:** Wenn ein Text in Anführungszeichen einen weiteren Text in Anführungszeichen enthält, äußere „…" und innere ‚…' verwenden. Sprint-4-Lesson: Doppelte Verschachtelung (äußere „" um innere „") führt zu sichtbaren Fehlern auf der Seite.

---

## 5. Trademark-Symbole

| Marke | Regel |
|---|---|
| MH3 LearnCon® | ® bei erster Nennung pro Seite |
| MH3-EAZEE® | ® bei erster Nennung pro Seite |

### Wo KEIN ®

- Schema.org JSON-LD `name`-Felder
- `<title>`-Tags
- Im Fließtext nach der ersten Nennung

### Im JSX

```jsx
// Richtig
<p>MH3 LearnCon® GmbH bietet...</p>

// Auch richtig (HTML-Entity)
<p>MH3 LearnCon&reg; GmbH bietet...</p>

// Hochgestellt (wie auf OfferCards)
<span>MH3-EAZEE<sup>®</sup></span>
```

---

## 6. Sonderzeichen im Text

| Zeichen | Im Textdokument | Im JSX |
|---|---|---|
| Gedankenstrich | – (Halbgeviertstrich) | `–` oder `&ndash;` |
| Pfeil (CTA) | → | `→` oder `&rarr;` |
| Auslassungspunkte | … | `…` oder `&hellip;` |
| Kaufmännisches Und | & | `&amp;` (in JSX automatisch) |

**Achtung:** Einfache Bindestriche (-) nicht durch Gedankenstriche (–) ersetzen und umgekehrt. Das Textdokument ist die Referenz.

---

## 7. Strukturelle Marker im Textdokument

Die Textdokumente verwenden eckige Klammern als Hinweise für die Umsetzung:

| Marker | Bedeutung | Umsetzung |
|---|---|---|
| `[H1]` | Haupt-Überschrift | `<h1>` — genau eine pro Seite |
| `[Überschrift]` | Abschnitts-Überschrift | `<h2>` |
| `[Text]` | Fließtext-Absatz | `<p>` |
| `[CTA]` | Call-to-Action-Link | Link mit font-semibold + Pfeil → |
| `[Sektions-Überschrift]` | Übergreifende Überschrift | `<h2>` |
| `[Titel]` | Untertitel innerhalb eines Abschnitts | `<h3>` oder `<strong>` je nach Kontext |
| `[Widget]` | Shopvote-Einbindung | ShopvoteBadge-Komponente |
| `[Telefon]` | Telefonnummer | Klickbar: `tel:+491718820277` |
| `[Absatz]` | Fließtext | `<p>` |

Die Marker selbst erscheinen NICHT auf der Seite — nur der Text danach.

---

## 8. Abschnittsspezifische Regeln

### Hero (Abschnitt 1)
- Die H1 kommt aus der SEO-Strategie (enthält das Primär-Keyword), NICHT aus dem Textdokument
- Der emotionale Satz (orange) und der Fließtext kommen aus dem Textdokument
- Wenn das Textdokument einen eigenen H1-Vorschlag hat, der vom SEO-H1 abweicht, wird der Textdokument-Satz in den Fließtext verschoben
- Meta-Description und Title-Tag kommen aus der SEO-Strategie

**Lernnotiz Sprint 11:** Bei der Vertrieb-Seite enthielt das Textdokument eine andere H1 als die SEO-Strategie. Die SEO-H1 wurde verwendet, der Textdokument-Satz wurde zum Fließtext-Einstieg.

### SituationCards (Abschnitt 2)
- `[Überschrift]` → `headline`-Prop der SituationCard
- `[Text]` → `text`-Prop der SituationCard
- Reihenfolge exakt wie im Textdokument

### ContactSection (Abschnitt 9)
- `[Überschrift]` → `headline`-Prop
- Erster Absatz unter `[Text]` → `subtext`-Prop
- Telefon, E-Mail, Calendly werden von der Komponente intern geregelt

### Shopvote (Abschnitt 8)
- Überschrift und Unterzeile aus dem Textdokument
- Widget-Einbindung über ShopvoteBadge-Komponente (kein manuelles Script-Tag)

---

## 9. Checkliste vor dem Commit

- [ ] Texte 1:1 aus Textdokument übernommen?
- [ ] Deutsche Anführungszeichen „…" verwendet (keine englischen)?
- [ ] Trademark ® bei erster Nennung pro Seite?
- [ ] Gendering-Formen unverändert aus Quelle?
- [ ] Gedankenstriche (–) korrekt (nicht durch Bindestriche ersetzt)?
- [ ] CTA-Texte exakt wie im Textdokument (inkl. Pfeil →)?
- [ ] Strukturelle Marker ([H1], [Text] etc.) nicht auf der Seite sichtbar?
- [ ] Keine eigenmächtigen Umformulierungen, Kürzungen oder Ergänzungen?

---

*Erstellt am 4. Mai 2026, aktualisiert am 7. Mai 2026 (Sprint 11 Learnings).*
*Quellen: Textdokumente v1/v1.1, Änderungsliste Trademark, Lessons Learned Sprint 4 (Anführungszeichen-Fix), Brand Voice Guide v2.3.*
