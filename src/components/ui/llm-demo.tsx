"use client";

import { useEffect, useRef, useState } from "react";

import { WindowFrame } from "@/components/marketing/window-frame";
import { cn } from "@/lib/utils";
import { LlmDemoChart } from "./llm-demo-chart";

const PROMPT =
  "Brief me on Q1 group performance and flag any risks.";

const RESPONSE = `Connected to 4 enterprise sources — sovereign environment

Group Performance — Q1 2025
Revenue: AED 27.2B (+8.3% YoY)
Net profit: AED 4.1B
Portfolio: AED 324B across 45 subsidiaries

3 risk signals identified:
→ Technology — margin compression (-2.1pp QoQ)
→ Real estate — 12 contracts expiring within 60 days
→ Energy — capex overrun flagged at 8%

Recommendation: schedule review for technology and energy verticals.
Board briefing exported to secure workspace.

Quarterly revenue trend:`;

const WORD_ENDS = [...RESPONSE.matchAll(/\S+/g)].map((m) => m.index + m[0].length);
const TOTAL = WORD_ENDS.length;
const TICK = 60;

type Phase = "idle" | "thinking" | "streaming" | "done";

export function LlmDemo({ className }: { className?: string }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [idx, setIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) {
      const id = setTimeout(() => {
        setPhase("done");
        setIdx(TOTAL);
      });
      return () => clearTimeout(id);
    }

    const a = setTimeout(() => setPhase("thinking"), 600);
    const b = setTimeout(() => setPhase("streaming"), 1400);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);

  useEffect(() => {
    if (phase !== "streaming" || idx >= TOTAL) return;
    const id = setTimeout(() => {
      const next = idx + 1;
      setIdx(next);
      if (next >= TOTAL) setPhase("done");
    }, TICK);
    return () => clearTimeout(id);
  }, [phase, idx]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || (phase !== "streaming" && phase !== "done")) return;
    el.scrollTop = el.scrollHeight;
    if (phase !== "done") return;
    const id = setTimeout(() => { el.scrollTop = el.scrollHeight; }, 600);
    return () => clearTimeout(id);
  }, [phase, idx]);

  const text =
    phase === "done" ? RESPONSE : RESPONSE.slice(0, WORD_ENDS[idx] ?? 0);

  return (
    <WindowFrame title="Aleria OS" className={cn("shadow-xl", className)}>
      <div className="flex items-center gap-2 border-b border-border/20 px-4 py-2">
        <div
          className="size-1.5 rounded-full bg-brand-mint"
          aria-hidden="true"
        />
        <span className="text-xs text-muted-foreground">Aleria Pro</span>
      </div>

      <div
        ref={scrollRef}
        className="no-scrollbar h-[200px] space-y-3 overflow-y-auto p-4 sm:h-[240px] lg:h-[260px]"
      >
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-br-md bg-muted px-3.5 py-2.5">
            <p className="type-body-sm text-foreground">{PROMPT}</p>
          </div>
        </div>

        {phase !== "idle" && (
          <div className="flex gap-2.5">
            <div
              className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full gradient-desert-mint"
              aria-hidden="true"
            >
              <span className="text-[9px] font-bold text-foreground">A</span>
            </div>
            <div className="min-w-0 flex-1">
              {phase === "thinking" ? (
                <div className="flex items-center gap-1 py-1.5" aria-hidden="true">
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      className="size-1.5 animate-pulse rounded-full bg-muted-foreground"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              ) : (
                <>
                  <p className="type-body-sm whitespace-pre-line text-foreground">
                    {text}
                    {phase === "streaming" && (
                      <span
                        className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse rounded-full bg-brand-mint align-text-bottom"
                        aria-hidden="true"
                      />
                    )}
                  </p>
                  <LlmDemoChart visible={phase === "done"} />
                </>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-border/20 px-4 py-2.5">
        <div className="flex items-center rounded-lg bg-muted/50 px-3 py-2">
          <span className="text-xs text-quaternary">Ask anything...</span>
        </div>
      </div>
    </WindowFrame>
  );
}
