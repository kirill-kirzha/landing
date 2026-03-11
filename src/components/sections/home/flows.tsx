"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { fadeUp, stagger, DURATION, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { MediaFrame } from "@/components/marketing/media-frame";

const features = [
  {
    title: "Atomic nodes",
    description:
      "Data lookups, document processing, LLM steps, write-back and adaptive Agent nodes for complex reasoning.",
  },
  {
    title: "Production-grade",
    description:
      "Every run traced, every version saved, every output schema-validated JSON — not a prototype.",
  },
  {
    title: "Proven at scale",
    description:
      "Powers ALDAR X (16 connected sources) and Pivot (investment due diligence, end-to-end).",
  },
] as const;

export function FlowsSection({ className }: SectionProps) {
  return (
    <Section className={className}>
      <Container>
        <SectionHeader
          badge="AI OS — Flows"
          title={
            <>
              <span className="font-normal">Business</span> logic that runs
              the same way every time
            </>
          }
          description="A visual canvas for building production-grade AI workflows — observable, versioned and safe at enterprise scale."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.normal, delay: 0.1 }}
          className="mt-12"
        >
          <MediaFrame label="Flows Demo" ratio="wide" className="rounded-3xl" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={stagger(0.08)}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="rounded-2xl border border-border/20 p-6 transition-all duration-300 hover:border-border/50 hover:shadow-sm"
            >
              <h3 className="type-body-sm font-medium">{f.title}</h3>
              <p className="type-body-sm mt-2 text-tertiary">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.normal, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <LinkArrow href="/solutions/flows">Discover Flows</LinkArrow>
        </motion.div>
      </Container>
    </Section>
  );
}
