/**
 * Statement Card (Design System v2.0, Block B+C-Fix-2)
 *
 * Weißer Hintergrund, 6px Denver-Blau-Rahmen, harter Orange-Versatzschatten (8px).
 * Keine Rotation — statisch, präzise, handwerklich.
 * Text zentriert (horizontal + vertikal).
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
      className={`bg-white border-[6px] border-denver-blue rounded-lg p-6 lg:p-8 shadow-[8px_8px_0px_0px_#FF9B01] flex items-center justify-center text-center ${className}`}
    >
      <p className="text-h3 lg:text-h2 text-denver-blue leading-snug">
        {text}
      </p>
    </div>
  );
}
