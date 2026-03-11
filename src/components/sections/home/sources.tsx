"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { DURATION, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { MediaFrame } from "@/components/marketing/media-frame";
import { Metric, MetricRow } from "@/components/marketing/metric";

const features = [
  "SAP, Oracle, Salesforce, Postgres, MySQL, Azure, AWS, Excel and more",
  "Billions of records processed in seconds",
  "Full lineage, access control and governance from day one",
] as const;

export function SourcesSection({ className }: SectionProps) {
  return (
    <Section className={className}>
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
          transition={{ duration: DURATION.normal, delay: 0.1 }}
          className="mt-14"
        >
          <MediaFrame
            label="Sources Demo"
            ratio="wide"
            className="rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: DURATION.normal, delay: 0.2 }}
          className="mt-12"
        >
          <MetricRow>
            <Metric value="145×" label="Faster than Talend" highlight />
            <Metric value="8×" label="Infra reduction" />
            <Metric value="20+" label="Connectors" />
          </MetricRow>

          <div className="mx-auto mt-12 max-w-2xl">
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="type-body-sm flex items-start gap-3 text-tertiary">
                  <span
                    className="mt-[7px] block size-1.5 shrink-0 rounded-full bg-brand-mint/40"
                    aria-hidden="true"
                  />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <LinkArrow href="/solutions/sources">
                Discover Sources
              </LinkArrow>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
