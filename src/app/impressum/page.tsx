import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { impressum } from "@/data/rechtstexte";

export const metadata: Metadata = {
  title: "Impressum | MH3 LearnCon",
  description: "Impressum der MH3 LearnCon GmbH",
};

export default function ImpressumPage() {
  return <LegalPage doc={impressum} />;
}
