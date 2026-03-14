import type { Metadata } from "next";

import { SolutionLayout } from "@/components/sections/solutions/solution-layout";
import { agentsData } from "@/config/solutions/agents";

export const metadata: Metadata = {
  title: "Agentic Workforce",
  description: agentsData.subtitle,
};

export default function AgentsPage() {
  return <SolutionLayout data={agentsData} />;
}
