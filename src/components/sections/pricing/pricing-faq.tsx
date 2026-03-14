"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { cn } from "@/lib/utils";
import { EASE, DURATION } from "@/lib/motion";

const faqs = [
  {
    q: "What is included in the base platform vs add-ons?",
    a: "The base platform (Personal or Business) gives you Aleria OS — chat, sources, reports and core agentic capabilities. Add-ons extend this with specialized infrastructure: Flows for workflow automation, Datalake for live database connections, Agentic Workforce for background AI Employees, and ETL for large-scale data pipelines.",
  },
  {
    q: "Can I deploy fully on-premise with no cloud dependency?",
    a: "Yes. Aleria is designed for on-premise and air-gapped deployment. Your data never leaves your infrastructure. Zero external API calls are made during operation.",
  },
  {
    q: "What does air-gapped delivery mean in practice?",
    a: "Aleria is delivered as an encrypted VM on your hardware — Mac Studio, NVIDIA DGX or your own servers. It operates with zero internet connectivity. The entire platform runs locally. This has been deployed and is running in production at multiple government and financial institutions.",
  },
  {
    q: "Is there a minimum seat requirement?",
    a: "Personal plans start at 1 seat. Business plans are per seat with no minimum. Enterprise and Custom Solution deployments are scoped per organization.",
  },
  {
    q: "What AI models does Aleria use?",
    a: "Aleria is model-agnostic. We support and integrate the leading LLMs and allow organizations to bring their own models. In air-gapped deployments, only locally hosted models are used — no external model API calls.",
  },
  {
    q: "Can I bring my own model?",
    a: "Yes. Aleria's architecture is built to be model-agnostic. Enterprise deployments can run fully on locally hosted models with no dependency on any external AI provider.",
  },
  {
    q: "How long does onboarding take?",
    a: "Tier 1 standard use cases can be live in hours. Tier 2 configured deployments take days to weeks. Enterprise and sovereign deployments are scoped individually — Aleria provides a dedicated implementation team for all Custom Solution contracts.",
  },
  {
    q: "What exactly is an AI Employee?",
    a: "An AI Employee is a role-based autonomous agent that operates in a controlled execution environment. Unlike a chatbot, it doesn't just answer questions — it opens files, runs code, queries databases, executes multi-step tasks and delivers finished outputs. It works in background mode, handles unlimited files and can be customized with skills and templates specific to your organization's processes.",
  },
];

export function PricingFaq() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <Section spacing="lg">
      <Container>
        <SectionHeader badge="FAQ" title="Common questions" />
        <div className="mt-14 space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-background overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenId(openId === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-ring"
                aria-expanded={openId === i}
              >
                <span className="type-body font-medium text-foreground">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-muted-foreground transition-transform",
                    openId === i && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {openId === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: DURATION.normal, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-border px-6 py-5 type-body-sm text-muted-foreground">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
