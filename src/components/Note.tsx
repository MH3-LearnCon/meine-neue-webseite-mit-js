import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Note — die kanonische Hinweis-Box ("gut zu wissen"-Aside).
 * Zahnrad-Cluster (mit orangem Rand) links in einer vollhöhen Zone fester
 * Breite, per "cover" auf die volle Box-Höhe gefüllt (robust, Standard-Muster
 * für Bild-neben-Text), seitlich leicht angeschnitten; Text rechts.
 * Eine Quelle für alle Seiten-Hinweise. Abstände (z. B. mt-10) per className.
 */
export default function Note({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-stretch overflow-hidden rounded-lg border border-brand-gray-mid-light bg-white shadow-sm",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="w-28 shrink-0 self-stretch bg-cover bg-center bg-no-repeat md:w-32"
        style={{
          backgroundImage:
            "url('/images/gears/01_3_Zahnraeder_angeschnitten_oranger_Rand.svg')",
        }}
      />
      <div className="p-5 text-body leading-relaxed text-brand-text md:p-6">
        {children}
      </div>
    </div>
  );
}
