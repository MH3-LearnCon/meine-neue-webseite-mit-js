import type { Metadata } from "next";
import HeroImagePlaceholder from "@/components/HeroImagePlaceholder";
import SituationCard from "@/components/SituationCard";

export const metadata: Metadata = {
  title:
    "Karriereberatung für Fach- und Führungskräfte – Strategie statt Lebenslauf | Marcus Holzheimer",
  description:
    "Berufliche Neuorientierung, Karrierestrategie und Bewerbungsberatung für erfahrene Fach- und Führungskräfte. Nicht mehr Bewerbungen, sondern mehr unterschriftsreife Verträge. Düsseldorf und online.",
};

export default function KarrierePage() {
  return (
    <div className="animate-fade-in">
      {/* ── Abschnitt 1: Hero ─────────────────────────────────────── */}
      <section className="bg-white min-h-[60vh] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-h1 font-extrabold text-brand-text leading-tight">
                Karriereberatung für Fach- und Führungskräfte
              </h1>

              <p className="text-2xl font-semibold text-orange tracking-wide">
                Karriere ist kein Zufall – Karriere ist eine Entscheidung.
              </p>

              <p className="text-body text-brand-text leading-relaxed max-w-lg">
                Die meisten Menschen gehen ihre Karriere reaktiv an: Sie
                bewerben sich auf ausgeschriebene Stellen, verlassen sich auf
                Hörensagen und hoffen, dass es passt. Das geht auch anders. Ich
                unterstütze Sie dabei, Ihren nächsten Schritt strategisch zu
                planen – mit einem klaren Ziel, einem realistischen Weg und dem
                Ergebnis, das zählt: ein unterschriftsreifer Vertrag, der zu
                Ihnen passt.
              </p>
            </div>

            <div>
              <HeroImagePlaceholder label="Bild Karriere-Hero folgt" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 2: SituationCards ───────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text mb-10 md:mb-12 leading-snug">
            Wo stehen Sie gerade?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <SituationCard
              headline="Sie wissen, was Sie wollen – und suchen den Weg dorthin."
              body="Sie haben einen guten Job und verdienen gut. Gleichzeitig spüren Sie: Da geht mehr. Das Ziel ist im Grunde klar – nur der Weg dorthin ist es noch nicht. Sie verschicken Bewerbungen auf ausgeschriebene Stellen, statt Ihre Karriere aktiv zu gestalten. Was Ihnen fehlt, ist ein strukturierter Prozess mit klaren Schritten und Meilensteinen. Oft reicht genau das, um den Unterschied zu machen."
            />
            <SituationCard
              headline="Sie wissen, dass sich etwas ändern muss – nur noch nicht, was genau."
              body="Die Unzufriedenheit ist da, das Ziel noch nicht. Bevor Sie den nächsten Schritt planen können, brauchen Sie Klarheit darüber, wohin es eigentlich gehen soll. Das klingt nach einer großen Frage – und ist es auch. Gleichzeitig lässt sie sich systematisch beantworten. Ich arbeite mit Ihnen zuerst am WAS, bevor wir über das WIE sprechen."
            />
            <SituationCard
              headline="Sie sind eigentlich am richtigen Ort – und trotzdem unzufrieden."
              body="Das Unternehmen passt, die Vergütung stimmt, und trotzdem fehlt etwas – die Führungskraft, die Aufgaben oder beides. Der erste Impuls ist oft: weg hier. Das Risiko dabei: vom Regen in die Traufe. Gemeinsam gehen wir systematisch durch, was sich im aktuellen Umfeld verändern lässt und was einen Wechsel tatsächlich rechtfertigt. Damit Sie eine Entscheidung treffen, die in drei Jahren noch die richtige ist."
            />
            <SituationCard
              headline="Sie stehen vor einem ungewollten Umbruch – und wollen ihn professionell gestalten."
              body="Nach einer Umstrukturierung oder Trennung stehen erfahrene Führungskräfte vor einer Situation, die sie seit Jahren nicht mehr kannten: sich beruflich neu orientieren. Dazu kommt: Der Markt hat sich verändert, die Bewerbungsprozesse ebenfalls, und Diskretion ist entscheidend. Ich kenne die Outplacement-Branche aus der Insider-Perspektive – als ehemaliger Auftraggeber und als Berater. Diese Erfahrung ermöglicht mir eine ehrliche Einschätzung Ihrer Optionen. Stundenbasiert, ohne Paketpreis und ohne Laufzeitbindung."
            />
          </div>

          <p className="text-xl font-medium text-brand-text mt-14 mb-4 text-center">
            Wenn Sie sich in einer dieser Situationen wiederfinden — dann lohnt
            sich ein Gespräch.
          </p>
        </div>
      </section>
    </div>
  );
}
