import type { ReactNode } from "react";

interface ExternalQuoteCardProps {
  children: ReactNode;
  source?: string;
}

export default function ExternalQuoteCard({
  children,
  source,
}: ExternalQuoteCardProps) {
  return (
    <div className="relative rounded-lg bg-white p-6 shadow-md md:p-8">
      <span
        className="absolute left-4 top-4 text-6xl leading-none text-orange md:left-6 md:top-6"
        style={{ fontFamily: "Georgia, serif", lineHeight: 0.6 }}
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <div className="pl-12 text-base leading-relaxed text-brand-text md:pl-14">
        {children}
      </div>
      {source ? (
        <p className="mt-3 pl-12 text-sm text-brand-gray-dark md:pl-14">
          {source}
        </p>
      ) : null}
    </div>
  );
}
