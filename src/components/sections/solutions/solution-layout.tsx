import type { SolutionFeature } from "./solution-features";
import type { CaseStudy } from "@/components/sections/shared/case-study-cards";

import { PageHero } from "@/components/sections/shared/page-hero";
import { SolutionProblem } from "./solution-problem";
import { SolutionFeatures } from "./solution-features";
import { DataProtection } from "@/components/sections/shared/data-protection";
import { CaseStudyCards } from "@/components/sections/shared/case-study-cards";
import { PageCta } from "@/components/sections/shared/page-cta";
import { VideoPlaceholder } from "@/components/ui/video-placeholder";

export interface SolutionPageData {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  problem: string;
  features: readonly SolutionFeature[];
  caseStudies?: readonly CaseStudy[];
  ctaLabel?: string;
  ctaHref?: string;
  windowTitle?: string;
  videoSrc?: string;
}

export function SolutionLayout({ data }: { data: SolutionPageData }) {
  return (
    <>
      <PageHero badge={data.badge} title={data.title} subtitle={data.subtitle}>
        <VideoPlaceholder
          title={data.windowTitle ?? data.badge}
          videoSrc={data.videoSrc}
          className="mx-auto mt-10 max-w-3xl"
        />
      </PageHero>
      <SolutionProblem text={data.problem} />
      <SolutionFeatures features={data.features} />
      <DataProtection />
      {data.caseStudies && data.caseStudies.length > 0 && (
        <CaseStudyCards
          studies={data.caseStudies}
          title={
            <>
              Deployed in <span className="font-normal">production</span>
            </>
          }
        />
      )}
      <PageCta
        title={
          <>
            Build Your <span className="font-normal">AI</span> Factory.
          </>
        }
        primaryLabel={data.ctaLabel ?? "Start today"}
        primaryHref={data.ctaHref ?? "/pricing"}
        secondaryLabel="See It in Action"
        secondaryHref="/contact"
      />
    </>
  );
}
