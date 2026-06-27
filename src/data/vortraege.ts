export type Vortrag = {
  id: string;
  thema: string;
  titel: string;
  teaser: string;
  beschreibung: string;
  inhalte: string[];
  formate: string[];
  funnel?: string;
  /**
   * Säulen-Seiten, auf denen dieser Vortrag zusätzlich als Angebot erscheint.
   * Steuert allein die Einbindung auf /fuehrung, /karriere, /vertrieb —
   * unabhängig vom Katalog-Thema (`thema`). Leer/undefiniert = nur im Katalog.
   */
  saeulen?: string[];
};

export const VORTRAEGE: Vortrag[] = [
  {
    id: "fuehrung-werkzeuge",
    thema: "Führung",
    titel: "Werkzeuge moderner Führung",
    teaser:
      "Welche Werkzeuge im Führungsalltag wirklich tragen — von Erwartungen klären bis verbindlich kommunizieren.",
    beschreibung:
      "Was macht gute Führung aus — und welche Werkzeuge helfen Einsteigerinnen wie Profis, authentisch und wirksam zu führen? Die gute Nachricht: Der sichere Umgang mit diesen Werkzeugen lässt sich erlernen. Ein Impuls zu den wichtigsten davon.",
    inhalte: [
      "Erwartungen klären und festlegen",
      "Wirkungsvolle Ziele setzen",
      "Systematisch priorisieren",
      "Delegieren mit Sinn",
      "Abgeben nach oben",
      "Effiziente Kommunikation etablieren",
      "Verbindlichkeit schaffen",
    ],
    formate: ["Impuls", "Vortrag", "Workshop"],
    funnel: "Impuls → Bootcamp „Geh in Führung“",
  },
  {
    id: "kommunikation-elevator-pitch",
    thema: "Kommunikation",
    titel: "Elevator Pitch",
    teaser:
      "Sich selbst, eine Idee oder ein Ergebnis in Sekunden auf den Punkt bringen — und mit den ersten Sätzen Neugier wecken.",
    beschreibung:
      "Ob Sie sich selbst vorstellen, eine Geschäftsidee oder ein Arbeitsergebnis präsentieren — der Elevator Pitch bringt es in Sekunden auf den Punkt und bleibt dabei entspannt. Wie Sie vom ersten Moment an wirken und mit wenigen Sätzen Neugier wecken, sodass Ihr Gegenüber mehr wissen möchte. Inklusive erstem Eindruck und einem eigenen Pitch zum Mitnehmen.",
    inhalte: [
      "Der erste Eindruck — und wie Sie ihn positiv beeinflussen",
      "Wann ein Pitch zählt: sich, eine Idee oder ein Ergebnis vorstellen",
      "Aufbau, Konzepte und Regeln",
      "Vorarbeiten und Hilfsmittel",
      "Ablauf und Phasen",
      "Den eigenen, individuellen Pitch ausarbeiten",
    ],
    formate: ["Impuls", "Vortrag", "Workshop"],
    saeulen: ["Vertrieb"],
  },
  {
    id: "netzwerken-kontakte",
    thema: "Netzwerken",
    titel: "Kontakte schaden nur …",
    teaser:
      "„Kontakte schaden nur dem, der keine hat.“ Wie Netzwerken mit überschaubarem Aufwand gelingt.",
    beschreibung:
      "Netzwerken entscheidet über die eigene Karriere mit — in der Wirtschaft wie in der Wissenschaft. Viele halten es für Klinkenputzen; tatsächlich gelingt es mit überschaubarem Aufwand und auf sicheren Wegen, ohne sich zu verbiegen. Wie aus losen Kontakten ein tragfähiges Netzwerk wird, online wie offline.",
    inhalte: [
      "Warum „wissen, wo es steht“ heute nicht mehr reicht",
      "Kontakte mit geringem Aufwand auf- und ausbauen",
      "Geben und Nehmen, horizontales und vertikales Netzwerken",
      "Authentisches Selbstmarketing",
      "Empfehlungsmanagement",
      "Reputation in LinkedIn, Xing & Co.",
    ],
    formate: ["Impuls", "Vortrag", "Workshop"],
    funnel: "Impuls → Beratung",
  },
  {
    id: "karriere-verhandlung",
    thema: "Karriere",
    titel: "Gehalt ist verhandelbar — Konditionen auch.",
    teaser:
      "Den eigenen Wert im Beruf vorbereitet vertreten — beim Einstieg wie in der laufenden Konditionsverhandlung.",
    beschreibung:
      "Die eigene Führungskraft nach mehr Gehalt zu fragen — und dann auch zu verhandeln — fällt vielen schwer. Dabei entscheidet die Vorbereitung mehr als Schlagfertigkeit, und die lässt sich erarbeiten. Dieser Vortrag nimmt die Scheu vor dem Gespräch über Gehalt und Konditionen und macht aus einem unangenehmen Moment eine Verhandlung, in die Sie vorbereitet gehen — beim Einstieg wie in der laufenden Zusammenarbeit. Damit Sie nicht unter Wert bleiben.",
    inhalte: [
      "Was Sie erreichen wollen — und was Sie mindestens brauchen",
      "Den eigenen Marktwert und Spielraum realistisch einschätzen",
      "Gehalt und Konditionen mit guten Argumenten belegen",
      "Taktiken der Gegenseite erkennen und souverän kontern",
      "Auf Einwände ruhig und überzeugend reagieren",
      "Heikle Momente: u. a. Einstellungsgespräch, Beförderung, Jahresgespräch",
    ],
    formate: ["Impuls", "Vortrag"],
  },
  {
    id: "vertrieb-loesungsvertrieb",
    thema: "Vertrieb",
    titel: "So geht Lösungsvertrieb heute.",
    teaser:
      "Warum Vertrieb ein Handwerk ist — Prozess statt Druck, mehr Aufträge statt mehr Termine.",
    beschreibung:
      "Verkaufen gilt vielen als Talent, das man hat oder nicht. Lösungsvertrieb ist das Gegenteil: ein Handwerk mit klarem Prozess, das sich lernen lässt. Ein Impuls dazu, wie Vertrieb heute funktioniert — mit System statt mit Druck. Das Ziel verschiebt sich spürbar: nicht mehr Termine, sondern mehr Aufträge.",
    inhalte: [
      "Warum Vertrieb ein Handwerk ist und keine Begabung",
      "Vom Produkt-Pitch zum echten Bedarf der Kundinnen und Kunden",
      "In Nutzen denken statt in Merkmalen",
      "Prozess statt Druck: der rote Faden eines Verkaufsgesprächs",
      "Warum mehr Termine nicht mehr Aufträge bedeuten",
    ],
    formate: ["Impuls", "Vortrag"],
    saeulen: ["Vertrieb"],
  },
  {
    id: "kommunikation-erster-eindruck",
    thema: "Kommunikation",
    titel: "Es gibt keine zweite Chance für den ersten Eindruck",
    teaser:
      "Wir wirken immer — die Frage ist, ob so, wie wir wollen. Wie Sie Ihren ersten Eindruck bewusst steuern.",
    beschreibung:
      "Den ersten Eindruck machen wir nur einmal — und er entsteht in Sekunden, ob wir wollen oder nicht. Die gute Nachricht: Wirkung ist kein Zufall, sondern lässt sich bewusst steuern. Ein lebendiger Vortrag über genau diese Wirkung — mit Anschauungsmaterial und Aha-Momenten, die hängen bleiben.",
    inhalte: [
      "Was den ersten Eindruck in Sekunden bestimmt",
      "Auftreten und Aussehen — worauf es ankommt",
      "Welchen Anteil Stimme und Atmung haben",
      "Die ersten Worte: was Sie sagen, wenn es zählt",
      "Wie Sie Ihre Wirkung bewusst steuern",
    ],
    formate: ["Impuls", "Vortrag"],
    saeulen: ["Vertrieb"],
  },
  {
    id: "kommunikation-business-knigge",
    thema: "Kommunikation",
    titel: "Business Knigge",
    teaser:
      "Der zweite Eindruck muss halten, was der erste verspricht — sicher auftreten von der Begrüßung bis zum Geschäftsessen.",
    beschreibung:
      "Den ersten Eindruck haben Sie im Griff — und danach? Wer begrüßt wen, wer stellt vor, wer darf das „Du“ anbieten? Geschäftsessen, Empfänge und gesellschaftliche Termine bergen viele kleine Fallen, die an einem guten Eindruck kratzen. Dieser Vortrag macht aus Unsicherheit Souveränität — unterhaltsam, mit vielen Beispielen aus dem beruflichen Alltag.",
    inhalte: [
      "Grüßen, Vorstellen, Anrede — wer, wen, wie",
      "Visitenkarten stilvoll tauschen, Gäste richtig empfangen",
      "Sicheres Verhalten bei Tisch und im Restaurant",
      "Die Aufgaben von Gast und Gastgeber im Beruf",
      "Small Talk und der richtige Moment fürs Geschäftliche",
      "Gelassen bleiben in unangenehmen Situationen",
    ],
    formate: ["Impuls", "Vortrag", "Workshop"],
  },
  {
    id: "kommunikation-grundlagen",
    thema: "Kommunikation",
    titel: "Kommunikationsgrundlagen",
    teaser:
      "„Nur wer redet, dem kann geholfen werden.“ Die Modelle, die gute Kommunikation ausmachen — und wie Sie sie anwenden.",
    beschreibung:
      "Ohne Kommunikation geht im Berufsalltag nichts — und doch verlassen wir uns meist aufs Bauchgefühl. Dieser Vortrag macht die Mechanismen dahinter verständlich und alltagstauglich: die bekanntesten Kommunikationsmodelle, anschaulich erklärt und sofort anwendbar — damit Sie auch in schwierigen Gesprächen sicherer werden.",
    inhalte: [
      "Warum Kommunikation die Kern-Kompetenz im Beruf ist",
      "Das Sender-Empfänger-Modell und die Regeln nach Watzlawick",
      "Die vier Seiten einer Botschaft (Schulz von Thun)",
      "Körpersprache entschlüsseln und Fragetechniken nutzen",
      "Wie professionelle Rückmeldung funktioniert",
    ],
    formate: ["Impuls", "Vortrag", "Workshop"],
  },
  {
    id: "fuehrung-team",
    thema: "Führung",
    titel: "Ein Team entsteht nicht von allein.",
    teaser:
      "Teamentwicklung und Teambuilding: warum Teams scheitern, welche Phasen sie durchlaufen und wie Sie sie schnell leistungsfähig machen — als Führungskraft wie im Team.",
    beschreibung:
      "Teamarbeit ist aus dem Berufsalltag nicht wegzudenken — doch aus mehreren Menschen wird nicht automatisch ein gutes Team. Warum manche Teams scheitern und andere schnell leistungsfähig werden, hat handfeste Gründe, die sich beeinflussen lassen. Ein Vortrag für alle, die Teams führen oder in ihnen Ergebnisse erzielen wollen — als Führungskraft wie als Mitglied.",
    inhalte: [
      "Warum Teams scheitern — und was das verhindert",
      "Die Phasen der Teamentwicklung erkennen und beeinflussen",
      "Welche Rollen ein Team braucht und wie Sie mit ihnen umgehen",
      "Projektteams sinnvoll zusammenstellen",
      "Teams schnell leistungsfähig machen",
    ],
    formate: ["Impuls", "Vortrag", "Workshop"],
  },
  {
    id: "karriere-bewerbungsstrategie",
    thema: "Karriere",
    titel: "Durch die perfekte Bewerbungsstrategie zum Erfolg",
    teaser:
      "Der Bewerbungsprozess von A bis Z — von der Orientierung über die Unterlagen bis zum Vorstellungsgespräch. In drei Bausteinen, einzeln oder als Reihe.",
    beschreibung:
      "Sich beruflich neu zu orientieren — gewollt oder vom Arbeitgeber angestoßen — ist selten geplant und oft mit Unsicherheit verbunden. Diese Reihe macht aus der Bewerbung einen Prozess, den man beherrschen kann, statt sich durchzuwursteln: vorbereitet, mit System, am Ende sicher im Gespräch. Die drei Bausteine bauen aufeinander auf und sind einzeln oder als Ganzes buchbar.",
    inhalte: [
      "Baustein 1 — Bewerbungsprozess von A–Z: Finde dein Was, Recherche, Erstkontakt, Netzwerk, Zeitplanung",
      "Baustein 2 — Die perfekte Bewerbungsunterlage: Anschreiben, Lebenslauf, Zeugnisse, Online-Bewerbung",
      "Baustein 3 — Optimal ins Vorstellungsgespräch: Vorbereitung, Auftreten, Ablauf, Fragen, Interview-Übung",
      "Jeder Baustein auch einzeln buchbar",
    ],
    formate: ["Vortrag", "Workshop"],
  },
  {
    id: "karriere-check",
    thema: "Karriere",
    titel: "Karrierecheck für Fach- und Führungskräfte",
    teaser:
      "Sie planen Projekte, Teams und Familie weit voraus — nur die eigene Karriere nicht? Die 13 wichtigsten Check-Punkte für Ihre Karriereplanung.",
    beschreibung:
      "Viele Fach- und Führungskräfte planen alles voraus — Projekte, Teams, die Familie. Nur die eigene Karriere überlassen sie dem Zufall, bis eine Trennung oder die übergangene Beförderung sie kalt erwischt. Dieser Vortrag lädt dazu ein, die eigene Laufbahn einmal so ernst zu nehmen wie ein Projekt — mit einem klaren Raster aus dem Beratungsalltag und dem einen oder anderen Zauberkunststück, das die Botschaft trägt.",
    inhalte: [
      "Warum kluge Köpfe ihre eigene Karriere oft nicht planen",
      "Die 13 Check-Punkte einer professionellen Karriereplanung",
      "Frühwarnzeichen erkennen, bevor es eng wird",
      "Direkte Handlungs- und Umsetzungsempfehlungen",
      "Reale Beispiele aus dem Beratungsalltag",
    ],
    formate: ["Impuls", "Vortrag"],
  },
  {
    id: "karriere-ingenieur-sein",
    thema: "Karriere",
    titel: "Es ist toll, Ingenieur zu sein – trotz allem",
    teaser:
      "Kaum eine Berufsgruppe trägt so viele Klischees — doch sind es immer Vorurteile? Ein humorvoller Blick in die Denkmuster von Ingenieurinnen und Ingenieuren.",
    beschreibung:
      "Schrullige Tüftler, die nur Formeln im Kopf haben? Kaum eine Berufsgruppe trägt so viele Klischees wie Ingenieurinnen und Ingenieure — doch sind es immer Vorurteile? Marcus Holzheimer, selbst Maschinenbauer, hält ihnen mit viel Humor und Zauberkunststücken den Spiegel vor und zeigt, warum es trotzdem (oder gerade deshalb) toll ist, dazuzugehören. Ein kurzweiliger Vortrag, der unterhält und nebenbei den Blick auf die eigenen Stärken schärft — auch als Abend- oder Rahmenprogramm.",
    inhalte: [
      "Klischees und Vorurteile — was steckt wirklich dahinter?",
      "Ingenieurtypische Denk- und Handlungsmuster mit Augenzwinkern",
      "Beispiele aus Kommunikation, Bewerbung, Partnerschaft und Technik",
      "Eigenheiten erkennen — und für sich nutzen",
      "Kurzweilige Unterhaltung mit Zauberkunststücken und Aha-Momenten",
    ],
    formate: ["Impuls", "Vortrag", "Keynote"],
  },
  {
    id: "kommunikation-flirten",
    thema: "Kommunikation",
    titel: "Flirten für Ingenieurinnen und Ingenieure",
    teaser:
      "Wissensriesen, Handlungszwerge? Wie Sie den inneren Schweinehund besiegen und den ersten Kontakt herstellen — mit Augenzwinkern.",
    beschreibung:
      "Theoretisch haben wir uns alle schon Gedanken gemacht, wie man jemanden anspricht — und es dann doch gelassen. Schon Goethe spottete über „Wissensriesen und Handlungszwerge“. Dieser humorvolle Vortrag räumt damit auf und macht Mut zum ersten Schritt — augenzwinkernd, mit Beispielen, die weit über das Private hinaus nützen.",
    inhalte: [
      "Was beim Flirten in unserem Kopf passiert — Hilfe oder Hürde?",
      "Die besten Vorbereitungen: Auftreten und Äußerlichkeiten",
      "Körpersprache, Signale und wie man sie liest",
      "Den ersten Schritt wagen: ansprechen statt zaudern",
      "Souverän mit einem Korb umgehen",
    ],
    formate: ["Impuls", "Vortrag", "Keynote"],
  },
  {
    id: "kommunikation-small-talk",
    thema: "Kommunikation",
    titel: "Small Talk ist sinnvoll – und erlernbar.",
    teaser:
      "Dass Small Talk dazugehört, wissen Sie längst — die Frage ist das Wie. Eine Technik und ein kleines Repertoire, mit denen Sie in jeder Situation ins Gespräch kommen.",
    beschreibung:
      "Dass Small Talk wichtig ist, wissen die meisten längst — schwieriger ist der erste Schritt. Genau der ist erlernbar: mit etwas Vorbereitung, einem kleinen Repertoire und einer Technik, die in nahezu jeder Situation trägt. So wird aus einer lästigen Pflicht ein Werkzeug, das Türen öffnet — für Kontakte, Projekte und Empfehlungen.",
    inhalte: [
      "Warum der erste Schritt schwerfällt — und wie er leichter wird",
      "Sich vorbereiten: ein kleines Repertoire, das immer trägt",
      "Eine Technik, die in nahezu jeder Situation funktioniert",
      "Der erste Eindruck und die ersten Sätze",
      "Themen, die tragen — und solche, die man meidet",
      "Wann aus Small Talk Business Talk werden darf",
    ],
    formate: ["Impuls", "Vortrag", "Workshop"],
  },
  {
    id: "kommunikation-praesentieren",
    thema: "Kommunikation",
    titel: "Souveränes Präsentieren (bei vollkommener Ahnungslosigkeit)",
    teaser:
      "Was eine gute Präsentation wirklich trägt — Struktur, Nutzen, Medien und der Umgang mit schwierigem Publikum. Vor Ort wie online.",
    beschreibung:
      "Eine gute Präsentation ist kein Zufall — und sie entscheidet oft mehr als der Inhalt selbst. Dieser Vortrag macht aus dem vermeintlich trockenen Thema ein Erlebnis: lebendig, mit vielen Praxisbeispielen und einer Bandbreite, in der für jede und jeden etwas Neues dabei ist — von den Grundlagen bis zum Auftritt vor der Kamera. Damit Ihre nächste Präsentation hängen bleibt, statt nur abgespult zu werden.",
    inhalte: [
      "Was eine gute Präsentation ausmacht",
      "Eine Struktur, die zu Ihrem Publikum passt",
      "Nutzen und Lösung in den Mittelpunkt stellen",
      "Schwierige Zuhörende souverän in den Griff bekommen",
      "Medien bewusst einsetzen: u. a. Sprache, Storytelling, Flipchart, Anschauungsmaterial",
      "Technik im Griff: Beamer, Presenter und Co.",
      "Online präsentieren: u. a. Kameraposition, Hintergrund, Auftreten",
    ],
    formate: ["Impuls", "Vortrag", "Workshop"],
    saeulen: ["Vertrieb"],
  },
  {
    id: "innovation-zukunftsgestalter",
    thema: "Innovation",
    titel: "Vom Problemlöser zum Zukunftsgestalter.",
    teaser:
      "„Keine Idee ist neu“ — Innovation ist Handwerk, kein Geistesblitz, und planbar. Schwerpunkt frei wählbar: vom Innovations-Impuls über Ideenfindung bis zu Werkzeugen wie Design Thinking.",
    beschreibung:
      "„Uns fällt nichts Neues mehr ein“ — diesen Satz hört man oft, und er stimmt selten. Innovation entsteht nicht aus dem Nichts, sondern aus dem klugen Kombinieren von Vorhandenem; das lässt sich lernen und strukturiert anwenden. Dieser Vortrag macht das mit überraschenden Beispielen greifbar und stärkt den Mut, ins Handeln zu kommen. Den Schwerpunkt bestimmen Sie — mehr Impuls, mehr Ideenfindung oder mehr konkrete Werkzeuge, als kompakter Vortrag oder als Workshop zum Mitarbeiten.",
    inhalte: [
      "Drei hartnäckige Innovations-Mythen — und was wirklich zählt",
      "Innovation als Handwerk: kombinieren statt auf den Geistesblitz warten",
      "Ideenfindung strukturiert: u. a. Brainstorming, Brainwriting, Design Thinking",
      "Branchentransfer: Bewährtes in einen neuen Kontext übertragen",
      "Werkzeuge für wiederholbare Innovation: u. a. Business Model Canvas",
      "Schwerpunkt nach Wunsch — vom kurzen Impuls bis zur Ideen-Werkstatt",
    ],
    formate: ["Impuls", "Vortrag", "Workshop"],
  },
  {
    id: "ki-reihe",
    thema: "KI",
    titel: "KI verstehen, nutzen, vorausgehen.",
    teaser:
      "Vom ersten Verständnis über den souveränen Einsatz im Arbeitsalltag bis zu eigenen KI-Assistenten und Agenten. In drei Bausteinen, einzeln oder als Reihe — auf dem jeweils aktuellen Stand.",
    beschreibung:
      "Künstliche Intelligenz verändert den Arbeitsalltag schneller, als die meisten mitkommen — zwischen Hype und Halbwissen fällt Orientierung schwer. Diese Reihe nimmt die Scheu und macht KI praktisch nutzbar: erst verstehen, was wirklich geht, dann im Alltag sicher anwenden, schließlich selbst Assistenten und Abläufe aufsetzen. Praxisnah, verständlich erklärt und auf dem jeweils aktuellen Stand. Die drei Bausteine bauen aufeinander auf und sind einzeln oder als Ganzes buchbar.",
    inhalte: [
      "Baustein 1 — Grundlagen: die KI-Landschaft verstehen (u. a. Modelle, Chatbots, Datenschutz)",
      "Baustein 2 — Im Alltag nutzen: klares Prompting und das Arbeiten in einem KI-Workspace (z. B. Cowork)",
      "Baustein 3 — Aufsetzen: eigene KI-Assistenten, Agenten und erste Automatisierung",
      "Inhalte folgen der schnellen Entwicklung — Stand wird je Termin aktualisiert",
      "Jeder Baustein auch einzeln buchbar",
    ],
    formate: ["Impuls", "Vortrag", "Workshop"],
  },
];

/**
 * Alle Vorträge, die auf einer Säulen-Seite als Angebot erscheinen sollen.
 * Eine Quelle für /fuehrung, /karriere und /vertrieb. Der Katalog (/vortraege)
 * bleibt davon unberührt und filtert weiter nach `thema`.
 */
export function vortraegeFuerSaeule(saeule: string): Vortrag[] {
  return VORTRAEGE.filter((v) => v.saeulen?.includes(saeule));
}
