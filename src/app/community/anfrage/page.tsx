import type { Metadata } from "next";
import { R } from "@/components/R";
import { ProcessSteps } from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";

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

const VORTEILE = [
  {
    title: "Handverlesener Kreis",
    body: "Ich prüfe jede Anfrage persönlich und entscheide über die Aufnahme – so entsteht ein Kreis, der zu unseren Werten passt.",
  },
  {
    title: "Echter Austausch",
    body: "Online-Stammtische, Vorträge, persönliche Treffen: immer auf Augenhöhe und absolut vertraulich („Vegas, baby!“).",
  },
  {
    title: "Gemeinsame Challenges",
    body: "Monatliche Aufgaben, die Spaß machen und dich weiterbringen.",
  },
  {
    title: "Strukturiertes Wissen",
    body: "Online-Kurse, Tool-Sammlungen, Best Practices: einmal erstellt, profitieren alle.",
  },
  {
    title: "Sparring & Support",
    body: "Ein Ort für vertrauliche Rückmeldung und professionellen Austausch, ohne schlechtes Gewissen.",
  },
  {
    title: "Alles an einem Ort",
    body: "Schluss mit WhatsApp-Chaos und verstreuten E-Mails. Eine Plattform für alles.",
  },
];

const AUFNAHME_SCHRITTE = [
  {
    step: 1,
    title: "Anfrage absenden",
    body: "Du füllst dieses Formular aus und sendest es ab.",
  },
  {
    step: 2,
    title: "Ich prüfe persönlich",
    body: "Ich schaue mir deine Anfrage persönlich an – und sage auch offen ab, wenn es nicht passt.",
  },
  {
    step: 3,
    title: "Dein persönliches Angebot",
    body: "Passt es, erstelle ich dein Angebot und schicke es dir per E-Mail (über ablefy, unsere Buchungsplattform).",
  },
  {
    step: 4,
    title: "Du bestätigst",
    body: "Du prüfst deine Daten, bestätigst das Angebot und schließt die Buchung ab.",
  },
  {
    step: 5,
    title: "Willkommen",
    body: "Dein Zugang zur Community wird freigeschaltet.",
  },
];

const inputClass =
  "w-full rounded-lg border border-brand-gray-mid-light bg-white px-4 py-3 text-base text-brand-text placeholder:text-brand-gray-dark focus:border-denver-blue focus:outline-none focus:ring-1 focus:ring-denver-blue";

export default function CommunityAnfragePage() {
  return (
    <>
      <section className="bg-white pt-12 md:pt-16 pb-8 md:pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-brand-text">
            Deine Anfrage für die{" "}
            <span className="whitespace-nowrap">
              MH3-EAZEE
              <R />
            </span>{" "}
            Community
          </h1>
          <p className="mt-6 text-body text-brand-text">
            Schön, dass du dabei sein möchtest. Die MH3-EAZEE Community ist ein
            handverlesener, geschützter Kreis – kein offenes Netzwerk. Ich prüfe
            jede Anfrage persönlich und entscheide über die Aufnahme. Was uns
            zusammenhält, sind gemeinsame Werte und klare Richtlinien für ein
            gutes Miteinander.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-h2 font-semibold text-brand-text leading-snug">
            Deine Vorteile in der Community
          </h2>
          <Reveal>
            <ul
              className="mt-8 grid grid-cols-1 list-none gap-4 p-0 m-0 md:grid-cols-2"
              role="list"
            >
              {VORTEILE.map((v) => (
                <li
                  key={v.title}
                  className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-orange bg-white px-5 py-4 shadow-sm"
                >
                  <p className="text-body text-brand-text">
                    <span className="font-bold text-denver-blue">
                      {v.title}.
                    </span>{" "}
                    {v.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
          <p className="mt-6 text-body text-brand-text">
            Und über allem stehen die EAZEE-Werte:{" "}
            <span className="font-bold text-denver-blue">E</span>hrlich,{" "}
            <span className="font-bold text-denver-blue">A</span>uthentisch,{" "}
            <span className="font-bold text-denver-blue">Z</span>ielorientiert,{" "}
            <span className="font-bold text-denver-blue">E</span>ngagiert,{" "}
            <span className="font-bold text-denver-blue">E</span>ntwickelnd – keine
            Floskeln, sondern gelebte Praxis.
          </p>
        </div>
      </section>

      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-h2 font-semibold text-brand-text leading-snug">
            So läuft deine Aufnahme
          </h2>
          <ProcessSteps steps={AUFNAHME_SCHRITTE} animated />
          <Reveal>
            <div className="mt-12 border-l-4 border-denver-blue pl-6">
              <p className="text-body text-brand-text">
                Dieser Weg ist bewusst mehr als ein Klick – so bleibt die
                Aufnahme handverlesen: Ich prüfe jede Anfrage persönlich und
                entscheide, wer dazukommt. Und weil eine Community von allen
                lebt, geben gemeinsame Werte und klare Richtlinien den Rahmen für
                ein gutes Miteinander.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-h2 font-semibold text-brand-text leading-snug">
            Deine Daten für die Anfrage
          </h2>
          <p className="mt-6 text-body text-brand-text">
            Trage bitte die Daten ein, die du für deine Community-Anfrage
            verwenden möchtest. Sie sind – nach Freigabe – die Grundlage für dein
            persönliches Angebot.
          </p>

          <form
            action={ANFRAGE_ENDPOINT}
            method="post"
            className="mt-10 space-y-6"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
            </div>

            <div className="rounded-lg bg-white p-6">
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
              Mit Klick auf „Absenden“ geht deine Anfrage an mich. Ich prüfe sie
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
              className="w-full rounded-lg bg-orange px-8 py-3 text-base font-bold text-white transition-colors duration-200 hover:bg-denver-blue sm:w-auto"
            >
              Jetzt MH3-EAZEE-Community-Zugang anfragen
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
