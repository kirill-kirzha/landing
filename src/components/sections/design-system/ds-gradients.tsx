import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { Btn } from "@/components/marketing/button";

export function DsGradients() {
  return (
    <Section>
      <Container>
        <SectionHeader
          badge="Gradients & Effects"
          title={<>Surgical <span className="font-normal">Accents</span></>}
          description="The brand gradient (mint → sand) is a signature element used with extreme parsimony. It never fills a surface — it highlights edges, transitions, and moments of interaction."
        />

        <div className="mt-14">
          <h3 className="type-heading">Call-to-Action Gradients</h3>
          <p className="type-body-sm mt-2 text-muted-foreground">
            Gradients live on CTAs as border treatments, never as fills. The
            gradient is a warm shimmer at the edge of a button — a refinement
            detail that rewards close attention, not a decoration that screams.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-6">
              <p className="type-label text-muted-foreground">Primary CTA</p>
              <code className="mt-1 block font-mono text-xs text-quaternary">
                .btn-primary-gradient
              </code>
              <p className="type-body-sm mt-3 text-tertiary">
                Espresso fill with a 1.5px gradient border (mint → sand). The
                gradient is barely perceptible — it distinguishes a premium CTA
                from a flat dark button.
              </p>
              <div className="mt-6">
                <Btn variant="primary">Let&apos;s Talk</Btn>
              </div>
            </div>
            <div className="rounded-lg border border-border p-6">
              <p className="type-label text-muted-foreground">Outline CTA</p>
              <code className="mt-1 block font-mono text-xs text-quaternary">
                .border-gradient-glow
              </code>
              <p className="type-body-sm mt-3 text-tertiary">
                Frosted glass body with gradient border and soft ambient glow.
                More visible than primary — used sparingly for signature
                secondary actions.
              </p>
              <div className="mt-6">
                <Btn variant="outline_gradient">Try Aleria</Btn>
              </div>
            </div>
          </div>
        </div>

        <DsLisere />
        <DsOtherEffects />
        <DsParsimonyrules />
      </Container>
    </Section>
  );
}

function DsLisere() {
  return (
    <div className="mt-14">
      <h3 className="type-heading">Le Liséré — Gradient Separator</h3>
      <code className="mt-1 block font-mono text-xs text-quaternary">
        .line-gradient
      </code>
      <p className="type-body-sm mt-3 text-muted-foreground">
        A single pixel. The brand gradient stretched horizontally, fading to
        transparent at both edges. It marks transitions — between the header and
        content, between sections of different weight. Maximum 1–2 visible in
        any viewport at a time.
      </p>
      <div className="mt-6">
        <p className="type-body-sm mb-3 text-tertiary">Live render:</p>
        <div className="line-gradient" aria-hidden="true" />
      </div>
    </div>
  );
}

function DsOtherEffects() {
  return (
    <div className="mt-14">
      <h3 className="type-heading">Other Gradient Effects</h3>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="border-gradient rounded-lg p-5">
          <code className="font-mono text-xs text-foreground">.border-gradient</code>
          <p className="type-body-sm mt-2 text-tertiary">
            Solid background + gradient border. For selected feature cards — not
            every card.
          </p>
        </div>
        <div className="rounded-lg border border-border p-5">
          <code className="font-mono text-xs text-foreground">
            .text-gradient-desert-mint
          </code>
          <p className="text-gradient-desert-mint type-metric mt-2">145x</p>
          <p className="type-body-sm mt-2 text-tertiary">
            Gradient text on a key metric or keyword. Maximum 1 per page.
          </p>
        </div>
      </div>
    </div>
  );
}

function DsParsimonyrules() {
  return (
    <div className="mt-10 rounded-lg border border-border bg-muted p-6">
      <h3 className="type-heading">Parsimony Rules</h3>
      <ul className="mt-4 space-y-2">
        <li className="type-body-sm text-muted-foreground">
          <strong className="text-foreground">Never</strong> use gradient as a
          section background fill.
        </li>
        <li className="type-body-sm text-muted-foreground">
          <strong className="text-foreground">.text-gradient-desert-mint</strong>{" "}
          — maximum 1 element per page.
        </li>
        <li className="type-body-sm text-muted-foreground">
          <strong className="text-foreground">.border-gradient</strong> — for
          selected cards with purpose, not all cards.
        </li>
        <li className="type-body-sm text-muted-foreground">
          <strong className="text-foreground">.line-gradient</strong> — maximum
          1–2 visible in any viewport.
        </li>
        <li className="type-body-sm text-muted-foreground">
          If everything glows,{" "}
          <strong className="text-foreground">nothing stands out</strong>.
        </li>
      </ul>
    </div>
  );
}
