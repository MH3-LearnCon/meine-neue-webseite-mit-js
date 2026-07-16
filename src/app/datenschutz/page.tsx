import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { datenschutz } from "@/data/rechtstexte";

export const metadata: Metadata = {
  title: "Datenschutz | MH3 LearnCon",
  description: "Datenschutzerklärung der MH3 LearnCon GmbH",
};

export default function DatenschutzPage() {
  return <LegalPage doc={datenschutz} />;
}
