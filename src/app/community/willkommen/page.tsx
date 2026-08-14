import type { Metadata } from "next";
import Note from "@/components/Note";
import { SingleGear } from "@/components/icons";
import { R } from "@/components/R";

export const metadata: Metadata = {
  title: "Willkommen in der MH3-EAZEE Community",
  description: "Schön, dass du dabei bist.",
  robots: { index: false, follow: false },
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
      <span className="text-base leading-relaxed text-brand-text md:text-lg">
        {children}
      </span>
    </li>
  );
}

export default function CommunityWillkommenPage() {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 md:py-16 xl:px-16 2xl:px-24">
      <h1 className="text-center text-3xl font-extrabold leading-tight text-brand-text md:text-4xl lg:text-5xl">
        Willkommen in der MH3-EAZEE
        <R /> Community!
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-center text-base text-brand-text md:text-lg">
        Schön, dass du dabei bist. Deine Buchung ist bei mir angekommen.
      </p>

      <ul className="mx-auto mt-12 max-w-3xl space-y-6 lg:mt-16">
        <Line>
          Deine Unterlagen (Nutzungsbedingungen, Richtlinien und
          Widerrufsbelehrung) und deine Rechnung bekommst du per E-Mail – heb
          sie dir gut auf.
        </Line>
        <Line>
          Deine persönliche Einladung zur Community kommt per E-Mail. Über den
          Link darin legst du dein Passwort fest und schaltest deinen Zugang
          frei.
        </Line>
        <Line>
          Es gibt in der Community eine Schritt-für-Schritt-Anleitung, die dich mit dem Aufbau der Community vertraut macht und dir beim Start hilft.
        </Line>
      </ul>

      <Note className="mx-auto mt-14 max-w-3xl">
        <span className="font-semibold text-orange">PS:</span> Wenn etwas hakt
        oder du eine Frage hast, melde dich direkt bei mir unter{" "}
        <a
          href="tel:+491718820277"
          className="font-semibold text-orange transition-colors hover:text-denver-blue"
        >
          0171 88 202 77
        </a>{" "}
        oder{" "}
        <a
          href="mailto:kontakt@mh-learncon.com"
          className="font-semibold text-orange transition-colors hover:text-denver-blue"
        >
          kontakt@mh-learncon.com
        </a>
        .
      </Note>
    </section>
  );
}
