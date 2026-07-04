"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

// Auf den Funnel-Seiten ersetzt ein minimaler Rechts-Footer die volle Navigation.
// Impressum und Datenschutz muessen rechtlich von jeder Seite erreichbar bleiben.
const FUNNEL_ROUTE = /\/(fast-geschafft|geschafft)(\/|$)/;

export default function ConditionalFooter() {
  const pathname = usePathname();

  if (FUNNEL_ROUTE.test(pathname)) {
    return (
      <footer className="w-full border-t border-brand-gray-mid-light px-4 py-6 text-center text-xs text-brand-gray-dark">
        <div className="flex items-center justify-center gap-4">
          <Link href="/impressum" className="transition-colors hover:text-denver-blue">
            Impressum
          </Link>
          <span aria-hidden="true">&middot;</span>
          <Link href="/datenschutz" className="transition-colors hover:text-denver-blue">
            Datenschutz
          </Link>
        </div>
      </footer>
    );
  }

  return <Footer />;
}
