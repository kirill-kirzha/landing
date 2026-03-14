import { cn } from "@/lib/utils";
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
            title={
              <>
                <span className="font-normal">Modular</span> capabilities
              </>
            }
            description="Each scales with your team size."
          />
          <div className="mt-14 space-y-6">
            {addons.map((addon) => (
              <div
                key={addon.id}
                className="overflow-hidden rounded-xl border border-border bg-background"
              >
                <div className="border-b border-border/50 px-6 py-5 lg:px-8">
                  <h3 className="type-heading">{addon.title}</h3>
                  <p className="type-body-sm mt-1 text-tertiary">{addon.description}</p>
                </div>
                <div className="grid grid-cols-3 divide-x divide-border/50">
                  {addon.tiers.map((tier, i) => (
                    <div key={tier.name} className={cn("px-5 py-5 lg:px-8", i === 1 && "bg-muted/30")}>
                      <p className="type-label text-quaternary">{tier.name}</p>
                      {tier.seats && (
                        <p className="mt-2 text-sm text-tertiary">{tier.seats}</p>
                      )}
                      {tier.limit && tier.limit !== "—" && (
                        <p className="text-sm text-tertiary">{tier.limit}</p>
                      )}
                      <p className="mt-3 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        {tier.price ? (
                          <>
                            {tier.price}
                            <span className="ml-1 text-xs font-normal text-quaternary">AED/mo</span>
                          </>
                        ) : (
                          <span className="text-sm font-medium text-muted-foreground">Contact Sales</span>
                        )}
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
