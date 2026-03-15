import { HeroSection } from "@/components/sections/home/hero";
import { EcosystemSection } from "@/components/sections/home/ecosystem";
import { WhyTeamsSection } from "@/components/sections/home/why-teams";
import { AiFactorySection } from "@/components/sections/home/ai-factory";
import { NewsroomSection } from "@/components/sections/home/newsroom";
import { AiOsSection } from "@/components/sections/home/ai-os";
import { MoreProductsSection } from "@/components/sections/home/more-products";
import { PricingSection } from "@/components/sections/home/pricing";
import { ClosingCtaSection } from "@/components/sections/home/closing-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EcosystemSection />
      <WhyTeamsSection />
      <AiFactorySection />
      <NewsroomSection />
      <AiOsSection />
      <MoreProductsSection />
      <PricingSection />
      <ClosingCtaSection />
    </>
  );
}
