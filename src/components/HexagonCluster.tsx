/**
 * Dekoratives Hexagon-Cluster (Design System v2.0)
 *
 * Atmosphärisches Markenelement: 5 Hexagons in unregelmäßiger Komposition.
 * Outline only, Denver-Blau bei 15–20 % Opacity.
 * Positionierung per className von außen steuerbar.
 *
 * Designprinzip: Verschiedene Größen, unregelmäßige Abstände,
 * bewusste Komposition — KEIN gleichmäßiges Honigwaben-Raster.
 */

interface HexagonClusterProps {
  className?: string;
}

/** Flat-top hexagon SVG path */
function hex(cx: number, cy: number, r: number): string {
  const a = r * 0.866; // r × √3/2
  return [
    `M${cx + r},${cy}`,
    `L${cx + r * 0.5},${cy + a}`,
    `L${cx - r * 0.5},${cy + a}`,
    `L${cx - r},${cy}`,
    `L${cx - r * 0.5},${cy - a}`,
    `L${cx + r * 0.5},${cy - a}`,
    "Z",
  ].join(" ");
}

export default function HexagonCluster({ className = "" }: HexagonClusterProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Groß — unten links, angeschnitten */}
      <path d={hex(35, 225, 65)} stroke="currentColor" strokeWidth="2" />
      {/* Mittel — Mitte rechts */}
      <path d={hex(135, 175, 45)} stroke="currentColor" strokeWidth="2" />
      {/* Klein — oben links */}
      <path d={hex(75, 115, 28)} stroke="currentColor" strokeWidth="2" />
      {/* Mini — oben rechts */}
      <path d={hex(165, 125, 18)} stroke="currentColor" strokeWidth="2" />
      {/* Mittel-Klein — unten Mitte, überlappend */}
      <path d={hex(95, 240, 38)} stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
