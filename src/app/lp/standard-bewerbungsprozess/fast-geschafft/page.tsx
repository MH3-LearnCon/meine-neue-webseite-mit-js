import type { Metadata } from "next";
import ProgressBar from "@/components/funnel/ProgressBar";
import Note from "@/components/Note";

export const metadata: Metadata = {
  title: "Fast geschafft – Der Standard-Bewerbungsprozess",
  description:
    "Nur noch ein Schritt: Bestätige deine Anmeldung zum Standard-Bewerbungsprozess über die E-Mail in deinem Postfach.",
};

function Step({
  icon,
  step,
  children,
}: {
  icon: string;
  step: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt="" width={96} height={96} className="mb-5 h-20 w-20 md:h-24 md:w-24" />
      <p className="mb-3 text-xl font-semibold text-denver-blue md:text-2xl">{step}</p>
      <div className="text-base leading-relaxed text-brand-text md:text-lg">{children}</div>
    </div>
  );
}

export default function FastGeschafftPage() {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 md:py-16 xl:px-16 2xl:px-24">
      {/* Kopf */}
      <h1 className="text-center text-3xl font-extrabold leading-tight text-brand-text md:text-4xl lg:text-5xl">
        Fast geschafft! So geht es weiter …
      </h1>

      {/* Fortschritt */}
      <div className="mx-auto mt-8 max-w-7xl md:mt-10">
        <ProgressBar value={50} />
        <p className="mx-auto mt-6 max-w-5xl text-center text-base text-brand-text md:text-lg">
          Nur noch ein Schritt trennt dich vom Kurs. So schließt du deine Anmeldung ab:
        </p>
      </div>

      {/* Foto + 3 Schritte */}
      <div className="mt-12 flex flex-col items-center gap-8 lg:mt-16 lg:flex-row lg:items-center lg:gap-14">
        {/* Foto nur ab Desktop (auf Handy/Tablet bewusst raus) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/funnel/person-fast-geschafft.png"
          alt="Marcus Holzheimer"
          className="hidden shrink-0 self-center lg:block lg:w-80 xl:w-96"
        />
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3 lg:flex-1 lg:gap-14">
          <Step icon="/images/funnel/umschlag.svg" step="Schritt 1">
            Öffne dein E-Mail-Postfach und halte Ausschau nach einer Nachricht vom Absender{" "}
            <span className="font-semibold text-orange">„MH3 LearnCon GmbH"</span>. Findest du
            nichts, schau bitte im Spam-Ordner nach.
          </Step>
          <Step icon="/images/funnel/dokument.svg" step="Schritt 2">
            Öffne die E-Mail mit dem Betreff{" "}
            <span className="font-semibold text-brand-text">
              „⚙ Bitte bestätige noch deine Anmeldung"
            </span>{" "}
            und schließe deine Anmeldung mit einem Klick auf den Button ab.
          </Step>
          <Step icon="/images/funnel/haken.svg" step="Schritt 3">
            Nach erfolgreicher Anmeldung erhältst du eine weitere E-Mail mit dem Betreff{" "}
            <span className="font-semibold text-brand-text">
              „⚙ Dein Zugang zum Kurs – der Standard-Bewerbungsprozess!"
            </span>{" "}
            Dort findest du deinen Zugang zum Kurs.
          </Step>
        </div>
      </div>

      {/* Kleiner Tipp (Zustellbarkeit) — kanonische Note-Aside, zentrierter Rail */}
      <Note className="mx-auto mt-14 max-w-7xl">
        <span className="font-semibold text-denver-blue">Kleiner Tipp:</span> Sollte eine E-Mail im
        Spam gelandet sein, lege dir den Kontakt{" "}
        <span className="font-semibold text-orange">„MH3 LearnCon GmbH"</span> mit der Adresse{" "}
        <a
          href="mailto:kontakt@mh-learncon.com"
          className="font-semibold text-orange transition-colors hover:text-denver-blue"
        >
          kontakt@mh-learncon.com
        </a>{" "}
        in deinem E-Mail-Programm an – so kommen künftige Nachrichten direkt bei dir an.
      </Note>
    </section>
  );
}
