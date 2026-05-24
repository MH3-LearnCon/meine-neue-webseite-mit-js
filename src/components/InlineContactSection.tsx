import { CalendarDays, Mail, Phone } from "lucide-react";

/** Sitewide Kontaktdaten — identisch mit ContactSection.tsx */
const PHONE_HREF = "tel:+491718820277";
const PHONE_DISPLAY = "0171 88 202 77";
const EMAIL_HREF = "mailto:kontakt@mh-learncon.com";
const CALENDLY_HREF = "https://calendly.com/mh-learncon";

const phoneButtonClassName =
  "flex flex-1 items-center justify-center gap-2 rounded-lg border border-transparent bg-orange px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:border-denver-blue hover:bg-denver-blue hover:text-white";

const secondaryButtonClassName =
  "flex flex-1 items-center justify-center gap-2 rounded-lg border border-brand-gray-mid-light bg-white px-6 py-3 font-semibold text-brand-text shadow-sm transition-colors hover:border-denver-blue hover:bg-denver-blue hover:text-white";

export default function InlineContactSection() {
  return (
    <section
      data-inline-contact-section="true"
      className="bg-[#F5F5F5] py-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto mb-8 max-w-5xl text-center text-h2 font-semibold text-brand-text md:mb-10">
          Sprechen wir miteinander.
        </h2>

        <div className="mx-auto max-w-5xl rounded-lg bg-white p-8 text-center shadow-md md:p-12">
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={PHONE_HREF}
              className={phoneButtonClassName}
              aria-label={`Jetzt anrufen: ${PHONE_DISPLAY}`}
            >
              <Phone size={18} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>

            <a href={EMAIL_HREF} className={secondaryButtonClassName}>
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
    </section>
  );
}
