import type { Metadata } from "next";
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
        Opt-in-Formular — Weg 2 (banner-frei): natives Formular → Scaleway-Serverless-
        Endpunkt (Projekt „mh3-funnel", Region AMS), der server-seitig die bewährte
        AC-Formular-19-Verarbeitung auslöst (DOI + Liste „Newsletter Karriere") und
        danach auf die native /fast-geschafft weiterleitet. Kein externes AC-Skript mehr
        → kein Cookie-Banner. Meta-CAPI-Naht (server-seitig) folgt. Siehe OS-57.
      */}
      <form
        action="https://funnelrtck2vvk-dsbpoptin.functions.fnc.nl-ams.scw.cloud/"
        method="post"
        className="mx-auto mt-10 max-w-xl space-y-5 md:mt-12"
      >
        <div>
          <label
            htmlFor="firstname"
            className="mb-1 block text-sm font-semibold text-brand-text"
          >
            Vorname
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            required
            autoComplete="given-name"
            placeholder="Dein Vorname"
            className="w-full rounded-lg border border-brand-gray-mid-light bg-white px-4 py-3 text-base text-brand-text placeholder:text-brand-gray-dark focus:border-denver-blue focus:outline-none focus:ring-1 focus:ring-denver-blue"
          />
        </div>
        <div>
          <label
            htmlFor="lastname"
            className="mb-1 block text-sm font-semibold text-brand-text"
          >
            Nachname
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            autoComplete="family-name"
            placeholder="Dein Nachname"
            className="w-full rounded-lg border border-brand-gray-mid-light bg-white px-4 py-3 text-base text-brand-text placeholder:text-brand-gray-dark focus:border-denver-blue focus:outline-none focus:ring-1 focus:ring-denver-blue"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-semibold text-brand-text"
          >
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Deine E-Mail-Adresse"
            className="w-full rounded-lg border border-brand-gray-mid-light bg-white px-4 py-3 text-base text-brand-text placeholder:text-brand-gray-dark focus:border-denver-blue focus:outline-none focus:ring-1 focus:ring-denver-blue"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-orange px-6 py-3 text-base font-bold text-white transition-colors duration-200 hover:bg-denver-blue"
        >
          Für 0,- € loslegen
        </button>
      </form>

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
