import type { IndustryPageData } from "@/components/sections/industries/industry-layout";

export const governmentData: IndustryPageData = {
  badge: "Government & Public Sector",
  title: (
    <>
      AI infrastructure that stays within{" "}
      <span className="font-normal">your</span> borders.
    </>
  ),
  subtitle: "Sovereign AI for national institutions.",
  logos: [
    { name: "UAE Presidential Court", src: "/logos/clients/uae-presidential-court.png" },
    { name: "Abu Dhabi Cyber Security Council", src: "/logos/clients/adcsc.png" },
    { name: "Ministry of Foreign Affairs", src: "/logos/clients/mofaic.png" },
    { name: "ADAA", src: "/logos/clients/adaa.svg" },
    { name: "Department of Municipalities & Transport", src: "/logos/clients/dmt.svg" },
    { name: "Department of Culture & Tourism", src: "/logos/clients/dct.png" },
  ] as const,
  beforeAfter: [
    {
      before:
        "Data fragmented across dozens of disconnected legacy systems. No unified view",
      after:
        "Every system connected into a single governed datalake. One source of truth across all departments.",
    },
    {
      before:
        "AI tools rejected by procurement and security. Data sovereignty unverifiable",
      after:
        "Sovereign by architecture. On-premise, private cloud or air-gapped. Data never leaves your infrastructure.",
    },
    {
      before:
        "Cross-departmental processes run on manual hand-offs, paper trails and tribal knowledge",
      after:
        "Flows automate procurement pipelines, compliance reporting and citizen service routing, with full audit trail.",
    },
    {
      before:
        "Executive visibility depends on manually prepared snapshots and quarterly reports",
      after:
        "AI Board Observer delivers live KPIs, drill-down transparency and traceable decision logs in real time.",
    },
    {
      before:
        "Months-long evaluation cycles for AI vendors with no proven government deployments",
      after:
        "Aleria is deployed and proven at the highest levels of government: from presidential courts to national cybersecurity.",
    },
  ] as const,
  deployment: {
    title: "Sovereign AI Factory: UAE National Infrastructure",
    description:
      "Aleria designed and built sovereign AI infrastructure at national scale for the UAE: a fully operational AI Factory powering government and enterprise intelligence across the country. Built on the NVIDIA DGX architecture and DDN AI-optimized storage.",
  },
  areas: [
    {
      title: "Data Sovereignty",
      description:
        "Every deployment option (on-premise, private cloud or Sovereign AI Factory) guarantees that data never leaves government infrastructure. No external API calls. No model training on government data. Full technological independence.",
      capabilities:
        "Sovereign AI Factory on NVIDIA DGX Blueprint · Air-gapped delivery · Hardware-isolated zero-trust security",
    },
    {
      title: "Legacy System Integration",
      description:
        "Big Data Fusion connects to every system government organizations run, from decades-old Oracle databases to modern cloud platforms, unifying them into a single governed datalake without replacing existing infrastructure.",
      capabilities:
        "Big Data Fusion · 400+ universal connectors · Governed datalake with full lineage and access control",
    },
    {
      title: "Workflow Automation",
      description:
        "Flows automate the cross-departmental processes that currently run on manual hand-offs: procurement pipelines, compliance reporting, citizen service routing, with full audit trail and version control.",
      capabilities:
        "Flows · Agentic Workforce (Procurement Agent, Compliance Agent) · Structured JSON outputs feeding downstream systems",
    },
    {
      title: "Executive Visibility",
      description:
        "AI Board Observer gives ministry leadership and oversight bodies real-time access to operational metrics, with drill-down transparency and traceable decision logs. Natural language querying and AI-drafted meeting minutes.",
      capabilities:
        "AI Board Observer · Live KPI dashboards · AI-drafted minutes · Multi-language transcription",
    },
  ] as const,
  benefits: [
    {
      benefit: "Data sovereignty",
      impact:
        "Total control. No data leaves government infrastructure. No external dependencies.",
    },
    {
      benefit: "Legacy modernization without replacement",
      impact:
        "Connect existing systems into one AI-ready foundation. No rip-and-replace.",
    },
    {
      benefit: "Automation of manual processes",
      impact:
        "Procurement, compliance and departmental workflows automated with full audit trail.",
    },
    {
      benefit: "Real-time executive visibility",
      impact:
        "Live decision-making surface for leadership, not quarterly snapshots.",
    },
    {
      benefit: "Proven at the highest levels",
      impact:
        "Deployed at presidential courts, national cybersecurity and ministerial operations.",
    },
  ] as const,
  caseStudies: [
    {
      client: "UAE Presidential Court",
      industry: "Government",
      location: "UAE",
      description:
        "Sovereign AI deployment at the highest level of government. Full data sovereignty, air-gapped delivery, operational intelligence at national scale.",
      href: "/customers/uae-presidential-court",
    },
    {
      client: "Abu Dhabi Cyber Security Council",
      industry: "Government",
      location: "UAE",
      description:
        "AI-powered intelligence infrastructure for national cybersecurity operations.",
      href: "/customers/abu-dhabi-cyber-security-council",
    },
    {
      client: "Indonesia Government",
      industry: "Government",
      location: "Indonesia",
      description:
        "Government-scale AI deployment for national operations and citizen services.",
      href: "/customers/indonesia-government",
    },
  ] as const,
};
