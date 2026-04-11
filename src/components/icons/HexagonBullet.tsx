/**
 * Mini-Hexagon als Bullet-Marker (Design System v2.0)
 *
 * Gefülltes Hexagon, 8–10px, Orange.
 * Verwendung: Aufzählungslisten (z.B. Themen-Liste auf der Führungsseite).
 * Wiederverwendbar auf allen Seiten.
 */

interface HexagonBulletProps {
  size?: number;
  className?: string;
}

export default function HexagonBullet({
  size = 10,
  className = "text-orange",
}: HexagonBulletProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="currentColor"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Flat-top hexagon, center (5,5), radius 5 */}
      <polygon points="10,5 7.5,9.33 2.5,9.33 0,5 2.5,0.67 7.5,0.67" />
    </svg>
  );
}
