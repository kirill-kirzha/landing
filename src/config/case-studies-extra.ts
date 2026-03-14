import type { CaseStudyData } from "./case-studies";

export const CASE_STUDIES_EXTRA: readonly CaseStudyData[] = [
  {
    slug: "maritime-governance",
    title: "AI Governance for the Maritime Industry",
    industry: "Maritime",
    location: "Middle East",
    summary:
      "The maritime sector's first AI-powered non-voting Board Observer — real-time governance across shipbuilding, fleet management, and logistics.",
    entity:
      "A leading maritime technology company operates across shipbuilding, fleet management, logistics, unmanned surface vessels, and advanced maritime manufacturing. Managing such a complex ecosystem requires constant visibility across operational performance, financial structures, supply chains, and subsidiary activities. To strengthen governance, the company introduced the maritime sector's first AI-powered non-voting Board Observer, developed with Aleria.",
    changeHeadline: "From slow reporting to AI-powered maritime governance",
    changeIntro:
      "With the new system, governance moves from periodic analysis to continuous strategic intelligence.",
    shifts: [
      {
        title: "Real-time boardroom intelligence",
        description:
          "Financial, operational, and market data are consolidated into a single AI intelligence layer, enabling leadership to access live insights during board discussions.",
      },
      {
        title: "Predictive scenario modelling",
        description:
          "The platform analyzes operational signals across fleets, projects, and subsidiaries to simulate future scenarios and anticipate risks or opportunities.",
      },
      {
        title: "Continuous oversight of complex operations",
        description:
          "By synthesizing data across ERP systems, databases, spreadsheets, and market feeds, the system enables real-time oversight across subsidiaries, joint ventures, and operational assets.",
      },
    ],
    capabilities: [
      "Live boardroom queries on operational performance, financial metrics, and market conditions",
      "Predictive scenario modelling for strategic option evaluation",
      "Budgeting and capital allocation support with AI-driven insights",
      "Automated oversight across subsidiaries and joint ventures",
      "Integrated intelligence covering shipbuilding, fleet management, logistics, and unmanned vessels",
      "Anomaly detection, performance drivers, and predictive insights",
      "Sovereign infrastructure ensuring maritime and financial data security",
    ],
  },
  {
    slug: "ai-board-observer",
    title: "First in the World AI Board Observer",
    industry: "Investment Holdings",
    location: "Middle East",
    summary:
      "The first sovereign AI Board Observer — real-time strategic intelligence for a holding group managing hundreds of billions in assets across 1,000+ entities.",
    entity:
      "A leading publicly listed holding company manages a vast portfolio of subsidiaries and strategic investments across multiple sectors. With more than a thousand entities under management and hundreds of billions in assets, governance requires continuous access to accurate data, real-time insights, and reliable decision support. The company introduced a sovereign AI Board Observer, operating entirely on-premise within the organization's infrastructure.",
    changeHeadline: "From delayed reporting to real-time boardroom intelligence",
    changeIntro:
      "Aleria introduced a new governance model where AI acts as a real-time analytical partner during board discussions.",
    shifts: [
      {
        title: "Real-time strategic intelligence",
        description:
          "Through a live newsroom and integrated data feeds, board members receive continuous updates on company performance, market developments, and global trends directly during sessions.",
      },
      {
        title: "Instant access to financial and operational insights",
        description:
          "Directors query pre-analyzed financial metrics, operational benchmarks, and portfolio performance instantly through voice or text, dramatically accelerating discussions.",
      },
      {
        title: "Sovereign AI governance",
        description:
          "Fully hosted on-premise within the organization's infrastructure, ensuring strict data sovereignty while eliminating reliance on external cloud services.",
      },
    ],
    capabilities: [
      "Live newsroom integration with real-time company, market, and economic signals",
      "Dynamic dashboards with drill-down across subsidiaries, segments, and projects",
      "Natural-language query interface for financial metrics, margins, and risk exposure",
      "Portfolio-wide analysis identifying performance drivers and risk signals",
      "Strategic recommendation engine for capital allocation and sector focus",
      "Entirely on-premise deployment ensuring sovereign data governance",
    ],
  },
] as const;
