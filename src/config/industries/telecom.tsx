import type { IndustryPageData } from "@/components/sections/industries/industry-layout";

export const telecomData: IndustryPageData = {
  badge: "Telecom",
  title: (
    <>
      AI at the infrastructure scale your{" "}
      <span className="font-normal">network</span> demands.
    </>
  ),
  subtitle: "Built for telecom-scale data volumes.",
  logos: [
    { name: "e&", src: "/logos/clients/eand.svg" },
  ] as const,
  beforeAfter: [
    {
      before:
        "Network, customer and operational data siloed across OSS, BSS and CRM systems",
      after:
        "Big Data Fusion connects every system into a single AI-ready foundation. Billions of records processed in seconds.",
    },
    {
      before:
        "Contract processing, service desk and compliance documentation handled manually",
      after:
        "AI Employees run customer-facing and internal operations in the background, without pulling teams from core work.",
    },
    {
      before:
        "Physical infrastructure monitored reactively. Issues discovered after impact",
      after:
        "Video AI delivers real-time anomaly detection across data centers, exchange points and retail locations.",
    },
    {
      before:
        "AI tools cannot handle telecom-scale data volumes",
      after:
        "Aleria's ETL processes billions of records in seconds. 145× faster than legacy tools, 8× infrastructure reduction.",
    },
    {
      before:
        "SMB clients lack access to enterprise-grade AI capabilities",
      after:
        "Aleria deployed through e& to enable advanced AI solutions for SMBs across every sector.",
    },
  ] as const,
  deployment: {
    title: "e& UAE: AI for SMBs at National Scale",
    description:
      "e& UAE deployed Aleria to enable advanced AI solutions for SMBs across every sector. Launched February 2025.",
  },
  areas: [
    {
      title: "Network Data",
      description:
        "Network operations, customer intelligence and enterprise service delivery all run on data at a scale most AI tools cannot handle. Big Data Fusion connects OSS, BSS and customer data systems into a single AI-ready foundation, processing billions of records in seconds.",
      capabilities:
        "Big Data Fusion · 400+ universal connectors · Governed datalake · Extreme throughput (500–1,000 MB/s per node)",
    },
    {
      title: "Customer Operations",
      description:
        "AI Employees handle the customer-facing and internal complexity: contract processing, service desk automation, compliance documentation and operational reporting. All running in background mode without taking teams away from core operations.",
      capabilities:
        "Agentic Workforce · Legal Agent · Compliance Agent · Sales Ops Agent · Background execution",
    },
    {
      title: "Infrastructure Monitoring",
      description:
        "Video AI monitors physical infrastructure (data centers, exchange points, retail locations) with real-time anomaly detection and operational dashboards. Passive surveillance transformed into active operational intelligence.",
      capabilities:
        "Video AI · Real-time detection across simultaneous streams · Contextualized alerts · Tracking dashboards",
    },
    {
      title: "SMB Enablement",
      description:
        "Aleria deployed through e& UAE to bring enterprise-grade AI capabilities to small and medium businesses across every sector, making sovereign AI accessible beyond large enterprises and government.",
      capabilities:
        "Full Aleria platform · e& partnership · National-scale SMB deployment · February 2025",
    },
  ] as const,
  benefits: [
    {
      benefit: "Telecom-scale data processing",
      impact:
        "Billions of records unified in seconds. OSS, BSS and customer systems connected into one foundation.",
    },
    {
      benefit: "Operational automation",
      impact:
        "Contract processing, service desk, compliance and reporting handled by AI Employees in the background.",
    },
    {
      benefit: "Physical infrastructure intelligence",
      impact:
        "Real-time monitoring across data centers, exchanges and retail. No human watching required.",
    },
    {
      benefit: "National-scale SMB enablement",
      impact:
        "Enterprise-grade AI made accessible to SMBs through the e& partnership.",
    },
    {
      benefit: "Proven at operator scale",
      impact:
        "Deployed with Etisalat/e& and Indosat Ooredoo Hutchison.",
    },
  ] as const,
  caseStudies: [
    {
      client: "Etisalat/e&",
      industry: "Telecom",
      location: "UAE",
      description:
        "National-scale AI partnership enabling advanced AI solutions for SMBs across every sector. Deployed February 2025.",
      href: "/customers/etisalat-eand",
    },
    {
      client: "Indosat Ooredoo Hutchison",
      industry: "Telecom",
      location: "Indonesia",
      description:
        "AI infrastructure deployed at operator scale for one of Southeast Asia's largest telecom providers.",
      href: "/customers/indosat-ooredoo",
    },
  ] as const,
};
