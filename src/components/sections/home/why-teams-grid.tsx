"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import { Marquee } from "@/components/ui/marquee";

type Bubble = { label: string; accent?: boolean };

const row1: Bubble[] = [
  { label: "Full Stack AI" },
  { label: "145× Faster", accent: true },
  { label: "GPU Orchestration" },
  { label: "400+ Connectors" },
  { label: "Agentic Workforce" },
  { label: "Board Advisory" },
  { label: "Digital Twin" },
  { label: "Dynamic Dashboards" },
];

const row2: Bubble[] = [
  { label: "Sovereign by Design", accent: true },
  { label: "Air-Gapped Ready" },
  { label: "Zero Vendor Lock-in" },
  { label: "8× Compression", accent: true },
  { label: "On-premise Always" },
  { label: "Own Your Models" },
  { label: "Multi-tenant Isolation" },
  { label: "No Foreign Dependency" },
];

const row3: Bubble[] = [
  { label: "End-to-end Flows" },
  { label: "Production Deployed", accent: true },
  { label: "Video AI" },
  { label: "One Stack" },
  { label: "Real-time Processing" },
  { label: "Spatial Intelligence" },
  { label: "Any Database" },
  { label: "Workflow Automation" },
];

const row4: Bubble[] = [
  { label: "Network Isolation" },
  { label: "Natural Language Queries" },
  { label: "500+ MB/s per Node", accent: true },
  { label: "Dedicated Compute" },
  { label: "Live KPIs" },
  { label: "Built Not Bought" },
  { label: "Proprietary Models" },
  { label: "Investment Intelligence" },
];

const pill =
  "shrink-0 rounded-full px-5 py-2.5 text-sm font-medium select-none sm:px-6 sm:py-3";

function Pill({ label, accent }: Bubble) {
  return (
    <span
      className={cn(
        pill,
        accent
          ? "dark bg-background text-foreground"
          : "border border-border/40 bg-muted/60 text-muted-foreground",
      )}
    >
      {label}
    </span>
  );
}

function CtaPill() {
  return (
    <Link
      href="/contact"
      className={cn(
        pill,
        "btn-primary-gradient inline-flex items-center gap-2 transition-opacity hover:opacity-90 focus-ring",
      )}
    >
      See it in Action
      <ArrowRight className="size-3.5" aria-hidden="true" />
    </Link>
  );
}

function Row({
  bubbles,
  reverse,
  ctaAfter = -1,
}: {
  bubbles: Bubble[];
  reverse?: boolean;
  ctaAfter?: number;
}) {
  return (
    <Marquee speed={80} reverse={reverse} pauseOnHover className="py-1.5">
      {bubbles.map((b, i) => (
        <span key={b.label} className="contents">
          <Pill {...b} />
          {i === ctaAfter && <CtaPill />}
        </span>
      ))}
    </Marquee>
  );
}

export function BubbleMarquee() {
  return (
    <motion.div variants={fadeUp} className="relative">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24"
        aria-hidden="true"
      />

      <Row bubbles={row1} ctaAfter={2} />
      <Row bubbles={row2} reverse ctaAfter={6} />
      <Row bubbles={row3} ctaAfter={4} />
      <Row bubbles={row4} reverse ctaAfter={1} />
    </motion.div>
  );
}
