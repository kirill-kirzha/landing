import { Check, Minus, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Btn } from "@/components/marketing/button";
import type { Plan, Currency } from "./pricing-data";

interface PricingCardProps {
  plan: Plan;
  currency: Currency;
}

function PriceDisplay({ plan, currency }: PricingCardProps) {
  if (plan.isFree) {
    const zero = currency === "USD" ? "$0" : "0";
    const suffix = currency === "AED" ? " AED / mo" : " / mo";
    return (
      <>
        <span className="type-metric">{zero}</span>
        <span className="type-body-sm text-muted-foreground">{suffix}</span>
      </>
    );
  }
  if (plan.isEnterprise) {
    return <span className="type-metric text-muted-foreground">Custom</span>;
  }

  const value = currency === "USD"
    ? `$${plan.price!.usd}`
    : `${plan.price!.aed}`;
  const suffix = currency === "AED" ? " AED / mo" : " / mo";

  return (
    <>
      <span className="type-metric">{value}</span>
      <span className="type-body-sm text-muted-foreground">{suffix}</span>
    </>
  );
}

export function PricingCard({ plan, currency }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl p-6 lg:p-8",
        plan.highlighted
          ? "border-gradient-glow"
          : "border border-border bg-background",
      )}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
          Most popular
        </span>
      )}

      <h3 className="type-heading">{plan.name}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <PriceDisplay plan={plan} currency={currency} />
      </div>
      <p className="type-body-sm mt-3 text-tertiary">{plan.tagline}</p>

      <div className="mt-6">
        <Btn
          href={plan.cta.href}
          variant={plan.highlighted ? "primary" : plan.isEnterprise ? "outline_gradient" : "secondary"}
          className="w-full"
        >
          {plan.cta.label}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Btn>
      </div>

      <div className="mt-6 flex-1 border-t border-border pt-6">
        <p className="type-body-sm mb-3 font-medium">Features</p>
        <ul className="space-y-2.5" role="list">
          {plan.features.map((f) => (
            <li key={f.name} className="flex items-center gap-2.5">
              <FeatureIcon included={f.included} />
              <span className={cn("type-body-sm", f.included ? "text-muted-foreground" : "text-quaternary")}>
                {f.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border-t border-border pt-6">
        <p className="type-body-sm mb-3 font-medium">Usage</p>
        <ul className="space-y-2 type-body-sm text-tertiary" role="list">
          {plan.limits.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FeatureIcon({ included }: { included: boolean | "soon" }) {
  if (included === true) {
    return <Check className="size-4 shrink-0 text-brand-mint" aria-hidden="true" />;
  }
  if (included === "soon") {
    return (
      <span className="shrink-0 text-[0.625rem] font-semibold uppercase tracking-wider text-brand-sand">
        Soon
      </span>
    );
  }
  return <Minus className="size-4 shrink-0 text-quaternary" aria-hidden="true" />;
}
