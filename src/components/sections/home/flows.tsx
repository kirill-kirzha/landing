"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { EASE, DURATION, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { MediaFrame } from "@/components/marketing/media-frame";

export function FlowsSection({ className }: SectionProps) {
  return (
    <Section className={className}>
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: DURATION.normal, ease: EASE }}
          >
            <Badge>AI OS — Flows</Badge>

            <h2 className="type-title mt-6">
              <span className="font-normal">Business</span> logic that runs the same way every time
            </h2>

            <p className="type-body mt-6 text-muted-foreground">
              A visual canvas for building production-grade AI workflows —
              observable, versioned and safe at enterprise scale.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="type-body-sm font-medium">Atomic nodes</p>
                <p className="type-body-sm mt-1 text-tertiary">
                  Data lookups, document processing, LLM steps, write-back and
                  adaptive Agent nodes for complex reasoning.
                </p>
              </div>
              <div>
                <p className="type-body-sm font-medium">Production-grade</p>
                <p className="type-body-sm mt-1 text-tertiary">
                  Every run traced, every version saved, every output
                  schema-validated JSON.
                </p>
              </div>
              <div>
                <p className="type-body-sm font-medium">Proven at scale</p>
                <p className="type-body-sm mt-1 text-tertiary">
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
            viewport={VIEWPORT}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
            className="lg:sticky lg:top-24"
          >
            <MediaFrame label="Flows Demo" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
