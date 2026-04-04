# Webseiten-Konzept MH3 LearnCon GmbH
## Version 1.2 – EAZEE-Synchronisation (März 2026)

> **Zugehörig zu:** Projekt-Roadmap MH3 LearnCon GmbH, Schritt D
> **Basierend auf:** Positionierung v2.4, Brand Voice Guide v2.2, Customer Journey Map v2, Customer Journey Deltas, Leitfaden Zusammenarbeit v2.1, EAZEE-Grundlagen v1
> **Nächste Schritte:** Schritt F (Webseiten-Bau mit Claude Code)

---

## 1. Zielsetzung der neuen Webseite

### Ausgangslage
Die aktuelle Webseite auf ablefy funktioniert als Bestätigungsinstrument für Pfad A (Empfehlungen). Personen, die Marcus bereits empfohlen bekommen haben, besuchen die Seite, bestätigen ihren Eindruck und rufen an. SEO-Sichtbarkeit, moderne Gestaltung und eigenständige Akquise (Pfad B) sind aktuell nicht gegeben.

### Ziel
Die neue Webseite erfüllt zwei Aufgaben gleichzeitig:
- **Pfad A (Empfehlung):** Weiterhin als Bestätigung funktionieren – schnell, professionell, vertrauensbildend.
- **Pfad B (eigenständige Entdeckung):** Als Akquise-Kanal funktionieren – auffindbar über Google und KI-Suche, überzeugend für Menschen, die Marcus nicht kennen, führend zum Gespräch.

### Erfolgskriterium
Mehr Menschen kommen mit Marcus ins Gespräch. Die Webseite ist der Weg dorthin, nicht das Ziel.

---

## 2. Geklärte Entscheidungen

### 2.1 Fallbeispiele
**Ja, in kontrolliertem Format.**
- Kurzformat: Situationsskizze (3–4 Sätze) mit Transformationssatz
- Je Bereich 2–3 Beispiele, eingebettet in der jeweiligen Bereichsseite
- Keine zentrale „Fallbeispiele"-Seite (Schubladen-Gefahr)
- Abstrakt genug für Diskretion, konkret genug für Relevanz
- Jedes Beispiel transportiert implizit eine Botschaft über die Arbeitsweise

### 2.2 Sie/Du-Ansprache

| Seite | Ansprache | Besonderheit |
|-------|-----------|-------------|
| Startseite | Sie | – |
| Führung | Sie | – |
| Karriere | Sie | Du-Hinweis im Kontaktbereich |
| Vertrieb | Sie | – |
| Management Simulation | Sie | – |
| Über mich | Sie | Du-Übergangs-Erklärung als Anker |
| (kein) Coaching | Sie | – |
| Empfehlungen | Neutral, persönlich | Breites Publikum |
| MH3-EAZEE Community | Du | Gesamter Community-Bereich |
| Community-Unterseiten | Du | – |
| Kurse / 0-Euro-Kurs / Bootcamp | Du | Lernformate |

Du-Hinweis Karriere-Seite (Kontaktbereich): Sinngemäß „Die meisten Klient:innen wechseln im Kennenlerngespräch schnell zum Du – Sie entscheiden, was sich richtig anfühlt."

Du-Übergangs-Erklärung Über-mich-Seite: Sinngemäß „Auf meiner Webseite spreche ich Sie an. Im persönlichen Gespräch wechseln die meisten schnell zum Du. Beides ist willkommen."

### 2.3 Preistransparenz

| Bereich | Preisinformation |
|---------|-----------------|
| B2B (Führung, Vertrieb) | Keine Preise. Prozess transparent. |
| B2C (Karriere) | Keine Preise. Prozess transparent + 0-Euro-Kurs als Hürdensenker + Hinweis steuerliche Absetzbarkeit. |
| Management Simulation | Empfohlene Preise (Lizenzgeber) mit Einordnung und Kontext. |
| Community | Preise auf der nicht-öffentlichen Antragsseite `/community/anfrage`. |

### 2.4 Seitenstruktur
**Separate Seiten, keine Tabs.** Jeder Bereich hat eine eigene URL. Startseite als aktiver Verteiler mit Situations-Sektionen. Innerhalb der Unterseiten Querverlinkung.

### 2.5 0-Euro-Kurs
Prominent auf der Karriere-Seite. Positioniert als eigenständiger erster Schritt, nicht als Freebie oder Lead-Magnet. Verlinkung zu ablefy. Sinngemäß: „Bevor Sie mich anrufen, können Sie sich ein eigenes Bild machen." Kurs-Optimierung als eigenes Projekt nach Schritt F.

### 2.6 Simulations-Event
Auf der Simulationsseite als jährliches offenes Event. Kein Ort, keine Institution, kein Datum. CTA ist das Kennenlerngespräch. Sinngemäß: „Einmal im Jahr stelle ich ein offenes Simulations-Event auf die Beine."

### 2.7 Community unter MH3 LearnCon (nicht eigene Domain)
MH3 ist die Marke. Community lebt unter `/community` mit eigenem Ton (Du). `mh3-eazee.de` als Redirect auf `mh-learncon.com/community`.

### 2.8 Shop-Integration
Produktseiten auf der eigenen Webseite, Checkout bleibt bei ablefy. CTA-Buttons führen auf ablefy-Payment-URLs. Zentrale Übersichtsseite `/angebote` (sekundär). ablefy-Paket auf 39 € runterstufen. Architektur vorbereitet für spätere komplette Ablösung.

### 2.9 Geschützter Member-Bereich
Ausbaustufe, nicht Launch-Anforderung. Unter `/community/members`. Authentifizierung per E-Mail-Verification gegen Circle-Mitgliederliste. Perspektivisch: Workshop-Materialien, exklusive Inhalte, direkt über Claude Code veröffentlicht.

### 2.10 Slogan
**Durchgefallen:** „Damit du mich nicht mehr brauchst."
**Im Rennen:** „Mach es einfach und mach es einfach." / „Einfach. Machen."
**Entscheidung geparkt.** Seite wird so gebaut, dass beide funktionieren. Finale Entscheidung, wenn die Seite visuell steht.

---

## 3. Sitemap

### 3.1 Hauptnavigation (immer sichtbar im Header)

| Seite | URL | Ansprache | Rolle |
|-------|-----|-----------|-------|
| Startseite | `/` | Sie | Aktiver Verteiler für Pfad A |
| Führung | `/fuehrung` | Sie | Markus, Peter, Rico |
| Karriere | `/karriere` | Sie | Sandra, Christian, Philipp, Thomas – wichtigste Pfad-B-Seite |
| Vertrieb | `/vertrieb` | Sie | Jens' Führungskraft, GF – Umleitung von falschen Suchbegriffen |
| Management Simulation | `/simulation` | Sie | Sabine, Stefan, Katrin, Oliver – erklärungsbedürftiges Produkt |
| Über mich | `/ueber-mich` | Sie | Marcus als Mensch – darf ausführlich sein |
| MH3-EAZEE | `/community` | Du | Community-Erklärseite |

### 3.2 Community-Unterseiten

| Seite | URL | Sichtbarkeit |
|-------|-----|-------------|
| Hauptseite | `/community` | Öffentlich, CTA führt auf Calendly |
| Mitgliedschaftsanfrage | `/community/anfrage` | Nicht öffentlich verlinkt, wird per E-Mail geteilt |
| MH3 EAZEE – das Event | `/community/event` | Öffentlich, bei Bedarf aktivierbar |
| Member-Bereich | `/community/members` | Geschützt, Ausbaustufe |

### 3.3 Sekundäre Seiten (nicht in Hauptnavigation)

| Seite | URL | Verlinkt von |
|-------|-----|-------------|
| (kein) Coaching | `/kein-coaching` | Über mich, Bereichsseiten |
| Empfehlungen | `/empfehlungen` | Über mich, Footer |
| Angebote (Shop-Übersicht) | `/angebote` | Footer, Bereichsseiten |

### 3.4 Produktseiten
Jedes Produkt bekommt eine eigene Seite mit Beschreibung und CTA auf ablefy-Payment. Eingebettet in den Bereichsseiten. Konkrete URLs in Schritt F.

### 3.5 Footer
Impressum, Datenschutz, AGB, Shopvote-Siegel, Links zu Empfehlungen und Angebote.

### 3.6 Domain-Handling

| Domain | Ziel |
|--------|------|
| `mh-learncon.com` | Hauptseite |
| `mh3-eazee.de` | Redirect auf `mh-learncon.com/community` |

### 3.7 Externe Plattformen

| Plattform | Funktion | Perspektive |
|-----------|----------|------------|
| ablefy | Shop, Kurse, Bezahlung | Perspektivisch ablösbar |
| Circle | Community-Plattform | Bleibt |
| Calendly | Terminbuchung | Verlinkt (Option B, nicht eingebettet) |

---

## 4. Content-Strategie pro Seite

### 4.1 Startseite `/`

**Rolle:** Aktiver Verteiler für Pfad-A-Besucher.

**Abschnitte:**
1. **Hero-Bereich** – Wer ist Marcus, worum geht es. Slogan (wenn entschieden). Professionelles Foto (Profilfoto mit Orange-Rahmen). Telefonnummer sichtbar.
2. **Vier Situations-Sektionen (Verteiler)** – Führung, Karriere, Vertrieb, Simulation. Jede Sektion spricht eine Situation an und verlinkt auf die Unterseite. Reihenfolge: Führung (Kernbereich), Karriere (höchste Pfad-B-Relevanz), Vertrieb, Simulation. In den Sektionen klingen Unterthemen an (Teammanagement, Kommunikation etc.).
3. **Kurzprofil** – 3–4 Sätze: Drei-Perspektiven-Erfahrung, bewusst allein, Düsseldorf als Basis. Methodenbreite angedeutet. Link zu Über mich.
4. **Shopvote-Widget** – Gesamtbewertung, prominent.
5. **Kontakt-Bereich** – Telefon (bevorzugt), E-Mail, Calendly.

**Bewusst NICHT:** Methoden-Auflistung, Themen-Auflistung (leben auf den Bereichsseiten).

### 4.2 Führung `/fuehrung`

**Rolle:** Ansprechseite für Markus, Peter, Rico. Pfad A dominant.

**Abschnitte:**
1. **Hero-Bereich** – Situativer Einstieg.
2. **Situationsbeschreibungen** – Drei Situationen (Markus-Typ, Peter-Typ, Rico-Typ).
3. **Wie ich arbeite** – Sparringspartner, nicht Coach (→ `/kein-coaching`). Methodenvielfalt im Kontext. Diskretion und Vertraulichkeit. Universelle Arbeitsmethodik (Bedarfsanalyse → Segmentierung → Prozessverständnis → passendes Werkzeug).
4. **Themen** – Teammanagement, Kommunikation, Delegation, Change Management, Konflikte, Rollenklarheit, Führung auf Distanz. Im Fließtext, SEO-relevant.
5. **Der Weg zur Zusammenarbeit** – Dreistufiger Prozess. Zwei-Szenarien-Muster. Neutralität im Erstgespräch (positive Formulierung).
6. **Kurzfallbeispiele** – 2–3 Führungs-Beispiele mit Transformationssatz.
7. **Bootcamp und Community** – Teaser mit Link für Rico-Typen.
8. **Shopvote-Widget**
9. **Kontakt-Bereich**

### 4.3 Karriere `/karriere`

**Rolle:** Wichtigste Pfad-B-Seite. Sandra, Christian, Philipp, Thomas.

**Abschnitte:**
1. **Hero-Bereich** – Abgrenzung: Strategie, nicht Lebenslauf.
2. **Vier Situationsbeschreibungen** – Sandra-Typ, Christian-Typ, Philipp-Typ, Thomas-Typ.
3. **Abgrenzung zu Standard-Karriereberatung** – Drei-Perspektiven-Erfahrung karrierespezifisch. Online-Beratung als Qualitätsmerkmal. Universelle Arbeitsmethodik.
4. **Themen** – Berufliche Neuorientierung, Bewerbungsstrategie, Positionierung, Gehaltsverhandlung, Karriereplanung, Selbstmarketing.
5. **Formate** – 0-Euro-Kurs (erster Schritt), „Finde dein Was" (Christian-Typ), Einzelberatung. Reihenfolge: niedrigste Hürde zuerst.
6. **Der Weg zur Zusammenarbeit** – Prozess + Zwei-Szenarien-Muster. Stundenbasiert, keine Pakete, jederzeit pausierbar. Steuerliche Absetzbarkeit. Du-Hinweis.
7. **Kurzfallbeispiele** – 2–3 Karriere-Beispiele.
8. **Shopvote-Widget**
9. **Kontakt-Bereich** – Etwas wärmer formuliert.

### 4.4 Vertrieb `/vertrieb`

**Rolle:** Umleitung von falschen Suchbegriffen zur richtigen Frage.

**Abschnitte:**
1. **Hero-Bereich** – Einstieg über das Symptom.
2. **Die Umleitung** – Drei Schritte: Anerkennung → Perspektivwechsel → Brücke. Leitformulierung: „Nicht mehr Termine, sondern mehr sinnvolle Aufträge."
3. **Branchenkompetenz** – Technische Unternehmen, Maschinenbau, komplexe B2B-Vertriebszyklen. Drei-Perspektiven-Erfahrung vertriebsspezifisch.
4. **Themen** – Lösungsvertrieb, Vertriebsstruktur, Vertriebsführung, Key Account Management, Verhandlungsführung, KI/Digital im Vertrieb. Begriffe „Vertriebsschulung"/„Vertriebstraining" im Kontext der Umleitung (SEO).
5. **Wie ich arbeite** – Methodenvielfalt. Universelle Arbeitsmethodik. „Manchmal ist die beste Vertriebs-Maßnahme ein Führungsworkshop."
6. **Der Weg zur Zusammenarbeit** – Prozess + Zwei-Szenarien-Muster. Auftraggeber-Dynamik adressiert.
7. **Kurzfallbeispiele** – 2–3 Vertriebs-Beispiele.
8. **Shopvote-Widget**
9. **Kontakt-Bereich**

### 4.5 Management Simulation `/simulation`

**Rolle:** Ein Produkt erklären, nach dem niemand sucht.

**Abschnitte:**
1. **Hero-Bereich** – Neugier statt Erklärung. Skalierung (6–48 Personen), Flexibilität (halber Tag bis zwei Tage). „Professioneller Simulant" als Neugier-Auslöser.
2. **Anwendungsfälle** – Teambuilding, Assessment-Alternative, Führungskräfteentwicklung, Onboarding, Kick-off. Akkordeon-Format. Jeder Anwendungsfall: Situation + Nutzen.
3. **Was macht diese Simulation anders?** – Werkzeug nicht Programm, Transfer nicht nur Erlebnis, Chef-Service. Abgrenzung zum Hersteller/Standardplanspiel.
4. **So funktioniert es** – Kurze Erklärung. Szenario (Freizeitpark), Ablauf (Spielrunden + Reflexionsphasen), Rahmenbedingungen (6–48 Personen, halber Tag bis zwei Tage, deutsch/englisch).
5. **Kennzahlen und Preise** – Weltweit über 5.800 Teilnehmende, über 600 in Marcus' eigenen Durchführungen, internationale Einsätze. Preistabelle mit Einordnung. „Darin enthalten"-Liste.
6. **Jährliches offenes Event** – Ohne Ort, ohne Datum.
7. **Shopvote-Widget**
8. **Kontakt-Bereich** – Kein „Demo buchen".

**Design-Hinweis:** Akkordeon-Elemente für Anwendungsfälle, Erklärung und Preistabelle.

### 4.6 Über mich `/ueber-mich`

**Rolle:** Marcus als Mensch. Darf und soll ausführlich sein. Storytelling als Gestaltungsprinzip.

**Abschnitte:**
1. **Hero-Bereich** – „Menschen machen Geschäfte mit Menschen." Foto, Kurzvorstellung.
2. **Drei-Perspektiven-Erfahrung** – Führungskraft → Auftraggeber → Berater. Als kurze Erzählung.
3. **Bewusst allein – Chef-Service** – Einzelunternehmer mit Netzwerk.
4. **(kein) Coaching** – Kurze Zusammenfassung + Link auf `/kein-coaching`.
5. **Werdegang** – Storytelling (Marcus liefert Tonspur-Version). Über 20 Jahre Selbstständigkeit als Differenzierungsmerkmal. Konzern + Selbstständigkeit als Bogen. Akkordeon für ausführliche Version möglich.
6. **Engagement** – VDI, ehrenamtliche Arbeit (Inhalte werden aktualisiert).
7. **Du-Übergangs-Erklärung**
8. **Persönliches** – 3–4 Details (wird aktualisiert).
9. **Düsseldorf – Heimatbasis** – Standort, Studios, Einsatzgebiet.
10. **Buchempfehlungen** – Verweis auf `/empfehlungen` mit Spendenhinweis.
11. **Kontakt-Bereich**

**Gestaltungsprinzip:** Wenig Akkordeons – die Seite soll zum Lesen einladen. Reihenfolge: geschäftlich Relevantes zuerst, Persönliches danach.

**Offener Punkt:** Marcus liefert vor Schritt F aktualisierte Inhalte und Tonspur-Version des Werdegangs.

### 4.7 MH3-EAZEE Community `/community`

**Rolle:** Erklärseite für die Community. CTA führt auf Calendly (Gespräch), nicht auf Antragsformular.

**Abschnitte:**
1. **Hero-Bereich** – Was ist MH3-EAZEE?
2. **Für wen?** – Beschreibung der Menschen in der Community.
3. **EAZEE-Werte** – Ehrlich, Authentisch, Zielgerichtet, Engagiert, Entwickelnd.
4. **Was erwartet dich?** – Formate: Stammtische, Workshops, das Event, Challenges.
5. **Wie kommst du rein?** – Gated Prozess. CTA: Calendly + Telefonnummer.
6. **Die Geschichte** – Wie MH3-EAZEE entstanden ist.
7. **Member-Verweis** – Link auf `/community/members`.

**Community-Anfrage `/community/anfrage`:** Nicht öffentlich verlinkt. Enthält: Preise, Prozess, Formular. Wird von Marcus per E-Mail geteilt nach dem Erstgespräch.

**MH3 EAZEE – das Event `/community/event`:** Bei Bedarf aktivierbar. Beschreibung, Termin, Anmeldung. Das Event existiert unabhängig von der Community-Mitgliedschaft – Teilnahme erfordert aktuell keine Membership. Perspektivisch wird die Verknüpfung enger.

**Honey-Pot-Strategie:** Das jährliche Präsenz-Event dient als Einstiegskanal für die Community. Event-Teilnehmende nutzen den Event-Space in Circle für Abstimmung und Austausch, lernen so die Plattform kennen und werden idealerweise Community-Mitglieder. Die Event-Seite darf die Community erwähnen und verlinken, darf die Mitgliedschaft jedoch nicht als Voraussetzung darstellen.

**Community Advisory Board:** Marcus hat 4–5 ausgewählte Personen als Sparringspartner und Anlaufstelle für Mitglieder eingesetzt. Das Board wird auf der Webseite nicht namentlich dargestellt (Diskretion).

**Vollständige Community-Spezifikation:** Siehe `EAZEE_Grundlagen_v1.md` – Struktur, Formate, Spielregeln, Pricing, Tonalität, TQM-Prüfregeln.

### 4.8 (kein) Coaching `/kein-coaching`

**Rolle:** Markensignal und Wiedererkennungselement. Sekundäre Seite.

**Abschnitte:**
1. **Überschrift und Kern** – Warum Beratung, nicht Coaching.
2. **Abgrenzung** – Praxisbeispiel. Souverän, nicht abwertend.
3. **Kontakt-Bereich**

### 4.9 Empfehlungen `/empfehlungen`

**Rolle:** Persönlichkeitsseite, Service für Studierende, Spendengenerierung.

**Abschnitte:**
1. **Einleitung** – Kurz, persönlich.
2. **Spendenhinweis** – Prominent: Provisionen → Kinderhospiz Regenbogenland Düsseldorf.
3. **Bücher nach Kategorien** – Mit persönlichem Satz pro Buch. Zweisprachig (deutsch/englisch).
4. **Wachsende Liste** – Hinweis, dass die Liste lebt.

---

## 5. Conversion-Pfade und CTAs

### 5.1 Grundprinzip
Die Webseite verkauft den nächsten Schritt – ein Gespräch. Nicht ein Produkt, nicht einen Kurs.

### 5.2 Drei gleichwertige Kontaktwege – mit Priorisierung

| Kanal | Rolle | Position |
|-------|-------|---------|
| Telefon (0171 88 202 77) | Bevorzugter Kanal (Marcus' Präferenz) | Immer an erster Stelle |
| E-Mail (kontakt@mh-learncon.com) | Alternative | An zweiter Stelle |
| Calendly | Für Pfad-B-Besucher (Sandra abends) | An dritter Stelle, verlinkt (Option B) |

**Im Header:** Telefonnummer als erstes, klickbar. E-Mail. Calendly-Link. Auf jeder Seite sichtbar.

**Im Kontakt-Bereich (Seitenende):** Ausführlicher, mit Kontext. Telefon als einfachster Weg gerahmt. Sinngemäß: „Am einfachsten: Rufen Sie mich an. Wenn ich drangehe, habe ich Zeit. Wenn nicht, rufe ich zurück."

**Bewusst NICHT:** Kontaktformular. Keine CTA-Inflation (höchstens ein bis zwei kontextuelle Verweise zwischen Header und Seitenende).

### 5.3 Conversion-Pfade pro Persona-Cluster

**Pfad A (Empfehlung):** Startseite → Situations-Sektion → Bereichsseite → Kontakt. Kurz (2–3 Klicks).

**Pfad B (eigenständige Suche):** Google/KI → Bereichsseite direkt → lesen → Shopvote prüfen → Über-mich-Seite → zurück → Kontakt. Länger, mehr Überzeugung nötig.

**Pfad B mit Zwischenschritt (Karriere):** Bereichsseite → 0-Euro-Kurs auf ablefy → mit besserem Verständnis zurück → Kontakt.

**Community-Pfad:** Empfehlung/Webseite → `/community` → Calendly-Gespräch.

**Simulations-Pfad:** Startseite → Simulation → Anwendungsfälle, Preise → Kontakt.

### 5.4 CTA-Hierarchie pro Seite

**Primär:** Kennenlerngespräch (Telefon/E-Mail/Calendly).
**Sekundär:** Vertiefung (Karriere: 0-Euro-Kurs; Führung: Bootcamp/Community; Simulation: offenes Event).
**Tertiär:** Querverlinkung (Über mich, andere Bereiche, (kein) Coaching).

### 5.5 Shopvote als Conversion-Element
Position: nach Fallbeispielen, vor Kontakt-Bereich. Gesamtbewertung + Anzahl. Kein Kommentar. Auf jeder Bereichsseite. Nicht auf Über-mich, Community, (kein) Coaching, Empfehlungen.

### 5.6 Calendly-Integration
Option B: Verlinkt, nicht eingebettet. DSGVO-konform. Entscheidung bestätigt.

---

## 6. Querschnitts-Prinzipien

### 6.1 Merkmal-Nutzen-Übersetzung
Jedes Leistungsmerkmal wird mit einem Kundennutzen verbunden: „Ich biete X – das bedeutet für Sie Y." Oder umgekehrt: „Ihr Vorteil ist Y, weil Z." Kein Merkmal ohne Nutzen.

### 6.2 Universelle Arbeitsmethodik
In allen Bereichen identisch: Bedarfsanalyse → Segmentierung in Teilsysteme → Prozess verstehen und optimieren → passendes Werkzeug/Methode → Prüfung, wo KI unterstützen kann. Wird auf jeder Bereichsseite im jeweiligen Kontext formuliert.

### 6.3 Negierungen vermeiden
Keine unbewussten Negierungen. Statt „kein Verkäufer" → sagen, was Marcus IST. Ausnahme: „(kein) Coaching" als bewusstes Marken-Element.

### 6.4 Zwei-Szenarien-Muster
Auf jeder Bereichsseite: (1) „Wenn jemand anderes besser zu Ihnen passt, sage ich Ihnen das." (2) „Wenn 20 Minuten reichen, um Ihre Frage zu klären, tun wir genau das – und Sie gehen mit einer Lösung nach Hause."

### 6.5 Akkordeon-Elemente
Wo die Seite sonst zu lang würde. Google liest Akkordeon-Inhalte. Besonders relevant für: Simulationsseite (Anwendungsfälle, Preise), Führungsseite (Themen), Über-mich-Seite (ausführlicher Werdegang – sparsam). Auf der Über-mich-Seite soll zum Lesen eingeladen werden.

### 6.6 Storytelling auf der Über-mich-Seite
Marcus liefert Tonspur-Version des Werdegangs als Rohstoff. Über 20 Jahre Selbstständigkeit als Differenzierungsmerkmal.

---

## 7. Design-Prinzipien

### 7.1 Klarheit schlägt Kreativität
Keine visuellen Spielereien. Klare Typografie, großzügiger Weißraum, ruhige Farbpalette. Zielgruppe (Bereichsleiter, Geschäftsführer, Ingenieurinnen) erwartet Professionalität. Die Seite muss in 5 Sekunden drei Fragen beantworten: Wer ist das? Was bietet er an? Bin ich hier richtig?

### 7.2 Echte Fotos, keine generischen Stockbilder
Stockfotos von Coaching-Seiten werden ersetzt durch: Marcus-Fotos (Profilfoto, Standbilder aus Studio-Aufnahmen), Designelemente (Zahnräder, Würfel, Netzwerk-Grafik) und bei Bedarf stilisierte Illustrationen (KI-generiert, erkennbar als Gestaltung). KI-generierte Personenbilder von Marcus werden kritisch geprüft.

### 7.3 Mobile First
Über 50% der Pfad-B-Besucher kommen mobil. Alle Texte ohne Zoomen lesbar. Telefonnummer klickbar. Navigation auf kleinen Bildschirmen intuitiv. Buttons daumenfreundlich.

### 7.4 Schnelle Ladezeiten
Zielwert: Unter 3 Sekunden. Optimierte Bilder (WebP), minimales JavaScript, serverseitiges Rendering, CDN-Auslieferung.

### 7.5 Visuelle Hierarchie
Besucher scannen, bevor sie lesen. Überschriften allein müssen die Geschichte erzählen. Fettungen sparsam, an den richtigen Stellen.

### 7.6 Vertrauenssignale dort, wo Entscheidungen fallen
Shopvote nach Fallbeispielen, vor Kontakt-Bereich. Kennzahlen neben Preisen. Vertrauen im Moment des Zögerns.

### 7.7 Barrierefreiheit (WCAG 2.1 Level AA)
Farbkontraste (4.5:1 für Fließtext), alternative Texte, Tastaturnavigation, logische Überschriften-Hierarchie. Barrierefreiheit passt zu Marcus' Wertesystem.

### 7.8 Farbpalette und Typografie

**Farben (bestätigt):**
- Akzentfarbe: Orange (#FF9B01) – Buttons, CTAs, Zahnrad-Element, Rahmen
- Textfarbe: Schwarz (#222222) – Fließtext
- Graustufen: #F2F2F2, #D9D9D9, #9D9D9D, #828282 – Abstufungen
- Hintergrund: Weiß
- Hinweis: Orange auf Weiß reicht nicht für Fließtext-Kontrast (ca. 2.8:1). Orange nur für große Überschriften, Buttons und dekorative Elemente.
- Community-Bereich: Leicht anderer Farbakzent möglich, innerhalb der Markenfamilie.

**Typografie:**
- Montserrat (Favorit, DSGVO-Konformität und Office365-Kompatibilität in Schritt F prüfen)
- H1: 48px, Fett 800
- H2: 32px, Halbfett 600
- Section Header: 28px, Medium 500
- Paragraph: 16px, Regular 400
- Große Schriftgrößen, großzügiger Zeilenabstand (Zielgruppe 35–55)

**Visuelles Marken-Element:**
- Zahnräder in Orange – dezent, wiedererkennbar (Maschinenbau-Hintergrund)
- Baustein-Würfel – in neuer Farbwelt anpassen (Baukasten-Prinzip)
- Netzwerk-Grafik – Marcus in Orange, Netzwerk drumherum
- Comic/Sympathieträger – aktualisieren (Vollbart), als Persönlichkeitselement an 1–2 Stellen

### 7.9 Dezente Bewegung
Sanftes Einblenden, Hover-Effekte, flüssige Akkordeons. Kein Parallax-Scrolling, keine einfliegenden Textblöcke, kein Auto-Play. Regel: Wenn Animation dem Verständnis dient → willkommen. Wenn sie dem Eindruck dient → überflüssig.

### 7.10 KI-Lesbarkeit
Klare Aussagen in Klartext. Saubere HTML-Struktur. Strukturierte Daten (Schema.org). Keine wichtigen Informationen nur in Bildern oder JavaScript.

---

## 8. Bildstrategie

### 8.1 Marcus-Fotos
- Profilfoto mit Orange-Rahmen (vorhanden, stark)
- Standbilder aus Studio-Aufnahmen (verschiedene Kontexte: Flipchart, Schreibtisch, Gespräch)
- Freigestellte Varianten (ohne Hintergrund) vorhanden und bewährt
- Bei Bedarf neue Videosession für frisches Material

### 8.2 Comic/Sympathieträger
- Vorhandenes Comic aktualisieren (Vollbart) über KI (Nano Banana o.ä.)
- Sympathieträger (5 Finger) vs. Comic Strips (4 Finger) – Unterscheidung beibehalten
- Einsatz: Über-mich-Seite, 404-Fehler, Community, überraschende Stellen
- Comic-Wiederbelebung als eigenes Projekt nach Webseiten-Launch

### 8.3 Designelemente
- Zahnräder: Orange, dezent, als wiederkehrendes Motiv
- Würfel: In neuer Farbwelt (Orange/Grau/Schwarz/Weiß) neu gestalten
- Netzwerk-Grafik: Für Community-Seite
- Bei Bedarf stilisierte Illustrationen (KI-generiert, erkennbar als Gestaltung)

### 8.4 Stockfotos
Werden auf der neuen Seite ersetzt durch Typografie, Designelemente und stilisierte Illustrationen (Option 1 + 2 kombiniert).

### 8.5 Streaming-Hintergrund
Eigenes Projekt nach Webseiten-Launch. Passend zur Farbwelt, ggf. mit Zahnrad-Motiv.

---

## 9. Technische Anforderungen

### 9.1 Tech-Stack
Next.js + Vercel. Gut unterstützt von Claude Code. Schnelle Ladezeiten, gute SEO, geschützte Bereiche möglich.

### 9.2 DSGVO (höchste Priorität)
- Google Fonts: Lokal einbinden
- Analytics: Datenschutzfreundliche Alternative (Plausible/Fathom) oder kein Tracking
- Calendly: Verlinkt, nicht eingebettet
- Shopvote: Widget DSGVO-konform prüfen
- Cookie-Banner: Ziel ist eine Seite, die so sauber ist, dass keins nötig ist
- SSL: Automatisch über Vercel
- Impressum und Datenschutzerklärung: Aktualisieren für neue Seite (juristische Prüfung empfohlen)
- Kontaktformulare: Nur wenn nötig (Community-Anfrage), DSGVO-konform

### 9.3 Performance
Unter 3 Sekunden Ladezeit. Optimierte Bilder (WebP), minimales JavaScript, serverseitiges Rendering, CDN. Messbar über PageSpeed Insights und Core Web Vitals.

### 9.4 Barrierefreiheit (WCAG 2.1 Level AA)
Farbkontraste, alternative Texte, Tastaturnavigation, logische Überschriften-Hierarchie.

### 9.5 SEO-Grundlagen (Vorbereitung für Schritt D.5)
Eigene Title-Tags und Meta-Descriptions pro Seite. Sprechende URLs. Strukturierte Daten (Schema.org: LocalBusiness, Person, Dienstleistungen, Bewertungen). Sitemap.xml, robots.txt. Open Graph Tags.

### 9.6 KI-Lesbarkeit
Strukturierte Daten. Eindeutige Aussagen in Klartext. Konsistente Benennung (immer „Marcus Holzheimer" und „MH3 LearnCon GmbH").

### 9.7 Content-Management (Selbstverwaltung)
Marcus muss Texte und Bilder selbst ändern können. Optionen für Schritt F: Headless CMS (Sanity/Contentful/Decap), Markdown + GitHub, oder Hybrid. Entscheidung in Schritt F.

### 9.8 Aktivierbare Seiten
Event-Seite und ggf. weitere Seiten müssen aktivierbar/deaktivierbar sein, ohne Entwickler.

### 9.9 Betriebskosten (Schätzung)

| Posten | Kosten/Monat |
|--------|-------------|
| Vercel Hosting | 0–20 USD |
| Domain | Bestehend (~1 EUR/Monat) |
| Headless CMS (optional) | 0–20 USD |
| Plausible Analytics (optional) | ~9 EUR |
| Calendly | Bestehend |
| Shopvote | Bestehend |
| **Gesamt** | **ca. 20–50 EUR** |

Versus aktuell: 99 EUR/Monat ablefy (reduzierbar auf 39 EUR).

### 9.10 Backup und Versionierung
Quellcode auf GitHub, automatisch versioniert. Jede Änderung rückgängig machbar.

---

## 10. Offene Punkte

### 10.1 Von Marcus zu liefern (vor Schritt F)
- Aktualisierte Über-mich-Inhalte (Werdegang, Engagement, Persönliches)
- Tonspur-Version des Werdegangs (Storytelling-Rohstoff)
- Simulations-Angebotsdokument (für Preiseinordnung)
- Aktuelle Simulations-Preistabelle (Halbtag/Ganztag/Mehrtägig)
- Entscheidung zum Bildmaterial (Videoaufnahmen vs. KI-generiert)
- Community-Preise für die Antragsseite

### 10.2 ~~Offene Aktualisierungen für Schritt E~~ ✅ Erledigt (25. März 2026)

**Positionierungsdokument v2.3:** ✅
- ~~Universelle Arbeitsmethodik als Querschnitts-Prinzip ergänzen~~ → erledigt
- ~~KI-/Digital-Kompetenz im Vertrieb als Differenzierungspunkt ergänzen~~ → erledigt
- ~~Merkmal-Nutzen-Übersetzung als Kommunikationsprinzip ergänzen~~ → erledigt

**Brand Voice Guide v2.1:** ✅
- ~~Merkmal-Nutzen-Übersetzungsregel als Textregel ergänzen~~ → erledigt
- ~~Negierungs-Praxisbeispiel ergänzen~~ → erledigt

**Übergabeliste:** ✅
- ~~Punkt 5 (Fallbeispiele): Erledigt~~ → markiert
- ~~Punkt 13 (0-Euro-Kurs): Ansatz definiert~~ → markiert
- ~~Punkt 14 (Demo-Dilemma): Gelöst~~ → markiert
- ~~Slogan-Update ergänzen~~ → markiert

**Leitfaden Zusammenarbeit v2.1:** ✅
- ~~Punkt 8 (Duplikat „Gründlichkeit vor Geschwindigkeit")~~ → geprüft, kein Duplikat mehr vorhanden

### 10.3 Zukünftige Projekte (nach Schritt F)
- 0-Euro-Kurs inhaltlich prüfen und an neue Positionierung anpassen
- Schrittweise ablefy-Ablösung evaluieren (Stripe als Alternative)
- Member-Bereich mit Inhalten befüllen
- Comics über KI neu erstellen (Sympathieträger + Strips)
- Streaming-Hintergrund neu gestalten
- LinkedIn-Profil aktualisieren
- Stunden-Tracking-Lösung evaluieren

---

*Erstellt am 24. März 2026, aktualisiert am 26. März 2026 (v1.2: EAZEE-Synchronisation – Wert „Zielgerichtet", Honey-Pot-Strategie, Community Advisory Board, Event-Unabhängigkeit, Verweis auf EAZEE-Grundlagen v1)*
*Zugehörig zu: Projekt-Roadmap MH3 LearnCon GmbH, Schritt D (Webseiten-Konzept)*
*Nächster Schritt: Schritt F (Webseiten-Bau mit Claude Code)*