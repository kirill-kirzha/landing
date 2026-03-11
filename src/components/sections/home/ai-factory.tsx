"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { cn } from "@/lib/utils";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";

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
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>AI Factory</Badge>
          <h2 className="type-display mt-6">
            Your data <span className="font-normal">never</span> leaves.
          </h2>
          <p className="type-body mt-6 text-muted-foreground">
            Your AI, your rules.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mx-auto mt-20 max-w-4xl"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 } },
              }}
              className={cn(
                "py-8",
                idx < pillars.length - 1 && "border-b border-border/20",
              )}
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-[200px_1fr] sm:gap-12">
                <p className="type-body-sm font-medium">{pillar.title}</p>
                <p className="type-body-sm text-muted-foreground/70">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
