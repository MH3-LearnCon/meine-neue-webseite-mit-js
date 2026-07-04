"use client";

import { useEffect, useState } from "react";

interface ProgressBarProps {
  /** Zielwert in Prozent (0-100). */
  value: number;
  className?: string;
}

export default function ProgressBar({ value, className = "" }: ProgressBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setWidth(value);
      return;
    }

    // kurze Verzoegerung, damit die Fuell-Animation beim Laden sichtbar startet
    const t = setTimeout(() => setWidth(value), 120);
    return () => clearTimeout(t);
  }, [value]);

  return (
    <div
      className={`w-full ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Fortschritt: ${value} Prozent`}
    >
      <div className="h-9 w-full overflow-hidden rounded-full bg-brand-gray-mid-light">
        <div
          className="flex h-full items-center justify-end rounded-full bg-orange pr-4 transition-[width] duration-700 ease-out"
          style={{ width: `${width}%` }}
        >
          <span className="text-sm font-semibold text-white">{value} %</span>
        </div>
      </div>
    </div>
  );
}
