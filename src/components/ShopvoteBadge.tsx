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

export default function ShopvoteBadge() {
  return (
    <div className="flex w-full min-w-[250px] origin-center justify-center transform scale-100 lg:scale-150">
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
