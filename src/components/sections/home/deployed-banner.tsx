"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

const caseStudies = [
  {
    client: "ALDAR",
    meta: "Real Estate",
    result: "16 sources unified, feasibility in real time",
    logos: ["/logos/clients/aldar.png"],
    href: "/customers/aldar",
  },
  {
    client: "PIVOT",
    meta: "Investment",
    result: "AI backbone for due diligence & portfolio ops",
    href: "/customers/pivot",
  },
  {
    client: "IHC",
    meta: "Holding Group",
    result: "AI Board Observer at executive level",
    logos: ["/logos/clients/ihc.png"],
    href: "/customers/ihc",
  },
  {
    client: "FAB",
    meta: "Banking",
    result: "AI-drafted board minutes & live KPIs",
    logos: ["/logos/clients/fab.svg"],
    href: "/customers/fab",
  },
] as const;

export function DeployedBanner() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={stagger(0.06)}
      className="dark mt-10 overflow-hidden rounded-2xl bg-background shadow-lg"
    >
      <div className="h-0.5 gradient-desert-mint" aria-hidden="true" />

      <p className="type-label px-6 pt-5 text-muted-foreground sm:px-8">
        Deployed in production
      </p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {caseStudies.map((study) => (
          <motion.div key={study.client} variants={fadeUp}>
            <Link
              href={study.href}
              className="group flex flex-col gap-3 border-t border-border/10 px-6 py-5 transition-colors hover:bg-card/50 focus-ring sm:px-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {"logos" in study &&
                    study.logos.map((logo) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={logo}
                        src={logo}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-5 w-auto object-contain brightness-0 invert"
                      />
                    ))}
                  <span className="text-sm font-semibold text-foreground">
                    {study.client}
                  </span>
                  <span className="text-xs text-quaternary">{study.meta}</span>
                </div>
                <ArrowRight
                  className="size-3.5 shrink-0 text-quaternary transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
                  aria-hidden="true"
                />
              </div>

              <p className="type-body-sm leading-snug text-muted-foreground">
                {study.result}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
