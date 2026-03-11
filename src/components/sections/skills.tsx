import { skillGroups } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { StaggerGroup, StaggerItem } from "@/components/ui/motion";
import { Section } from "@/components/ui/section";

export function SkillsSection() {
  return (
    <Container>
      <Section
        id="skills"
        eyebrow="Skills"
        title="A stack built for AI product delivery, not isolated demos."
        description="Grouped by where they matter most in practice: model workflows, APIs, interfaces, infrastructure, and domain-facing execution."
      >
        <StaggerGroup className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <StaggerItem key={group.title}>
                <Card className="h-full p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-accentSoft p-3 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text">{group.title}</h3>
                      <div className="mt-2 h-1.5 w-28 rounded-full bg-accentSoft">
                        <div className="h-full w-4/5 rounded-full bg-[linear-gradient(90deg,var(--accent),var(--secondary))]" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Section>
    </Container>
  );
}
