"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { cn } from "@/lib/utils";
import { EASE, DURATION, VIEWPORT, fadeUp, stagger } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { MediaFrame } from "@/components/marketing/media-frame";
import { HoneycombBg } from "@/components/marketing/honeycomb-bg";

const stats = [
  {
    value: "145×",
    label: "Faster than Talend",
    description: "Billions of records processed in seconds",
  },
  {
    value: "8×",
    label: "Infra reduction",
    description:
      "Full lineage, access control and governance from day one",
  },
  {
    value: "20+",
    label: "Connectors",
    description:
      "SAP, Oracle, Salesforce, Postgres, MySQL, Azure, AWS, Excel and more",
  },
] as const;

export function SourcesSection({ className }: SectionProps) {
  return (
    <Section className={className}>
      <HoneycombBg placement="top-center" intensity="subtle" />
      <Container>
        <SectionHeader
          badge="Sources — Big Data Fusion"
          title={
            <>
              Every data source,{" "}
              <span className="font-normal">unified</span>, governed, AI-ready
            </>
          }
          description="Aleria's proprietary ETL platform extracts, transforms and loads massive volumes of data from any source into a centralized datalake."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.normal, delay: 0.1, ease: EASE }}
          className="mt-14"
        >
          <MediaFrame
            label="Sources Demo"
            ratio="wide"
            className="rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger(0.12)}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div key={stat.value} variants={fadeUp}>
              <p
                className={cn(
                  "type-metric",
                  i === 0 && "text-gradient-desert-mint",
                )}
              >
                {stat.value}
              </p>
              <p className="type-label mt-2 text-muted-foreground">
                {stat.label}
              </p>
              <p className="type-body-sm mt-3 text-tertiary">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.normal, delay: 0.3, ease: EASE }}
          className="mt-12 text-center"
        >
          <LinkArrow href="/solutions/sources">Discover Sources</LinkArrow>
        </motion.div>
      </Container>
    </Section>
  );
}
