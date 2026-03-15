const layers = [
  {
    label: "Communication Hub",
    detail: "Interfaces, APIs, integrations",
  },
  {
    label: "Agentic AI Solutions",
    detail: "AI Employees, Flows, Video AI",
  },
  {
    label: "Aleria OS",
    detail: "Chats, Agents, Boards, Sources",
  },
  {
    label: "Data Fusion Platform",
    detail: "ETL, datalake, governance",
  },
  {
    label: "Aleria Cloud",
    detail: "Private cloud, air-gapped VM",
  },
  {
    label: "Hardware",
    detail: "NVIDIA DGX, bare-metal datacenters",
  },
];

export function FactoryStack() {
  return (
    <div className="relative flex aspect-[4/3] items-center bg-muted/40 px-8 py-8 sm:px-10">
      <div className="relative flex w-full flex-col gap-0">
        {layers.map((layer, i) => (
          <div key={layer.label} className="flex items-stretch gap-4">
            <div className="flex flex-col items-center">
              <div className="mt-2.5 size-2 shrink-0 rounded-full bg-brand-mint" />
              {i < layers.length - 1 && (
                <div className="w-px flex-1 bg-brand-mint/30" />
              )}
            </div>

            <div
              className="mb-2 flex-1 rounded-md border border-border/60 bg-background px-4 py-2.5 shadow-xs"
              style={{ opacity: 1 - i * 0.08 }}
            >
              <p className="type-label text-foreground">{layer.label}</p>
              <p className="type-body-sm mt-0.5 text-quaternary">
                {layer.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
