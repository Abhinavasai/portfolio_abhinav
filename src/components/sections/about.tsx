import { aboutParagraphs, quickFacts, stats } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/motion";
import { Section } from "@/components/ui/section";

export function AboutSection() {
  return (
    <Container>
      <Section
        id="about"
        eyebrow="About"
        title="I build AI systems that hold up under both product and research scrutiny."
        description="A full-stack engineering profile shaped by RAG experimentation, production delivery, and healthcare-oriented problem solving."
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <Card className="p-6 sm:p-8">
              <div className="space-y-5 text-base text-muted sm:text-lg">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Card>
          </Reveal>

          <StaggerGroup className="grid gap-4">
            {quickFacts.map((fact) => (
              <StaggerItem key={fact.label}>
                <Card className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{fact.label}</p>
                  <p className="mt-3 text-base font-medium text-text">{fact.value}</p>
                </Card>
              </StaggerItem>
            ))}
            <StaggerItem>
              <Card className="grid gap-4 p-5 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{stat.label}</p>
                    <p className="mt-3 text-sm text-muted">{stat.value}</p>
                  </div>
                ))}
              </Card>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </Section>
    </Container>
  );
}
