import type { Metadata } from "next";

import { IndustryLayout } from "@/components/sections/industries/industry-layout";
import { telecomData } from "@/config/industries/telecom";

export const metadata: Metadata = {
  title: "Telecom",
  description: "AI at the infrastructure scale your network demands.",
};

export default function TelecomPage() {
  return <IndustryLayout data={telecomData} />;
}
