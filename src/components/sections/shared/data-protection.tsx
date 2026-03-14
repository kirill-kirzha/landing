import { Shield, Lock, Server } from "lucide-react";

import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    icon: Server,
    title: "On-Premise",
    description: "Runs entirely within your infrastructure. No external API calls. No shared compute.",
  },
  {
    icon: Lock,
    title: "Air-Gapped",
    description: "Encrypted VM deployed on your hardware. Zero internet required. Fully isolated.",
  },
  {
    icon: Shield,
    title: "Sovereign",
    description: "National-scale AI on NVIDIA DGX Blueprint, deployed in bare-metal datacenters.",
  },
] as const;

export function DataProtection() {
  return (
    <Section background="muted" divider="both">
      <Container>
        <Reveal>
          <SectionHeader
            badge="Data Protection"
            title={
              <>
                Your data <span className="font-normal">never</span> leaves.
              </>
            }
            description="Every deployment option guarantees that data never leaves your infrastructure. No external API calls. No model training on your data. Full technological independence."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-border/40 bg-card/50 p-6">
                <p.icon className="size-5 text-muted-foreground" aria-hidden="true" />
                <h3 className="type-heading mt-4">{p.title}</h3>
                <p className="type-body-sm mt-2 text-tertiary">{p.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
