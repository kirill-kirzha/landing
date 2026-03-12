import { cn } from "@/lib/utils";
import { Badge } from "@/components/marketing/badge";

interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  size?: "default" | "lg";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  size = "default",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {badge && <Badge>{badge}</Badge>}
      <h2 className={cn(size === "lg" ? "type-display" : "type-title", badge && "mt-6")}>
        {title}
      </h2>
      {description && (
        <p className="type-body mt-6 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
