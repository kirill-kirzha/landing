import { cn } from "@/lib/utils";

const pillars = [
  { step: "01", title: "Build", subtitle: "Data Foundation" },
  { step: "02", title: "Deploy", subtitle: "Models & Agents" },
  { step: "03", title: "Operate", subtitle: "Orchestration" },
] as const;

export function EcosystemPillars() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="line-gradient" aria-hidden="true" />

      <div className="grid grid-cols-1 divide-y divide-border/30 pt-8 md:grid-cols-3 md:divide-x md:divide-y-0">
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className={cn(
              "flex flex-col items-center py-6 text-center md:py-0",
              i === 0 && "pt-0",
              i === pillars.length - 1 && "pb-0",
            )}
          >
            <span className="type-label text-quaternary">{pillar.step}</span>
            <h3 className="type-heading mt-2">{pillar.title}</h3>
            <p className="type-body-sm mt-1 text-tertiary">
              {pillar.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
