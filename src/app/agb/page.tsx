import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | Marcus Holzheimer",
  description: "Allgemeine Geschäftsbedingungen der MH3 LearnCon GmbH",
};

export default function AgbPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-fade-in">
      <h1 className="text-h1 font-extrabold text-brand-text mb-8">
        Allgemeine Geschäftsbedingungen
      </h1>
      <p className="text-body text-brand-gray-dark italic">
        Die vollständigen AGB werden in einer späteren Phase eingepflegt.
      </p>
    </div>
  );
}
