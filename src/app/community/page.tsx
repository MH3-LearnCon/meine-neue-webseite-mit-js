import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "MH3-EAZEE Community – Handverlesenes Netzwerk für Fach- und Führungskräfte | Marcus Holzheimer",
  description:
    "Geschlossene Community für handverlesene Fach- und Führungskräfte, Unternehmer:innen und Selbstständige. Ehrlich, auf Augenhöhe, persönlich kuratiert.",
};

export default function CommunityPage() {
  return (
    <div className="animate-fade-in">
      {/* ── Section 1: Hero ─────────────────────────────────────────── */}
      <section className="bg-white pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 font-extrabold text-brand-text leading-tight">
            MH3-EAZEE® – handverlesen, ehrlich, auf Augenhöhe.
          </h1>

          <p className="text-base leading-relaxed text-brand-text mt-8 md:mt-10">
            MH3-EAZEE ist eine geschlossene Community für handverlesene Fach-
            und Führungskräfte, Unternehmerinnen und Unternehmer sowie
            Selbstständige. Kein offenes Netzwerk, kein Branchentreff, keine
            LinkedIn-Gruppe – sondern ein geschützter Raum für Menschen, die
            sich gegenseitig weiterbringen wollen.
          </p>

          <p className="text-base leading-relaxed text-brand-text mt-6">
            Ich bin Gastgeber dieser Community. Ich prüfe jede Person
            persönlich, bevor sie dazukommt, und sorge dafür, dass die Menschen
            hier zueinander passen. Ideen und Impulse aus der Community sind
            ausdrücklich willkommen – gleichzeitig behalte ich mir die
            Entscheidung über Aufnahmen, Inhalte und Ausrichtung vor. Dabei steht
            mir ein Advisory Board zur Seite: eine kleine Gruppe erfahrener
            Persönlichkeiten, mit denen ich mich austausche und die mir als
            Sparringspartner dienen. Keine Vereinsstrukturen, keine
            Gremien-Entscheidungen – sondern meine persönliche Zusage, dass du
            dich auf die Menschen in diesem Netzwerk verlassen kannst. Das mache
            ich seit vielen Jahren so, und genau das schätzen die Mitglieder.
          </p>
        </div>
      </section>

      {/* ── Section 2: Für wen? ─────────────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-h2 font-semibold text-brand-text mb-5 leading-snug">
            Für wen ist MH3-EAZEE?
          </h2>

          <p className="text-base leading-relaxed text-brand-text">
            Die Menschen in dieser Community haben unterschiedliche Hintergründe,
            Branchen und Positionen – was sie verbindet, ist eine gemeinsame
            Haltung. Sie teilen die EAZEE-Werte, bringen sich ein und haben den
            Anspruch, sich weiterzuentwickeln. Nicht jede und jeder kommt mit
            jahrzehntelanger Berufserfahrung – manche stehen am Anfang, brennen
            für ihr Thema und zeigen eine Begeisterungsfähigkeit, die andere
            mitreißt. Was zählt, ist der Mensch, nicht der Lebenslauf.
          </p>

          <p className="text-base leading-relaxed text-brand-text mt-6">
            Manche sind Ingenieur:innen, manche Jurist:innen, manche leiten
            Teams, manche ein Unternehmen. Was sie gemeinsam haben: Sie geben
            sich nicht mit Durchschnitt zufrieden – weder bei sich selbst noch
            bei den Menschen, mit denen sie sich umgeben. Und sie wissen, dass
            Austausch auf Augenhöhe mehr bringt als jedes Fachbuch.
          </p>

          <p className="text-base leading-relaxed text-brand-text mt-6">
            Ob du in die Community passt, entscheidet am Ende das persönliche
            Gespräch – nicht dein Titel und nicht deine Branche.
          </p>
        </div>
      </section>
    </div>
  );
}
