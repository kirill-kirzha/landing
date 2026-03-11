"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type Placement =
  | "top-left"
  | "top-right"
  | "center-right"
  | "center-left"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";

interface HoneycombBgProps {
  placement: Placement;
  className?: string;
}

const MINT = "#00f07b";
const SAND = "#f8e8c6";
const GLOW = "#d4c9a8";
const ROWS = 18;
const COLS = 16;
const SIZE = 28;

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function placementSeed(p: Placement): number {
  let hash = 0;
  for (let i = 0; i < p.length; i++) {
    hash = (hash * 31 + p.charCodeAt(i)) % 2147483647;
  }
  return hash || 1;
}

const placements: Record<Placement, {
  anchorX: number;
  anchorY: number;
  position: string;
  mask: string;
}> = {
  "top-left": {
    anchorX: 0, anchorY: 0,
    position: "top-0 left-0",
    mask: "radial-gradient(ellipse 80% 80% at 0% 0%, black 15%, transparent 65%)",
  },
  "top-right": {
    anchorX: 1, anchorY: 0,
    position: "top-0 right-0",
    mask: "radial-gradient(ellipse 80% 80% at 100% 0%, black 15%, transparent 65%)",
  },
  "center-right": {
    anchorX: 1, anchorY: 0.5,
    position: "top-1/2 right-0 -translate-y-1/2",
    mask: "radial-gradient(ellipse 85% 90% at 100% 50%, black 15%, transparent 65%)",
  },
  "center-left": {
    anchorX: 0, anchorY: 0.5,
    position: "top-1/2 left-0 -translate-y-1/2",
    mask: "radial-gradient(ellipse 85% 90% at 0% 50%, black 15%, transparent 65%)",
  },
  "bottom-right": {
    anchorX: 1, anchorY: 1,
    position: "right-0 bottom-0",
    mask: "radial-gradient(ellipse 80% 80% at 100% 100%, black 15%, transparent 65%)",
  },
  "bottom-left": {
    anchorX: 0, anchorY: 1,
    position: "bottom-0 left-0",
    mask: "radial-gradient(ellipse 80% 80% at 0% 100%, black 15%, transparent 65%)",
  },
  "bottom-center": {
    anchorX: 0.5, anchorY: 1,
    position: "right-0 bottom-0 left-0",
    mask: "radial-gradient(ellipse 90% 75% at 50% 100%, black 15%, transparent 65%)",
  },
};

function buildHexGrid(seed: number, anchorX: number, anchorY: number) {
  const rand = seededRandom(seed);
  const w = SIZE * Math.sqrt(3);
  const h = SIZE * 2;
  const gridW = COLS * w + w / 2;
  const gridH = ROWS * h * 0.75 + h * 0.25;

  const hexPoints = (cx: number, cy: number) =>
    Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + SIZE * Math.cos(angle)},${cy + SIZE * Math.sin(angle)}`;
    }).join(" ");

  const hexes: {
    points: string;
    strokeOpacity: number;
    hasFill: boolean;
    fillOpacity: number;
  }[] = [];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cx = col * w + (row % 2 === 1 ? w / 2 : 0);
      const cy = row * h * 0.75;
      const dx = cx / gridW - anchorX;
      const dy = cy / gridH - anchorY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const distFactor = Math.max(0, 1 - dist * 1.1);
      const r = rand();

      hexes.push({
        points: hexPoints(cx, cy),
        strokeOpacity: distFactor * (0.3 + rand() * 0.7),
        hasFill: r < 0.1 && distFactor > 0.35,
        fillOpacity: 0.06 + rand() * 0.14,
      });
    }
  }

  return { hexes, width: gridW, height: gridH };
}

export function HoneycombBg({ placement, className }: HoneycombBgProps) {
  const config = placements[placement];
  const seed = placementSeed(placement);
  const { hexes, width, height } = buildHexGrid(seed, config.anchorX, config.anchorY);
  const gradId = `hc-g-${seed}`;
  const fillId = `hc-f-${seed}`;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "50px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none absolute transition-opacity duration-[2000ms] ease-out",
        visible ? "opacity-50" : "opacity-0",
        config.position,
        className,
      )}
      style={{
        maskImage: config.mask,
        WebkitMaskImage: config.mask,
        width: `${width}px`,
        height: `${height}px`,
      }}
      aria-hidden="true"
    >
      <div className="honeycomb-pulse size-full">
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: `drop-shadow(0.5px 1px 0.8px ${GLOW}30) drop-shadow(0 0 12px ${GLOW}20)` }}
        >
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={MINT} />
              <stop offset="100%" stopColor={SAND} />
            </linearGradient>
            <linearGradient id={fillId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={MINT} />
              <stop offset="100%" stopColor={SAND} />
            </linearGradient>
          </defs>
          {hexes.map((hex, i) => (
            <polygon
              key={i}
              points={hex.points}
              stroke={`url(#${gradId})`}
              strokeWidth={1}
              strokeOpacity={hex.strokeOpacity}
              fill={hex.hasFill ? `url(#${fillId})` : "none"}
              fillOpacity={hex.hasFill ? hex.fillOpacity : 0}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
