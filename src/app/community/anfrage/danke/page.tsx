import type { Metadata } from "next";
import Note from "@/components/Note";
import { SingleGear } from "@/components/icons";

export const metadata: Metadata = {
  title: "Danke für deine Anfrage – MH3-EAZEE",
  description: "Deine Community-Anfrage ist bei mir eingegangen.",
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

export default function CommunityAnfrageDankePage() {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 md:py-16 xl:px-16 2xl:px-24">
      <h1 className="text-center text-3xl font-extrabold leading-tight text-brand-text md:text-4xl lg:text-5xl">
        Vielen Dank!
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-center text-base text-brand-text md:text-lg">
        Ich freue mich sehr, dass du Teil der Community werden möchtest – ich
        habe deine Anfrage erhalten.
      </p>

      <ul className="mx-auto mt-12 max-w-3xl space-y-6 lg:mt-16">
        <Line>Ich prüfe nun deine Daten persönlich.</Line>
        <Line>
          Wenn alles passt, erhältst du in den nächsten Tagen dein persönliches
          Angebot per E-Mail.
        </Line>
        <Line>
          Du bestätigst das Angebot – und dein Community-Zugang wird
          freigeschaltet.
        </Line>
      </ul>

      <Note className="mx-auto mt-14 max-w-3xl">
        <span className="font-semibold text-orange">PS:</span> Schau bitte
        überall nach – manchmal verirrt sich eine E-Mail in den SPAM-Ordner.
        Verschiebe sie dann direkt in deinen Posteingang, dann landet die
        nächste richtig. Bei Fragen erreichst du mich unter{" "}
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
