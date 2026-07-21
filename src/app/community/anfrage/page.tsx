import type { Metadata } from "next";
import { R } from "@/components/R";

export const metadata: Metadata = {
  title: "Community-Anfrage – MH3-EAZEE",
  description: "Deine Anfrage für den Zugang zur MH3-EAZEE Community.",
  robots: { index: false, follow: false },
};

/*
  Versteckte Anfrage-Seite (noindex, nicht in Navigation/Sitemap) — URL wird
  gezielt an Interessenten gegeben. Weg 2 (banner-frei), Muster wie /loslegen:
  natives Marken-Formular -> Scaleway-Serverless-Endpunkt (Region AMS, EU), der
  server-seitig ActiveCampaign befuellt (Kontakt anlegen/aktualisieren, Tag
  "Formular Community ausgefuellt", eigenes NICHT-werbliches Segment statt
  Hauptkontaktliste, KEIN Newsletter/DOI), kontakt@ benachrichtigt und danach auf
  /community/anfrage/danke weiterleitet. Kein externes AC-Skript -> kein Cookie-Banner.
  ENDPUNKT-URL: Platzhalter, wird nach Deployment der Community-Scaleway-Funktion
  hier eingetragen (analog zur DSBP-Funktion auf /loslegen).
*/
const ANFRAGE_ENDPOINT =
  "https://REPLACE-community-anfrage.functions.fnc.nl-ams.scw.cloud/";

const RECHTS_LINKS = [
  {
    label: "MH3-EAZEE Community Nutzungsbedingungen",
    href: "/downloads/mh3-eazee-nutzungsbedingungen.pdf",
  },
  {
    label: "MH3-EAZEE Community Richtlinien",
    href: "/downloads/mh3-eazee-richtlinien.pdf",
  },
  {
    label: "MH3-EAZEE Community Widerrufsbelehrung",
    href: "/downloads/mh3-eazee-widerrufsbelehrung.pdf",
  },
  {
    label: "MH3-EAZEE Community Datenschutzerklärung",
    href: "/downloads/mh3-eazee-datenschutz.pdf",
  },
];

const inputClass =
  "w-full rounded-lg border border-brand-gray-mid-light bg-white px-4 py-3 text-base text-brand-text placeholder:text-brand-gray-dark focus:border-denver-blue focus:outline-none focus:ring-1 focus:ring-denver-blue";

export default function CommunityAnfragePage() {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 md:py-16 xl:px-16 2xl:px-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold leading-tight text-brand-text md:text-4xl">
          Daten für deine Anfrage zum{" "}
          <span className="whitespace-nowrap">
            MH3-EAZEE
            <R />
          </span>
          -Community-Zugang
        </h1>
        <p className="mt-6 text-body text-brand-text">
          Trage bitte die Daten ein, die du für deine Community-Anfrage
          verwenden möchtest. Sie sind – nach Freigabe – die Grundlage für dein
          persönliches Angebot.
        </p>

        <form action={ANFRAGE_ENDPOINT} method="post" className="mt-10 space-y-6">
          <div>
            <label
              htmlFor="firstname"
              className="mb-1 block text-sm font-semibold text-brand-text"
            >
              Vorname *
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              required
              autoComplete="given-name"
              placeholder="Dein Vorname"
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="mb-1 block text-sm font-semibold text-brand-text"
            >
              Nachname *
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              required
              autoComplete="family-name"
              placeholder="Dein Nachname"
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-semibold text-brand-text"
            >
              E-Mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              placeholder="Deine E-Mail-Adresse"
              className={inputClass}
            />
          </div>

          <div className="rounded-lg bg-[#F5F5F5] p-6">
            <p className="text-base font-semibold text-brand-text">
              Widerrufsbelehrung, Nutzungsbedingungen, Datenschutzerklärung und
              Community-Richtlinien:
            </p>
            <p className="mt-3 text-base text-brand-text">
              Bitte schau dir die Informationen sorgfältig an – sie stellen
              (neben der rechtlichen Komponente) ein angenehmes Miteinander
              sicher:
            </p>
            <ul className="mt-4 space-y-2">
              {RECHTS_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-orange transition-colors hover:text-denver-blue"
                  >
                    {l.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <fieldset className="space-y-4">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="akzeptanz_nutzungsbedingungen"
                required
                className="mt-1 h-5 w-5 shrink-0 accent-orange"
              />
              <span className="text-base text-brand-text">
                Ich habe die{" "}
                <strong>MH3-EAZEE Community Nutzungsbedingungen</strong> gelesen
                und akzeptiere sie. *
              </span>
            </label>
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="akzeptanz_richtlinien"
                required
                className="mt-1 h-5 w-5 shrink-0 accent-orange"
              />
              <span className="text-base text-brand-text">
                Ich habe die <strong>MH3-EAZEE Community Richtlinien</strong>{" "}
                gelesen und akzeptiere sie. *
              </span>
            </label>
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="kenntnis_datenschutz"
                required
                className="mt-1 h-5 w-5 shrink-0 accent-orange"
              />
              <span className="text-base text-brand-text">
                Ich habe die{" "}
                <strong>MH3-EAZEE Community Datenschutzerklärung</strong> zur
                Kenntnis genommen. *
              </span>
            </label>
          </fieldset>

          <p className="text-base text-brand-text">
            Mit Klick auf „Absenden" geht deine Anfrage an mich. Ich prüfe sie
            persönlich und melde mich zeitnah. Nach Freigabe erhältst du dein
            persönliches Angebot per E-Mail (Absender: ablefy, unsere
            Buchungsplattform) – dort prüfst und bestätigst du deine Buchung
            selbst.
          </p>
          <p className="text-base text-brand-text">
            Solltest du vorab Fragen haben, ruf mich gern an unter{" "}
            <a
              href="tel:+491718820277"
              className="font-semibold text-orange transition-colors hover:text-denver-blue"
            >
              0171 88 202 77
            </a>
            .
          </p>

          <button
            type="submit"
            className="w-full rounded-lg bg-orange px-6 py-3 text-base font-bold text-white transition-colors duration-200 hover:bg-denver-blue"
          >
            Jetzt MH3-EAZEE-Community-Zugang anfragen
          </button>
        </form>
      </div>
    </section>
  );
}
