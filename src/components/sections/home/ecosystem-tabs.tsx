"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { EASE, DURATION } from "@/lib/motion";
import { WindowFrame } from "@/components/marketing/window-frame";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { VideoPlayer } from "@/components/ui/video-player";
import { ecosystemTabs } from "./ecosystem-tabs-data";

export function EcosystemTabs() {
  const [active, setActive] = useState(0);
  const tab = ecosystemTabs[active];

  return (
    <div className="mt-14">
      <div className="no-scrollbar flex justify-center overflow-x-auto">
        <div className="flex border-b border-border/30" role="tablist" aria-label="Products">
          {ecosystemTabs.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              id={`eco-tab-${t.id}`}
              aria-selected={active === i}
              aria-controls={`eco-panel-${t.id}`}
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
                  layoutId="ecosystem-tab"
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-foreground"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10" role="tabpanel" id={`eco-panel-${tab.id}`} aria-labelledby={`eco-tab-${tab.id}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.normal, ease: EASE }}
          >
            <WindowFrame title={tab.windowTitle}>
              <VideoPlayer src={tab.videoSrc} />
            </WindowFrame>

            <div className="mx-auto mt-8 max-w-2xl text-center">
              <h3 className="type-heading">{tab.headline}</h3>
              <p className="type-body-sm mt-3 text-muted-foreground">
                {tab.description}
              </p>
              <div className="mt-5">
                <LinkArrow href={tab.cta.href}>{tab.cta.text}</LinkArrow>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
