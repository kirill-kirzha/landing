export const EASE: [number, number, number, number] = [0.0, 0.0, 0.2, 1];

export const DURATION = {
  fast: 0.12,
  normal: 0.3,
  slow: 0.4,
} as const;

export const VIEWPORT = { once: true, margin: "-80px" } as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: EASE },
  },
};

export const fadeUpLg = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, ease: EASE },
  },
};

export function stagger(delay = 0.03) {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: delay } },
  };
}
