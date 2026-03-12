import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";

export function DsAccessibility() {
  return (
    <Section background="muted" divider="top">
      <Container>
        <SectionHeader
          badge="Accessibility"
          title={<>Accessible by <span className="font-normal">Default</span></>}
          description="WCAG AAA compliant. Every interaction has keyboard support, every decorative element is hidden from assistive tech."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-border bg-background p-6">
            <p className="type-label text-muted-foreground">Focus Ring</p>
            <p className="type-body-sm mt-3 text-muted-foreground">
              All interactive elements use{" "}
              <code className="font-mono text-xs text-foreground">.focus-ring</code>{" "}
              — a 2px ring with offset, visible only on keyboard navigation
              (focus-visible).
            </p>
            <div className="mt-4">
              <button className="focus-ring rounded-lg border border-border px-4 py-2 text-sm">
                Tab to me
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-background p-6">
            <p className="type-label text-muted-foreground">ARIA Patterns</p>
            <ul className="mt-3 space-y-2">
              <li className="type-body-sm text-muted-foreground">
                <code className="font-mono text-xs text-foreground">aria-label</code>{" "}
                on all nav landmarks
              </li>
              <li className="type-body-sm text-muted-foreground">
                <code className="font-mono text-xs text-foreground">aria-expanded</code>{" "}
                on toggle buttons
              </li>
              <li className="type-body-sm text-muted-foreground">
                <code className="font-mono text-xs text-foreground">aria-hidden</code>{" "}
                on decorative elements
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-background p-6">
            <p className="type-label text-muted-foreground">Reduced Motion</p>
            <p className="type-body-sm mt-3 text-muted-foreground">
              <code className="font-mono text-xs text-foreground">
                MotionConfig reducedMotion=&quot;user&quot;
              </code>{" "}
              wraps the app. CSS{" "}
              <code className="font-mono text-xs text-foreground">
                prefers-reduced-motion
              </code>{" "}
              disables all animations.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-background p-6">
          <h3 className="type-heading">Contrast Ratios — WCAG AAA</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <span className="type-body-sm">Espresso on Paper</span>
              <span className="font-mono text-sm font-bold text-foreground">17.8:1</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <span className="type-body-sm">Muted on Paper</span>
              <span className="font-mono text-sm font-bold text-foreground">8.96:1</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <span className="type-body-sm">Muted on Sand</span>
              <span className="font-mono text-sm font-bold text-foreground">7.73:1</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
