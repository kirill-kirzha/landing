import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";

const typeScale = [
  { cls: "type-display", label: "Display", size: "44–88px", weight: "700", sample: "Hero Title" },
  { cls: "type-title", label: "Title", size: "28–52px", weight: "700", sample: "Section Title" },
  { cls: "type-heading", label: "Heading", size: "18–24px", weight: "600", sample: "Card Heading" },
  { cls: "type-body", label: "Body", size: "16–18px", weight: "400", sample: "Body text for section descriptions and paragraphs." },
  { cls: "type-body-sm", label: "Body Small", size: "14px", weight: "400", sample: "Smaller body text for details and feature lists." },
  { cls: "type-label", label: "Label", size: "12–14px", weight: "500", sample: "Section Label" },
  { cls: "type-metric", label: "Metric", size: "24–40px", weight: "700", sample: "145x" },
];

export function DsTypography() {
  return (
    <Section>
      <Container>
        <SectionHeader
          badge="Typography"
          title={<>Type <span className="font-normal">Scale</span></>}
          description="Fluid typography with clamp() for seamless scaling between 375px and 1440px. Always use .type-* classes — never combine manual font-size, weight, and tracking."
        />

        <div className="mt-14">
          <h3 className="type-heading">Font Stack</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border p-5">
              <p className="type-label text-muted-foreground">Headings</p>
              <p className="mt-2 font-serif text-2xl font-bold">Playfair Display</p>
              <p className="mt-1 font-mono text-xs text-quaternary">
                Applied to h1, h2 via CSS
              </p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <p className="type-label text-muted-foreground">Body</p>
              <p className="mt-2 text-2xl font-bold">Manrope</p>
              <p className="mt-1 font-mono text-xs text-quaternary">
                font-sans (default)
              </p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <p className="type-label text-muted-foreground">Code</p>
              <p className="mt-2 font-mono text-2xl font-bold">Geist Mono</p>
              <p className="mt-1 font-mono text-xs text-quaternary">font-mono</p>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="type-heading">Scale</h3>
          <div className="mt-6 space-y-6">
            {typeScale.map((t) => (
              <div key={t.cls} className="border-b border-border pb-6 last:border-0">
                <div className="flex flex-wrap items-baseline gap-4">
                  <code className="font-mono text-xs text-foreground">.{t.cls}</code>
                  <span className="text-xs text-quaternary">
                    {t.size} · weight {t.weight}
                  </span>
                </div>
                <p
                  className={`mt-2 text-foreground ${t.cls}`}
                  style={
                    ["type-display", "type-title"].includes(t.cls)
                      ? { fontFamily: "var(--font-serif)" }
                      : undefined
                  }
                >
                  {t.sample}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="type-heading">Optical Features</h3>
          <ul className="mt-4 space-y-2">
            <li className="type-body-sm text-muted-foreground">
              <code className="font-mono text-xs text-foreground">text-wrap: balance</code>{" "}
              on h1, h2 — balanced line breaks
            </li>
            <li className="type-body-sm text-muted-foreground">
              <code className="font-mono text-xs text-foreground">text-wrap: pretty</code>{" "}
              on paragraphs — prevents orphans
            </li>
            <li className="type-body-sm text-muted-foreground">
              <code className="font-mono text-xs text-foreground">
                font-feature-settings: &quot;kern&quot;, &quot;liga&quot;, &quot;calt&quot;
              </code>{" "}
              on all headings
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}
