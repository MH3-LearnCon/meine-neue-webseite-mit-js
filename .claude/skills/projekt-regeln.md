# Skill: Projekt-Regeln — MH3 LearnCon® GmbH

> **Zweck:** Alle Arbeitsregeln, Lessons Learned und Konventionen an einem Ort. Verhindert, dass Cursor Fehler wiederholt, die in Sprint 1–8 bereits gelöst wurden.
> **Wann lesen:** Bei JEDEM Cursor-Auftrag — diese Datei ist die Grundlage.
> **Ablage im Repo:** `.claude/skills/projekt-regeln.md`

---

## 1. Nach-dem-Coden-Block (am Ende JEDES Auftrags)

Jeder Cursor-Auftrag endet mit diesen fünf Schritten — keine Ausnahmen:

1. `pnpm build` — muss fehlerfrei durchlaufen
2. `git add` nur geänderte Dateien (KEIN `git add -A`)
3. `git commit -m "passende Message"` — kein "Made-with: Cursor"-Trailer
4. `git push origin main`
5. `pnpm dev` starten

---

## 2. Git-Disziplin

| Regel | Begründung |
|---|---|
| Maximal 2 Änderungen pro Claude-Code-Block | Ausnahmen nur mit Begründung im Commit-Body |
| Kein Git-Befehl ohne vorheriges `git status` + `git log` | Verhindert blindes Überschreiben |
| Auto-Commit nach jedem erfolgreichen Block | Kein Fortschritt ohne Sicherungspunkt |
| "Made-with: Cursor"-Trailer entfernen | Information Disclosure — nicht erwünscht |
| Allowlist nur für Leseoperationen | Niemals für Schreiben, Löschen, Git-Commits |

---

## 3. Build-Hygiene

| Problem | Lösung |
|---|---|
| `pnpm build` schlägt unerwartet fehl | `pnpm dev` STOPPEN, dann `pnpm build`. Paralleles Laufen zerschießt den `.next`-Cache |
| Seite zeigt leere Inhalte nach Cleanup-Commit | `.next`-Ordner löschen, Dev-Server neu starten |
| Port-Konflikt (EADDRINUSE) | Alle Dev-Prozesse beenden, dann `pnpm dev` |
| Unerwartetes Build-Verhalten nach Änderungen | `.next`-Ordner löschen, `pnpm dev` neu starten |

---

## 4. Cursor-Agent-Hänger

Bei Stillstand >5 Minuten ohne Status-Update:
1. Stop drücken
2. `git status` im Terminal prüfen
3. Entscheiden: Neustart oder manuelles Fortsetzen

---

## 5. Qualitätssicherung

| Schritt | Wann |
|---|---|
| `/visual-check` | Nach JEDEM Layout-/Farb-/Strukturblock |
| Pre-Inspektion | VOR Edits an Layout-Containern — tatsächlichen Dateiinhalt lesen |
| pnpm build | Am Ende jedes Blocks (Teil des Nach-dem-Coden-Blocks) |

---

## 6. Farbdisziplin

**Keine neuen Farbwerte ohne explizite Freigabe von Marcus.**

Erlaubte Farbpalette:

| Bezeichnung | Hex | Tailwind |
|---|---|---|
| Denver-Blau | #002244 | `denver-blue` |
| Orange | #FF9B01 | `orange` / `text-orange` |
| Anthrazit | #222222 | `text-brand-text` |
| Hellgrau | #F5F5F5 | `bg-brand-gray-light` / `bg-[#F5F5F5]` |
| Mittelgrau hell | #D9D9D9 | `border-brand-gray-mid-light` |
| Mittelgrau | #9D9D9D | `text-brand-gray-mid` |
| Dunkelgrau | #828282 | — (Subtexte) |
| Weiß | #FFFFFF | — |

**Verboten:** Tailwind-Standard-Farben (gray-100, gray-200 etc.) als Ersatz. Wenn der Wert nicht in dieser Tabelle steht, ist er nicht erlaubt.

**Farblogik:** Orange = Leser-Perspektive. Denver-Blau = Marcus-Perspektive. Bei jeder neuen Design-Entscheidung prüfen.

---

## 7. Sprach- und Text-Regeln

### Ansprache
- Webseite: **Sie** (außer Community-Bereich → Du)
- Ich-Perspektive, kein „Wir" (Ausnahme: kollaboratives Wir = Marcus + Klient:in arbeiten zusammen)

### Gendering
- Doppelpunkt-Form: Ingenieur:innen, Berater:innen, Klient:innen
- Geschlechtsneutrale Begriffe bevorzugen: Mitglieder, Teilnehmende, Führungskräfte
- „Mitglieder" OHNE Doppelform (bereits geschlechtsneutral)

### No-Go-Begriffe
- „Aber" → gleichzeitig, jedoch, doch, und
- „Feedback" → Rückmeldung
- „Kosten" → Investition
- „Coaching" → nur als Abgrenzung: „(kein) Coaching"
- „Kostenlos" → „0-Euro-Kurs" (rechtlich relevant)
- „Nachhaltig", „Agil", „Transformation" alleinstehend
- „zu tun bekommen" → „zu tun haben"
- „zielorientiert" → „zielgerichtet"

### Phrasen-Blacklist (Auszug)
NIEMALS: „Kennst du das?", „Stell dir vor", „Absoluter Gamechanger", „Auf das nächste Level", „In der heutigen digitalen Welt", „Lass uns gemeinsam eintauchen", „Potenzial entfalten", „Navigieren"

### Negationen-Regel
Unbewusste Negationen vermeiden. „Keine Angst" erzeugt das Bild von Angst → stattdessen: „Sie sind in guten Händen." Ausnahme: bewusste Kontrastpaare („Nicht beim bestellten Thema, sondern beim wahren Bedarf.").

### Typografische Anführungszeichen
Immer „…" (deutsche Anführungszeichen), nicht "..." (englische). Im Code: `„` und `"` oder die Unicode-Zeichen.

### Trademark-Symbole
- MH3 LearnCon® — ® beim ersten Vorkommen pro Seite
- MH3-EAZEE® — ® beim ersten Vorkommen pro Seite
- Schema.org `name`-Felder und `<title>`-Tags: OHNE ® (technische Gründe)

---

## 8. Kennzahlen (exakte Werte)

| Kennzahl | Korrekt | Falsch |
|---|---|---|
| Simulation weltweit | über 5.800 Teilnehmende | 5.800 Simulationen |
| Marcus' Durchführungen | über 600 | — |
| Teilnehmer pro Simulation | 6–48 | 6–56 |
| Shopvote | 5/5 Sterne, über 65 Bewertungen | — |
| Selbstständigkeit | seit 2006 / 20 Jahre | seit 2007 |
| Tagessätze Simulation | 3.750€–5.250€+ | — |

---

## 9. Kontaktdaten (einheitlich auf allen Seiten)

| Kanal | Wert |
|---|---|
| Telefon | 0171 88 202 77 (klickbar: `tel:+491718820277`) |
| E-Mail | kontakt@mh-learncon.com |
| Adresse | Grafenberger Allee 60, 40237 Düsseldorf |
| Calendly | Verlinkt, NICHT eingebettet (DSGVO) |

Reihenfolge im Kontaktbereich: Telefon → E-Mail → Calendly

---

## 10. DSGVO

- Google Fonts: NICHT extern laden — Montserrat über `next/font` lokal
- Analytics: Plausible oder Fathom (oder keins). KEIN Google Analytics
- Calendly: NUR verlinken, NICHT per iframe einbetten
- Shopvote-Widget: Lädt externes Script — Cookie-Consent für Launch klären
- Ziel: Seite so sauber, dass KEIN Cookie-Banner nötig ist

---

## 11. SEO-Grundregeln

- Jede Seite: eigener Title-Tag (max. 60 Zeichen), eigene Meta-Description (max. 155 Zeichen)
- Genau eine H1 pro Seite (enthält Primär-Keyword)
- Schema.org JSON-LD im Head: LocalBusiness + Person
- `jobTitle`: „Geschäftsführender Gesellschafter und Berater"
- `name`: „MH3 LearnCon GmbH" (Firma), „Marcus Holzheimer" (Person)
- Sprechende URLs: `/fuehrung`, `/karriere`, `/vertrieb`, `/simulation`, `/ueber-mich`, `/community`
- Alt-Texte für alle Bilder

---

## 12. Lessons Learned (kumulativ, Sprint 1–8)

### Build & Tooling
- `pnpm dev` STOPPEN vor `pnpm build` — paralleles Laufen zerschießt `.next`-Cache
- Port-Konflikte: alle Dev-Prozesse beenden vor Neustart
- `.next`-Ordner löschen bei unerwartetem Verhalten

### Git
- Cursor-Trailer entfernen (Information Disclosure)
- Allowlist nur für Leseoperationen
- Pflichtdokumente im Repo unter `docs/` ablegen (Cursor-Zugriff)

### Design-Entscheidungen
- Hover-Konvention MUSS in CLAUDE.md stehen, nicht nur in Chat-History — Cursor liest nur Repo-Dateien
- Designentscheidungen SOFORT in CLAUDE.md festschreiben, nicht „beim Übergabe-Baustein"
- Spacing sofort asymmetrisch anfangen (pt-6/8, pb-12/16) — nicht erst symmetrisch probieren
- Divider-Position hängt von der Padding-Struktur ab — asymmetrisch ist Voraussetzung
- Container-Breiten nie ändern ohne den aktuellen Wert im Code gelesen zu haben
- OfferCards von Anfang an als Komponente planen, nicht erst als Fließtext bauen
- Token-Hinweis: `bg-brand-orange` existiert NICHT — korrekt ist `bg-orange`

### Arbeitsweise
- TEDIC: absolute Ehrlichkeit über Systemgrenzen (wenn etwas nicht geht, sofort sagen)
- Sofortiger Stopp bei visuellen Warnungen
- Kein CTA direkt nach SituationCards — zu früh, Marcus hat noch nichts gezeigt

---

*Erstellt am 4. Mai 2026 als Cursor-Skill für Sprint 9+.*
*Quellen: CLAUDE.md, Leitfaden v3.2, Brand Voice Guide v2.3, Übergabe-Bausteine Sprint 1–8, Statusbogen R-Blöcke.*
