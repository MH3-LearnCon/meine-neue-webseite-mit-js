import { cn } from "@/lib/utils";

export interface ProcessStepItem {
  step: number;
  title: string;
  body: string;
}

export interface ProcessStepsProps {
  steps: ProcessStepItem[];
  /** Optional; z. B. eigene Abstände oder Breite am äußeren Schritte-Wrapper. */
  containerClassName?: string;
}

/**
 * Wiederverwendbare Prozessschritte mit nummerierten Kreisen und Verbindungslinie.
 * Verwendung in Section-Wrapper einbetten. Section regelt Hintergrund, Container-Breite, Divider.
 * Beispiel:
 * <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
 *   <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 *     <h2>...</h2>
 *     <ProcessSteps steps={[{step: 1, title: "...", body: "..."}, ...]} />
 *   </div>
 * </section>
 */
export function ProcessSteps({
  steps,
  containerClassName,
}: ProcessStepsProps) {
  return (
    <div className={cn("mt-10 flex flex-col", containerClassName)}>
      {steps.map(({ step, title, body }, index) => (
        <div key={step}>
          <div className="flex items-center gap-8 md:gap-16">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-denver-blue bg-white shadow-[2px_2px_0px_0px_#FF9B01] md:h-16 md:w-16"
              aria-hidden="true"
            >
              <span className="text-xl font-semibold text-denver-blue">
                {step}
              </span>
            </div>
            <div className="min-w-0 max-w-prose flex-1">
              <p className="text-base font-semibold text-brand-text md:text-lg">
                {title}
              </p>
              <p className="mt-2 text-base leading-relaxed text-brand-text">
                {body}
              </p>
            </div>
          </div>
          {index < steps.length - 1 ? (
            <div className="flex gap-4 md:gap-6">
              <div className="flex w-12 shrink-0 justify-center py-4 md:w-16">
                <div
                  className="w-0.5 min-h-12 shrink-0 bg-denver-blue"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-1" />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
