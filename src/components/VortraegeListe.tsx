"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";

import HexagonBullet from "@/components/icons/HexagonBullet";
import { cn } from "@/lib/utils";

type Vortrag = {
  id: string;
  thema: string;
  titel: string;
  teaser: string;
  beschreibung: string;
  inhalte: string[];
  formate: string[];
  funnel?: string;
};

const VORTRAEGE: Vortrag[] = [
  {
    id: "fuehrung-werkzeuge",
    thema: "Führung",
    titel: "Werkzeuge moderner Führung",
    teaser:
      "Welche Werkzeuge im Führungsalltag wirklich tragen — von Erwartungen klären bis verbindlich kommunizieren.",
    beschreibung:
      "Was macht gute Führung aus — und welche Werkzeuge helfen Einsteigerinnen wie Profis, eine authentische Führungspersönlichkeit zu sein? Ein Impuls zu den wichtigsten Werkzeugen moderner Führung.",
    inhalte: [
      "Erwartungen klären und festlegen",
      "Wirkungsvolle Ziele setzen",
      "Systematisch priorisieren",
      "Delegieren mit Sinn",
      "Abgeben nach oben",
      "Effiziente Kommunikation etablieren",
      "Verbindlichkeit schaffen",
    ],
    formate: ["Vortrag", "Workshop"],
    funnel: "Impuls → Bootcamp „Geh in Führung“",
  },
  {
    id: "kommunikation-elevator-pitch",
    thema: "Kommunikation",
    titel: "Elevator Pitch",
    teaser:
      "Sich in Sekunden vorstellen, ohne ins Schwimmen zu geraten — und mit den ersten Sätzen Neugier wecken.",
    beschreibung:
      "Sich in einer neuen Gruppe, auf einer Veranstaltung oder privat vorstellen — und dabei entspannt bleiben. Wie Sie vom ersten Moment an wirken und mit Ihren ersten Sätzen Neugier wecken, sodass Ihr Gegenüber mehr wissen möchte. Inklusive erstem Eindruck und einem eigenen Pitch zum Mitnehmen.",
    inhalte: [
      "Der erste Eindruck — und wie Sie ihn positiv beeinflussen",
      "Wozu ein Elevator Pitch dient",
      "Aufbau, Konzepte und Regeln",
      "Vorarbeiten und Hilfsmittel",
      "Ablauf und Phasen",
      "Den eigenen, individuellen Pitch ausarbeiten",
    ],
    formate: ["Vortrag", "Workshop"],
  },
  {
    id: "netzwerken-kontakte",
    thema: "Netzwerken",
    titel: "Kontakte schaden nur …",
    teaser:
      "„Kontakte schaden nur dem, der keine hat.“ Wie Netzwerken mit überschaubarem Aufwand gelingt.",
    beschreibung:
      "Netzwerken entscheidet über die eigene Karriere mit — in der Wirtschaft wie in der Wissenschaft. Wie es effizient und auf sicheren Wegen gelingt: von Geben und Nehmen über authentisches Selbstmarketing bis zum Auf- und Erhalten einer professionellen Reputation, online wie offline.",
    inhalte: [
      "Warum „wissen, wo es steht“ heute nicht mehr reicht",
      "Kontakte mit geringem Aufwand auf- und ausbauen",
      "Geben und Nehmen, horizontales und vertikales Netzwerken",
      "Authentisches Selbstmarketing",
      "Empfehlungsmanagement",
      "Reputation in Xing, LinkedIn & Co.",
    ],
    formate: ["Vortrag", "Workshop"],
    funnel: "Impuls → Beratung",
  },
];

export default function VortraegeListe() {
  const themen = useMemo(
    () => [...new Set(VORTRAEGE.map((v) => v.thema))],
    [],
  );
  const [aktivesThema, setAktivesThema] = useState<string>("Alle");
  const [selected, setSelected] = useState<Vortrag | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

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

      {selected ? (
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
            className="relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-xl md:p-8"
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

            <div className="mt-6 flex flex-wrap gap-2">
              {selected.formate.map((format) => (
                <span
                  key={format}
                  className="rounded bg-brand-gray-light px-2 py-0.5 text-xs text-brand-gray-dark"
                >
                  {format}
                </span>
              ))}
            </div>

            {selected.funnel ? (
              <p className="mt-4 text-sm text-brand-gray-dark">
                {selected.funnel}
              </p>
            ) : null}

            <p className="mt-6 text-body text-brand-text">
              Inhalte und Schwerpunkte passe ich an Ihren Anlass an — was genau
              passt, klären wir im Gespräch.
            </p>

            <a
              href="tel:+491718820277"
              className="mt-6 inline-block font-semibold text-orange transition-colors duration-200 hover:text-denver-blue"
            >
              Telefonisch anfragen →
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
