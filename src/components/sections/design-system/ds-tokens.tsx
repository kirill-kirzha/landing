import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";

const layoutTokens = [
  { token: "--header-height", value: "4rem (64px)", usage: "Sticky header, scroll offsets" },
  { token: "--z-header", value: "50", usage: "Fixed header" },
  { token: "--z-overlay", value: "40", usage: "Overlays, backdrops" },
  { token: "--z-modal", value: "60", usage: "Dialogs, modals" },
  { token: "--z-tooltip", value: "70", usage: "Tooltips, toasts" },
];

const shadows = [
  { token: "shadow-xs", usage: "Subtle lift" },
  { token: "shadow-sm", usage: "Cards, buttons" },
  { token: "shadow-md", usage: "Dropdowns, popovers" },
  { token: "shadow-lg", usage: "Modals, dialogs" },
  { token: "shadow-xl", usage: "Hero elements" },
];

const durations = [
  { token: "--duration-fast", value: "150ms", usage: "Hover, focus" },
  { token: "--duration-normal", value: "200ms", usage: "Interactions" },
  { token: "--duration-slow", value: "300ms", usage: "Page-level transitions" },
];

export function DsTokens() {
  return (
    <Section>
      <Container>
        <SectionHeader
          badge="Tokens"
          title={<>Layout & <span className="font-normal">Motion</span> Tokens</>}
          description="CSS custom properties for layout, elevation, and timing."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <h3 className="type-heading">Layout</h3>
            <div className="mt-4 space-y-3">
              {layoutTokens.map((t) => (
                <div key={t.token} className="border-b border-border pb-3 last:border-0">
                  <code className="font-mono text-xs text-foreground">{t.token}</code>
                  <p className="type-body-sm">{t.value}</p>
                  <p className="type-body-sm text-quaternary">{t.usage}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="type-heading">Shadows</h3>
            <div className="mt-4 space-y-3">
              {shadows.map((s) => (
                <div key={s.token} className="flex items-center gap-4 border-b border-border pb-3 last:border-0">
                  <div className={`h-10 w-10 shrink-0 rounded-lg bg-background ${s.token}`} />
                  <div>
                    <code className="font-mono text-xs text-foreground">{s.token}</code>
                    <p className="type-body-sm text-quaternary">{s.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="type-heading">Transitions</h3>
            <div className="mt-4 space-y-3">
              {durations.map((d) => (
                <div key={d.token} className="border-b border-border pb-3 last:border-0">
                  <code className="font-mono text-xs text-foreground">{d.token}</code>
                  <p className="type-body-sm">{d.value}</p>
                  <p className="type-body-sm text-quaternary">{d.usage}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="type-heading">Easing</h3>
              <code className="mt-2 block font-mono text-xs text-tertiary">
                cubic-bezier(0.4, 0, 0.2, 1)
              </code>
              <p className="type-body-sm mt-1 text-quaternary">
                Standard easing for all CSS and Framer Motion transitions
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
