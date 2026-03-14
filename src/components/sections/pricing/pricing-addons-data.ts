export interface AddonTier {
  name: string;
  seats?: string;
  limit?: string;
  price: string | null;
}

export interface Addon {
  id: string;
  title: string;
  description: string;
  tiers: AddonTier[];
}

export const addons: Addon[] = [
  {
    id: "flows",
    title: "Flows",
    description: "Canvas-based automation engine for repeatable business processes. Build, test, version and run production-grade AI workflows.",
    tiers: [
      { name: "Starter", seats: "≤9 seats", limit: "5 flows", price: "9,990" },
      { name: "Business", seats: "≤49 seats", limit: "10 flows", price: "19,990" },
      { name: "Corporate", seats: "50+ seats", limit: "Unlimited", price: "69,990" },
    ],
  },
  {
    id: "datalake",
    title: "Datalake",
    description: "Connect external databases to Aleria with read and write capabilities. The foundation for enterprise-grade AI on live data.",
    tiers: [
      { name: "Starter", seats: "≤9 seats", limit: "10 DBs", price: "4,990" },
      { name: "Business", seats: "≤49 seats", limit: "50 DBs", price: "9,990" },
      { name: "Corporate", seats: "50+ seats", limit: "Unlimited", price: "19,990" },
    ],
  },
  {
    id: "agentic",
    title: "Agentic Workforce",
    description: "Role-based AI Employees that execute complex tasks autonomously. Background mode, unlimited file handling, database access.",
    tiers: [
      { name: "Starter", seats: "≤9 seats", limit: "10 agents", price: "9,990" },
      { name: "Business", seats: "≤49 seats", limit: "50 agents", price: "19,990" },
      { name: "Corporate", seats: "50+ seats", limit: "—", price: null },
    ],
  },
  {
    id: "etl",
    title: "ETL",
    description: "Full Big Data Fusion platform for large-scale data ingestion, transformation and loading.",
    tiers: [
      { name: "Starter", price: "32,000" },
      { name: "Business", price: "88,000" },
      { name: "Corporate", price: "110,000" },
    ],
  },
];
