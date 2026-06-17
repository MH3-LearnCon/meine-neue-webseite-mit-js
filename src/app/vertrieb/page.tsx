import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import HexagonBullet from "@/components/icons/HexagonBullet";
import ContactSection from "@/components/ContactSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import ShopvoteBadge from "@/components/ShopvoteBadge";

export const metadata: Metadata = {
  title: "Vertriebsberatung für den Lösungsvertrieb | MH3 LearnCon",
  description:
    "Sie suchen eine Vertriebsschulung? Reden wir zuerst über Ihren Vertriebsprozess. Vertriebsberatung für komplexen B2B-Vertrieb — von der Strategie bis zur erfolgreichen Umsetzung. Deutschlandweit und international.",
};

export default function VertriebPage() {
  return (
    <div className="animate-fade-in">
      {/* ── Abschnitt 1: Hero ─────────────────────────────────────── */}
      <Hero
        h1="Vertriebsberatung für den Lösungsvertrieb"
        subline="Professioneller Vertrieb ist erlernbar."
        body={"Die meisten Anfragen klingen gleich: \u201EZwei Tage Vertriebsschulung f\u00FCrs Team.\u201C Verst\u00E4ndlich \u2013 und selten die L\u00F6sung. Wenn jeder anders arbeitet und ein einheitlicher Prozess fehlt, liegt der Hebel woanders. Ich finde ihn mit Ihnen: nicht mehr Termine, sondern mehr sinnvolle Auftr\u00E4ge."}
        imageLabel="Bild Vertrieb-Hero folgt"
      />

      {/* ── Abschnitt 2: Die Umleitung ───────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Vertriebsschulung, Vertriebstraining, Verkaufsseminar – und warum
            das oft der falsche Einstieg ist.
          </h2>

          <div className="mx-auto max-w-4xl space-y-6">
            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-[2px_2px_0px_0px_#FF9B01] md:p-8">
              <div className="flex items-start gap-4 md:gap-6">
                <span className="text-5xl md:text-6xl font-bold text-denver-blue leading-none shrink-0 min-w-[3rem] md:min-w-[4rem]">
                  1
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-brand-text">
                    Der richtige Impuls
                  </h3>
                  <p className="text-body text-brand-text">
                    Wenn Sie nach einer Vertriebsschulung suchen, haben Sie einen
                    konkreten Handlungsbedarf erkannt. Das ist der richtige Impuls.
                    Der Vertrieb soll professioneller werden, die Ergebnisse sollen
                    steigen, das Team soll einheitlicher arbeiten.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-[2px_2px_0px_0px_#FF9B01] md:p-8">
              <div className="flex items-start gap-4 md:gap-6">
                <span className="text-5xl md:text-6xl font-bold text-denver-blue leading-none shrink-0 min-w-[3rem] md:min-w-[4rem]">
                  2
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-brand-text">
                    Ein anderer Bedarf
                  </h3>
                  <p className="text-body text-brand-text">
                    Gleichzeitig zeigt meine Erfahrung aus über 20 Jahren
                    Vertriebsberatung: Hinter der Anfrage
                    {" \u201EVertriebsschulung\u201C "}
                    steckt fast immer ein anderer Bedarf. Mal fehlt ein
                    einheitlicher Vertriebsprozess. Mal ist das Produktmanagement
                    nicht in den Vertrieb eingebunden. Mal ist die Herausforderung
                    eigentlich eine Führungsaufgabe. Und manchmal ergibt die
                    Bedarfsanalyse, dass eine gezielte Schulung tatsächlich der
                    richtige Schritt ist – nur eben eine andere, als ursprünglich
                    gedacht.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-[2px_2px_0px_0px_#FF9B01] md:p-8">
              <div className="flex items-start gap-4 md:gap-6">
                <span className="text-5xl md:text-6xl font-bold text-denver-blue leading-none shrink-0 min-w-[3rem] md:min-w-[4rem]">
                  3
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-brand-text">
                    Dort starten, wo der Hebel liegt
                  </h3>
                  <p className="text-body text-brand-text">
                    Deshalb starte ich dort, wo der eigentliche Bedarf liegt. Aus
                    einer Anfrage für zwei Tage Standardschulung wurde in meiner
                    Praxis schon ein zweijähriges Projekt mit Rollout in 24
                    Ländern – weil die Bedarfsanalyse gezeigt hat, was tatsächlich
                    fehlte. Das Ergebnis war besser als erwartet, die Investition
                    hat sich vielfach ausgezahlt.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 3: Branchenkompetenz ───────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Lösungsvertrieb – meine Kernkompetenz.
          </h2>

          <div className="space-y-6">
            <p className="text-body text-brand-text">
              Mein Schwerpunkt liegt dort, wo Vertrieb komplex ist:
              Maschinenbau, Pharma, Medizintechnik, Chemie, IT,
              Beratungsunternehmen und Institute – Branchen mit
              langen Vertriebszyklen, erklärungsbedürftigen Produkten und
              Entscheidungsprozessen, an denen mehrere Personen beteiligt sind.
              Hier funktioniert Vertrieb nur als Lösungsvertrieb: nicht das
              Produkt steht im Vordergrund, sondern die Frage, welches Problem
              der Kunde tatsächlich lösen will.
            </p>

            <p className="text-body text-brand-text">
              Ich kenne diese Welt, weil ich selbst darin gearbeitet habe – als
              Führungskraft im internationalen Software-Vertrieb, als
              Auftraggeber von Vertriebstrainings und seit 2006 als Berater.
              Diese Kombination macht einen Unterschied: Ich spreche die Sprache
              Ihrer Vertriebsmitarbeitenden und die Sprache Ihrer
              Geschäftsführung. Und ich weiß, wo die Reibungspunkte zwischen
              beiden liegen.
            </p>

            <p className="text-body text-brand-text">
              Dabei bleibt mein Blick selten beim Vertriebsprozess allein
              stehen. Manchmal liegt der eigentliche Hebel tiefer – ein
              fehlender Vertriebskanal, eine veränderte Kundenansprache, eine
              Lücke zwischen Produktportfolio und Marktbedürfnis.
            </p>
          </div>

          <blockquote className="my-6 ml-10 mr-8 border-l-4 border-denver-blue py-3 pl-6">
            <p className="text-xl font-medium leading-relaxed text-brand-text">
              „Denn ein professioneller Vertriebsprozess auf einem
              Geschäftsmodell, das nicht mehr passt, liefert bestenfalls
              effizientere Mittelmäßigkeit."
            </p>
          </blockquote>

          <p className="text-body text-brand-text">
            Genau deshalb ist mein Themenspektrum breiter, als die meisten
            Anfragen vermuten lassen. Wenn der Hebel im Geschäftsmodell liegt,
            arbeite ich mit Ihnen auch daran – mit erprobten Werkzeugen wie der
            Business Model Canvas (BMC) oder dem St. Galler Business Model
            Navigator mit 55+ Geschäftsmodellmustern. Welcher Hebel in Ihrem
            Fall wirkt, zeigt die Bedarfsanalyse zu Beginn.
          </p>
        </div>
      </section>

      {/* ── Abschnitt 4: Themen ──────────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Themen, die in meiner Arbeit mit Vertriebsorganisationen regelmäßig
            vorkommen.
          </h2>

          <p className="text-body text-brand-text mb-8">
            Welche Themen für Ihre Situation relevant sind, zeigt die
            Bedarfsanalyse. Hier eine Übersicht der Felder, in denen ich am
            häufigsten arbeite:
          </p>

          <ul
            className="mt-8 grid grid-cols-1 list-none gap-4 p-0 m-0 md:grid-cols-2"
            role="list"
          >
            {[
              "Lösungsvertrieb und professionelle Vertriebsprozesse",
              "Vertriebsstruktur und Vertriebsführung",
              "Key Account Management",
              "Verhandlungsführung \u2013 für Vertriebs- und Einkaufsteams",
              "Geschäftsmodellentwicklung und neue Vertriebskanäle",
              "KI-gestützte Vertriebsprozesse und digitale Werkzeuge",
            ].map((label) => (
              <li
                key={label}
                className="flex items-start gap-3 rounded-lg border border-brand-gray-mid-light bg-white px-4 py-3 shadow-sm"
              >
                <HexagonBullet size={12} className="mt-1.5 shrink-0 text-orange" />
                <span className="text-body text-brand-text">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-body text-brand-text">
            Wer eine Vertriebsschulung anfrägt, braucht manchmal genau das.
            Häufiger zeigt sich, dass der eigentliche Hebel in der Struktur, im
            Prozess oder in der Führung liegt.
          </p>

          <Link
            href="/fuehrung"
            className="mt-4 inline-block text-orange font-semibold hover:text-denver-blue transition-colors"
          >
            Mehr zum Thema Führung →
          </Link>
        </div>
      </section>

      {/* ── Abschnitt 5: Methodik ─────────────────────────────────── */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Eine Methodik, die Vertrieb erlernbar macht.
          </h2>

          <div className="space-y-6">
            <p className="text-body text-brand-text">
              Über die Jahre habe ich internationale Vertriebsmethoden und
              regionale Beratungsansätze analysiert und in der Praxis getestet.
              Was wirklich trägt — über Branchen, Länder und Vertriebsstile
              hinweg — habe ich auf das Wesentliche destilliert.
            </p>

            <blockquote className="my-6 ml-10 mr-8 border-l-4 border-denver-blue py-3 pl-6">
              <p className="text-xl font-medium leading-relaxed text-brand-text">
                „Es ist nicht der größte Methodenkoffer, der trägt. Sondern die
                Werkzeuge, die im Tagesgeschäft wirken.“
              </p>
            </blockquote>

            <p className="text-body text-brand-text">
              Das Ergebnis ist ein Ansatz, der drei Dinge gleichzeitig ist:
              einfach genug, um ihn im Tagesgeschäft anzuwenden, professionell
              genug, um in komplexen B2B-Umfeldern zu bestehen – und für jede
              Person im Team erlernbar, unabhängig davon, ob jemand ein
              geborener Vertriebler ist oder aus einer Fachrolle kommt.
            </p>

            <p className="text-body text-brand-text">
              Ein Beispiel: Ich gebe Verhandlungsworkshops für Vertriebsteams
              und für Einkaufsabteilungen. Wer beide Seiten des
              Verhandlungstisches kennt, kann seine Klientinnen und Klienten
              besser vorbereiten – weil ich weiß, wie die Gegenseite denkt,
              plant und entscheidet.
            </p>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 6: Der Weg zur Zusammenarbeit ───────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            So kommen wir ins Gespräch.
          </h2>

          <ProcessSteps
            steps={[
              {
                step: 1,
                title: "Kennenlerngespräch.",
                body: "Sie rufen an oder buchen einen Termin. Im Erstgespräch höre ich zu, stelle Fragen und gebe Ihnen eine erste Einschätzung – als neutraler Gesprächspartner, mit dem Ziel, den eigentlichen Bedarf zu verstehen.",
              },
              {
                step: 2,
                title: "Bedarfsanalyse.",
                body: "Wenn wir gemeinsam sehen, dass eine Zusammenarbeit Sinn ergibt, folgt die tiefere Analyse. Die Bedarfsanalyse liefert Ihnen eigenständigen Wert – unabhängig davon, ob danach ein Projekt entsteht. Die Investition wird bei einem Folgeauftrag verrechnet.",
              },
              {
                step: 3,
                title: "Individuelle Lösung.",
                body: "Auf Basis der Analyse entwickle ich ein Konzept, das zu Ihrer Situation passt – ob Vertriebsprozess-Entwicklung, Workshop-Reihe, Einzelberatung der Vertriebsleitung oder eine Kombination.",
              },
            ]}
          />

          <div className="mt-10 border-l-[3px] border-orange bg-white p-4 md:p-5">
            <p className="text-body text-brand-text">
              <span className="font-semibold">
                Ein Hinweis zur Auftraggeber-Dynamik:
              </span>{" "}
              Vertriebsprojekte kommen auf unterschiedlichen Wegen zustande –
              über die Geschäftsführung, über die Vertriebsleitung oder über
              einzelne Mitarbeitende. Unabhängig davon, wer den Kontakt
              herstellt: Ich arbeite im Interesse des gesamten Vertriebsteams und
              stimme den Auftrag mit der verantwortlichen Führungsebene ab.
            </p>
          </div>

          <p className="mt-6 text-body text-brand-text">
            Zwei Dinge sind mir wichtig: Wenn jemand anderes besser zu Ihnen
            passt, sage ich Ihnen das. Und wenn ein kurzes Gespräch reicht, um
            Ihre Frage zu klären, tun wir genau das – und Sie gehen mit einer
            Lösung nach Hause.
          </p>
        </div>
      </section>

      {/* ── Abschnitt 7: Aus der Praxis (Fallbeispiele) ───────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <h2 className="text-h2 font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Aus der Praxis.
          </h2>

          <p className="text-body text-brand-text mb-8">
            Drei Anfragen, drei Bedarfsanalysen — drei Projekte, die sich anders
            entwickelt haben als ursprünglich gedacht.
          </p>

          <div className="space-y-6">
            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-md md:p-8">
              <h3 className="mb-4 text-base font-bold leading-snug text-brand-text md:text-lg">
                Von zwei Tagen Vertriebsschulung zum Rollout in 24 Ländern.
              </h3>
              <p className="text-body text-brand-text">
                Ein technisches Unternehmen fragte eine Standard-Vertriebsschulung
                an. Die Bedarfsanalyse zeigte: Es fehlte ein professioneller
                Vertriebsprozess. Das Projekt startete mit einem Pilotworkshop
                mit Geschäftsführung, HR, Einkauf und Vertrieb. Daraus wurde die
                Ausbildung von 80 Mitarbeitenden im DACH-Raum – und schließlich
                ein weltweiter Rollout in 24 Ländern mit rund 600
                Teilnehmenden, zweisprachig und mit Dolmetscherin. Aus zwei
                Tagen wurden zwei Jahre. Gewinne und Mitarbeitendenzufriedenheit
                stiegen signifikant.
              </p>
            </article>

            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-md md:p-8">
              <h3 className="mb-4 text-base font-bold leading-snug text-brand-text md:text-lg">
                Vom Verhandlungsworkshop zum gemeinsamen Vertriebsprozess.
              </h3>
              <p className="text-body text-brand-text">
                Ein Produktmanagement-Team sollte besser verhandeln lernen. Die
                Bedarfsanalyse ergab: Das Team war nicht professionell in den
                Vertriebsprozess eingebunden, und es gab keinen einheitlichen
                Ansatz. Statt direkt mit der Verhandlung zu starten, haben wir
                zuerst einen gemeinsamen Vertriebsworkshop für Vertrieb und
                Produktmanagement durchgeführt. Der Verhandlungsworkshop folgte
                zeitversetzt – mit Beispielen aus dem eigenen Tagesgeschäft.
                Heute arbeiten beide Teams auf Basis eines gemeinsamen
                Prozesses.
              </p>
            </article>

            <article className="rounded-lg border border-brand-gray-mid-light border-l-4 border-l-denver-blue bg-white p-6 shadow-md md:p-8">
              <h3 className="mb-4 text-base font-bold leading-snug text-brand-text md:text-lg">
                Vom Vertriebsleiter-Onboarding zum eigenen E-Commerce-Kanal.
              </h3>
              <p className="text-body text-brand-text">
                Ein neuer Vertriebsleiter brauchte schnell einen Überblick über
                Business, Prozesse und Team. Im ersten Workshop haben die
                Mitarbeitenden ihre eigenen Prozesse dokumentiert – der
                Vertriebsleiter beobachtete und verstand. Drei Monate später
                erkannten die Mitarbeitenden selbst Schwachstellen und
                entwickelten bessere Lösungen. Key Account Management wurde vom
                Team konzipiert, ein E-Commerce-Kanal für den Longtail-Vertrieb
                aufgebaut. Das Projekt lief über mehrere Jahre – der Vertrieb
                wurde auf allen Ebenen professionalisiert.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 8: Shopvote ─────────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <div className="w-full min-w-0 lg:w-[60%]">
              <h2 className="text-h2 font-semibold text-brand-text leading-snug mb-6 md:mb-8 lg:whitespace-nowrap">
                Was meine Klientinnen und Klienten sagen.
              </h2>
              <p className="mt-6 text-body text-brand-text">
                Empfehlungen sind die Grundlage meiner Arbeit. „Tue Gutes – und
                rede darüber" – da mir das schwerfällt, bevorzuge ich: „Tue
                Gutes – und lass darüber reden."
              </p>
              <blockquote className="my-6 ml-10 mr-8 border-l-4 border-denver-blue py-3 pl-6">
                <p className="text-xl font-medium leading-relaxed text-brand-text lg:whitespace-nowrap">
                  Über 65 verifizierte Bewertungen — 5 von 5 Sternen.
                </p>
              </blockquote>
              <p className="text-body text-brand-text">
                Alle Bewertungen werden von Shopvote unabhängig geprüft – hier
                schreiben echte Klientinnen und Klienten über ihre Erfahrungen.
              </p>
              <p className="mt-4 text-body text-brand-text">
                Das Widget zeigt die Bewertungen der letzten Wochen. Alle
                Bewertungen sind auf shopvote.de einsehbar.
              </p>
              <p className="mt-4">
                <a
                  href="https://www.shopvote.de/bewertung_mh_learncon_com_21607.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange font-semibold hover:text-denver-blue transition-colors"
                >
                  Alle Bewertungen ansehen →
                </a>
              </p>
            </div>

            <div className="mx-auto mt-10 flex w-full min-w-[250px] flex-row items-center justify-center lg:mx-0 lg:mt-0 lg:w-[45%]">
              <ShopvoteBadge />
            </div>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 9: Kontakt ───────────────────────────────────── */}
      <ContactSection />
    </div>
  );
}
