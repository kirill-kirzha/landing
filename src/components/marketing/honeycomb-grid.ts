export type Placement =
  | "top-left"
  | "top-center"
  | "top-right"
  | "center-right"
  | "center-left"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";

export type Intensity = "subtle" | "medium" | "strong";

const ROWS = 20;
const COLS = 18;
const SIZE = 30;

export const INTENSITY_CONFIG: Record<
  Intensity,
  { maxOpacity: number; fillProb: number }
> = {
  subtle: { maxOpacity: 0.48, fillProb: 0.09 },
  medium: { maxOpacity: 0.72, fillProb: 0.13 },
  strong: { maxOpacity: 0.88, fillProb: 0.20 },
};

type GradCoords = { x1: string; y1: string; x2: string; y2: string };

export const PLACEMENTS: Record<
  Placement,
  { anchorX: number; anchorY: number; position: string; mask: string; grad: GradCoords }
> = {
  "top-left": {
    anchorX: 0, anchorY: 0,
    position: "top-0 left-0",
    mask: "radial-gradient(ellipse 85% 85% at 0% 0%, black 20%, transparent 75%)",
    grad: { x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
  },
  "top-center": {
    anchorX: 0.5, anchorY: 0,
    position: "top-0 left-1/2 -translate-x-1/2",
    mask: "radial-gradient(ellipse 95% 80% at 50% 0%, black 20%, transparent 75%)",
    grad: { x1: "50%", y1: "0%", x2: "50%", y2: "100%" },
  },
  "top-right": {
    anchorX: 1, anchorY: 0,
    position: "top-0 right-0",
    mask: "radial-gradient(ellipse 85% 85% at 100% 0%, black 20%, transparent 75%)",
    grad: { x1: "100%", y1: "0%", x2: "0%", y2: "100%" },
  },
  "center-right": {
    anchorX: 1, anchorY: 0.5,
    position: "top-1/2 right-0 -translate-y-1/2",
    mask: "radial-gradient(ellipse 90% 95% at 100% 50%, black 20%, transparent 75%)",
    grad: { x1: "100%", y1: "50%", x2: "0%", y2: "50%" },
  },
  "center-left": {
    anchorX: 0, anchorY: 0.5,
    position: "top-1/2 left-0 -translate-y-1/2",
    mask: "radial-gradient(ellipse 90% 95% at 0% 50%, black 20%, transparent 75%)",
    grad: { x1: "0%", y1: "50%", x2: "100%", y2: "50%" },
  },
  "bottom-right": {
    anchorX: 1, anchorY: 1,
    position: "right-0 bottom-0",
    mask: "radial-gradient(ellipse 85% 85% at 100% 100%, black 20%, transparent 75%)",
    grad: { x1: "100%", y1: "100%", x2: "0%", y2: "0%" },
  },
  "bottom-left": {
    anchorX: 0, anchorY: 1,
    position: "bottom-0 left-0",
    mask: "radial-gradient(ellipse 85% 85% at 0% 100%, black 20%, transparent 75%)",
    grad: { x1: "0%", y1: "100%", x2: "100%", y2: "0%" },
  },
  "bottom-center": {
    anchorX: 0.5, anchorY: 1,
    position: "bottom-0 left-1/2 -translate-x-1/2",
    mask: "radial-gradient(ellipse 95% 80% at 50% 100%, black 20%, transparent 75%)",
    grad: { x1: "50%", y1: "100%", x2: "50%", y2: "0%" },
  },
};

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function placementSeed(p: Placement): number {
  let hash = 0;
  for (let i = 0; i < p.length; i++) {
    hash = (hash * 31 + p.charCodeAt(i)) % 2147483647;
  }
  return hash || 1;
}

export interface HexCell {
  points: string;
  strokeOpacity: number;
  strokeWidth: number;
  fillPeak: number;
  animDuration: number;
  animDelay: number;
}

export interface GridData {
  hexes: HexCell[];
  width: number;
  height: number;
}

export function buildHexGrid(
  seed: number,
  anchorX: number,
  anchorY: number,
  fillProb: number,
): GridData {
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

  const hexes: HexCell[] = [];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cx = col * w + (row % 2 === 1 ? w / 2 : 0);
      const cy = row * h * 0.75;
      const dx = cx / gridW - anchorX;
      const dy = cy / gridH - anchorY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const distFactor = Math.max(0, 1 - Math.pow(dist * 0.9, 1.4));

      const r = rand();
      const strokeOp = distFactor * (0.4 + rand() * 0.6);
      // fillPeak calibrated so effective opacity (fillPeak × maxOpacity) is clearly visible
      const canFill = r < fillProb && distFactor > 0.22;
      const fillPeak = canFill
        ? (0.22 + rand() * 0.18) * (0.3 + distFactor * 0.7)
        : 0;
      const dur = 6 + rand() * 8;
      const delay = -(rand() * dur);

      hexes.push({
        points: hexPoints(cx, cy),
        strokeOpacity: strokeOp,
        strokeWidth: 0.7 + distFactor * 0.7,
        fillPeak,
        animDuration: dur,
        animDelay: delay,
      });
    }
  }

  return { hexes, width: gridW, height: gridH };
}
