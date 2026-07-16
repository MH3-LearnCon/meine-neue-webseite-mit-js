import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { agb } from "@/data/rechtstexte";

export const metadata: Metadata = {
  title: "AGB | MH3 LearnCon",
  description: "Allgemeine Geschäftsbedingungen der MH3 LearnCon GmbH",
};

export default function AgbPage() {
  return <LegalPage doc={agb} />;
}
