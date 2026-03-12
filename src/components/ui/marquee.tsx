import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  speed?: number;
  gap?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
  children: React.ReactNode;
}

export function Marquee({
  className,
  speed = 50,
  gap = 3,
  pauseOnHover = true,
  reverse = false,
  children,
}: MarqueeProps) {
  const style = {
    "--marquee-duration": `${speed}s`,
    "--marquee-gap": `${gap}rem`,
  } as React.CSSProperties;

  const gapStyle = { gap: `${gap}rem` };

  const animation = reverse
    ? "animate-[marquee_var(--marquee-duration)_linear_infinite_reverse]"
    : "animate-[marquee_var(--marquee-duration)_linear_infinite]";
  const pause = pauseOnHover && "group-hover:[animation-play-state:paused]";

  return (
    <div
      className={cn("group flex overflow-hidden", className)}
      style={{ ...style, ...gapStyle }}
    >
      <div
        className={cn(
          "flex shrink-0 items-center will-change-transform",
          animation,
          pause,
        )}
        style={gapStyle}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center will-change-transform",
          animation,
          pause,
        )}
        style={gapStyle}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
