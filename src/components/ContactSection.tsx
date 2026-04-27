import { Phone, Mail, CalendarDays } from "lucide-react";

interface ContactSectionProps {
  headline?: string;
  subtext?: string;
}

export default function ContactSection({
  headline = "Kontakt aufnehmen",
  subtext = "Sprechen Sie mich direkt an – ich freue mich auf Ihre Nachricht.",
}: ContactSectionProps) {
  return (
    <section className="bg-brand-gray-light py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {headline && (
          <h2 className="text-h2 font-semibold text-brand-text mb-3">
            {headline}
          </h2>
        )}
        {subtext && (
          <p className="text-body text-brand-gray-dark mb-10">{subtext}</p>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          {/* 1. Telefon */}
          <a
            href="tel:+491718820277"
            className="flex flex-1 items-center justify-center gap-2 bg-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-anthracite hover:text-white transition-colors shadow-sm"
            aria-label="Jetzt anrufen: 0171 88 202 77"
          >
            <Phone size={18} aria-hidden="true" />
            0171 88 202 77
          </a>

          {/* 2. E-Mail */}
          <a
            href="mailto:kontakt@mh-learncon.com"
            className="flex flex-1 items-center justify-center gap-2 bg-white border border-brand-gray-mid-light text-brand-text font-semibold px-6 py-3 rounded-lg hover:bg-anthracite hover:text-white hover:border-anthracite transition-colors shadow-sm"
          >
            <Mail size={18} aria-hidden="true" />
            E-Mail schreiben
          </a>

          {/* 3. Calendly – externer Link, KEIN iframe (DSGVO!) */}
          <a
            href="https://calendly.com/mh-learncon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 bg-white border border-brand-gray-mid-light text-brand-text font-semibold px-6 py-3 rounded-lg hover:bg-anthracite hover:text-white hover:border-anthracite transition-colors shadow-sm"
          >
            <CalendarDays size={18} aria-hidden="true" />
            Termin online vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
}
