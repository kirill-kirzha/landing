import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { Btn } from "@/components/marketing/button";
import { Reveal } from "@/components/ui/reveal";

const clientLogos = [
  { name: "IHC", src: "/logos/clients/ihc.png" },
  { name: "FAB", src: "/logos/clients/fab.svg" },
  { name: "Aldar", src: "/logos/clients/aldar.png" },
] as const;

export function FactoryDeployed() {
  return (
    <Section background="dark" divider="both">
      <Container>
        <SectionHeader
          badge="Deployed at scale"
          title={
            <>
              Sovereign AI at <span className="font-normal">national</span> scale
            </>
          }
          description="Aleria powers sovereign AI infrastructure at the UAE national data center — delivering enterprise-grade intelligence for government and industry, fully isolated and under sovereign control."
        />
        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clientLogos.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                className="h-7 w-auto object-contain opacity-60 grayscale brightness-0 invert sm:h-8"
              />
            ))}
          </div>
        </Reveal>
        <div className="mt-10 flex justify-center">
          <Btn href="/contact" variant="primary" size="lg">
            Build your AI Factory
          </Btn>
        </div>
      </Container>
    </Section>
  );
}
