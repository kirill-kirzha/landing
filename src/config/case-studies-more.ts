import type { CaseStudyData } from "./case-studies";

export const CASE_STUDIES_MORE: readonly CaseStudyData[] = [
  {
    slug: "sovereign-ai-distribution",
    title: "Sovereign AI for Thousands of Businesses",
    industry: "Telecom",
    location: "Middle East",
    summary:
      "A national telecom operator distributes sovereign AI to thousands of local businesses, keeping all data within national boundaries.",
    entity:
      "A major national telecommunications operator set out to bring sovereign artificial intelligence directly to the country's business ecosystem. Beyond connectivity, the organization acts as a critical digital infrastructure provider. Its ambition was to distribute a powerful and sovereign alternative to global AI platforms to thousands of local companies.",
    changeHeadline: "From disconnected tools to sovereign AI infrastructure",
    changeIntro:
      "Instead of relying on multiple external AI tools and cloud services, businesses gain access to a unified AI layer distributed through their telecom provider.",
    shifts: [
      {
        title: "A sovereign AI alternative to global platforms",
        description:
          "Businesses deploy advanced AI capabilities without sending data to foreign platforms. The infrastructure is hosted locally and operates entirely within national boundaries.",
      },
      {
        title: "AI accessible through a trusted national provider",
        description:
          "Through its distribution network, the telecom operator makes AI available to thousands of companies as part of their digital infrastructure.",
      },
      {
        title: "Operational intelligence in natural language",
        description:
          "Companies analyze financial, commercial, and operational data through simple natural-language interactions, accelerating decision-making.",
      },
    ],
    capabilities: [
      "Natural language analysis and synthesis of HR, financial, and commercial data",
      "Automated detection of weak signals: inventory shortages, credit anomalies, contractual risks",
      "Real-time reporting and dashboards for operational monitoring",
      "Direct integrations with ERP, CRM, SQL databases, and internal tools",
      "Collaborative AI workflows with instant answers and custom alerts",
      "Multiple deployment configurations: Lite, Pro, and Custom tiers",
      "Full data sovereignty through locally hosted SaaS infrastructure",
    ],
  },
  {
    slug: "real-estate-intelligence",
    title: "AI-Powered Real Estate Development Intelligence",
    industry: "Real Estate",
    location: "Middle East",
    summary:
      "A centralized development intelligence platform connected to 16 enterprise sources. Feasibility studies went from months to real time.",
    entity:
      "One of the region's largest real estate developers manages complex development programs requiring alignment of land assessment, design, feasibility, cost planning, market positioning, and sales strategy. At this scale, early-stage planning involved multiple teams, datasets, and enterprise systems. The organization needed a unified intelligence environment capable of consolidating enterprise data and embedding advanced analytics directly into the development planning process.",
    changeHeadline: "From distributed data to real-time development intelligence",
    changeIntro:
      "Aleria introduced a centralized development intelligence platform designed to transform how new real estate projects are conceived and structured.",
    shifts: [
      {
        title: "13 AI use cases supporting development planning",
        description:
          "Specialized AI capabilities support the entire early-stage lifecycle: from land recommendation and market positioning to cost benchmarking and revenue forecasting.",
      },
      {
        title: "Live enterprise data hub",
        description:
          "The platform operates as a real-time data hub connected to 16 enterprise data sources, including land banks, procurement, financial ERP, CRM, and internal development datasets.",
      },
      {
        title: "AI-powered simulation and planning engine",
        description:
          "Predictive models and AI agents perform thousands of calculations in seconds, enabling teams to simulate project configurations and design entire communities.",
      },
    ],
    capabilities: [
      "Land recommendation and site evaluation",
      "Development brief generation",
      "Global market benchmarking",
      "Construction cost benchmarking and payment plan optimization",
      "Buyer profile generation and sales absorption forecasting",
      "Smart land use and area optimization",
      "Revenue forecasting and development cost prediction",
      "All capabilities on live data from 16 connected enterprise systems",
    ],
  },
] as const;
