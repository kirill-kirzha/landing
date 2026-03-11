"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { EASE, DURATION } from "@/lib/motion";
import { Btn } from "@/components/marketing/button";
import { HoneycombBg } from "@/components/marketing/honeycomb-bg";
import { HeroClients } from "./hero-clients";

export function HeroSection() {
  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.93_0.015_82/0.5),transparent)]" />
      </div>
      <HoneycombBg placement="bottom-right" intensity="strong" />

      <div className="relative z-10 flex flex-1 items-center justify-center px-5 pt-24 pb-8 text-center sm:px-6 sm:pt-32 sm:pb-12 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.a
            href="/blog/aleria-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="group mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground focus-ring sm:mb-8 sm:px-4 sm:text-sm"
          >
            Introducing Aleria 2.0
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5 sm:size-3.5" aria-hidden="true" />
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, delay: 0.1, ease: EASE }}
            className="type-display mx-auto max-w-4xl"
          >
            Your <span className="font-normal">Sovereign</span>
            <br />
            AI Factory
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, delay: 0.2, ease: EASE }}
            className="type-body mx-auto mt-5 max-w-[36rem] text-muted-foreground sm:mt-6"
          >
            Build and operate sovereign AI systems that transform your data into
            operational intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, delay: 0.3, ease: EASE }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
          >
            <Btn href="/try" size="lg" className="w-full sm:w-auto">
              Try Aleria
              <ArrowRight className="size-4" aria-hidden="true" />
            </Btn>
            <Btn href="/contact" variant="outline_gradient" size="lg" className="w-full sm:w-auto">
              Let&apos;s Talk
            </Btn>
          </motion.div>
        </div>
      </div>

      <HeroClients />
    </section>
  );
}
