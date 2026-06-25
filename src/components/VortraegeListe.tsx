"use client";

import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type Vortrag = {
  id: string;
  thema: string;
  titel: string;
  formate: string[];
  funnel?: string;
  unterzeile: string;
};

const VORTRAEGE: Vortrag[] = [
  {
    id: "werkzeuge-moderner-fuehrung",
    thema: "Führung",
    titel: "Werkzeuge moderner Führung",
    formate: ["Vortrag", "Workshop"],
    funnel: "Impuls → Bootcamp „Geh in Führung“",
    unterzeile:
      "Was macht gute Führung aus — und welche Werkzeuge tragen im Alltag wirklich? Ein Impuls zu Erwartungen klären, Prioritäten setzen, sinnvoll delegieren und verbindlich kommunizieren.",
  },
  {
    id: "elevator-pitch",
    thema: "Kommunikation",
    titel: "Elevator Pitch",
    formate: ["Vortrag", "Workshop"],
    unterzeile:
      "Sich in Sekunden vorstellen, ohne ins Schwimmen zu geraten: Wie Sie vom ersten Moment an entspannt bleiben und mit den ersten Sätzen Neugier wecken — inklusive erstem Eindruck und einem Pitch, den Sie direkt mitnehmen.",
  },
  {
    id: "kontakte-schaden-nur",
    thema: "Netzwerken",
    titel: "Kontakte schaden nur …",
    formate: ["Vortrag", "Workshop"],
    funnel: "Impuls → Beratung",
    unterzeile:
      "„Kontakte schaden nur dem, der keine hat.“ Warum Netzwerken über die eigene Karriere mitentscheidet — und wie es mit überschaubarem Aufwand und auf sicheren Wegen gelingt: von Geben und Nehmen über authentisches Selbstmarketing bis zu Xing, LinkedIn und einer professionellen Reputation.",
  },
];

export default function VortraegeListe() {
  const themen = useMemo(
    () => [...new Set(VORTRAEGE.map((v) => v.thema))],
    [],
  );
  const [aktivesThema, setAktivesThema] = useState<string>("Alle");

  const gefiltert =
    aktivesThema === "Alle"
      ? VORTRAEGE
      : VORTRAEGE.filter((v) => v.thema === aktivesThema);

  return (
    <div>
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
          <article
            key={vortrag.id}
            className="space-y-3 rounded-lg border border-brand-gray-mid-light bg-white p-6 shadow-sm"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-brand-gray-dark">
              {vortrag.thema}
            </p>
            <h3 className="text-base font-bold text-brand-text md:text-lg">
              {vortrag.titel}
            </h3>
            <p className="text-body text-brand-text">{vortrag.unterzeile}</p>
            <div className="flex flex-wrap gap-2">
              {vortrag.formate.map((format) => (
                <span
                  key={format}
                  className="rounded bg-brand-gray-light px-2 py-0.5 text-xs text-brand-gray-dark"
                >
                  {format}
                </span>
              ))}
            </div>
            {vortrag.funnel ? (
              <p className="text-sm text-brand-gray-dark">{vortrag.funnel}</p>
            ) : null}
            <a
              href="tel:+491718820277"
              className="inline-block font-semibold text-orange transition-colors duration-200 hover:text-denver-blue"
            >
              Telefonisch anfragen →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
