"use client";

import { useState } from "react";

/*
  Natives Anfrage-Formular (Client-Komponente, weil Privat/Unternehmen die
  Firma-/USt-ID-Felder ein- und ausblendet). Reiner HTML-POST an den
  Scaleway-Endpunkt (Region AMS, EU), der server-seitig ActiveCampaign
  (Formular 31) befuellt und domain-relativ auf /community/anfrage/danke
  weiterleitet. Kein externes AC-Skript -> kein Cookie-Banner.
*/
const ANFRAGE_ENDPOINT =
  "https://funnelrtck2vvk-communityanfrage.functions.fnc.nl-ams.scw.cloud/";

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

const labelClass = "mb-1 block text-sm font-semibold text-brand-text";

const optionClass =
  "flex cursor-pointer items-center gap-3 rounded-lg border border-brand-gray-mid-light bg-white px-4 py-3 text-base text-brand-text transition-colors hover:bg-[#F5F5F5]";

const MITGLIEDSCHAFT = [
  { value: "jahr", label: "Jahres-Mitgliedschaft", preis: "150 € / Jahr" },
  { value: "quartal", label: "Quartals-Mitgliedschaft", preis: "45 € / Quartal" },
];

const ZAHLUNGSARTEN = [
  { value: "kreditkarte", label: "Kreditkarte" },
  { value: "sepa", label: "SEPA-Lastschrift" },
  { value: "apple", label: "Apple Pay" },
  { value: "google", label: "Google Pay" },
];

export function AnfrageForm() {
  const [kundentyp, setKundentyp] = useState<"privat" | "unternehmen">("privat");

  return (
    <form action={ANFRAGE_ENDPOINT} method="post" className="mt-10 space-y-8">
      {/* Honeypot – fuer Menschen unsichtbar, faengt Bots ab */}
      <div
        className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Bitte dieses Feld frei lassen</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Gewünschte Mitgliedschaft */}
      <fieldset>
        <legend className={labelClass}>Gewünschte Mitgliedschaft *</legend>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {MITGLIEDSCHAFT.map((m) => (
            <label key={m.value} className={optionClass}>
              <input
                type="radio"
                name="mitgliedschaft"
                value={m.value}
                required
                className="h-5 w-5 shrink-0 accent-orange"
              />
              <span>
                <span className="font-semibold text-denver-blue">{m.label}</span>
                <span className="block text-sm text-brand-gray-dark">
                  {m.preis}
                </span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Privatperson / Unternehmen */}
      <fieldset>
        <legend className={labelClass}>Ich melde mich an als *</legend>
        <div className="flex flex-wrap gap-3">
          <label className={optionClass}>
            <input
              type="radio"
              name="kundentyp"
              value="privat"
              checked={kundentyp === "privat"}
              onChange={() => setKundentyp("privat")}
              required
              className="h-5 w-5 shrink-0 accent-orange"
            />
            Privatperson
          </label>
          <label className={optionClass}>
            <input
              type="radio"
              name="kundentyp"
              value="unternehmen"
              checked={kundentyp === "unternehmen"}
              onChange={() => setKundentyp("unternehmen")}
              className="h-5 w-5 shrink-0 accent-orange"
            />
            Unternehmen
          </label>
        </div>
      </fieldset>

      {kundentyp === "unternehmen" && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="firma" className={labelClass}>
              Firma *
            </label>
            <input
              type="text"
              id="firma"
              name="firma"
              required
              autoComplete="organization"
              placeholder="Firmenname"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="ustid" className={labelClass}>
              USt-ID
            </label>
            <input
              type="text"
              id="ustid"
              name="ustid"
              placeholder="z. B. DE123456789"
              className={inputClass}
            />
          </div>
        </div>
      )}

      {/* Name */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="firstname" className={labelClass}>
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
          <label htmlFor="lastname" className={labelClass}>
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
      </div>

      {/* E-Mail */}
      <div>
        <label htmlFor="email" className={labelClass}>
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

      {/* Adresse */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <label htmlFor="strasse" className={labelClass}>
            Straße *
          </label>
          <input
            type="text"
            id="strasse"
            name="strasse"
            required
            autoComplete="address-line1"
            placeholder="Straße"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="hausnummer" className={labelClass}>
            Hausnummer *
          </label>
          <input
            type="text"
            id="hausnummer"
            name="hausnummer"
            required
            placeholder="Nr."
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <label htmlFor="plz" className={labelClass}>
            PLZ *
          </label>
          <input
            type="text"
            id="plz"
            name="plz"
            required
            autoComplete="postal-code"
            placeholder="PLZ"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="ort" className={labelClass}>
            Stadt *
          </label>
          <input
            type="text"
            id="ort"
            name="ort"
            required
            autoComplete="address-level2"
            placeholder="Stadt"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="land" className={labelClass}>
            Land *
          </label>
          <input
            type="text"
            id="land"
            name="land"
            required
            autoComplete="country-name"
            defaultValue="Deutschland"
            className={inputClass}
          />
        </div>
      </div>

      {/* Telefon */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          Telefon *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          autoComplete="tel"
          placeholder="Deine Telefonnummer"
          className={inputClass}
        />
      </div>

      {/* Bevorzugte Zahlungsart */}
      <fieldset>
        <legend className={labelClass}>Bevorzugte Zahlungsart *</legend>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {ZAHLUNGSARTEN.map((z) => (
            <label key={z.value} className={optionClass}>
              <input
                type="radio"
                name="zahlungsart"
                value={z.value}
                required
                className="h-5 w-5 shrink-0 accent-orange"
              />
              {z.label}
            </label>
          ))}
        </div>
        <p className="mt-2 text-sm text-brand-gray-dark">
          Beim Bezahlen kannst du die Zahlungsart bei Bedarf noch ändern.
        </p>
      </fieldset>

      {/* Rechtliche Informationen */}
      <div className="rounded-lg bg-white p-6">
        <p className="text-base font-semibold text-brand-text">
          Widerrufsbelehrung, Nutzungsbedingungen, Datenschutzerklärung und
          Community-Richtlinien:
        </p>
        <p className="mt-3 text-base text-brand-text">
          Bitte schau dir die Informationen sorgfältig an – sie stellen (neben
          der rechtlichen Komponente) ein angenehmes Miteinander sicher:
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

      {/* Zustimmungen */}
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
            <strong>MH3-EAZEE Community Nutzungsbedingungen</strong> gelesen und
            akzeptiere sie. *
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
            Ich habe die <strong>MH3-EAZEE Community Richtlinien</strong> gelesen
            und akzeptiere sie. *
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

      {/* Hinweise */}
      <p className="text-base text-brand-text">
        Mit Klick auf „Absenden“ geht deine Anfrage an mich. Ich prüfe sie
        persönlich und melde mich zeitnah. Nach Freigabe erhältst du dein
        persönliches Angebot per E-Mail (Absender: ablefy, unsere
        Buchungsplattform) – dort prüfst und bestätigst du deine Buchung selbst.
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
        className="w-full rounded-lg bg-orange px-8 py-3 text-base font-bold text-white transition-colors duration-200 hover:bg-denver-blue sm:w-auto"
      >
        Jetzt MH3-EAZEE-Community-Zugang anfragen
      </button>
    </form>
  );
}
