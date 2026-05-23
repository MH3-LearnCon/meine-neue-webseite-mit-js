---
name: layout-messung
description: Layout-Geometrie im gerenderten DOM per Playwright messen statt Pixel/Prozent raten. Use bei Block-Positionen, Container-Breiten und visuellen Layout-Justierungen mit Praezisionsanforderung.
---

# Layout-Messung im gerenderten DOM

## Wann verwenden

Bei Layout-Justierungen, die visuelle Präzision erfordern und nicht aus dem Code allein erschließbar sind:

- Block-Positionen (left, right, width)
- Container-Geometrien
- Abstände zwischen Elementen
- Verhältnisse zur Viewport-Breite

Diese Methode ersetzt das Raten von Pixel- oder Prozent-Werten.

## Vorgehen

1. Temporäres Playwright-Script unter `scripts/measure-<thema>.mjs` anlegen.
2. Das Script:
   - öffnet die relevante Seite im Browser (zielführende Viewport-Größe, typisch 1920×1080 für Desktop, 768×1024 für Tablet, 375×812 für Mobile)
   - findet das zu messende Element über einen eindeutigen Selektor (data-Attribut bevorzugt, z. B. `data-werte-block="true"`)
   - liest `getBoundingClientRect()` aus
   - gibt left, right, width, top, bottom aus
   - misst zusätzlich umgebende Container für Kontext
3. Messung VOR Änderung durchführen, Ergebnis ins Self-Reporting.
4. Änderung umsetzen.
5. Messung NACH Änderung durchführen, Ergebnis ins Self-Reporting.
6. Script nach Abschluss löschen (war nur Diagnose-Tool).

## Beispiel-Code

```javascript
import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto("http://localhost:3000/community");

const block = await page.locator("[data-werte-block]").boundingBox();
const container = await page.locator("[data-section]").boundingBox();

console.log("Block:", block);
console.log("Container:", container);

await browser.close();
```

## Erfahrung aus Sprint 17

Vor Einführung dieser Methode wurden in Sprint 17 für eine einzelne Block-Position auf `/community` 8 Iterationen mit geratenen Pixel- und Prozent-Werten benötigt. Nach Einführung der DOM-Messung waren noch 2 Iterationen nötig — beide auf konkreter Datenbasis. Methode ist verbindlich für alle Layout-Justierungen mit visueller Präzisionsanforderung.
