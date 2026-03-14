import type { Metadata } from "next";

import { SolutionLayout } from "@/components/sections/solutions/solution-layout";
import { flowsData } from "@/config/solutions/flows";

export const metadata: Metadata = {
  title: "Flows",
  description: flowsData.subtitle,
};

export default function FlowsPage() {
  return <SolutionLayout data={flowsData} />;
}
