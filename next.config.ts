import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statischer Export für deutsches Hosting (netcup-Webhosting, Apache).
  // Erzeugt beim Build den Ordner out/ mit reinen HTML/CSS/JS-Dateien — kein Server nötig.
  output: "export",

  // Jede Seite als eigener Ordner mit index.html (/fuehrung/index.html).
  // Apache liefert das ohne Server-Konfiguration aus; interne Links greifen sauber.
  trailingSlash: true,

  // Bild-Optimierung läuft nicht zur Laufzeit (es gibt keinen Next-Server).
  // Originale werden ausgeliefert; echte Optimierung später zur Bauzeit (sharp).
  images: { unoptimized: true },

  eslint: {
    // Ignoriert den strengen Linting-Check beim Build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;