export const ecosystemTabs = [
  {
    id: "sources",
    label: "Sources",
    windowTitle: "Aleria Sources",
    videoSrc: "/videos/sources.mp4",
    headline: "Every data source, unified, governed, AI-ready",
    description:
      "Proprietary ETL that extracts, transforms and loads massive volumes of data from any source into a centralized datalake. The foundation that turns fragmented data into operational intelligence.",
    cta: { text: "Explore Sources", href: "/solutions/sources" },
  },
  {
    id: "ai-employees",
    label: "AI Employees",
    windowTitle: "Aleria AI OS",
    videoSrc: "/videos/ai-employees.mp4",
    headline: "AI Employees that execute, not just answer",
    description:
      "Role-based AI Employees that operate autonomously in a controlled environment. They open files, run code, query databases and produce finished outputs.",
    cta: { text: "Explore Agentic Workforce", href: "/solutions/agents" },
  },
  {
    id: "flows",
    label: "Flows",
    windowTitle: "Aleria Flows",
    videoSrc: "/videos/flows.mp4",
    headline: "Business logic that runs the same way every time",
    description:
      "A visual canvas for building production-grade AI workflows. Set a trigger, define the steps, produce reliable operational intelligence. Observable, versioned and safe to run at enterprise scale.",
    cta: { text: "Explore Flows", href: "/solutions/flows" },
  },
  {
    id: "dashboard",
    label: "Dashboard AI",
    windowTitle: "Aleria Dashboard",
    videoSrc: "/videos/dashboard-ai.mp4",
    headline: "Executive intelligence. Live, explorable, traceable",
    description:
      "A decision-making surface for boards and C-suite that connects directly to your governed data. Not a static dashboard, but a live environment where any question gets an instant, drillable answer.",
    cta: { text: "Explore Dashboard AI", href: "/solutions/dashboard-ai" },
  },
  {
    id: "video-ai",
    label: "Video AI",
    windowTitle: "Aleria Video AI",
    videoSrc: "/videos/video-ai.mp4",
    headline: "Real-time intelligence across every camera stream",
    description:
      "Handles thousands of simultaneous video streams with AI that detects, tracks and alerts. Transforming passive surveillance into an active operational layer.",
    cta: { text: "Explore Video AI", href: "/solutions/video-ai" },
  },
] as const;
