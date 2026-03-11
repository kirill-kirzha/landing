"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { HoneycombBg } from "@/components/marketing/honeycomb-bg";

const pillars = [
  {
    title: "On-Premise / Private Cloud",
    description:
      "Runs entirely within your infrastructure. No external API calls. No shared compute. No data leaving your perimeter.",
  },
  {
    title: "Air-Gapped Delivery",
    description:
      "Encrypted VM on your hardware — Mac Studio, DGX, or your own servers. Zero internet. Proven at FAB, Aldar, DOF, Rakez.",
  },
  {
    title: "Sovereign AI Factory",
    description:
      "National-scale infrastructure on NVIDIA DSX Blueprint, deployed in UAE bare-metal datacenters for total independence.",
  },
] as const;

export function AiFactorySection({ className }: SectionProps) {
  return (
    <Section background="muted" divider="both" className={className}>
      <HoneycombBg placement="center-left" />
      <Container>
        <SectionHeader
          badge="AI Factory"
          title={
            <>
              Your data <span className="font-normal">never</span> leaves.
            </>
          }
          description="Your AI, your rules."
          size="lg"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={stagger(0.1)}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              className="rounded-2xl border border-border/20 bg-background/60 p-6 transition-all duration-300 hover:border-border/50 hover:shadow-sm sm:p-8"
            >
              <h3 className="type-body-sm font-medium">{pillar.title}</h3>
              <p className="type-body-sm mt-3 text-tertiary">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
