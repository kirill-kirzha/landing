"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { PricingCard } from "./pricing-card";
import { plans, currencies, type Currency } from "./pricing-data";

export function PricingCards() {
  const [currency, setCurrency] = useState<Currency>("USD");

  return (
    <div className="mt-14">
      <div className="flex justify-center">
        <div
          className="inline-flex rounded-full border border-border p-1"
          role="radiogroup"
          aria-label="Select currency"
        >
          {currencies.map((c) => (
            <button
              key={c.id}
              role="radio"
              aria-checked={currency === c.id}
              onClick={() => setCurrency(c.id)}
              className={cn(
                "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-ring",
                currency !== c.id && "text-muted-foreground hover:text-foreground",
              )}
            >
              {currency === c.id && (
                <motion.span
                  layoutId="pricing-currency"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className={cn("relative z-10", currency === c.id && "text-background")}>
                {c.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} currency={currency} />
        ))}
      </div>
    </div>
  );
}
