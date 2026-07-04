"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";

// Der Header wird auf den Funnel-Seiten bewusst ausgeblendet (Prozess-Sperre:
// kein Ausstieg aus dem Anmeldeprozess). Konvention: jede Route, die auf
// /fast-geschafft oder /geschafft endet, ist header-los.
const FUNNEL_ROUTE = /\/(fast-geschafft|geschafft)(\/|$)/;

export default function ConditionalHeader() {
  const pathname = usePathname();
  if (FUNNEL_ROUTE.test(pathname)) return null;
  return <Header />;
}
