import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
  children: React.ReactNode;
}

export function Marquee({
  className,
  speed = 50,
  pauseOnHover = true,
  reverse = false,
  children,
}: MarqueeProps) {
  return (
    <div
      className={cn("group flex overflow-hidden", className)}
      style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-12",
          reverse
            ? "animate-[marquee_var(--marquee-duration)_linear_infinite_reverse]"
            : "animate-[marquee_var(--marquee-duration)_linear_infinite]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center gap-12",
          reverse
            ? "animate-[marquee_var(--marquee-duration)_linear_infinite_reverse]"
            : "animate-[marquee_var(--marquee-duration)_linear_infinite]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
