"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { SectionProps } from "@/types";
import { cn } from "@/lib/utils";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";

const caseStudies = [
  {
    client: "ALDAR",
    meta: "Real Estate \u00b7 UAE",
    description:
      "Connecting 16 enterprise sources through Flows. Feasibility studies that took months now happen in real time.",
    href: "/customers/aldar",
  },
  {
    client: "PIVOT",
    meta: "Investment Intelligence \u00b7 UAE",
    description:
      "Flows run every core process \u2014 due diligence, portfolio tracking, news monitoring. Aleria is the backbone.",
    href: "/customers/pivot",
  },
  {
    client: "IHC + FAB",
    meta: "Executive AI \u00b7 UAE",
    description:
      "The first worldwide AI Board Observer \u2014 live KPIs, NLP queries and auto-drafted minutes. Recognized at Davos WEF 2025.",
    href: "/customers/ihc-fab",
  },
] as const;

export function CaseStudiesSection({ className }: SectionProps) {
  return (
    <Section background="muted" divider="both" className={className}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>Deployed</Badge>
          <h2 className="type-title mt-6">
            Producing <span className="font-normal">intelligence</span> in production today
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16"
        >
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.client}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              <Link
                href={study.href}
                className={cn(
                  "group grid grid-cols-1 gap-3 py-8 transition-opacity duration-150 hover:opacity-70 sm:grid-cols-[140px_200px_1fr_auto] sm:items-center sm:gap-8",
                  idx < caseStudies.length - 1 && "border-b border-border/15",
                )}
              >
                <h3 className="type-heading">{study.client}</h3>
                <p className="type-label text-muted-foreground/50">{study.meta}</p>
                <p className="type-body-sm text-muted-foreground/70">{study.description}</p>
                <ArrowRight className="hidden size-4 text-muted-foreground/30 transition-transform duration-150 group-hover:translate-x-1 sm:block" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
