"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { SectionProps } from "@/types";
import { cn } from "@/lib/utils";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { Btn } from "@/components/marketing/button";

const industries = ["Finance", "Real Estate", "Government", "Energy", "Telecom", "Healthcare"] as const;

const capabilities = [
  ["Universal database connection", "Connect to any database — legacy SQL, cloud storage, obscure API endpoints."],
  ["Clean data pipelines", "400+ connectors transforming messy inputs into structured, AI-ready pipelines."],
  ["Unmatched performance", "145\u00d7 faster than Talend Studio with 8\u00d7 infrastructure reduction."],
  ["Unified intelligence", "All knowledge consolidated in one governed environment."],
  ["Visual intelligence", "Live video feeds turned into real-time operational intelligence."],
  ["Dynamic visualization", "Dashboards that adapt to your questions with drill-down granularity."],
  ["One sovereign ecosystem", "A complete, integrated platform — not disconnected tools."],
  ["Orchestrated AI agents", "End-to-end task chains from data ingestion to finished output."],
  ["Fully configurable", "Adapt every workflow to your organization's unique processes."],
  ["Sovereignty by design", "Your data stays under your control, always."],
] as const;

export function WhyTeamsSection({ className }: SectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section className={className}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge>Why teams prefer us</Badge>
          <h2 className="type-title mt-4">
            <span className="text-muted-foreground">Trusted by </span>
            <span className="relative inline-block min-w-[160px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={industries[activeIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="inline-block"
                >
                  {industries[activeIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          {capabilities.map(([title, desc], idx) => (
            <div
              key={title}
              className={cn(
                "grid grid-cols-1 gap-1 py-5 sm:grid-cols-[180px_1fr] sm:gap-8",
                idx < capabilities.length - 1 && "border-b border-border/15",
              )}
            >
              <p className="type-body-sm font-medium">{title}</p>
              <p className="type-body-sm text-muted-foreground/60">{desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Btn href="/contact" size="lg">
            See it in Action
            <ArrowRight className="size-4" />
          </Btn>
        </motion.div>
      </Container>
    </Section>
  );
}
