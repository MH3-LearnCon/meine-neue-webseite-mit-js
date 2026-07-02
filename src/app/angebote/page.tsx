import type { Metadata } from "next";
import OfferCard from "@/components/OfferCard";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import { kurse, intensiv, type Angebot } from "@/data/angebote";

export const metadata: Metadata = {
  title: "Angebote – Kurse, Bootcamp & Beratung | MH3 LearnCon",
  description:
    "Online-Kurse, das Führungs-Bootcamp und die persönliche Einzel-Beratung – alle buchbaren Angebote von MH3 LearnCon auf einen Blick.",
};

function AngebotKarte({ a }: { a: Angebot }) {
  return (
    <OfferCard
      title={a.title}
      kategorie={a.kategorie}
      ctaHref={a.ctaHref}
      ctaText={a.ctaText}
    >
      {a.body}
      <span className="mt-3 block text-body font-semibold text-brand-text">
        {a.priceLabel}
      </span>
    </OfferCard>
  );
}

export default function AngebotePage() {
  return (
    <div className="animate-fade-in">
      {/* ── Kopf ─────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-h1 font-extrabold leading-tight text-brand-text">
            Angebote
          </h1>
          <p className="mt-4 max-w-2xl text-body text-brand-text">
            Hier finden Sie alle buchbaren Angebote auf einen Blick – vom
            kostenfreien Online-Kurs über das Führungs-Bootcamp bis zur
            persönlichen Einzel-Beratung. Für individuelle Beratungsanfragen
            erreichen Sie mich am schnellsten telefonisch.
          </p>
        </div>
      </section>

      {/* ── Online-Kurse ─────────────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
            aria-hidden="true"
          />
          <h2 className="mb-8 text-h2 font-semibold leading-snug text-brand-text md:mb-10">
            Online-Kurse
          </h2>
          <Reveal>
            <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {kurse.map((a) => (
                <AngebotKarte key={a.id} a={a} />
              ))}
            </div>
          </Reveal>
          <p className="mx-auto mt-6 w-full max-w-5xl text-sm text-brand-gray-dark">
            Preise inkl. USt., soweit erhoben. Der kostenfreie Kurs läuft über
            unsere eigene Seite, die übrigen Kurse werden über die
            Verkaufsseiten bei ablefy gebucht.
          </p>
        </div>
      </section>

      {/* ── Intensiv & persönlich ────────────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
            aria-hidden="true"
          />
          <h2 className="mb-8 text-h2 font-semibold leading-snug text-brand-text md:mb-10">
            Intensiv &amp; persönlich
          </h2>
          <Reveal>
            <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {intensiv.map((a) => (
                <AngebotKarte key={a.id} a={a} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
