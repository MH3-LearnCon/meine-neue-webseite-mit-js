# Skill: recheck — Code-Quality-Review für Cursor-Aufträge

> **Zweck:** Mechanischer Code-Quality-Check, der nach dem Bauen eines Cursor-Auftrags läuft — wenn Claude Chat den Auftrag entsprechend markiert hat. Cursor prüft selbst, meldet Findings im Self-Reporting, korrigiert nichts.
>
> **Verhältnis zu `visual-check.md`:** `visual-check` prüft das visuelle Erscheinungsbild der gebauten Seite; `recheck` prüft Code-Konventionen und Drift-Muster. Beide laufen unabhängig voneinander.
>
> **Status der Schichten:** Schicht A (alle Prüfblöcke unten) ist aktiv. Schicht B (Phase 2, ganz unten markiert) ist NICHT AKTIV — wird erst bei Phase-2-Aktivierung (Login, API-Integration, eigene Datenbank o.ä.) eingeschaltet.

---

## 1. Wann läuft recheck

Cursor prüft am Anfang jedes Auftrags, ob im Auftrags-Header eine Markierung steht:

- `recheck: ja [Begründung]` — recheck läuft nach Abschluss der Code-Änderungen.
- `recheck: nein [Begründung]` — recheck wird übersprungen.

Die Markierung wird von Claude Chat im Auftrag gesetzt — nicht von Cursor entschieden.

Wenn die Markierung fehlt: recheck NICHT eigenständig ausführen, sondern im Self-Reporting als Auffälligkeit melden („Auftrag enthielt keine recheck-Markierung — sollte ergänzt werden").

### Trigger-Klassen (zur Orientierung — Entscheidung trifft Claude Chat)

1. **Neue Komponente.** Neue Datei unter `src/components/` mit eigenem Export. NICHT bei neuen `page.tsx`-Dateien, die etablierte Komponenten zusammensetzen.
2. **Komponenten-Logik geändert.** Änderungen an Render-Logik, Conditional Rendering, internen States, Event-Handlern, strukturellen Wrappern. NICHT bei reinen Prop-Erweiterungen ohne Logik-Folge, Text-Änderungen in JSX-Strings, Tailwind-Klassen-Anpassungen. Grenzfall: neue Prop + zugehöriger Conditional → zündet.
3. **Externe Integration.** Berührung externer Scripts, externer URLs, `next/script`-Konfiguration, Drittanbieter-Verweise. NICHT bei rein internen Links, `tel:`/`mailto:`-Schemas, Schema.org-`sameAs`-Einträgen.
4. **Build-Konfiguration.** Änderungen an `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `package.json`, `postcss.config.mjs`, `.env*`, `.gitignore`, neuen Konfig-Dateien.

Skill-Dateien unter `.claude/skills/*.md` lösen recheck NICHT aus.

---

## 2. Auto-Fix-Verbot

recheck meldet Findings. recheck korrigiert nichts.

Auch wenn ein Finding trivial aussieht (z. B. `gray-100` durch `bg-brand-gray-light` ersetzen): Korrektur passiert nur durch separaten Cursor-Auftrag von Marcus. Begründung: Auto-Fixes ohne Sparring führen zu unbemerkter Drift in andere Richtung. Ein bewusster Korrektur-Schritt ist günstiger als ein automatischer.

---

## 3. Selbst-Beobachtungs-Block

Vor den Findings im Self-Reporting steht IMMER ein knapper Beobachtungs-Block:

```
recheck-Lauf
- Getriggert durch: [Klasse 1/2/3/4 — Kurzbegründung]
- Findings gesamt: [Anzahl]
- Davon kritisch: [Anzahl]
- Davon wesentlich: [Anzahl]
- Davon kleinerer Hinweis: [Anzahl]
- Laufzeit: [Sekunden, geschätzt]
```

Drei Zahlen, drei Klassifikationen, eine Laufzeit. Maschinell auswertbar. Wird zur PDCA-Auswertung nach drei Sprints verwendet, um die Trigger-Klassen zu justieren.

---

## 4. Übersetzungs-Pflicht für Findings

Marcus ist kein Programmierer. Findings müssen für ihn verständlich formuliert werden:

- NICHT: „`useEffect` ohne Dependency-Array in `Header.tsx` Zeile 47."
- SONDERN: „In `Header.tsx` (Zeile 47) gibt es eine Stelle, an der die Komponente möglicherweise in eine Endlosschleife läuft. Das ist eine bekannte React-Falle bei interaktiven Komponenten. Vorschlag zur Klärung: Marcus prüft mit Claude Chat, ob das Verhalten beabsichtigt ist — andernfalls eigener Cursor-Auftrag zur Behebung."

Jedes Finding enthält drei Elemente:
1. **Datei + Stelle** (Pfad, Zeile)
2. **Erklärung in Marcus-Sprache** (was bedeutet das, warum ist es relevant)
3. **Vorschlag zur Klärung** (typischerweise: mit Claude Chat klären, dann eigener Cursor-Auftrag)

---

## 5. Prüfblock — CLAUDE.md-Compliance

Sieben Punkte. Quelle: `CLAUDE.md`, `Design_System_MH3_v1_2.md`, etablierte Projektkonventionen.

| Nr | Drift-Muster | Schwere | Test-Hinweis |
|---|---|---|---|
| C1 | Neue Farbwerte außerhalb der 8er-Palette | kritisch | Suche nach `bg-[#...]`, `text-[#...]`, `border-[#...]` mit Hex-Wert, der NICHT in Design-System Abschnitt 1 (Farbpalette) steht |
| C2 | `gray-100` / `gray-200` als Ersatz-Farben | kritisch | Suche nach Tailwind-Standard-Grau-Klassen (`bg-gray-100`, `bg-gray-200`, `text-gray-...`) |
| C3 | Italic-Verwendung | wesentlich | Suche nach `italic`-Klasse, `<em>`-Tag, `<i>`-Tag |
| C4 | Underline auf Links oder Karten-CTAs | wesentlich | Suche nach `underline`, `hover:underline`, `group-hover:underline` |
| C5 | Tailwind-v4-spezifische Syntax | kritisch | Suche nach `@theme`-Block, neuen v4-Utilities, fehlender `tailwind.config.ts` |
| C6 | Hover ohne Denver-Blau-Konvention | wesentlich | Buttons und Karten-CTAs ohne `hover:bg-denver-blue hover:text-white hover:border-denver-blue` |
| C7 | `®` in technischen Strings | kritisch | Suche nach `®` in `metadata.title`, in JSON-LD `name`-Properties, in `mailto:`-Strings, in `tel:`-Strings |

---

## 6. Prüfblock — Brand-Voice-Drift

Fünf Punkte. Quelle: `Brand_Voice_Guide_v2_3.md`, CLAUDE.md, `.claude/skills/text-einbauen.md`.

| Nr | Drift-Muster | Schwere | Test-Hinweis |
|---|---|---|---|
| B1 | Deutsche Anführungszeichen außerhalb technischer Strings | wesentlich | Suche nach geraden `"..."` in sichtbarem JSX-Text. Korrekt: `„..."`. Technische Strings (Klassen, Props, Schema.org-Werte) bleiben mit geraden Anführungszeichen |
| B2 | Trademark `®` bei Erstnennung im sichtbaren Text | kritisch | Bei `MH3 LearnCon` und `MH3-EAZEE` muss bei der ersten Nennung pro Seite ein `®` stehen |
| B3 | Sie/Du-Konsistenz pro Seite | wesentlich | Sie auf Startseite und B2B-Seiten (Führung, Vertrieb, Karriere, Simulation, Über mich); Du in Community-Inhalten. Mischformen sind Findings. Karriere-Kontaktbereich hat dokumentierte Du-Hinweis-Ausnahme |
| B4 | Texte 1:1 aus zugeordnetem `content/X.md` | wesentlich | Stichprobe gegen Mapping aus CLAUDE.md. Umformulierte oder gekürzte Texte sind Findings |
| B5 | content/-Sync-Pflicht | wesentlich | Wenn der Auftrag Text-Strings in `src/app/*/page.tsx` geändert hat: prüfen ob zugehörige `content/X.md` im selben Diff geändert ist |

---

## 7. Prüfblock — MH3-Edge-Cases

Fünf Punkte. Quelle: CLAUDE.md, Sprint-Übergaben, technische Realität der Seite.

| Nr | Drift-Muster | Schwere | Test-Hinweis |
|---|---|---|---|
| E1 | Schema.org-JSON-LD-Validität und Pflichtfelder | kritisch | JSON-LD-Block parsebar. Pflichtfelder: `@context`, `@type`, `name`, `jobTitle` (Person), `address` (LocalBusiness). `jobTitle` muss „Geschäftsführender Gesellschafter und Berater" sein. `name` ohne `®` |
| E2 | `next/script`-Wrapper mit `strategy` | wesentlich | Externe Scripts (z. B. Shopvote) nutzen `next/script` mit explizitem `strategy`-Attribut (`lazyOnload` für Shopvote). Kein direktes `<script>`-Tag |
| E3 | Alt-Texte auf Bildern | wesentlich | Jedes `<Image>` und `<img>` mit `alt`-Wert. Leerer `alt=""` nur bei rein dekorativen Bildern. Foto-Platzhalter brauchen aussagekräftigen Alt-Text |
| E4 | `tel:`/`mailto:`-Schemas im E.164-Format | kritisch | Telefon-Links als `tel:+491718820277` (E.164, kein Leerzeichen, kein deutsches Format). E-Mail-Links als `mailto:kontakt@mh-learncon.com` |
| E5 | Mobile-first-Breakpoints | wesentlich | Tailwind-Klassen mit Breakpoints sind mobile-first: Basis-Klasse ist Mobile-Wert, `md:`/`lg:` ist Desktop-Erweiterung. Rückwärts gedachte Muster sind Findings |

---

## 8. Prüfblock — Performance

Drei Punkte. Bewusst klein gehalten — vollständige Performance-Audits gehören in Lighthouse, Vercel Speed Insights oder Vercel Analytics, nicht in `recheck`.

| Nr | Drift-Muster | Schwere | Test-Hinweis |
|---|---|---|---|
| P1 | `useEffect` ohne korrektes Dependency-Array | wesentlich | `useEffect`-Aufrufe ohne zweites Argument oder mit ESLint-Hinweis. Nur in interaktiven Komponenten (`"use client"`-Direktive) relevant |
| P2 | Inline-Funktionen in JSX-Props bei häufig re-renderten Komponenten | kleinerer Hinweis | `onClick={() => ...}` direkt im JSX bei Komponenten in Listen oder heißen Render-Pfaden |
| P3 | Bilder ohne `next/image` | wesentlich | `<img>`-Tags direkt im JSX statt `<Image>` aus `next/image` — verhindert automatische Optimierung |

---

## 9. Output-Format

Findings werden im Self-Reporting ausgegeben — sortiert nach Schweregrad, innerhalb des Schweregrads thematisch gruppiert.

Struktur:

1. Selbst-Beobachtungs-Block (siehe Abschnitt 3)
2. Findings — kritisch
3. Findings — wesentlich
4. Findings — kleinerer Hinweis
5. Keine Findings in: [Liste der Prüfblöcke / Punkte, die sauber waren]

### Beispiel-Output (fiktiv, zur Veranschaulichung)

```
recheck-Lauf
- Getriggert durch: Klasse 1 — neue Komponente HinweisBox.tsx
- Findings gesamt: 2
- Davon kritisch: 1
- Davon wesentlich: 1
- Davon kleinerer Hinweis: 0
- Laufzeit: ~8 Sekunden

Findings — kritisch

[C2 — Compliance] gray-100 als Ersatz-Farbe
- Datei: src/components/HinweisBox.tsx, Zeile 14
- Was steht da: className="bg-gray-100 ..." — die Tailwind-Standard-Farbe gray-100 wird als Hintergrund verwendet.
- Was das bedeutet: gray-100 ist nicht Teil der MH3-Farbpalette. Die Regel im Projekt ist eindeutig: nur die 8 festgelegten Farben verwenden. Sprint 6 hatte genau diesen Fall — die Regel existierte, wurde trotzdem verletzt.
- Vorschlag zur Klärung: Wahrscheinlich ist bg-brand-gray-light (#F5F5F5) gemeint. Marcus klärt mit Claude Chat, welche der 8 Farben gewünscht ist — eigener Cursor-Auftrag zur Korrektur.

Findings — wesentlich

[E3 — Edge-Cases] Alt-Text fehlt
- Datei: src/components/HinweisBox.tsx, Zeile 22
- Was steht da: <Image src="/icon-info.svg" /> — ohne alt-Attribut.
- Was das bedeutet: Bildelemente brauchen einen Alt-Text für Screen-Reader und Suchmaschinen. Leerer alt-Wert ist nur bei rein dekorativen Bildern erlaubt. Hier scheint das Icon eine Information zu tragen.
- Vorschlag zur Klärung: Marcus entscheidet, ob das Icon dekorativ ist (dann alt="") oder ob ein beschreibender Text nötig ist (z.B. alt="Hinweis-Symbol").

Keine Findings in:
- Brand-Voice-Drift (alle 5 Punkte sauber)
- Performance (alle 3 Punkte sauber)
- Compliance C1, C3, C4, C5, C6, C7
- Edge-Cases E1, E2, E4, E5
```

---

## 10. SCHICHT B — NICHT AKTIV / Phase-2-Vorbereitung

> **STATUS: NICHT AKTIV.**
> Cursor: Diesen Abschnitt NICHT prüfen, solange dieser Hinweisblock unverändert hier steht.
> Aktivierung erfolgt nur durch expliziten separaten Cursor-Auftrag — nicht durch Marcus' Wunsch im Chat allein, nicht durch Claude Chat im Auftrag, sondern durch dokumentierten Schritt im Übergabe-Baustein.

### Aktivierungs-Anforderungen

Bevor Schicht B aktiviert werden darf, müssen drei Voraussetzungen erfüllt sein:

1. **Phase-2-Pfad ist entschieden** — ActiveCampaign-API oder eigene Datenbank (Supabase, Neon, ähnlich) oder anderer Pfad. Die Skizze unten ist beide-pfad-tauglich, der Vollausbau braucht Klarheit.
2. **Vollausbau pro Bereich** — die Skizzen-Punkte werden zu konkreten Prüfregeln mit Test-Hinweisen analog Schicht A.
3. **Pflicht-Gemini-Audit** — der Vollausbau wird durch das `TQM_Auditor_Briefing_Gemini`-Verfahren unabhängig gegengeprüft (zweite KI-Instanz), bevor Schicht B scharf geschaltet wird.

### Acht Themenbereiche — Skizze

**B1 — Authentifizierung.** Geprüft wird (sobald aktiv): Sind Login-Routen geschützt, wie wird die Session gehandhabt, wie lange ist ein Token gültig, wird beim Logout sauber aufgeräumt. Externe Fachreferenz: OWASP Authentication Cheat Sheet. *Stand: Skizze — Vollausbau erforderlich bei Phase-2-Aktivierung.*

**B2 — Eingabevalidierung.** Geprüft wird: Werden Eingaben aus Formularen vor der Verarbeitung geprüft, gibt es E-Mail-Format-Prüfung, gibt es XSS-Schutz beim Rendern von Nutzer-Eingaben, gibt es Längen-Limits. Externe Fachreferenz: OWASP Input Validation Cheat Sheet. *Stand: Skizze — Vollausbau erforderlich bei Phase-2-Aktivierung.*

**B3 — API-Integration.** Geprüft wird: API-Keys liegen server-seitig (nicht im Client), Fehlerbehandlung ist explizit, Rate-Limiting ist berücksichtigt, Retry-Logik bei temporären Fehlern. Externe Fachreferenz: OWASP API Security Top 10. *Stand: Skizze — Vollausbau erforderlich bei Phase-2-Aktivierung.*

**B4 — Geschützte Inhalte.** Geprüft wird: Werden geschützte Bereiche server-seitig geprüft (nicht nur client-seitig versteckt), greift der Schutz auch bei direktem URL-Aufruf, gibt es ein Fallback-Verhalten für nicht-autorisierte Zugriffe. Externe Fachreferenz: OWASP Access Control Cheat Sheet. *Stand: Skizze — Vollausbau erforderlich bei Phase-2-Aktivierung.*

**B5 — DSGVO Phase 2.** Geprüft wird: Bei externen Diensten (ActiveCampaign oder andere) — gibt es einen Auftragsverarbeitungsvertrag, ist die Speicherdauer dokumentiert, gibt es Pfade für Datenexport und Datenlöschung. Externe Fachreferenz: Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO, ggf. Datenschutz-Folgenabschätzung. *Stand: Skizze — Vollausbau erforderlich bei Phase-2-Aktivierung.*

**B6 — Datenbank-Operationen.** Geprüft wird: Werden Prepared Statements oder ORM-Abstraktionen verwendet (kein String-Concatenation in SQL), gibt es ein Migrations-Konzept, sind sensible Felder verschlüsselt. Externe Fachreferenz: OWASP SQL Injection Prevention Cheat Sheet plus ORM-Dokumentation des gewählten Stacks. *Stand: Skizze — Vollausbau erforderlich bei Phase-2-Aktivierung.*

**B7 — Performance Phase 2.** Geprüft wird: Werden Auth-Checks zu Blockern in der Render-Pipeline, gibt es Caching für authentifizierte Anfragen, blockieren API-Calls den initialen Render. Externe Fachreferenz: Next.js Performance-Patterns plus React Suspense-Dokumentation. **Hinweis zur Abgrenzung:** Schicht-A-Performance prüft Marketing-Site-Patterns (useEffect, next/image); Schicht-B-Performance prüft Auth-/API-bedingte Server-Performance. *Stand: Skizze — Vollausbau erforderlich bei Phase-2-Aktivierung.*

**B8 — Race Conditions.** Geprüft wird: Bei gleichzeitigen Schreibvorgängen — gibt es Last-Write-Wins-Probleme, gibt es Optimistic Locking oder Versionierung, gibt es Idempotenz bei kritischen Operationen. Externe Fachreferenz: konkrete Patterns aus React/Next.js-Dokumentation, plus CAP-Theorem-Grundlagen falls Datenbank-relevant. *Stand: Skizze — Vollausbau erforderlich bei Phase-2-Aktivierung.*

---

*Erstellt: Sparring-Chat zu recheck.md, Mai 2026. Schicht A aktiv ab Erstellung. Schicht B vorbereitet, Aktivierung folgt eigenem Mikroschritt bei Phase-2-Start.*
