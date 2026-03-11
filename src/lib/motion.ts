export const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

export const DURATION = {
  fast: 0.15,
  normal: 0.5,
  slow: 0.6,
} as const;

export const VIEWPORT = { once: true, margin: "-80px" } as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

export function stagger(delay = 0.08) {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: delay } },
  };
}
