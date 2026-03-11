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
  { title: "Universal database connection", description: "Connect to any database — legacy SQL, cloud storage, obscure API endpoints." },
  { title: "Clean data pipelines", description: "400+ connectors transforming messy inputs into structured, AI-ready pipelines." },
  { title: "Unmatched performance", description: "145\u00d7 faster than Talend Studio with 8\u00d7 infrastructure reduction." },
  { title: "Unified intelligence", description: "All knowledge consolidated in one governed environment." },
  { title: "Visual intelligence", description: "Live video feeds turned into real-time operational intelligence." },
  { title: "Dynamic visualization", description: "Dashboards that adapt to your questions with drill-down granularity." },
  { title: "One sovereign ecosystem", description: "A complete, integrated platform — not disconnected tools." },
  { title: "Orchestrated AI agents", description: "End-to-end task chains from data ingestion to finished output." },
  { title: "Fully configurable", description: "Adapt every workflow to your organization's unique processes." },
  { title: "Sovereignty by design", description: "Your data stays under your control, always." },
] as const;

export function WhyTeamsSection({ className }: SectionProps) {
  const [industryIndex, setIndustryIndex] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndustryIndex((prev) => (prev + 1) % industries.length);
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
                  key={industries[industryIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="inline-block"
                >
                  {industries[industryIndex]}
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
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr]">
            <div className="space-y-1">
              {capabilities.map((cap, idx) => (
                <button
                  key={cap.title}
                  onMouseEnter={() => setActiveCapability(idx)}
                  onClick={() => setActiveCapability(idx)}
                  className={cn(
                    "type-body-sm block w-full rounded-lg px-4 py-2.5 text-left transition-all duration-200",
                    idx === activeCapability
                      ? "bg-muted font-medium text-foreground"
                      : "text-muted-foreground/60 hover:text-muted-foreground",
                  )}
                >
                  {cap.title}
                </button>
              ))}
            </div>

            <div className="flex items-center lg:pl-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="type-heading">
                    {capabilities[activeCapability].title}
                  </h3>
                  <p className="type-body mt-4 text-muted-foreground">
                    {capabilities[activeCapability].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
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
