"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface MetricItem {
  value: string;
  label: string;
}

interface MetricsProps {
  items: readonly MetricItem[];
  className?: string;
}

export function Metrics({ items, className }: MetricsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn("flex gap-12", className)}
    >
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-3xl font-semibold tracking-tight">{item.value}</p>
          <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
        </div>
      ))}
    </motion.div>
  );
}
