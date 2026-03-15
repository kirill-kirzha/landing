import type { IndustryPageData } from "@/components/sections/industries/industry-layout";

export const realEstateData: IndustryPageData = {
  badge: "Real Estate & Construction",
  title: (
    <>
      From data to <span className="font-normal">decision</span> in real time.
    </>
  ),
  subtitle: "Intelligence for the entire development cycle.",
  logos: [
    { name: "Aldar", src: "/logos/clients/aldar.png" },
    { name: "Emaar", src: "/logos/clients/emaar.svg" },
    { name: "Miral", src: "/logos/clients/miral.png" },
    { name: "Multiply Group", src: "/logos/clients/multiply-group.svg" },
  ] as const,
  beforeAfter: [
    {
      before:
        "Development data scattered across disconnected systems: land records, ERP, market data, sales forecasts",
      after:
        "Every source connected into one governed datalake. Unified development intelligence.",
    },
    {
      before:
        "Feasibility studies and concept generation take months of manual work",
      after:
        "Flows run feasibility, market benchmarking and financial scenarios automatically, in real time.",
    },
    {
      before:
        "Portfolio visibility depends on static reports compiled by analysts",
      after:
        "AI Board Observer gives live drill-down from group level to individual unit. Always current.",
    },
    {
      before:
        "Contract-heavy operations slow down legal, procurement and compliance teams",
      after:
        "Agentic Workforce handles lease reviews, vendor agreements and compliance documentation at volume and speed.",
    },
    {
      before:
        "Decisions delayed because data preparation is slower than the market",
      after:
        "Data becomes intelligence in seconds. Decision cycles match the pace of the business.",
    },
  ] as const,
  deployment: {
    title: "ALDAR X: Unified AI Development Platform",
    description:
      "Connected to 16 enterprise sources including Salesforce, Oracle and SAP. Concept generation and feasibility studies that previously took months now happen in real time.",
  },
  areas: [
    {
      title: "Development Intelligence",
      description:
        "Flows connect every data source in the development pipeline (land records, market benchmarks, construction data, sales forecasts) and run feasibility studies automatically. Concepts that took months to validate now run in real time.",
      capabilities:
        "Flows · Big Data Fusion · 16 connected enterprise sources · Automated feasibility and concept generation",
    },
    {
      title: "Portfolio Management",
      description:
        "AI Board Observer gives portfolio managers live visibility across assets, tenancy, revenue and maintenance, with drill-down from group level to individual unit. Always current. No manual report compilation.",
      capabilities:
        "AI Board Observer · Live multi-layer dashboards · Asset-level drill-down · Natural language querying",
    },
    {
      title: "Document Processing",
      description:
        "Agentic Workforce handles the contract-heavy nature of real estate: lease reviews, vendor agreements, compliance documentation, at volume and speed no human team can match.",
      capabilities:
        "Legal Agent · Procurement Agent · Overnight contract review · Structured risk summaries",
    },
    {
      title: "Site Operations",
      description:
        "Video AI monitors construction and operational sites in real time, detecting safety violations, unauthorized access and unusual patterns. Contextualized alerts reach the right person immediately.",
      capabilities:
        "Video AI · Real-time anomaly detection · Contextualized alerts · Tracking dashboards",
    },
  ] as const,
  benefits: [
    {
      benefit: "Feasibility in real time",
      impact:
        "Studies that took months now run automatically, from data to decision in minutes.",
    },
    {
      benefit: "Unified development intelligence",
      impact:
        "16+ sources connected into one governed datalake powering the entire development cycle.",
    },
    {
      benefit: "Live portfolio visibility",
      impact:
        "Group-to-unit drill-down for asset managers. Always current, never manually compiled.",
    },
    {
      benefit: "Document processing at volume",
      impact:
        "Lease reviews, vendor contracts and compliance documentation handled overnight.",
    },
    {
      benefit: "Site intelligence",
      impact:
        "Real-time monitoring across construction and operational sites with instant alerts.",
    },
  ] as const,
  caseStudies: [
    {
      client: "ALDAR",
      industry: "Real Estate",
      location: "UAE",
      description:
        "Unified AI platform connected to 16 sources including Salesforce, Oracle and SAP. Feasibility and concept generation from months to real time. Flows handle the entire integration and execution logic.",
      href: "/customers/aldar",
    },
    {
      client: "Miral",
      industry: "Real Estate & Entertainment",
      location: "UAE",
      description:
        "AI-powered intelligence for one of the UAE's leading destination and experience developers.",
      href: "/customers/miral",
    },
  ] as const,
};
