import type { SolutionPageData } from "@/components/sections/solutions/solution-layout";

export const videoAiData = {
  badge: "Video AI",
  title: (
    <>
      Real-time intelligence across every{" "}
      <span className="font-normal">camera</span> stream.
    </>
  ),
  subtitle:
    "Thousands of simultaneous streams. One operational picture. Instant alerts.",
  problem:
    "Security and operations teams are overwhelmed by footage nobody watches until after something goes wrong. Camera infrastructure generates data continuously, and almost all of it is ignored. Video AI turns passive surveillance into active operational intelligence.",
  features: [
    {
      title: "Detection",
      description:
        "People, objects, vehicles, movements and behavioral anomalies detected in real time across any number of simultaneous streams from any camera infrastructure.",
    },
    {
      title: "Contextualized Alerts",
      description:
        "The system doesn't show you footage. It tells you what happened, where, when and why it matters, so your team responds to intelligence, not raw video.",
    },
    {
      title: "Tracking Dashboard",
      description:
        "Advanced visualization layer with live map overlays, event timelines and historical analysis. Full operational picture at any moment, with searchable history.",
    },
  ] as const,
  videoSrc: "/videos/video-ai.mp4",
  ctaLabel: "Start today",
  ctaHref: "/pricing",
} as const satisfies SolutionPageData;
