import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { Btn } from "@/components/marketing/button";

type BtnVariant = "primary" | "secondary" | "outline_gradient" | "ghost";

const buttonVariants: { variant: BtnVariant; label: string; desc: string }[] = [
  {
    variant: "primary",
    label: "Primary CTA",
    desc: "Espresso fill + gradient border. Main actions only.",
  },
  {
    variant: "secondary",
    label: "Secondary",
    desc: "Solid border, transparent fill. Supporting actions.",
  },
  {
    variant: "outline_gradient",
    label: "Outline Gradient",
    desc: "Gradient border + frosted glow. Signature secondary CTAs.",
  },
  {
    variant: "ghost",
    label: "Ghost",
    desc: "No border, muted text. Tertiary actions, nav links.",
  },
];

export function DsButtons() {
  return (
    <Section background="muted" divider="both">
      <Container>
        <SectionHeader
          badge="Components"
          title={<>Button <span className="font-normal">Variants</span></>}
          description="All buttons are rounded-full with .focus-ring for keyboard accessibility. Sizes: sm (h-9), default (h-10), lg (h-11). Press feedback: active:scale-[0.98]."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {buttonVariants.map((b) => (
            <div key={b.variant} className="rounded-lg border border-border bg-background p-6">
              <p className="type-label text-muted-foreground">{b.label}</p>
              <code className="mt-1 block font-mono text-xs text-quaternary">
                variant=&quot;{b.variant}&quot;
              </code>
              <p className="type-body-sm mt-3 text-tertiary">{b.desc}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Btn variant={b.variant} size="sm">Small</Btn>
                <Btn variant={b.variant}>Default</Btn>
                <Btn variant={b.variant} size="lg">Large</Btn>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
