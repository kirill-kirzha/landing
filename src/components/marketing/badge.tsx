import { cn } from "@/lib/utils";

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}

export function Badge({ className, children }: BadgeProps) {
  return (
    <p className={cn("type-label text-muted-foreground", className)}>
      {children}
    </p>
  );
}
