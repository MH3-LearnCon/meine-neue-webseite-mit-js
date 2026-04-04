import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Marcus Holzheimer",
  description: "Datenschutzerklärung der MH3 LearnCon GmbH",
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-fade-in">
      <h1 className="text-h1 font-extrabold text-brand-text mb-8">Datenschutzerklärung</h1>
      <p className="text-body text-brand-gray-dark italic">
        Die vollständige Datenschutzerklärung gemäß DSGVO wird in einer späteren Phase eingepflegt.
      </p>
    </div>
  );
}
