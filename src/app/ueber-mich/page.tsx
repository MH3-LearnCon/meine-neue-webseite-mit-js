import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über mich | Marcus Holzheimer",
  description: "Placeholder – wird befüllt",
};

export default function UeberMichPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-fade-in">
      <h1 className="text-h1 font-extrabold text-brand-text">Über mich</h1>
      <p className="mt-4 text-body text-brand-gray-dark italic">
        Seiteninhalte folgen in einer späteren Phase.
      </p>
    </div>
  );
}
