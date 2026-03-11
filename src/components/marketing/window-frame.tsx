import { cn } from "@/lib/utils";

interface WindowFrameProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function WindowFrame({ title, children, className }: WindowFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border/50 bg-card shadow-lg",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border/30 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="size-2.5 rounded-full bg-[#EC6A5E]" />
          <div className="size-2.5 rounded-full bg-[#F4BF4F]" />
          <div className="size-2.5 rounded-full bg-[#61C554]" />
        </div>
        {title && (
          <span className="text-xs text-muted-foreground">{title}</span>
        )}
      </div>
      {children}
    </div>
  );
}
