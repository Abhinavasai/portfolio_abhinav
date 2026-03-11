import { experiences } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/motion";
import { Section } from "@/components/ui/section";

export function ExperienceSection() {
  return (
    <Container>
      <Section
        id="experience"
        eyebrow="Experience"
        title="From healthcare quality improvement to product engineering, the work stays outcomes-focused."
        description="A timeline of roles spanning AI-enabled healthcare, front-end product delivery, enterprise engineering, and research environments."
      >
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-line md:block" />
          <StaggerGroup className="grid gap-5">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={`${item.company}-${item.role}`}>
                  <Reveal delay={index * 0.04}>
                    <div className="grid gap-4 md:grid-cols-[48px_1fr] md:gap-6">
                      <div className="hidden md:flex">
                        <div className="glass-panel flex h-8 w-8 items-center justify-center rounded-full text-accent">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                      <Card className="p-6 transition-transform duration-300 hover:-translate-y-1">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-xl font-semibold text-text">{item.role}</p>
                            <p className="mt-1 text-base text-accent">{item.company}</p>
                            <p className="mt-1 text-sm text-muted">
                              {item.location} • {item.type}
                            </p>
                          </div>
                          <div className="inline-flex rounded-full bg-accentSoft px-3 py-1 text-sm font-medium text-accent">
                            {item.period}
                          </div>
                        </div>
                        <ul className="mt-5 space-y-3 text-sm text-muted sm:text-base">
                          {item.points.map((point) => (
                            <li key={point} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  </Reveal>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </Section>
    </Container>
  );
}
