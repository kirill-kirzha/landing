import type { Metadata } from "next";

import { SolutionLayout } from "@/components/sections/solutions/solution-layout";
import { videoAiData } from "@/config/solutions/video-ai";

export const metadata: Metadata = {
  title: "Video AI",
  description: videoAiData.subtitle,
};

export default function VideoAiPage() {
  return <SolutionLayout data={videoAiData} />;
}
