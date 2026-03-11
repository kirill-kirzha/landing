"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { SectionProps } from "@/types";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { Btn } from "@/components/marketing/button";
import { MediaFrame } from "@/components/marketing/media-frame";

export function TryAleriaSection({ className }: SectionProps) {
  return (
    <Section className={className}>
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <Badge>Try before you book</Badge>
          <h2 className="text-balance mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            See how Aleria transforms data into operational intelligence
          </h2>
        </motion.div>
      </Container>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <MediaFrame label="Product Demo" ratio="video" className="rounded-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
