import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import Note from "@/components/Note";
import { SingleGear } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pitch Workshop – Komm auf den Punkt | MH3 LearnCon",
  description:
    "Online-Kurs: Deine Thesis oder dein Projekt in unter zwei Minuten klar präsentieren. Elevator Pitch trifft Lösungskaskade. 45 Minuten Video in 10 Kapiteln.",
};

const CHECKOUT_URL = "https://mh-learncon.com/s/learncon/pitch-workshop/payment";

/** Einheitliche Außenkante aller Content-Sections dieser Seite. */
const CONTAINER = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
/** Einheitliche Lesebreite für Fließtext innerhalb des Containers. */
const LESEBREITE = "max-w-3xl";

/** Kapitel des Kurses — bewusst sichtbar: Teilnehmende haben zurückgemeldet,
 *  dass die Übersicht vorab bei der Entscheidung geholfen hat. */
const kapitel: string[] = [
  "Willkommen im Kurs",
  "Einführung",
  "Konzepte",
  "Regeln",
  "Ablauf und Phasen des Pitches",
  "Einleitung",
  "Spannungsaufbau",
  "Spannungsauflösung",
  "Folge-Impuls",
  "Übung",
  "Fazit",
];

/** Themen-Karte nach CLAUDE.md: weiße Karte, orange Links-Leiste,
 *  Lead-Wort in Denver-Blau-Bold mit Punkt, danach der Nutzen. */
function ThemenKarte({ lead, children }: { lead: string; children: ReactNode }) {
  return (
    <li className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-orange bg-white px-5 py-4 shadow-sm">
      <p className="text-body text-brand-text">
        <span className="font-bold text-denver-blue">{lead}.</span> {children}
      </p>
    </li>
  );
}

/** Oranger Section-Divider (CLAUDE.md: 60×2 px, zentriert, aria-hidden). */
function Divider() {
  return (
    <div
      className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
      aria-hidden="true"
    />
  );
}

export default function PitchWorkshopPage() {
  return (
    <div className="animate-fade-in">
      <Hero
        h1="Pitch Workshop – komm auf den Punkt"
        subline="Online-Kurs · 45 Minuten Video in 10 Kapiteln"
        body={
          <>
            Monatelang an der Arbeit gesessen – und am Ende bleiben zwei
            Minuten, um dein Ergebnis zu präsentieren. In diesem Kurs baust du
            deinen Pitch so auf, dass deine Kernaussage ankommt und im Kopf
            bleibt.
          </>
        }
        cta={
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-orange px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:border-denver-blue hover:bg-denver-blue hover:text-white"
          >
            Kurs buchen ↗
          </a>
        }
        image={
          <div className="mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:ml-auto lg:mr-0">
            <Image
              src="/images/kurse/pitch-workshop-kachel.png"
              alt="Pitch Workshop – Komm auf den Punkt: Kurs-Kachel mit Titelfolie und Marcus Holzheimer"
              width={669}
              height={673}
              priority
              sizes="(min-width: 1024px) 380px, 340px"
              className="h-auto w-full rounded-lg"
            />
          </div>
        }
      />

      {/* ── Gutschein-Hinweis: bewusst ganz oben, damit niemand versehentlich
             den vollen Preis zahlt (Studierenden-Runde). ─────────────────── */}
      <section className="bg-white pb-12 md:pb-16">
        <div className={CONTAINER}>
          <Note className={LESEBREITE}>
            <strong>Du hast einen Gutscheincode?</strong> Gib ihn im Checkout
            unter „Gutscheincode einlösen“ ein und klicke auf „Anwenden“ – der
            Betrag steht danach auf 0,00 €. Erst danach abschließen.
          </Note>
        </div>
      </section>

      {/* ── Ausgangslage ─────────────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className={CONTAINER}>
          <Divider />
          <h2 className="mb-8 text-h2 font-semibold leading-snug text-brand-text md:mb-10">
            Zwei Minuten entscheiden
          </h2>
          <Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <div className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-orange bg-white p-6 shadow-md md:p-8">
                <p className="text-body leading-relaxed text-brand-text">
                  Du kennst dein Thema bis ins Detail – und merkst beim
                  Präsentieren, dass genau das im Weg steht. Wo anfangen, was
                  weglassen, wie zum Punkt kommen?
                </p>
              </div>
              <div className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-orange bg-white p-6 shadow-md md:p-8">
                <p className="text-body leading-relaxed text-brand-text">
                  Im Publikum sitzen Menschen, die nicht in deinem Thema
                  stecken. Sie entscheiden in den ersten Sätzen, ob sie dir
                  folgen – nicht am Ende deiner Herleitung.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Was du mitnimmst ─────────────────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className={CONTAINER}>
          <Divider />
          <h2 className="mb-8 flex items-center gap-2 text-h2 font-semibold leading-snug text-brand-text md:mb-10">
            <SingleGear width={32} height={32} className="text-orange" />
            Was du mitnimmst
          </h2>
          <Reveal>
            <ul role="list" className="grid list-none grid-cols-1 gap-4 md:grid-cols-2">
              <ThemenKarte lead="Klar auf den Punkt">
                Komplexe Inhalte so strukturieren, dass auch Fachfremde sofort
                folgen – ohne langes Drumherum.
              </ThemenKarte>
              <ThemenKarte lead="Direkt umsetzbar">
                Praxisnahe Methoden, die du sofort auf dein eigenes Thema
                anwendest.
              </ThemenKarte>
              <ThemenKarte lead="Arbeitsblätter">
                Schritt für Schritt zu deinem persönlichen Pitch – zum
                Mitarbeiten, nicht zum Nachlesen.
              </ThemenKarte>
              <ThemenKarte lead="Meine Methode">
                Den klassischen Elevator Pitch verbinde ich mit meiner
                Lösungskaskade – so führst du dein Publikum sicher zur
                Kernaussage.
              </ThemenKarte>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Kursinhalt / Kapitel ─────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className={CONTAINER}>
          <Divider />
          <h2 className="mb-4 text-h2 font-semibold leading-snug text-brand-text">
            Der Kursinhalt
          </h2>
          <p className={`mb-8 ${LESEBREITE} text-body text-brand-text md:mb-10`}>
            45 Minuten Video in 10 Kapiteln – du siehst vorab, was dich
            erwartet:
          </p>
          <Reveal>
            <ol className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {kapitel.map((k, i) => (
                <li
                  key={k}
                  className="flex items-start gap-3 rounded-lg border border-brand-gray-mid-light bg-white px-5 py-3 shadow-sm"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-denver-blue text-xs font-semibold text-denver-blue"
                  >
                    {i + 1}
                  </span>
                  <span className="text-body text-brand-text">{k}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ── Für wen ──────────────────────────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className={CONTAINER}>
          <Divider />
          <h2 className="mb-8 text-h2 font-semibold leading-snug text-brand-text md:mb-10">
            Für wen der Kurs gedacht ist
          </h2>
          <div className={LESEBREITE}>
            <p className="text-body leading-relaxed text-brand-text">
              Für alle, die ein fachlich starkes Ergebnis vor Publikum bringen
              müssen – Absolventinnen und Absolventen mit ihrer Thesis ebenso
              wie Fachleute, die ein Projekt vorstellen. Du zeigst damit, dass
              du dein Ergebnis nicht nur lieferst, sondern es auch klar und
              lebendig vermittelst.
            </p>
            <p className="mt-4 text-body leading-relaxed text-brand-text">
              Nach dem Kurs gibt es eine gemeinsame Live-Übung online, in der
              du deinen Pitch einmal ausprobierst.
            </p>
          </div>
        </div>
      </section>

      {/* ── Buchung ──────────────────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className={CONTAINER}>
          <Divider />
          <div className="rounded-lg bg-white p-8 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] md:p-12">
            <h2 className="text-h2 font-semibold leading-snug text-brand-text">
              Bereit, dein Thema auf den Punkt zu bringen?
            </h2>
            <p className="mx-auto mt-4 max-w-prose text-body text-brand-text">
              Der Kurs kostet 27 € inkl. USt., soweit erhoben – mit
              Gutscheincode 0,00 €. Du hast zwei Monate Zugriff ab Buchung.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-orange px-8 py-4 text-body font-semibold text-white transition-colors duration-200 hover:bg-denver-blue"
              >
                Kurs buchen ↗
              </a>
            </div>
            <p className="mt-4 text-sm text-brand-gray-dark">
              Die Buchung läuft über meine Verkaufsplattform ablefy.
            </p>
          </div>
        </div>
      </section>

      <ContactSection
        headline="Fragen zum Kurs?"
        subtext="Ruf mich an oder schreib mir – ich melde mich zurück."
      />
    </div>
  );
}
