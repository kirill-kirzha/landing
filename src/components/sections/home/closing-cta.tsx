"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { SectionProps } from "@/types";
import { cn } from "@/lib/utils";
import { EASE, DURATION, VIEWPORT } from "@/lib/motion";
import { Btn } from "@/components/marketing/button";

export function ClosingCtaSection({ className }: SectionProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[60vh] items-center justify-center py-28 sm:py-36",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_110%,oklch(0.93_0.015_82/0.4),transparent)]"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: DURATION.slow, ease: EASE }}
        className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8"
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

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Btn href="/contact" size="lg">
            See It in Action
            <ArrowRight className="size-4" aria-hidden="true" />
          </Btn>
          <Btn href="/contact" variant="outline_gradient" size="lg">
            Request a Demo
          </Btn>
        </div>
      </motion.div>
    </section>
  );
}
