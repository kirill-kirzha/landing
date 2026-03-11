import Link from "next/link";

import { siteConfig } from "@/config/site";

const footerLinks = {
  solutions: {
    title: "Solutions",
    links: [
      { label: "Sources", href: "/solutions/sources" },
      { label: "AI OS \u2014 Agents", href: "/solutions/ai-os" },
      { label: "AI OS \u2014 Flows", href: "/solutions/flows" },
      { label: "Dashboard AI", href: "/solutions/dashboard-ai" },
      { label: "Video AI", href: "/solutions/video-ai" },
    ],
  },
  factory: {
    title: "AI Factory",
    links: [
      { label: "On-Premise", href: "/ai-factory#on-premise" },
      { label: "Air-Gapped", href: "/ai-factory#air-gapped" },
      { label: "Sovereign Cloud", href: "/ai-factory#sovereign" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Customers", href: "/customers" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <p className="text-sm font-medium">{section.title}</p>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground/60 transition-colors duration-150 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-10 h-px bg-border/15" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground/50">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground/50">
            Abu Dhabi, United Arab Emirates
          </p>
        </div>
      </div>
    </footer>
  );
}
