"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE, DURATION } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { factoryLayers } from "./factory-layers-data";

export function FactoryLayers() {
  const [expandedId, setExpandedId] = useState<string | null>(
    factoryLayers[0].id,
  );

  return (
    <Section>
      <Container>
        <SectionHeader
          badge="How it works"
          title={
            <>
              Five layers of <span className="font-normal">sovereign</span> AI
            </>
          }
        />
        <div className="mt-14 space-y-3">
          {factoryLayers.map((layer, index) => {
            const isExpanded = expandedId === layer.id;
            const badge = String(index + 1).padStart(2, "0");
            return (
              <div
                key={layer.id}
                className={cn(
                  "overflow-hidden rounded-xl border border-border/40 bg-card/30 transition-colors",
                  isExpanded && "border-l-2 border-l-brand-mint",
                )}
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpandedId(isExpanded ? null : layer.id)
                  }
                  className="focus-ring flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                  aria-expanded={isExpanded}
                >
                  <span className="type-label shrink-0 text-quaternary">
                    {badge}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="type-label text-tertiary">
                      {layer.title}
                    </span>
                    <h3 className="type-heading mt-1 text-foreground">
                      {layer.headline}
                    </h3>
                  </div>
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 text-tertiary transition-transform",
                      isExpanded && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: DURATION.normal, ease: EASE },
                          opacity: { duration: DURATION.fast, ease: EASE },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: DURATION.normal, ease: EASE },
                          opacity: { duration: DURATION.fast, ease: EASE },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border/40 px-5 pb-5 pt-2 sm:px-6 sm:pb-6 sm:pt-2">
                        <p className="type-body text-muted-foreground">
                          {layer.description}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {layer.expandedItems.map((item) => (
                            <li
                              key={item}
                              className="type-body-sm flex items-start gap-2 text-tertiary"
                            >
                              <span
                                className="mt-1.5 size-1 shrink-0 rounded-full bg-brand-mint"
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
