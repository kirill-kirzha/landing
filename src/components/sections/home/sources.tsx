"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { cn } from "@/lib/utils";
import { fadeUp, fadeUpLg, stagger, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { WindowFrame } from "@/components/marketing/window-frame";
import { HoneycombBg } from "@/components/marketing/honeycomb-bg";

const stats = [
  { value: "145×", label: "Faster than Talend", highlight: true },
  { value: "8×", label: "Infra reduction", highlight: false },
  { value: "20+", label: "Connectors", highlight: false },
] as const;

export function SourcesSection({ className }: SectionProps) {
  return (
    <Section background="muted" divider="both" className={className}>
      <HoneycombBg placement="top-center" intensity="subtle" />
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={fadeUpLg}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="order-2 lg:order-1"
          >
            <WindowFrame title="Aleria Sources">
              <div className="aspect-[4/3] bg-background/40" />
            </WindowFrame>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={stagger(0.08)}
            className="order-1 lg:order-2"
          >
            <motion.div variants={fadeUp}>
              <Badge>Sources — Big Data Fusion</Badge>
            </motion.div>
            <motion.h2 variants={fadeUp} className="type-title mt-5">
              Every data source,{" "}
              <span className="font-normal">unified</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="type-body mt-4 max-w-lg text-muted-foreground"
            >
              Proprietary ETL platform that extracts, transforms and loads
              massive volumes from any source into a governed, AI-ready
              datalake.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-8"
            >
              {stats.map((s) => (
                <div key={s.value}>
                  <p
                    className={cn(
                      "type-metric",
                      s.highlight && "text-gradient-desert-mint",
                    )}
                  >
                    {s.value}
                  </p>
                  <p className="type-body-sm mt-1 text-tertiary">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <LinkArrow href="/solutions/sources">
                Discover Sources
              </LinkArrow>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
