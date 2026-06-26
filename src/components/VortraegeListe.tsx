"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

import HexagonBullet from "@/components/icons/HexagonBullet";
import { cn } from "@/lib/utils";
import { VORTRAEGE, type Vortrag } from "@/data/vortraege";



function formateText(formate: string[]): string {
  if (formate.length <= 1) return formate[0] ?? "";
  return `${formate.slice(0, -1).join(", ")} oder ${formate[formate.length - 1]}`;
}



export default function VortraegeListe() {
  const themen = useMemo(
    () => [...new Set(VORTRAEGE.map((v) => v.thema))],
    [],
  );
  const [aktivesThema, setAktivesThema] = useState<string>("Alle");
  const [selected, setSelected] = useState<Vortrag | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("thema");
    if (t && themen.includes(t)) setAktivesThema(t);
  }, [themen]);

  const gefiltert =
    aktivesThema === "Alle"
      ? VORTRAEGE
      : VORTRAEGE.filter((v) => v.thema === aktivesThema);

  const closeModal = () => {
    const id = selected?.id;
    setSelected(null);
    if (id) {
      requestAnimationFrame(() => {
        triggerRefs.current.get(id)?.focus();
      });
    }
  };

  useEffect(() => {
    if (!selected) return;

    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const id = selected.id;
        setSelected(null);
        requestAnimationFrame(() => {
          triggerRefs.current.get(id)?.focus();
        });
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <>
      <p className="mb-8 text-body text-brand-text">
        Jeder Vortrag lässt sich auf Ihren Anlass zuschneiden — vom Feinschliff
        bis zur deutlichen Anpassung. Was genau passt, klären wir am besten
        vorab im Gespräch.
      </p>

      <div className="mb-8 flex flex-wrap gap-3">
        {["Alle", ...themen].map((thema) => {
          const aktiv = aktivesThema === thema;
          return (
            <button
              key={thema}
              type="button"
              onClick={() => setAktivesThema(thema)}
              className={cn(
                "rounded-lg border px-4 py-2 text-sm font-semibold transition-colors duration-200",
                aktiv
                  ? "border-orange text-orange"
                  : "border-brand-gray-mid-light text-brand-text hover:border-brand-gray-mid",
              )}
            >
              {thema}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {gefiltert.map((vortrag) => (
          <button
            key={vortrag.id}
            type="button"
            ref={(node) => {
              if (node) triggerRefs.current.set(vortrag.id, node);
              else triggerRefs.current.delete(vortrag.id);
            }}
            onClick={() => setSelected(vortrag)}
            className="flex cursor-pointer flex-col rounded-lg border border-brand-gray-mid-light border-t-4 border-t-denver-blue bg-white p-6 text-left shadow-md transition-colors duration-200 hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denver-blue focus-visible:ring-offset-2"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-brand-gray-dark">
              {vortrag.thema}
            </p>
            <h3 className="mt-2 text-base font-bold text-brand-text md:text-lg">
              {vortrag.titel}
            </h3>
            <p className="mt-3 text-body text-brand-text">{vortrag.teaser}</p>
            <span className="mt-4 font-semibold text-orange transition-colors duration-200">
              Mehr erfahren →
            </span>
          </button>
        ))}
      </div>

      {selected
        ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <div
                className="absolute inset-0 bg-black/50"
                aria-hidden="true"
              />
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={`vortrag-modal-${selected.id}`}
                className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl md:p-8"
                onClick={(event) => event.stopPropagation()}
              >
            <button
              ref={closeRef}
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-lg p-1 text-brand-text transition-colors hover:text-denver-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denver-blue"
              aria-label="Dialog schließen"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <p className="text-xs font-medium uppercase tracking-wide text-brand-gray-dark">
              {selected.thema}
            </p>
            <h2
              id={`vortrag-modal-${selected.id}`}
              className="mt-2 pr-8 text-base font-bold text-brand-text md:text-lg"
            >
              {selected.titel}
            </h2>
            <p className="mt-4 text-body text-brand-text">
              {selected.beschreibung}
            </p>

            <h3 className="mt-6 text-base font-bold text-brand-text md:text-lg">
              Inhalte
            </h3>
            <ul className="mt-4 space-y-3">
              {selected.inhalte.map((punkt) => (
                <li key={punkt} className="flex items-start gap-3">
                  <HexagonBullet
                    size={12}
                    className="mt-1.5 shrink-0 text-orange"
                  />
                  <span className="text-body text-brand-text">{punkt}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-body text-brand-text">
              Buchbar als {formateText(selected.formate)} — Inhalte, Länge und
              Schwerpunkte passe ich an Ihren Anlass an. Was genau passt, klären
              wir am besten im Gespräch.
            </p>

            <a
              href="tel:+491718820277"
              className="mt-6 inline-block font-semibold text-orange transition-colors duration-200 hover:text-denver-blue"
            >
              Telefonisch anfragen →
            </a>
          </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
