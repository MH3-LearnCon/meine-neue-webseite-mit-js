/**
 * SituationCard (Sprint 3)
 *
 * Wiederverwendbare Card für Subpages (Führung, Karriere, Vertrieb,
 * Simulation), die typische Klient:innen-Situationen als Frage-Antwort-
 * Paar darstellt. Ruhiger Look: weißer Hintergrund, dezenter Rahmen,
 * 4 px Orange-Leiste links als einziger Akzent.
 *
 * Optionaler Inline-Link am Ende für künftige Verwendung
 * (z.B. CTA "Mehr erfahren"). In Sprint 3 noch nicht aktiv genutzt.
 *
 * Verwendet ausschließlich registrierte Tailwind-Tokens.
 */

import Link from "next/link";

interface SituationCardProps {
  /** Frage-Überschrift (H3) */
  headline: string;
  /** Body-Text */
  body: string;
  /** Optional: Ziel-URL für Inline-CTA am Ende */
  linkHref?: string;
  /** Optional: Text des Inline-CTA */
  linkLabel?: string;
  /** Kompaktere Headline und reduziertes Padding */
  compact?: boolean;
  /** Akzentfarbe der linken Leiste */
  accent?: "orange" | "blue";
  /** Dezenter Hover (leichtes Anheben + tieferer Schatten, keine Farbänderung) */
  hover?: boolean;
}

export default function SituationCard({
  headline,
  body,
  linkHref,
  linkLabel,
  compact = false,
  accent = "orange",
  hover = false,
}: SituationCardProps) {
  const accentBorder =
    accent === "blue" ? "border-l-denver-blue" : "border-l-orange";

  return (
    <article
      className={[
        "bg-white",
        "border border-brand-gray-mid-light",
        "border-l-4",
        accentBorder,
        "shadow-md",
        "rounded-lg",
        compact ? "p-5 md:p-6" : "p-6 md:p-8",
        hover
          ? "transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          : "",
      ].join(" ")}
    >
      <h3
        className={
          compact
            ? "text-lg font-semibold text-anthracite leading-snug mb-4"
            : "text-h3 font-semibold text-anthracite leading-snug mb-4"
        }
      >
        {headline}
      </h3>
      <p className="text-body text-anthracite">{body}</p>

      {linkHref && linkLabel && (
        <p className="mt-6">
          <Link
            href={linkHref}
            className="text-body text-orange font-semibold hover:text-denver-blue transition-colors"
          >
            {linkLabel}
          </Link>
        </p>
      )}
    </article>
  );
}
