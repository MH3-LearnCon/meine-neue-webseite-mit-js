import Link from "next/link";
import type { ReactNode } from "react";

interface OfferCardProps {
  title: ReactNode;
  children: ReactNode;
  ctaText: string;
  /** Link-Modus: Karte navigiert. */
  ctaHref?: string;
  /** Button-Modus: Karte löst eine Aktion aus (z. B. Modal öffnen). */
  onClick?: () => void;
  /** Ref-Callback im Button-Modus (für Fokus-Rückgabe nach Modal-Schluss). */
  cardRef?: (node: HTMLButtonElement | null) => void;
  kategorie?: string;
  compact?: boolean;
}

const cardClasses =
  "group flex cursor-pointer flex-col overflow-hidden rounded-lg border border-brand-gray-mid-light bg-white text-left shadow-md transition-colors duration-200 hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denver-blue focus-visible:ring-offset-2";

export default function OfferCard({
  title,
  children,
  ctaText,
  ctaHref,
  onClick,
  cardRef,
  kategorie,
  compact = false,
}: OfferCardProps) {
  const inner = (
    <>
      <div className="h-1 w-full shrink-0 bg-denver-blue" aria-hidden="true" />
      <div
        className={
          compact
            ? "flex flex-1 flex-col gap-3 p-5"
            : "flex flex-1 flex-col gap-4 p-6 md:p-8"
        }
      >
        {kategorie ? (
          <p className="text-xs font-medium uppercase tracking-wide text-brand-gray-dark">
            {kategorie}
          </p>
        ) : null}
        <h3 className="text-base font-bold leading-snug text-brand-text">
          {title}
        </h3>
        <div className="text-base leading-relaxed text-brand-text">
          {children}
        </div>
        <p className="mt-auto pt-1">
          <span className="text-base font-semibold text-orange group-hover:text-denver-blue transition-colors">
            {ctaText}
          </span>
        </p>
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        ref={cardRef}
        className={`${cardClasses} w-full`}
      >
        {inner}
      </button>
    );
  }

  return (
    <Link href={ctaHref ?? "#"} className={cardClasses}>
      {inner}
    </Link>
  );
}
