"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { EASE, DURATION, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { MediaFrame } from "@/components/marketing/media-frame";

export function SourcesSection({ className }: SectionProps) {
  return (
    <Section className={className}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.normal, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>Sources — Big Data Fusion</Badge>
          <h2 className="type-title mt-6">
            Every data source, <span className="font-normal">unified</span>, governed, AI-ready
          </h2>
          <p className="type-body mt-6 text-muted-foreground">
            Aleria&apos;s proprietary ETL platform extracts, transforms and
            loads massive volumes of data from any source into a centralized
            datalake.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
          className="mt-14"
        >
          <MediaFrame label="Sources Demo" ratio="wide" className="rounded-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: DURATION.normal, delay: 0.2 }}
          className="mt-12"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
            <div className="text-center">
              <p className="type-metric text-gradient-desert-mint">145&times;</p>
              <p className="type-body-sm mt-1 text-muted-foreground">Faster than Talend</p>
            </div>
            <div className="text-center">
              <p className="type-metric">8&times;</p>
              <p className="type-body-sm mt-1 text-muted-foreground">Infra reduction</p>
            </div>
            <div className="text-center">
              <p className="type-metric">20+</p>
              <p className="type-body-sm mt-1 text-muted-foreground">Connectors</p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-2xl">
            <ul className="space-y-3">
              <li className="type-body-sm text-tertiary">
                SAP, Oracle, Salesforce, Postgres, MySQL, Azure, AWS, Excel and more
              </li>
              <li className="type-body-sm text-tertiary">
                Billions of records processed in seconds
              </li>
              <li className="type-body-sm text-tertiary">
                Full lineage, access control and governance from day one
              </li>
            </ul>

            <div className="mt-8 text-center">
              <LinkArrow href="/solutions/sources">Discover Sources</LinkArrow>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
