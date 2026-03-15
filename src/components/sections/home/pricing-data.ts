export type Currency = "AED" | "USD";

export interface PlanFeature {
  name: string;
  included: boolean | "soon";
}

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: { aed: number; usd: number } | null;
  isFree?: boolean;
  isEnterprise?: boolean;
  highlighted?: boolean;
  cta: { label: string; href: string };
  features: PlanFeature[];
  limits: string[];
}

export const currencies = [
  { id: "USD" as Currency, label: "USD ($)" },
  { id: "AED" as Currency, label: "AED" },
] as const;

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "Get started with Aleria\u2019s core AI capabilities",
    price: null,
    isFree: true,
    cta: { label: "Get Started", href: "/pricing" },
    features: [
      { name: "Chat", included: true },
      { name: "Reports", included: true },
      { name: "Agentic mode", included: true },
      { name: "Sources", included: false },
      { name: "Workspaces", included: false },
      { name: "Integrations", included: false },
      { name: "Team management", included: false },
      { name: "API access", included: false },
    ],
    limits: ["5 messages / hour", "1 report / day", "1 agentic task / day", "100 MB storage"],
  },
  {
    id: "personal",
    name: "Personal",
    tagline: "Personal AI assistant with key functionality",
    price: { aed: 99, usd: 29 },
    cta: { label: "Start Free Trial", href: "/pricing" },
    features: [
      { name: "Chat", included: true },
      { name: "Reports", included: true },
      { name: "Agentic mode", included: true },
      { name: "Sources", included: true },
      { name: "Workspaces", included: false },
      { name: "Integrations", included: false },
      { name: "Team management", included: false },
      { name: "API access", included: false },
    ],
    limits: ["Unlimited messages", "Unlimited reports", "Personal agentic use", "5 GB storage"],
  },
  {
    id: "business",
    name: "Business",
    tagline: "AI platform with top-notch capabilities for teams",
    price: { aed: 490, usd: 139 },
    highlighted: true,
    cta: { label: "Start Free Trial", href: "/pricing" },
    features: [
      { name: "Chat", included: true },
      { name: "Reports", included: true },
      { name: "Agentic mode", included: true },
      { name: "Sources", included: true },
      { name: "Workspaces", included: true },
      { name: "Integrations", included: true },
      { name: "Team management", included: true },
      { name: "API access", included: "soon" },
    ],
    limits: ["Unlimited messages", "Unlimited reports", "Enhanced agentic use", "20 GB / user"],
  },
  {
    id: "corporate",
    name: "Corporate",
    tagline: "Custom solutions built on Aleria\u2019s full product suite",
    price: null,
    isEnterprise: true,
    cta: { label: "Contact Sales", href: "/contact" },
    features: [
      { name: "Everything in Business", included: true },
      { name: "Dedicated infrastructure", included: true },
      { name: "Custom integrations", included: true },
      { name: "Priority support & SLA", included: true },
      { name: "Full API access", included: true },
    ],
    limits: ["Custom limits", "Dedicated support", "SLA guarantee", "Custom storage"],
  },
];
