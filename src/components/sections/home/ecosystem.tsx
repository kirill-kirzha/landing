"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { EcosystemPillars } from "./ecosystem-pillars";
import { EcosystemTabs } from "./ecosystem-tabs";

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
          className="mt-14"
        >
          <EcosystemPillars />
        </motion.div>

        <EcosystemTabs />
      </Container>
    </Section>
  );
}
