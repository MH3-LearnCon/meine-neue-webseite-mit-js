import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { communityDatenschutz } from "@/data/community-datenschutz";

export const metadata: Metadata = {
  title: "Datenschutz – MH3-EAZEE Community | MH3 LearnCon",
  description:
    "Datenschutzerklärung für die MH3-EAZEE Community der MH3 LearnCon GmbH.",
  // Rohbau: noindex bis zur Freigabe / zum Community-Launch.
  robots: { index: false, follow: false },
};

export default function CommunityDatenschutzPage() {
  return <LegalPage doc={communityDatenschutz} />;
}
