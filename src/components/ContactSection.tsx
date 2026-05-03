import { Phone, Mail, CalendarDays } from "lucide-react";

import { cn } from "@/lib/utils";

interface ContactSectionProps {
  headline?: string;
  subtext?: string;
  /** Zusätzliche Klassen für die äußere `<section>`; Hintergrund `bg-[#F5F5F5]` fest (hat Vorrang). */
  outerClassName?: string;
}

export default function ContactSection({
  headline = "Kontakt aufnehmen",
  subtext = "Sprechen Sie mich direkt an – ich freue mich auf Ihre Nachricht.",
  outerClassName,
}: ContactSectionProps) {
  const content = (
    <>
      {headline && (
        <h2 className="mb-3 text-h2 font-semibold text-brand-text">{headline}</h2>
      )}
      {subtext && (
        <p className="mb-10 text-body text-brand-text">{subtext}</p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href="tel:+491718820277"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-transparent bg-orange px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:border-denver-blue hover:bg-denver-blue hover:text-white"
          aria-label="Jetzt anrufen: 0171 88 202 77"
        >
          <Phone size={18} aria-hidden="true" />
          0171 88 202 77
        </a>

        <a
          href="mailto:kontakt@mh-learncon.com"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-brand-gray-mid-light bg-white px-6 py-3 font-semibold text-brand-text shadow-sm transition-colors hover:border-denver-blue hover:bg-denver-blue hover:text-white"
        >
          <Mail size={18} aria-hidden="true" />
          E-Mail schreiben
        </a>

        <a
          href="https://calendly.com/mh-learncon"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-brand-gray-mid-light bg-white px-6 py-3 font-semibold text-brand-text shadow-sm transition-colors hover:border-denver-blue hover:bg-denver-blue hover:text-white"
        >
          <CalendarDays size={18} aria-hidden="true" />
          Termin online vereinbaren
        </a>
      </div>
    </>
  );

  return (
    <section className={cn(outerClassName, "bg-[#F5F5F5]")}>
      <div className="h-0.5 w-full bg-denver-blue" aria-hidden="true" />
      <div className="pt-6 md:pt-8 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 text-center shadow-md md:p-12">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}
