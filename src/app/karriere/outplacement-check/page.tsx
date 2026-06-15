import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import HeroImagePlaceholder from "@/components/HeroImagePlaceholder";
import SituationCard from "@/components/SituationCard";
import HexagonBullet from "@/components/icons/HexagonBullet";
import OfferCard from "@/components/OfferCard";
import ContactSection from "@/components/ContactSection";
import { ProcessSteps } from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "Outplacement-Check | MH3 LearnCon",
  description:
    "Sie haben ein Outplacement-Angebot vorliegen? Eine unabhängige, erfahrungsbasierte Einschätzung – was wirklich drinsteckt, wo Sie nachverhandeln können und welche Optionen Sie haben. Vertraulich, auf Augenhöhe.",
};

const CHECK_PUNKTE = [
  "Eine nüchterne Einordnung, was in Ihrem Paket wirklich enthalten ist – und was davon trägt.",
  "Wo sich Nachverhandeln lohnt und wie Sie es ansprechen.",
  "Ob ein strukturiertes Programm das Richtige ist – oder ob ein paar gezielte Stunden mehr bringen.",
  "Welche Optionen Sie haben, die im Angebot gar nicht stehen.",
  "Eine ehrliche Einschätzung der Anbieter-Qualität – Outplacement-Berater ist keine geschützte Berufsbezeichnung.",
];

export default function OutplacementCheckPage() {
  return (
    <div className="animate-fade-in">
      {/* ── Abschnitt 1: Hero ─────────────────────────────────────── */}
      <section className="bg-white min-h-[60vh] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-h1 font-extrabold text-brand-text leading-tight">
                Outplacement-Check
              </h1>
              <p className="text-2xl font-semibold text-orange tracking-wide">
                Ist das Angebot, das vor Ihnen liegt, wirklich gut für Sie?
              </p>
              <p className="text-body text-brand-text leading-relaxed max-w-lg">
                Nach einer Trennung oder Umstrukturierung bekommen viele
                Führungskräfte ein Outplacement-Paket angeboten – oft vom
                Arbeitgeber bezahlt, auf den ersten Blick großzügig. Ich kenne
                diese Branche aus der Insider-Perspektive: als ehemaliger
                Auftraggeber von Beratern und als Berater. Diese Erfahrung nutze
                ich, um Ihr Angebot und Ihre Lage ehrlich einzuschätzen – damit
                Sie eine Entscheidung treffen, die Ihnen wirklich nützt.
              </p>
              <div className="flex pt-2">
                <a
                  href="tel:+491718820277"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-orange px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:border-denver-blue hover:bg-denver-blue hover:text-white"
                  aria-label="Jetzt anrufen: 0171 88 202 77"
                >
                  <Phone size={18} aria-hidden="true" />
                  0171 88 202 77
                </a>
              </div>
            </div>
            <div>
              <HeroImagePlaceholder label="Bild Outplacement-Hero folgt" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 2: Situationen ──────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8" aria-hidden="true" />
          <h2 className="text-h2 font-semibold text-brand-text mb-10 md:mb-12 leading-snug">
            Wann ein neutraler Blick hilft.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <SituationCard
              headline="Ein Paket liegt auf dem Tisch – und Sie sind unsicher, ob es gut ist."
              body="Der Arbeitgeber bietet ein Outplacement-Programm an, und es wirkt großzügig. Gleichzeitig fehlt Ihnen der Vergleichsmaßstab: Ist das Angebot auf Ihre Situation zugeschnitten oder Standard von der Stange? Genau hier hilft ein neutraler Blick, bevor Sie unterschreiben."
            />
            <SituationCard
              headline="Sie wollen den Prozess selbst in die Hand nehmen."
              body="Vielleicht möchten Sie kein vorgefertigtes Programm, sondern gezielte Unterstützung an den Stellen, die zählen. Eine ehrliche Einschätzung Ihrer Lage zeigt, welche Schritte Sie wirklich weiterbringen – und welche Sie sich sparen können."
            />
          </div>
        </div>
      </section>

      {/* ── Abschnitt 3: Was der Check liefert ────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8" aria-hidden="true" />
          <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Was der Check Ihnen liefert.
          </h2>
          <ul className="grid grid-cols-1 list-none gap-4 p-0 m-0 md:grid-cols-2" role="list">
            {CHECK_PUNKTE.map((punkt) => (
              <li
                key={punkt}
                className="flex items-start gap-3 rounded-lg border border-brand-gray-mid-light bg-white px-4 py-3 shadow-sm"
              >
                <HexagonBullet size={12} className="mt-1.5 shrink-0 text-orange" />
                <span className="text-base leading-relaxed text-brand-text">{punkt}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-l-[3px] border-orange bg-[#F5F5F5] p-5 md:p-6">
            <p className="text-base leading-relaxed text-brand-text">
              <span className="font-semibold">Outplacement-Checkliste:</span>{" "}
              Die wichtigsten Prüfpunkte auf einen Blick – damit Sie ein Angebot
              auch ohne mich einordnen können. Kostenfrei.
            </p>
            <p className="mt-3">
              <Link
                href="#kontakt"
                className="text-orange font-semibold hover:text-denver-blue transition-colors"
              >
                Zur Checkliste →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 4: Zwei Wege ────────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8" aria-hidden="true" />
          <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug mb-8 md:mb-10">
            Zwei Wege, mit mir zu arbeiten.
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
            <OfferCard title="Sie zahlen selbst" ctaHref="#kontakt" ctaText="Gespräch vereinbaren →">
              Stundenbasierte Einzelberatung und die Outplacement-Checkliste zur
              Selbsteinordnung – ohne Paketpreis, ohne Laufzeitbindung. Sie holen
              sich genau die Einschätzung und Unterstützung, die Sie brauchen.
            </OfferCard>
            <OfferCard title="Ihr Arbeitgeber zahlt" ctaHref="#kontakt" ctaText="Gespräch vereinbaren →">
              Ein schlankes Programm, das ich weitgehend selbst liefere – wenige
              Schnittstellen, ein Ansprechpartner statt einer
              Partner-Orchestrierung. Persönlich, diskret, auf Ihr Niveau
              zugeschnitten.
            </OfferCard>
          </div>
        </div>
      </section>

      {/* ── Abschnitt 5: Leitsatz ─────────────────────────────────── */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8" aria-hidden="true" />
          <blockquote className="ml-10 mr-8 border-l-4 border-denver-blue py-3 pl-6">
            <p className="text-xl font-medium leading-relaxed text-brand-text">
              Nicht das längste Programm ist das beste – sondern das wirksamste.
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── Abschnitt 6: So läuft es ab ───────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8" aria-hidden="true" />
          <h2 className="text-2xl md:text-[2rem] font-semibold text-brand-text leading-snug">
            So läuft der Check ab.
          </h2>
          <ProcessSteps
            steps={[
              {
                step: 1,
                title: "Kennenlernen.",
                body: "Sie schildern Ihre Situation und Ihr Angebot. Ich höre zu, stelle Fragen und gebe Ihnen eine erste Einordnung.",
              },
              {
                step: 2,
                title: "Ehrliche Einschätzung.",
                body: "Ich bewerte Angebot und Lage neutral – was trägt, was fehlt, wo Sie nachverhandeln können und welche Optionen Sie sonst noch haben.",
              },
              {
                step: 3,
                title: "Optionen und Umsetzung.",
                body: "Sie entscheiden, ob ein kurzes Gespräch reicht oder ob wir gezielt weiterarbeiten. Stundenbasiert, ohne Paketpreis, ohne Laufzeitbindung.",
              },
            ]}
          />
        </div>
      </section>

      {/* ── Abschnitt 7: Kontakt ──────────────────────────────────── */}
      <ContactSection
        headline="Ist das Angebot wirklich gut für Sie?"
        subtext="Ein erstes Gespräch ist kostenfrei und unverbindlich. Schildern Sie mir Ihre Situation – Sie bekommen eine ehrliche Einschätzung, ganz ohne Verkaufsdruck."
      />
    </div>
  );
}
