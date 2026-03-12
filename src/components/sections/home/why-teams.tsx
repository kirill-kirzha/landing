"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { reveal, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { TextRotator } from "@/components/ui/text-rotator";
import { BubbleMarquee } from "@/components/sections/home/why-teams-grid";
import { DeployedBanner } from "./deployed-banner";
import { HoneycombBg } from "@/components/marketing/honeycomb-bg";

const industries = [
  "Finance",
  "Real Estate",
  "Government",
  "Energy",
  "Telecom",
  "Healthcare",
] as const;

export function WhyTeamsSection({ className }: SectionProps) {
  return (
    <Section className={className}>
      <HoneycombBg placement="top-right" intensity="subtle" />
      <Container>
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>Why teams prefer us</Badge>
          <h2 className="type-title mt-6">
            <span className="font-normal">Trusted</span> by{" "}
            <TextRotator
              words={industries}
              className="min-w-[120px] text-left sm:min-w-[150px]"
            />
          </h2>
        </motion.div>
      </Container>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={reveal}
        className="mt-14"
      >
        <BubbleMarquee />
      </motion.div>

      <Container>
        <DeployedBanner />
      </Container>
    </Section>
  );
}
