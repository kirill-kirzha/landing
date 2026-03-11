"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { SectionProps } from "@/types";
import { EASE, DURATION, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { Btn } from "@/components/marketing/button";
import { MediaFrame } from "@/components/marketing/media-frame";

export function TryAleriaSection({ className }: SectionProps) {
  return (
    <Section background="muted" divider="both" className={className}>
      <Container size="narrow">
        <SectionHeader
          badge="Try before you book"
          title={
            <>
              See how Aleria{" "}
              <span className="font-normal">transforms</span> data into
              operational intelligence
            </>
          }
        />
      </Container>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <MediaFrame
            label="Product Demo"
            ratio="video"
            className="rounded-3xl"
          />
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
            <ArrowRight className="size-4" aria-hidden="true" />
          </Btn>
        </motion.div>
      </Container>
    </Section>
  );
}
