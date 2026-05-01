import type { Metadata } from "next";
import HeroImagePlaceholder from "@/components/HeroImagePlaceholder";
import SituationCard from "@/components/SituationCard";

export const metadata: Metadata = {
  title: "Führung | Marcus Holzheimer",
  description:
    "Führung ist kein Talent – Führung ist ein Handwerk. Praxiserprobte Methoden, klarer Blick auf Ihre Situation, über 20 Jahre Erfahrung mit Führungskräften.",
};

export default function FuehrungPage() {
  return (
    <div className="animate-fade-in">
      {/* ── Abschnitt 1: Hero ─────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text-Spalte */}
            <div className="flex flex-col gap-6">
              <h1 className="text-h1 font-extrabold text-brand-text leading-tight">
                Führung ist kein Talent – Führung ist ein Handwerk.
              </h1>
              <p className="text-body text-brand-gray-dark leading-relaxed max-w-lg">
                Gute Führungskräfte werden selten auf ihre Rolle vorbereitet.
                Die meisten steigen über die Fachlaufbahn auf, bewähren sich
                fachlich – und stehen dann vor Aufgaben, für die ihnen die
                Werkzeuge fehlen. Genau hier setze ich an: mit praxiserprobten
                Methoden, einem klaren Blick auf Ihre Situation und der
                Erfahrung aus über 20 Jahren Arbeit mit Führungskräften aller
                Ebenen.
              </p>
            </div>

            {/* Bild-Platzhalter */}
            <div>
              <HeroImagePlaceholder label="Bild Führung-Hero folgt" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 2: Vier Situationsbeschreibungen ────────────── */}
      <section className="bg-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="text-h2 font-semibold text-brand-text mb-10 md:mb-12 leading-snug">
            In welcher Situation sind Sie?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <SituationCard
              headline="Sie führen erfolgreich – und suchen einen Sparringspartner, der Ihre Sprache spricht?"
              body="Ihr Bereich läuft, Ihre Erfahrung ist fundiert. Gleichzeitig spüren Sie: Vorgaben von oben kommunizieren und umsetzen, Talente fördern trotz knapper Ressourcen, festgefahrene Strukturen aufbrechen – das ist anspruchsvoll, auch mit Erfahrung. Was fehlt, ist ein Gegenüber, das Ihre Realität kennt und auf Augenhöhe mitdenkt. Jemand, der nicht nur fragt, sondern auch eine Meinung hat."
            />
            <SituationCard
              headline="Sie wurden befördert – und merken, dass die neue Rolle andere Fähigkeiten verlangt?"
              body="Befördert zu werden ist eine Anerkennung. Gleichzeitig kann die neue Position Herausforderungen mit sich bringen, auf die niemand vorbereitet war: Entscheidungen unter Unsicherheit treffen, ein Team strukturieren, die eigene Führungskraft und die Mitarbeitenden gleichzeitig zufriedenstellen. Das lässt sich systematisch angehen – mit klaren Werkzeugen und einem Berater, der die Situation kennt, weil er sie selbst erlebt hat."
            />
            <SituationCard
              headline="Eine Ihrer Führungskräfte kommt an Grenzen – und Sie suchen eine diskrete Lösung?"
              body="Die Signale sind da: Mitarbeitende sind unzufrieden, Entscheidungen bleiben liegen, die Stimmung kippt. Sie sehen das Problem, wollen die Person gleichzeitig halten und entwickeln – und brauchen jemanden, der die Situation von außen einschätzt und professionell begleitet. Diskret, auf Augenhöhe mit beiden Seiten und mit dem Ziel, dass Ihre Führungskraft in ihrer Rolle ankommt."
            />
            <SituationCard
              headline="Sie wollen den nächsten Schritt machen – und sich professionell darauf vorbereiten?"
              body="Sie führen ein Team, die ersten Erfolge sind da, und Sie spüren: Da geht noch mehr. Der Wille zur Weiterentwicklung ist da – jetzt geht es darum, aus Intuition professionelles Handwerkszeug zu machen. Ob im Einzelgespräch, im Bootcamp mit anderen Führungskräften oder in der Community: Der Einstieg richtet sich nach dem, was zu Ihrer Situation passt."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
