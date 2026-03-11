"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { MediaFrame } from "@/components/marketing/media-frame";

export function AgenticWorkforceSection({ className }: SectionProps) {
  return (
    <Section background="muted" divider="both" className={className}>
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="order-2 lg:order-1 lg:sticky lg:top-24"
          >
            <MediaFrame label="AI Employees" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2"
          >
            <Badge>AI OS — Agentic Workforce</Badge>

            <h2 className="type-title mt-4">
              AI Employees that execute, not just answer
            </h2>

            <p className="type-body mt-5 text-muted-foreground">
              Role-based AI Employees that operate autonomously — opening files,
              running code, querying databases and producing finished outputs.
              Not a chatbot. A virtual colleague.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="type-body-sm font-medium">Role-based templates</p>
                <p className="type-body-sm mt-1 text-muted-foreground/70">
                  Legal, HR, Finance Ops, Procurement, Compliance, Sales Ops —
                  each with defined skills, scope and guardrails.
                </p>
              </div>
              <div>
                <p className="type-body-sm font-medium">Background execution</p>
                <p className="type-body-sm mt-1 text-muted-foreground/70">
                  Unlimited file handling and live database access. No session
                  required.
                </p>
              </div>
              <div>
                <p className="type-body-sm font-medium">Reusable across your organization</p>
                <p className="type-body-sm mt-1 text-muted-foreground/70">
                  Built once, reused endlessly. Consistent outputs at scale.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <LinkArrow href="/solutions/ai-os">Discover AI OS</LinkArrow>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
