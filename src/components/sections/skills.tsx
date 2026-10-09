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
        eyebrow="04 / The toolkit"
        title="From model to interface. And everything between."
        description="The tools I reach for to turn complex problems into useful products."
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
