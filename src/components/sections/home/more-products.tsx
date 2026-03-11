"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { MediaFrame } from "@/components/marketing/media-frame";

function ProductCard({
  badge,
  title,
  description,
  features,
  href,
  mediaLabel,
}: {
  badge: string;
  title: string;
  description: string;
  features: readonly string[];
  href: string;
  mediaLabel: string;
}) {
  return (
    <div>
      <MediaFrame label={mediaLabel} ratio="video" className="rounded-xl" />

      <div className="mt-6">
        <Badge>{badge}</Badge>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground/70">{description}</p>

        <ul className="mt-5 space-y-2">
          {features.map((f) => (
            <li key={f} className="text-sm leading-relaxed text-muted-foreground/60">{f}</li>
          ))}
        </ul>

        <div className="mt-5">
          <LinkArrow href={href}>Discover</LinkArrow>
        </div>
      </div>
    </div>
  );
}

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
    <Section className={className}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge>More</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Intelligence layers for every operation
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12"
        >
          <ProductCard
            badge="Dashboard AI"
            title="Executive intelligence — live, explorable, traceable"
            description="A decision-making surface for boards and C-suite that connects directly to your governed data."
            features={dashboardFeatures}
            href="/solutions/dashboard-ai"
            mediaLabel="Dashboard AI"
          />
          <ProductCard
            badge="Video AI"
            title="Real-time intelligence across every camera stream"
            description="Thousands of simultaneous video streams with AI that detects, tracks and alerts."
            features={videoFeatures}
            href="/solutions/video-ai"
            mediaLabel="Video AI"
          />
        </motion.div>
      </Container>
    </Section>
  );
}
