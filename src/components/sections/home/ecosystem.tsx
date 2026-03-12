import type { SectionProps } from "@/types";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { Reveal } from "@/components/ui/reveal";
import { EcosystemPillars } from "./ecosystem-pillars";
import { EcosystemTabs } from "./ecosystem-tabs";

export function EcosystemSection({ className }: SectionProps) {
  return (
    <Section className={className}>
      <Container>
        <Reveal>
          <SectionHeader
            badge="Ecosystem"
            title={
              <>
                One <span className="font-normal">sovereign</span> ecosystem
              </>
            }
            description="Solutions, Infrastructure and Orchestration working together to deliver operational intelligence at scale."
          />

          <div className="mt-14">
            <EcosystemPillars />
          </div>

          <EcosystemTabs />
        </Reveal>
      </Container>
    </Section>
  );
}
