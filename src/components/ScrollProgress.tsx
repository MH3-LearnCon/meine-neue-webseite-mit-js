"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Wie beim Header: auf den header-losen Funnel-Schritten keine Leiste
// (kein Ausstieg/keine Ablenkung im Anmeldeprozess).
const FUNNEL_ROUTE = /\/(loslegen|fast-geschafft|geschafft)(\/|$)/;

/**
 * ScrollProgress — dezente Fortschritts-Leiste in Orange.
 *
 * Desktop (ab md): dünne Linie OBEN, wächst nach rechts.
 * Mobil (< md): senkrechte Linie RECHTS, wächst nach unten — auf den langen
 * Mobil-Seiten präsenter und als Orientierung nützlicher als eine dünne
 * Top-Linie, die mit Statusleiste und Sticky-Header konkurriert.
 *
 * aria-hidden, rein orientierend. z-[60] liegt über dem Header (z-50).
 */
export default function ScrollProgress() {
  const pathname = usePathname();
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? (window.scrollY / max) * 100 : 0;
      setPct(p < 0 ? 0 : p > 100 ? 100 : p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (FUNNEL_ROUTE.test(pathname)) return null;

  return (
    <>
      {/* Desktop: oben, horizontal */}
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[60] hidden h-1 bg-orange transition-[width] duration-75 ease-linear md:block"
        style={{ width: `${pct}%` }}
      />
      {/* Mobil: rechts, vertikal */}
      <div
        aria-hidden="true"
        className="fixed right-0 top-0 z-[60] block w-1 bg-orange transition-[height] duration-75 ease-linear md:hidden"
        style={{ height: `${pct}%` }}
      />
    </>
  );
}
