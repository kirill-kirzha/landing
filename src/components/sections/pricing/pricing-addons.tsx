import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { Reveal } from "@/components/ui/reveal";
import { addons } from "./pricing-addons-data";

export function PricingAddons() {
  return (
    <Section background="muted" spacing="lg" divider="both">
      <Container>
        <Reveal>
          <SectionHeader
            badge="Add-Ons"
            title="Modular capabilities"
            description="Each scales with your team size."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {addons.map((addon) => (
              <div
                key={addon.id}
                className="rounded-xl border border-border bg-background p-6 lg:p-8"
              >
                <h3 className="type-heading text-foreground">{addon.title}</h3>
                <p className="type-body-sm mt-2 text-tertiary">{addon.description}</p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {addon.tiers.map((tier) => (
                    <div
                      key={tier.name}
                      className="rounded-lg border border-border bg-muted/50 p-4"
                    >
                      <p className="type-label text-foreground">{tier.name}</p>
                      {tier.seats && (
                        <p className="type-body-sm mt-1 text-tertiary">{tier.seats}</p>
                      )}
                      {tier.limit && tier.limit !== "—" && (
                        <p className="type-body-sm text-tertiary">{tier.limit}</p>
                      )}
                      <p className="type-metric mt-2 text-foreground">
                        {tier.price ? `${tier.price} AED/mo` : "Contact Sales"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
