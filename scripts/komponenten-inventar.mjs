#!/usr/bin/env node
/**
 * Erzeugt die Bauteil-Liste (Komponenten-Bestand) AUS DEM CODE.
 *
 * Warum es dieses Skript gibt: Eine von Hand gepflegte Bestandsliste veraltet.
 * Am 19.08.2026 fehlten in `_design-system-ist-stand.md` zwoelf vorhandene
 * Komponenten, und eine war genannt, die es nicht mehr gibt. Erzeugte Listen
 * koennen diesen Fehler nicht machen.
 *
 * Aufruf:  node scripts/komponenten-inventar.mjs
 * Schreibt: docs/komponenten-bestand.md   (einzige Datei, die veraendert wird)
 * Liest sonst nur.
 *
 * Vorhandene Beschreibungen in der Zieldatei bleiben erhalten.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join, relative, basename } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, "src");
const OUT = join(ROOT, "docs", "komponenten-bestand.md");

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".tsx") || e.name.endsWith(".ts")) out.push(p);
  }
  return out;
}

if (!existsSync(SRC)) {
  console.error("FEHLER: kein src/-Verzeichnis. Bitte im Projekt-Wurzelverzeichnis ausfuehren.");
  process.exit(1);
}

const alleDateien = walk(SRC);
const quellen = Object.fromEntries(alleDateien.map((f) => [f, readFileSync(f, "utf8")]));

// Komponenten = .tsx direkt unter src/components (inkl. Unterordner), ohne index-Dateien
const komponenten = alleDateien
  .filter((f) => f.includes(join("src", "components")) && f.endsWith(".tsx"))
  .filter((f) => basename(f) !== "index.tsx")
  .map((f) => ({
    name: basename(f).replace(/\.tsx$/, ""),
    pfad: relative(ROOT, f).replace(/\\/g, "/"),
    gruppe: relative(join(SRC, "components"), f).includes("/") ? "icons/Unterordner" : "components",
    zeilen: quellen[f].split("\n").length,
  }))
  .sort((a, b) => a.name.localeCompare(b.name, "de"));

// Verwendung zaehlen: Dateien, die den Namen als ganzes Wort nennen, ohne die eigene Datei
for (const k of komponenten) {
  const re = new RegExp(`\\b${k.name}\\b`);
  k.verwendetIn = alleDateien.filter(
    (f) => !f.endsWith(`${k.name}.tsx`) && re.test(quellen[f])
  ).length;
}

// Vorhandene Beschreibungen retten
const beschreibungen = {};
if (existsSync(OUT)) {
  for (const zeile of readFileSync(OUT, "utf8").split("\n")) {
    const m = zeile.match(/^\|\s*`?([A-Za-z0-9_]+)`?\s*\|[^|]*\|[^|]*\|\s*(.*?)\s*\|\s*$/);
    if (m && m[2] && m[2] !== "—") beschreibungen[m[1]] = m[2];
  }
}

const stand = new Date().toISOString().slice(0, 10);
const ungenutzt = komponenten.filter((k) => k.verwendetIn === 0);

let md = `---
rolle: erzeugte-bestandsliste
titel: "Komponenten-Bestand (erzeugt, nicht von Hand gepflegt)"
erzeugt_am: ${stand}
quelle: "scripts/komponenten-inventar.mjs, gelesen aus src/"
status: aktuell
---

# Komponenten-Bestand

> **Diese Datei wird erzeugt.** Nicht von Hand ergaenzen — ausser in der Spalte
> „Wofuer", die beim naechsten Lauf erhalten bleibt. Neu erzeugen mit:
> \`node scripts/komponenten-inventar.mjs\`
>
> **Was diese Liste NICHT ist:** kein Design-System. Wie etwas aussieht, steht im
> Styleguide unter \`/styleguide\`; die Gestaltungsregeln stehen in \`CLAUDE.md\`.
> Hier steht nur, **welche Bauteile es gibt** — damit niemand ein zweites baut.

**Stand ${stand}: ${komponenten.length} Komponenten.**

| Komponente | Ort | Verwendet in | Wofuer |
|---|---|---|---|
`;

for (const k of komponenten) {
  const warn = k.verwendetIn === 0 ? " ⚠" : "";
  md += `| \`${k.name}\` | ${k.pfad} | ${k.verwendetIn} Dateien${warn} | ${beschreibungen[k.name] ?? "—"} |\n`;
}

md += `
## Nicht verwendet

`;
md += ungenutzt.length
  ? ungenutzt.map((k) => `- \`${k.name}\` (${k.pfad}) — keine Fundstelle ausserhalb der eigenen Datei. Vor dem Loeschen gegen den committeten Baum pruefen: \`git grep ${k.name} HEAD\`.`).join("\n") + "\n"
  : "Keine. Jede Komponente wird mindestens einmal verwendet.\n";

md += `
## Methode und Grenzen

Gezaehlt werden Dateien unter \`src/\`, die den Komponentennamen als ganzes Wort
nennen — die eigene Datei ausgenommen. Das ist eine Textsuche, keine Auswertung des
Uebersetzungsbaums: Ein Name, der in einem Kommentar steht, zaehlt mit. Bei Null
Treffern ist die Aussage belastbar, bei niedrigen Zahlen lohnt der Blick in die Datei.

**Wichtige Grenze — Verwendung ist nicht Erreichbarkeit.** Gezaehlt wird die direkte
Nennung. Eine Komponente, die nur von einer anderen **ungenutzten** Komponente verwendet
wird, erscheint hier trotzdem als „verwendet". Belegter Fall vom 19.08.2026:
\`ui/accordion\` wird ausschliesslich von \`FuehrungAccordion\` benutzt — und die wird
von niemandem benutzt. Bei genau **einer** Fundstelle also nachsehen, ob diese Fundstelle
selbst noch lebt.
`;

mkdirSync(join(ROOT, "docs"), { recursive: true });
writeFileSync(OUT, md, "utf8");

console.log(`Komponenten gefunden: ${komponenten.length}`);
console.log(`Beschreibungen uebernommen: ${Object.keys(beschreibungen).length}`);
console.log(`Nicht verwendet: ${ungenutzt.length}${ungenutzt.length ? " (" + ungenutzt.map(k=>k.name).join(", ") + ")" : ""}`);
console.log(`Geschrieben: ${relative(ROOT, OUT)}`);
