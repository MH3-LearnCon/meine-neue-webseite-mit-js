import type { Metadata } from "next";
import Link from "next/link";
import Note from "@/components/Note";
import { SingleGear } from "@/components/icons";

export const metadata: Metadata = {
  title: "Newsletter bestätigt – MH3 LearnCon",
  description: "Deine Newsletter-Anmeldung ist bestätigt.",
  robots: { index: false, follow: true },
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

export default function NewsletterBestaetigtPage() {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 md:py-16 xl:px-16 2xl:px-24">
      {/* Status-Kopf (Prozess-Ende: Header bleibt sichtbar, keine Prozess-Sperre) */}
      <h1 className="text-center text-3xl font-extrabold leading-tight text-brand-text md:text-4xl lg:text-5xl">
        Danke — deine Anmeldung ist bestätigt!
      </h1>

      {/* Foto + Bestätigung — Muster der geschafft-Seite (Foto nur ab Desktop) */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center gap-8 lg:mt-16 lg:flex-row lg:items-center lg:gap-14">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/funnel/person-geschafft.png"
          alt="Marcus Holzheimer"
          className="hidden shrink-0 self-center lg:block lg:w-64 xl:w-80"
        />
        <ul className="w-full space-y-6 lg:flex-1">
          <Line>
            Deine E-Mail-Adresse ist bestätigt — du stehst jetzt verbindlich im Verteiler.
          </Line>
          <Line>Du hörst von mir, wenn ich etwas habe, das dich wirklich weiterbringt.</Line>
          <Line>Abmelden geht jederzeit — mit einem Klick in jeder E-Mail.</Line>
        </ul>
      </div>

      {/* PS — Kontakt-Brücke für die Zeit zwischen zwei E-Mails */}
      <Note className="mx-auto mt-14 max-w-7xl">
        <span className="font-semibold text-orange">PS:</span> Zwischen zwei E-Mails kann bei dir
        viel passieren. Wenn dich eine Frage oder ein Thema beschäftigt, melde dich direkt:{" "}
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

      <p className="mt-12 text-center">
        <Link
          href="/"
          className="text-body font-semibold text-orange transition-colors hover:text-denver-blue"
        >
          Zur Startseite →
        </Link>
      </p>
    </section>
  );
}
