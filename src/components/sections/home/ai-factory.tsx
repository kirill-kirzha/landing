import { Shield, Wifi, Server } from "lucide-react";

import type { SectionProps } from "@/types";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { WindowFrame } from "@/components/marketing/window-frame";
import { Reveal } from "@/components/ui/reveal";
import { FactoryStack } from "./ai-factory-stack";

const deployments = [
  {
    icon: Server,
    title: "On-Premise / Private Cloud",
    description:
      "Runs entirely within your infrastructure. No external API calls, no shared compute.",
  },
  {
    icon: Wifi,
    title: "Air-Gapped Delivery",
    description:
      "Encrypted VM on your hardware. Zero internet. Proven at FAB, Aldar, DOF, Rakez.",
  },
  {
    icon: Shield,
    title: "Sovereign AI Factory",
    description:
      "National-scale on NVIDIA DGX Blueprint, deployed in UAE bare-metal datacenters.",
  },
] as const;

export function AiFactorySection({ className }: SectionProps) {
  return (
    <Section className={className}>
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge>AI Factory</Badge>
            <h2 className="type-title mt-6">
              Your data <span className="font-normal">never</span> leaves.
            </h2>
            <p className="type-body mt-5 max-w-lg text-muted-foreground">
              Your AI, your rules. Deploy on your own infrastructure with full
              sovereignty. No external calls, no shared compute.
            </p>

            <div className="mt-8 space-y-5">
              {deployments.map((d) => (
                <div key={d.title} className="flex gap-4">
                  <d.icon
                    className="mt-0.5 size-5 shrink-0 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="type-body-sm font-medium">{d.title}</p>
                    <p className="type-body-sm text-tertiary">
                      {d.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <LinkArrow href="/ai-factory">Discover AI Factory</LinkArrow>
            </div>
          </div>

          <WindowFrame title="AI Factory">
            <FactoryStack />
          </WindowFrame>
        </Reveal>
      </Container>
    </Section>
  );
}
