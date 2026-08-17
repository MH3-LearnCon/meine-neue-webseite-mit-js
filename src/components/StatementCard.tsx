/**
 * Statement Card v2 — Mesh-Fassung (abgenommen 15.08.2026, Register CD-35)
 *
 * Aufbau in vier Schichten: weißer Grund → Hexagon-Mesh (92 % Deckkraft) →
 * weicher weißer Halo über der Textzone → Text plus oranger Eckwinkel.
 * Rahmen und harter Versatzschatten der v1 sind ersatzlos entfallen.
 *
 * Form: ab `lg` (1024 px) Quadrat, darunter keine feste Form, sondern
 * Mindesthöhe 180 px über die volle Containerbreite. Damit ist das Format von
 * der Textlänge entkoppelt — kurze Sätze bekommen 16:9-Ruhe, ein langer Satz
 * lässt die Karte wachsen, statt gedrückt zu werden.
 *
 * Die Karte ändert damit bewusst ihre Rolle: Kontrapunkt neben dem Text am
 * Desktop, Begleitung unter dem Text auf dem Telefon.
 *
 * Mesh: erzeugt mit `_mesh-generator.py` (Prüftisch) in Fassung B — in der
 * Aussparung um den Text sind nur die grauen FLÄCHEN geblockt, die
 * Würfelkanten laufen durch. Quadrat mit Kantenlänge 79,2 auf 1080 × 1080,
 * Querformat mit Kantenlänge 54 auf 1080 × 608. Je Karte ein eigenes Muster:
 * ein Grund, der sich identisch wiederholt, wird selbst zum Zeichen.
 *
 * Vollständige Spezifikation: `_spec-statementcards-2026-08-15.md` im Prüftisch.
 * Copy-Regeln unverändert: max. 15–20 Wörter, keine Floskeln, keine CTAs.
 */

/**
 * Halo im Querformat in FESTEN Maßen, nicht in Prozent der Karte (korrigiert 17.08.2026).
 * Grund: Ein prozentualer Halo wächst mit der Kartenbreite mit. Auf der flachen Karte
 * wischte er fast die gesamte Fläche weg — vom Mesh blieben nur Randlinien. Die Ellipse
 * ist jetzt am Textblock bemessen, analog zur Logo-Regel „15 % der Logogröße" (CD-34),
 * und bleibt gleich, egal wie breit die Karte wird.
 */
const HALO_QUER =
  "radial-gradient(ellipse 200px 64px at 50% 50%, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.93) 55%, rgba(255,255,255,0.5) 80%, rgba(255,255,255,0) 100%)";

const HALO_QUAD =
  "radial-gradient(ellipse 68% 48% at 50% 50%, rgba(255,255,255,0.975) 0%, rgba(255,255,255,0.94) 53%, rgba(255,255,255,0.58) 76%, rgba(255,255,255,0) 92%)";

interface StatementCardProps {
  /** Der Statement-Text (max 15–20 Wörter) */
  text: string;
  /** Wählt das Mesh-Muster (1–5). Gleiche Regeln, anderer Startwert. */
  muster?: 1 | 2 | 3 | 4 | 5;
  /** Zusätzliche CSS-Klassen */
  className?: string;
}

export default function StatementCard({
  text,
  muster = 1,
  className = "",
}: StatementCardProps) {
  return (
    <div
      className={`relative flex min-h-[180px] w-full items-center justify-center overflow-hidden rounded-lg bg-white px-[22px] py-[18px] text-center lg:aspect-square lg:min-h-0 lg:p-8 ${className}`}
    >
      {/* Schicht 2 — Mesh. Je Ansicht ein eigenes Format, damit die Zellgröße stimmt. */}
      <picture className="contents">
        <source
          media="(min-width: 1024px)"
          srcSet={`/images/mesh/statement-${muster}-quad.svg`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/mesh/statement-${muster}-quer.svg`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.92]"
        />
      </picture>

      {/* Schicht 3 — Halo. Gegenstück zur Flächen-Aussparung im Mesh (CD-34). */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 lg:hidden"
        style={{ background: HALO_QUER }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{ background: HALO_QUAD }}
      />

      {/* Schicht 4 — Inhalt */}
      {/* max-w-[300px] hält den Textblock in der Breite des Halos. Auf dem Quadrat
          greift die Grenze nie (Karte ist dort schmaler), auf der flachen Karte schon. */}
      <p className="relative z-10 max-w-[300px] text-lg font-semibold leading-snug text-denver-blue lg:text-xl">
        {text}
      </p>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[10px] right-[10px] z-10 h-[26px] w-[26px] border-b-[3px] border-r-[3px] border-orange"
      />
    </div>
  );
}
