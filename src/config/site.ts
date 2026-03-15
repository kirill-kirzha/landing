export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: readonly NavLink[];
}

export const siteConfig = {
  name: "Aleria",
  description:
    "Build and operate sovereign AI systems that transform your data into operational intelligence.",
  url: "https://aleria.com",
  ogImage: "https://aleria.com/og.png",
  links: {
    login: "https://id.aleria.com/in?callbackURL=https://aleria.com",
    contact: "/contact",
  },
  nav: {
    main: [
      {
        label: "Solutions",
        href: "/solutions",
        children: [
          { label: "Aleria Fusion", href: "/solutions/sources", description: "ETL & Data Platform" },
          { label: "AI OS", href: "/solutions/ai-os", description: "Unified Workspace" },
          { label: "Agents", href: "/solutions/agents", description: "Agentic Workforce" },
          { label: "Flows", href: "/solutions/flows", description: "Workflow Engine" },
          { label: "Dashboard AI", href: "/solutions/dashboard-ai", description: "Executive Intelligence" },
          { label: "Video AI", href: "/solutions/video-ai", description: "Vision Intelligence" },
        ],
      },
      { label: "AI Factory", href: "/ai-factory" },
      {
        label: "Industries",
        href: "/industries",
        children: [
          { label: "Government", href: "/industries/government" },
          { label: "Financial Services", href: "/industries/financial-services" },
          { label: "Real Estate", href: "/industries/real-estate-construction" },
          { label: "Telecom", href: "/industries/telecom" },
        ],
      },
      { label: "Customers", href: "/customers" },
      { label: "Pricing", href: "/pricing" },
      {
        label: "Company",
        href: "/company",
        children: [
          { label: "About Aleria", href: "/company" },
          { label: "Newsroom", href: "/company/newsroom" },
          { label: "Careers", href: "/company/careers" },
        ],
      },
    ] satisfies NavItem[],
    cta: {
      primary: { label: "Start today", href: "/pricing" },
      login: { label: "Log In", href: "https://id.aleria.com/in?callbackURL=https://aleria.com" },
    },
  },
} as const;
