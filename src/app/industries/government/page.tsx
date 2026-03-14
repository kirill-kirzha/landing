import type { Metadata } from "next";

import { IndustryLayout } from "@/components/sections/industries/industry-layout";
import { governmentData } from "@/config/industries/government";

export const metadata: Metadata = {
  title: "Government & Public Sector",
  description: "Sovereign AI infrastructure for national institutions.",
};

export default function GovernmentPage() {
  return <IndustryLayout data={governmentData} />;
}
