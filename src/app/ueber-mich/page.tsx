import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HexagonBullet from "@/components/icons/HexagonBullet";

const NETWORK_CARDS = [
  {
    title: "Sie beauftragen direkt",
    description:
      "Sie lernen die Person kennen, prüfen die Chemie und beauftragen direkt – nicht über mich.",
  },
  {
    title: "Keine Provision, kein Eigeninteresse",
    description:
      "Ich erhalte keine Provision und bin an keinem Folgeauftrag beteiligt.",
  },
  {
    title: "Ehrliche Empfehlung, freie Entscheidung",
    description:
      "Ich nenne die Person, der ich vertraue. Die Entscheidung bleibt allein bei Ihnen.",
  },
  {
    title: "Ein Service, kein Geschäftsmodell",
    description: "Das Netzwerk ist Teil meiner Arbeit, nicht ihr Zweck.",
  },
] as const;

const PERSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marcus Holzheimer",
  givenName: "Marcus",
  familyName: "Holzheimer",
  jobTitle: "Geschäftsführender Gesellschafter und Berater",
  worksFor: {
    "@type": "Organization",
    name: "MH3 LearnCon GmbH",
    url: "https://mh-learncon.com",
  },
  url: "https://mh-learncon.com/ueber-mich",
  image: "https://mh-learncon.com/Offen_laecheln.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Grafenberger Allee 60",
    postalCode: "40237",
    addressLocality: "Düsseldorf",
    addressCountry: "DE",
  },
  telephone: "+491718820277",
  email: "kontakt@mh-learncon.com",
  memberOf: {
    "@type": "Organization",
    name: "VDI – Verein Deutscher Ingenieure",
    url: "https://www.vdi.de",
  },
  sameAs: [
    "https://de.linkedin.com/in/marcusholzheimer",
    "https://www.xing.com/profile/Marcus_Holzheimer/",
    "https://www.facebook.com/mh3.learncon.gmbh",
    "https://www.researchgate.net/profile/Marcus_Holzheimer",
    "https://www.shopvote.de/bewertung_mh-learncon-com_21607.html",
  ],
};

export const metadata: Metadata = {
  title:
    "Über Marcus Holzheimer – Berater, Sparringspartner, Einzelunternehmer | MH3 LearnCon",
  description:
    "Über 20 Jahre selbstständig. Führungskraft, Auftraggeber, Berater – drei Perspektiven in einer Person. Düsseldorf als Heimatbasis, deutschlandweit und international im Einsatz.",
};

export default function UeberMichPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PERSON_LD),
        }}
      />
      <div className="animate-fade-in">
        {/* ── Abschnitt 1: Hero ─────────────────────────────────────── */}
        <section className="bg-white min-h-[60vh] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col gap-6">
                <h1 className="text-h1 font-extrabold text-brand-text leading-tight">
                  Über Marcus Holzheimer
                </h1>

                <p className="text-xl font-semibold text-orange">
                  Menschen machen Geschäfte mit Menschen.
                </p>

                <p className="text-body text-brand-text leading-relaxed max-w-lg">
                  Diesen Satz hören meine Klientinnen und Klienten häufig – weil
                  er das Fundament meiner Arbeit beschreibt. Bevor Sie
                  entscheiden, ob eine Zusammenarbeit für Sie passt, sollten Sie
                  wissen, mit wem Sie es zu tun haben. Nicht nur beruflich,
                  sondern auch als Mensch. Diese Seite gibt Ihnen genau das:
                  einen ehrlichen Einblick – in meinen Werdegang, meine
                  Arbeitsweise und das, was mich antreibt.
                </p>
              </div>

              <div>
                <Image
                  src="/Offen_laecheln.png"
                  alt="Marcus Holzheimer"
                  width={1080}
                  height={1080}
                  priority
                  className="w-full h-auto rounded-lg border-[3px] border-denver-blue shadow-[4px_4px_0px_0px_#FF9B01]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Abschnitt 2: Drei Perspektiven (Quote, Vertriebs-Muster) ── */}
        <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
              aria-hidden="true"
            />
            <h2 className="text-h2 font-semibold text-brand-text mb-5 leading-snug">
              Drei Perspektiven, die meine Arbeit prägen.
            </h2>

            <p className="text-base leading-relaxed text-brand-text">
              In meiner Konzernkarriere habe ich internationale Teams geführt
              – mit Verantwortung für DACH, später für EMEA. Ich kenne die
              Realität von Führungskräften, die unter Druck Ergebnisse
              liefern, Vorgaben umsetzen und gleichzeitig ihre Leute mitnehmen
              müssen. Nicht aus Büchern, sondern aus eigener Erfahrung.
            </p>

            <p className="text-base leading-relaxed text-brand-text mt-6">
              Als Auftraggeber habe ich selbst Berater, Trainer und Vertriebler
              eingekauft und in Projekte eingebunden. Ich weiß, wie es sich
              anfühlt, auf der anderen Seite des Tisches zu sitzen: Was
              überzeugt, was nervt, und woran man erkennt, ob jemand die
              eigene Situation wirklich versteht oder nur ein Standardprogramm
              abspult.
            </p>

            <blockquote className="my-6 ml-10 mr-8 border-l-4 border-denver-blue py-3 pl-6">
              <p className="text-xl font-medium leading-relaxed text-brand-text">
                Drei Perspektiven: Führungskraft, Auftraggeber, Berater.
              </p>
            </blockquote>

            <p className="text-base leading-relaxed text-brand-text">
              Seit 2006 arbeite ich als selbstständiger Berater – bewusst
              allein, mit einem professionellen Netzwerk im Hintergrund. In
              all diesen Jahren und Rollen habe ich viele Fehler gemacht und
              bin in einige Fettnäpfchen getreten. Ich habe mir angewöhnt,
              aus jedem dieser Fehler eine Konsequenz zu ziehen – Fehler
              darf man machen, einmal. Genau diese Erfahrungen und die Lehren
              daraus sind ein wesentlicher Teil dessen, was ich meinen
              Klientinnen und Klienten mitbringe. Drei Perspektiven,
              verarbeitete Fehler und die daraus entstandenen Werkzeuge – das
              ist der Grund, warum ich die Sprache meiner Klientinnen und
              Klienten spreche: die der Führungskraft, die des Auftraggebers
              und die des Beraters.
            </p>
          </div>
        </section>

        {/* ── Abschnitt 3: Bewusst allein – Chef-Service ── */}
        <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
              aria-hidden="true"
            />
            <h2 className="text-h2 font-semibold text-brand-text mb-5 leading-snug">
              Bewusst allein – und genau das ist der Punkt.
            </h2>

            <p className="text-base leading-relaxed text-brand-text">
              Kennen Sie Webseiten, auf denen überall „wir“ steht – und Sie
              wissen, dass eine einzige Person dahintersteckt? Das ist nicht
              mein Stil. Ich bin Einzelunternehmer, bewusst und gewollt. Wer
              mich beauftragt, bekommt mich – von der ersten Minute bis zum
              Abschluss. Kein Weiterreichen an Junioren, kein Teamwechsel mitten
              im Projekt.
            </p>

            <p className="text-base leading-relaxed text-brand-text mt-6">
              Das bedeutet gleichzeitig: Ich kenne meine Grenzen. Es gibt Dinge,
              die ich nicht gut kann oder nicht gern mache. Dafür habe ich mir
              über die Jahre ein professionelles Netzwerk aufgebaut –
              Spezialistinnen und Spezialisten, denen ich vertraue.
            </p>

            <ul
              className="mt-6 grid grid-cols-1 list-none gap-4 p-0 m-0 md:grid-cols-2"
              role="list"
            >
              {NETWORK_CARDS.map((card) => (
                <li
                  key={card.title}
                  className="flex items-start gap-3 rounded-lg border border-brand-gray-mid-light bg-white px-4 py-3 shadow-sm"
                >
                  <HexagonBullet
                    size={12}
                    className="mt-1.5 shrink-0 text-orange"
                  />
                  <div>
                    <p className="font-semibold text-base leading-relaxed text-brand-text">
                      {card.title}
                    </p>
                    <p className="text-base leading-relaxed text-brand-text">
                      {card.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-base leading-relaxed text-brand-text mt-6">
              Und wenn ein Projekt internationale Reichweite braucht: Mein
              Beratungsraum und meine Studios stehen in Düsseldorf, meine
              Projekte laufen im gesamten DACH-Raum und darüber hinaus.
              Workshops und Beratungen auf Deutsch und Englisch, online in
              Studioqualität oder vor Ort – das Setup steht.
            </p>
          </div>
        </section>

        {/* ── Abschnitt 4: (kein) Coaching ── */}
        <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
              aria-hidden="true"
            />
            <h2 className="text-h2 font-semibold text-brand-text mb-5 leading-snug">
              Berater, nicht Coach – eine bewusste Entscheidung.
            </h2>

            <p className="text-base leading-relaxed text-brand-text">
              Ich werde regelmäßig gefragt, ob ich Coach bin. Die Antwort ist:
              Nein – und das ist eine bewusste Positionierung, keine Wertung.
              Gute Coaches leisten wichtige Arbeit, und manche meiner Klientinnen
              und Klienten arbeiten parallel mit einem Coach zusammen.
            </p>

            <p className="text-base leading-relaxed text-brand-text mt-6">
              Mein Ansatz ist ein anderer: Ich bringe eigene Erfahrung,
              fachliche Einschätzung und eine klare Meinung mit. Wenn ich einen
              Eindruck gewinne, stelle ich weitere Fragen – bis wir beide klar
              sehen. Was dann folgt, ist eine Lösung, die auf Ihrem Verständnis
              Ihrer Situation aufbaut, nicht auf meinem.
            </p>

            <p className="mt-6">
              <Link
                href="/kein-coaching"
                className="text-orange font-semibold hover:text-denver-blue transition-colors"
              >
                Was genau ich unter „(kein) Coaching“ verstehe →
              </Link>
            </p>
          </div>
        </section>

        {/* ── Abschnitt 5: Werdegang ── */}
        <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
              aria-hidden="true"
            />
            <h2 className="text-h2 font-semibold text-brand-text mb-5 leading-snug">
              Kein gerader Weg – und genau deshalb der richtige.
            </h2>

            <h3 className="mt-10 mb-3 text-xl md:text-2xl font-semibold text-denver-blue leading-snug">
              Der Rheinländer.
            </h3>
            <p className="text-base leading-relaxed text-brand-text">
              Geboren 1969 im Rheinland, aufgewachsen in Mülheim-Kärlich – ja,
              da stand ein Atomkraftwerk. Wir sagen: Wir lächeln nicht, wir
              strahlen.
            </p>

            <h3 className="mt-10 mb-3 text-xl md:text-2xl font-semibold text-denver-blue leading-snug">
              Anstalt, Werkbank, Hörsaal.
            </h3>
            <p className="text-base leading-relaxed text-brand-text">
              Mein erster Umweg begann auf einem altsprachlichen Gymnasium.
              Latein als erste Fremdsprache, später Französisch und Englisch.
              Ich habe gemerkt, dass ich kein Talent habe, Vokabeln und
              Grammatik auswendig zu lernen, warum ich einen anderen Weg
              eingeschlagen habe. Es ging in die Industrie: Ausbildung als
              Maschinenschlosser. Mein Latein hat mir dort nicht geholfen, doch
              habe ich zwei Dinge über mich gelernt, die mich bis heute prägen.
              Erstens: Mit möglichst wenig Werkzeugen auskommen – Hammer,
              Wasserpumpenzange, Panzerband. Was einfach funktioniert,
              funktioniert überall. Das gilt für die Werkstatt genauso wie für
              die Beratung, wo ich versuche, mit möglichst wenig Werkzeugen und
              Methoden auszukommen. Zweitens: Ich kann keiner Führungskraft
              folgen, deren Kompetenz ich nicht anerkenne. Also musste ich
              studieren.
            </p>

            <p className="text-base leading-relaxed text-brand-text mt-6">
              Es wurde Maschinenbau, Fachrichtung Betriebstechnik – heute würde
              man vermutlich Wirtschaftsingenieurwesen sagen. Mit BWL, VWL,
              REFA, Arbeitsrecht, Netzplantechnik und Co. Finanziert habe ich
              das Studium unter anderem nachts im telefonischen Vertrieb und
              technischen Support bei der 1&1 in Montabaur für 300 Soft- und
              Hardwareprodukte. So bin ich in die Softwarebranche gerutscht.
            </p>

            <h3 className="mt-10 mb-3 text-xl md:text-2xl font-semibold text-denver-blue leading-snug">
              Über die Karriere zur Frage.
            </h3>

            <Image
              src="/Werdegang.svg"
              alt="Comic: Evolution von Marcus Holzheimer – fünf Stationen vom Schüler bis zum Berater im Anzug"
              width={1312}
              height={620}
              sizes="(min-width: 768px) 60vw, 100vw"
              className="block w-full h-auto mb-6 md:float-right md:w-3/5 md:ml-8 md:mb-4 md:mt-2"
            />

            <p className="text-base leading-relaxed text-brand-text">
              Nach dem Studium folgte die Konzernkarriere – internationale
              TOP-Software-Unternehmen, Verantwortung für DACH, dann EMEA,
              Projekte auf der ganzen Welt. Von außen sah das nach geradem
              Aufstieg aus. Von innen sah es anders aus. Und dann beobachtete
              ich Überlastung bei mir und um mich herum – Kolleginnen und
              Kollegen mit Mitte 30, die mit Burnout, Depression oder
              Schlimmerem zu kämpfen hatten. Irgendwann stand die Frage im Raum:
              Wie soll es weitergehen?
            </p>

            <p className="text-base leading-relaxed text-brand-text mt-6">
              Ich suchte Hilfe – bei Karriereberater:innen, Therapeut:innen,
              Coaches, in der Literatur. Niemand konnte mir wirklich helfen.
              Also entwickelte ich mein eigenes System, meine eigene Methodik,
              meine eigenen Werkzeuge. Am Ende dieses Prozesses stand eine
              Erkenntnis, die ich zwei Wochen vorher nicht geglaubt hätte: Ich
              mache mich selbstständig. Diese Methodik verwenden übrigens
              seitdem meine Klient:innen, um für sich den idealen Job, ihr WAS
              zu beschreiben.
            </p>

            <h3 className="mt-10 mb-3 text-xl md:text-2xl font-semibold text-denver-blue leading-snug">
              Selbst und ständig.
            </h3>
            <p className="text-base leading-relaxed text-brand-text">
              Wer glaubt, dass Unternehmensberater Unternehmen beraten, der
              glaubt auch, dass Zitronenfalter Zitronen falten. 2006 habe ich
              die MH³ Beratung in Düsseldorf gegründet – wo ich seit 1997 lebe.
              Mein Portfolio war von Anfang an anders
              aufgebaut: nicht das anbieten, was der Markt gerade nachfragt,
              sondern das, was ich gut kann und gern mache. Zuerst das Was,
              dann das Wie, dann der erste Kunde. Den ersten Kunden habe ich
              bewusst nicht in meinem alten Netzwerk gesucht – ich wollte
              Abstand gewinnen und komplett neu anfangen. Das war riskant, im
              Nachhinein die richtige Entscheidung.
            </p>

            <p className="text-base leading-relaxed text-brand-text mt-6">
              Seitdem ist das Portfolio gewachsen – organisch, entlang meiner
              Interessen und der Bedarfe meiner Klientinnen und Klienten.
              Führung ist über die Jahre zum Kernbereich geworden, die
              Management Simulation kam dazu, 2019 habe ich die LearnCon GmbH
              gegründet mit eigenem Filmstudio für eLearnings und Online-Formate,
              und 2023 wurden beide Unternehmen zur MH3 LearnCon GmbH
              zusammengelegt. Was als nächstes kommt, weiß ich noch nicht – und
              genau das macht es interessant.
            </p>

            <div className="clear-both" />
          </div>
        </section>

        {/* ── Abschnitt 6: Engagement ── */}
        <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
              aria-hidden="true"
            />
            <h2 className="text-h2 font-semibold text-brand-text mb-5 leading-snug">
              Es muss sich nicht immer alles um Geld drehen.
            </h2>

            <p className="text-base leading-relaxed text-brand-text">
              Als ich über die Selbstständigkeit nachdachte, war mir eines
              wichtig: auch Dinge tun zu können, bei denen man nicht über Geld
              spricht.
            </p>

            <p className="text-base leading-relaxed text-brand-text mt-6">
              Viele Jahre war ich ehrenamtlich für den VDI – den Verein Deutscher
              Ingenieure – aktiv: Karriere-Beratungen, Recruitingtage, Messen,
              Vorträge, Workshops, auf lokaler und bundesweiter Ebene. Die aktive
              Mitarbeit bei den damaligen Studenten und Jungingenieuren hatte mir
              während meines Studiums eine Plattform geboten, Dinge zu lernen und
              auszuprobieren, die meine eigene Karriere enorm gefördert haben.
              Dieses Wissen gebe ich gern weiter – als kleines Dankeschön.
            </p>

            <blockquote className="my-6 ml-10 mr-8 border-l-4 border-denver-blue py-3 pl-6">
              <p className="text-xl font-medium leading-relaxed text-brand-text">
                Sharing is caring. Wissen weiterzugeben, ist meine Art zu sagen:
                es liegt mir was an dir.
              </p>
            </blockquote>

            <p className="text-base leading-relaxed text-brand-text">
              Daneben berate ich regelmäßig Menschen, die Unterstützung brauchen
              und sich professionelle Beratung gerade nicht leisten können. Unter
              einer Bedingung: Die Motivation muss erkennbar sein. Ich kann
              niemanden zum Jagen tragen – wenn der Änderungswunsch nicht von der
              Person selbst ausgeht, kann ich auch nichts bewegen.
            </p>

            <p className="text-base leading-relaxed text-brand-text mt-6">
              Seit einigen Jahren unterrichte ich zudem im Rahmen eines
              Lehrauftrags an einer deutschen Hochschule das Thema Führung im
              komplexen Unternehmensumfeld – im Weiterbildungsmaster für
              Berufstätige. Theorie und Praxis zusammenbringen, mit Menschen, die
              mitten im Berufsleben stehen: Das passt zu meiner Arbeitsweise.
            </p>
          </div>
        </section>

        {/* ── Abschnitt 7: Sie/Du-Übergang ── */}
        <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] md:p-12">
              <h2 className="mb-3 text-h2 font-semibold text-brand-text">
                Sie oder Du – beides ist willkommen.
              </h2>
              <p className="mb-10 text-body text-brand-text">
                Auf meiner Webseite sieze ich Sie – weil wir uns noch nicht
                persönlich kennen. Im direkten Austausch, in meinen Workshops
                und in der Community wechsle ich zum Du. Das ist für mich
                Ausdruck von Augenhöhe und Vertrauen. Wann dieser Wechsel
                passiert, entscheiden wir gemeinsam.
              </p>
            </div>
          </div>
        </section>

        {/* ── Abschnitt 8: Persönliches ── */}
        <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
              aria-hidden="true"
            />
            <h2 className="text-h2 font-semibold text-brand-text mb-5 leading-snug">
              Und wer ist Marcus, wenn er nicht berät?
            </h2>

            <p className="text-base leading-relaxed text-brand-text">
              <span className="font-bold text-denver-blue">Kochen.</span> Ich koche
              sehr gern – früher auch für Klientinnen und Klienten. Die Idee,
              eigene Koch-Sessions als Format anzubieten, ist noch nicht vom
              Tisch. Bis dahin bleibt die Küche privat.
            </p>

            <p className="text-base leading-relaxed text-brand-text mt-6">
              <span className="font-bold text-denver-blue">Lesen.</span> Ich bin
              eine Leseratte. Ein Tag ohne Buch gibt es nicht. Historische
              Romane genauso wie Fachbücher – bei beiden kann es passieren,
              dass ich abends den Schlaf vergesse. Meine Buchempfehlungen
              findest Du übrigens auf einer eigenen Seite – inklusive eines
              Projekts, das mir am Herzen liegt.
            </p>

            <p className="text-base leading-relaxed text-brand-text mt-6">
              <span className="font-bold text-denver-blue">
                Espresso und Sushi.
              </span>{" "}
              Ich liebe Espresso. Nach einer langen Odyssee habe ich die
              richtige Mischung gefunden, und morgens den Siebträger meiner
              Handhebelmaschine zu füllen, ist ein Ritual, auf das ich nur im
              Urlaub verzichte – schweren Herzens. Und ich liebe Sushi und in
              Düsseldorf habe ich dafür alle Möglichkeiten.
            </p>

            <p className="text-base leading-relaxed text-brand-text mt-6">
              <span className="font-bold text-denver-blue">
                Sport und Hobbys.
              </span>{" "}
              Ich habe in meinem Leben viele Sportarten und Hobbys ausprobiert.
              Segeln (Dickschiff & Catamaran), Tauchen, Rudern, Gaming,
              Paartanz, Karate, Nordic Talking und vieles mehr – immer wieder
              mit Begeisterung, und immer wieder kommt irgendwann der Punkt, an
              dem ich mich dem nächsten Thema zuwende. Manche würden das
              sprunghaft nennen. Ich nenne es neugierig.
            </p>

            <p className="text-base leading-relaxed text-brand-text mt-6">
              <span className="font-bold text-denver-blue">Partnerschaft.</span>{" "}
              Und seit über 20 Jahren bin ich in einer Partnerschaft. Manche
              Dinge halten eben doch.
            </p>
          </div>
        </section>

        {/* ── Abschnitt 9: Düsseldorf – Heimatbasis ── */}
        <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
              aria-hidden="true"
            />
            <h2 className="text-h2 font-semibold text-brand-text mb-5 leading-snug">
              Düsseldorf ist meine Basis – nicht meine Grenze.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center mt-8">
              <div className="lg:col-span-1">
                <Image
                  src="/Rheinturm.png"
                  alt="Düsseldorf – Rheinturm im Abendlicht (Platzhalter; Vier-Kachel-Komposition folgt)"
                  width={1000}
                  height={1000}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  priority={false}
                  className="block w-full h-auto rounded-lg"
                />
              </div>
              <div className="lg:col-span-2">
                <p className="text-base leading-relaxed text-brand-text">
                  Seit 1997 lebe und arbeite ich in Düsseldorf. Mein Büro in der
                  Grafenberger Allee ist gleichzeitig Beratungsraum für
                  persönliche Gespräche und Produktionsstätte: Zwei Studios mit
                  Greenscreen und Teleprompter – eines für Aufnahmen im Stehen
                  mit Flipchart, eines für Aufnahmen im Sitzen, Software-Demos
                  und Livestreaming.
                </p>

                <p className="text-base leading-relaxed text-brand-text mt-6">
                  Online-Beratung ist bei mir kein Kompromiss, sondern
                  professioneller Standard. Durchgängiger Blickkontakt,
                  Echtzeit-Visualisierung, Studioqualität in Bild und Ton.
                  Selbst Klientinnen und Klienten aus der Region bevorzugen
                  häufig die Online-Variante, weil sie besser in den
                  Arbeitsalltag passt.
                </p>

                <p className="text-base leading-relaxed text-brand-text mt-6">
                  Meine Projekte laufen im gesamten DACH-Raum und international
                  – Workshops und Beratungen auf Deutsch und Englisch, vor Ort
                  oder aus dem Studio. Düsseldorf ist Heimatbasis, nicht
                  Marktbegrenzung.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
