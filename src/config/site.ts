export const siteConfig = {
  name: "Aleria",
  description:
    "Build and operate sovereign AI systems that transform your data into operational intelligence.",
  url: "https://aleria.com",
  ogImage: "https://aleria.com/og.png",
  links: {
    login: "https://id.aleria.com/in?callbackURL=https://aleria.com",
    tryAleria: "/try",
    contact: "/contact",
  },
  nav: {
    main: [
      { label: "Solutions", href: "/solutions" },
      { label: "AI Factory", href: "/ai-factory" },
      { label: "Industries", href: "/industries" },
      { label: "Customers", href: "/customers" },
      { label: "Pricing", href: "/pricing" },
      { label: "Company", href: "/company" },
    ],
    cta: {
      primary: { label: "Let's Talk", href: "/contact" },
      tryAleria: { label: "Try Aleria", href: "/try" },
      login: { label: "Log In", href: "https://id.aleria.com/in?callbackURL=https://aleria.com" },
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
