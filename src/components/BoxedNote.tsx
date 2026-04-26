/**
 * Boxed Note — dezent hervorgehobener Absatz mit Denver-Blau-Border links.
 * Für persönliche Anmerkungen oder wichtige Schlussgedanken.
 */

interface BoxedNoteProps {
  children: React.ReactNode;
  className?: string;
}

export default function BoxedNote({
  children,
  className = "",
}: BoxedNoteProps) {
  return (
    <div
      className={`max-w-2xl mx-auto border-l-4 border-denver-blue bg-neutral-50 p-6 lg:p-8 rounded-r-md ${className}`}
    >
      <p className="text-body text-brand-gray-dark leading-relaxed">
        {children}
      </p>
    </div>
  );
}
