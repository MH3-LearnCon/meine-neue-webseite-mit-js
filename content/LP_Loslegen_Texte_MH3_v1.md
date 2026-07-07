---
quelle: src/app/lp/standard-bewerbungsprozess/loslegen/page.tsx
status: aktuell
angelegt: 2026-07-06
hinweis: "Native Opt-in-/Loslegen-Seite (Weg 2 LIVE seit 07.07.: natives Formular → Scaleway-Serverless-Endpunkt → AC-Formular-19-proc, Redirect auf native /fast-geschafft). Banner-frei, kein AC-Embed-Skript mehr. Meta-CAPI-Naht server-seitig offen (scharf bei Ads). content/-Sync gem. CLAUDE.md (OS-57)."
---

# Loslegen – Der Standard-Bewerbungsprozess

**Title:** Loslegen – Der Standard-Bewerbungsprozess
**Meta-Description:** Trag dich ein und starte den kostenfreien Kurs „Der Standard-Bewerbungsprozess“ – in deinem Tempo.
**Robots:** noindex, follow (Funnel-Seite, header-los)

## H1
Los geht’s mit dem Standard-Bewerbungsprozess.

## Einleitung
Trag dich mit Name und E-Mail ein – der kostenfreie Kurs startet sofort, in deinem Tempo.

## Formular
Natives Formular (Vorname, Nachname, E-Mail; Button „Für 0,- € loslegen“), Design-System-konform.
Weg 2 (banner-frei, LIVE seit 07.07.): Das Formular postet server-seitig an einen Scaleway-Serverless-Endpunkt (Projekt „mh3-funnel“, Region AMS), der die bewährte AC-Formular-19-Verarbeitung (proc.php) auslöst: Liste „Newsletter Karriere“ abonnieren (Double-Opt-in) + Tag/Enrollment „TN Freebie der Standard-Bewerbungsprozess“ wie gehabt. Danach Redirect auf die native /fast-geschafft. Kein externes AC-Embed-Skript mehr → kein Cookie-Banner. Meta-Conversions-API-Event server-seitig vorgesehen (scharf, sobald Ads laufen). Endpoint-Funktion verifiziert 07.07. (Test-Kontakt 340, User-Agent „node“ = server-seitige Submission).

## Transparenz / Einwilligung
Mit deiner Anmeldung kommst du in meinen E-Mail-Verteiler. Du hörst von mir nur, wenn ich etwas habe, das dich wirklich weiterbringt – und kannst dich jederzeit mit einem Klick abmelden. Mehr dazu in der Datenschutzerklärung.
