"use client";

/**
 * Reveal — sanftes Einblenden beim Eintritt ins Viewport.
 *
 * Enhancement-only (Marcus 27.06.): Ohne JavaScript oder bei
 * `prefers-reduced-motion` ist der Inhalt SOFORT vollständig sichtbar.
 * Die Einblendung wird nur aktiviert, wenn JS feststellt, dass das Element
 * beim Laden noch unterhalb des Sichtfensters liegt — so gibt es weder ein
 * Flackern bei bereits sichtbaren Elementen noch einen leeren Bereich, falls
 * JS fehlt. Kein Layout-Shift, da opacity/transform die Geometrie nicht ändern.
 *
 * `delay` (ms) erlaubt eine gestaffelte Einblendung mehrerer Elemente.
 * `className` wird durchgereicht (z. B. "grid" für Grid-Kinder mit
 * Höhenausgleich).
 */

import { useEffect, useRef, useState } from "react";

type RevealState = "static" | "hidden" | "shown";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>("static");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return; // bleibt sichtbar
    }
    const el = ref.current;
    if (!el) return;

    // Bereits (fast) im Blick? Dann nicht animieren — kein Flackern.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return;

    setState("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const animated = state !== "static";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: state === "hidden" ? 0 : 1,
        transform: animated
          ? state === "hidden"
            ? "translateY(14px)"
            : "translateY(0)"
          : undefined,
        transition: animated
          ? "opacity 600ms ease-out, transform 600ms ease-out"
          : undefined,
        transitionDelay: animated ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}
