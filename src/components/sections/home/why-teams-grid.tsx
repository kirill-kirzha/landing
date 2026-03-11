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
        "relative overflow-hidden rounded-xl transition-all duration-300",
        accent
          ? "dark bg-background p-5 text-foreground sm:p-6"
          : "bg-muted p-5 hover:shadow-sm sm:p-6",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <Cell className="lg:col-span-2">
        <h3 className="type-heading">Universal Database Connection</h3>
        <p className="type-body-sm mt-2 text-tertiary">
          Connect to any database — legacy SQL, cloud storage, obscure API
          endpoints. Aleria bridges the gap between every data source in your
          organization.
        </p>
      </Cell>

      <Cell accent>
        <div className="space-y-5">
          <div>
            <p className="type-metric text-4xl">145×</p>
            <p className="type-body-sm mt-1 text-muted-foreground">
              Faster than Talend Studio
            </p>
          </div>
          <div>
            <p className="type-metric text-4xl">8×</p>
            <p className="type-body-sm mt-1 text-muted-foreground">
              Infrastructure reduction
            </p>
          </div>
        </div>
      </Cell>

      <Cell>
        <h3 className="type-heading">Clean Data Pipelines</h3>
        <p className="type-body-sm mt-2 text-tertiary">
          20+ connectors transforming raw inputs into structured, AI-ready
          pipelines.
        </p>
      </Cell>

      <Cell>
        <h3 className="type-heading">Unified Intelligence</h3>
        <p className="type-body-sm mt-2 text-tertiary">
          All knowledge consolidated in one governed environment. Every team,
          every source, one truth.
        </p>
      </Cell>

      <Cell>
        <h3 className="type-heading">Visual Intelligence</h3>
        <p className="type-body-sm mt-2 text-tertiary">
          Live video feeds from cameras and drones turned into real-time
          operational intelligence.
        </p>
      </Cell>

      <Cell accent className="flex flex-col justify-between lg:row-span-2">
        <div>
          <h3 className="type-heading">One Sovereign Ecosystem</h3>
          <p className="type-body-sm mt-2 text-tertiary">
            A complete, integrated platform — not a collection of disconnected
            tools. Every capability under one roof.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {["Sources", "Agents", "Flows", "Boards", "Video AI"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/40 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </Cell>

      <Cell>
        <h3 className="type-heading">Dynamic Visualization</h3>
        <p className="type-body-sm mt-2 text-tertiary">
          Dashboards that adapt to your questions with drill-down granularity.
        </p>
      </Cell>

      <Cell>
        <h3 className="type-heading">Orchestrated AI Agents</h3>
        <p className="type-body-sm mt-2 text-tertiary">
          End-to-end task chains from data ingestion to finished output, fully
          autonomous.
        </p>
      </Cell>

      <Cell>
        <h3 className="type-heading">Fully Configurable</h3>
        <p className="type-body-sm mt-2 text-tertiary">
          Adapt every workflow to your organization&apos;s unique processes. No
          rigid templates.
        </p>
      </Cell>

      <Cell>
        <h3 className="type-heading">Data Sovereignty</h3>
        <p className="type-body-sm mt-2 text-tertiary">
          Your data stays under your control, always. On your infrastructure, by
          your rules.
        </p>
      </Cell>
    </div>
  );
}
