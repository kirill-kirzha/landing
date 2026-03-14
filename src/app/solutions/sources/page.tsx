import type { Metadata } from "next";

import { SolutionLayout } from "@/components/sections/solutions/solution-layout";
import { sourcesData } from "@/config/solutions/sources";

export const metadata: Metadata = {
  title: "Aleria Fusion — Sources",
  description: sourcesData.subtitle,
};

export default function SourcesPage() {
  return <SolutionLayout data={sourcesData} />;
}
