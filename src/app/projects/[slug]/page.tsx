import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { projects, siteConfig } from "@/lib/data";
import { Reveal, TiltCard, SectionAtmosphere } from "@/components/ui/motion";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: `Project | ${siteConfig.name}`,
    };
  }

  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="pb-20 pt-10 sm:pt-14">
      <SectionAtmosphere variant={1} />
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-muted transition-colors hover:text-text"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to projects
      </Link>

      <Reveal className="mt-8">
        <TiltCard>
          <div className="project-image-stage overflow-hidden rounded-[2rem] border border-line p-3 sm:p-5">
            <Image
              src={project.image}
              alt={`Concept illustration for ${project.title}`}
              width={project.imageWidth}
              height={project.imageHeight}
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="mx-auto h-auto w-full max-w-4xl rounded-2xl"
            />
          </div>
        </TiltCard>
      </Reveal>

      <Reveal className="mt-8">
          <div
            className={`rounded-[36px] border border-line bg-gradient-to-br ${project.accent} p-[1px]`}
          >
            <div className="rounded-[35px] bg-bg/95 p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {project.category}
              </p>
              <p className="mt-3 text-sm text-muted">
                {project.period} · {project.context}
              </p>
              {"contribution" in project && (
                <p className="mt-2 text-sm text-muted">
                  {project.contribution}
                </p>
              )}
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg text-muted">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {project.links.github !== "#" && (
                  <Button href={project.links.github} variant="secondary">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                )}
                {project.links.demo !== "#" && (
                  <Button href={project.links.demo}>
                    {project.links.demo.includes("drive.google.com")
                      ? "Watch walkthrough"
                      : "Project documentation"}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
      </Reveal>

      <Reveal className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Problem
          </p>
          <p className="mt-4 text-sm text-muted sm:text-base">
            {project.problem}
          </p>
        </Card>
        <Card className="p-6 lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Approach
          </p>
          <p className="mt-4 text-sm text-muted sm:text-base">
            {project.approach}
          </p>
        </Card>
      </Reveal>

      <Reveal className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Impact
          </p>
          <p className="mt-4 text-sm text-muted sm:text-base">
            {project.impact}
          </p>
        </Card>
        <Card className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Key outcomes
          </p>
          <ul className="mt-4 space-y-3 text-sm text-muted sm:text-base">
            {project.outcomes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </Container>
  );
}
