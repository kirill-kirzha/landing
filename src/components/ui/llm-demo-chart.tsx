import { cn } from "@/lib/utils";

const BARS = [
  { label: "Q2 '24", value: "22.8B", pct: 65 },
  { label: "Q3 '24", value: "23.5B", pct: 70 },
  { label: "Q4 '24", value: "25.1B", pct: 82 },
  { label: "Q1 '25", value: "27.2B", pct: 100, accent: true },
];

const BAR_HEIGHT = 56;

interface LlmDemoChartProps {
  visible: boolean;
}

export function LlmDemoChart({ visible }: LlmDemoChartProps) {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-500",
        visible ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0",
      )}
      aria-hidden="true"
    >
      <p className="mb-2 text-xs text-muted-foreground">
        Quarterly revenue trend
      </p>
      <div className="flex items-end gap-2" style={{ height: BAR_HEIGHT }}>
        {BARS.map((bar, i) => (
          <div key={bar.label} className="flex flex-1 flex-col items-center gap-1">
            <span className="text-[9px] tabular-nums text-muted-foreground">
              {bar.value}
            </span>
            <div
              className={cn(
                "w-full rounded-t transition-[height] ease-out",
                bar.accent ? "gradient-desert-mint" : "bg-brand-mint/60",
              )}
              style={{
                height: visible ? `${(bar.pct / 100) * (BAR_HEIGHT - 16)}px` : "0px",
                transitionDuration: "600ms",
                transitionDelay: `${i * 80}ms`,
              }}
            />
            <span className="text-[9px] text-quaternary">{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
