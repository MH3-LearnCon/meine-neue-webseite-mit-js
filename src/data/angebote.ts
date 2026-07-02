// Regal / Angebots-Katalog (/angebote) — Iteration 1.
// Nur buchbare Produkte (Checkout bzw. AC-Formular). Beratung/Simulation/
// Vorträge/Workshops laufen über die Säulen-Seiten + Telefon, nicht hier.
//
// Ziel-Logik: 0-€-Kurs zeigt auf unsere native LP; die bezahlten Produkte
// verlinken interim auf ihre ablefy-Verkaufsseite. Beim späteren nativen
// Rüberholen wird nur `ctaHref` getauscht — Struktur bleibt.
// Neutrales Modul (kein "use client"), damit server-seitig importierbar.

export interface Angebot {
  id: string;
  kategorie: string;
  title: string;
  body: string;
  priceLabel: string;
  ctaText: string;
  ctaHref: string;
  /** true = ablefy-Verkaufsseite (extern, ↗); false = eigene Seite (→). */
  external: boolean;
}

/** Online-Kurse, Preis aufsteigend. */
export const kurse: Angebot[] = [
  {
    id: "standard-bewerbungsprozess",
    kategorie: "Online-Kurs",
    title: "Der Standard-Bewerbungsprozess",
    body: "Der komplette Standard-Bewerbungsprozess und die typischen Fehler der meisten Bewerbenden – als kompakter Online-Kurs mit Workbook und einem Monat Zugriff.",
    priceLabel: "kostenfrei",
    ctaText: "Zum Kurs →",
    ctaHref: "/lp/standard-bewerbungsprozess",
    external: false,
  },
  {
    id: "pitch-workshop",
    kategorie: "Online-Kurs",
    title: "Pitch Workshop – Komm auf den Punkt",
    body: "Elevator Pitch trifft Lösungskaskade: Ergebnisse in unter zwei Minuten klar und überzeugend präsentieren. 45 Minuten Video in 10 Kapiteln.",
    priceLabel: "27 €",
    ctaText: "Zum Kurs ↗",
    ctaHref: "https://mh-learncon.com/s/learncon/pitch-workshop",
    external: true,
  },
  {
    id: "ki-grundlagen",
    kategorie: "Online-Kurs",
    title: "KI-Grundlagen",
    body: "Künstliche Intelligenz verstehen und im Arbeitsalltag nutzen – fundierte Grundlagen ohne unnötigen Fachjargon.",
    priceLabel: "79 €",
    ctaText: "Zum Kurs ↗",
    ctaHref: "https://mh-learncon.com/s/learncon/ki-grundlagen",
    external: true,
  },
  {
    id: "persoenlichkeitsentwicklung",
    kategorie: "Online-Kurs",
    title: "Persönlichkeitsentwicklung",
    body: "Die eigenen Muster erkennen und gezielt weiterentwickeln – strukturiert, praxisnah und mit Modellen, die im Alltag tragen.",
    priceLabel: "149 €",
    ctaText: "Zum Kurs ↗",
    ctaHref: "https://mh-learncon.com/s/learncon/persoenlichkeitsentwicklung",
    external: true,
  },
  {
    id: "finde-dein-was",
    kategorie: "Online-Kurs",
    title: "Finde Dein WAS?",
    body: "Berufliche Klarheit finden – ein strukturierter Kurs für alle, die das Thema im Selbstlernmodus und im eigenen Tempo für sich entwickeln möchten.",
    priceLabel: "329 €",
    ctaText: "Zum Kurs ↗",
    ctaHref: "https://mh-learncon.com/s/learncon/finde-dein-was",
    external: true,
  },
];

/** Intensiv & persönlich. */
export const intensiv: Angebot[] = [
  {
    id: "bootcamp",
    kategorie: "Live-Workshop-Reihe",
    title: "Geh in Führung – das Bootcamp",
    body: "Sechs Live-Workshops in kleiner Gruppe, mit Übungen zwischen den Terminen, Zertifikat und einer individuellen Einzelberatung im Nachgang.",
    priceLabel: "ab 2.294 €",
    ctaText: "Zum Bootcamp ↗",
    ctaHref: "https://mh-learncon.com/s/learncon/geh-in-fuehrung-das-bootcamp",
    external: true,
  },
  {
    id: "einzel-beratung",
    kategorie: "1:1-Beratung",
    title: "Individuelle Einzel-Beratung",
    body: "Ihre individuelle Fragestellung im persönlichen Gespräch – vor Ort in Düsseldorf, online oder telefonisch. Terminwahl nach der Buchung über Calendly, ein Jahr einlösbar.",
    priceLabel: "270 €",
    ctaText: "Zur Beratung ↗",
    ctaHref: "https://mh-learncon.com/s/learncon/individuelle-einzel-beratung",
    external: true,
  },
];
