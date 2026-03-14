export const factoryLayers = [
  {
    id: "infrastructure",
    title: "Infrastructure",
    headline: "The Sovereign Foundation",
    description:
      "Physical compute that lives inside your environment — not in someone else's cloud.",
    expandedItems: [
      "NVIDIA DGX Blueprint — purpose-built AI compute architecture",
      "Air-gapped delivery — encrypted VM with zero internet dependency",
      "Your hardware, your premises — Mac Studio, DGX servers or your own infrastructure",
      "National data center capability — sovereign AI at country scale",
      "Three deployment models: On-premise, Private cloud, Air-gapped",
    ],
  },
  {
    id: "orchestration",
    title: "Orchestration",
    headline: "Extreme Compute, Fully Isolated",
    description:
      "GPU and CPU clusters managed with enterprise-grade hypervisioning.",
    expandedItems: [
      "Cluster orchestration — resources managed, allocated and optimized automatically",
      "Full network isolation — every tenant in a completely separate environment",
      "Dedicated compute paths — each client gets its own processing pipeline",
    ],
  },
  {
    id: "sources",
    title: "Sources",
    headline: "Every Data Source, Unified",
    description:
      "Universal connectors ingest, structure and govern data from any source.",
    expandedItems: [
      "400+ universal connectors — SAP, Oracle, Salesforce, AWS, Azure, legacy SQL, APIs",
      "Deep analytics & predictive modelling",
      "Extreme throughput — 500–1,000 MB/s per node with 8× data compression",
    ],
  },
  {
    id: "models",
    title: "AI Models",
    headline: "Intelligence That Runs Inside Your Walls",
    description:
      "Proprietary language models, vision and voice — deployed entirely within client environment.",
    expandedItems: [
      "Language models (LLMs) — text analysis, document processing, reasoning",
      "Computer vision models — real-time detection and tracking",
      "Voice models — speech recognition in any language",
      "Everything runs locally — no external API calls",
    ],
  },
  {
    id: "agents",
    title: "Agents & Applications",
    headline: "Where Intelligence Becomes Action",
    description:
      "Autonomous agents, custom platforms and a complete application layer.",
    expandedItems: [
      "Agent Marketplace — pre-built role-based AI Employees",
      "Custom platforms — purpose-built for your operations",
      "Super App — single AI interface for every user",
    ],
  },
] as const;
