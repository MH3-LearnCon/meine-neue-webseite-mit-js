// Zentrale Quelle der Website-Rechtstexte (Impressum · Datenschutz · AGB).
// Neutrales Daten-Modul (kein "use client"). Öffentlicher Text (bereinigt).
// Interne Prüfpunkte für ITRK/Müller: _website-rechtstexte-entwuerfe-2026-07-16.md.

export interface RechtstextAbschnitt {
  titel?: string;
  absaetze: string[];
}

export interface Rechtstext {
  titel: string;
  untertitel?: string;
  stand?: string;
  einleitung?: string[];
  abschnitte: RechtstextAbschnitt[];
}

export const impressum: Rechtstext = {
  "titel": "Impressum",
  "abschnitte": [
    {
      "absaetze": [
        "MH3 LearnCon GmbH\nGrafenberger Allee 60\n40237 Düsseldorf\nDeutschland"
      ]
    },
    {
      "titel": "Kontakt",
      "absaetze": [
        "Telefon: 0171 88 202 77\nE-Mail: kontakt@mh-learncon.com"
      ]
    },
    {
      "titel": "Registereintrag",
      "absaetze": [
        "Registergericht: Amtsgericht Düsseldorf\nRegisternummer: HRB 85975\nGeschäftsführer: Marcus Holzheimer\nUmsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE324738153"
      ]
    },
    {
      "titel": "Verbraucherstreitbeilegung",
      "absaetze": [
        "Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.",
        "--"
      ]
    }
  ],
  "untertitel": "Angaben gemäß § 5 DDG"
};

export const datenschutz: Rechtstext = {
  "titel": "Datenschutzerklärung",
  "abschnitte": [
    {
      "titel": "1. Verantwortlicher",
      "absaetze": [
        "MH3 LearnCon GmbH, Grafenberger Allee 60, 40237 Düsseldorf, Deutschland.\nTelefon: 0171 88 202 77 · E-Mail: kontakt@mh-learncon.com · Geschäftsführer: Marcus Holzheimer.\nEin Datenschutzbeauftragter ist gesetzlich nicht erforderlich und nicht benannt."
      ]
    },
    {
      "titel": "2. Allgemeines",
      "absaetze": [
        "Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung der Website und unserer Leistungen erforderlich ist oder Sie eingewilligt haben. Rechtsgrundlagen sind Art. 6 Abs. 1 lit. a (Einwilligung), lit. b (Vertrag/vorvertraglich) und lit. f (berechtigtes Interesse) DSGVO."
      ]
    },
    {
      "titel": "3. Ihre Rechte",
      "absaetze": [
        "Auskunft (Art. 15), Berichtigung (16), Löschung (17), Einschränkung (18), Datenübertragbarkeit (20), Widerspruch (21) sowie Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3). Beschwerderecht bei einer Aufsichtsbehörde (Art. 77) — zuständig u. a. die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen."
      ]
    },
    {
      "titel": "4. Hosting und Server-Logfiles",
      "absaetze": [
        "Diese Website wird bei der netcup GmbH, Deutschland, gehostet (statische Auslieferung, Serverstandort Deutschland). Beim Aufruf erhebt der Server automatisch Zugriffsdaten in Logfiles (IP-Adresse, Datum/Uhrzeit, abgerufene Datei, Datenmenge, Referrer, Browser/Betriebssystem). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (sicherer, stabiler Betrieb). Ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO liegt vor."
      ]
    },
    {
      "titel": "5. Schriftarten (lokal eingebunden)",
      "absaetze": [
        "Die Schriftart „Montserrat\" ist lokal auf dem Server eingebunden. Es werden keine Schriftdaten von externen Servern (z. B. Google Fonts) geladen; Ihre IP-Adresse wird zu diesem Zweck nicht an Dritte übertragen."
      ]
    },
    {
      "titel": "6. Kontaktaufnahme",
      "absaetze": [
        "Bei Kontakt per E-Mail oder Telefon verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO). Unser E-Mail-Postfach wird über Microsoft 365 (Microsoft Ireland Operations Ltd., Irland; Konzernmutter Microsoft Corp., USA) betrieben; ein Auftragsverarbeitungsvertrag inkl. Standardvertragsklauseln liegt vor. Zu USA-Übermittlungen siehe Ziffer 10."
      ]
    },
    {
      "titel": "7. Terminvereinbarung (Calendly – externe Verlinkung)",
      "absaetze": [
        "Für die Online-Terminvereinbarung verlinken wir den Dienst Calendly (Calendly LLC, USA). Calendly ist nicht in die Website eingebettet; erst wenn Sie den Link aktiv anklicken, werden Sie weitergeleitet, und es gilt die dortige Datenschutzerklärung. Bis zum Klick werden keine Daten an Calendly übertragen."
      ]
    },
    {
      "titel": "8. Kostenfreier Kurs / Newsletter (Anmeldung, Double-Opt-In)",
      "absaetze": [
        "Über das Anmeldeformular können Sie sich für unseren kostenfreien Kurs und E-Mail-Verteiler eintragen (Vorname, Nachname, E-Mail). Rechtsgrundlage: Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) im Double-Opt-In-Verfahren (Bestätigung per Klick in der ersten E-Mail). Abmeldung jederzeit über den Abmeldelink oder per Nachricht; der Widerruf berührt nicht die Rechtmäßigkeit der bisherigen Verarbeitung.\nFormularübermittlung über eine von uns betriebene Serverless-Funktion beim Anbieter Scaleway (Scaleway SAS, Frankreich; Verarbeitung im Rechenzentrum Amsterdam, EU), AVV nach Art. 28 DSGVO.\nVersand/Verwaltung über ActiveCampaign (ActiveCampaign LLC, USA), AVV inkl. Standardvertragsklauseln; zu USA-Übermittlungen siehe Ziffer 10."
      ]
    },
    {
      "titel": "9. Bewertungssiegel (ShopVote)",
      "absaetze": [
        "Auf einzelnen Seiten binden wir ein Bewertungssiegel des Dienstes ShopVote (ShopVoting GmbH, Deutschland) als Grafik ein. Beim Laden wird Ihre IP-Adresse an den ShopVote-Server übertragen (technisch notwendig zur Auslieferung). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Das Siegel setzt keine Cookies."
      ]
    },
    {
      "titel": "10. Datenübermittlung in die USA / Drittländer",
      "absaetze": [
        "Einzelne Dienste (Microsoft 365, ActiveCampaign, Calendly) können Daten in den USA verarbeiten. Grundlage sind — soweit die Anbieter zertifiziert sind — das EU-US Data Privacy Framework sowie ergänzend die Standardvertragsklauseln der EU-Kommission (Art. 46 DSGVO)."
      ]
    },
    {
      "titel": "11. Auftragsverarbeitung / Empfänger",
      "absaetze": [
        "Sorgfältig ausgewählte Auftragsverarbeiter (Art. 28 DSGVO): netcup (Hosting, DE), Microsoft (E-Mail, EU/US), Scaleway (Formular-Endpunkt, EU), ActiveCampaign (Newsletter/Kurs, US). Eine Weitergabe an sonstige Dritte erfolgt nur bei gesetzlicher Pflicht oder Ihrer Einwilligung."
      ]
    },
    {
      "titel": "12. Cookies / kein Tracking",
      "absaetze": [
        "Diese Website verwendet keine Analyse-, Marketing- oder Tracking-Cookies und bindet weder Google Analytics noch einen Meta-Pixel oder vergleichbare Werbe-/Analysedienste ein. Ein Cookie-Banner ist daher nicht erforderlich."
      ]
    },
    {
      "titel": "13. Speicherdauer & Änderungen",
      "absaetze": [
        "Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke oder gesetzliche Aufbewahrungsfristen erforderlich ist. Diese Erklärung wird angepasst, wenn sich Rechtslage oder Verarbeitung ändern.",
        "--"
      ]
    }
  ],
  "stand": "Stand: Juli 2026",
  "untertitel": "Informationen zur Verarbeitung Ihrer Daten"
};

export const agb: Rechtstext = {
  "titel": "Allgemeine Geschäftsbedingungen",
  "abschnitte": [
    {
      "titel": "1. Geltungsbereich",
      "absaetze": [
        "Diese Bedingungen gelten für die Nutzung der Website mh-learncon.com der MH3 LearnCon GmbH (nachfolgend „wir\"). Die Website dient der Information über unsere Leistungen und der Kontaktaufnahme."
      ]
    },
    {
      "titel": "2. Leistungen / kein Vertragsschluss über die Website",
      "absaetze": [
        "Die Inhalte der Website sind unverbindliche Informationen und stellen kein Angebot im Rechtssinne dar. Ein Beratungs- oder Leistungsvertrag kommt ausschließlich außerhalb der Website (individuell, z. B. per E-Mail oder Telefon) zustande."
      ]
    },
    {
      "titel": "3. Kostenfreier Kurs / E-Mail-Verteiler",
      "absaetze": [
        "Die Anmeldung zum kostenfreien Kurs bzw. E-Mail-Verteiler erfolgt freiwillig im Double-Opt-In-Verfahren. Ein Entgelt fällt nicht an; eine Abmeldung ist jederzeit möglich. Einzelheiten regelt die Datenschutzerklärung."
      ]
    },
    {
      "titel": "4. Urheber- und Nutzungsrechte",
      "absaetze": [
        "Alle Inhalte dieser Website (Texte, Bilder, Grafiken, Logos, Layout) sind urheberrechtlich geschützt. Nutzung, Vervielfältigung oder Verbreitung nur mit unserer vorherigen schriftlichen Zustimmung, soweit gesetzlich nicht anders erlaubt."
      ]
    },
    {
      "titel": "5. Haftung für Inhalte und Links",
      "absaetze": [
        "Wir erstellen die Inhalte mit Sorgfalt, übernehmen jedoch keine Gewähr für Aktualität, Vollständigkeit und Richtigkeit. Für externe Links sind die jeweiligen Betreiber verantwortlich; zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar."
      ]
    },
    {
      "titel": "6. Verfügbarkeit",
      "absaetze": [
        "Wir bemühen uns um einen störungsfreien Betrieb, schulden aber keine ständige Verfügbarkeit der Website."
      ]
    },
    {
      "titel": "7. Änderungen",
      "absaetze": [
        "Wir können diese Bedingungen mit Wirkung für die Zukunft anpassen, wenn sich Rechtslage oder Angebot ändern."
      ]
    },
    {
      "titel": "8. Anwendbares Recht / Gerichtsstand",
      "absaetze": [
        "Es gilt deutsches Recht. Gerichtsstand ist, soweit zulässig vereinbar, Düsseldorf."
      ]
    },
    {
      "titel": "9. Salvatorische Klausel",
      "absaetze": [
        "Sollte eine Bestimmung unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt."
      ]
    }
  ],
  "stand": "Stand: Juli 2026",
  "einleitung": [
    "Allgemeine Nutzungs-/Haftungs-AGB. Über diese Website werden keine kostenpflichtigen Verträge geschlossen. Für eine spätere verbindliche On-Site-Buchung (Event/Seminar) gilt eine gesonderte Vertrags-AGB mit Widerrufsbelehrung."
  ],
  "untertitel": "Nutzungsbedingungen dieser Website"
};
