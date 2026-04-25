"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EXAMPLES = [
  {
    value: "beispiel-1",
    title:
      "Die Anfrage: KI einführen. Der eigentliche Bedarf: Führung stärken.",
    text: "Eine Führungskraft wollte für sich und ihr Team KI-Werkzeuge einführen. Die Bedarfsanalyse zeigte: Der eigentliche Schmerzpunkt war Arbeitsbelastung und fehlende Struktur – keine Prioritäten, keine klaren Prozesse, keine Ziele. Das erste Projekt wurde ein Führungsprojekt: Selbstführung und Struktur der Führungsebene. Dann folgten die Prozesse. KI kam als dritter Schritt – dort, wo sie tatsächlich Sinn ergab.",
  },
  {
    value: "beispiel-2",
    title: "Zwei Abteilungen, ein Ziel – und kein gemeinsames Verständnis.",
    text: "Nach einer Reorganisation sollten zwei Teams als eine Einheit funktionieren. Auf dem Papier war alles geregelt, in der Praxis arbeiteten beide Seiten aneinander vorbei. In einem strukturierten Prozess haben die Beteiligten selbst herausgearbeitet, wo die Reibungspunkte lagen – und gemeinsam Lösungen entwickelt, die im Alltag funktionierten. Weil die Ideen von den Mitarbeitenden kamen, wurden sie auch umgesetzt.",
  },
  {
    value: "beispiel-3",
    title:
      "Vom fachlich Besten zur Führungskraft – ein Übergang, der selten von allein gelingt.",
    text: "Ein technisch exzellenter Experte wurde zum Abteilungsleiter befördert. Die Fachkompetenz war unbestritten, die Führungskompetenz fehlte – und das Team spürte es. In einer vertraulichen Zusammenarbeit hat er Schritt für Schritt Werkzeuge für seinen Führungsalltag aufgebaut: Delegation, schwierige Gespräche, Prioritäten setzen. Heute führt er souverän – mit seinem eigenen Stil, nicht nach Lehrbuch.",
  },
];

export default function FuehrungAccordion() {
  return (
    <Accordion type="multiple" className="w-full max-w-4xl mx-auto space-y-3">
      {EXAMPLES.map(({ value, title, text }) => (
        <AccordionItem
          key={value}
          value={value}
          className="group"
        >
          <AccordionTrigger
            className={[
              "flex items-center gap-4 w-full text-left",
              "py-4 px-5",
              "bg-[#E5E5E5] hover:bg-[#D8D8D8] data-[state=open]:bg-[#D8D8D8]",
              "rounded-lg",
              "text-anthracite text-base sm:text-lg lg:text-xl",
              "font-semibold leading-snug",
              "hover:no-underline",
              "transition-colors duration-200",
              "[&>svg]:hidden",
            ].join(" ")}
          >
            {/* Orange Plus/Minus — links, 24x24, 2px Strichstärke */}
            <div
              className="relative w-6 h-6 shrink-0"
              aria-hidden="true"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[2px] bg-orange rounded-sm" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[2px] bg-orange rounded-sm transition-transform duration-200 rotate-90 group-data-[state=open]:rotate-0" />
            </div>

            <span className="flex-1">{title}</span>
          </AccordionTrigger>
          <AccordionContent className="text-body text-anthracite leading-relaxed px-5 pt-2 pb-4">
            {text}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
