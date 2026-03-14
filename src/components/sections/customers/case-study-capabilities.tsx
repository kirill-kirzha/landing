import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { Reveal } from "@/components/ui/reveal";

interface CaseStudyCapabilitiesProps {
  capabilities: readonly string[];
}

export function CaseStudyCapabilities({ capabilities }: CaseStudyCapabilitiesProps) {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeader
            badge="The deployment"
            title={
              <>
                Capabilities <span className="font-normal">deployed</span>
              </>
            }
            align="left"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-3">
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-mint"
                  aria-hidden="true"
                />
                <span className="type-body-sm text-muted-foreground">{cap}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
