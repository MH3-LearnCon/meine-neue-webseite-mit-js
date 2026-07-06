import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Loslegen – Der Standard-Bewerbungsprozess",
  description:
    "Trag dich ein und starte den kostenfreien Kurs „Der Standard-Bewerbungsprozess“ – in deinem Tempo.",
  robots: { index: false, follow: true },
};

export default function LoslegenPage() {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 md:py-16 xl:px-16 2xl:px-24">
      {/* Kopf */}
      <h1 className="text-center text-3xl font-extrabold leading-tight text-brand-text md:text-4xl lg:text-5xl">
        Los geht’s mit dem Standard-Bewerbungsprozess.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-center text-base text-brand-text md:text-lg">
        Trag dich mit Name und E-Mail ein – der kostenfreie Kurs startet sofort, in
        deinem Tempo.
      </p>

      {/*
        Opt-in-Formular — Weg 1 (ActiveCampaign-Embed, Formular 19).
        Setzt Liste „Newsletter Karriere" + Tag „TN Freebie", DOI via Formular-Einstellung.
        Redirect nach Absenden folgt vorerst der AC-Formular-Einstellung (Ist: ablefy).
        Weg 2 (banner-frei: natives Formular → Next.js-Server-Endpunkt → AC-API +
        Meta-CAPI-Naht, Redirect selbst auf native /fast-geschafft) zieht vor Cutover
        nach — siehe _offene-schleifen OS-57.
      */}
      <div className="mx-auto mt-10 max-w-xl md:mt-12">
        <div className="_form_19" />
        <Script
          src="https://learncon.activehosted.com/f/embed.php?id=19"
          strategy="afterInteractive"
        />
      </div>

      {/* Transparenz / Einwilligung */}
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-brand-gray-dark">
        Mit deiner Anmeldung kommst du in meinen E-Mail-Verteiler. Du hörst von mir
        nur, wenn ich etwas habe, das dich wirklich weiterbringt – und kannst dich
        jederzeit mit einem Klick abmelden. Mehr dazu in der{" "}
        <Link
          href="/datenschutz"
          className="font-semibold text-orange transition-colors hover:text-denver-blue"
        >
          Datenschutzerklärung
        </Link>
        .
      </p>
    </section>
  );
}
