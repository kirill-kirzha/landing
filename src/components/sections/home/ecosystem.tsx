"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { VIEWPORT } from "@/lib/motion";
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

        <div className="mt-14">
          <EcosystemPillars />
        </div>

        <EcosystemTabs />
      </Container>
    </Section>
  );
}
