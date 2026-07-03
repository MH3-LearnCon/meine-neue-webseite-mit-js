import type { Metadata } from "next";
import HexagonBullet from "@/components/icons/HexagonBullet";
import SituationCard from "@/components/SituationCard";
import Image from "next/image";
import { Check, X } from "lucide-react";
import Note from "@/components/Note";

export const metadata: Metadata = {
  title: "Der Standard-Bewerbungsprozess – 0-€-Kurs | MH3 LearnCon",
  description:
    "Die häufigsten Fehler im Standard-Bewerbungsprozess – und wie du sie umgehst. Online-Kurs mit Workbook, in deinem Tempo. Wert: 19 €, für dich kostenfrei.",
};

const LOSLEGEN_URL =
  "https://mh-learncon.com/s/learncon/loslegen-der-standard-bewerbungsprozess";

export default function StandardBewerbungsprozessLP() {
  return (
    <div className="animate-fade-in">
      {/* ── 1: Hero (Squeeze-Kopf) ─────────────────────────────────── */}
      <section className="min-h-[60vh] bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 font-extrabold leading-tight text-brand-text">
            Hol dir die Kontrolle über deinen Bewerbungsprozess zurück.
          </h1>

          <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="flex flex-col gap-6 lg:col-span-3">
              <p className="text-pointe font-semibold tracking-wide text-orange">
                Entdecke die häufigsten Fehler im Standard-Bewerbungsprozess – und
                wie du sie umgehst.
              </p>

              <p className="max-w-lg text-body leading-relaxed text-brand-text">
                Dieser Online-Kurs zeigt dir, was bei deiner Jobsuche bisher
                schiefgelaufen sein könnte – und wie du es änderst. Vier Module,
                sechs Videos, ein Workbook. In unter einer Stunde, in deinem Tempo.
              </p>

              {/* Wert-Anker — „Wert"-Rahmung statt Streichpreis (PAngV-sicher, Entscheidung 02.07.); Preis 0 € steht auf dem Button */}
              <p className="text-body text-brand-text">
                Wert: 19 € – deine Investition: rund eine Stunde Aufmerksamkeit.
              </p>

              {/* CTA + kurs-spezifisches Trust-Signal (kein Shopvote im Hero) */}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-5">
                <a
                  href={LOSLEGEN_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-orange px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:border-denver-blue hover:bg-denver-blue hover:text-white"
                >
                  Für 0 € starten →
                </a>
                <span className="text-sm text-brand-text">
                  Über 100 Fach- und Führungskräfte haben den Kurs bereits genutzt.
                </span>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
                <Image
                  src="/images/lp-bewerbung-mockup.png"
                  alt="Vorschau des Online-Kurses „Der Standard-Bewerbungsprozess“ auf Laptop und Tablet, mit Workbook-Seiten"
                  width={1000}
                  height={864}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2: Problem / Schmerz ───────────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
            aria-hidden="true"
          />

          <h2 className="mb-10 text-h2 font-semibold leading-snug text-brand-text md:mb-12">
            Vielleicht erkennst du dich hier wieder.
          </h2>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            <SituationCard
              headline="Trotz guter Qualifikation immer wieder übergangen."
              body="Du bist fachlich stark, der Fachkräftemangel ist real – und trotzdem kommst du im Bewerbungsprozess nicht durch. Das zermürbt und kostet Selbstvertrauen."
            />
            <SituationCard
              headline="Nur Absagen – wenn überhaupt eine Rückmeldung kommt."
              body="Deine Bemühungen enden in Frustration: Standardabsagen, oft gar keine Antwort. Woran es wirklich liegt, sagt dir niemand."
            />
            <SituationCard
              headline="Lange nicht mehr beworben – und der Markt ist ein anderer."
              body="Du hast dich lange nicht oder noch nie aktiv beworben, weil du es nicht musstest. Jetzt fühlt sich der erste Schritt groß an."
            />
            <SituationCard
              headline="Schon Coaches, HR und Co. gefragt – und trotzdem keinen Schritt weiter."
              body="Du hast dir breit Rat geholt, Gespräche geführt, Unterlagen prüfen lassen – und stehst am selben Punkt. Vielleicht liegt der eigentliche Hebel woanders."
            />
          </div>
        </div>
      </section>

      {/* ── 3: Inhalt & Nutzen (Outcomes + Inventar-Karte; ersetzt Deliverables/Ziel/Format) ── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold leading-snug text-brand-text">
            Das bekommst du – und das bringt es dir.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
            {/* Nutzen / Outcomes */}
            <div>
              <p className="text-body text-brand-text">
                In rund einer Stunde, in deinem Tempo:
              </p>
              <ul className="mt-6 list-none space-y-3 p-0" role="list">
                {[
                  "Du erkennst, wo deine Bewerbungen bisher hängen geblieben sind.",
                  "Du verstehst den Standard-Bewerbungsprozess – und warum du ihn anders angehen solltest.",
                  "Du bekommst klare Handlungsempfehlungen für deinen nächsten Schritt.",
                  "Du ordnest mit dem Workbook deine eigene Situation ein.",
                ].map((label) => (
                  <li key={label} className="flex items-start gap-3">
                    <HexagonBullet
                      size={12}
                      className="mt-1.5 shrink-0 text-orange"
                    />
                    <span className="text-body text-brand-text">{label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex">
                <a
                  href={LOSLEGEN_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-orange px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:border-denver-blue hover:bg-denver-blue hover:text-white"
                >
                  Für 0 € starten →
                </a>
              </div>
            </div>

            {/* Inventar-Karte */}
            <div className="rounded-lg border border-brand-gray-mid-light bg-white p-6 shadow-md md:p-8">
              <h3 className="text-h3 font-semibold text-brand-text">
                Im Kurs enthalten
              </h3>
              <ul className="mt-6 list-none space-y-3 p-0" role="list">
                {[
                  "4 Module plus 1 Bonusmodul",
                  "12 Lektionen",
                  "6 Videos, zusammen rund 32 Minuten",
                  "10-seitiges Workbook zum Download",
                  "3 Quizzes bzw. Abfragen",
                  "1 Goody – lass dich überraschen",
                  "1 Monat Zugang",
                ].map((label) => (
                  <li key={label} className="flex items-start gap-3">
                    <Check
                      size={20}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-orange"
                      aria-hidden="true"
                    />
                    <span className="text-body text-brand-text">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4: Eignung — gegenübergestellte Karten (✓ orange / ✗ grau); Ja/Nein-CD-Element ── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-h2 font-semibold leading-snug text-brand-text">
            Passt dieser Kurs zu dir?
          </h2>
          <p className="mt-8 text-body text-brand-text">
            Dieser Kurs ist nicht für jeden – und das ist gut so. So findest du es in
            zehn Sekunden heraus:
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {/* Passt */}
            <div className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-orange bg-white p-6 shadow-md md:p-8">
              <h3 className="mb-6 text-h3 font-semibold text-brand-text">
                Passt zu dir, wenn …
              </h3>
              <ul className="list-none space-y-4 p-0" role="list">
                {[
                  "du dir schnell einen Überblick verschaffen willst, wo du im Bewerbungsprozess stehst.",
                  "du einen Einstieg ins Thema suchst und erste Tipps, Tricks und Empfehlungen möchtest.",
                  "du neugierig bist und bereit, deinen bisherigen Weg zu hinterfragen.",
                  "du das Tempo, in dem du lernst und umsetzt, selbst bestimmen willst.",
                ].map((label) => (
                  <li key={label} className="flex items-start gap-3">
                    <Check
                      size={28}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-orange"
                      aria-hidden="true"
                    />
                    <span className="text-body text-brand-text">{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Passt nicht */}
            <div className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-brand-gray-mid bg-white p-6 shadow-md md:p-8">
              <h3 className="mb-6 text-h3 font-semibold text-brand-text">
                Passt nicht zu dir, wenn …
              </h3>
              <ul className="list-none space-y-4 p-0" role="list">
                {[
                  "du überzeugt bist, dass du schon alles richtig machst.",
                  "du eine sehr individuelle Situation oder außergewöhnliche Fragen hast.",
                  "du den persönlichen Austausch mit einem Berater brauchst.",
                ].map((label) => (
                  <li key={label} className="flex items-start gap-3">
                    <X
                      size={28}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-brand-gray-dark"
                      aria-hidden="true"
                    />
                    <span className="text-body text-brand-text">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-body text-brand-text">
            Trifft der zweite Teil auf dich zu, lohnt sich der Kurs trotzdem als
            Ausgangsbasis — und für das, was darüber hinausgeht, sprechen wir
            persönlich.
          </p>
        </div>
      </section>

      {/* ── 5: Warum dieser Kurs kostenfrei ist (Haltung + Kosten-Hinweis als Note) ── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-h2 font-semibold leading-snug text-brand-text">
            Warum dieser Kurs kostenfrei ist.
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-body text-brand-text">
              Den Kurs habe ich entwickelt, weil sich in fast jeder Beratung dieselben
              Muster zeigen: Fehler im Standard-Bewerbungsprozess, die kaum jemand
              kennt — und die sich vermeiden lassen, sobald man sie sieht.
            </p>
            <p className="text-body text-brand-text">
              Manche meinen, ihn kostenfrei zu geben, sei nicht in meinem Sinne. Das
              Gegenteil stimmt: Wer die ersten Schritte selbst geht, erkennt klarer,
              wo eine individuelle Zusammenarbeit wirklich etwas bringt — und wo schon
              ein guter Impuls reicht.
            </p>
          </div>
          <blockquote className="my-8 ml-10 mr-8 border-l-4 border-denver-blue py-3 pl-6">
            <p className="text-xl font-medium leading-relaxed text-brand-text">
              Wer die ersten Schritte selbst geht, sieht klarer, wo Unterstützung
              wirklich zählt.
            </p>
          </blockquote>
          <p className="text-body text-brand-text">
            Nach dem Kurs weißt du, woran es lag und wie dein nächster Schritt
            aussieht. Willst du dann tiefer gehen, bin ich da. Wenn nicht, hast du
            trotzdem gewonnen.
          </p>

          <Note className="mt-10">
            <span className="font-semibold">Gut zu wissen:</span> Kostenfrei heißt
            kostenfrei. Dein einziger Einsatz ist rund eine Stunde Aufmerksamkeit und
            die Offenheit, deinen bisherigen Weg zu hinterfragen. Mit deiner
            Anmeldung bist du außerdem in meinem E-Mail-Verteiler. Von mir hörst du
            nur, wenn ich etwas habe, das dich wirklich weiterbringt — und abmelden
            kannst du dich jederzeit mit einem Klick.
          </Note>
        </div>
      </section>

      {/* ── 6: Das sagen Teilnehmende (kurs-spezifischer Trust; Teilnehmer-Feedback verbatim, anonym) ── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-h2 font-semibold leading-snug text-brand-text">
            Das sagen Teilnehmende.
          </h2>
          <p className="mt-8 text-body text-brand-text">
            Über 100 Fach- und Führungskräfte haben den Kurs bereits seit dem Start
            genutzt. Hier ein paar Aussagen auf die Frage, die ihnen am Ende des
            Kurses gestellt wurde:
          </p>
          <p className="mt-4 text-body font-bold text-brand-text">
            Was sagst du einer Person, die dir nahesteht und wissen will, was du da
            gemacht hast – und was es dir gebracht hat?
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <blockquote className="rounded-lg border border-brand-gray-mid-light bg-white p-6 shadow-sm">
              <p className="text-body text-brand-text">
                „<span className="font-semibold">Schnell auf den Punkt, aber in
                eigener Geschwindigkeit</span>: Klärung der eigenen Situation auf der
                Suche nach neuen Herausforderungen und ‚Ufern' und klares Aufzeigen
                von möglichen Handlungsbedarfen für ein erfolgreiches Job finden und
                erhalten. Die kurzen, aber
                inhaltsgespickten Videos geben schnelle und einfache Impulse, um sich
                selbst zu reflektieren und selbst ins Handeln zukommen und ggf. auf
                Unterstützen setzen zu können."
              </p>
            </blockquote>
            <blockquote className="rounded-lg border border-brand-gray-mid-light bg-white p-6 shadow-sm">
              <p className="text-body text-brand-text">
                „<span className="font-semibold">Ich habe gemerkt, dass ich ein
                Vorzeige Beifahrer bin mit wenig Ahnung.</span> Ich muss auf jeden Fall
                meine Strategie ändern, um so dann auf
                bessere Erfolge zu generieren. Es hat mir die Augen geöffnet, dass
                Stellenanzeigen alle nur Bluff sind und es auf herkömmlichen Wegen
                unnötig schwer ist den JOB zu finden. Vielen Dank!"
              </p>
            </blockquote>
            <blockquote className="rounded-lg border border-brand-gray-mid-light bg-white p-6 shadow-sm">
              <p className="text-body text-brand-text">
                „Wenn mich eine dritte Person fragt, würde ich ihr antworten, dass ich
                Klarheit über den Standardbewerbungsprozess gewonnen habe: vom Was
                möchte ich machen über die Recherche, dem Erstkontakt, der Bewerbung,
                dem Vorstellungsgespräch hin zu meinem Ziel dem Traumjob.{" "}
                <span className="font-semibold">Durch deinen Kurs habe ich erkannt, wo
                meine Schwachstellen liegen.</span> Bei mir
                persönlich liegt sie bei dem Was ich machen möchte, bei wem. Es hat mir
                sehr viel gebracht, da ich jetzt ressourcenschonender den weiteren Weg
                gestalten kann."
              </p>
            </blockquote>
          </div>

          <div className="mt-10 flex">
            <a
              href={LOSLEGEN_URL}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-orange px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:border-denver-blue hover:bg-denver-blue hover:text-white"
            >
              Für 0 € starten →
            </a>
          </div>

          <p className="mt-10 text-body text-brand-text">
            Unabhängig geprüft: 5 von 5 bei über 65 Bewertungen zu meiner Beratungs-
            und Trainingsarbeit.
          </p>
          <p className="mt-1">
            <a
              href="https://www.shopvote.de/bewertung_mh-learncon-com_21607.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange transition-colors hover:text-denver-blue"
            >
              Auf shopvote.de ansehen →
            </a>
          </p>
        </div>
      </section>

      {/* ── 7: Dein Berater (Bio; S/W-Foto transparent) ── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-h2 font-semibold leading-snug text-brand-text">
            Dein Berater.
          </h2>
          <div className="mt-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-1">
              <div className="mx-auto w-full max-w-xs">
                <Image
                  src="/images/bio-marcus-sw.png"
                  alt="Marcus Holzheimer, Berater für Karriere, Führung und Vertrieb"
                  width={1080}
                  height={1080}
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div className="space-y-6 lg:col-span-2">
              <p className="text-body text-brand-text">
                Ich bin Marcus Holzheimer, Inhaber der MH3 LearnCon GmbH in
                Düsseldorf. Seit 2006 berate ich Fach- und Führungskräfte zu Karriere,
                Führung und Vertrieb — pragmatisch, auf Augenhöhe und mit dem Blick aus
                der Praxis.
              </p>
              <p className="text-body text-brand-text">
                Den Bewerbungsprozess kenne ich auch von der anderen Seite: als
                ehemaliger Auftraggeber, der selbst Einstellungsentscheidungen
                getroffen hat. Aus genau dieser Erfahrung ist dieser Kurs entstanden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8: Final-CTA ───────────────────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
            aria-hidden="true"
          />

          <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 text-center shadow-md md:p-12">
            <h2 className="text-h2 font-semibold leading-snug text-brand-text">
              Bereit, deinen Bewerbungsprozess neu aufzusetzen?
            </h2>
            <p className="mt-4 text-body text-brand-text">
              Starte mit dem Kurs – kostenfrei, in deinem Tempo.
            </p>
            <p className="mt-2 text-body text-brand-text">Lieber erst sprechen?</p>
            <p className="mt-1 text-body text-brand-text">
              Ruf an unter{" "}
              <a
                href="tel:+491718820277"
                className="font-semibold text-orange transition-colors hover:text-denver-blue"
              >
                0171 88 202 77
              </a>
              .
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={LOSLEGEN_URL}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-orange px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:border-denver-blue hover:bg-denver-blue hover:text-white"
              >
                Für 0 € starten →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
