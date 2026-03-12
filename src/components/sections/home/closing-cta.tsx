"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { SectionProps } from "@/types";
import { reveal, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Btn } from "@/components/marketing/button";
import { Container } from "@/components/marketing/container";
import { HoneycombBg } from "@/components/marketing/honeycomb-bg";

export function ClosingCtaSection({ className }: SectionProps) {
  return (
    <Section
      spacing="none"
      className={`flex min-h-[60vh] items-center justify-center py-20 sm:py-28 ${className ?? ""}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_110%,oklch(0.93_0.015_82/0.4),transparent)]"
        aria-hidden="true"
      />
      <HoneycombBg placement="bottom-center" intensity="medium" />

      <Container size="narrow" className="relative z-10">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-center"
        >
          <p className="type-body text-muted-foreground">
            The organizations that can produce intelligence at scale will define
            the future.
          </p>

          <div
            className="gradient-desert-mint mx-auto mt-8 h-px w-24 rounded-full"
            aria-hidden="true"
          />

          <h2 className="type-display mt-8">
            Build Your <span className="font-normal">AI</span> Factory.
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Btn href="/contact" size="lg" className="w-full sm:w-auto">
              See It in Action
              <ArrowRight className="size-4" aria-hidden="true" />
            </Btn>
            <Btn href="/contact" variant="outline_gradient" size="lg" className="w-full sm:w-auto">
              Request a Demo
            </Btn>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
