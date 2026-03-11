import { cn } from "@/lib/utils";

interface SectionProps {
  background?: "default" | "muted";
  spacing?: "default" | "lg" | "none";
  divider?: "top" | "bottom" | "both" | "none";
  className?: string;
  children: React.ReactNode;
}

export function Section({
  background = "default",
  spacing = "default",
  divider = "none",
  className,
  children,
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        spacing === "default" && "py-28 sm:py-36",
        spacing === "lg" && "py-36 sm:py-44",
        background === "muted" && "bg-muted/15",
        className,
      )}
    >
      {(divider === "top" || divider === "both") && (
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
      )}
      {(divider === "bottom" || divider === "both") && (
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
      )}
      {children}
    </section>
  );
}
