# Skill: Annotiertes Prüf-Dokument bauen — MH3 LearnCon® GmbH

> **Zweck:** Bau-Muster für Prüf-/Rechts-Dokumente, die in ZWEI Fassungen gebraucht werden — eine saubere SSoT-Fassung und eine annotierte Fassung (für Anwalt/Reviewer) im einheitlichen Karten-Stil mit typisierten Anmerkungen. Bisher damit gebaut: Community-Nutzungsbedingungen, Community-DSE, Community-Richtlinien.
> **Wann lesen:** VOR dem Bau oder der Überarbeitung eines annotierten Prüf-Dokuments (Rechtstext, Review-Vorlage) mit farbigen Anmerkungs-Karten.
> **Ablage im Repo:** `.claude/skills/annotiertes-dokument-bauen.md`. Konkrete aktuelle Skripte: `C:\Projekte\TypingMind\_anwaltspaket-community-2026-07-26\_generatoren\`.

---

## 1. Das Muster: zwei Fassungen aus EINER Quelle

Aus einer strukturierten Inhaltsquelle immer zwei Outputs erzeugen:

| Fassung | Format | Zweck / Ablage |
|---|---|---|
| **Clean (SSoT)** | reine Markdown, ohne Anmerkungen | lebende Quelle / 2nd Brain / Paket `01_dokumente-stand-heute` |
| **Annotiert** | HTML (rendert) + Word (.docx) | Wortlaut oben, darunter — nur wo nötig — Anmerkungs-Karten; Paket `02_mit-kommentaren-fuer-anwalt` |

Prinzip: **near-final Text + Anmerkungen nur wo nötig**. Absätze ohne Kasten brauchen keine Prüfung. Keine ängstlichen „genügt das?"-Anmerkungen (kosten Anwaltsstunden), keine Marktbehauptungen, keine Personennamen. Bei belastbaren Rechtsaussagen: gesicherte Rechtslage von Einschätzung trennen.

---

## 2. Anmerkungs-Typen (Callouts)

| Typ | Chip-Label | Chip-Farbe / Hintergrund | Wofür |
|---|---|---|---|
| `frage` | Frage an die juristische Prüfung | #1558D6 / #EEF4FF | echte offene Rechtsfrage |
| `anfrage` | Laufende Anbieter-Anfrage | #7C3AED / #F3EEFC | Circle/ablefy angefragt, Antwort steht aus |
| `aenderung` | Änderung ggü. Vorfassung | #9A6700 / #FDF5E3 | was geändert wurde + warum |
| `rahmen` | Rahmenbedingung (gesetzt) | #475569 / #EEF1F5 | Entscheidung/Setup fix |
| `erledigt` | Erledigt / zur Kenntnis | #137333 / #EAF6EE | **INTERN** — in der Anwalts-Fassung RAUS |

Regeln: „erledigt"-Karten (grün) sind interne Notizen → für die Anwalts-Fassung entfernen. Set klein halten (meist reichen 3 Typen pro Dokument). Legende oben ins Dokument setzen.

---

## 3. Generator (Python → annotierte HTML + Clean-MD)

`gen_richtlinie.py` ist das klarste Beispiel. Datenstruktur:

```python
SECTIONS = [ (titel, [absatz, ...], A(co=[(typ, text), ...]) oder None), ... ]
def A(co=None): return dict(co=co or [])
def esc(s): return html.escape(s, quote=False).replace("\n","<br>")
```

Ein Durchlauf schreibt beide Outputs (annotierte HTML + clean-MD). Absätze mit `\n` = Bullet-Blöcke (`esc` macht `<br>` daraus).

**Quote-Sicherheit (wichtig, sonst bricht der Python-String):** in deutschen Strings NUR ASCII-Single-Quotes oder deutsche „…"-Anführungen; NIE ASCII-Double-Quotes im Inhalt; Python-Strings mit `"..."` delimitieren.

---

## 4. CSS (Karten-Stil — verbindlich, damit alle Dokumente gleich aussehen)

```css
.wrap{max-width:820px;margin:0 auto;padding:30px 18px 70px;}
h1{font-size:22px;} .sub{color:#5b6470;font-size:13.5px;margin-bottom:18px;}
.sec{margin:0 0 26px;}
h2{font-size:16px;margin:26px 0 12px;padding-bottom:6px;border-bottom:2px solid #e4e7ec;}
.para{font-size:14.5px;margin:0 0 8px;}
.ann{margin:6px 0 16px 22px;background:#f7f9fc;border-left:3px solid #cbd5e1;
     border-radius:0 8px 8px 0;padding:10px 14px;font-size:13px;}
.co{margin:8px 0 0;padding:8px 10px;border-radius:7px;font-size:13px;}
.cotext{display:block;margin-top:3px;}
.cochip{display:inline-block;padding:1px 8px;border-radius:12px;font-size:10.5px;font-weight:700;}
.co-frage{background:#eef4ff;}   .cochip-frage{background:#1558d6;color:#fff;}
.co-anfrage{background:#f3eefc;}  .cochip-anfrage{background:#7c3aed;color:#fff;}
.co-aenderung{background:#fdf5e3;}.cochip-aenderung{background:#9a6700;color:#fff;}
.co-rahmen{background:#eef1f5;}   .cochip-rahmen{background:#475569;color:#fff;}
.co-erledigt{background:#eaf6ee;} .cochip-erledigt{background:#137333;color:#fff;}
```

---

## 5. Word-Pipeline (docx-js)

- `export_*.py` liest die SECTIONS/ANN und schreibt `*.json`: `{title, subtitle, legend:[[typ,beschr]], sections:[{heading, paras:[{n,text,ann}], ann}]}`.
- `build_docx.js` (npm `docx`, vorinstalliert) baut die `.docx`: Anmerkungs-Blöcke als **schattierte** Absätze. Maps `CO_LABEL / CO_FILL / CO_COLOR` je Typ.
  - **`ShadingType.CLEAR`** verwenden (nie `SOLID` → rendert schwarz).
  - **Bullets:** Absätze mit `\n` beim Export in EINZELNE Absätze splitten — docx rendert `\n` nicht als Umbruch.
- Neuen Callout-Typ ergänzen = an ZWEI Stellen: HTML-CSS (Abschnitt 4) UND die drei `CO_*`-Maps in `build_docx.js`.

---

## 6. Verify (Pflicht, nicht raten)

- **HTML:** `grep` auf Schlüssel-Strings (z. B. „Mangopay" vorhanden, „Google Analytics" = 0).
- **Word:** rendern und ansehen — `python scripts/office/soffice.py --headless --convert-to pdf x.docx` → `pdftoppm -jpeg -r 90 x.pdf seite` → Bild lesen (Titel, Legende, schattierte Anmerkungs-Blöcke sitzen richtig?).

---

## 7. Ablage-Konvention (kein Drift)

- Clean-MD → Paket `01_dokumente-stand-heute\` **und** lebende Quelle (TypingMind-Wurzel/Repo).
- Annotiert HTML + Word → Paket `02_mit-kommentaren-fuer-anwalt\`.
- Immer BEIDE Orte (Snapshot + lebende Quelle) committen und danach gegenlesen.

---

## 8. Checkliste vor dem Ausliefern

- [ ] Clean + annotiert aus derselben Quelle erzeugt (kein Auseinanderlaufen)?
- [ ] „erledigt"-/interne Karten für die Anwalts-Fassung entfernt?
- [ ] Keine Personennamen, keine Marktbehauptungen, keine ängstlichen Fragen?
- [ ] Callout-Typ in HTML-CSS UND `build_docx.js`-Maps konsistent?
- [ ] HTML per grep geprüft, Word gerendert + Bild angesehen?
- [ ] Clean an SSoT/lebende Quelle, annotiert ins Paket 02 committet — beide Orte?

---

*Erstellt 28.07.2026. Domäne: Cowork/Dokumentenbau (nicht Website-Repo-spezifisch, liegt aber hier im Skills-Ordner). Quellen: `_generatoren/` (gen_full/gen_dse/gen_richtlinie.py, build_docx.js, export_*.py); Memory `feedback-anwaltsdokument-selbstbewusst-gezielt`, `feedback-keine-widgets`, `community-richtlinie-und-kuendigung-stand`.*
