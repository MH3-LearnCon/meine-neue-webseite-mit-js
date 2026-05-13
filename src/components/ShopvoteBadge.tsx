"use client";

import Script from "next/script";

declare global {
  interface Window {
    createRBadge?: (
      shopId: number,
      badgeType: number,
      protocol: string,
    ) => void;
  }
}

interface ShopvoteBadgeProps {
  /** Standard true — lg:scale-150 wie auf Führung/Karriere/Vertrieb. Für Styleguide false. */
  enlargeOnDesktop?: boolean;
}

export default function ShopvoteBadge({
  enlargeOnDesktop = true,
}: ShopvoteBadgeProps) {
  return (
    <div
      className={
        enlargeOnDesktop
          ? "flex w-full min-w-[250px] origin-center justify-center transform scale-100 lg:scale-150"
          : "flex w-full min-w-[250px] origin-center justify-center transform scale-100"
      }
    >
      <span id="sv-badge-t4" />
      <Script
        src="https://widgets.shopvote.de/js/reputation-badge-v2.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.createRBadge?.(21607, 4, "https");
        }}
      />
    </div>
  );
}
