import type { Metadata } from "next";
import Link from "next/link";
import InlineContactSection from "@/components/InlineContactSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import SituationCard from "@/components/SituationCard";
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

const COMMUNITY_VALUES = [
  {
    letter: "E",
    title: "Ehrlich.",
    description:
      "Offene, direkte und aufrichtige Kommunikation. Klartext statt Floskeln. Wenn etwas nicht passt, wird es angesprochen – respektvoll und konstruktiv.",
  },
  {
    letter: "A",
    title: "Authentisch.",
    description:
      "Sich selbst treu bleiben. Echte Persönlichkeiten jenseits von Fassaden. Hier muss niemand eine Rolle spielen.",
  },
  {
    letter: "Z",
    title: "Zielgerichtet.",
    description:
      "Fokus auf Lösungen. Konsequente Verfolgung der eigenen Entwicklung. Wer hier ist, will etwas bewegen – für sich und für andere.",
  },
  {
    letter: "E",
    title: "Engagiert.",
    description:
      "Aktives Einbringen, gegenseitige Hilfe, Verantwortungsübernahme. Die Community lebt davon, dass Mitglieder nicht nur konsumieren, sondern gestalten.",
  },
  {
    letter: "E",
    title: "Entwickelnd.",
    description:
      "Streben nach persönlichem und beruflichem Wachstum. Nicht allein, sondern gemeinsam – wir unterstützen uns dabei gegenseitig.",
  },
] as const;

export const metadata: Metadata = {
  title: "MH3-EAZEE Community – Netzwerk für Führungskräfte | MH3 LearnCon",
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

          <div className="max-w-4xl mx-auto space-y-3 mt-8">
            {COMMUNITY_VALUES.map(({ letter, title, description }) => (
              <article
                key={title}
                className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-4 shadow-sm md:p-6"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="text-5xl md:text-6xl font-extrabold text-orange leading-none shrink-0 min-w-[3rem] md:min-w-[4rem]">
                    {letter}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-2 text-brand-text">
                      {title}
                    </h3>
                    <p className="text-base text-brand-text leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6">
            {COMMUNITY_FORMATS.map(({ title, description }) => (
              <SituationCard
                key={title}
                headline={title}
                body={description}
                compact
                accent="blue"
              />
            ))}
          </div>

          <p className="text-base leading-relaxed text-brand-text mt-8">
            Alle Formate finden auf einer zentralen Plattform statt – kein
            WhatsApp-Chaos, keine verstreuten E-Mails, ein Ort für alles.
          </p>
        </div>
      </section>

      {/* ── Section 5: Der Weg in die Community ─────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-h2 font-semibold text-brand-text mb-5 leading-snug">
            Der Weg in die Community.
          </h2>

          <p className="text-base leading-relaxed text-brand-text">
            MH3-EAZEE ist keine Community, bei der du dich anmeldest und
            loslegst. Der Zugang ist bewusst persönlich – weil die Qualität der
            Gemeinschaft davon abhängt, dass jedes Mitglied geprüft ist und zu
            den Werten passt.
          </p>

          <ProcessSteps
            steps={[
              {
                step: 1,
                title: "Gespräch",
                body: "Du rufst mich an oder buchst einen Termin. Wenn dich jemand aus der Community empfohlen hat, erwähne das gern – ich informiere die empfehlende Person dann auch, dass ein Kontakt zustande gekommen ist. Im persönlichen Gespräch lernen wir uns kennen – ich höre zu, stelle Fragen und erzähle dir, was dich in der Community erwartet. Gleichzeitig finde ich heraus, ob die Passung stimmt.",
              },
              {
                step: 2,
                title: "Meine Entscheidung",
                body: "Nach dem Gespräch entscheide ich, ob eine Aufnahme passt – für dich und für die bestehende Gemeinschaft. Wenn ja, erhältst du von mir alle weiteren Informationen per E-Mail.",
              },
              {
                step: 3,
                title: "Onboarding",
                body: "Nach deiner Anmeldung wirst du Schritt für Schritt in die Community eingeführt – Plattform, Formate, Spielregeln. Du musst dich um nichts kümmern.",
              },
            ]}
          />

          <p className="text-base leading-relaxed text-brand-text mt-8">
            Und wenn ich im Gespräch den Eindruck gewinne, dass die Community
            gerade nicht das Richtige für dich ist, sage ich dir das offen – und
            empfehle dir, was stattdessen passen könnte.
          </p>
        </div>
      </section>

      <InlineContactSection />

      {/* ── Section 6: Die Geschichte ─────────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-h2 font-semibold text-brand-text mb-5 leading-snug">
            Wie MH3-EAZEE entstanden ist.
          </h2>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-brand-text">
              Die Community ist nicht am Reißbrett entstanden – sie ist
              gewachsen. Über mehr als zehn Jahre habe ich ein Netzwerk
              aufgebaut: handverlesene Menschen aus unterschiedlichen Branchen
              und Positionen, die ich in Beratungen, Workshops, Vorträgen und
              Vorlesungen kennengelernt habe. Menschen, bei denen ich gemerkt
              habe, dass sie fachlich und menschlich etwas Besonderes
              mitbringen. Manche dieser Verbindungen reichen sogar über 20 Jahre
              zurück.
            </p>

            <p className="text-base leading-relaxed text-brand-text">
              Was dieses Netzwerk von Anfang an besonders gemacht hat: die
              Menschen darin. Ich habe bei jeder Person darauf geachtet, dass
              sie zu den anderen passt – nicht nur fachlich, sondern auch in
              ihrer Haltung. Wer nimmt, gibt auch. Was hier besprochen wird,
              bleibt hier – Vegas, Baby. Wer Hilfe braucht, bekommt sie – und
              wer helfen kann, tut es. Das waren nie geschriebene Regeln,
              sondern ein gemeinsames Verständnis, das über die Jahre gewachsen
              ist.
            </p>

            <blockquote className="border-l-4 border-denver-blue ml-10 mr-8 pl-6 py-3 text-xl font-medium text-brand-text">
              Was uns verbindet, sind nicht die Themen – es sind die Werte.
            </blockquote>

            <p className="text-base leading-relaxed text-brand-text">
              Der Austausch lief über WhatsApp-Gruppen, E-Mails, lokale
              Stammtische und Veranstaltungen. Das funktionierte – bis es an
              seine Grenzen kam. Informationen gingen verloren, neue Menschen ins
              Netzwerk einzubinden war umständlich, und viele hatten ein
              schlechtes Gewissen, mich um Rat zu fragen, weil ich auch gegen
              Honorar berate.
            </p>

            <p className="text-base leading-relaxed text-brand-text">
              MH3-EAZEE ist die Evolution dieses Netzwerks – die
              Professionalisierung von etwas, das über Jahre organisch gewachsen
              ist. Ein zentraler Ort statt verstreuter Kanäle, klare Verhältnisse
              statt Grauzone, strukturiertes Wissen und regelmäßige Formate
              statt gelegentlicher Treffen. Was geblieben ist, ist das Wichtigste
              – der vertrauensvolle Austausch, die persönliche Kuratierung und
              das Prinzip, dass alles, was hier besprochen wird, hier bleibt.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 7: Schon Mitglied? ──────────────────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-h2 font-semibold text-brand-text mb-5 leading-snug">
            Schon Mitglied?
          </h2>

          <p className="text-base leading-relaxed text-brand-text">
            Der geschützte Bereich für Mitglieder ist in Vorbereitung. Hier
            werden perspektivisch exklusive Inhalte, Workshop-Materialien und
            weitere Ressourcen bereitstehen.
          </p>

          <p className="mt-6">
            <Link
              href="/community/members"
              className="text-orange font-semibold hover:text-denver-blue transition-colors"
            >
              Zum Member-Bereich →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
