import type { Metadata } from "next";
import { agb } from "@/data/rechtstexte";

export const metadata: Metadata = {
  title: "AGB | MH3 LearnCon",
  description: "Allgemeine Geschäftsbedingungen der MH3 LearnCon GmbH",
};

export default function AgbPage() {
  const doc = agb;
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 animate-fade-in">
      <h1 className="mb-8 text-h1 font-extrabold text-brand-text">{doc.titel}</h1>
      {doc.stand ? (
        <p className="mb-8 text-body text-brand-gray-dark">{doc.stand}</p>
      ) : null}
      {doc.einleitung?.map((p, i) => (
        <p key={i} className="mb-6 text-body text-brand-text">
          {p}
        </p>
      ))}
      <div className="space-y-8">
        {doc.abschnitte.map((a, i) => (
          <section key={i}>
            {a.titel ? (
              <h2 className="mb-2 text-lg font-semibold text-brand-text">{a.titel}</h2>
            ) : null}
            <div className="space-y-3">
              {a.absaetze.map((p, j) => (
                <p key={j} className="whitespace-pre-line text-body text-brand-text">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
