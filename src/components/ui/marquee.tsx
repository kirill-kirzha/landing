import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  speed?: number;
  gap?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
  children: React.ReactNode;
}

export function Marquee({
  className,
  speed = 50,
  gap = "gap-12",
  pauseOnHover = true,
  reverse = false,
  children,
}: MarqueeProps) {
  const animation = reverse
    ? "animate-[marquee_var(--marquee-duration)_linear_infinite_reverse]"
    : "animate-[marquee_var(--marquee-duration)_linear_infinite]";
  const pause = pauseOnHover && "group-hover:[animation-play-state:paused]";

  return (
    <div
      className={cn("group flex overflow-hidden", gap, className)}
      style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
    >
      <div
        className={cn(
          "flex shrink-0 items-center will-change-transform",
          gap,
          animation,
          pause,
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center will-change-transform",
          gap,
          animation,
          pause,
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
