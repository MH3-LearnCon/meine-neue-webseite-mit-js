interface ShopvoteBadgeProps {
  /**
   * Standard true — etwas größer auf Desktop (Führung/Karriere/Vertrieb/Simulation).
   * Für den Styleguide false (kompakter).
   */
  enlargeOnDesktop?: boolean;
}

/**
 * ShopVote-Farbsiegel (statische Einzelgrafik, bn=53 / 100×100).
 * Zeigt bewusst KEINE Bewertungszahl und KEINE Kommentare — die Kennzahl steht im
 * Textclaim daneben, alle Einzelbewertungen liegen verlinkt auf dem ShopVote-Profil.
 * Farbe läuft automatisch nach den Bewertungen der letzten 12 Monate (aktuell blau,
 * Gold ab 50). Rein statische Grafik vom ShopVote-Server: keine Cookies, nur
 * IP-Übertragung (DSE-Klausel, Art. 6 Abs. 1 lit. f) — kein Cookie-Banner nötig.
 */
export default function ShopvoteBadge({
  enlargeOnDesktop = true,
}: ShopvoteBadgeProps) {
  return (
    <div className="flex w-full justify-center">
      <a
        href="https://www.shopvote.de/bewertung_mh-learncon-com_21607.html"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ShopVote-Bewertungsprofil von mh-learncon.com ansehen (öffnet in neuem Tab)"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://widgets.shopvote.de/view.php?shopid=21607&bn=53&lang=de"
          alt="ShopVote-Siegel: Kundenbewertungen für mh-learncon.com"
          width={100}
          height={100}
          className={enlargeOnDesktop ? "h-auto w-[140px] lg:w-[180px]" : "h-auto w-[100px]"}
        />
      </a>
    </div>
  );
}
