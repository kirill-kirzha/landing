import type { SolutionPageData } from "@/components/sections/solutions/solution-layout";

export const aiOsData = {
  badge: "AI OS",
  title: (
    <>
      The workspace where your organization <span className="font-normal">runs</span> on AI.
    </>
  ),
  subtitle: "One environment. Every data source. Every team. Full control.",
  problem:
    "Enterprise AI tools work in silos. Your legal team uses one tool, finance uses another, operations has a third — none of them share context, none of them connect to your actual data, and none of them execute anything. They generate text. They don't get work done. Aleria OS is different. It is the operating layer across your entire organization — connecting every data source, enabling every team and executing actions, not just generating responses.",
  features: [
    {
      title: "Sources — Data + Files, governed",
      description:
        "Connect any database, upload any file type, build governed data rooms and knowledge bases. Postgres datalake, ETL connectors and Files API with folder structure and access control. Everything Aleria touches flows through Sources — so permissions are consistent, data is never duplicated and every AI interaction has explicit context.",
    },
    {
      title: "Chats — Human interface, controlled",
      description:
        "A chat interface with model picker and granular source selector. Shared and incognito collaboration modes. Users get powerful AI assistance against the exact data they're supposed to see — without accidentally accessing workspace-wide information.",
    },
    {
      title: "Agents — AI Employees that execute",
      description:
        "Tool-using AI that operates a controlled sandbox — opening files, running code, querying databases, producing finished outputs. Not a chatbot. An agent screens 200 CVs, compares legal contracts, drafts procurement RFPs or runs financial variance checks — and delivers the result.",
    },
    {
      title: "Flows — Repeatable business processes",
      description:
        "When a task works once, Flows make it work every time. Visual canvas, triggers, versioning, structured outputs. The production runtime where business logic becomes repeatable execution.",
    },
    {
      title: "Boards — Decision surface for leadership",
      description:
        "Real-time KPI dashboards built directly from your governed data. Interactive, explorable, traceable — not static snapshots.",
    },
    {
      title: "Integration",
      description:
        "Aleria OS is the surface. Big Data Fusion is the foundation beneath it. Every product — Flows, Agents, Boards, Video AI — runs within the same workspace, on the same data, under the same governance model.",
    },
  ] as const,
  ctaLabel: "See it in Action",
  ctaHref: "/contact",
} as const satisfies SolutionPageData;
