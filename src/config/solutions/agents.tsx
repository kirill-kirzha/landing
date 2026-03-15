import type { SolutionPageData } from "@/components/sections/solutions/solution-layout";

export const agentsData = {
  badge: "Agentic Workforce",
  title: (
    <>
      AI Employees that get <span className="font-normal">work</span> done.
    </>
  ),
  subtitle:
    "Not a chatbot. A virtual colleague with a computer, skills and a role, running in the background while your team focuses on what matters.",
  problem:
    "Chat AI answers questions. It doesn't do the work. Your legal team still manually reviews 200 contracts. Your procurement team still writes every RFP from scratch. Your finance team still runs variance checks by hand. The bottleneck isn't intelligence, it's execution. Agentic Workforce closes that gap. These are AI Employees: role-defined, skill-equipped, background-running agents that produce finished outputs, not suggestions.",
  features: [
    {
      title: "A controlled environment",
      description:
        "Each AI Employee operates in a controlled sandbox. It can open and manipulate files, run Python and JavaScript, use SQL and PDF parsing tools, query live databases and produce artifacts saved back to your Sources. It is performing actions, not generating text.",
    },
    {
      title: "A Marketplace of roles",
      description:
        "Pre-built, role-based AI Employee templates: HR Agent for CV screening, Legal Agent for contract review, Finance Ops for variance checks, Procurement Agent for RFP drafting, Compliance Agent for regulatory cross-referencing, Sales Ops for account research. More roles added continuously.",
    },
    {
      title: "Skills & Templates",
      description:
        "Skills are modular capabilities you equip any AI Employee with. Templates are saved, role-ready configurations, built once and reused endlessly. Share across teams, publish organization-wide or pick from Aleria's Marketplace of proven configurations.",
    },
    {
      title: "Composing agents together",
      description:
        "Some outcomes require multiple roles working in sequence. HR + Legal + Finance, for example. Aleria supports agent chaining with narrow, specialized agents passing structured outputs to each other. How you enforce order, add approvals and make it repeatable: that's Flows.",
    },
  ] as const,
  videoSrc: "/videos/ai-employees.mp4",
  ctaLabel: "See it in Action",
  ctaHref: "/pricing",
} as const satisfies SolutionPageData;
