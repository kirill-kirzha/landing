import type { Metadata } from "next";

import { IndustryLayout } from "@/components/sections/industries/industry-layout";
import { realEstateData } from "@/config/industries/real-estate";

export const metadata: Metadata = {
  title: "Real Estate & Construction",
  description: "From data to decision in real time.",
};

export default function RealEstatePage() {
  return <IndustryLayout data={realEstateData} />;
}
