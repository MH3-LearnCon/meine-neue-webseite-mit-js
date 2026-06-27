"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import VortragModal from "@/components/VortragModal";
import { VORTRAEGE, vortraegeFuerSaeule, type Vortrag } from "@/data/vortraege";

export default function VortraegeListe() {
  const themen = useMemo(
    () => [...new Set(VORTRAEGE.map((v) => v.thema))],
    [],
  );
  const [aktivesThema, setAktivesThema] = useState<string>("Alle");
  const [saeuleFilter, setSaeuleFilter] = useState<string | null>(null);
  const [selected, setSelected] = useState<Vortrag | null>(null);
  const triggerRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    // Säulen-Einstieg: ?saeule=<X> zeigt genau die Vorträge dieser Säule
    // (z. B. von /vertrieb aus inkl. der querverwiesenen Kommunikations-Vorträge).
    const s = params.get("saeule");
    if (s && vortraegeFuerSaeule(s).length > 0) setSaeuleFilter(s);

    const t = params.get("thema");
    if (t && themen.includes(t)) setAktivesThema(t);

    // Direkter Deep-Link auf einen Vortrag: ?vortrag=<id> öffnet das Modal.
    const vid = params.get("vortrag");
    if (vid) {
      const treffer = VORTRAEGE.find((v) => v.id === vid);
      if (treffer) {
        setSelected(treffer);
        setAktivesThema(treffer.thema);
      }
    }
  }, [themen]);

  const closeModal = () => {
    const id = selected?.id;
    setSelected(null);
    if (id) {
      requestAnimationFrame(() => {
        triggerRefs.current.get(id)?.focus();
      });
    }
  };

  // Themen-Button wählen beendet den Säulen-Filter.
  const waehleThema = (thema: string) => {
    setSaeuleFilter(null);
    setAktivesThema(thema);
  };

  const gefiltert = saeuleFilter
    ? vortraegeFuerSaeule(saeuleFilter)
    : aktivesThema === "Alle"
      ? VORTRAEGE
      : VORTRAEGE.filter((v) => v.thema === aktivesThema);

  return (
    <>
      <p className="mb-8 text-body text-brand-text">
        Jeder Vortrag lässt sich auf Ihren Anlass zuschneiden — vom Feinschliff
        bis zur deutlichen Anpassung. Was genau passt, klären wir am besten
        vorab im Gespräch.
      </p>

      {saeuleFilter ? (
        <p className="mb-4 text-body text-brand-text">
          Passend zu: <span className="font-semibold">{saeuleFilter}</span>
          {" · "}
          <button
            type="button"
            onClick={() => waehleThema("Alle")}
            className="font-semibold text-orange transition-colors duration-200 hover:text-denver-blue"
          >
            Alle Vorträge anzeigen
          </button>
        </p>
      ) : null}

      <div className="mb-8 flex flex-wrap gap-3">
        {["Alle", ...themen].map((thema) => {
          const aktiv = !saeuleFilter && aktivesThema === thema;
          return (
            <button
              key={thema}
              type="button"
              onClick={() => waehleThema(thema)}
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

      {selected ? (
        <VortragModal
          vortrag={selected}
          onClose={closeModal}
          mehrInfo={{
            href: "#formate",
            text: "Formate (Impuls · Vortrag · Keynote) und Ablauf ansehen →",
            onClick: () => setSelected(null),
          }}
        />
      ) : null}
    </>
  );
}
