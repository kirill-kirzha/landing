"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";

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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>Ecosystem</Badge>
          <h2 className="type-title mt-6">
            One <span className="font-normal">sovereign</span> ecosystem
          </h2>
          <p className="type-body mt-6 text-muted-foreground">
            Solutions, Infrastructure and Orchestration working together to
            deliver operational intelligence at scale.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={stagger(0.12)}
          className="mx-auto mt-20 max-w-5xl"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={fadeUp}
              className="grid grid-cols-1 gap-4 border-t border-border/20 py-10 sm:grid-cols-[60px_140px_1fr] sm:gap-6 sm:py-12"
            >
              <p className="type-display text-muted-foreground/10 max-sm:hidden" aria-hidden="true">
                {pillar.number}
              </p>
              <div>
                <h3 className="type-heading">{pillar.title}</h3>
                <p className="type-label mt-1 text-muted-foreground">
                  {pillar.subtitle}
                </p>
              </div>
              <p className="type-body-sm text-quaternary sm:pt-1">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
