import Link from "next/link";
import type { ReactNode } from "react";

interface OfferCardProps {
  title: string;
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
    <article className="flex flex-col overflow-hidden rounded-lg border border-brand-gray-mid-light bg-white shadow-md">
      <div
        className="h-1 w-full shrink-0 rounded-t-lg bg-denver-blue"
        aria-hidden="true"
      />
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
        <h3 className="text-base font-medium leading-snug text-brand-text">
          {title}
        </h3>
        <div className="text-base leading-relaxed text-brand-text">
          {children}
        </div>
        <p className="mt-auto pt-1">
          <Link
            href={ctaHref}
            className="text-base text-orange hover:underline underline-offset-4 decoration-2"
          >
            {ctaText}
          </Link>
        </p>
      </div>
    </article>
  );
}
