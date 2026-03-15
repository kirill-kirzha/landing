import { Check } from "lucide-react";

import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { HoneycombBg } from "@/components/marketing/honeycomb-bg";
import { Btn } from "@/components/marketing/button";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "personal",
    name: "Personal",
    price: "99",
    description:
      "For individuals. AI models, document upload, personal knowledge base, deep research, standard agentic.",
    features: [
      "Top-tier AI models via clean chat interface",
      "Upload documents, build personal knowledge base",
      "Deep research reports with cited outputs",
      "Standard agentic capabilities",
    ],
    cta: { label: "Get started", href: "/pricing" },
    highlighted: false,
  },
  {
    id: "business",
    name: "Business",
    price: "490",
    perSeat: true,
    description:
      "For teams. Everything in Personal + agentic deep thinking, collaborative workspaces, add-on integration, team management.",
    features: [
      "Everything in Personal, for every seat",
      "Agentic deep thinking for complex tasks",
      "Collaborative workspaces and shared sources",
      "Add-on integration: Flows, Datalake, Agents",
      "Team management and access control",
    ],
    cta: { label: "Get started", href: "/pricing" },
    highlighted: true,
  },
  {
    id: "custom",
    name: "Custom Solution",
    price: null,
    description:
      "For enterprise/national scale. Full-stack, on-premise/air-gapped, implementation experts, custom SLA.",
    features: [
      "Full-stack development on Aleria suite",
      "On-premise, air-gapped or Sovereign AI Factory",
      "Implementation experts included",
      "Custom SLA, dedicated support, white-label",
    ],
    cta: { label: "Contact Sales", href: "/contact" },
    highlighted: false,
  },
];

export function PricingPlans() {
  return (
    <Section spacing="lg">
      <HoneycombBg placement="center-left" intensity="subtle" />
      <Container className="relative z-10">
        <Reveal>
          <SectionHeader
            badge="Platform Access"
            title={
              <>
                The <span className="font-normal">foundation</span>
              </>
            }
            description="Included in every Aleria deployment."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "flex flex-col rounded-xl border p-6 lg:p-8",
                  plan.highlighted
                    ? "border-gradient bg-background"
                    : "border-border bg-background",
                )}
              >
                <h3 className="type-heading text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1.5">
                  {plan.price ? (
                    <>
                      <span className="type-metric">{plan.price}</span>
                      <span className="type-body-sm text-muted-foreground">
                        AED/month{plan.perSeat ? " per seat" : ""}
                      </span>
                    </>
                  ) : (
                    <span className="type-heading text-muted-foreground">
                      Contact Sales
                    </span>
                  )}
                </div>
                <p className="type-body-sm mt-3 text-tertiary">
                  {plan.description}
                </p>
                <ul className="mt-6 flex-1 space-y-2.5" role="list">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-brand-mint"
                        aria-hidden="true"
                      />
                      <span className="type-body-sm text-muted-foreground">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Btn
                  href={plan.cta.href}
                  variant={
                    plan.highlighted
                      ? "primary"
                      : plan.price
                        ? "secondary"
                        : "outline_gradient"
                  }
                  className="mt-8 w-full"
                >
                  {plan.cta.label}
                </Btn>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
