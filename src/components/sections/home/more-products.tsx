"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { EASE, DURATION, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { ProductCard } from "@/components/marketing/product-card";

const dashboardFeatures = [
  "Real-time KPIs with drill-down by region, product line, customer segment",
  "Natural language queries with instant charts and AI-curated intelligence",
  "Board meeting recording with auto-drafted minutes in any language",
] as const;

const videoFeatures = [
  "People, objects, vehicles and behavioral pattern detection in real time",
  "Contextualized alerts with actionable intelligence",
  "Security, smart city, retail analytics and safety dashboards",
] as const;

export function MoreProductsSection({ className }: SectionProps) {
  return (
    <Section background="dark" divider="both" className={className}>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,oklch(0.84_0.08_155/0.06),transparent)]"
        aria-hidden="true"
      />
      <Container>
        <SectionHeader
          badge="More"
          title={
            <>
              <span className="font-normal">Intelligence</span> layers for
              every operation
            </>
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.normal, ease: EASE }}
          className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12"
        >
          <ProductCard
            badge="Dashboard AI"
            title="Executive intelligence — live, explorable, traceable"
            description="A decision-making surface for boards and C-suite that connects directly to your governed data."
            features={dashboardFeatures}
            href="/solutions/dashboard-ai"
          />
          <ProductCard
            badge="Video AI"
            title="Real-time intelligence across every camera stream"
            description="Thousands of simultaneous video streams with AI that detects, tracks and alerts."
            features={videoFeatures}
            href="/solutions/video-ai"
          />
        </motion.div>
      </Container>
    </Section>
  );
}
