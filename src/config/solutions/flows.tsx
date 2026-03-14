import type { SolutionPageData } from "@/components/sections/solutions/solution-layout";

export const flowsData = {
  badge: "Flows",
  title: (
    <>
      Business logic that runs the <span className="font-normal">same</span> way
      every time.
    </>
  ),
  subtitle:
    "A production-grade execution engine for the processes your organization cannot afford to get wrong.",
  problem:
    "Every enterprise has critical processes that run on tribal knowledge, manual steps and one-off automation scripts that break whenever something changes. When AI gets added, it makes the output smarter but the process no more reliable. Flows solves that. It is the place where business logic becomes repeatable execution.",
  features: [
    {
      title: "Automate a chain of tasks",
      description:
        "A Flow takes a typed input payload and turns it into a reliable output by executing a sequence of nodes — observable, versioned and safe to run in production.",
    },
    {
      title: "Triggers",
      description:
        "Manual, scheduled (cron) or webhook from any external system. Every run starts with a defined, typed input.",
    },
    {
      title: "Canvas Graph & Nodes",
      description:
        "Directed graph with branching logic — built visually, executed deterministically. Data nodes, document nodes, model nodes, tool nodes, write-back nodes and adaptive Agent nodes.",
    },
    {
      title: "Structured Output",
      description:
        "Every Flow ends with a schema-validated JSON output — making Flows a production-grade backend that powers dashboards, applications and downstream automations.",
    },
    {
      title: "Run Trace & Versioning",
      description:
        "Every run logged with full step-by-step trace, input/output snapshots and timing. Save, promote and rollback. No change goes live without confirmation.",
    },
    {
      title: "Assisted Authoring",
      description:
        "Build manually with explicit prompts, SQL queries and parameters — or use Assisted Authoring: describe what you want, and the system generates the node configuration.",
    },
  ] as const,
  caseStudies: [
    {
      client: "ALDAR",
      industry: "Real Estate",
      location: "UAE",
      description:
        "Unified AI platform connected to 16 sources. Feasibility and concept generation from months to real time.",
      href: "/customers/aldar",
    },
    {
      client: "Pivot",
      industry: "Investment Intelligence",
      location: "UAE",
      description:
        "AI investment platform where Flows drive every core process: document ingestion, news monitoring, metric detection.",
      href: "/customers/pivot",
    },
  ] as const,
  ctaLabel: "See it in Action",
  ctaHref: "/contact",
} as const satisfies SolutionPageData;
