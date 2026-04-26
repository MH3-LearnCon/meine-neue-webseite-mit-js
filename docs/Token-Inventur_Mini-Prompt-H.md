# Token-System-Inventur (Mini-Prompt H)

**Datum:** 2026-04-26
**Commit-Stand:** `ec6994fc68414403a23bab2b67b1d19e863c0410`
**Auftrag:** Reine Inspektion. Keine Code-Änderungen. Keine Git-Operationen.

---

## 1. tailwind.config.ts — Ist-Stand Custom-Tokens

### `theme.extend.colors` (vollständig)

```ts
colors: {
  /* shadcn/ui Tokens (HSL-Variablen) */
  border:      "hsl(var(--border))",
  input:       "hsl(var(--input))",
  ring:        "hsl(var(--ring))",
  background:  "hsl(var(--background))",
  foreground:  "hsl(var(--foreground))",
  primary:     { DEFAULT: "hsl(var(--primary))",     foreground: "hsl(var(--primary-foreground))" },
  secondary:   { DEFAULT: "hsl(var(--secondary))",   foreground: "hsl(var(--secondary-foreground))" },
  destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
  muted:       { DEFAULT: "hsl(var(--muted))",       foreground: "hsl(var(--muted-foreground))" },
  accent:      { DEFAULT: "hsl(var(--accent))",      foreground: "hsl(var(--accent-foreground))" },
  popover:     { DEFAULT: "hsl(var(--popover))",     foreground: "hsl(var(--popover-foreground))" },
  card:        { DEFAULT: "hsl(var(--card))",        foreground: "hsl(var(--card-foreground))" },

  /* MH3 LearnCon Brand-Farben — Namespace `brand.*` */
  brand: {
    accent:           "var(--color-accent)",          // #FF9B01
    text:             "var(--color-text)",            // #222222
    bg:               "var(--color-bg)",              // #FFFFFF
    "gray-light":     "var(--color-gray-light)",      // #F2F2F2
    "gray-mid-light": "var(--color-gray-mid-light)",  // #D9D9D9
    "gray-mid":       "var(--color-gray-mid)",        // #9D9D9D
    "gray-dark":      "var(--color-gray-dark)",       // #222222 (BUG, siehe Abschnitt 4)
  },
}
```

### Definierte Custom-Token-Namen
- **shadcn-Namespace:** `border`, `input`, `ring`, `background`, `foreground`, `primary.*`, `secondary.*`, `destructive.*`, `muted.*`, `accent.*`, `popover.*`, `card.*`
- **Brand-Namespace:** `brand.accent`, `brand.text`, `brand.bg`, `brand.gray-light`, `brand.gray-mid-light`, `brand.gray-mid`, `brand.gray-dark`

### Existierende Namespaces
- `brand.*` (englisch „gray", US-Schreibweise)
- shadcn-System (HSL-Tokens)
- **NICHT vorhanden:** flat root-level Custom-Farben (`anthracite`, `denver-blue`, `orange`, `grey-*`)

### CSS-Variablen in `globals.css` (`:root`)
| Variable | Wert |
|---|---|
| `--color-accent` | `#FF9B01` |
| `--color-text` | `#222222` |
| `--color-bg` | `#FFFFFF` |
| `--color-gray-light` | `#F2F2F2` |
| `--color-gray-mid-light` | `#D9D9D9` |
| `--color-gray-mid` | `#9D9D9D` |
| `--color-gray-dark` | `#222222` ⚠️ identisch mit `--color-text`, sollte laut CLAUDE.md `#828282` sein |

### Custom Font-Sizes (`theme.extend.fontSize`)
- Definiert: `h1` (3rem), `h2` (2rem), `section-header` (1.75rem), `body` (1rem)
- **NICHT definiert** (in Salvage genutzt): `h1-lg`, `h2-lg`, `h3`, `h3-lg`

---

## 2. Klassen-Inventur in Komponenten

### Suchradius
- `src/components/**/*.tsx` (alle Custom- und UI-Komponenten)
- `src/app/**/*.tsx` (alle Pages)

### 2.1 Vorkommen registrierter Tokens (`brand.*` Namespace) — funktionieren

| Klasse | Anzahl | Dateien |
|---|---:|---|
| `text-brand-text` | 19 | page.tsx, Header, Footer, ContactSection, alle 14 Page-Stubs (h1) |
| `text-brand-gray-dark` | 24 | Footer (5), ContactSection (1), page.tsx (3), Footer-Copyright (1), alle 14 Page-Stubs (Italic-Subtext) |
| `bg-brand-gray-light` | 5 | Header (3 Hover), Footer (1), ContactSection (1), page.tsx (2 in Section-Variants) |
| `border-brand-gray-mid-light` | 6 | Header (2), Footer (2), ContactSection (2), page.tsx (1) |
| `text-brand-gray-mid` | 1 | page.tsx (Shopvote-Platzhalter) |
| **Gesamt brand.*** | **~68** | 20 Dateien |

### 2.2 Vorkommen Salvage-Tokens (NICHT registriert, silently dropped)

| Klasse | Datei:Zeile | Vollständig | Komponente |
|---|---|---|---|
| `border-denver-blue` | BoxedNote.tsx:17 | `border-l-4 border-denver-blue` | BoxedNote |
| `text-grey-dark` | BoxedNote.tsx:19 | `text-body text-grey-dark` | BoxedNote |
| `text-anthracite` | FuehrungAccordion.tsx:45 | `text-anthracite text-base sm:text-lg lg:text-xl` | Trigger |
| `text-anthracite` | FuehrungAccordion.tsx:63 | `text-body text-anthracite leading-relaxed` | AccordionContent |
| `bg-orange` | FuehrungAccordion.tsx:57 | `w-4 h-[2px] bg-orange rounded-sm` | Plus-Bar |
| `bg-orange` | FuehrungAccordion.tsx:58 | `w-4 h-[2px] bg-orange rounded-sm transition-transform` | Minus-Bar |
| `text-denver-blue` | PullQuote.tsx:16 | `text-2xl lg:text-3xl font-medium text-denver-blue` | Quote |
| `border-orange` | PullQuote.tsx:14 | `border-l-4 border-orange` | Akzent-Balken |
| `border-denver-blue` | StatementCard.tsx:24 | `border-[6px] border-denver-blue` | Card-Rahmen |
| `text-denver-blue` | StatementCard.tsx:26 | `text-h3 lg:text-h2-lg font-medium text-denver-blue` | Card-Text |
| `text-h3`, `text-h2-lg` | StatementCard.tsx:26 | (Font-Size, nicht Color) | Card-Text |
| `text-orange` | HexagonBullet.tsx:16 | `className = "text-orange"` (Default Prop) | Bullet |
| `text-orange` | SingleGear.tsx:16 | `className = "text-orange"` (Default Prop) | Icon |
| `text-orange` | ThreeGearsCropped.tsx:37 | `className = "text-orange"` (Default Prop) | Icon |
| `text-orange` | ThreeGearsFull.tsx:33 | `className = "text-orange"` (Default Prop) | Icon |
| `text-orange` | ThreeGearsWithBorder.tsx:33 | `className = "text-orange"` (Default Prop) | Icon |

### 2.3 Standard-Tailwind-Orange (rendert, aber falscher Hex-Wert)

| Klasse | Tatsächlicher Hex | Datei | Anzahl |
|---|---|---|---|
| `text-orange-600` | `#ea580c` (Standard, NICHT Brand) | Header (1), page.tsx (2), impressum (1) | 4 |
| `bg-orange-50` | `#fff7ed` (Standard, NICHT Brand) | Header (2) | 2 |

### 2.4 Arbitrary Values (rendern, aber inkonsistent zur Token-Konvention)

| Klasse | Vorkommen | Anmerkung |
|---|---:|---|
| `text-[#FF9B01]` | ~15 | Header (5), Footer (5), page.tsx (2), ContactSection (2), impressum (1) |
| `border-[#FF9B01]`, `hover:border-[#FF9B01]` | 2 | ContactSection (Hover) |
| `bg-[#FF9B01]` | 1 | page.tsx Telefon-Button |
| `shadow-[8px_8px_0px_0px_#FF9B01]` | 1 | StatementCard Drop-Shadow |
| `bg-[#E5E5E5]`, `hover:bg-[#D8D8D8]` | 2 | FuehrungAccordion Trigger |

---

## 3. Verdikt-Tabelle

Sortiert nach **Anzahl der Vorkommen absteigend**, fokussiert auf nicht registrierte Klassen:

| Klasse | Vorkommen | Existiert in tailwind.config.ts? | Mapping-Vorschlag | Hex-Wert (Quelle) |
|---|---:|---|---|---|
| `text-orange` (default prop) | 5 | ❌ Nein (silently dropped) | flat `orange` ODER `brand.accent` als Alias | `#FF9B01` (CLAUDE.md, globals.css `--color-accent`) |
| `text-denver-blue` / `border-denver-blue` | 4 | ❌ Nein | flat `denver-blue` (Variable in globals.css ergänzen) | `#002244` (Design System v2) |
| `text-anthracite` | 2 | ❌ Nein | flat `anthracite` ODER Alias zu `brand.text` | `#222222` (CLAUDE.md, globals.css `--color-text`) |
| `bg-orange` | 2 | ❌ Nein (silently dropped) | flat `orange` | `#FF9B01` |
| `border-orange` | 1 | ❌ Nein | flat `orange` | `#FF9B01` |
| `text-grey-dark` | 1 | ❌ Nein (silently dropped) | flat `grey-dark` ODER Alias zu `brand.gray-dark` (NACH dessen Hex-Fix) | `#828282` (CLAUDE.md) — derzeit in globals.css fälschlich `#222222` |
| `text-h3`, `text-h2-lg` | 2 (Font-Size) | ❌ Nein | `fontSize.h3`, `fontSize.h2-lg` ergänzen | n/a (Größenskala laut Design System v2) |
| `text-orange-600` | 4 | ✅ Ja (Standard-Tailwind) | Sollte Brand-Hex `#FF9B01` werden, nicht `#ea580c` | inkonsistent — eigentlich falscher Hover-Wert |
| `bg-orange-50` | 2 | ✅ Ja (Standard-Tailwind) | Wie oben | inkonsistent |

### Offen: Salvage-Komponenten ohne Render-Wirkung

7 Komponenten betroffen: BoxedNote, FuehrungAccordion, PullQuote, StatementCard, HexagonBullet, SingleGear, ThreeGearsCropped, ThreeGearsFull, ThreeGearsWithBorder.

Aktueller visueller Zustand (per CSS-Verifikation aus Mini-Prompt G FIX 3):
- Im kompilierten CSS existieren nur `bg-brand-gray-light`, `bg-orange-` (Standard-Skala), `bg-white`.
- Klassen `bg-orange`, `border-orange`, `text-anthracite`, `text-denver-blue`, `border-denver-blue`, `text-grey-dark` sind **nicht** im Output.
- Folge: Diese Komponenten rendern in den Salvage-Stilen nicht wie geplant — `text-orange` fällt auf inherit zurück, `border-denver-blue` zeigt keinen Rand, `bg-orange` ist transparent.

---

## 4. Empfehlung

### a) Inkonsistenzen zwischen CLAUDE.md und tailwind.config.ts

1. **Bug in globals.css:** `--color-gray-dark: #222222` ist identisch mit `--color-text`. Laut CLAUDE.md („Dunkelgrau #828282 für Subtexte") sollte der Wert `#828282` sein. Footer-Subtexte und Italic-Stubs (24 Vorkommen `text-brand-gray-dark`) wirken aktuell wie regulärer Fließtext — Hierarchie geht visuell verloren.
2. **Schreibweisen-Mix:** tailwind.config.ts verwendet englisch `gray-*`, Salvage-Komponenten verwenden britisch `grey-*`. Beide Schreibweisen referenzieren dieselbe Brand-Farbpalette, aber unterschiedliche (bzw. nicht existierende) CSS-Klassen.
3. **Denver-Blau und Anthrazit fehlen in CLAUDE.md.** Das aktuellste Designdokument (`docs/MH3_Design_System_v2.md`, 06.04.2026) führt Denver-Blau (#002244) und Anthrazit (#222222) als zentrale Tokens ein — CLAUDE.md kennt diese Begriffe nicht. CLAUDE.md ist gegenüber Design System v2 outdated.
4. **Hellgrau-Frage:** CLAUDE.md + globals.css = `#F2F2F2`. Im Salvage-Kontext (Continuation-Summary „Block A-Fix") wurde `#F5F5F5` als Section-Hintergrund vereinbart. Diese Entscheidung ist in keiner Datei gespiegelt.

### b) Empfehlung: tailwind.config.ts erweitern (mit Auflagen)

**Pro „config erweitern":**
- Die Salvage-Komponenten verwenden 5 Tokens (orange, denver-blue, anthracite, grey-dark, plus Font-Sizes h3/h2-lg). Diese in der config einmalig zu ergänzen ist günstiger als 7 Komponenten umzuschreiben.
- Die existierenden 68 `brand.*`-Vorkommen bleiben unverändert — kein Risiko für Header, Footer, ContactSection und alle Page-Stubs.
- Design System v2 verlangt die Tokens ohnehin — sie zu ergänzen schließt eine erkannte Lücke, statt eine Krücke einzubauen.

**Konkreter Vorschlag (Sprint 1 oder eigener Sub-Block):**
- In `globals.css`: `--color-denver-blue: #002244`, `--color-anthracite: #222222`, `--color-grey-dark` korrigieren auf `#828282`, `--color-grey-light` auf `#F5F5F5` falls finale Entscheidung.
- In `tailwind.config.ts`: Flat-Tokens `denver-blue`, `anthracite`, `orange` (als Alias zu `brand.accent`), `grey-dark`, `grey-light` ergänzen — gemappt auf die globalen CSS-Variablen.
- `fontSize.h3`, `fontSize.h2-lg` ergänzen.
- CLAUDE.md auf Design System v2 anheben (separater Schritt).

### c) Risiken und blinde Flecken

1. **Doppeltes Token-System:** Nach der Erweiterung existieren `brand.gray-dark` und `grey-dark` parallel mit unterschiedlichen Hex-Werten (vor allem solange `--color-gray-dark` nicht gefixt ist). In einem Folge-Sprint sollten alle `brand.*`-Vorkommen entweder migriert oder die Aliase als kanonische Pfade festgezurrt werden.
2. **shadcn/ui-Komponenten:** `accordion.tsx` nutzt `border-ring`, `text-muted-foreground` etc. — alles HSL-basierte shadcn-Tokens. Erweiterung der Brand-Tokens lässt shadcn unberührt. Risiko gering.
3. **Standard-Tailwind-Orange (text-orange-600, bg-orange-50):** Werden weiterhin Tailwind-Default-Hex liefern (`#ea580c` / `#fff7ed`), nicht Brand-Hex. Das ist ein eigener Bug, der in einem separaten Sprint adressiert werden muss (Header/Footer/Page Hover-States vereinheitlichen).
4. **Mein Scan-Radius:** Regex-Suche in `src/components/` und `src/app/`. Nicht erfasst: dynamisch zusammengesetzte Klassen via Variablen, `cn()`-Aufrufe mit String-Interpolation, Klassen aus MDX/Markdown-Content (existiert hier aktuell nicht, könnte aber bei Content-Pipeline kommen). Restrisiko gering, aber nicht null.
5. **Inkonsistenter Orange-Hex:** Solange `text-orange-600` an manchen Stellen verwendet wird, werden zwei verschiedene Orange-Töne nebeneinander gerendert. Visual Regression möglich, sobald die Tailwind-Default-Klassen durch Brand-Klassen ersetzt werden.
6. **`globals.css`-Bug `--color-gray-dark: #222222`:** Sollte vor jeder Token-Erweiterung gefixt sein, sonst wird der Bug in Aliase weitergetragen.

---

## Zusammenfassung in einem Satz

Das Brand-Token-System (`brand.*`) funktioniert für 68 Vorkommen über 20 Dateien (Header, Footer, ContactSection, Page-Stubs). Die 17 Salvage-Custom-Klassen (orange, denver-blue, anthracite, grey-dark, plus 2 Font-Sizes) werden von Tailwind 3.4 JIT silently verworfen — Build grün, Optik kaputt. Empfohlener Fix: tailwind.config.ts und globals.css um die fehlenden Tokens erweitern (inkl. Bugfix `--color-gray-dark` → `#828282`), bevor Sprint 1 startet.
