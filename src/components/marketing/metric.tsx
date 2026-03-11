import { cn } from "@/lib/utils";

interface MetricProps {
  value: string;
  label: string;
  highlight?: boolean;
  className?: string;
}

export function Metric({
  value,
  label,
  highlight = false,
  className,
}: MetricProps) {
  return (
    <div className={cn("text-center", className)}>
      <p className={cn("type-metric", highlight && "text-gradient-desert-mint")}>
        {value}
      </p>
      <p className="type-body-sm mt-1 text-muted-foreground">{label}</p>
    </div>
  );
}

interface MetricRowProps {
  className?: string;
  children: React.ReactNode;
}

export function MetricRow({ className, children }: MetricRowProps) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-3xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16",
        className,
      )}
    >
      {children}
    </div>
  );
}
