"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

import HexagonBullet from "@/components/icons/HexagonBullet";
import type { Vortrag } from "@/data/vortraege";

function formateText(formate: string[]): string {
  if (formate.length <= 1) return formate[0] ?? "";
  return `${formate.slice(0, -1).join(", ")} oder ${formate[formate.length - 1]}`;
}

type MehrInfo = {
  href: string;
  text: string;
  /** true → in neuem Tab öffnen (von den Säulen-Seiten aus). */
  neuerTab?: boolean;
  /** zusätzliche Aktion beim Klick (z. B. Modal schließen im Katalog). */
  onClick?: () => void;
};

/**
 * Detail-Pop-up für einen Vortrag. Wird vom Katalog (/vortraege) und von den
 * Säulen-Seiten (in-place) genutzt — eine Quelle für die Detail-Ansicht.
 * Fokus/Escape regelt das Modal selbst; die Rückgabe des Fokus auf die
 * auslösende Karte übernimmt die jeweilige Eltern-Komponente via onClose.
 */
export default function VortragModal({
  vortrag,
  onClose,
  mehrInfo,
}: {
  vortrag: Vortrag;
  onClose: () => void;
  mehrInfo?: MehrInfo;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`vortrag-modal-${vortrag.id}`}
        className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-brand-text transition-colors hover:text-denver-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denver-blue"
          aria-label="Dialog schließen"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <p className="text-xs font-medium uppercase tracking-wide text-brand-gray-dark">
          {vortrag.thema}
        </p>
        <h2
          id={`vortrag-modal-${vortrag.id}`}
          className="mt-2 pr-8 text-base font-bold text-brand-text md:text-lg"
        >
          {vortrag.titel}
        </h2>
        <p className="mt-4 text-body text-brand-text">{vortrag.beschreibung}</p>

        <h3 className="mt-6 text-base font-bold text-brand-text md:text-lg">
          Inhalte
        </h3>
        <ul className="mt-4 space-y-3">
          {vortrag.inhalte.map((punkt) => (
            <li key={punkt} className="flex items-start gap-3">
              <HexagonBullet size={12} className="mt-1.5 shrink-0 text-orange" />
              <span className="text-body text-brand-text">{punkt}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-body text-brand-text">
          Buchbar als {formateText(vortrag.formate)} — Inhalte, Länge und
          Schwerpunkte passe ich an Ihren Anlass an. Was genau passt, klären wir
          am besten im Gespräch.
        </p>

        <a
          href="tel:+491718820277"
          className="mt-6 inline-block font-semibold text-orange transition-colors duration-200 hover:text-denver-blue"
        >
          Telefonisch anfragen →
        </a>

        {mehrInfo ? (
          <p className="mt-6 border-t border-brand-gray-mid-light pt-4 text-sm text-brand-gray-dark">
            <a
              href={mehrInfo.href}
              onClick={mehrInfo.onClick}
              {...(mehrInfo.neuerTab
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="font-semibold text-orange transition-colors duration-200 hover:text-denver-blue"
            >
              {mehrInfo.text}
            </a>
          </p>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
