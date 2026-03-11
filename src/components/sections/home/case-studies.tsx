"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { fadeIn, stagger, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { CaseStudyCard } from "@/components/marketing/case-study-card";

const caseStudies = [
  {
    client: "ALDAR",
    meta: "Real Estate \u00b7 UAE",
    description:
      "Connecting 16 enterprise sources through Flows. Feasibility studies that took months now happen in real time.",
    href: "/customers/aldar",
  },
  {
    client: "PIVOT",
    meta: "Investment Intelligence \u00b7 UAE",
    description:
      "Flows run every core process \u2014 due diligence, portfolio tracking, news monitoring. Aleria is the backbone.",
    href: "/customers/pivot",
  },
  {
    client: "IHC + FAB",
    meta: "Executive AI \u00b7 UAE",
    description:
      "The first worldwide AI Board Observer \u2014 live KPIs, NLP queries and auto-drafted minutes. Recognized at Davos WEF 2025.",
    href: "/customers/ihc-fab",
  },
] as const;

export function CaseStudiesSection({ className }: SectionProps) {
  return (
    <Section className={className}>
      <Container>
        <SectionHeader
          badge="Deployed"
          title={
            <>
              Producing <span className="font-normal">intelligence</span> in
              production today
            </>
          }
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={stagger(0.1)}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {caseStudies.map((study) => (
            <motion.div key={study.client} variants={fadeIn}>
              <CaseStudyCard {...study} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
