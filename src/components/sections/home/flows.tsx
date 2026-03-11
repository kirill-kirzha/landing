"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { MediaFrame } from "@/components/marketing/media-frame";

export function FlowsSection({ className }: SectionProps) {
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
            <Badge>AI OS — Flows</Badge>

            <h2 className="type-title mt-4">
              Business logic that runs the same way every time
            </h2>

            <p className="type-body mt-5 text-muted-foreground">
              A visual canvas for building production-grade AI workflows —
              observable, versioned and safe at enterprise scale.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="type-body-sm font-medium">Atomic nodes</p>
                <p className="type-body-sm mt-1 text-muted-foreground/70">
                  Data lookups, document processing, LLM steps, write-back and
                  adaptive Agent nodes for complex reasoning.
                </p>
              </div>
              <div>
                <p className="type-body-sm font-medium">Production-grade</p>
                <p className="type-body-sm mt-1 text-muted-foreground/70">
                  Every run traced, every version saved, every output
                  schema-validated JSON.
                </p>
              </div>
              <div>
                <p className="type-body-sm font-medium">Proven at scale</p>
                <p className="type-body-sm mt-1 text-muted-foreground/70">
                  Powers ALDAR X (16 connected sources) and Pivot (investment
                  due diligence, end-to-end).
                </p>
              </div>
            </div>

            <div className="mt-8">
              <LinkArrow href="/solutions/flows">Discover Flows</LinkArrow>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            className="lg:sticky lg:top-24"
          >
            <MediaFrame label="Flows Demo" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
