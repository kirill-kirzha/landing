import type { SolutionPageData } from "@/components/sections/solutions/solution-layout";

export const sourcesData = {
  badge: "Aleria Fusion",
  title: (
    <>
      Every data source. One <span className="font-normal">AI-ready</span> foundation.
    </>
  ),
  subtitle:
    "Proprietary ETL that processes billions of records in seconds — the foundation layer that turns fragmented data into operational intelligence.",
  problem:
    "Enterprise data is fragmented across dozens of systems that don't talk to each other. Before AI can do anything useful, that data needs to be extracted, cleaned, unified and governed. Most organizations spend more time on this than on the AI itself — and most ETL tools take hours to do what Aleria does in seconds.",
  features: [
    {
      title: "Connect to any source",
      description:
        "SAP, Oracle, Salesforce, MySQL, Postgres, Azure, AWS, Excel, XML, JSON, ODBC, Stata, Dynamics 365, Huawei, SAS and more. Universal connectors built in-house — no third-party middleware.",
    },
    {
      title: "Extract, Transform, Load",
      description:
        "Visual pipeline builder for defining transformations. Proprietary execution engine processes massive volumes with 96-second processing times against tasks that take competitors nearly 4 hours.",
    },
    {
      title: "Governed AI datalake",
      description:
        "Output lands in a centralized, organization-wide datalake — permissioned, lineage-tracked and immediately accessible to Aleria OS, Chats, Agents, Flows and Boards.",
    },
  ] as const,
  ctaLabel: "Let's Talk",
} as const satisfies SolutionPageData;
