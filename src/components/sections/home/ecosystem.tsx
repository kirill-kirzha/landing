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
          className="mx-auto max-w-2xl text-center"
        >
          <Badge>Ecosystem</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            One sovereign ecosystem. Three pillars.
          </h2>
          <p className="text-pretty mt-5 text-lg leading-relaxed text-muted-foreground">
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
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/30 bg-border/30 md:grid-cols-3"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 } },
              }}
              className="bg-background p-10"
            >
              <p className="font-mono text-xs text-muted-foreground/30">
                {pillar.number}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {pillar.subtitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground/60">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
