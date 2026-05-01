import { Phone, Mail, CalendarDays } from "lucide-react";

interface ContactSectionProps {
  headline?: string;
  subtext?: string;
  /** Optional: ersetzt die äußere Section (Default wie Startseite). */
  outerClassName?: string;
  /** Unterseiten: orange R5-Linie in max-w-4xl-Spur */
  withR5Divider?: boolean;
}

const DEFAULT_SHELL = "bg-brand-gray-light py-16 px-4";

export default function ContactSection({
  headline = "Kontakt aufnehmen",
  subtext = "Sprechen Sie mich direkt an – ich freue mich auf Ihre Nachricht.",
  outerClassName,
  withR5Divider = false,
}: ContactSectionProps) {
  const shellClass = outerClassName ?? DEFAULT_SHELL;

  const content = (
    <>
      {headline && (
        <h2 className="mb-3 text-h2 font-semibold text-brand-text">{headline}</h2>
      )}
      {subtext && (
        <p className="mb-10 text-body text-brand-gray-dark">{subtext}</p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href="tel:+491718820277"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-orange px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-anthracite hover:text-white"
          aria-label="Jetzt anrufen: 0171 88 202 77"
        >
          <Phone size={18} aria-hidden="true" />
          0171 88 202 77
        </a>

        <a
          href="mailto:kontakt@mh-learncon.com"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-brand-gray-mid-light bg-white px-6 py-3 font-semibold text-brand-text shadow-sm transition-colors hover:border-anthracite hover:bg-anthracite hover:text-white"
        >
          <Mail size={18} aria-hidden="true" />
          E-Mail schreiben
        </a>

        <a
          href="https://calendly.com/mh-learncon"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-brand-gray-mid-light bg-white px-6 py-3 font-semibold text-brand-text shadow-sm transition-colors hover:border-anthracite hover:bg-anthracite hover:text-white"
        >
          <CalendarDays size={18} aria-hidden="true" />
          Termin online vereinbaren
        </a>
      </div>
    </>
  );

  if (withR5Divider) {
    return (
      <section className={shellClass}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-10 h-[2px] w-[60px] bg-orange md:mb-12"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-3xl text-center">{content}</div>
        </div>
      </section>
    );
  }

  return (
    <section className={shellClass}>
      <div className="mx-auto max-w-3xl text-center">{content}</div>
    </section>
  );
}
