import { PageHero } from "@/components/sections/shared/page-hero";
import { VideoPlaceholder } from "@/components/ui/video-placeholder";

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
      <VideoPlaceholder
        title="Aleria AI Factory"
        className="mx-auto mt-10 max-w-3xl"
      />
    </PageHero>
  );
}
