import type { SectionProps } from "@/types";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { WindowFrame } from "@/components/marketing/window-frame";
import { VideoPlayer } from "@/components/ui/video-player";
import { Reveal } from "@/components/ui/reveal";

const products = [
  {
    title: "Dashboard AI",
    description:
      "Executive intelligence. Live, explorable, traceable. Natural language queries with instant charts.",
    href: "/solutions/dashboard-ai",
    windowTitle: "Aleria Dashboard AI",
    videoSrc: "/videos/dashboard-ai.mp4",
  },
  {
    title: "Video AI",
    description:
      "Real-time intelligence across every camera stream. Detect, track and alert at scale.",
    href: "/solutions/video-ai",
    windowTitle: "Aleria Video AI",
    videoSrc: "/videos/video-ai.mp4",
  },
] as const;

export function MoreProductsSection({ className }: SectionProps) {
  return (
    <Section background="dark" divider="both" className={className}>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,oklch(0.84_0.08_155/0.06),transparent)]"
        aria-hidden="true"
      />
      <Container>
        <Reveal>
          <SectionHeader
            badge="More"
            title={
              <>
                <span className="font-normal">Intelligence</span> layers for
                every operation
              </>
            }
          />

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {products.map((p) => (
              <div key={p.title}>
                <WindowFrame title={p.windowTitle} className="border-border/20">
                  <VideoPlayer src={p.videoSrc} />
                </WindowFrame>
                <h3 className="type-heading mt-6">{p.title}</h3>
                <p className="type-body-sm mt-2 text-tertiary">
                  {p.description}
                </p>
                <div className="mt-4">
                  <LinkArrow href={p.href}>Discover</LinkArrow>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
