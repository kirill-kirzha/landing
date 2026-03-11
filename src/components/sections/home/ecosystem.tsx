"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { EASE, DURATION, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";

const pillars = [
  {
    number: "01",
    title: "Build",
    subtitle: "Data Foundation",
    description:
      "Connect, extract and transform data from any source into a governed, AI-ready datalake.",
  },
  {
    number: "02",
    title: "Deploy",
    subtitle: "AI Models & Agents",
    description:
      "Deploy autonomous AI employees and production-grade workflows on your own infrastructure.",
  },
  {
    number: "03",
    title: "Operate",
    subtitle: "Orchestration",
    description:
      "Monitor, version and scale your AI operations with full observability and sovereign control.",
  },
] as const;

const NODE_CENTER = 22;

const lineH = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.4, ease: EASE } },
};

const lineV = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 1.4, ease: EASE } },
};

function stepReveal(index: number) {
  return {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: DURATION.normal,
        delay: 0.2 + index * 0.18,
        ease: EASE,
      },
    },
  };
}

function nodeReveal(index: number) {
  return {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: DURATION.slow,
        delay: 0.2 + index * 0.18,
        ease: EASE,
      },
    },
  };
}

export function EcosystemSection({ className }: SectionProps) {
  return (
    <Section className={className}>
      <Container>
        <SectionHeader
          badge="Ecosystem"
          title={
            <>
              One <span className="font-normal">sovereign</span> ecosystem
            </>
          }
          description="Solutions, Infrastructure and Orchestration working together to deliver operational intelligence at scale."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <motion.div
            variants={lineH}
            className="absolute hidden h-0.5 origin-left md:block"
            style={{
              top: NODE_CENTER,
              left: "calc(100% / 6)",
              right: "calc(100% / 6)",
              background:
                "linear-gradient(90deg, var(--brand-mint), var(--brand-sand))",
            }}
            aria-hidden="true"
          />

          <motion.div
            variants={lineV}
            className="absolute w-0.5 origin-top md:hidden"
            style={{
              left: NODE_CENTER - 1,
              top: NODE_CENTER,
              bottom: 0,
              background:
                "linear-gradient(180deg, var(--brand-mint), var(--brand-sand) 80%, transparent)",
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.number}
                variants={stepReveal(i)}
                className="group flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center"
              >
                <motion.div
                  variants={nodeReveal(i)}
                  className="relative z-10 flex size-[44px] shrink-0 items-center justify-center rounded-full border-gradient shadow-[0_0_16px_-3px_oklch(0.84_0.15_155/0.2)] transition-shadow duration-300 group-hover:shadow-[0_0_24px_-3px_oklch(0.84_0.15_155/0.4)]"
                >
                  <span className="type-label text-muted-foreground">
                    {pillar.number}
                  </span>
                </motion.div>

                <div className="md:mt-8">
                  <h3 className="type-heading">{pillar.title}</h3>
                  <p className="type-label mt-1 text-muted-foreground">
                    {pillar.subtitle}
                  </p>
                  <p className="type-body-sm mt-3 max-w-[280px] text-tertiary md:mx-auto">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
