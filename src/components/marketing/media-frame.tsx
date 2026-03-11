import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

const ratios = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[2/1]",
} as const;

interface MediaFrameProps {
  label?: string;
  ratio?: keyof typeof ratios;
  className?: string;
}

export function MediaFrame({
  label = "Video",
  ratio = "video",
  className,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/40 bg-muted/10",
        ratios[ratio],
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-muted/20 to-transparent" />
      <div className="relative flex h-full flex-col items-center justify-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-full bg-foreground/5 transition-transform duration-200 group-hover:scale-105">
          <Play className="size-4 text-muted-foreground/60" />
        </div>
        <span className="text-xs tracking-wider text-muted-foreground/40 uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}
