import { CalendarDays, Mail, Phone } from "lucide-react";

import { cn } from "@/lib/utils";

/** Sitewide Kontaktdaten — identisch mit ContactSection.tsx */
const PHONE_HREF = "tel:+491718820277";
const PHONE_DISPLAY = "0171 88 202 77";
const EMAIL_HREF = "mailto:kontakt@mh-learncon.com";
const CALENDLY_HREF = "https://calendly.com/mh-learncon";

const phoneButtonClassName =
  "flex flex-1 items-center justify-center gap-2 rounded-lg border border-transparent bg-orange px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:border-denver-blue hover:bg-denver-blue hover:text-white";

const secondaryButtonClassName =
  "flex flex-1 items-center justify-center gap-2 rounded-lg border border-brand-gray-mid-light bg-white px-6 py-3 font-semibold text-brand-text shadow-sm transition-colors hover:border-denver-blue hover:bg-denver-blue hover:text-white";

interface InlineContactCardProps {
  className?: string;
}

export default function InlineContactCard({ className }: InlineContactCardProps) {
  return (
    <div
      data-inline-contact-card="true"
      className={cn("mx-auto max-w-3xl", className)}
    >
      <div className="rounded-lg bg-white p-8 text-center shadow-md md:p-12">
        <div className="flex flex-col items-stretch justify-center gap-4 md:flex-row md:gap-6">
          <a
            href={PHONE_HREF}
            className={phoneButtonClassName}
            aria-label={`Jetzt anrufen: ${PHONE_DISPLAY}`}
          >
            <Phone size={18} aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>

          <a
            href={EMAIL_HREF}
            className={secondaryButtonClassName}
          >
            <Mail size={18} aria-hidden="true" />
            E-Mail schreiben
          </a>

          <a
            href={CALENDLY_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryButtonClassName}
          >
            <CalendarDays size={18} aria-hidden="true" />
            Termin online vereinbaren
          </a>
        </div>
      </div>
    </div>
  );
}
