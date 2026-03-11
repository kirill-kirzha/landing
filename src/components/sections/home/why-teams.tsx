"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { SectionProps } from "@/types";
import { stagger, DURATION, VIEWPORT } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { Btn } from "@/components/marketing/button";
import { TextRotator } from "@/components/ui/text-rotator";
import { BentoGrid } from "@/components/sections/home/why-teams-grid";

const industries = [
  "Finance",
  "Real Estate",
  "Government",
  "Energy",
  "Telecom",
  "Healthcare",
] as const;

export function WhyTeamsSection({ className }: SectionProps) {
  return (
    <Section className={className}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.normal }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge>Why teams prefer us</Badge>
          <h2 className="type-title mt-6">
            <span className="font-normal">Trusted</span> by{" "}
            <TextRotator
              words={industries}
              className="min-w-[120px] text-left sm:min-w-[150px]"
            />
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={stagger(0.04)}
          className="mt-16"
        >
          <BentoGrid />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.normal, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <Btn href="/contact" size="lg">
            See it in Action
            <ArrowRight className="size-4" aria-hidden="true" />
          </Btn>
        </motion.div>
      </Container>
    </Section>
  );
}
