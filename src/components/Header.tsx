"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS: { label: string; href: string; sup?: string }[] = [
  { label: "Startseite", href: "/" },
  { label: "Führung", href: "/fuehrung" },
  { label: "Karriere", href: "/karriere" },
  { label: "Vertrieb", href: "/vertrieb" },
  { label: "Management Simulation", href: "/simulation" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "MH3-EAZEE", href: "/community", sup: "®" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-brand-gray-mid-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 text-xl lg:text-2xl font-extrabold tracking-tight text-brand-text transition-colors"
          >
            MH3 <span className="text-orange">LearnCon<sup className="text-xs font-normal">®</sup></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Hauptnavigation">
            {NAV_LINKS.map(({ label, href, sup }) => {
              const isActive =
                href === "/"
                  ? pathname === "/"
                  : pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
                    isActive
                      ? "text-orange border-b-2 border-orange"
                      : "text-brand-text hover:text-denver-blue hover:bg-brand-gray-light"
                  )}
                >
                  {label}{sup && <sup className="text-[10px] font-normal">{sup}</sup>}
                </Link>
              );
            })}
          </nav>

          {/* Telefon + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+491718820277"
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-orange hover:text-denver-blue transition-colors"
              aria-label="Jetzt anrufen: 0171 88 202 77"
            >
              <Phone size={16} strokeWidth={2.5} aria-hidden="true" />
              <span>0171 88 202 77</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-brand-text hover:bg-brand-gray-light transition-colors"
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-brand-gray-mid-light">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map(({ label, href, sup }) => {
              const isActive =
                href === "/"
                  ? pathname === "/"
                  : pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-md text-base font-medium transition-colors",
                    isActive
                      ? "text-orange bg-brand-gray-light font-semibold"
                      : "text-brand-text hover:text-denver-blue hover:bg-brand-gray-light"
                  )}
                >
                  {label}{sup && <sup className="text-[10px] font-normal">{sup}</sup>}
                </Link>
              );
            })}
            <a
              href="tel:+491718820277"
              className="flex items-center gap-2 px-4 py-3 mt-1 rounded-md text-base font-semibold text-orange hover:bg-brand-gray-light transition-colors"
            >
              <Phone size={16} aria-hidden="true" />
              0171 88 202 77
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
