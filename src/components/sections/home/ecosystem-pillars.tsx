const pillars = [
  { title: "Build", subtitle: "Data Foundation" },
  { title: "Deploy", subtitle: "Models & Agents" },
  { title: "Operate", subtitle: "Orchestration" },
] as const;

export function EcosystemPillars() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
        <div
          className="pointer-events-none absolute top-1 right-[20%] left-[20%] hidden md:block"
          aria-hidden="true"
        >
          <div className="line-gradient" />
        </div>

        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex flex-col items-center text-center"
          >
            <div className="relative z-10 size-2 rounded-full gradient-desert-mint" />

            <h3 className="type-title mt-5">{pillar.title}</h3>
            <p className="type-body-sm mt-1 text-muted-foreground">
              {pillar.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
