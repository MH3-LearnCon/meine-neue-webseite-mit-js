/**
 * LAB — Statement-Bildobjekt: Varianten-Vergleich (nicht live)
 * Route: /lab/statement-varianten
 *
 * Zweck: Vier klar unterschiedliche Richtungen für das Statement-Objekt
 * nebeneinander/untereinander, jede mit allen vier Startseiten-Texten,
 * damit der 4×-Rhythmus sichtbar wird.
 *
 * Rahmenbedingungen (Spec 2026-06-30):
 * - Fix: Quadrat, zentrierter Text in Marcus-Stimme.
 * - Register: präzise/analytisch (Ingenieurzeichnung), premium statt comic.
 * - Farbe: sw-Basis + kleiner Kick; Orange NUR full-opacity; Grund-Textur grau.
 * - Geste reserviert (nicht hier), Zahnrad als Grund erlaubt (blass, grau).
 * - Deckel: pro Variante bewegen sich max. zwei Achsen.
 */

const STATEMENTS = [
  { saeule: "Führung", text: "Gute Führung braucht Sparring, keine Schonhaltung." },
  { saeule: "Karriere", text: "Nicht mehr Bewerbungen. Sondern der unterschriftsreife Vertrag." },
  { saeule: "Vertrieb", text: "Struktur schlägt Intuition. Prozess schlägt Zufall." },
  { saeule: "Simulation", text: "Führung und Teamdynamik erleben statt besprechen." },
];

const PREMIUM_SHADOW = "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.22)]";

/* A — Premium soft: nur Tiefe + Typo, kleiner Orange-Kick. Kein Rahmen, kein Zahnrad. */
function VariantA({ text }: { text: string }) {
  return (
    <div
      className={`relative flex aspect-square w-full items-center justify-center rounded-lg bg-white p-6 text-center ${PREMIUM_SHADOW}`}
    >
      <p className="text-lg font-semibold leading-snug text-denver-blue lg:text-xl">{text}</p>
      <span
        aria-hidden
        className="absolute bottom-6 left-1/2 h-[2px] w-8 -translate-x-1/2 bg-orange"
      />
    </div>
  );
}

/* B — Zahnrad-Grund (Marcus' Idee, premium): drei Zahnräder blass-grau, an der Box
   beschnitten, Text drüber; ein scharfes Orange-Segment an einer Ecke als Kick. */
function VariantB({ text }: { text: string }) {
  return (
    <div
      className={`relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-white p-6 text-center ${PREMIUM_SHADOW}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/gears/02_3_Zahnraeder_vollstaendig.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 w-[78%] opacity-[0.10] [filter:grayscale(1)_brightness(1.1)]"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/gears/01_3_Zahnraeder_angeschnitten.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-9 -left-9 w-[34%]"
      />
      <p className="relative z-10 text-lg font-semibold leading-snug text-denver-blue lg:text-xl">
        {text}
      </p>
    </div>
  );
}

/* C — Ingenieurzeichnung: technische Eck-Marken (crop marks) + dünner Rahmen.
   Denver-Blau = Linie/Architektur, eine Ecke Orange als einziger Kick. */
function VariantC({ text }: { text: string }) {
  return (
    <div className="relative flex aspect-square w-full items-center justify-center rounded-lg border border-brand-gray-mid-light bg-white p-8 text-center shadow-md">
      <span aria-hidden className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-denver-blue" />
      <span aria-hidden className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-denver-blue" />
      <span aria-hidden className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-denver-blue" />
      <span aria-hidden className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-orange" />
      <p className="text-lg font-semibold leading-snug text-denver-blue lg:text-xl">{text}</p>
    </div>
  );
}

/* D — Anthrazit-Feld: volles sw-Feld = liest klar als Objekt/Bild (auch Feed-tauglich),
   weißer Text, kleiner Orange-Kick. */
function VariantD({ text }: { text: string }) {
  return (
    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-[#222222] p-6 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]">
      <p className="relative z-10 text-lg font-semibold leading-snug text-white lg:text-xl">{text}</p>
      <span
        aria-hidden
        className="absolute bottom-6 left-1/2 h-[2px] w-8 -translate-x-1/2 bg-orange"
      />
    </div>
  );
}

const VARIANTS = [
  {
    id: "A",
    name: "A — Premium soft",
    axes: "bewegt: Tiefe (weicher Premium-Schatten) + kleiner Orange-Kick. Kein Rahmen, kein Zahnrad.",
    Comp: VariantA,
  },
  {
    id: "B",
    name: "B — Zahnrad-Grund (deine Idee)",
    axes: "bewegt: Grund (drei Zahnräder blass-grau, beschnitten) + Orange-Segment full-opacity als Kick.",
    Comp: VariantB,
  },
  {
    id: "C",
    name: "C — Ingenieurzeichnung",
    axes: "bewegt: Objekt-Signal (technische Eck-Marken + dünner Rahmen). Denver = Linie, eine Ecke Orange.",
    Comp: VariantC,
  },
  {
    id: "D",
    name: "D — Anthrazit-Feld",
    axes: "bewegt: Hintergrund-Feld (anthrazit) + kleiner Orange-Kick. Volles Feld = Objekt/Bild, Feed-tauglich.",
    Comp: VariantD,
  },
];

export default function StatementVariantenPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <header className="mb-10 max-w-3xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange">
          Lab · nicht live
        </p>
        <h1 className="text-h1 font-extrabold text-denver-blue">Statement-Objekt — Varianten</h1>
        <p className="mt-4 text-body text-brand-text">
          Vier Richtungen, jede mit allen vier Startseiten-Statements, damit der
          4×-Rhythmus sichtbar wird. Register: präzise/analytisch, premium statt comic.
          Orange nur full-opacity, Grund-Textur grau. Zum Vergleich: oben je eine Karte
          groß, darunter die Vierer-Reihe.
        </p>
      </header>

      <div className="space-y-16">
        {VARIANTS.map(({ id, name, axes, Comp }) => (
          <section key={id} aria-labelledby={`variant-${id}`}>
            <div className="mb-5 border-l-4 border-denver-blue pl-4">
              <h2 id={`variant-${id}`} className="text-h2 font-semibold text-denver-blue">
                {name}
              </h2>
              <p className="mt-1 text-base text-brand-gray-dark">{axes}</p>
            </div>

            {/* Einzel groß */}
            <div className="mb-8 max-w-xs">
              <Comp text={STATEMENTS[0].text} />
            </div>

            {/* Vierer-Reihe (4×-Rhythmus) */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STATEMENTS.map((s) => (
                <Comp key={s.saeule} text={s.text} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
