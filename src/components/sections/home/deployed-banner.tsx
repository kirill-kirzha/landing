import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    client: "ALDAR",
    logo: "/logos/clients/aldar.png",
    industry: "Real Estate",
    location: "UAE",
    result: "16 sources unified, feasibility in real time",
    href: "/customers/aldar",
  },
  {
    client: "PIVOT",
    industry: "Investment Intelligence",
    location: "UAE",
    result: "AI backbone for due diligence & portfolio ops",
    href: "/customers/pivot",
  },
  {
    client: "IHC",
    logo: "/logos/clients/ihc.png",
    industry: "Holding Group",
    location: "UAE",
    result: "AI Board Observer deployed at executive level",
    href: "/customers/ihc",
  },
  {
    client: "FAB",
    logo: "/logos/clients/fab.svg",
    industry: "Banking",
    location: "UAE",
    result: "AI-drafted board minutes & live KPIs — recognized at Davos WEF",
    href: "/customers/fab",
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
                {"logo" in study && study.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={study.logo}
                    alt={study.client}
                    loading="lazy"
                    decoding="async"
                    className="h-5 w-auto shrink-0 brightness-0 invert"
                  />
                ) : (
                  <span className="text-sm font-semibold text-foreground">
                    {study.client}
                  </span>
                )}
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
