"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface ProcessStepItem {
  step: number;
  title: string;
  body: string;
}

export interface ProcessStepsProps {
  steps: ProcessStepItem[];
  /** Optional; z. B. eigene Abstände oder Breite am äußeren Schritte-Wrapper. */
  containerClassName?: string;
  /**
   * Schritte + Verbindungslinien beim Scrollen einzeln von oben nach unten
   * aufbauen. Enhancement-only: ohne JS / bei reduce-motion sofort voll da.
   */
  animated?: boolean;
}

/** static = voll (Default/ohne JS), hidden = ausgeblendet, shown = animiert. */
type Enter = "static" | "hidden" | "shown";

/**
 * Pro-Element-Reveal: jedes Element animiert genau dann, wenn es beim Scrollen
 * in die Lesezone kommt — nicht alle gleichzeitig beim ersten Anschnitt der
 * Section. So entsteht ein echter, mit dem Scrollen mitlaufender Top-down-Aufbau.
 * Enhancement-only: liegt das Element beim Laden schon im Blick oder ist JS aus,
 * bleibt es sofort sichtbar.
 */
function useEnter(animated: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<Enter>("static");

  useEffect(() => {
    if (!animated) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    // Schon in der Lesezone beim Laden? Dann sofort sichtbar lassen (kein Flackern).
    if (el.getBoundingClientRect().top < window.innerHeight * 0.8) return;
    setState("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      // Auslösen, wenn das Element rund 20 % über den unteren Rand gescrollt ist
      // (Lesezone), nicht schon beim ersten Anschnitt.
      { rootMargin: "0px 0px -20% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animated]);

  return { ref, state };
}

/** Ein Schritt: nummerierter Kreis + Text, blendet beim Eintritt sanft ein. */
function Step({
  step,
  title,
  body,
  animated,
}: ProcessStepItem & { animated: boolean }) {
  const { ref, state } = useEnter(animated);
  const moving = state !== "static";
  return (
    <div
      ref={ref}
      className="flex items-center gap-8 md:gap-16"
      style={{
        opacity: state === "hidden" ? 0 : 1,
        transform: moving
          ? state === "hidden"
            ? "translateY(12px)"
            : "translateY(0)"
          : undefined,
        transition: moving
          ? "opacity 500ms ease-out, transform 500ms ease-out"
          : undefined,
      }}
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-denver-blue bg-white shadow-[2px_2px_0px_0px_#FF9B01] md:h-16 md:w-16"
        aria-hidden="true"
      >
        <span className="text-xl font-semibold text-denver-blue">{step}</span>
      </div>
      <div className="min-w-0 max-w-prose flex-1">
        <p className="text-base font-semibold text-brand-text md:text-lg">
          {title}
        </p>
        <p className="mt-2 text-base leading-relaxed text-brand-text">{body}</p>
      </div>
    </div>
  );
}

/** Verbindungslinie zwischen zwei Schritten; zeichnet sich beim Eintritt nach. */
function Connector({ animated }: { animated: boolean }) {
  const { ref, state } = useEnter(animated);
  return (
    <div
      ref={ref}
      className="flex w-12 shrink-0 justify-center py-4 md:w-16"
    >
      <div
        className="w-0.5 min-h-12 shrink-0 origin-top bg-denver-blue"
        aria-hidden="true"
        style={{
          transform:
            state === "hidden"
              ? "scaleY(0)"
              : state === "shown"
                ? "scaleY(1)"
                : undefined,
          transition: state === "shown" ? "transform 650ms ease-out" : undefined,
        }}
      />
    </div>
  );
}

/**
 * Wiederverwendbare Prozessschritte mit nummerierten Kreisen und Verbindungslinie.
 * Mit `animated` baut sich die Sequenz beim Scrollen Element für Element von oben
 * nach unten auf (Kreis 1 → Linie → Kreis 2 → Linie → Kreis 3), jeweils dann,
 * wenn das Element in die Lesezone kommt.
 */
export function ProcessSteps({
  steps,
  containerClassName,
  animated = false,
}: ProcessStepsProps) {
  return (
    <div className={cn("mt-10 flex flex-col", containerClassName)}>
      {steps.map((item, index) => (
        <div key={item.step}>
          <Step {...item} animated={animated} />
          {index < steps.length - 1 ? (
            <div className="flex gap-4 md:gap-6">
              <Connector animated={animated} />
              <div className="flex-1" />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
