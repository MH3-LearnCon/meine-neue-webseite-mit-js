# Vorträge `/vortraege` – Fertige Texte
## MH3 LearnCon GmbH – Version 1.1 (Juni 2026)

> **Zugehörig zu:** Projekt-Roadmap MH3 LearnCon GmbH, Webseiten-Bau
> **Ansprache:** Sie (gesamte Seite)
> **Status:** v3 — Marken-Elemente (Zahnrad/Note/StatementCard), Überschriften, Modal als Portal

---

## SEO-Elemente

| Element | Wert |
|---|---|
| **Title-Tag** | Vorträge & Impulse: Führung, Karriere & mehr \| MH3 LearnCon |
| **Meta-Description** | Vorträge & Impulse zu Führung, Karriere, Kommunikation und Netzwerken — interaktiv, mit Zauberkunststücken, die eine Botschaft tragen. Auf Deutsch und Englisch. |
| **H1** | Vorträge & Impulse, die hängen bleiben. |

---

## Seitenstruktur

Reihenfolge (bg alternierend weiß / #F5F5F5, oranger Divider in Abschnitten 2–4):

1. Hero (weiß)
2. So funktionieren meine Vorträge (grau)
3. Katalog mit Filter + Modal-Karten (weiß)
4. Der technische Rahmen (grau)
5. ContactSection (Shared)

---

## Abschnitt 1: Hero (Layout D)

**[SEO-H1]**
Vorträge & Impulse, die hängen bleiben.

**[Subline – orange, text-pointe font-semibold]**
Für Führung, Karriere, Kommunikation, Soft Skills und mehr — auf Deutsch und Englisch.

**[Absatz]**
Mit viel Interaktion, Anschauungsmaterial und Zauberkunststücken, die jeweils eine Botschaft tragen — damit Inhalte hängen bleiben und in die Umsetzung kommen. Viele Themen auch als Workshop möglich.

**[Bild – rechte Spalte]**
`/hero-vortraege.png` — Alt: „Marcus Holzheimer, Keynote Speaker" (Pencil-Stil, 1448×1086, weißer Hintergrund; Quelle: `MH_Bilderstellung/Set Card/Hero-Bild-Vortraege.png`, Kopie in `FINAL-Heroes/`)

---

## Abschnitt 2: So funktionieren meine Vorträge

**[H2]**
Deshalb bleiben meine Vorträge in Erinnerung

**[Absatz]**
Alle Formate sind interaktiv — mit lebendiger Sprache, Storytelling, Anschauungsmaterial und Zauberkunststücken, die eine Botschaft tragen. Gelegentlich kommt ein Arbeitsblatt für eigene Notizen dazu. Geübt und vertieft wird im Workshop; im Vortrag wird erlebt, mitgedacht und mitgemacht.

**[Drei Format-Karten – Denver-Blau-Leiste LINKS (border-l-4, bewusst nicht klickbar — Abgrenzung von den klickbaren Katalog-Karten mit border-t-4), Schatten; Titel ohne Zahnrad (Dichte reduziert, 26.06.)]**

| Format | Text |
|---|---|
| **Impuls** | Ein kurzer, aktivierender Anstoß (oft 20–30 Minuten), der ein Thema öffnet und Lust auf mehr macht — häufig Türöffner für individuelle Konzepte. |
| **Vortrag** | Ein Thema in der Tiefe, 2–3 Stunden nach Wunsch, mit Anschauungsmaterial. |
| **Keynote** | Ein pointierter Leit-Vortrag mit Bühnenwert für den großen Rahmen. |

**[Note-Box (Drei-Zahnräder-Aside, min-h für korrekten Zahnrad-Anschnitt) — unter den Format-Karten]**
**Für welche Anlässe?** Tagungen & Kongresse · Kick-offs · Mitarbeiter- & Kundenevents · Führungskräfte-Runden · Abend- & Rahmenprogramm.

---

## Abschnitt 3: Katalog (VortraegeListe)

**[Lead-in]**
Jeder Vortrag lässt sich auf Ihren Anlass zuschneiden — vom Feinschliff bis zur deutlichen Anpassung. Was genau passt, klären wir am besten vorab im Gespräch.

Filter-Chips: dynamisch aus vorhandenen Themen + „Alle“ (Default). Karten im OfferCard-Stil (border-t-4 denver-blue), Klick öffnet Modal (React-Portal an document.body, max-w-2xl, zentriert). Keine Preise.

**[Modal – Buchbar-als + Anpassungs-Zeile]**
Buchbar als {Formate} — Inhalte, Länge und Schwerpunkte passe ich an Ihren Anlass an. Was genau passt, klären wir am besten im Gespräch.

*(Format-Chips und die interne Funnel-Zeile sind aus der Besucheransicht entfernt. `formate` wird jetzt als „Buchbar als …" im Satz ausgegeben; `funnel` bleibt nur intern als Produkttreppen-Notiz.)*

**[Modal – CTA]**
Telefonisch anfragen → (tel:+491718820277)

### Eintrag 1 — Führung

| Feld | Inhalt |
|---|---|
| **id** | fuehrung-werkzeuge |
| **Thema** | Führung |
| **Titel** | Werkzeuge moderner Führung |
| **Teaser** | Welche Werkzeuge im Führungsalltag wirklich tragen — von Erwartungen klären bis verbindlich kommunizieren. |
| **Beschreibung** | Was macht gute Führung aus — und welche Werkzeuge helfen Einsteigerinnen wie Profis, authentisch und wirksam zu führen? Die gute Nachricht: Der sichere Umgang mit diesen Werkzeugen lässt sich erlernen. Ein Impuls zu den wichtigsten davon. |
| **Inhalte** | Erwartungen klären und festlegen · Wirkungsvolle Ziele setzen · Systematisch priorisieren · Delegieren mit Sinn · Abgeben nach oben · Effiziente Kommunikation etablieren · Verbindlichkeit schaffen |
| **Formate** | Impuls, Vortrag, Workshop |
| **Funnel** | Impuls → Bootcamp „Geh in Führung“ |

### Eintrag 2 — Kommunikation

| Feld | Inhalt |
|---|---|
| **id** | kommunikation-elevator-pitch |
| **Thema** | Kommunikation |
| **Titel** | Elevator Pitch |
| **Teaser** | Sich selbst, eine Idee oder ein Ergebnis in Sekunden auf den Punkt bringen — und mit den ersten Sätzen Neugier wecken. |
| **Beschreibung** | Ob Sie sich selbst vorstellen, eine Geschäftsidee oder ein Arbeitsergebnis präsentieren — der Elevator Pitch bringt es in Sekunden auf den Punkt und bleibt dabei entspannt. Wie Sie vom ersten Moment an wirken und mit wenigen Sätzen Neugier wecken, sodass Ihr Gegenüber mehr wissen möchte. Inklusive erstem Eindruck und einem eigenen Pitch zum Mitnehmen. |
| **Inhalte** | Der erste Eindruck — und wie Sie ihn positiv beeinflussen · Wann ein Pitch zählt: sich, eine Idee oder ein Ergebnis vorstellen · Aufbau, Konzepte und Regeln · Vorarbeiten und Hilfsmittel · Ablauf und Phasen · Den eigenen, individuellen Pitch ausarbeiten |
| **Formate** | Impuls, Vortrag, Workshop |

### Eintrag 3 — Netzwerken

| Feld | Inhalt |
|---|---|
| **id** | netzwerken-kontakte |
| **Thema** | Netzwerken |
| **Titel** | Kontakte schaden nur … |
| **Teaser** | „Kontakte schaden nur dem, der keine hat.“ Wie Netzwerken mit überschaubarem Aufwand gelingt. |
| **Beschreibung** | Netzwerken entscheidet über die eigene Karriere mit — in der Wirtschaft wie in der Wissenschaft. Viele halten es für Klinkenputzen; tatsächlich gelingt es mit überschaubarem Aufwand und auf sicheren Wegen, ohne sich zu verbiegen. Wie aus losen Kontakten ein tragfähiges Netzwerk wird, online wie offline. |
| **Inhalte** | Warum „wissen, wo es steht“ heute nicht mehr reicht · Kontakte mit geringem Aufwand auf- und ausbauen · Geben und Nehmen, horizontales und vertikales Netzwerken · Authentisches Selbstmarketing · Empfehlungsmanagement · Reputation in LinkedIn, Xing & Co. |
| **Formate** | Impuls, Vortrag, Workshop |
| **Funnel** | Impuls → Beratung |

### Eintrag 4 — Karriere

| Feld | Inhalt |
|---|---|
| **id** | karriere-verhandlung |
| **Thema** | Karriere |
| **Titel** | Gehalt ist verhandelbar — Konditionen auch. |
| **Teaser** | Den eigenen Wert im Beruf vorbereitet vertreten — beim Einstieg wie in der laufenden Konditionsverhandlung. |
| **Beschreibung** | Die eigene Führungskraft nach mehr Gehalt zu fragen — und dann auch zu verhandeln — fällt vielen schwer. Dabei entscheidet die Vorbereitung mehr als Schlagfertigkeit, und die lässt sich erarbeiten. Dieser Vortrag nimmt die Scheu vor dem Gespräch über Gehalt und Konditionen und macht aus einem unangenehmen Moment eine Verhandlung, in die Sie vorbereitet gehen — beim Einstieg wie in der laufenden Zusammenarbeit. Damit Sie nicht unter Wert bleiben. |
| **Inhalte** | Was Sie erreichen wollen — und was Sie mindestens brauchen · Den eigenen Marktwert und Spielraum realistisch einschätzen · Gehalt und Konditionen mit guten Argumenten belegen · Taktiken der Gegenseite erkennen und souverän kontern · Auf Einwände ruhig und überzeugend reagieren · Heikle Momente: u. a. Einstellungsgespräch, Beförderung, Jahresgespräch |
| **Formate** | Impuls, Vortrag |
| **Quelle** | „Seminarbeschreibung – Verhandlungen erfolgreich führen – VDI Wuppertal" (2019) → als Karriere-**Vortrag** zugeschnitten (Gehalt/Konditionen). Allgemeiner Verhandlungs-**Workshop** geparkt → `_workshop-kandidaten-parkplatz.md` |

### Eintrag 5 — Vertrieb

| Feld | Inhalt |
|---|---|
| **id** | vertrieb-loesungsvertrieb |
| **Thema** | Vertrieb |
| **Titel** | So geht Lösungsvertrieb heute. |
| **Teaser** | Warum Vertrieb ein Handwerk ist — Prozess statt Druck, mehr Aufträge statt mehr Termine. |
| **Beschreibung** | Verkaufen gilt vielen als Talent, das man hat oder nicht. Lösungsvertrieb ist das Gegenteil: ein Handwerk mit klarem Prozess, das sich lernen lässt. Ein Impuls dazu, wie Vertrieb heute funktioniert — mit System statt mit Druck. Das Ziel verschiebt sich spürbar: nicht mehr Termine, sondern mehr Aufträge. |
| **Inhalte** | Warum Vertrieb ein Handwerk ist und keine Begabung · Vom Produkt-Pitch zum echten Bedarf der Kundinnen und Kunden · In Nutzen denken statt in Merkmalen · Prozess statt Druck: der rote Faden eines Verkaufsgesprächs · Warum mehr Termine nicht mehr Aufträge bedeuten |
| **Formate** | Impuls, Vortrag |
| **Quelle** | ⚠ `Vertriebsgrundlagen`-Ordner leer — als **These-/Impuls-Vortrag** aus Lösungsvertrieb-Positionierung entworfen (Titel von Marcus bestätigt). Vertriebsgrundlagen-**Workshop** (Tiefe) geparkt → `_workshop-kandidaten-parkplatz.md` |

### Eintrag 6 — Kommunikation

| Feld | Inhalt |
|---|---|
| **id** | kommunikation-erster-eindruck |
| **Thema** | Kommunikation |
| **Titel** | Es gibt keine zweite Chance für den ersten Eindruck |
| **Teaser** | Wir wirken immer — die Frage ist, ob so, wie wir wollen. Wie Sie Ihren ersten Eindruck bewusst steuern. |
| **Beschreibung** | Den ersten Eindruck machen wir nur einmal — und er entsteht in Sekunden, ob wir wollen oder nicht. Die gute Nachricht: Wirkung ist kein Zufall, sondern lässt sich bewusst steuern. Ein lebendiger Vortrag über genau diese Wirkung — mit Anschauungsmaterial und Aha-Momenten, die hängen bleiben. |
| **Inhalte** | Was den ersten Eindruck in Sekunden bestimmt · Auftreten und Aussehen — worauf es ankommt · Welchen Anteil Stimme und Atmung haben · Die ersten Worte: was Sie sagen, wenn es zählt · Wie Sie Ihre Wirkung bewusst steuern |
| **Formate** | Impuls, Vortrag |
| **Quelle** | „Seminarbeschreibung – Es gibt keine zweite Chance für den ersten Eindruck" (Vortrag, ½–3 h). Pitch-Ausarbeitung bewusst ausgelassen — gehört zu #12 Elevator Pitch. |

### Eintrag 7 — Kommunikation

| Feld | Inhalt |
|---|---|
| **id** | kommunikation-business-knigge |
| **Thema** | Kommunikation |
| **Titel** | Business Knigge |
| **Teaser** | Der zweite Eindruck muss halten, was der erste verspricht — sicher auftreten von der Begrüßung bis zum Geschäftsessen. |
| **Beschreibung** | Den ersten Eindruck haben Sie im Griff — und danach? Wer begrüßt wen, wer stellt vor, wer darf das „Du" anbieten? Geschäftsessen, Empfänge und gesellschaftliche Termine bergen viele kleine Fallen, die an einem guten Eindruck kratzen. Dieser Vortrag macht aus Unsicherheit Souveränität — unterhaltsam, mit vielen Beispielen aus dem beruflichen Alltag. |
| **Inhalte** | Grüßen, Vorstellen, Anrede — wer, wen, wie · Visitenkarten stilvoll tauschen, Gäste richtig empfangen · Sicheres Verhalten bei Tisch und im Restaurant · Die Aufgaben von Gast und Gastgeber im Beruf · Small Talk und der richtige Moment fürs Geschäftliche · Gelassen bleiben in unangenehmen Situationen |
| **Formate** | Impuls, Vortrag, Workshop |
| **Quelle** | „Seminarbeschreibung – Business Knigge". ⚠ Quelle ist die **Workshop**-Fassung (Ganztag, Rollenspiele); als Vortrag/Keynote = Edutainment. Aufgenommen als Vortrag **+ Workshop** — Format-Fit-Hinweis (s. unten). Titel-Option: Hook „Der zweite Eindruck muss halten…" als Titel statt Teaser. |

### Eintrag 8 — Kommunikation

| Feld | Inhalt |
|---|---|
| **id** | kommunikation-grundlagen |
| **Thema** | Kommunikation |
| **Titel** | Kommunikationsgrundlagen |
| **Teaser** | „Nur wer redet, dem kann geholfen werden." Die Modelle, die gute Kommunikation ausmachen — und wie Sie sie anwenden. |
| **Beschreibung** | Ohne Kommunikation geht im Berufsalltag nichts — und doch verlassen wir uns meist aufs Bauchgefühl. Dieser Vortrag macht die Mechanismen dahinter verständlich und alltagstauglich: die bekanntesten Kommunikationsmodelle, anschaulich erklärt und sofort anwendbar — damit Sie auch in schwierigen Gesprächen sicherer werden. |
| **Inhalte** | Warum Kommunikation die Kern-Kompetenz im Beruf ist · Das Sender-Empfänger-Modell und die Regeln nach Watzlawick · Die vier Seiten einer Botschaft (Schulz von Thun) · Körpersprache entschlüsseln und Fragetechniken nutzen · Wie professionelle Rückmeldung funktioniert |
| **Formate** | Impuls, Vortrag, Workshop |
| **Quelle** | „Seminarbeschreibung – Grundlagen der Kommunikation" (Vortrag + Workshop laut Quelle). NLP und Transaktionsanalyse weggelassen (NLP: Glaubwürdigkeit bei analytischer Zielgruppe; TA: behandelt Marcus nicht — Hinweis 26.06.); „Rückmeldung" statt „Feedback" (Brand Voice). |

### Eintrag 9 — Führung

| Feld | Inhalt |
|---|---|
| **id** | fuehrung-team |
| **Thema** | Führung |
| **Titel** | Ein Team entsteht nicht von allein. |
| **Teaser** | Teamentwicklung und Teambuilding: warum Teams scheitern, welche Phasen sie durchlaufen und wie Sie sie schnell leistungsfähig machen — als Führungskraft wie im Team. |
| **Beschreibung** | Teamarbeit ist aus dem Berufsalltag nicht wegzudenken — doch aus mehreren Menschen wird nicht automatisch ein gutes Team. Warum manche Teams scheitern und andere schnell leistungsfähig werden, hat handfeste Gründe, die sich beeinflussen lassen. Ein Vortrag für alle, die Teams führen oder in ihnen Ergebnisse erzielen wollen — als Führungskraft wie als Mitglied. |
| **Inhalte** | Warum Teams scheitern — und was das verhindert · Die Phasen der Teamentwicklung erkennen und beeinflussen · Welche Rollen ein Team braucht und wie Sie mit ihnen umgehen · Projektteams sinnvoll zusammenstellen · Teams schnell leistungsfähig machen |
| **Formate** | Impuls, Vortrag, Workshop |
| **Quelle** | „Beschreibung – Grundlagen für erfolgreiche Team-Arbeit VDE" (Vortragsfassung). Workshop auf Marcus-Hinweis (26.06.) ergänzt — Quelle war nicht aktuell. Titel „Team-Management" geschärft → „Ein Team entsteht nicht von allein."; Keyword „Teamentwicklung/Teambuilding" in den Teaser geholt. |

### Eintrag 10 — Karriere (Reihe)

| Feld | Inhalt |
|---|---|
| **id** | karriere-bewerbungsstrategie |
| **Thema** | Karriere |
| **Titel** | Durch die perfekte Bewerbungsstrategie zum Erfolg |
| **Teaser** | Der Bewerbungsprozess von A bis Z — von der Orientierung über die Unterlagen bis zum Vorstellungsgespräch. In drei Bausteinen, einzeln oder als Reihe. |
| **Beschreibung** | Sich beruflich neu zu orientieren — gewollt oder vom Arbeitgeber angestoßen — ist selten geplant und oft mit Unsicherheit verbunden. Diese Reihe macht aus der Bewerbung einen Prozess, den man beherrschen kann, statt sich durchzuwursteln: vorbereitet, mit System, am Ende sicher im Gespräch. Die drei Bausteine bauen aufeinander auf und sind einzeln oder als Ganzes buchbar. |
| **Inhalte** | Baustein 1 — Bewerbungsprozess von A–Z: Finde dein Was, Recherche, Erstkontakt, Netzwerk, Zeitplanung · Baustein 2 — Die perfekte Bewerbungsunterlage: Anschreiben, Lebenslauf, Zeugnisse, Online-Bewerbung · Baustein 3 — Optimal ins Vorstellungsgespräch: Vorbereitung, Auftreten, Ablauf, Fragen, Interview-Übung · Jeder Baustein auch einzeln buchbar |
| **Formate** | Vortrag, Workshop |
| **Quelle** | „Veranstaltungsreihe Bewerbung von A bis Z" + „Seminarbeschreibung – Durch die perfekte Bewerbungsstrategie zum Erfolg" + Bewerbungsworkshops VDI. **Reihe-Muster** (schlanke Variante): 3 Bausteine als Inhalte, „einzeln buchbar"-Zeile, kein Datenmodell-Umbau. Abendveranstaltungen = Vortrag (unbegrenzt), Vorstellungsgespräch = Workshop (max. 12, Rollenspiele). |

### Eintrag 11 — Karriere

| Feld | Inhalt |
|---|---|
| **id** | karriere-check |
| **Thema** | Karriere |
| **Titel** | Karrierecheck für Fach- und Führungskräfte |
| **Teaser** | Sie planen Projekte, Teams und Familie weit voraus — nur die eigene Karriere nicht? Die 13 wichtigsten Check-Punkte für Ihre Karriereplanung. |
| **Beschreibung** | Viele Fach- und Führungskräfte planen alles voraus — Projekte, Teams, die Familie. Nur die eigene Karriere überlassen sie dem Zufall, bis eine Trennung oder die übergangene Beförderung sie kalt erwischt. Dieser Vortrag lädt dazu ein, die eigene Laufbahn einmal so ernst zu nehmen wie ein Projekt — mit einem klaren Raster aus dem Beratungsalltag und dem einen oder anderen Zauberkunststück, das die Botschaft trägt. |
| **Inhalte** | Warum kluge Köpfe ihre eigene Karriere oft nicht planen · Die 13 Check-Punkte einer professionellen Karriereplanung · Frühwarnzeichen erkennen, bevor es eng wird · Direkte Handlungs- und Umsetzungsempfehlungen · Reale Beispiele aus dem Beratungsalltag |
| **Formate** | Impuls, Vortrag |
| **Quelle** | „Teasertext Karrierecheck für Ingenieure" (Vortrag). Auf Fach-/Führungskräfte verbreitert (Übergabe). Doppelnatur: zusätzlich Produkttreppe-Objekt (Quiz/Download) — läuft separat, hier nur der Vortrag. |

### Eintrag 12 — Karriere

| Feld | Inhalt |
|---|---|
| **id** | karriere-ingenieur-sein |
| **Thema** | Karriere |
| **Titel** | Es ist toll, Ingenieur zu sein – trotz allem |
| **Teaser** | Kaum eine Berufsgruppe trägt so viele Klischees — doch sind es immer Vorurteile? Ein humorvoller Blick in die Denkmuster von Ingenieurinnen und Ingenieuren. |
| **Beschreibung** | Schrullige Tüftler, die nur Formeln im Kopf haben? Kaum eine Berufsgruppe trägt so viele Klischees wie Ingenieurinnen und Ingenieure — doch sind es immer Vorurteile? Marcus Holzheimer, selbst Maschinenbauer, hält ihnen mit viel Humor und Zauberkunststücken den Spiegel vor und zeigt, warum es trotzdem (oder gerade deshalb) toll ist, dazuzugehören. Ein kurzweiliger Vortrag, der unterhält und nebenbei den Blick auf die eigenen Stärken schärft — auch als Abend- oder Rahmenprogramm. |
| **Inhalte** | Klischees und Vorurteile — was steckt wirklich dahinter? · Ingenieurtypische Denk- und Handlungsmuster mit Augenzwinkern · Beispiele aus Kommunikation, Bewerbung, Partnerschaft und Technik · Eigenheiten erkennen — und für sich nutzen · Kurzweilige Unterhaltung mit Zauberkunststücken und Aha-Momenten |
| **Formate** | Impuls, Vortrag, Keynote |
| **Quelle** | „Vortrag – Es ist toll, Ingenieur zu sein" (VDI-PDF; Impuls-/Eventvortrag, 120 Min., humorvoll). Thema „Karriere/Identität" → Chip Karriere. Titel maskulin als Marken-Phrase belassen, Body gendergerecht (s. Flag). |

### Eintrag 13 — Kommunikation

| Feld | Inhalt |
|---|---|
| **id** | kommunikation-flirten |
| **Thema** | Kommunikation |
| **Titel** | Flirten für Ingenieurinnen und Ingenieure |
| **Teaser** | Wissensriesen, Handlungszwerge? Wie Sie den inneren Schweinehund besiegen und den ersten Kontakt herstellen — mit Augenzwinkern. |
| **Beschreibung** | Theoretisch haben wir uns alle schon Gedanken gemacht, wie man jemanden anspricht — und es dann doch gelassen. Schon Goethe spottete über „Wissensriesen und Handlungszwerge". Dieser humorvolle Vortrag räumt damit auf und macht Mut zum ersten Schritt — augenzwinkernd, mit Beispielen, die weit über das Private hinaus nützen. |
| **Inhalte** | Was beim Flirten in unserem Kopf passiert — Hilfe oder Hürde? · Die besten Vorbereitungen: Auftreten und Äußerlichkeiten · Körpersprache, Signale und wie man sie liest · Den ersten Schritt wagen: ansprechen statt zaudern · Souverän mit einem Korb umgehen |
| **Formate** | Impuls, Vortrag, Keynote |
| **Quelle** | „Flirten für Ingenieurinnen und Ingenieure" (docx; Humor/Marke, Eventvortrag). „Tipps & Tricks" aus Quelle weggelassen (Brand Voice). Thema-Chip Kommunikation (alt. Netzwerken) — s. Flag. |

### Eintrag 14 — Kommunikation

| Feld | Inhalt |
|---|---|
| **id** | kommunikation-small-talk |
| **Thema** | Kommunikation |
| **Titel** | Small Talk ist sinnvoll – und erlernbar. |
| **Teaser** | Dass Small Talk dazugehört, wissen Sie längst — die Frage ist das Wie. Eine Technik und ein kleines Repertoire, mit denen Sie in jeder Situation ins Gespräch kommen. |
| **Beschreibung** | Dass Small Talk wichtig ist, wissen die meisten längst — schwieriger ist der erste Schritt. Genau der ist erlernbar: mit etwas Vorbereitung, einem kleinen Repertoire und einer Technik, die in nahezu jeder Situation trägt. So wird aus einer lästigen Pflicht ein Werkzeug, das Türen öffnet — für Kontakte, Projekte und Empfehlungen. |
| **Inhalte** | Warum der erste Schritt schwerfällt — und wie er leichter wird · Sich vorbereiten: ein kleines Repertoire, das immer trägt · Eine Technik, die in nahezu jeder Situation funktioniert · Der erste Eindruck und die ersten Sätze · Themen, die tragen — und solche, die man meidet · Wann aus Small Talk Business Talk werden darf |
| **Formate** | Impuls, Vortrag, Workshop |
| **Quelle** | Marcus-Rahmen 26.06. (Titel „Small Talk ist sinnvoll – und erlernbar."; Zielgruppe kennt den Wert, Hürde = erster Schritt + Repertoire + lehrbare Technik; Elemente aus Erster Eindruck + Elevator Pitch eingearbeitet). Knigge-Small-Talk-Fragment als Beleg. Thema-Chip Kommunikation (alt. Netzwerken). |

### Eintrag 15 — Kommunikation

| Feld | Inhalt |
|---|---|
| **id** | kommunikation-praesentieren |
| **Thema** | Kommunikation |
| **Titel** | Souveränes Präsentieren (bei vollkommener Ahnungslosigkeit) |
| **Teaser** | Was eine gute Präsentation wirklich trägt — Struktur, Nutzen, Medien und der Umgang mit schwierigem Publikum. Vor Ort wie online. |
| **Beschreibung** | Eine gute Präsentation ist kein Zufall — und sie entscheidet oft mehr als der Inhalt selbst. Dieser Vortrag macht aus dem vermeintlich trockenen Thema ein Erlebnis: lebendig, mit vielen Praxisbeispielen und einer Bandbreite, in der für jede und jeden etwas Neues dabei ist — von den Grundlagen bis zum Auftritt vor der Kamera. Damit Ihre nächste Präsentation hängen bleibt, statt nur abgespult zu werden. |
| **Inhalte** | Was eine gute Präsentation ausmacht · Eine Struktur, die zu Ihrem Publikum passt · Nutzen und Lösung in den Mittelpunkt stellen · Schwierige Zuhörende souverän in den Griff bekommen · Medien bewusst einsetzen: u. a. Sprache, Storytelling, Flipchart, Anschauungsmaterial · Technik im Griff: Beamer, Presenter und Co. · Online präsentieren: u. a. Kameraposition, Hintergrund, Auftreten |
| **Formate** | Impuls, Vortrag, Workshop |
| **Quelle** | Marcus-Input 26.06. (Edutainment-Vortrag: gute Präsentation, zielgruppengerechte Struktur, Nutzen/Lösung, schwierige Zuhörende, Medienvielfalt statt nur PowerPoint, Technik-Hinweise, Online-Komponente seit Covid). seminarthemen.pdf als möglicher Zusatzbeleg. |

### Eintrag 16 — Innovation

| Feld | Inhalt |
|---|---|
| **id** | innovation-zukunftsgestalter |
| **Thema** | Innovation |
| **Titel** | Vom Problemlöser zum Zukunftsgestalter. |
| **Teaser** | „Keine Idee ist neu" — Innovation ist Handwerk, kein Geistesblitz, und planbar. Schwerpunkt frei wählbar: vom Innovations-Impuls über Ideenfindung bis zu Werkzeugen wie Design Thinking. |
| **Beschreibung** | „Uns fällt nichts Neues mehr ein" — diesen Satz hört man oft, und er stimmt selten. Innovation entsteht nicht aus dem Nichts, sondern aus dem klugen Kombinieren von Vorhandenem; das lässt sich lernen und strukturiert anwenden. Dieser Vortrag macht das mit überraschenden Beispielen greifbar und stärkt den Mut, ins Handeln zu kommen. Den Schwerpunkt bestimmen Sie — mehr Impuls, mehr Ideenfindung oder mehr konkrete Werkzeuge, als kompakter Vortrag oder als Workshop zum Mitarbeiten. |
| **Inhalte** | Drei hartnäckige Innovations-Mythen — und was wirklich zählt · Innovation als Handwerk: kombinieren statt auf den Geistesblitz warten · Ideenfindung strukturiert: u. a. Brainstorming, Brainwriting, Design Thinking · Branchentransfer: Bewährtes in einen neuen Kontext übertragen · Werkzeuge für wiederholbare Innovation: u. a. Business Model Canvas · Schwerpunkt nach Wunsch — vom kurzen Impuls bis zur Ideen-Werkstatt |
| **Formate** | Impuls, Vortrag, Workshop |
| **Quelle** | „Vortrag Kolloquium Innovation.pptx" (Innovation-Schwerpunkt) + „Ideation Workshop Wuppertal.pptx" (Ideenfindung/Kreativitätstechniken) — beide in eine **flexible Karte** zusammengeführt (Schwerpunkt wählbar), Workshop-Format ergänzt (Marcus 26.06.). Titel „Vom Problemlöser zum Zukunftsgestalter" gewählt (26.06.); „Keine Idee ist neu" als Teaser-Hook. PPTX gesichert in `MH Beschreibungen Vorträge Workshops/_Innovation-Quellen/`. |

### Eintrag 17 — KI (Reihe)

| Feld | Inhalt |
|---|---|
| **id** | ki-reihe |
| **Thema** | KI |
| **Titel** | KI verstehen, nutzen, vorausgehen. |
| **Teaser** | Vom ersten Verständnis über den souveränen Einsatz im Arbeitsalltag bis zu eigenen KI-Assistenten und Agenten. In drei Bausteinen, einzeln oder als Reihe — auf dem jeweils aktuellen Stand. |
| **Beschreibung** | Künstliche Intelligenz verändert den Arbeitsalltag schneller, als die meisten mitkommen — zwischen Hype und Halbwissen fällt Orientierung schwer. Diese Reihe nimmt die Scheu und macht KI praktisch nutzbar: erst verstehen, was wirklich geht, dann im Alltag sicher anwenden, schließlich selbst Assistenten und Abläufe aufsetzen. Praxisnah, verständlich erklärt und auf dem jeweils aktuellen Stand. Die drei Bausteine bauen aufeinander auf und sind einzeln oder als Ganzes buchbar. |
| **Inhalte** | Baustein 1 — Grundlagen: die KI-Landschaft verstehen (u. a. Modelle, Chatbots, Datenschutz) · Baustein 2 — Im Alltag nutzen: klares Prompting und das Arbeiten in einem KI-Workspace (z. B. Cowork) · Baustein 3 — Aufsetzen: eigene KI-Assistenten, Agenten und erste Automatisierung · Inhalte folgen der schnellen Entwicklung — Stand wird je Termin aktualisiert · Jeder Baustein auch einzeln buchbar |
| **Formate** | Impuls, Vortrag, Workshop |
| **Quelle** | „Vortrag KI Grundlagen / Prompting / Advanced.pptx" (Marcus, 3-teilige Vortragsreihe). **Reihe-Muster** wie #4. Modernisierung 26.06.: Baustein 2 um KI-Workspace/Cowork erweitert (nicht nur Prompting), Baustein 3 Richtung Agenten/Code/Automatisierung. PPTX gesichert in `MH Beschreibungen Vorträge Workshops/_KI-Quellen/`. |

> **Reklassifiziert (Vortrag → Workshop):** „Die Messe ist gewonnen, bevor sie beginnt." (Messetraining) trägt Übungs-/Rollenspiel-Substanz und ist aus dem Vorträge-Katalog entfernt. Text + Quelle geparkt in `_workshop-kandidaten-parkplatz.md` (Staging), bis die Workshop-Heimat steht (offene Schleife OS-18).

---

## Abschnitt 4: Den Rahmen schaffen wir gemeinsam

**[H2]**
Den Rahmen schaffen wir gemeinsam.

**[Layout]** Einspaltig: Absatz 1, dann Quote (Denver-Blau-Linie), dann Absatz 2.

**[Absatz 1]**
Üblicherweise stellt die einladende Organisation den Rahmen: Beamer mit Leinwand und ein Flipchart mit Stiften. Raum und Catering. Das ist der Standard.

**[Quote – Denver-Blau-Linie]**
„Gemeinsam schaffen wir ein Erlebnis, an das sich Ihre Zuhörenden noch lange erinnern.“

**[Absatz 2]**
Haben Sie andere Rand- und Rahmenbedingungen oder besondere Wünsche, stimmen wir uns vorab kurz ab.

---

## Abschnitt 5: Kontakt

Shared Component `<ContactSection />` — Standard-Headline und -Subtext.
