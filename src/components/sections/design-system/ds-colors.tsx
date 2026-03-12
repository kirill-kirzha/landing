import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";

const brandColors = [
  { name: "Warm Paper", bg: "bg-background", value: "oklch(0.98 0.004 90)", role: "Primary background" },
  { name: "Espresso", bg: "bg-foreground", value: "oklch(0.11 0.008 55)", role: "Text, dark sections" },
  { name: "Desert Sand", bg: "bg-muted", value: "oklch(0.94 0.025 82)", role: "Section contrast" },
  { name: "Brand Sand", bg: "bg-brand-sand", value: "oklch(0.93 0.05 85)", role: "Warm accent" },
  { name: "Brand Mint", bg: "bg-brand-mint", value: "oklch(0.84 0.2 155)", role: "Primary accent" },
];

const textTiers = [
  { tier: "Primary", token: "text-foreground", usage: "Headings, strong text", color: "text-foreground" },
  { tier: "Secondary", token: "text-muted-foreground", usage: "Body text, descriptions", color: "text-muted-foreground" },
  { tier: "Tertiary", token: "text-tertiary", usage: "Feature details, list items", color: "text-tertiary" },
  { tier: "Quaternary", token: "text-quaternary", usage: "Meta text, footer links", color: "text-quaternary" },
];

export function DsColors() {
  return (
    <Section background="muted" divider="both">
      <Container>
        <SectionHeader
          badge="Colors"
          title={<>Color <span className="font-normal">Palette</span></>}
          description="oklch color space for perceptual uniformity. All text/background combinations pass WCAG AAA (7:1 minimum)."
        />

        <div className="mt-14">
          <h3 className="type-heading">Brand Colors</h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {brandColors.map((c) => (
              <div key={c.name}>
                <div className={`h-20 rounded-lg border border-border ${c.bg}`} />
                <p className="type-body-sm mt-3 font-medium">{c.name}</p>
                <p className="type-body-sm text-tertiary">{c.role}</p>
                <p className="mt-1 font-mono text-xs text-quaternary">{c.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="type-heading">Text Hierarchy — 4 Tiers</h3>
          <p className="type-body-sm mt-2 text-muted-foreground">
            Never use opacity modifiers on text colors. Use the semantic tier
            tokens for consistent hierarchy.
          </p>
          <div className="mt-6 space-y-4 rounded-lg border border-border bg-background p-6">
            {textTiers.map((t) => (
              <div
                key={t.tier}
                className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <p className={`type-heading w-28 shrink-0 ${t.color}`}>{t.tier}</p>
                <p className="type-body-sm text-tertiary">{t.usage}</p>
                <code className="font-mono text-xs text-quaternary sm:ml-auto">
                  {t.token}
                </code>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-background p-6">
          <p className="type-label text-muted-foreground">Dark Mode</p>
          <p className="type-body-sm mt-2 text-muted-foreground">
            Not user-toggled. Applied per-section via{" "}
            <code className="font-mono text-xs text-foreground">
              {"<Section background=\"dark\">"}
            </code>
            . All semantic tokens — including tertiary and quaternary — invert
            automatically via the{" "}
            <code className="font-mono text-xs text-foreground">.dark</code> CSS
            class.
          </p>
        </div>
      </Container>
    </Section>
  );
}
