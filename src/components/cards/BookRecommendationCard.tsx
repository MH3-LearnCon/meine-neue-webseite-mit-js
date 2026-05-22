interface BookRecommendationCardProps {
  author: string;
  title: string;
  description?: string;
  linkDe?: string;
  linkEn?: string;
}

const BUTTON_CLASSES =
  "inline-flex items-center justify-center gap-1.5 rounded-lg border border-brand-gray-mid-light bg-white px-5 py-2.5 text-sm font-semibold text-brand-text shadow-sm transition-colors duration-200 hover:border-denver-blue hover:bg-denver-blue hover:text-white";

export default function BookRecommendationCard({
  author,
  title,
  description = "Persönliche Empfehlung folgt.",
  linkDe,
  linkEn,
}: BookRecommendationCardProps) {
  return (
    <article className="rounded-lg border border-brand-gray-mid-light bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-sm text-brand-gray-dark">{author}</p>
          <h4 className="mt-1 text-xl font-semibold text-brand-text md:text-2xl">
            {title}
          </h4>
          <p className="mt-2 text-base text-brand-text">{description}</p>
        </div>

        {(linkDe || linkEn) && (
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            {linkDe ? (
              <a
                href={linkDe}
                target="_blank"
                rel="noopener noreferrer"
                className={BUTTON_CLASSES}
              >
                Deutsch
                <span className="text-xs font-normal opacity-80">
                  (bezahlter Link)
                </span>
              </a>
            ) : null}
            {linkEn ? (
              <a
                href={linkEn}
                target="_blank"
                rel="noopener noreferrer"
                className={BUTTON_CLASSES}
              >
                Englisch
                <span className="text-xs font-normal opacity-80">
                  (bezahlter Link)
                </span>
              </a>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}
