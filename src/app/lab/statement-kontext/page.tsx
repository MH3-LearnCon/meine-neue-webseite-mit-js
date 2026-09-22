/**
 * LAB — StatementCards im Kontext des Startseiten-Z-Patterns
 * Route: /lab/statement-kontext — ARBEITSSTAND, nicht freigegeben
 *
 * ⚠ ACHTUNG, nachgetragen 22.09.2026: Diese Seite ist NICHT verlinkt, aber sie IST eine
 * erreichbare Route. Unter src/app/ wird jeder Ordner zur Route; „nicht verlinkt" heißt
 * nicht „nicht erreichbar". Der frühere Kopfvermerk „nicht live" war falsch.
 *
 * ⚠ VERSUCHSSTAND vom 15.08.2026 — vor CD-35 und CD-36. Die hier gestellte Regelfrage zum
 * Mesh ist inzwischen ENTSCHIEDEN:
 *   CD-35 (15.08.2026): Rahmen und harter oranger Versatzschatten der StatementCard v1 sind
 *     ERSATZLOS entfallen — nicht wieder einführen. Spezifikation: _spec-statementcards-2026-08-15.md
 *   CD-36 (17.08.2026): Das Mesh ist mehr als ein Karten-Merkmal. Der Einsatz außerhalb der
 *     StatementCard ist FREIGEGEBEN; die Reichweite regeln CD-30 bis CD-36.
 * Die Varianten unten zeigen den Vergleichsstand VOR diesen Entscheidungen. Sie bleiben
 * unverändert, weil sie der Anlass der Entscheidung waren — wer sie liest, liest Geschichte,
 * nicht den geltenden Stand.
 *
 * Anlass: OS-138 — Marcus 14.08.2026: „Unsere Statement Cards mit dem Denverblau und
 * orangen Rahmen passen nicht mehr zum restlichen Look."
 *
 * Warum im Kontext und nicht einzeln: Die Karte steht auf der Startseite neben H2,
 * Fließtext und CTA, in vier Sektionen mit wechselnden Seiten und wechselndem
 * Sektionshintergrund. Nur dort entscheidet sich, ob sie passt. Markup und
 * Container-Breiten sind 1:1 aus `src/app/page.tsx` übernommen.
 *
 * Vorgänger: /lab/statement-varianten (30.06.2026) — zeigte vier Richtungen ISOLIERT,
 * vor dem Mesh-Block (CD-30, 04.08.). Diese Seite ersetzt sie nicht, sie beantwortet
 * eine andere Frage.
 *
 * Gesetzte Regeln, gegen die hier geprüft wurde:
 * - CD-25: keine neuen Design-Elemente erfinden
 * - CD-V12: Denver-Blau ist Linien-/Akzentfarbe, NIE Fläche
 * - G13: Mesh oben immer Gitterfassung (nur Linien), damit Text lesbar bleibt
 * - Marken-Bildsprache: Zahnrad = Figur, Mesh = Grund, keine zweite Figur
 * - Underline-Verbot, Link-System T3 (CTA unverändert übernommen)
 */

import type { ReactElement } from "react";
import Link from "next/link";

const SITUATIONS = [
  {
    href: "/fuehrung",
    cta: "Mehr zu Führung",
    h2: "Sie führen ein Team – und merken, dass Erfahrung allein nicht mehr reicht?",
    text: "Vorgaben von oben kommunizieren, Talente entwickeln, festgefahrene Strukturen aufbrechen – und dabei den eigenen Anspruch an gute Führung halten. Das ist anspruchsvoll, besonders wenn die Werkzeuge fehlen oder das Tagesgeschäft alles andere verdrängt. Ich arbeite mit Führungskräften auf allen Ebenen: vom Gruppenleiter, der seine erste Führungsrolle ausfüllen will, bis zum Bereichsleiter, der seinen Bereich strategisch weiterentwickelt.",
    statement: "Gute Führung braucht Sparring, keine Schonhaltung.",
  },
  {
    href: "/karriere",
    cta: "Mehr zu Karriere",
    h2: "Der nächste Karriereschritt steht an – und Sie wollen ihn richtig angehen?",
    text: "Ob Bewerbung, Gehaltsverhandlung oder berufliche Neuorientierung: Die meisten gehen auf Hörensagen statt auf Strategie. Das Ergebnis sind Bewerbungen, die ins Leere laufen, und Entscheidungen, die sich im Nachhinein als vorschnell herausstellen. Ich unterstütze Sie dabei, zuerst Klarheit über Ihr Ziel zu gewinnen – und dann den Weg dorthin systematisch zu gehen. Nicht mehr Bewerbungen, sondern ein unterschriftsreifer Vertrag.",
    statement: "Nicht mehr Bewerbungen. Sondern der unterschriftsreife Vertrag.",
  },
  {
    href: "/vertrieb",
    cta: "Mehr zu Vertrieb",
    h2: "Ihr Vertrieb soll bessere Ergebnisse liefern – und Sie wissen, dass „mehr Termine“ nicht die Antwort ist?",
    text: "Wenn jeder im Team anders arbeitet, kein einheitlicher Prozess existiert und die Geschäftsführung trotzdem mehr Umsatz erwartet, liegt das Problem selten bei den einzelnen Mitarbeitenden. Ich analysiere mit Ihnen, wo die eigentlichen Hebel liegen – und entwickle einen Vertriebsansatz, der zu Ihrem Unternehmen passt, statt ein Standardtraining aufzusetzen.",
    statement: "Struktur schlägt Intuition. Prozess schlägt Zufall.",
  },
  {
    href: "/simulation",
    cta: "Mehr zur Management Simulation",
    h2: "Sie suchen ein Format, das Ihr Team wirklich fordert – und in Erinnerung bleibt?",
    text: "Klassische Teambuilding-Events machen Spaß, verändern im Arbeitsalltag wenig. Die computergestützte Management Simulation ist anders: Ihre Teams managen unter realistischem Druck einen virtuellen Freizeitpark – und zeigen dabei Verhaltensmuster, die in keinem Workshop sichtbar werden. Für 6 bis 48 Teilnehmende, auf Deutsch und Englisch.",
    statement: "Führung und Teamdynamik erleben statt besprechen.",
  },
];

/* ── Mesh-Grund, Gitterfassung (nur Linien) ─────────────────────────────────
   Geometrie exakt nach _mesh-generator.py: spitz stehende Hexagone,
   Tile-Breite = √3·a, vertikaler Schritt = 1,5·a.
   ACHTUNG: a = 26 px ist ein Arbeitswert für die Kartengröße, NICHT die
   gesetzte Kantenlänge (79,2 px gilt für quadratische Bildformate, CD-33).
   Für eine Web-Fläche ist die Kantenlänge noch nicht entschieden.        */
function MeshGrid({ a = 26 }: { a?: number }) {
  const w = (Math.sqrt(3) * a) / 2;
  const tileW = Math.sqrt(3) * a;
  const tileH = 3 * a;
  const hex = (cx: number, cy: number) =>
    `M ${cx} ${cy - a} L ${cx + w} ${cy - a / 2} L ${cx + w} ${cy + a / 2} L ${cx} ${cy + a} L ${cx - w} ${cy + a / 2} L ${cx - w} ${cy - a / 2} Z`;

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="mesh-gitter"
          width={tileW}
          height={tileH}
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="#D9D9D9" strokeWidth="1">
            <path d={hex(0, 0)} />
            <path d={hex(tileW, 0)} />
            <path d={hex(tileW / 2, 1.5 * a)} />
            <path d={hex(0, 3 * a)} />
            <path d={hex(tileW, 3 * a)} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mesh-gitter)" />
    </svg>
  );
}

/* ── V0 — Bestand (unverändert aus src/components/StatementCard.tsx) ─────── */
function CardBestand({ text }: { text: string }) {
  return (
    <div className="flex w-full items-center justify-center rounded-lg border-[3px] border-denver-blue bg-white p-6 text-center shadow-[4px_4px_0px_0px_#FF9B01] lg:aspect-square lg:p-8">
      <p className="text-lg font-semibold leading-snug text-denver-blue lg:text-xl">
        {text}
      </p>
    </div>
  );
}

/* ── V1 — Orange Linie als einziger Anker ────────────────────────────────────
   Rahmen und Versatzschatten entfallen. Die orange Linie ist dieselbe Figur
   wie der Section-Divider (60 × 2 px) und wie der Marken-Anker auf der
   Produkt-Kachel. Kein neues Element (CD-25 eingehalten).                   */
function CardLinie({ text }: { text: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-6 text-center shadow-md lg:aspect-square lg:p-8">
      <span aria-hidden className="mb-5 block h-[2px] w-[60px] bg-orange" />
      <p className="text-lg font-semibold leading-snug text-denver-blue lg:text-xl">
        {text}
      </p>
    </div>
  );
}

/* ── V2 — Mesh-Grund in Gitterfassung ────────────────────────────────────────
   ⚠ REGELFRAGE, nicht als beschlossen behandeln: Das Mesh ist bisher NIE auf
   der Website eingesetzt worden — bislang nur auf Kacheln und Bannern. Diese
   Fassung würde es erstmals in die Web-Oberfläche holen. Das ist eine
   Marken-Entscheidung über die StatementCards hinaus und gehört Marcus
   vorgelegt, nicht stillschweigend gebaut.                                   */
function CardMesh({ text }: { text: string }) {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg border border-brand-gray-mid-light bg-white p-6 text-center lg:aspect-square lg:p-8">
      <MeshGrid />
      <p className="relative z-10 text-lg font-semibold leading-snug text-denver-blue lg:text-xl">
        {text}
      </p>
    </div>
  );
}

/* ── V3 — Denver-Linie links (Anschluss an die Karten-Hierarchie) ────────────
   Übernimmt die Grammatik der Praxis-Karten: linke Leiste = Info, nicht
   klickbar; Denver-Blau = Marcus-Perspektive. Die Karte hört damit auf, ein
   Fremdkörper zu sein, und wird Teil der bestehenden Karten-Familie.        */
function CardDenverLinie({ text }: { text: string }) {
  return (
    <div className="flex w-full items-center justify-center rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 text-center shadow-md lg:aspect-square lg:p-8">
      <p className="text-lg font-semibold leading-snug text-denver-blue lg:text-xl">
        {text}
      </p>
    </div>
  );
}

const VARIANTS = [
  {
    id: "V0",
    name: "V0 — Bestand",
    note: "3 px Denver-Rahmen + harter oranger Versatzschatten. Referenz, unverändert.",
    Card: CardBestand,
  },
  {
    id: "V1",
    name: "V1 — Orange Linie als einziger Anker",
    note: "Rahmen und Versatzschatten weg, shadow-md, orange Linie 60 × 2 über dem Text. Gleiche Figur wie der Section-Divider.",
    Card: CardLinie,
  },
  {
    id: "V2",
    name: "V2 — Mesh-Grund (Gitterfassung) ✓ Regelfrage entschieden",
    note: "Dünner grauer Rahmen, Mesh nur als Linien hinter dem Text. Holte das Mesh erstmals auf die Website — damals eine offene Marken-Entscheidung. ENTSCHIEDEN am 17.08.2026 (CD-36): Einsatz außerhalb der StatementCard freigegeben.",
    Card: CardMesh,
  },
  {
    id: "V3",
    name: "V3 — Denver-Linie links",
    note: "Grammatik der Praxis-Karten: dünner grauer Rahmen, linke Denver-Leiste, shadow-md. Die Karte wird Teil der Karten-Familie statt Solitär.",
    Card: CardDenverLinie,
  },
];

function renderCard(variant: string, text: string): ReactElement {
  if (variant === "V1") return <CardLinie text={text} />;
  if (variant === "V2") return <CardMesh text={text} />;
  if (variant === "V3") return <CardDenverLinie text={text} />;
  return <CardBestand text={text} />;
}

function SituationSection({
  index,
  data,
  variant,
}: {
  index: number;
  data: (typeof SITUATIONS)[number];
  variant: string;
}) {
  const visualLeft = index % 2 === 0;
  const { href, cta, h2, text, statement } = data;

  return (
    <section
      className={`${index % 2 === 0 ? "bg-[#F5F5F5]" : "bg-white"} pt-6 pb-12 md:pt-8 md:pb-16`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="mx-auto mb-6 h-[2px] w-[60px] bg-orange md:mb-8"
          aria-hidden="true"
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
          <div
            className={
              visualLeft
                ? "col-span-full flex flex-col lg:col-span-3 lg:col-start-2 lg:row-start-1"
                : "col-span-full flex flex-col lg:col-span-3 lg:col-start-1 lg:row-start-1"
            }
          >
            <h2 className="text-h2 mb-5 font-semibold leading-snug text-brand-text">
              {h2}
            </h2>
            <p className="text-body leading-relaxed text-brand-text">{text}</p>
          </div>
          <div
            className={
              visualLeft
                ? "col-span-full flex flex-col justify-center lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-1"
                : "col-span-full flex flex-col justify-center lg:col-span-1 lg:col-start-4 lg:row-span-2 lg:row-start-1"
            }
          >
            {renderCard(variant, statement)}
          </div>
          <div
            className={
              visualLeft
                ? "col-span-full flex flex-col lg:col-span-3 lg:col-start-2 lg:row-start-2"
                : "col-span-full flex flex-col lg:col-span-3 lg:col-start-1 lg:row-start-2"
            }
          >
            <Link
              href={href}
              className="text-body font-semibold text-orange transition-colors hover:text-denver-blue"
            >
              {cta}
              {" →"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function StatementKontextPage() {
  return (
    <main>
      <header className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange">
          Lab · nicht live · nicht verlinkt
        </p>
        <h1 className="text-h1 font-extrabold text-denver-blue">
          StatementCards im Kontext
        </h1>
        <p className="text-body mt-4 max-w-3xl text-brand-text">
          Vier Fassungen, jede im vollständigen Z-Pattern der Startseite: vier
          Sektionen, wechselnde Seiten, wechselnder Sektionshintergrund. Markup
          und Container-Breiten sind aus der Startseite übernommen, die
          Proportionen sind also echt und nicht geschätzt. Beurteile die Serie,
          nicht die Einzelkarte.
        </p>
        <p className="text-body mt-4 max-w-3xl text-brand-gray-dark">
          Ein Prinzip je Fassung: V1 nimmt Gewicht weg, V2 gibt Grund dazu, V3
          schließt an die vorhandene Karten-Familie an. Wenn etwas stört, genügt
          das Prinzip — Balance, Kontrast, Betonung, Ausrichtung, Wiederholung,
          Nähe oder Weißraum.
        </p>
      </header>

      {VARIANTS.map(({ id, name, note }) => (
        <div key={id}>
          <div className="mx-auto max-w-6xl px-4 pb-4 pt-10 sm:px-6 lg:px-8">
            <div className="border-l-4 border-denver-blue pl-4">
              <h2 className="text-h2 font-semibold text-denver-blue">{name}</h2>
              <p className="mt-1 text-base text-brand-gray-dark">{note}</p>
            </div>
          </div>
          {SITUATIONS.map((data, index) => (
            <SituationSection
              key={`${id}-${data.href}`}
              index={index}
              data={data}
              variant={id}
            />
          ))}
        </div>
      ))}
    </main>
  );
}
