"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp, VIEWPORT } from "@/lib/motion";

const caseStudies = [
  {
    client: "ALDAR",
    meta: "Real Estate · UAE",
    result: "16 sources unified, feasibility in real time",
    description:
      "Aleria powers ALDAR's unified development platform — connecting 16 enterprise sources including Salesforce, Oracle and SAP through Flows. Feasibility studies that previously took months now happen in real time.",
    logos: ["/logos/clients/aldar.png"],
    href: "/customers/aldar",
  },
  {
    client: "PIVOT",
    meta: "Investment Intelligence · UAE",
    result: "Aleria is not a feature. It is the backbone.",
    description:
      "An AI investment platform where Flows run every core operational process — due diligence, portfolio tracking, news monitoring and continuous market updates.",
    href: "/customers/pivot",
  },
  {
    client: "IHC + FAB",
    meta: "Executive AI · UAE",
    result: "First worldwide AI Board Observer",
    description:
      "AI Board Observer deployed at board level across IHC and First Abu Dhabi Bank. Live KPIs, natural language queries and AI-drafted board minutes. Recognized at Davos WEF 2025.",
    logos: ["/logos/clients/ihc.png", "/logos/clients/fab.svg"],
    href: "/customers/ihc-fab",
  },
] as const;

export function DeployedBanner() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className="dark mt-14 overflow-hidden rounded-2xl bg-background px-6 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-8"
    >
      <p className="type-label text-muted-foreground">
        Deployed in production
      </p>

      <div className="mt-8 grid grid-cols-1 divide-y divide-border/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {caseStudies.map((study) => (
          <Link
            key={study.client}
            href={study.href}
            className="group flex flex-col rounded-lg py-6 first:pt-0 last:pb-0 focus-ring sm:py-0 sm:first:pl-0 sm:[&:not(:first-child)]:pl-8"
          >
            <div className="flex items-center gap-2">
              {"logos" in study &&
                study.logos.map((logo) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={logo}
                    src={logo}
                    alt=""
                    className="h-7 w-auto object-contain brightness-0 invert"
                  />
                ))}
              <span className="type-body-sm font-semibold text-foreground">
                {study.client}
              </span>
              <span className="type-body-sm text-quaternary">
                {study.meta}
              </span>
            </div>

            <h3 className="type-heading mt-5 text-foreground">
              {study.result}
            </h3>

            <p className="type-body-sm mt-2 flex-1 text-tertiary">
              {study.description}
            </p>

            <div className="mt-4 flex items-center gap-1.5 type-body-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
              Read case study
              <ArrowRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
