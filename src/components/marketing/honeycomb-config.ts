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
