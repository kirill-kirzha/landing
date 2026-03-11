"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
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
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mx-auto mt-20 max-w-5xl"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="grid grid-cols-1 gap-4 border-t border-border/20 py-10 sm:grid-cols-[60px_140px_1fr] sm:gap-6 sm:py-12"
            >
              <p className="type-display text-muted-foreground/10 max-sm:hidden">
                {pillar.number}
              </p>
              <div>
                <h3 className="type-heading">{pillar.title}</h3>
                <p className="type-label mt-1 text-muted-foreground">
                  {pillar.subtitle}
                </p>
              </div>
              <p className="type-body-sm text-muted-foreground/60 sm:pt-1">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
