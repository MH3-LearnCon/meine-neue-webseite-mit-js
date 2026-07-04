import type { Metadata } from "next";
import ProgressBar from "@/components/funnel/ProgressBar";
import Note from "@/components/Note";
import { SingleGear } from "@/components/icons";

export const metadata: Metadata = {
  title: "Geschafft – Der Standard-Bewerbungsprozess",
  description:
    "Deine Anmeldung zum Standard-Bewerbungsprozess ist abgeschlossen. Dein Kurs-Zugang kommt per E-Mail.",
};

function Line({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="flex h-[1.625em] shrink-0 items-center text-base md:text-lg"
      >
        <SingleGear width={34} height={34} className="text-orange" />
      </span>
      <span className="text-base leading-relaxed text-brand-text md:text-lg">{children}</span>
    </li>
  );
}

export default function GeschafftPage() {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 md:py-16 xl:px-16 2xl:px-24">
      {/* Kopf */}
      <h1 className="text-center text-3xl font-extrabold leading-tight text-brand-text md:text-4xl lg:text-5xl">
        Geschafft!
      </h1>

      {/* Fortschritt */}
      <div className="mx-auto mt-8 max-w-7xl md:mt-10">
        <ProgressBar value={100} />
      </div>

      {/* Foto + Bestätigung — auf Rail-Breite (wie der Balken) */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center gap-8 lg:mt-16 lg:flex-row lg:items-center lg:gap-14">
        {/* Foto nur ab Desktop (auf Handy/Tablet bewusst raus) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/funnel/person-geschafft.png"
          alt="Marcus Holzheimer"
          className="hidden shrink-0 self-center lg:block lg:w-80 xl:w-96"
        />
        <ul className="w-full space-y-6 lg:flex-1">
          <Line>
            Du hast die Anmeldung für den Kurs{" "}
            <span className="font-semibold text-denver-blue">„Der Standard-Bewerbungsprozess"</span>{" "}
            erfolgreich abgeschlossen.
          </Line>
          <Line>
            Du erhältst in den nächsten Minuten die E-Mail mit deinen Zugangsdaten zum Kurs.
          </Line>
          <Line>Ich wünsche dir viele Aha-Momente – im Kurs und bei der Umsetzung!</Line>
        </ul>
      </div>

      {/* PS — Hilfe, falls nichts ankommt; in der kanonischen Note-Box */}
      <Note className="mx-auto mt-14 max-w-7xl">
        <span className="font-semibold text-orange">PS:</span> Auch nach ein paar Minuten noch keine
        E-Mail bekommen und im Spam nachgeschaut? Dann schreib mir kurz an{" "}
        <a
          href="mailto:kontakt@mh-learncon.com"
          className="font-semibold text-orange transition-colors hover:text-denver-blue"
        >
          kontakt@mh-learncon.com
        </a>{" "}
        und ich helfe dir weiter.
      </Note>
    </section>
  );
}
