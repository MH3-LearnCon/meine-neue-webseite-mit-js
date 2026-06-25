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
Bühne / Vortrag *(HeroImagePlaceholder, 4:3)*

---

## Abschnitt 2: So funktionieren meine Vorträge

**[H2]**
Deshalb bleiben meine Vorträge in Erinnerung

**[Absatz]**
Alle Formate sind interaktiv — mit lebendiger Sprache, Storytelling, Anschauungsmaterial und Zauberkunststücken, die eine Botschaft tragen. Gelegentlich kommt ein Arbeitsblatt für eigene Notizen dazu. Geübt und vertieft wird im Workshop; im Vortrag wird erlebt, mitgedacht und mitgemacht.

**[Drei Format-Karten – Denver-Blau-Leiste, Schatten, oranger SingleGear-Akzent neben dem Titel]**

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

**[Modal – Anpassungs-Zeile]**
Inhalte und Schwerpunkte passe ich an Ihren Anlass an — was genau passt, klären wir im Gespräch.

**[Modal – CTA]**
Telefonisch anfragen → (tel:+491718820277)

### Eintrag 1 — Führung

| Feld | Inhalt |
|---|---|
| **id** | fuehrung-werkzeuge |
| **Thema** | Führung |
| **Titel** | Werkzeuge moderner Führung |
| **Teaser** | Welche Werkzeuge im Führungsalltag wirklich tragen — von Erwartungen klären bis verbindlich kommunizieren. |
| **Beschreibung** | Was macht gute Führung aus — und welche Werkzeuge helfen Einsteigerinnen wie Profis, eine authentische Führungspersönlichkeit zu sein? Ein Impuls zu den wichtigsten Werkzeugen moderner Führung. |
| **Inhalte** | Erwartungen klären und festlegen · Wirkungsvolle Ziele setzen · Systematisch priorisieren · Delegieren mit Sinn · Abgeben nach oben · Effiziente Kommunikation etablieren · Verbindlichkeit schaffen |
| **Formate** | Vortrag, Workshop |
| **Funnel** | Impuls → Bootcamp „Geh in Führung“ |

### Eintrag 2 — Kommunikation

| Feld | Inhalt |
|---|---|
| **id** | kommunikation-elevator-pitch |
| **Thema** | Kommunikation |
| **Titel** | Elevator Pitch |
| **Teaser** | Sich in Sekunden vorstellen, ohne ins Schwimmen zu geraten — und mit den ersten Sätzen Neugier wecken. |
| **Beschreibung** | Sich in einer neuen Gruppe, auf einer Veranstaltung oder privat vorstellen — und dabei entspannt bleiben. Wie Sie vom ersten Moment an wirken und mit Ihren ersten Sätzen Neugier wecken, sodass Ihr Gegenüber mehr wissen möchte. Inklusive erstem Eindruck und einem eigenen Pitch zum Mitnehmen. |
| **Inhalte** | Der erste Eindruck — und wie Sie ihn positiv beeinflussen · Wozu ein Elevator Pitch dient · Aufbau, Konzepte und Regeln · Vorarbeiten und Hilfsmittel · Ablauf und Phasen · Den eigenen, individuellen Pitch ausarbeiten |
| **Formate** | Vortrag, Workshop |

### Eintrag 3 — Netzwerken

| Feld | Inhalt |
|---|---|
| **id** | netzwerken-kontakte |
| **Thema** | Netzwerken |
| **Titel** | Kontakte schaden nur … |
| **Teaser** | „Kontakte schaden nur dem, der keine hat.“ Wie Netzwerken mit überschaubarem Aufwand gelingt. |
| **Beschreibung** | Netzwerken entscheidet über die eigene Karriere mit — in der Wirtschaft wie in der Wissenschaft. Wie es effizient und auf sicheren Wegen gelingt: von Geben und Nehmen über authentisches Selbstmarketing bis zum Auf- und Erhalten einer professionellen Reputation, online wie offline. |
| **Inhalte** | Warum „wissen, wo es steht“ heute nicht mehr reicht · Kontakte mit geringem Aufwand auf- und ausbauen · Geben und Nehmen, horizontales und vertikales Netzwerken · Authentisches Selbstmarketing · Empfehlungsmanagement · Reputation in Xing, LinkedIn & Co. |
| **Formate** | Vortrag, Workshop |
| **Funnel** | Impuls → Beratung |

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
