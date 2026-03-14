import { PageHero } from "@/components/sections/shared/page-hero";

export function PricingHero() {
  return (
    <PageHero
      title={
        <>
          Transparent pricing. <span className="font-normal">Modular</span> by design.
        </>
      }
      subtitle="Start with the platform. Add the capabilities your organization needs. No bundle bloat."
    />
  );
}
