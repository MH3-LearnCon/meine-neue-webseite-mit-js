# Übergabe-Knowledge-Baustein — nach Sprint 1, vor Sprint 2

**Datum:** 27. April 2026
**Letzter Commit:** `99e556b` (sitemap-Pre-Commit über `a46d68c` Logo-Migration)
**Stand:** 11 Commits ahead of `origin/main`. Kein Push.

Dieser Baustein dokumentiert den Stand nach der Token-Hygiene-Phase, der Hover-Konvention, der Logo-Migration und Sprint 1 (R1 + R2). Er dient als Einstiegsgrundlage für Sprint 2.

---

## Stand auf main (ab Phase 0 Abschluss)

```
99e556b chore: refresh sitemap.xml (postbuild artifact)
a46d68c Logo: Bildmarke im Header statt Text-Markup
[sitemap-Pre-Commit]
c8d80ed Hover-Konvention verankern: Buttons -> Anthrazit/Weiß, Wegweiser -> Denver-Blau, Logo ruht
[sitemap-Pre-Commit]
e172fb2 Komponenten-Migration: text-grey-dark + #FF9B01 arbitrary values
d17a905 chore: refresh sitemap.xml (postbuild artifact)
735183b Token-Definition erweitern: denver-blue, anthracite, orange-Alias, fontSize h3/h2-lg
90e6232 docs: add token inventory from Mini-Prompt H
ec6994f fix(HexagonBullet): default size 10px to 12px (Phase 0 Abschluss)
```

---

## Erledigt seit Neustart

| Block | Inhalt |
|---|---|
| **Mini-Prompt H** | Token-Inventur. Knowledge-Datei `docs/Token-Inventur_Mini-Prompt-H.md` |
| **Mini-Prompt I** | Token-Definition. globals.css + tailwind.config.ts erweitert. Bugfix `--color-gray-dark` auf #828282. Hellgrau auf #F5F5F5. Tokens denver-blue, anthracite, orange-Alias. fontSize h3 (1.5rem), h2-lg (2.5rem) |
| **Mini-Prompt J** | Komponenten-Migration. BoxedNote `text-grey-dark` → `text-brand-gray-dark`. 32 arbitrary values `#FF9B01` auf benannte Tokens migriert (inkl. hover-Varianten) |
| **Mini-Prompt K-Bonus** | Hover-Konvention verankert. 17× hover:text-orange + 2× hover:bg-[#828282] + 2× bg-orange-50 migriert |
| **Logo-Migration** | Bildmarke im Header (`Logo_LearnCon_trans_quad_910_910.png`, 56×56). PNG bewusst gewählt — SVG-Konvertierung folgt durch Marcus separat |
| **Sprint 1 R1** | Verifiziert als bereits umgesetzt. Kein Edit nötig. Skalierungstest 75/100/125% erfolgreich |
| **Sprint 1 R2** | Bereits durch Mini-Prompt I erledigt (#F5F5F5) |
| **Sprint-2-Vor-Inspektion** | Container-Stand Startseite + Führungsseite-Stub-Befund |

---

## Verbindliche Designentscheidungen aus diesem Sparring

### Hover-Konvention MH3 LearnCon (projektweit gültig)

- **Buttons sind Handlungen** → `hover:bg-denver-blue hover:text-white hover:border-denver-blue` (komplettes Umkippen, gilt für solid und outline)
- **Inline-Links + Wegweiser** → `hover:text-denver-blue` (Nav-Items zusätzlich `hover:bg-brand-gray-light`)
- **Active-States** → Markierung statisch, kein Hover
- **Logo** → kein Hover-Effekt (Markenidentität ruht)

### Orange-Politik

Genau ein Brand-Orange `#FF9B01`. Keine Light-Variante, keine Opacity-Modifier. Wenn ein dezenter Akzent-Hintergrund nötig ist: `bg-brand-gray-light` (#F5F5F5).

---

## Sprint-2-Befund (aus Vor-Inspektion)

### Startseite Container-Breiten

| Sektion | max-w | Inhaltsstruktur |
|---|---|---|
| Hero | `max-w-7xl` | 2-Spalten-Grid (Text + Foto), `lg:grid-cols-2`, `gap-12 lg:gap-16` |
| 4 Situationen | `max-w-4xl` | Fließtext-Karten (jeweils 1-spaltig: H2, Body, CTA) |
| Kurzprofil "Drei Perspektiven" | `max-w-4xl` | Fließtext mit Gear-Icon-Heading |
| Shopvote-Platzhalter | `max-w-4xl` | Zentrierter Text + dashed-border Box |
| ContactSection | `max-w-3xl` | Zentrierter Text + 3-Button-Row |

Nested innerhalb Hero: Body-Paragraph `max-w-lg`, Profilfoto `max-w-sm`.

### Hero-Stand Startseite

2-Spalten-Grid bereits umgesetzt. Profilfoto fest verdrahtet als JPG (`/Marcus_Holzheimer_Startseit.jpg`, 480×640, Hochformat 3:4). Logo aus Logo-Migration sitzt im Header oben links. Kein Bild-Platzhalter-Pattern im Repo.

### Führungsseite-Stand

**Stub mit 18 Zeilen.** Nur H1 + Italic-Paragraph "Seiteninhalte folgen in einer späteren Phase." Komplett leer. R16 (2-Spalten-Hero mit Bild-Platzhalter) und alle 9 geplanten Sektionen (Hero, 4 Situationen, "Wie ich arbeite", Themen, Schritte, Akkordeon, Bootcamp, Shopvote, Kontakt) müssen neu aufgebaut werden.

**Salvage-Komponenten verfügbar und einsatzbereit:** BoxedNote, FuehrungAccordion, PullQuote, StatementCard, HexagonBullet, GearIcon, SingleGear, ThreeGearsCropped, ThreeGearsFull, ThreeGearsWithBorder.

---

## Nächster Schritt: Sparring-Runde Sprint 2

Vor Code-Auftrag müssen folgende Fragen gemeinsam geklärt werden:

1. **R15 für Startseite:** Container-Logik ist bereits annähernd Dokument-4-R15-konform. Was, wenn überhaupt, soll auf der Startseite noch geändert werden?

2. **R16 für Startseite:** Hero ist bereits 2-spaltig mit Profilfoto. R16-Forderung "Bild-Platzhalter mit min-height 400px" gilt eigentlich für Führungsseite. Bestätigen oder korrigieren?

3. **Führungsseite-Aufbau:** Komplette Neuanlage. In einem Sprint 2 (riskant) oder gesplittet (Sprint 2 = nur Hero, Sprint 3 = Situationen+Akkordeon, etc.)?

4. **Bild-Platzhalter-Pattern definieren:** `bg-[#E5E5E5] rounded-xl min-h-[400px]` mit "Hero-Bild folgt"-Span (aus alter Vor-Crash-Vorlage). Sobald definiert, wiederverwendbar.

5. **Inhalte:** Texte liegen in `Fuehrung_Texte_MH3_v1.md`. Code kann direkt aus der Markdown-Datei lesen und einbauen.

---

## Folge-Items aus Sprint 1 R1 Skalierungstest

- Telefonnummer im Desktop-Header bricht bei 125% Browser-Skalierung auf 2 Zeilen um. Mögliche Fixes: `whitespace-nowrap` am Phone-Link, oder Phone-Link erst bei `xl:` einblenden. → in Sprint 2 oder eigener Mini-Block adressieren.

---

## Restmaterial für späte Sprints

- StatementCard Shadow-Tokenisierung (`shadow-[8px_8px_0px_0px_#FF9B01]`)
- FuehrungAccordion Hex-Werte (`bg-[#E5E5E5]`, `hover:bg-[#D8D8D8]`) — Sprint 4 R9
- Footer-Restyling auf Denver-Blau (Sprint 5 R3) — danach Footer-Hover-Farben gegen den dann finalen Footer-BG prüfen (aktuell: hellgrau-BG, Hover-Logik passt; bei Wechsel auf Denver-Blau-BG müssen Footer-Hover-Farben erneut angefasst werden)
- Sektions-Reihenfolge-Korrektur (Hero weiß → weiß → grau, Marcus' Beobachtung)

---

## Nach-Sprint-6-Liste (Knowledge-Bausteine)

- CLAUDE.md auf Design System v2 anheben (Denver-Blau, Anthrazit, Hellgrau #F5F5F5 ergänzen, alte #F2F2F2 ersetzen)
- Hover-Konvention in Design System v2 dokumentieren
- gray/grey-Schreibweisen-Doppelung im brand.*-Namespace prüfen und vereinheitlichen
- sitemap.xml-Pre-Commit-Pattern: in `.gitignore` aufnehmen oder als CI-Schritt verankern (drei Möglichkeiten in Sparring vom 26.04. diskutiert)
- `.claude/launch.json` in `.gitignore` aufnehmen
- Worktree `claude/heuristic-northcutt` aufräumen
- Print-Profil zum Design System ergänzen (Denver-Blau Print #224466, hartes Schwarz #000000, Zwischenton #4A4A4A — bewusst getrennt von Screen-Profil)
- Lessons-Learned-Note: nach `pnpm build` während laufendem Dev-Server `.next` löschen, sonst zeigt DevTools alten Cache
- Lessons-Learned-Note: Inventuren prefix-getrennt erfassen (nackt vs. hover:) — Mini-Prompt-J-Erkenntnis
- Logo als SVG (Marcus liefert) → PNG ablösen
- Hero-Section ggf. mit Claude Design verfeinern (Phase 2)

---

## Arbeitsregeln (Fortschreibung Dokument 3)

- Maximal 2 Änderungen pro Block (Ausnahmen mit Begründung im Commit-Body)
- Kein Git-Befehl ohne vorherige Statusprüfung
- Auto-Commit nach jedem erfolgreichen Block
- /visual-check nach jedem Layout-/Farb-/Strukturblock (manuell anhand `.claude/skills/visual-check.md`)
- Pre-Inspektion vor Edits an Layout-Containern
- TEDIC: absolute Ehrlichkeit über Systemgrenzen
- Sofortiger Stopp bei visuellen Warnungen
- sitemap-Pre-Commit als Standardmuster zwischen inhaltlichen Blöcken (solange `.gitignore`-Aufnahme nicht erfolgt)

---

*Erstellt am 27. April 2026 als Übergabe vor Sprint 2.*
