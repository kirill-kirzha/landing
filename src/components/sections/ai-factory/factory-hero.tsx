import { PageHero } from "@/components/sections/shared/page-hero";

export function FactoryHero() {
  return (
    <PageHero
      badge="AI Factory"
      title={
        <>
          Design, build and <span className="font-normal">operate</span> sovereign
          AI ecosystems
        </>
      }
      subtitle="From infrastructure to intelligent applications."
    >
      <p className="type-body-sm mt-4 text-tertiary">
        For organizations deploying on-premise, air-gapped or at national
        infrastructure scale.
      </p>
    </PageHero>
  );
}
