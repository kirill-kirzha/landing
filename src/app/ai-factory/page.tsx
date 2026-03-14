import type { Metadata } from "next";
import { FactoryHero } from "@/components/sections/ai-factory/factory-hero";
import { FactoryLayers } from "@/components/sections/ai-factory/factory-layers";
import { FactoryBenefits } from "@/components/sections/ai-factory/factory-benefits";
import { FactoryDeployed } from "@/components/sections/ai-factory/factory-deployed";

export const metadata: Metadata = {
  title: "AI Factory",
  description: "Design, build and operate sovereign AI ecosystems.",
};

export default function AiFactoryPage() {
  return (
    <>
      <FactoryHero />
      <FactoryLayers />
      <FactoryBenefits />
      <FactoryDeployed />
    </>
  );
}
