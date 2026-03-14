import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { HoneycombBg } from "@/components/marketing/honeycomb-bg";
import { Reveal } from "@/components/ui/reveal";

export interface SolutionFeature {
  title: string;
  description: string;
}

interface SolutionFeaturesProps {
  features: readonly SolutionFeature[];
  title?: React.ReactNode;
}

export function SolutionFeatures({
  features,
  title = (
    <>
      What it <span className="font-normal">offers</span>
    </>
  ),
}: SolutionFeaturesProps) {
  return (
    <Section>
      <HoneycombBg placement="center-left" intensity="subtle" />
      <Container className="relative z-10">
        <Reveal>
          <SectionHeader badge="Capabilities" title={title} />
          <div className="mt-14 space-y-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group grid grid-cols-1 gap-4 rounded-xl border border-border/40 p-5 transition-colors duration-200 hover:border-border/70 sm:gap-6 sm:p-6 md:grid-cols-[1fr_2fr] md:p-8"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="type-label mt-1 shrink-0 text-quaternary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="type-heading">{f.title}</h3>
                </div>
                <p className="type-body-sm text-tertiary">{f.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
