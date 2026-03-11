"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { SectionProps } from "@/types";
import { EASE, DURATION, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { Btn } from "@/components/marketing/button";
import { MediaFrame } from "@/components/marketing/media-frame";

export function TryAleriaSection({ className }: SectionProps) {
  return (
    <Section background="muted" divider="both" className={className}>
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.normal, ease: EASE }}
          className="text-center"
        >
          <Badge>Try before you book</Badge>
          <h2 className="type-title mt-6">
            See how Aleria <span className="font-normal">transforms</span> data into operational intelligence
          </h2>
        </motion.div>
      </Container>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <MediaFrame label="Product Demo" ratio="video" className="rounded-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.normal, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <Btn href="/try" size="lg">
            Sign Up & Try for Free
            <ArrowRight className="size-4" />
          </Btn>
        </motion.div>
      </Container>
    </Section>
  );
}
