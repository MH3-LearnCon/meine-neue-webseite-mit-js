"use client";

import { useRef, useState } from "react";

import OfferCard from "@/components/OfferCard";
import VortragModal from "@/components/VortragModal";
import { vortragKategorie, type Vortrag } from "@/data/vortraege";
import type { Workshop } from "@/data/workshops";

/**
 * Angebots-Kacheln auf den Säulen-Seiten (/fuehrung, /karriere, /vertrieb).
 * Vorträge öffnen das Detail-Modal in-place (Kontext bleibt erhalten);
 * der Link im Modal führt in neuem Tab auf die volle Vorträge-Seite.
 * Workshops führen direkt ans Telefon (bezahlte Tiefe, individueller Zuschnitt).
 * Daten kommen als Props aus neutralen Modulen — keine Werte-Importe aus
 * "use client"-Dateien.
 */
export default function SaeulenAngebote({
  vortraege,
  workshops = [],
  saeule,
}: {
  vortraege: Vortrag[];
  workshops?: Workshop[];
  /** Name der Säule (Führung/Karriere/Vertrieb) für den gefilterten Katalog-Link. */
  saeule: string;
}) {
  const [selected, setSelected] = useState<Vortrag | null>(null);
  const triggerRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const close = () => {
    const id = selected?.id;
    setSelected(null);
    if (id) {
      requestAnimationFrame(() => triggerRefs.current.get(id)?.focus());
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {vortraege.map((vortrag) => (
          <OfferCard
            key={vortrag.id}
            title={vortrag.titel}
            kategorie={vortragKategorie(vortrag)}
            ctaText="Mehr erfahren →"
            onClick={() => setSelected(vortrag)}
            cardRef={(node) => {
              if (node) triggerRefs.current.set(vortrag.id, node);
              else triggerRefs.current.delete(vortrag.id);
            }}
            compact
          >
            {vortrag.teaser}
          </OfferCard>
        ))}
      </div>

      {workshops.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-2 md:gap-8">
          {workshops.map((workshop) => (
            <OfferCard
              key={workshop.id}
              title={workshop.titel}
              kategorie="Workshop"
              ctaHref="tel:+491718820277"
              ctaText="Telefonisch anfragen →"
              compact
            >
              {workshop.teaser}
            </OfferCard>
          ))}
        </div>
      ) : null}

      {selected ? (
        <VortragModal
          vortrag={selected}
          onClose={close}
          mehrInfo={{
            href: `/vortraege?saeule=${encodeURIComponent(saeule)}#formate`,
            text: "Formate, Ablauf & passende Vorträge ansehen →",
            neuerTab: true,
          }}
        />
      ) : null}
    </>
  );
}
