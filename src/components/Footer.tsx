import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import GearIcon from "@/components/GearIcon";

export default function Footer() {
  return (
    <footer className="bg-brand-gray-light border-t border-brand-gray-mid-light mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Firmeninfo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GearIcon size={28} className="text-[#FF9B01] flex-shrink-0" />
              <span className="text-lg font-extrabold tracking-tight text-[#222222]">
                MH3 LearnCon<sup className="text-xs font-normal">®</sup> GmbH
              </span>
            </div>
            <p className="text-sm text-brand-gray-dark leading-relaxed">
              Beratung, Training und Sparring für Führung, Karriere und Vertrieb.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold text-brand-text uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-brand-gray-dark">
              <li>
                <a
                  href="tel:+491718820277"
                  className="flex items-center gap-2 hover:text-[#FF9B01] transition-colors font-medium"
                  aria-label="Telefon: 0171 88 202 77"
                >
                  <Phone size={15} aria-hidden="true" />
                  0171 88 202 77
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@mh-learncon.com"
                  className="flex items-center gap-2 hover:text-[#FF9B01] transition-colors"
                >
                  <Mail size={15} aria-hidden="true" />
                  kontakt@mh-learncon.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                <address className="not-italic">
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
                  className="text-brand-gray-dark hover:text-[#FF9B01] transition-colors"
                >
                  Angebote
                </Link>
              </li>
              <li>
                <Link
                  href="/empfehlungen"
                  className="text-brand-gray-dark hover:text-[#FF9B01] transition-colors"
                >
                  Empfehlungen
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-brand-gray-dark hover:text-[#FF9B01] transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-brand-gray-dark hover:text-[#FF9B01] transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="text-brand-gray-dark hover:text-[#FF9B01] transition-colors"
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
