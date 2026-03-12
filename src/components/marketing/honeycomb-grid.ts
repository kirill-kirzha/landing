import type { Placement } from "@/components/marketing/honeycomb-config";

export type { Placement, Intensity } from "@/components/marketing/honeycomb-config";
export { INTENSITY_CONFIG, PLACEMENTS } from "@/components/marketing/honeycomb-config";

const ROWS = 20;
const COLS = 18;
const SIZE = 30;

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
