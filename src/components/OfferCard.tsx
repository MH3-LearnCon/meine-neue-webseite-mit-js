import Link from "next/link";
import type { ReactNode } from "react";

interface OfferCardProps {
  title: ReactNode;
  children: ReactNode;
  ctaText: string;
  ctaHref: string;
}

export default function OfferCard({
  title,
  children,
  ctaText,
  ctaHref,
}: OfferCardProps) {
  return (
    <Link
      href={ctaHref}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border border-brand-gray-mid-light bg-white shadow-md transition-colors duration-200 hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denver-blue focus-visible:ring-offset-2"
    >
      <div className="h-1 w-full shrink-0 bg-denver-blue" aria-hidden="true" />
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
        <h3 className="text-base font-bold leading-snug text-brand-text">
          {title}
        </h3>
        <div className="text-base leading-relaxed text-brand-text">{children}</div>
        <p className="mt-auto pt-1">
          <span className="text-base font-semibold text-orange decoration-2 underline-offset-4 group-hover:text-denver-blue group-hover:underline">
            {ctaText}
          </span>
        </p>
      </div>
    </Link>
  );
}
