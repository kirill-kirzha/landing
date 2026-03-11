import { HeroSection } from "@/components/sections/home/hero";
import { ClientsSection } from "@/components/sections/home/clients";
import { EcosystemSection } from "@/components/sections/home/ecosystem";
import { SourcesSection } from "@/components/sections/home/sources";
import { AgenticWorkforceSection } from "@/components/sections/home/agentic-workforce";
import { FlowsSection } from "@/components/sections/home/flows";
import { MoreProductsSection } from "@/components/sections/home/more-products";
import { AiFactorySection } from "@/components/sections/home/ai-factory";
import { WhyTeamsSection } from "@/components/sections/home/why-teams";
import { TryAleriaSection } from "@/components/sections/home/try-aleria";
import { CaseStudiesSection } from "@/components/sections/home/case-studies";
import { ClosingCtaSection } from "@/components/sections/home/closing-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <EcosystemSection />
      <SourcesSection />
      <AgenticWorkforceSection />
      <FlowsSection />
      <MoreProductsSection />
      <AiFactorySection />
      <WhyTeamsSection />
      <TryAleriaSection />
      <CaseStudiesSection />
      <ClosingCtaSection />
    </>
  );
}
