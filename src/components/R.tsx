/**
 * R — ®-Zeichen hochgestellt
 *
 * Wiederverwendbare Komponente für die korrekte Darstellung des
 * Registered-Trademark-Zeichens in Wortmarken (z.B. "MH3-EAZEE<R />").
 *
 * Warum Inline-Style statt Tailwind-Klassen:
 * Tailwind Preflight überschreibt das <sup>-Default-Verhalten. Inline-Styles
 * neutralisieren die Preflight-Overrides und setzen die gewünschte Positionierung.
 *
 * Positionierung (typografisches Wortmarken-Pattern):
 * - verticalAlign: baseline neutralisiert das Browser-super-Verhalten
 * - position: relative + top: -0.55em hebt das ® bewusst über die Cap-Höhe
 * - 0.55em ist relativ zur ®-Schriftgröße (0.5em der H1) und skaliert daher
 *   automatisch für Desktop und Mobile
 * - top: -0.55em entspricht ca. 13px Anhebung bei einer 48px-H1 — das positioniert
 *   das ® so, dass es leicht über der Cap-Höhe sitzt (klassisches Wortmarken-Pattern)
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
        verticalAlign: "baseline",
        position: "relative",
        top: "-0.55em",
        lineHeight: 0,
      }}
    >
      ®
    </sup>
  );
}
