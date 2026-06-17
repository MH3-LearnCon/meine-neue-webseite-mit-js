import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import HeroImagePlaceholder from "@/components/HeroImagePlaceholder";

type HeroAspect = "1/1" | "3/4" | "4/3" | "16/9";

/**
 * Hero — das geteilte Kopf-Muster aller Foto-Hero-Seiten (Layout D).
 * H1 über die volle Breite, darunter Textspalte (Subline + Body + Telefon-CTA)
 * links und ein 4:3-Foto rechts, das die Spalte füllt. Eine Quelle der Wahrheit.
 * Ausnahme: Über-mich (eigenes quadratisches Porträt) nutzt diese Komponente NICHT.
 */
export default function Hero({
  h1,
  subline,
  body,
  imageLabel,
  imageAspect = "4/3",
}: {
  h1: ReactNode;
  subline: string;
  body: ReactNode;
  imageLabel: string;
  imageAspect?: HeroAspect;
}) {
  return (
    <section className="min-h-[60vh] bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-h1 font-extrabold leading-tight text-brand-text">
          {h1}
        </h1>
        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="flex flex-col gap-6 lg:col-span-3">
            <p className="text-pointe font-semibold tracking-wide text-orange">
              {subline}
            </p>
            <p className="max-w-lg text-body leading-relaxed text-brand-text">
              {body}
            </p>
            <div className="flex pt-2">
              <a
                href="tel:+491718820277"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-orange px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:border-denver-blue hover:bg-denver-blue hover:text-white"
                aria-label="Jetzt anrufen: 0171 88 202 77"
              >
                <Phone size={18} aria-hidden="true" />
                0171 88 202 77
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <HeroImagePlaceholder label={imageLabel} aspectRatio={imageAspect} />
          </div>
        </div>
      </div>
    </section>
  );
}
