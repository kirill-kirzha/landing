"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import {
  type Placement,
  type Intensity,
  INTENSITY_CONFIG,
  PLACEMENTS,
  buildHexGrid,
  placementSeed,
} from "@/components/marketing/honeycomb-grid";

interface HoneycombBgProps {
  placement: Placement;
  intensity?: Intensity;
  className?: string;
}

export function HoneycombBg({
  placement,
  intensity = "medium",
  className,
}: HoneycombBgProps) {
  const config = PLACEMENTS[placement];
  const { maxOpacity, fillProb } = INTENSITY_CONFIG[intensity];
  const seed = placementSeed(placement);
  const { hexes, width, height } = buildHexGrid(
    seed,
    config.anchorX,
    config.anchorY,
    fillProb,
  );
  const strokeGradId = `hc-s-${seed}`;
  const fillGradId = `hc-f-${seed}`;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { x1, y1, x2, y2 } = config.grad;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute", config.position, className)}
      style={{
        maskImage: config.mask,
        WebkitMaskImage: config.mask,
        width: `${width}px`,
        height: `${height}px`,
        opacity: visible ? maxOpacity : 0,
        transition: "opacity 1200ms ease-out",
        willChange: "opacity",
        transform: "translateZ(0)",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`.hc-mint{stop-color:var(--brand-mint)}.hc-sand{stop-color:var(--brand-sand)}`}</style>
        <defs>
          <linearGradient id={strokeGradId} x1={x1} y1={y1} x2={x2} y2={y2}>
            <stop offset="0%" className="hc-mint" />
            <stop offset="100%" className="hc-sand" />
          </linearGradient>
          <linearGradient id={fillGradId} x1={x1} y1={y1} x2={x2} y2={y2}>
            <stop offset="0%" className="hc-mint" stopOpacity="0.9" />
            <stop offset="100%" className="hc-sand" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {hexes.map((hex, i) => (
          <polygon
            key={i}
            points={hex.points}
            stroke={`url(#${strokeGradId})`}
            strokeWidth={hex.strokeWidth}
            strokeOpacity={hex.strokeOpacity}
            fill={hex.fillPeak > 0 ? `url(#${fillGradId})` : "none"}
            fillOpacity={0}
            style={
              hex.fillPeak > 0
                ? ({
                    "--hc-fp": hex.fillPeak,
                    animation: `hc-fill ${hex.animDuration.toFixed(1)}s ease-in-out ${hex.animDelay.toFixed(1)}s infinite`,
                  } as React.CSSProperties)
                : undefined
            }
          />
        ))}
      </svg>
    </div>
  );
}
