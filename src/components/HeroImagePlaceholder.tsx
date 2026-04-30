/**
 * Hero-Image-Placeholder (Sprint 2 R16-Pattern)
 *
 * Generischer Bild-Platzhalter für Hero-Sektionen, in denen das finale
 * Bildmaterial noch nicht verfügbar ist. Hellgrauer Hintergrund mit
 * zentrierter Beschriftung. Aspect-Ratio über fest verdrahtete
 * Klassen-Map gesetzt, damit Tailwind alle Varianten zur Compile-Zeit
 * erkennen kann (kein dynamisches Template-String-Splicing).
 *
 * Verwendet ausschließlich registrierte Tailwind-Tokens.
 */

type AspectRatio = "1/1" | "3/4" | "4/3" | "16/9";

interface HeroImagePlaceholderProps {
  /** Beschriftung im Platzhalter (z.B. "Hero-Bild folgt") */
  label: string;
  /** Aspect-Ratio des Platzhalters; Default 1/1 (Quadrat) */
  aspectRatio?: AspectRatio;
}

/* Fest verdrahtete Aspect-Ratio-Klassen-Map.
 * Tailwind 3.4 JIT erkennt nur Klassen, die als kompletter String im
 * Quellcode stehen — daher kein dynamisches Splicing. */
const ASPECT_CLASS: Record<AspectRatio, string> = {
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
};

export default function HeroImagePlaceholder({
  label,
  aspectRatio = "1/1",
}: HeroImagePlaceholderProps) {
  const aspectClass = ASPECT_CLASS[aspectRatio];

  return (
    <div
      className={`flex items-center justify-center bg-brand-gray-mid-light rounded-xl ${aspectClass}`}
      role="img"
      aria-label={label}
    >
      <span className="text-sm text-brand-gray-dark">{label}</span>
    </div>
  );
}
