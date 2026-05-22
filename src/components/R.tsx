/**
 * R — ®-Zeichen hochgestellt
 *
 * Wiederverwendbare Komponente für die korrekte Darstellung des
 * Registered-Trademark-Zeichens in Wortmarken (z.B. "MH3-EAZEE<R />").
 *
 * Warum Inline-Style statt Tailwind-Klassen:
 * Tailwind Preflight überschreibt das <sup>-Default-Verhalten (vertical-align: baseline,
 * position: relative, top: -0.5em). Das funktioniert bei kleiner Schrift, schiebt das ®
 * bei H1-Größen aber auf Mittelhöhe statt Schulterhöhe.
 * Die Inline-Styles hier setzen das Browser-Default vertical-align: super wieder
 * durch und neutralisieren die Preflight-Overrides.
 *
 * Größe skaliert relativ (em) mit der Eltern-Schriftgröße — funktioniert daher
 * automatisch in Desktop- und Mobile-Schriftgrößen.
 */
export function R() {
  return (
    <sup
      aria-label="eingetragene Marke"
      style={{
        fontSize: "0.5em",
        fontWeight: 400,
        verticalAlign: "super",
        position: "static",
        top: 0,
        lineHeight: 0,
      }}
    >
      ®
    </sup>
  );
}
