import type { IndustryPageData } from "@/components/sections/industries/industry-layout";

export const financialServicesData: IndustryPageData = {
  badge: "Financial Services",
  title: (
    <>
      The AI layer your <span className="font-normal">compliance</span> team
      will actually approve.
    </>
  ),
  subtitle: "Built for regulated industries.",
  logos: [
    { name: "First Abu Dhabi Bank", src: "/logos/clients/fab.svg" },
    { name: "ADIA", src: "/logos/clients/adia.svg" },
    { name: "ADX", src: "/logos/clients/adx.png" },
    { name: "Rakez", src: "/logos/clients/rakez.svg" },
    { name: "IFZA", src: "/logos/clients/ifza.png" },
    { name: "crypto.com", src: "/logos/clients/crypto-com.svg" },
    { name: "BTG Pactual", src: "/logos/clients/btg-pactual.png" },
  ] as const,
  beforeAfter: [
    {
      before:
        "AI tools fail at the first compliance review — data governance unverifiable",
      after:
        "Every deployment runs on isolated, permissioned infrastructure. Full audit trail on every AI interaction from day one.",
    },
    {
      before:
        "Contract and document review takes weeks of manual legal effort",
      after:
        "Legal Agent extracts clauses, compares versions, flags risk and produces structured summaries — overnight.",
    },
    {
      before:
        "Board members rely on quarterly snapshots and manually built presentations",
      after:
        "AI Board Observer delivers live KPIs from core banking, portfolios and operational data with instant drill-down.",
    },
    {
      before:
        "Back-office processes run on manual repetition — variance checks, expense reviews, regulatory reports",
      after:
        "Flows automate high-frequency operations with structured outputs that feed directly into downstream systems.",
    },
    {
      before:
        "Client data exposed to third-party AI providers through external API calls",
      after:
        "Models run entirely inside your perimeter. No external calls. No shared compute. No data leaving your environment.",
    },
  ] as const,
  deployment: {
    title: "IHC + First Abu Dhabi Bank — AI Board Observer",
    description:
      "AI Board Observer deployed at board level across IHC and FAB. Live KPIs, natural language queries and AI-drafted board minutes. First worldwide AI Board Observer — Aiden Insight — recognized at Davos WEF 2025.",
  },
  areas: [
    {
      title: "Data Governance",
      description:
        "Every Aleria deployment in financial services runs on isolated, permissioned infrastructure. Data stays within the client's perimeter. Models never train on client data. Full audit trail on every AI interaction — meeting regulatory requirements from day one.",
      capabilities:
        "Sovereign infrastructure · Air-gapped delivery · Full interaction audit trail · Permissioned access control",
    },
    {
      title: "Contract Intelligence",
      description:
        "Legal Agent handles the volume of contracts, term sheets and regulatory documents that financial institutions process — extracting clauses, comparing versions, flagging risk and producing structured summaries for legal review.",
      capabilities:
        "Legal Agent · Overnight contract review · Termination clause extraction · Risk flagging · Delta summaries",
    },
    {
      title: "Executive Reporting",
      description:
        "AI Board Observer connects to core banking systems, investment portfolios and operational data — giving C-suite and board members live KPI visibility with natural language querying and AI-drafted meeting minutes.",
      capabilities:
        "AI Board Observer · Live multi-layer dashboards · Natural language querying · AI-drafted minutes",
    },
    {
      title: "Operational Automation",
      description:
        "Flows automate high-frequency back-office processes — variance analysis, expense policy checks, regulatory reporting, KYC document processing — with structured outputs that feed directly into downstream systems.",
      capabilities:
        "Flows · Finance Ops Agent · Compliance Agent · Schema-validated JSON outputs · Scheduled triggers",
    },
  ] as const,
  benefits: [
    {
      benefit: "Compliance-ready from day one",
      impact:
        "Full audit trail, data isolation and governance built into the architecture — not bolted on.",
    },
    {
      benefit: "Document processing at scale",
      impact:
        "Contracts, term sheets and regulatory filings reviewed in hours, not weeks.",
    },
    {
      benefit: "Live board intelligence",
      impact:
        "Real-time KPIs and AI-drafted minutes — recognized at Davos WEF 2025.",
    },
    {
      benefit: "Back-office automation",
      impact:
        "Variance analysis, expense checks and regulatory reporting run automatically.",
    },
    {
      benefit: "Total data sovereignty",
      impact:
        "No external API calls. No model training on client data. Full perimeter control.",
    },
  ] as const,
  caseStudies: [
    {
      client: "IHC + First Abu Dhabi Bank",
      industry: "Executive AI",
      location: "UAE",
      description:
        "AI Board Observer deployed at board level. Live KPIs, natural language queries and AI-drafted board minutes. First worldwide AI Board Observer — Aiden Insight — recognized at Davos WEF 2025.",
      href: "/customers/ihc-fab",
    },
    {
      client: "BTG Pactual",
      industry: "Investment Intelligence",
      location: "Latin America",
      description:
        "AI-powered intelligence infrastructure for one of Latin America's leading investment banks.",
      href: "/customers/btg-pactual",
    },
  ] as const,
};
