export type Workshop = {
  id: string;
  thema: string;
  /** Säulen-Seiten, auf denen der Workshop als Angebot erscheint. */
  saeulen: string[];
  titel: string;
  teaser: string;
};

/**
 * Workshops = bezahlte Tiefe (üben statt zuhören, kleine Gruppe).
 * Eigene Quelle, getrennt von den Vorträgen (`vortraege.ts`) und vom
 * Vorträge-Katalog. Erscheinen aktuell nur als Karten auf den Säulen-Seiten
 * mit Telefon-CTA; eine spätere Workshop-Übersicht liest dieselbe Quelle.
 * Inhalte/Beschreibungen liegen vorerst in den Quelldateien
 * (_workshop-kandidaten-parkplatz.md, DURAG-Foliensatz) und kommen beim
 * Aufbau der Workshop-Übersicht hinzu.
 */
export const WORKSHOPS: Workshop[] = [
  {
    id: "vertrieb-vertriebsexzellenz",
    thema: "Vertrieb",
    saeulen: ["Vertrieb"],
    titel: "Vertriebsexzellenz",
    teaser:
      "Was Ihr Vertrieb heute schon gut macht, bringen wir auf Exzellenz-Niveau: Lösungsvertrieb von den Grundlagen bis zur sauberen Durchführung — Umsatzkreislauf, Positionierung und die vier Phasen von der Vorbereitung über Bedarfsanalyse und Lösungspräsentation bis zur Verhandlung. Tiefe und Schwerpunkte richten sich nach Ihrem Team.",
  },
  {
    id: "vertrieb-messetraining",
    thema: "Vertrieb",
    saeulen: ["Vertrieb"],
    titel: "Messetraining",
    teaser:
      "Ein Messeauftritt entscheidet sich in der Vorbereitung, nicht erst am Stand. Ziele, Positionierung, ein eingespieltes Team und konsequentes Nachfassen — damit aus Ihrem Messebudget verwertbare Termine werden.",
  },
  {
    id: "vertrieb-verhandlungen",
    thema: "Vertrieb",
    saeulen: ["Vertrieb"],
    titel: "Verhandlungen erfolgreich führen",
    teaser:
      "Preise, Konditionen und eigene Vorschläge sicher verhandeln — geübt an Fällen aus Ihrem Arbeitsalltag. Interessen und Machtverhältnisse einschätzen, Argumente ordnen, unfaire Taktiken erkennen und abwehren.",
  },
];

export function workshopsFuerSaeule(saeule: string): Workshop[] {
  return WORKSHOPS.filter((w) => w.saeulen.includes(saeule));
}
