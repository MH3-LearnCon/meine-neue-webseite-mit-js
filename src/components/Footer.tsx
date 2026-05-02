import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import GearIcon from "@/components/GearIcon";

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-gray-light">
      <div className="h-0.5 w-full bg-denver-blue" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Firmeninfo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GearIcon size={28} className="text-orange flex-shrink-0" />
              <span className="text-lg font-extrabold tracking-tight text-brand-text">
                MH3 LearnCon<sup className="text-xs font-normal">®</sup> GmbH
              </span>
            </div>
            <p className="text-sm leading-relaxed text-brand-text">
              Beratung, Training und Sparring für Führung, Karriere und Vertrieb.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold text-brand-text uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-brand-text">
              <li>
                <a
                  href="tel:+491718820277"
                  className="flex items-center gap-2 text-brand-text font-medium hover:text-denver-blue transition-colors"
                  aria-label="Telefon: 0171 88 202 77"
                >
                  <Phone size={15} aria-hidden="true" />
                  0171 88 202 77
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@mh-learncon.com"
                  className="flex items-center gap-2 text-brand-text hover:text-denver-blue transition-colors"
                >
                  <Mail size={15} aria-hidden="true" />
                  kontakt@mh-learncon.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-brand-text">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                <address className="not-italic text-brand-text">
                  MH3 LearnCon<sup className="text-[10px] font-normal">®</sup> GmbH
                  <br />
                  Grafenberger Allee 60
                  <br />
                  40237 Düsseldorf
                </address>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-brand-text uppercase tracking-wider mb-4">
              Weitere Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/angebote"
                  className="text-brand-text hover:text-denver-blue transition-colors"
                >
                  Angebote
                </Link>
              </li>
              <li>
                <Link
                  href="/empfehlungen"
                  className="text-brand-text hover:text-denver-blue transition-colors"
                >
                  Empfehlungen
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-brand-text hover:text-denver-blue transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-brand-text hover:text-denver-blue transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="text-brand-text hover:text-denver-blue transition-colors"
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-brand-gray-mid-light text-center text-sm text-brand-gray-dark">
          <p>© 2006–2026 MH3 LearnCon<sup className="text-[10px] font-normal">®</sup> GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
