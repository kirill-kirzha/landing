import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";

const sectionSpacing = [
  { variant: "Default", padding: "py-14 / py-16 / py-20", usage: "Standard sections" },
  { variant: "Large", padding: "py-16 / py-20 / py-24", usage: "Statement sections" },
  { variant: "None", padding: "—", usage: "Embedded elements, marquee" },
];

const containerWidths = [
  { size: "default", width: "80rem (1280px)", usage: "Standard content" },
  { size: "narrow", width: "48rem (768px)", usage: "Centered text blocks" },
  { size: "wide", width: "90rem (1440px)", usage: "Full-bleed content" },
  { size: "full", width: "No limit", usage: "Edge-to-edge" },
];

const verticalGaps = [
  { gap: "mt-6", usage: "Badge → title, Title → body" },
  { gap: "mt-8 to mt-10", usage: "Body → content block, CTA" },
  { gap: "mt-14", usage: "SectionHeader → main content" },
];

export function DsSpacing() {
  return (
    <Section>
      <Container>
        <SectionHeader
          badge="Spacing"
          title={<>Rhythm & <span className="font-normal">Spacing</span></>}
          description="Progressive responsive spacing. Padding increases with viewport width for proportional breathing room."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <h3 className="type-heading">Section Padding</h3>
            <div className="mt-4 space-y-3">
              {sectionSpacing.map((s) => (
                <div key={s.variant} className="border-b border-border pb-3 last:border-0">
                  <p className="type-body-sm font-medium">{s.variant}</p>
                  <p className="font-mono text-xs text-tertiary">{s.padding}</p>
                  <p className="type-body-sm text-quaternary">{s.usage}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="type-heading">Container Widths</h3>
            <div className="mt-4 space-y-3">
              {containerWidths.map((c) => (
                <div key={c.size} className="border-b border-border pb-3 last:border-0">
                  <p className="type-body-sm font-medium">{c.size}</p>
                  <p className="font-mono text-xs text-tertiary">{c.width}</p>
                  <p className="type-body-sm text-quaternary">{c.usage}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="type-heading">Vertical Gaps</h3>
            <div className="mt-4 space-y-3">
              {verticalGaps.map((g) => (
                <div key={g.gap} className="border-b border-border pb-3 last:border-0">
                  <code className="font-mono text-xs text-foreground">{g.gap}</code>
                  <p className="type-body-sm text-muted-foreground">{g.usage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-border p-6">
          <h3 className="type-heading">Container Horizontal Padding</h3>
          <p className="type-body-sm mt-2 text-muted-foreground">
            Scales with breakpoints:{" "}
            <code className="font-mono text-xs text-foreground">px-5</code> (20px
            mobile) →{" "}
            <code className="font-mono text-xs text-foreground">px-6</code> (24px
            tablet) →{" "}
            <code className="font-mono text-xs text-foreground">px-8</code> (32px
            desktop).
          </p>
        </div>
      </Container>
    </Section>
  );
}
