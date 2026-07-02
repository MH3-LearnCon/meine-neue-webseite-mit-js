/**
 * LAB — Bildobjekt-Mockups (nicht live)
 * Route: /lab/bildobjekt-mockups
 *
 * Drei Mockups auf Marcus' Ansage (2026-06-30):
 *  1) F bereinigt: Raster + Kontur-Zahnrad + Eckmarken + Statement.
 *     OHNE „Statement 01", „1:1"-Maßlinie, Hexagon, „Marcus Holzheimer".
 *  2) Aus der alten StatementCard (comichaft) → Bild-Objekt (Vorher/Nachher).
 *  3) Typenschild-Konzept (Industrie-Referenz Maschinenbau): graviertes
 *     Metall-Schild, Eckschrauben, technische Typo.
 *
 * Prinzip durchgehend: Bild füllt/beschneidet das Quadrat, Text in RUHIGER
 * WEISSER ZONE (Lesbarkeit zuerst), Orange nur als kleiner voll-deckender Kick.
 */
import ThreeGearsCropped from "@/components/icons/ThreeGearsCropped";
import SingleGear from "@/components/icons/SingleGear";

const S = {
  fuehrung: "Gute Führung braucht Sparring, keine Schonhaltung.",
  karriere: "Nicht mehr Bewerbungen. Sondern der unterschriftsreife Vertrag.",
  vertrieb: "Struktur schlägt Intuition. Prozess schlägt Zufall.",
  simulation: "Führung und Teamdynamik erleben statt besprechen.",
};

const GRID: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(#ECECEC 1px, transparent 1px), linear-gradient(90deg, #ECECEC 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

function CornerMarks() {
  return (
    <>
      <span aria-hidden className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-denver-blue" />
      <span aria-hidden className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-denver-blue" />
      <span aria-hidden className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-denver-blue" />
      <span aria-hidden className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-denver-blue" />
    </>
  );
}

function TextZone({ text }: { text: string }) {
  return (
    <>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/85 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <span aria-hidden className="mb-3 block h-[3px] w-10 bg-orange" />
        <p className="text-lg font-semibold leading-snug text-denver-blue lg:text-xl">{text}</p>
      </div>
    </>
  );
}

/* 1 — F bereinigt */
function Zeichenblatt({ text }: { text: string }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-white shadow-md">
      <div aria-hidden className="absolute inset-0" style={GRID} />
      <ThreeGearsCropped
        width="100%"
        height="100%"
        className="pointer-events-none absolute -right-[18%] -top-[18%] h-[78%] w-[78%] text-brand-gray-mid-light"
      />
      <CornerMarks />
      <TextZone text={text} />
    </div>
  );
}

/* 2a — alte StatementCard (comichaft) */
function BeforeCard({ text }: { text: string }) {
  return (
    <div className="flex aspect-square w-full items-center justify-center rounded-lg border-[3px] border-denver-blue bg-white p-6 text-center shadow-[4px_4px_0px_0px_#FF9B01] lg:p-8">
      <p className="text-lg font-semibold leading-snug text-denver-blue lg:text-xl">{text}</p>
    </div>
  );
}

/* 2b — Bild-Objekt: Großtypografie als Bild (anderer Ausweg aus dem Comic) */
function AfterTypo({ word, text }: { word: string; text: string }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-brand-gray-mid-light bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)]">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-5 top-1 select-none text-[6.5rem] font-extrabold uppercase leading-none tracking-tight text-[#E6E6E6]"
      >
        {word}
      </span>
      <TextZone text={text} />
    </div>
  );
}

/* 3 — Typenschild */
function Screw({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-3.5 w-3.5 rounded-full bg-[#C2C5CA] shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),inset_0_-1px_1px_rgba(0,0,0,0.28)] ${className}`}
    >
      <span className="absolute left-1/2 top-1/2 h-[1.5px] w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#8A8E94]" />
    </span>
  );
}

function Typenschild({ text, kategorie }: { text: string; kategorie: string }) {
  return (
    <div
      className="relative aspect-square w-full overflow-hidden rounded-sm bg-[#E9EAEC] shadow-md ring-1 ring-inset ring-[#C7CACF]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(0,0,0,0.022) 0 1px, transparent 1px 3px)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-3 rounded-[2px] ring-1 ring-inset ring-[#C7CACF] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
      />
      <Screw className="left-2 top-2" />
      <Screw className="right-2 top-2" />
      <Screw className="bottom-2 left-2" />
      <Screw className="bottom-2 right-2" />
      <div className="absolute inset-0 flex flex-col p-7">
        <div className="flex items-center gap-2">
          <SingleGear width={16} height={16} className="text-orange" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6F76]">
            MH3 LearnCon®
          </span>
        </div>
        <p
          className="mt-auto text-lg font-semibold leading-snug text-[#222222] lg:text-xl"
          style={{ textShadow: "0 1px 0 rgba(255,255,255,0.7)" }}
        >
          {text}
        </p>
        <div className="mt-3 flex items-center justify-between border-t border-[#C7CACF] pt-2 text-[10px] uppercase tracking-[0.18em] text-[#8A8E94]">
          <span>Typ · {kategorie}</span>
          <span>MH3-LC</span>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  note,
  children,
}: {
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <div className="mb-5 border-l-4 border-denver-blue pl-4">
        <h2 className="text-h2 font-semibold text-denver-blue">{title}</h2>
        <p className="mt-1 max-w-3xl text-base text-brand-gray-dark">{note}</p>
      </div>
      {children}
    </section>
  );
}

export default function BildobjektMockupsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="mb-10 max-w-3xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange">
          Lab · nicht live
        </p>
        <h1 className="text-h1 font-extrabold text-denver-blue">Bildobjekt — Mockups</h1>
        <p className="mt-4 text-body text-brand-text">
          Drei Richtungen auf deine Ansage. Durchgehendes Prinzip: Bild füllt und
          beschneidet das Quadrat, der Text liegt in einer ruhigen weißen Zone
          (Lesbarkeit zuerst), Orange nur als kleiner Kick.
        </p>
      </header>

      <Section
        title="1 · F bereinigt — Zeichenblatt"
        note="Raster, Kontur-Zahnrad, Eckmarken, Statement. Ohne „Statement 01“, ohne „1:1“-Maßlinie, ohne Hexagon, ohne Namenszeile."
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-3xl">
          <Zeichenblatt text={S.fuehrung} />
          <Zeichenblatt text={S.karriere} />
        </div>
      </Section>

      <Section
        title="2 · Aus der Comic-Karte → Bild-Objekt"
        note="Links die aktuelle StatementCard (harter orangefarbener Versatzschatten = comichaft). Rechts derselbe Satz als Bild-Objekt — hier über Großtypografie als Bild, ein anderer Ausweg aus dem Comic-Look."
      >
        <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:max-w-3xl">
          <div>
            <p className="mb-2 text-sm font-semibold text-brand-gray-dark">Vorher (comichaft)</p>
            <BeforeCard text={S.fuehrung} />
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-brand-gray-dark">Nachher (Bild-Objekt)</p>
            <AfterTypo word="Sparring" text={S.fuehrung} />
          </div>
        </div>
      </Section>

      <Section
        title="3 · Typenschild — Industrie-Referenz (Maschinenbau)"
        note="Graviertes Metall-Schild mit Eckschrauben und technischer Typo — die Sprache der Maschinen-Kennzeichnung. Wiedererkennbar, branchennah, hell-grau (keine dunkle Fläche). Text graviert in ruhiger Zone."
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-3xl">
          <Typenschild text={S.vertrieb} kategorie="Vertrieb" />
          <Typenschild text={S.simulation} kategorie="Simulation" />
        </div>
      </Section>
    </main>
  );
}
