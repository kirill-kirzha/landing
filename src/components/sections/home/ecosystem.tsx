"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
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
          variants={stagger(0.12)}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={fadeUp}
              className="rounded-2xl border border-border/20 p-6 transition-all duration-300 hover:border-border/50 hover:shadow-sm sm:p-8"
            >
              <p
                className="type-display leading-none text-muted-foreground/10"
                aria-hidden="true"
              >
                {pillar.number}
              </p>
              <h3 className="type-heading mt-4">{pillar.title}</h3>
              <p className="type-label mt-1 text-muted-foreground">
                {pillar.subtitle}
              </p>
              <p className="type-body-sm mt-4 text-tertiary">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
