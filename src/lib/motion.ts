import type { Variants } from "framer-motion";

export const EASE: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

export const DURATION = {
  fast: 0.12,
  normal: 0.3,
  slow: 0.4,
} as const;

export const VIEWPORT = { once: true, margin: "-60px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.slow, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.slow, ease: EASE } },
};

export function stagger(delay = 0.08): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: delay } },
  };
}
