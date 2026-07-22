import type { Metadata } from "next";
import { R } from "@/components/R";
import { ProcessSteps } from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import { AnfrageForm } from "./AnfrageForm";

export const metadata: Metadata = {
  title: "Community-Anfrage – MH3-EAZEE",
  description: "Deine Anfrage für den Zugang zur MH3-EAZEE Community.",
  robots: { index: false, follow: false },
};

/*
  Versteckte Anfrage-Seite (noindex, nicht in Navigation/Sitemap) — URL wird
  gezielt an Interessenten gegeben. Das Formular ist eine Client-Komponente
  (AnfrageForm) und postet nativ an den Scaleway-Endpunkt (banner-frei).
*/

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

          <AnfrageForm />
        </div>
      </section>
    </>
  );
}
