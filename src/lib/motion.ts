// Decelerate curve: starts at full velocity, settles gracefully — ideal for reveals
export const EASE: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

export const DURATION = {
  fast: 0.15,
  normal: 0.4,
  slow: 0.5,
} as const;

// Trigger a bit before element enters view so animation is already settling
export const VIEWPORT = { once: true, margin: "-40px" } as const;

// y:8 — barely perceptible lift, just enough to feel purposeful
export const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.38, ease: EASE },
  },
};

// Tighter stagger — cards appear almost simultaneously
export function stagger(delay = 0.05) {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: delay } },
  };
}
