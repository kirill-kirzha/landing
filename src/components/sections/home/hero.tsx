"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { EASE, DURATION } from "@/lib/motion";
import { Btn } from "@/components/marketing/button";
import { HoneycombBg } from "@/components/marketing/honeycomb-bg";

export function HeroSection() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.93_0.015_82/0.5),transparent)]" />
        <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
      </div>
      <HoneycombBg placement="bottom-right" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 pt-32 pb-24 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="type-label mb-12 text-muted-foreground"
        >
          Sovereign AI Platform
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, delay: 0.1, ease: EASE }}
          className="type-display mx-auto max-w-4xl"
        >
          Your <span className="font-normal">Sovereign</span>
          <br />
          AI Factory
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, delay: 0.2, ease: EASE }}
          className="type-body mx-auto mt-8 max-w-[36rem] text-muted-foreground"
        >
          Build and operate sovereign AI systems that transform your data into
          operational intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, delay: 0.3, ease: EASE }}
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Btn href="/contact" size="lg">
            Let&apos;s Talk
            <ArrowRight className="size-4" aria-hidden="true" />
          </Btn>
          <Btn href="/try" variant="outline_gradient" size="lg">
            Try Aleria
          </Btn>
        </motion.div>
      </div>
    </section>
  );
}
