import type { CaseStudy } from "@/components/sections/shared/case-study-cards";
import { PageHero } from "@/components/sections/shared/page-hero";
import { ClientLogos } from "@/components/sections/shared/client-logos";
import { BeforeAfter } from "@/components/sections/shared/before-after";
import { CaseStudyCards } from "@/components/sections/shared/case-study-cards";
import { PageCta } from "@/components/sections/shared/page-cta";
import { IndustryDeployment } from "./industry-deployment";
import { IndustryAreas } from "./industry-areas";
import { IndustryBenefits } from "./industry-benefits";

export interface FunctionalArea {
  title: string;
  description: string;
  capabilities: string;
}

export interface ClientBenefit {
  benefit: string;
  impact: string;
}

export interface IndustryPageData {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  logos: readonly { name: string; src: string }[];
  beforeAfter: readonly { before: string; after: string }[];
  deployment: {
    title: string;
    description: string;
  };
  areas: readonly FunctionalArea[];
  benefits: readonly ClientBenefit[];
  caseStudies: readonly CaseStudy[];
}

interface IndustryLayoutProps {
  data: IndustryPageData;
}

export function IndustryLayout({ data }: IndustryLayoutProps) {
  return (
    <>
      <PageHero
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
      />
      <ClientLogos logos={data.logos} />
      <BeforeAfter
        rows={data.beforeAfter}
        badge="The shift"
        title={
          <>
            Before vs <span className="font-normal">after</span>
          </>
        }
      />
      <IndustryDeployment
        title={data.deployment.title}
        description={data.deployment.description}
      />
      <IndustryAreas areas={data.areas} />
      <IndustryBenefits benefits={data.benefits} />
      <CaseStudyCards
        studies={data.caseStudies}
        badge="Proof"
        title={
          <>
            Deployed in <span className="font-normal">production</span>
          </>
        }
      />
      <PageCta
        title={
          <>
            Build Your <span className="font-normal">AI</span> Factory.
          </>
        }
      />
    </>
  );
}
