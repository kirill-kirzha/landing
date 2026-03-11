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
    title: "Role-based templates",
    description:
      "Legal, HR, Finance Ops, Procurement, Compliance, Sales Ops — each with defined skills, scope and guardrails.",
  },
  {
    title: "Background execution",
    description:
      "Unlimited file handling and live database access. No session required. Results delivered asynchronously.",
  },
  {
    title: "Reusable across your org",
    description:
      "Built once, reused endlessly. Share templates across teams, publish organization-wide.",
  },
] as const;

export function AgenticWorkforceSection({ className }: SectionProps) {
  return (
    <Section background="muted" divider="both" className={className}>
      <Container>
        <SectionHeader
          badge="AI OS — Agentic Workforce"
          title={
            <>
              AI Employees that{" "}
              <span className="font-normal">execute</span>, not just answer
            </>
          }
          description="Role-based AI Employees that operate autonomously — opening files, running code, querying databases and producing finished outputs. Not a chatbot. A virtual colleague."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.normal, delay: 0.1 }}
          className="mt-12"
        >
          <MediaFrame label="AI Employees" ratio="wide" className="rounded-3xl" />
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
              className="rounded-2xl border border-border/20 bg-background/60 p-6 transition-all duration-300 hover:border-border/50 hover:shadow-sm"
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
          <LinkArrow href="/solutions/ai-os">Discover AI OS</LinkArrow>
        </motion.div>
      </Container>
    </Section>
  );
}
