import type { Metadata } from "next";
import HeroImagePlaceholder from "@/components/HeroImagePlaceholder";

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

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            <article className="rounded-lg border border-brand-gray-mid-light border-t-4 border-t-denver-blue bg-white p-6 shadow-md md:p-8">
              <h3 className="mb-4 text-lg font-bold text-brand-text">
                Der richtige Impuls
              </h3>
              <p className="text-base leading-relaxed text-brand-text">
                Wenn Sie nach einer Vertriebsschulung suchen, haben Sie einen
                konkreten Handlungsbedarf erkannt. Das ist der richtige Impuls.
                Der Vertrieb soll professioneller werden, die Ergebnisse sollen
                steigen, das Team soll einheitlicher arbeiten.
              </p>
            </article>

            <article className="rounded-lg border border-brand-gray-mid-light border-t-4 border-t-denver-blue bg-white p-6 shadow-md md:p-8">
              <h3 className="mb-4 text-lg font-bold text-brand-text">
                Ein anderer Bedarf
              </h3>
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

            <article className="rounded-lg border border-brand-gray-mid-light border-t-4 border-t-denver-blue bg-white p-6 shadow-md md:p-8">
              <h3 className="mb-4 text-lg font-bold text-brand-text">
                Dort starten, wo der Hebel liegt
              </h3>
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
    </div>
  );
}
