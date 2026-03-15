import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    client: "Government Authority",
    industry: "Government",
    location: "Middle East",
    result:
      "Legislation transformed into operational intelligence with automated global benchmarking for drafting new laws",
    href: "/customers/augmented-legislation",
  },
  {
    client: "National Telecom Operator",
    industry: "Telecom",
    location: "Middle East",
    result:
      "Sovereign AI distributed to thousands of local businesses, all data within national boundaries",
    href: "/customers/sovereign-ai-distribution",
  },
  {
    client: "Leading Real Estate Developer",
    industry: "Real Estate",
    location: "Middle East",
    result:
      "16 enterprise sources unified into a centralized development intelligence platform, feasibility in real time",
    href: "/customers/real-estate-intelligence",
  },
  {
    client: "Investment Holdings Group",
    industry: "Investment Holdings",
    location: "Middle East",
    result:
      "First sovereign AI Board Observer delivering real-time strategic intelligence across 1,000+ entities",
    href: "/customers/ai-board-observer",
  },
] as const;

export function DeployedBanner() {
  return (
    <div className="dark mt-10 overflow-hidden rounded-2xl bg-background">
      <div className="h-px gradient-desert-mint" aria-hidden="true" />

      <div className="px-6 pt-6 pb-2 sm:px-8 sm:pt-8">
        <p className="type-label text-quaternary">Deployed in production</p>
        <p className="type-heading mt-3 text-foreground">
          Producing intelligence in production today.
        </p>
      </div>

      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2">
        {caseStudies.map((study) => (
          <Link
            key={study.client}
            href={study.href}
            className="group flex flex-col justify-between border-t border-border/10 px-6 py-5 transition-colors hover:bg-card/50 focus-ring sm:px-8 sm:py-6"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-foreground">
                  {study.client}
                </span>
                <span className="type-body-sm text-quaternary">
                  {study.industry} · {study.location}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {study.result}
              </p>
            </div>

            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-quaternary transition-colors group-hover:text-foreground">
              Read case study
              <ArrowRight
                className="size-3 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
