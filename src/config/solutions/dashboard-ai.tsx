import type { SolutionPageData } from "@/components/sections/solutions/solution-layout";

export const dashboardAiData = {
  badge: "Dashboard AI",
  title: (
    <>
      Full visibility. <span className="font-normal">Instant</span> insight. At
      every level.
    </>
  ),
  subtitle:
    "A live decision-making environment for boards and executives — built on your data, not on slides someone prepared last week.",
  problem:
    "Board members and executives make decisions from quarterly snapshots, manually built dashboards and prepared presentations. By the time the data reaches them, it's out of date. When they have a question, there's no answer until someone builds another slide. Aleria Boards is the upgrade. Not a reporting tool — a real decision-making surface where every question gets an instant, drillable, traceable answer from live data.",
  features: [
    {
      title: "Data Connection",
      description:
        "Connects directly to your Aleria datalake — no Metabase, no separate BI tool. Inherits all Source permissions. Every board member sees exactly what they're supposed to see.",
    },
    {
      title: "Context & Schema Analysis",
      description:
        "Reads your database structure, understands relationships, builds a Business Context Model that maps your data to your organization's actual metrics and KPIs.",
    },
    {
      title: "Metric Discovery",
      description:
        "Proposes relevant KPIs based on your data context. Prioritizes by coverage, suggests segmentations, generates the queries automatically — deterministic and reproducible.",
    },
    {
      title: "Live Multi-Layer Dashboards",
      description:
        "Group-wide overview down to granular operational metrics. Revenue by region, by product line, by customer segment — all in one place, always current.",
    },
    {
      title: "Ask About Anything",
      description:
        "Natural language questions return instant charts, analysis and AI-curated insights. Ask a question, get an answer — not a ticket to the analytics team.",
    },
    {
      title: "News & Market Intelligence",
      description:
        "Real-time business news curated to your company and sector — surfaced inside the board environment so leadership has market context alongside internal performance.",
    },
    {
      title: "AI Transcript",
      description:
        "Record board meetings in any language. Auto-drafted minutes delivered directly to participants after the session.",
    },
  ] as const,
  caseStudies: [
    {
      client: "IHC + FAB",
      industry: "Executive AI",
      location: "UAE",
      description:
        "First worldwide AI Board Observer — Aiden Insight — deployed at IHC and FAB. Recognized at Davos WEF 2025.",
      href: "/customers/ihc",
    },
  ] as const,
  ctaLabel: "Let's Talk",
  ctaHref: "/contact",
} as const satisfies SolutionPageData;
