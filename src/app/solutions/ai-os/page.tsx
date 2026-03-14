import type { Metadata } from "next";

import { SolutionLayout } from "@/components/sections/solutions/solution-layout";
import { aiOsData } from "@/config/solutions/ai-os";

export const metadata: Metadata = {
  title: "AI OS",
  description: aiOsData.subtitle,
};

export default function AiOsPage() {
  return <SolutionLayout data={aiOsData} />;
}
