/**
 * Statement Card (Design System v2.0, Block B+C-Fix-2)
 *
 * Weißer Hintergrund, 3px Denver-Blau-Rahmen, harter Orange-Versatzschatten (4px).
 * Keine Rotation — statisch, präzise, handwerklich.
 * Text zentriert (horizontal + vertikal), quadratisches Seitenverhältnis (`aspect-square`).
 *
 * Copy-Regeln: Max 15–20 Wörter, keine Floskeln, keine CTAs.
 */

interface StatementCardProps {
  /** Der Statement-Text (max 15–20 Wörter) */
  text: string;
  /** Zusätzliche CSS-Klassen */
  className?: string;
}

export default function StatementCard({
  text,
  className = "",
}: StatementCardProps) {
  return (
    <div
      className={`bg-white border-[3px] border-denver-blue rounded-lg p-6 lg:p-8 shadow-[4px_4px_0px_0px_#FF9B01] aspect-square w-full flex items-center justify-center text-center ${className}`}
    >
      <p className="text-lg lg:text-xl font-semibold text-denver-blue leading-snug">
        {text}
      </p>
    </div>
  );
}
