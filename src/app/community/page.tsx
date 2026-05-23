import type { Metadata } from "next";
import { R } from "@/components/R";

const COMMUNITY_FORMATS = [
  {
    title: "Online-Stammtische",
    description:
      "Regelmäßige Treffen in unterschiedlichen Formaten: klassischer Austausch, gemeinsames Frühstück, thematische Runden oder auch mal ein Spieleabend. Dazu kommen Stammtische vor Ort für alle, die in der Nähe sind.",
  },
  {
    title: "Vorträge und Workshops",
    description:
      "Von mir und von Gastexpert:innen, darunter auch Community-Mitglieder, die ihr Wissen einbringen. Wer einen Vortrag halten möchte, stimmt das Thema vorher mit mir ab.",
  },
  {
    title: "Challenges",
    description:
      "Monatliche Herausforderungen in drei Kategorien: Umsetzung, Kreativität und Wissen. Die besten Einreichungen werden vom Advisory Board und mir gemeinsam bewertet.",
  },
  {
    title: "Online-Kurse",
    description:
      "Strukturierte Wissensbereiche, die du in deinem Tempo durcharbeiten kannst. Aktuell unter anderem zu KI-Grundlagen – weitere Kurse sind in Planung.",
  },
  {
    title: "Das Event",
    description:
      "Einmal im Jahr organisiere ich ein mehrtägiges Präsenz-Event. Vorträge von Teilnehmenden für Teilnehmende, Netzwerken, gemeinsame Abende.",
  },
  {
    title: "Best Practices und Werkzeuge",
    description:
      "Ein gemeinsamer Wissenspool: Mitglieder teilen Empfehlungen für Tools, Software, Bücher und Fachartikel. Ergänzt durch von mir kuratierte Werkzeuge und Tipps.",
  },
  {
    title: "Erfolge feiern",
    description:
      "Meilensteine, Erkenntnisse, Aha-Momente – in der Community teilen wir Erfolge miteinander. Weil Weiterentwicklung sichtbarer wird, wenn man sie gemeinsam feiert.",
  },
  {
    title: "GsD – Getting sh*t Done",
    description:
      "Vom Aufschieben zum Anpacken. Mitglieder setzen sich wöchentliche Ziele für aufgeschobene Aufgaben und berichten nach einer Woche. Der soziale Aspekt schafft Verbindlichkeit – ganz ohne Druck.",
  },
] as const;

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
            MH3-EAZEE<R /> – die Community
          </h1>

          <p className="text-2xl font-semibold text-orange tracking-wide">
            handverlesen, ehrlich, auf Augenhöhe.
          </p>

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

      {/* ── Section 3: EAZEE-Werte ──────────────────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-h2 font-semibold text-brand-text mb-5 leading-snug">
            Fünf Werte, ein Versprechen.
          </h2>

          <p className="text-base leading-relaxed text-brand-text">
            EAZEE ist mehr als ein Name – es sind die fünf Werte, die diese
            Community zusammenhalten. Gleichzeitig ist es ein Wortspiel: „easy"
            im Sinne von unkompliziertem Zugang und Austausch. Einfach. Machen.
          </p>

          <div
            data-werte-block="true"
            className="ml-4 mr-4 md:ml-[5%] md:mr-[22%]"
          >
          <p className="text-base leading-relaxed text-brand-text mb-3 md:mb-4 mt-6">
            <span className="font-semibold">
              <span className="text-[1.9em] font-extrabold text-orange leading-[0.9] mr-[0.15em]">
                E
              </span>
              hrlich.
            </span>{" "}
            Offene, direkte und aufrichtige Kommunikation. Klartext statt
            Floskeln. Wenn etwas nicht passt, wird es angesprochen – respektvoll
            und konstruktiv.
          </p>

          <p className="text-base leading-relaxed text-brand-text mb-3 md:mb-4">
            <span className="font-semibold">
              <span className="text-[1.9em] font-extrabold text-orange leading-[0.9] mr-[0.15em]">
                A
              </span>
              uthentisch.
            </span>{" "}
            Sich selbst treu bleiben. Echte Persönlichkeiten jenseits von
            Fassaden. Hier muss niemand eine Rolle spielen.
          </p>

          <p className="text-base leading-relaxed text-brand-text mb-3 md:mb-4">
            <span className="font-semibold">
              <span className="text-[1.9em] font-extrabold text-orange leading-[0.9] mr-[0.15em]">
                Z
              </span>
              ielgerichtet.
            </span>{" "}
            Fokus auf Lösungen. Konsequente Verfolgung der eigenen Entwicklung.
            Wer hier ist, will etwas bewegen – für sich und für andere.
          </p>

          <p className="text-base leading-relaxed text-brand-text mb-3 md:mb-4">
            <span className="font-semibold">
              <span className="text-[1.9em] font-extrabold text-orange leading-[0.9] mr-[0.15em]">
                E
              </span>
              ngagiert.
            </span>{" "}
            Aktives Einbringen, gegenseitige Hilfe, Verantwortungsübernahme. Die
            Community lebt davon, dass Mitglieder nicht nur konsumieren, sondern
            gestalten.
          </p>

          <p className="text-base leading-relaxed text-brand-text mb-3 md:mb-4">
            <span className="font-semibold">
              <span className="text-[1.9em] font-extrabold text-orange leading-[0.9] mr-[0.15em]">
                E
              </span>
              ntwickelnd.
            </span>{" "}
            Streben nach persönlichem und beruflichem Wachstum. Nicht allein,
            sondern gemeinsam – wir unterstützen uns dabei gegenseitig.
          </p>
          </div>

          <p className="text-base leading-relaxed text-brand-text mt-8">
            Diese Werte sind kein Leitbild, das an der Wand hängt. Sie sind die
            Grundlage für jede Aufnahmeentscheidung und jede Unterhaltung in der
            Community.
          </p>
        </div>
      </section>

      {/* ── Section 4: Was erwartet dich? ───────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-h2 font-semibold text-brand-text mb-5 leading-snug">
            Was dich in der Community erwartet.
          </h2>

          <p className="text-base leading-relaxed text-brand-text">
            MH3-EAZEE ist kein Archiv und kein Selbstlernkurs – die Community
            lebt vom Austausch und von regelmäßigen Formaten, die ich als
            Gastgeber organisiere und moderiere.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
            {COMMUNITY_FORMATS.map(({ title, description }) => (
              <div
                key={title}
                className="border-l-[4px] border-orange bg-white p-4 md:p-5"
              >
                <p className="text-base font-semibold text-brand-text mb-2">
                  {title}
                </p>
                <p className="text-base leading-relaxed text-brand-text">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-base leading-relaxed text-brand-text mt-8">
            Alle Formate finden auf einer zentralen Plattform statt – kein
            WhatsApp-Chaos, keine verstreuten E-Mails, ein Ort für alles.
          </p>
        </div>
      </section>
    </div>
  );
}
