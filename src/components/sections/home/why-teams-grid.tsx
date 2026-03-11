"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

function Cell({
  className,
  children,
  accent = false,
}: {
  className?: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 sm:p-7",
        accent
          ? "dark border-border/30 bg-background text-foreground"
          : "border-border/20 hover:border-border/50 hover:shadow-sm",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Cell className="lg:col-span-2">
        <p className="type-label text-quaternary">Data Foundation</p>
        <h3 className="type-heading mt-4">Universal Database Connection</h3>
        <p className="type-body-sm mt-2 text-tertiary">
          Connect to any database — legacy SQL, cloud storage, obscure API
          endpoints. Aleria bridges the gap between every data source in your
          organization.
        </p>
      </Cell>

      <Cell accent>
        <p className="type-label text-quaternary">Performance</p>
        <p className="type-metric mt-4">145×</p>
        <p className="type-body-sm mt-1 text-muted-foreground">
          Faster than Talend Studio
        </p>
        <p className="type-metric mt-4">8×</p>
        <p className="type-body-sm mt-1 text-muted-foreground">
          Infrastructure reduction
        </p>
      </Cell>

      <Cell>
        <p className="type-label text-quaternary">Pipelines</p>
        <h3 className="type-heading mt-4">Clean Data Pipelines</h3>
        <p className="type-body-sm mt-2 text-tertiary">
          400+ connectors transforming messy inputs into structured, AI-ready
          pipelines.
        </p>
      </Cell>

      <Cell>
        <p className="type-label text-quaternary">Knowledge</p>
        <h3 className="type-heading mt-4">Unified Intelligence</h3>
        <p className="type-body-sm mt-2 text-tertiary">
          All knowledge consolidated in one governed environment. Every team,
          every source, one truth.
        </p>
      </Cell>

      <Cell>
        <p className="type-label text-quaternary">Computer Vision</p>
        <h3 className="type-heading mt-4">Visual Intelligence</h3>
        <p className="type-body-sm mt-2 text-tertiary">
          Live video feeds from cameras and drones turned into real-time
          operational intelligence.
        </p>
      </Cell>

      <Cell accent className="lg:row-span-2 flex flex-col justify-between">
        <div>
          <p className="type-label text-quaternary">Platform</p>
          <h3 className="type-heading mt-4">One Sovereign Ecosystem</h3>
          <p className="type-body-sm mt-2 text-tertiary">
            A complete, integrated platform — not a collection of disconnected
            tools. Every capability under one roof.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {["Sources", "Agents", "Flows", "Boards", "Video AI"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </Cell>

      <Cell>
        <p className="type-label text-quaternary">Dashboards</p>
        <h3 className="type-heading mt-4">Dynamic Visualization</h3>
        <p className="type-body-sm mt-2 text-tertiary">
          Dashboards that adapt to your questions with drill-down granularity.
        </p>
      </Cell>

      <Cell>
        <p className="type-label text-quaternary">Automation</p>
        <h3 className="type-heading mt-4">Orchestrated AI Agents</h3>
        <p className="type-body-sm mt-2 text-tertiary">
          End-to-end task chains from data ingestion to finished output,
          fully autonomous.
        </p>
      </Cell>

      <Cell>
        <p className="type-label text-quaternary">Flexibility</p>
        <h3 className="type-heading mt-4">Fully Configurable</h3>
        <p className="type-body-sm mt-2 text-tertiary">
          Adapt every workflow to your organization&apos;s unique processes. No
          rigid templates.
        </p>
      </Cell>

      <Cell>
        <p className="type-label text-quaternary">Sovereignty</p>
        <h3 className="type-heading mt-4">Data Sovereignty by Design</h3>
        <p className="type-body-sm mt-2 text-tertiary">
          Your data stays under your control, always. On your infrastructure,
          by your rules.
        </p>
      </Cell>
    </div>
  );
}
