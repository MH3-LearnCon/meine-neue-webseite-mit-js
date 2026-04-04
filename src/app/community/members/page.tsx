import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Members | Marcus Holzheimer",
  description: "Placeholder – wird befüllt",
};

export default function CommunityMembersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-fade-in">
      <h1 className="text-h1 font-extrabold text-brand-text">Community Members</h1>
      <p className="mt-4 text-body text-brand-gray-dark italic">
        Dieser Bereich ist geschützt und wird in einer späteren Ausbaustufe aktiviert.
      </p>
    </div>
  );
}
