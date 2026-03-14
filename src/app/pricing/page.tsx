import type { Metadata } from "next";
import { PricingHero } from "@/components/sections/pricing/pricing-hero";
import { PricingPlans } from "@/components/sections/pricing/pricing-plans";
import { PricingAddons } from "@/components/sections/pricing/pricing-addons";
import { PricingEnterprise } from "@/components/sections/pricing/pricing-enterprise";
import { PricingFaq } from "@/components/sections/pricing/pricing-faq";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing. Modular by design.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PricingAddons />
      <PricingEnterprise />
      <PricingFaq />
    </>
  );
}
