import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
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
      <Container>
        <Reveal>
          <SectionHeader badge="Capabilities" title={title} />
          <div className="mt-14 space-y-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="grid grid-cols-1 gap-6 rounded-xl border border-border/40 bg-card/50 p-6 md:grid-cols-[1fr_2fr] md:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="type-label mt-0.5 text-quaternary">
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
