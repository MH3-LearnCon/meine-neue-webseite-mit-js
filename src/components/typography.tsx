import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/**
 * Typografie-Rollen — die einzige Quelle der Wahrheit für Schrift im Projekt.
 *
 * Vertrag:
 * - Jede Rolle backt Größe, Gewicht, Farbe und Zeilenhöhe ein. Aufrufer geben
 *   über `className` NUR Layout-Klassen mit (Margins, Ausrichtung) — niemals
 *   Schriftgröße/-gewicht/-farbe. So bleibt die Skala drift-frei.
 * - Alle Größen sind rem-basiert (Tailwind-Default) → skaliert mit der
 *   Browser-Schriftgröße (Accessibility-Pflicht).
 * - Erweitern nur über NEUE benannte Rollen, nie über Ad-hoc-Größen in Seiten.
 *
 * Stand: erste, verifiziert-kanonische Rollen. Noch offen (folgen mit visueller
 * Entscheidung in der Design-Phase): Display/H1, H3, Pointe/Lead, Numeral,
 * Meta, Card-Title.
 */

type HeadingProps = HTMLAttributes<HTMLHeadingElement>;
type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

/** H2 — Sektions-Überschrift. Kanonisch (~17× identisch im Bestand). */
export function H2({ className, children, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(
        "text-2xl font-semibold leading-snug text-brand-text md:text-[2rem]",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

/** Body — Fließtext. Kanonisch (dominanter Bestands-String). */
export function Body({ className, children, ...props }: ParagraphProps) {
  return (
    <p
      className={cn("text-base leading-relaxed text-brand-text", className)}
      {...props}
    >
      {children}
    </p>
  );
}
