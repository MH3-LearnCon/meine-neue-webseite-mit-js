import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import ExternalQuoteCard from "@/components/ExternalQuoteCard";

export const metadata: Metadata = {
  title: "(kein) Coaching – warum Beratung | Marcus Holzheimer",
  description:
    "Warum ich (kein) Coaching anbiete – sondern Beratung mit eigener Erfahrung, fachlicher Einschätzung und klarer Meinung. Auf Augenhöhe, vertraulich.",
};

export default function KeinCoachingPage() {
  return (
    <div className="animate-fade-in">
      {/* ── Section A: Einstieg (H1 + Lead + Kern) ──────────────────── */}
      <section className="bg-white pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 font-extrabold text-brand-text leading-tight">
            (kein) Coaching
          </h1>
          <p className="text-xl font-semibold text-orange mt-3">
            Berater, nicht Coach – eine bewusste Entscheidung, keine Wertung.
          </p>

          <p className="text-base leading-relaxed text-brand-text mt-8 md:mt-10">
            Ich werde regelmäßig gefragt, ob ich Coach bin. Die Antwort ist:
            Nein – und das ist eine bewusste Positionierung, keine Wertung.
            Gute Coaches leisten wichtige Arbeit, und manche meiner Klient:innen
            arbeiten parallel mit einem Coach zusammen.
          </p>

          <p className="text-base leading-relaxed text-brand-text mt-6">
            Nach meinem Verständnis von Coaching bleibt die eigene Meinung des
            Coaches außen vor – auch indirekt über Suggestiv-Fragen. Coach:innen
            stellen ergebnisoffene, neutrale Fragen und begleiten ihre
            Klient:innen uneingeschränkt – unabhängig davon, in welche Richtung
            diese gehen und ob diese Richtung aus Sicht des Coaches die richtige
            wäre. Diese Art von Coaching biete ich nicht an.
          </p>

          <div className="mt-8">
            <ExternalQuoteCard source="Quelle: Wikipedia: Coaching, abgerufen im Mai 2026">
              Wikipedia beschreibt es heute so: Coaching ist ein
              „Sammelbegriff für unterschiedliche Beratungsmethoden“ – Einzel-,
              Team- und Projektcoaching. Der Begriff Coach ist nicht geschützt,
              es gibt keine staatlich anerkannte Ausbildung, und bezüglich
              Ausbildungsstandards und Qualitätskriterien besteht kein Konsens.
            </ExternalQuoteCard>
          </div>

          <p className="text-base leading-relaxed text-brand-text mt-8">
            Genau an dieser Stelle trennt sich mein Ansatz vom Coaching: Ich
            bringe eigene Erfahrung, fachliche Einschätzung und eine klare
            Meinung mit. Wenn ich einen Eindruck gewinne, stelle ich weitere
            Fragen – bis wir beide klar sehen. Was dann folgt, ist eine Lösung,
            die auf Ihrem Verständnis Ihrer Situation aufbaut, nicht auf meinem.
          </p>
        </div>
      </section>

      {/* ── Section B: Praxisbeispiel ─────────────────────────────── */}
      <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-[60px] h-[2px] bg-orange mx-auto mb-6 md:mb-8"
            aria-hidden="true"
          />
          <h2 className="text-h2 font-semibold text-brand-text mb-5 leading-snug">
            Wo Coaching aufhört und Beratung beginnt – an einem Beispiel.
          </h2>

          <p className="text-base leading-relaxed text-brand-text">
            Die Grenzen zwischen Coaching und Beratung sind in der Praxis
            fließend – das zeigt mir meine tägliche Arbeit. Ein Beispiel: Eine
            Klientin möchte sich und ihr Angebot strategisch besser positionieren
            und bittet mich um Unterstützung.
          </p>

          <p className="text-base leading-relaxed text-brand-text mt-6">
            Wir starten mit der Bedarfsanalyse: Welche Persönlichkeits-Merkmale,
            welche Stärken, welches Umfeld? Im besten Fall hat sie die Antworten
            parat. Wo nicht, kommen meine Erfahrung, Beispiele aus anderen
            Mandaten, meine eigene Einschätzung und mein Rat ins Spiel – damit
            wir gemeinsam zu klaren Antworten kommen. Die Arbeit ist interaktiv,
            kreativ und zu Beginn lösungsoffen – um dann Schritt für Schritt auf
            die für sie passende Lösung hinzuarbeiten.
          </p>

          <p className="text-base leading-relaxed text-brand-text mt-6">
            Genau diesen Rat suchen meine Klient:innen gezielt. Deshalb biete ich
            (kein) Coaching an – sondern Beratung.
          </p>
        </div>
      </section>

      {/* ── Section C: Kontakt ── */}
      <ContactSection
        headline="Sprechen wir miteinander."
        subtext="Sie wissen jetzt, wie ich arbeite – und was ich bewusst nicht anbiete. Wenn das zu Ihrer Situation passt, freue ich mich auf Ihren Anruf."
      />
    </div>
  );
}
