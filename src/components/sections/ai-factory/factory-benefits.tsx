import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { Reveal } from "@/components/ui/reveal";

const benefits = [
  {
    title: "Sovereignty",
    description:
      "You own everything. Your data, your models, your infrastructure.",
  },
  {
    title: "Independence",
    description:
      "Open architecture, no lock-in, no external dependencies.",
  },
  {
    title: "Completeness",
    description:
      "From infrastructure to data to agents to applications — one ecosystem.",
  },
  {
    title: "Modularity",
    description:
      "Activate capabilities as you grow. Extend without starting over.",
  },
] as const;

export function FactoryBenefits() {
  return (
    <Section background="muted" divider="both">
      <Container>
        <SectionHeader
          badge="What it means for you"
          title={
            <>
              Built for <span className="font-normal">sovereignty</span>
            </>
          }
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <Reveal key={benefit.title}>
              <div className="rounded-xl border border-border/40 bg-background p-6">
                <h3 className="type-heading text-foreground">
                  {benefit.title}
                </h3>
                <p className="type-body-sm mt-2 text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
