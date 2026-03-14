import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CASE_STUDIES } from "@/config/case-studies";
import { CaseStudyHero } from "@/components/sections/customers/case-study-hero";
import { CaseStudyEntity } from "@/components/sections/customers/case-study-entity";
import { CaseStudyChange } from "@/components/sections/customers/case-study-change";
import { CaseStudyCapabilities } from "@/components/sections/customers/case-study-capabilities";
import { PageCta } from "@/components/sections/shared/page-cta";

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const cs = CASE_STUDIES.find((c) => c.slug === slug);
    return {
      title: cs?.title ?? "Case Study",
      description: cs?.summary,
    };
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <>
      <CaseStudyHero
        title={cs.title}
        industry={cs.industry}
        location={cs.location}
      />
      <CaseStudyEntity text={cs.entity} />
      <CaseStudyChange
        headline={cs.changeHeadline}
        intro={cs.changeIntro}
        shifts={cs.shifts}
      />
      <CaseStudyCapabilities capabilities={cs.capabilities} />
      <PageCta
        title={
          <>
            Build Your <span className="font-normal">AI</span> Factory.
          </>
        }
        primaryLabel="Let's Talk"
        primaryHref="/contact"
      />
    </>
  );
}
