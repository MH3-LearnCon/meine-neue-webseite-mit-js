import type { Metadata } from "next";
import Link from "next/link";
import HeroImagePlaceholder from "@/components/HeroImagePlaceholder";
import HexagonBullet from "@/components/icons/HexagonBullet";

export const metadata: Metadata = {
  title:
    "Vertriebsberatung für den Lösungsvertrieb | Marcus Holzheimer",
  description:
    "Sie suchen eine Vertriebsschulung? Reden wir zuerst über Ihren Vertriebsprozess. Vertriebsberatung für komplexen B2B-Vertrieb — von der Strategie bis zur erfolgreichen Umsetzung. Deutschlandweit und international.",
};

export default function VertriebPage() {
  return (
    <div className="animate-fade-in">
      {/* ── Abschnitt 1: Hero ─────────────────────────────────────── */}
      <section className="bg-white min-h-[60vh] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-h1 font-extrabold text-brand-text leading-tight">
                Vertriebsberatung für den Lösungsvertrieb
              </h1>

              <p className="text-xl font-semibold text-orange">
                Professioneller Vertrieb ist erlernbar.
              </p>

              <p className="text-body text-brand-text leading-relaxed max-w-lg">
                Ihr Vertrieb soll mehr liefern. Die Frage ist: Was genau fehlt?
                Die meisten Anfragen, die mich erreichen, klingen ähnlich:
                {" \u201EZwei Tage Vertriebsschulung für das Team.\u201C "}
                Das ist ein verständlicher Impuls – und in den seltensten
                Fällen die Lösung. Denn wenn jeder im Team anders arbeitet,
                kein einheitlicher Prozess existiert und die Ergebnisse trotzdem
                besser werden sollen, liegt der Hebel woanders. Nicht mehr
                Termine – sondern mehr sinnvolle Aufträge.
              </p>
            </div>

            <div>
              <HeroImagePlaceholder label="Bild Vertrieb-Hero folgt" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 2: Die Umleitung ───────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Vertriebsschulung, Vertriebstraining, Verkaufsseminar – und warum
            das oft der falsche Einstieg ist.
          </h2>

          <div className="mx-auto max-w-4xl space-y-6">
            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-baseline gap-3">
                <span className="text-2xl font-bold text-denver-blue">1</span>
                <h3 className="text-lg font-bold text-brand-text">
                  Der richtige Impuls
                </h3>
              </div>
              <p className="text-base leading-relaxed text-brand-text">
                Wenn Sie nach einer Vertriebsschulung suchen, haben Sie einen
                konkreten Handlungsbedarf erkannt. Das ist der richtige Impuls.
                Der Vertrieb soll professioneller werden, die Ergebnisse sollen
                steigen, das Team soll einheitlicher arbeiten.
              </p>
            </article>

            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-baseline gap-3">
                <span className="text-2xl font-bold text-denver-blue">2</span>
                <h3 className="text-lg font-bold text-brand-text">
                  Ein anderer Bedarf
                </h3>
              </div>
              <p className="text-base leading-relaxed text-brand-text">
                Gleichzeitig zeigt meine Erfahrung aus über 20 Jahren
                Vertriebsberatung: Hinter der Anfrage
                {" \u201EVertriebsschulung\u201C "}
                steckt fast immer ein anderer Bedarf. Mal fehlt ein
                einheitlicher Vertriebsprozess. Mal ist das Produktmanagement
                nicht in den Vertrieb eingebunden. Mal ist die Herausforderung
                eigentlich eine Führungsaufgabe. Und manchmal ergibt die
                Bedarfsanalyse, dass eine gezielte Schulung tatsächlich der
                richtige Schritt ist – nur eben eine andere, als ursprünglich
                gedacht.
              </p>
            </article>

            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-baseline gap-3">
                <span className="text-2xl font-bold text-denver-blue">3</span>
                <h3 className="text-lg font-bold text-brand-text">
                  Dort starten, wo der Hebel liegt
                </h3>
              </div>
              <p className="text-base leading-relaxed text-brand-text">
                Deshalb starte ich dort, wo der eigentliche Bedarf liegt. Aus
                einer Anfrage für zwei Tage Standardschulung wurde in meiner
                Praxis schon ein zweijähriges Projekt mit Rollout in 24
                Ländern – weil die Bedarfsanalyse gezeigt hat, was tatsächlich
                fehlte. Das Ergebnis war besser als erwartet, die Investition
                hat sich vielfach ausgezahlt.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 3: Branchenkompetenz ───────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Lösungsvertrieb – meine Kernkompetenz.
          </h2>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-brand-text">
              Mein Schwerpunkt liegt dort, wo Vertrieb komplex ist:
              Maschinenbau, Pharma, Medizintechnik, Chemie, IT,
              Beratungsunternehmen und Institute – Branchen mit
              langen Vertriebszyklen, erklärungsbedürftigen Produkten und
              Entscheidungsprozessen, an denen mehrere Personen beteiligt sind.
              Hier funktioniert Vertrieb nur als Lösungsvertrieb: nicht das
              Produkt steht im Vordergrund, sondern die Frage, welches Problem
              der Kunde tatsächlich lösen will.
            </p>

            <p className="text-base leading-relaxed text-brand-text">
              Ich kenne diese Welt, weil ich selbst darin gearbeitet habe – als
              Führungskraft im internationalen Software-Vertrieb, als
              Auftraggeber von Vertriebstrainings und seit 2006 als Berater.
              Diese Kombination macht einen Unterschied: Ich spreche die Sprache
              Ihrer Vertriebsmitarbeitenden und die Sprache Ihrer
              Geschäftsführung. Und ich weiß, wo die Reibungspunkte zwischen
              beiden liegen.
            </p>

            <p className="text-base leading-relaxed text-brand-text">
              Dabei bleibt mein Blick selten beim Vertriebsprozess allein
              stehen. Wenn die Bedarfsanalyse zeigt, dass der Hebel im
              Geschäftsmodell liegt – ein fehlender Vertriebskanal, eine
              veränderte Kundenansprache, eine Lücke zwischen Produktportfolio
              und Marktbedürfnis – dann arbeite ich mit Ihnen auch daran.
            </p>
          </div>

          <blockquote className="my-6 ml-10 mr-8 border-l-4 border-denver-blue py-3 pl-6">
            <p className="text-xl font-medium leading-relaxed text-brand-text">
              „Denn ein professioneller Vertriebsprozess auf einem
              Geschäftsmodell, das nicht mehr passt, liefert bestenfalls
              effizientere Mittelmäßigkeit."
            </p>
          </blockquote>

          <p className="text-base leading-relaxed text-brand-text">
            Genau deshalb ist mein Themenspektrum breiter, als die meisten
            Anfragen vermuten lassen. Wenn der Hebel im Geschäftsmodell liegt,
            arbeite ich mit Ihnen auch daran – mit erprobten Werkzeugen wie der
            Business Model Canvas (BMC) oder dem St. Galler Business Model
            Navigator mit 55+ Geschäftsmodellmustern. Welcher Hebel in Ihrem
            Fall wirkt, zeigt die Bedarfsanalyse zu Beginn.
          </p>
        </div>
      </section>

      {/* ── Abschnitt 4: Themen ──────────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Themen, die in meiner Arbeit mit Vertriebsorganisationen regelmäßig
            vorkommen.
          </h2>

          <p className="text-base leading-relaxed text-brand-text mb-8">
            Welche Themen für Ihre Situation relevant sind, zeigt die
            Bedarfsanalyse. Hier eine Übersicht der Felder, in denen ich am
            häufigsten arbeite:
          </p>

          <ul
            className="mt-8 grid grid-cols-1 list-none gap-4 p-0 m-0 md:grid-cols-2"
            role="list"
          >
            {[
              "Lösungsvertrieb und professionelle Vertriebsprozesse",
              "Vertriebsstruktur und Vertriebsführung",
              "Key Account Management",
              "Verhandlungsführung \u2013 für Vertriebs- und Einkaufsteams",
              "Geschäftsmodellentwicklung und neue Vertriebskanäle",
              "KI-gestützte Vertriebsprozesse und digitale Werkzeuge",
            ].map((label) => (
              <li
                key={label}
                className="flex items-start gap-3 rounded-lg border border-brand-gray-mid-light bg-white px-4 py-3 shadow-sm"
              >
                <HexagonBullet size={12} className="mt-1.5 shrink-0 text-orange" />
                <span className="text-base leading-relaxed text-brand-text">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base leading-relaxed text-brand-text">
            Wer eine Vertriebsschulung anfrägt, braucht manchmal genau das.
            Häufiger zeigt sich, dass der eigentliche Hebel in der Struktur, im
            Prozess oder in der Führung liegt.
          </p>

          <Link
            href="/fuehrung"
            className="mt-4 inline-block text-orange font-semibold hover:text-denver-blue transition-colors"
          >
            Mehr zum Thema Führung →
          </Link>
        </div>
      </section>
    </div>
  );
}
