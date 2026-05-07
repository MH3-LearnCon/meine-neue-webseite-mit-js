# Übergabe-Knowledge-Baustein — nach Sprint 3 Block 1, vor Block 2

**Datum:** 30. April 2026
**Letzter Commit:** `b0524a9` ("feat(sprint3-block1): SituationCard-Komponente + Dev-Stub-Page")
**Branch:** main, gepusht zu origin/main, Worktree sauber

Dieser Baustein dokumentiert den Stand nach Sprint 2 (HeroImagePlaceholder + Führungs-Hero) und Sprint 3 Block 1 (SituationCard-Komponente + Dev-Stub-Page). Er dient als Einstiegsgrundlage für Sprint 3 Block 2.

---

## Stand auf main (ab Sprint 2)

```
b0524a9 feat(sprint3-block1): SituationCard-Komponente + Dev-Stub-Page
5a388ae feat(fuehrung): hero section with image placeholder (Sprint 2)
2e3b7d8 feat: add HeroImagePlaceholder component (R16 pattern)
ad15254 chore: sitemap.xml aus Git-Tracking nehmen, .gitignore ergänzt
13353f1 docs: Übergabe-Knowledge-Baustein nach Sprint 1
```

---

## Erledigt seit letztem Übergabe-Baustein (Sprint 1)

| Sprint / Block | Inhalt |
|---|---|
| **Sprint 2 Block 1** | HeroImagePlaceholder-Komponente als wiederverwendbares Pattern (Commit `2e3b7d8`). Aspect-Ratio 1:1 als Default, pro Subpage individualisierbar |
| **Sprint 2 Block 2** | Führungs-Hero 2-spaltig aufgebaut mit HeroImagePlaceholder (Commit `5a388ae`). R16 abgeschlossen |
| **Sprint 2 Nebenarbeiten** | sitemap.xml aus Git-Tracking genommen, `.gitignore` ergänzt (Commit `ad15254`). Sprint-1-Übergabe-Baustein ins Repo committed (Commit `13353f1`) |
| **Sprint 3 Block 1** | SituationCard-Komponente erstellt + Dev-Stub-Page unter `/dev/situation-card` (Commit `b0524a9`) |

---

## Verbindliche Designentscheidungen

### Aus Sprint 2

- **Aspect-Ratio 1:1 als Default** für HeroImagePlaceholder. Pro Subpage später individualisierbar (z.B. 3:4 für Hochformat-Foto)
- **Eyebrow-Label + Telefon-Button auf Subpage-Heros:** offene Designfrage, bewusst nicht in Sprint 2 gelöst — Sparring-Thema für spätere Sprints

### Aus Sprint 3 Block 1 — SituationCard-Design (verbindlich)

- Card-Hintergrund: weiß (#FFFFFF)
- Border: 1px #D9D9D9 (border-brand-gray-mid-light)
- Schatten: shadow-md (trägt die Card auf weißer Sektion)
- Border-Radius: rounded-lg (8px)
- Orange-Leiste links: 4px (#FF9B01) über volle Card-Höhe
- Padding innen: p-6 md:p-8
- Sektions-agnostisch (auf grau und weiß validiert)
- Layout für Abschnitt 2: 2×2-Grid auf md+ (md:grid-cols-2), Stack auf mobile

---

## Lessons Learned aus Sprint 3 Block 1

- `pnpm build` parallel zu laufendem `pnpm dev` zerschießt den `.next`-Cache — immer Dev-Server stoppen vor Build
- Cursor-Agent hängt manchmal ohne Status-Update — bei Stillstand >5 Minuten: Stop, dann `git status` im Terminal, dann entscheiden
- "Made-with: Cursor"-Trailer in Commits ist unerwünscht (Information Disclosure)
- Allowlist nur für reine Leseoperationen, niemals für verändernde Befehle
- Pflichtdokumente sollten zusätzlich zum Project Knowledge im Repo unter `docs/` liegen (Cursor-Zugriff)

---

## Nächster Schritt: Sprint 3 Block 2

**Auftrag:** Live-Einbau der vier SituationCards in Abschnitt 2 der Führungsseite (`/fuehrung`), plus Cleanup der Dev-Stub-Page.

**Textquelle:** `Fuehrung_Texte_MH3_v1.md`, Abschnitt 2 — vier Situationen mit jeweils Überschrift und Body-Text.

**Vor Code-Auftrag zu klären:** Nichts — Design ist entschieden (Sprint 3 Block 1), Texte liegen vor, Komponente existiert. Block 2 ist reiner Einbau.

---

## Offene Designfragen (Restmaterial aus Sprint 2)

- Eyebrow-Label + Telefon-Button auf Subpage-Heros — konsistente Hero-Sprache über alle Subpages
- Aspect-Ratio pro Subpage finalisieren, sobald echte Fotos vorliegen

---

## Restmaterial für späte Sprints (fortgeschrieben)

- StatementCard Shadow-Tokenisierung (`shadow-[8px_8px_0px_0px_#FF9B01]`)
- FuehrungAccordion Hex-Werte (`bg-[#E5E5E5]`, `hover:bg-[#D8D8D8]`) — Sprint 4 R9
- Footer-Restyling auf Denver-Blau (Sprint 5 R3) — danach Footer-Hover-Farben gegen den dann finalen Footer-BG prüfen
- Sektions-Reihenfolge-Korrektur (Hero weiß → weiß → grau, Marcus' Beobachtung)
- Telefonnummer bricht bei 125% Browser-Skalierung im Desktop-Header auf 2 Zeilen um (aus Sprint-1-Skalierungstest)

---

## Nach-Sprint-6-Liste (fortgeschrieben)

- CLAUDE.md auf Design System v2 anheben (Denver-Blau, Anthrazit, Hellgrau #F5F5F5 ergänzen, alte #F2F2F2 ersetzen)
- Hover-Konvention in Design System v2 dokumentieren
- gray/grey-Schreibweisen-Doppelung im brand.*-Namespace prüfen und vereinheitlichen
- `.claude/launch.json` in `.gitignore` aufnehmen
- Worktree `claude/heuristic-northcutt` aufräumen
- Print-Profil zum Design System ergänzen (Denver-Blau Print #224466, hartes Schwarz #000000, Zwischenton #4A4A4A)
- Logo als SVG (Marcus liefert) → PNG ablösen
- Hero-Section ggf. mit Claude Design verfeinern (Phase 2)

---

## Arbeitsregeln (Fortschreibung)

- Maximal 2 Änderungen pro Block (Ausnahmen mit Begründung im Commit-Body)
- Kein Git-Befehl ohne vorherige Statusprüfung
- Auto-Commit nach jedem erfolgreichen Block
- /visual-check nach jedem Layout-/Farb-/Strukturblock
- Pre-Inspektion vor Edits an Layout-Containern
- TEDIC: absolute Ehrlichkeit über Systemgrenzen
- Sofortiger Stopp bei visuellen Warnungen
- `pnpm dev` stoppen vor `pnpm build` (Lesson Sprint 3 Block 1)
- Bei Cursor-Agent-Hänger >5 Min.: Stop, `git status`, dann entscheiden

---

*Erstellt am 30. April 2026 als Übergabe vor Sprint 3 Block 2.*
