"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

import type { SectionProps } from "@/types";
import { fadeUp, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { EcosystemTabs } from "./ecosystem-tabs";

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
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-border/30"
        >
          <div className="h-1 gradient-desert-mint" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {pillars.map((pillar, i) => (
              <Fragment key={pillar.title}>
                <div className="p-6 transition-colors duration-300 hover:bg-muted/30 sm:p-8 md:text-center">
                  <h3 className="type-heading">{pillar.title}</h3>
                  <p className="type-body-sm mt-1 text-muted-foreground">
                    {pillar.subtitle}
                  </p>
                  <p className="type-body-sm mx-auto mt-3 max-w-[260px] text-tertiary">
                    {pillar.description}
                  </p>
                </div>

                {i < pillars.length - 1 && (
                  <div className="flex items-center justify-center py-2 md:py-0">
                    <ArrowDown
                      className="size-4 text-quaternary md:hidden"
                      aria-hidden="true"
                    />
                    <ArrowRight
                      className="hidden size-4 text-quaternary md:block"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </motion.div>

        <EcosystemTabs />
      </Container>
    </Section>
  );
}
