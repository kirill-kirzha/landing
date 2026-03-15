"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import type { SectionProps } from "@/types";
import { cn } from "@/lib/utils";
import { EASE, DURATION } from "@/lib/motion";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { WindowFrame } from "@/components/marketing/window-frame";
import { VideoPlayer } from "@/components/ui/video-player";
import { Reveal } from "@/components/ui/reveal";
import { aiOsTabs as tabs } from "./ai-os-tabs";

export function AiOsSection({ className }: SectionProps) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <Section className={className}>
      <Container>
        <Reveal>
          <div className="text-center">
            <Badge>AI OS</Badge>
            <h2 className="type-title mt-6">
              Intelligent <span className="font-normal">agents</span> and
              workflows
            </h2>
            <p className="type-body mx-auto mt-5 max-w-2xl text-muted-foreground">
              Autonomous AI employees and production-grade workflows that execute
              on your infrastructure. Not chatbots, virtual colleagues.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="flex border-b border-border/30" role="tablist" aria-label="AI OS features">
              {tabs.map((t, i) => (
                <button
                  key={t.id}
                  role="tab"
                  id={`aios-tab-${t.id}`}
                  aria-selected={active === i}
                  aria-controls={`aios-panel-${t.id}`}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors focus-ring sm:px-5",
                    active === i
                      ? "text-foreground"
                      : "text-quaternary hover:text-muted-foreground",
                  )}
                >
                  {t.label}
                  {active === i && (
                    <motion.div
                      layoutId="ai-os-tab"
                      className="absolute inset-x-0 -bottom-px h-0.5 bg-foreground"
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        duration: 0.5,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10" role="tabpanel" id={`aios-panel-${tab.id}`} aria-labelledby={`aios-tab-${tab.id}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: DURATION.normal, ease: EASE }}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <WindowFrame title={tab.windowTitle}>
                  <VideoPlayer src={tab.videoSrc} aspectRatio="4/3" />
                </WindowFrame>

                <div className="space-y-6">
                  {tab.features.map((f) => (
                    <div key={f.title}>
                      <p className="type-body-sm font-medium">{f.title}</p>
                      <p className="type-body-sm mt-1 text-tertiary">
                        {f.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 text-center">
            <LinkArrow href="/solutions/ai-os">Discover AI OS</LinkArrow>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
