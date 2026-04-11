/**
 * Pull-Quote — zentriertes Zitat mit orangefarbenem Akzent-Balken links.
 * Wird in Lese-Zonen eingesetzt, max. 1 pro Abschnitt.
 */

interface PullQuoteProps {
  text: string;
  className?: string;
}

export default function PullQuote({ text, className = "" }: PullQuoteProps) {
  return (
    <blockquote
      className={`max-w-xl mx-auto my-12 lg:my-16 pl-6 border-l-4 border-orange ${className}`}
    >
      <p className="text-2xl lg:text-3xl font-medium text-denver-blue leading-snug">
        {text}
      </p>
    </blockquote>
  );
}
