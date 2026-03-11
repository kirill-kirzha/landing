"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { SectionProps } from "@/types";
import { cn } from "@/lib/utils";
import { Btn } from "@/components/marketing/button";

export function ClosingCtaSection({ className }: SectionProps) {
  return (
    <section className={cn("relative flex min-h-[60vh] items-center justify-center py-28 sm:py-36", className)}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_110%,oklch(0.93_0.015_82/0.4),transparent)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <p className="text-pretty text-lg text-muted-foreground">
          The organizations that can produce intelligence at scale will define
          the future.
        </p>
        <div className="gradient-desert-mint mx-auto mt-8 h-px w-24 rounded-full" />
        <h2 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Build Your AI Factory.
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Btn href="/contact" size="lg">
            See It in Action
            <ArrowRight className="size-4" />
          </Btn>
          <Btn href="/contact" variant="ghost" size="lg">
            Request a Demo
          </Btn>
        </div>
      </motion.div>
    </section>
  );
}
