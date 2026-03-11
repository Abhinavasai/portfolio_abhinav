import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal, StaggerGroup, StaggerItem, TiltCard } from "@/components/ui/motion";
import { Section } from "@/components/ui/section";

type ProjectGridProps = {
  limit?: number;
  withHeading?: boolean;
};

export function ProjectGrid({ limit, withHeading = true }: ProjectGridProps) {
  const items = typeof limit === "number" ? projects.slice(0, limit) : projects;

  const content = (
    <StaggerGroup className="grid gap-6 lg:grid-cols-2">
      {items.map((project) => (
        <StaggerItem key={project.slug}>
          <TiltCard>
            <Card className="group relative h-full overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80`} />
              <div className="absolute inset-[1px] rounded-[27px] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-accent">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-text">{project.title}</h3>
                    <p className="mt-3 text-sm text-muted sm:text-base">{project.tagline}</p>
                  </div>
                  <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-text backdrop-blur-xl">
                    Featured
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item} className="bg-white/10 text-text dark:bg-white/5">
                      {item}
                    </Badge>
                  ))}
                </div>

                <p className="mt-6 text-sm text-muted sm:text-base">{project.description}</p>

                <div className="mt-6 rounded-[24px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl dark:bg-black/20">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Key outcome</p>
                  <p className="mt-3 text-sm text-text/90 sm:text-base">{project.impact}</p>
                </div>

                <div className="mt-6 flex items-center gap-4 pt-2">
                  <Link href={`/projects/${project.slug}`} className="inline-flex items-center text-sm font-medium text-text transition-opacity hover:opacity-80">
                    View case study
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link href={project.links.github} target="_blank" className="inline-flex items-center text-sm text-muted transition-colors hover:text-text">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </div>
              </div>
            </Card>
          </TiltCard>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );

  if (!withHeading) {
    return content;
  }

  return (
    <Container>
      <Section
        id="projects"
        eyebrow="Projects"
        title="AI evaluation, RAG systems, and robust full-stack builds."
        description="A curated set of projects that emphasizes retrieval quality, system design, and polished software delivery."
      >
        <Reveal>{content}</Reveal>
        {limit ? (
          <div className="mt-8 flex justify-center sm:justify-start">
            <Button href="/projects" variant="secondary">
              Browse all projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ) : null}
      </Section>
    </Container>
  );
}
