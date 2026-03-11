import { cn } from "@/lib/utils";

interface SectionProps {
  background?: "default" | "muted" | "dark";
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
        spacing === "default" && "py-24 sm:py-32 lg:py-40",
        spacing === "lg" && "py-32 sm:py-40 lg:py-48",
        background === "muted" && "bg-muted",
        background === "dark" && "dark bg-background text-foreground",
        className,
      )}
    >
      {(divider === "top" || divider === "both") && (
        <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" aria-hidden="true" />
      )}
      {(divider === "bottom" || divider === "both") && (
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" aria-hidden="true" />
      )}
      {children}
    </section>
  );
}
