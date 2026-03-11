"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import type { SectionProps } from "@/types";
import { cn } from "@/lib/utils";
import { EASE, DURATION, fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { WindowFrame } from "@/components/marketing/window-frame";

const tabs = [
  {
    id: "employees",
    label: "AI Employees",
    windowTitle: "Aleria AI OS — Employees",
    features: [
      {
        title: "Role-based templates",
        description:
          "Legal, HR, Finance, Procurement, Compliance — each with defined skills and guardrails.",
      },
      {
        title: "Background execution",
        description:
          "Unlimited file handling and live database access. Results delivered asynchronously.",
      },
      {
        title: "Reusable across your org",
        description:
          "Built once, reused endlessly. Share templates across teams, publish organization-wide.",
      },
    ],
  },
  {
    id: "flows",
    label: "Flows",
    windowTitle: "Aleria AI OS — Flows",
    features: [
      {
        title: "Visual canvas",
        description:
          "Data lookups, LLM steps, write-back and adaptive Agent nodes for complex reasoning.",
      },
      {
        title: "Production-grade",
        description:
          "Every run traced, every version saved, every output schema-validated JSON.",
      },
      {
        title: "Proven at scale",
        description:
          "Powers ALDAR X (16 connected sources) and Pivot (investment due diligence, end-to-end).",
      },
    ],
  },
] as const;

export function AiOsSection({ className }: SectionProps) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <Section className={className}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={stagger(0.08)}
          className="text-center"
        >
          <motion.div variants={fadeUp}>
            <Badge>AI OS</Badge>
          </motion.div>
          <motion.h2 variants={fadeUp} className="type-title mt-5">
            Intelligent <span className="font-normal">agents</span> and
            workflows
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="type-body mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            Autonomous AI employees and production-grade workflows that execute
            on your infrastructure — not chatbots, virtual colleagues.
          </motion.p>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <div className="flex border-b border-border/30">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={cn(
                  "relative whitespace-nowrap px-5 py-3 text-sm font-medium transition-colors focus-ring",
                  active === i
                    ? "text-foreground"
                    : "text-quaternary hover:text-muted-foreground",
                )}
              >
                {t.label}
                {active === i && (
                  <motion.div
                    layoutId="ai-os-tab"
                    className="absolute inset-x-0 -bottom-px h-0.5 bg-foreground"
                    transition={{
                      type: "spring",
                      bounce: 0.15,
                      duration: 0.5,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: DURATION.normal, ease: EASE }}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <WindowFrame title={tab.windowTitle}>
                <div className="aspect-[4/3] bg-muted/30" />
              </WindowFrame>

              <div className="space-y-6">
                {tab.features.map((f) => (
                  <div key={f.title}>
                    <p className="type-body-sm font-medium">{f.title}</p>
                    <p className="type-body-sm mt-1 text-tertiary">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <LinkArrow href="/solutions/ai-os">Discover AI OS</LinkArrow>
        </motion.div>
      </Container>
    </Section>
  );
}
