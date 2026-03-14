import type { Metadata } from "next";

import { SolutionLayout } from "@/components/sections/solutions/solution-layout";
import { dashboardAiData } from "@/config/solutions/dashboard-ai";

export const metadata: Metadata = {
  title: "Dashboard AI",
  description: dashboardAiData.subtitle,
};

export default function DashboardAiPage() {
  return <SolutionLayout data={dashboardAiData} />;
}
