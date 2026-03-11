"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { MediaFrame } from "@/components/marketing/media-frame";

export function SourcesSection({ className }: SectionProps) {
  return (
    <Section className={className}>
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Badge>Sources</Badge>

            <h2 className="type-title mt-4">
              Every data source, unified, governed, AI-ready
            </h2>

            <p className="type-body mt-5 text-muted-foreground">
              Aleria&apos;s proprietary ETL platform extracts, transforms and
              loads massive volumes of data from any source into a centralized
              datalake.
            </p>

            <div className="mt-10 flex gap-12">
              <div>
                <p className="type-metric text-gradient-desert-mint">145&times;</p>
                <p className="type-body-sm mt-1 text-muted-foreground">Faster than Talend</p>
              </div>
              <div>
                <p className="type-metric">8&times;</p>
                <p className="type-body-sm mt-1 text-muted-foreground">Infra reduction</p>
              </div>
              <div>
                <p className="type-metric">20+</p>
                <p className="type-body-sm mt-1 text-muted-foreground">Connectors</p>
              </div>
            </div>

            <ul className="mt-10 space-y-3">
              <li className="type-body-sm text-muted-foreground/70">SAP, Oracle, Salesforce, Postgres, MySQL, Azure, AWS, Excel and more</li>
              <li className="type-body-sm text-muted-foreground/70">Billions of records processed in seconds</li>
              <li className="type-body-sm text-muted-foreground/70">Full lineage, access control and governance from day one</li>
            </ul>

            <div className="mt-8">
              <LinkArrow href="/solutions/sources">Discover Sources</LinkArrow>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            className="lg:sticky lg:top-24"
          >
            <MediaFrame label="Sources Demo" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
