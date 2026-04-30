/**
 * Dev-Stub: Visuelle Sichtprüfung der SituationCard-Komponente.
 *
 * Wird nach Block 2 von Sprint 3 wieder entfernt (separater Cleanup-
 * Commit). Nicht produktiv eingesetzt, in next-sitemap.config.js per
 * /dev/:path* von der Sitemap ausgeschlossen, robots noindex/nofollow.
 *
 * Zwei Sektionen untereinander, damit die Card auf beiden möglichen
 * Hintergrundvarianten (Hellgrau / Weiß) geprüft werden kann –
 * insbesondere, ob die 1 px-Border auf Weiß ausreichend sichtbar ist.
 */

import type { Metadata } from "next";
import SituationCard from "@/components/SituationCard";

export const metadata: Metadata = {
  title: "Dev: SituationCard",
  robots: { index: false, follow: false },
};

const cardHeadline =
  "Sie führen erfolgreich – und suchen einen Sparringspartner, der Ihre Sprache spricht?";
const cardBody =
  "Ihr Bereich läuft, Ihre Erfahrung ist fundiert. Gleichzeitig spüren Sie: Vorgaben von oben kommunizieren und umsetzen, Talente fördern trotz knapper Ressourcen, festgefahrene Strukturen aufbrechen – das ist anspruchsvoll, auch mit Erfahrung. Was fehlt, ist ein Gegenüber, das Ihre Realität kennt und auf Augenhöhe mitdenkt. Jemand, der nicht nur fragt, sondern auch eine Meinung hat.";

export default function SituationCardDevPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-h2 font-semibold text-brand-text mb-2">
            Dev: SituationCard
          </h1>
          <p className="text-sm text-brand-gray-dark mb-10">
            Isolierte Sichtprüfung der Komponente auf beiden möglichen
            Sektions-Hintergründen. Wird nach Sprint 3 Block 2 wieder entfernt.
          </p>

          <p className="text-xs uppercase tracking-wide text-brand-gray-dark mb-3">
            Sektion grau (bg-brand-gray-light)
          </p>
          <SituationCard headline={cardHeadline} body={cardBody} />
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs uppercase tracking-wide text-brand-gray-dark mb-3">
            Sektion weiss (bg-white)
          </p>
          <SituationCard headline={cardHeadline} body={cardBody} />
        </div>
      </section>
    </div>
  );
}
