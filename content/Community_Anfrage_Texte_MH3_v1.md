# MH3-EAZEE Community – Anfrage-Seite `/community/anfrage` – Texte

> **Route:** `/community/anfrage` (noindex/nofollow, versteckt — URL wird gezielt an Interessenten gegeben)
> **Ansprache:** Du
> **Rolle der Seite:** Warmer Empfang + Vorteile + Prozess-Transparenz + natives Anfrage-Formular (Weg 2, banner-frei) → Scaleway → ActiveCampaign → `/community/anfrage/danke`
> **Layout:** vier Sektionen, alle `max-w-6xl` linksbündig, alternierend weiß/#F5F5F5, zentrierter oranger Section-Divider, Reveal-Scroll-Animation, ProcessSteps `animated`.
> **Quelle/Status:** gespiegelt aus `src/app/community/anfrage/page.tsx` + `AnfrageForm.tsx` (Stand 2026-07-23, aktuell). Redaktionsschicht, wird NICHT zur Build-Zeit gelesen.
> **Merker:** Vollständiges Weg-A-Formular (Mitgliedschaft, Kundentyp inkl. Firma/USt-ID, Adresse, Telefon, Zahlungsart, 3 Consents, Honeypot). DSE-Consent „zur Kenntnis genommen" ist dreifach synchron — Front, AC-Feld 44 (Option 26) und Scaleway-Funktion `communityanfrage` (`field[44]`) tragen denselben Wortlaut (Stand 23.07.2026, end-to-end belegt via Kontakt 353).

---

**[H1]**
Deine Anfrage für die MH3-EAZEE® Community

**[Vorlauf, Absatz 1 — Einordnung, ergänzt 10.08.2026]**
Du hast diesen Link von mir persönlich bekommen – also haben wir vermutlich schon miteinander gesprochen und der erste Schritt ist erledigt. Hier geht es weiter.

**[Vorlauf, Absatz 2]**
Schön, dass du dabei sein möchtest. Die MH3-EAZEE Community ist ein handverlesener, geschützter Kreis – kein offenes Netzwerk. Ich prüfe jede Anfrage persönlich und entscheide über die Aufnahme. Was uns zusammenhält, sind gemeinsame Werte und klare Richtlinien für ein gutes Miteinander.

**[Abschnitt: Deine Vorteile in der Community]** (Themen-Karten, orange Links-Leiste + Lead-Wort Denver-Blau, 2-spaltig)
- Handverlesener Kreis — Ich prüfe jede Anfrage persönlich und entscheide über die Aufnahme – so entsteht ein Kreis, der zu unseren Werten passt.
- Echter Austausch — Online-Stammtische, Vorträge, persönliche Treffen: immer auf Augenhöhe und absolut vertraulich („Vegas, baby!").
- Gemeinsame Challenges — Monatliche Aufgaben, die Spaß machen und dich weiterbringen.
- Strukturiertes Wissen — Online-Kurse, Tool-Sammlungen, Best Practices: einmal erstellt, profitieren alle.
- Sparring & Support — Ein Ort für vertrauliche Rückmeldung und professionellen Austausch, ohne schlechtes Gewissen.
- Alles an einem Ort — Schluss mit WhatsApp-Chaos und verstreuten E-Mails. Eine Plattform für alles.

**[EAZEE-Werte als Abschluss-Satz unter der Vorteile-Liste]** (kein eigenes Element/Kachel; fließender Absatz, Anfangsbuchstaben Denver-Blau)
Und über allem stehen die EAZEE-Werte: **E**hrlich, **A**uthentisch, **Z**ielorientiert, **E**ngagiert, **E**ntwickelnd – keine Floskeln, sondern gelebte Praxis.

**[Abschnitt: So läuft deine Aufnahme]** (Prozessschritte mit Verbindungslinie, animiert)
1. Anfrage absenden — Du füllst dieses Formular aus und sendest es ab.
2. Ich prüfe persönlich — Ich schaue mir deine Anfrage persönlich an – und sage auch offen ab, wenn es nicht passt.
3. Dein persönliches Angebot — Passt es, erstelle ich dein Angebot und schicke es dir per E-Mail (über ablefy, unsere Buchungsplattform).
4. Du bestätigst — Du prüfst deine Daten, bestätigst das Angebot und schließt die Buchung ab.
5. Willkommen — Dein Zugang zur Community wird freigeschaltet.

**[Warum-Block]** (Denver-Blau-Linie, sachlicher Aussagesatz)
Dieser Weg ist bewusst mehr als ein Klick – so bleibt die Aufnahme handverlesen: Ich prüfe jede Anfrage persönlich und entscheide, wer dazukommt. Und weil eine Community von allen lebt, geben gemeinsame Werte und klare Richtlinien den Rahmen für ein gutes Miteinander.

**[Abschnitt: Deine Daten für die Anfrage]**
Trage bitte die Daten ein, die du für deine Community-Anfrage verwenden möchtest. Sie sind – nach Freigabe – die Grundlage für dein persönliches Angebot.

**[Formularfelder]** (natives Weg-A-Formular, volle Section-Breite; Reihenfolge wie unten, Pflichtfelder mit *)

Deine Mitgliedschaft (keine Auswahl mehr — ein Modell, Stand 10.08.2026; Info-Karte mit linker Denver-Blau-Leiste, darüber ein verstecktes Feld `mitgliedschaft="monat"`):
- **15 € im Monat.** Die ersten drei Monate sind fest, danach läuft deine Mitgliedschaft auf unbestimmte Zeit weiter und du kannst jederzeit mit einer Frist von einem Monat kündigen.
- 14 Tage zum Reinschauen: Dein Zugang ist sofort frei, abgebucht wird erst nach Ablauf der 14 Tage. Widerrufst du in dieser Zeit, zahlst du nichts.
- Für viele ist der Beitrag steuerlich ansetzbar – als Werbungskosten, wenn du angestellt bist, oder als Betriebsausgabe, wenn du selbstständig bist.

> **Abhängigkeit (nicht entfernen):** Der Wert `monat` wird von der Scaleway-Funktion `communityanfrage` auf die ActiveCampaign-Option „Mitgliedschaft (15 €/Monat)" (Feld 61, Option 54) abgebildet. Wird der Wert im Front geändert, muss die Funktion **vorher** angepasst werden — sonst fällt `field[61]` still weg. Die alten Schlüssel `jahr`/`quartal` stehen in der Funktion noch, damit zwischengespeicherte Formularseiten weiter funktionieren.

Ich melde mich an als * (Auswahl):
- Privatperson
- Unternehmen — blendet zusätzlich ein: Firma * (Firmenname) · USt-ID (optional, z. B. DE123456789)

Persönliche Daten:
- Vorname *
- Nachname *
- E-Mail *

Adresse:
- Straße *
- Hausnummer *
- PLZ *
- Stadt *
- Land * (Vorbelegung „Deutschland")

Kontakt:
- Telefon *

Bevorzugte Zahlungsart * (Auswahl):
- Kreditkarte
- SEPA-Lastschrift
- Apple Pay
- Google Pay
- Hinweis darunter: „Beim Bezahlen kannst du die Zahlungsart bei Bedarf noch ändern."

Technisch (nicht sichtbar):
- Honeypot-Feld „website" (Bot-Schutz, für Menschen ausgeblendet)

**[Rechts-Box – Überschrift]**
Widerrufsbelehrung, Nutzungsbedingungen, Datenschutzerklärung und Community-Richtlinien:

**[Rechts-Box – Text]**
Bitte schau dir die Informationen sorgfältig an – sie stellen (neben der rechtlichen Komponente) ein angenehmes Miteinander sicher:

- MH3-EAZEE Community Nutzungsbedingungen →
- MH3-EAZEE Community Richtlinien →
- MH3-EAZEE Community Widerrufsbelehrung →
- MH3-EAZEE Community Datenschutzerklärung →

**[Consent-Häkchen]**
- [ ] Ich habe die **MH3-EAZEE Community Nutzungsbedingungen** gelesen und akzeptiere sie. *
- [ ] Ich habe die **MH3-EAZEE Community Richtlinien** gelesen und akzeptiere sie. *
- [ ] Ich habe die **MH3-EAZEE Community Datenschutzerklärung** zur Kenntnis genommen. *

**[Abschluss-Absatz]**
Mit Klick auf „Absenden" geht deine Anfrage an mich. Ich prüfe sie persönlich und melde mich zeitnah. Nach Freigabe erhältst du dein persönliches Angebot per E-Mail (Absender: ablefy, unsere Buchungsplattform) – dort prüfst und bestätigst du deine Buchung selbst.

Solltest du vorab Fragen haben, ruf mich gern an unter 0171 88 202 77.

**[Button]**
Jetzt MH3-EAZEE-Community-Zugang anfragen
