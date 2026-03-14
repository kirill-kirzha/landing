import type { Metadata } from "next";

import { IndustryLayout } from "@/components/sections/industries/industry-layout";
import { financialServicesData } from "@/config/industries/financial-services";

export const metadata: Metadata = {
  title: "Financial Services",
  description: "AI infrastructure built for regulated industries.",
};

export default function FinancialServicesPage() {
  return <IndustryLayout data={financialServicesData} />;
}
