import type { Metadata } from "next";

import { ProjectGrid } from "@/components/sections/projects";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/data";
import { Reveal, SectionAtmosphere } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.name}`,
  description:
    "Selected AI, RAG, and full-stack engineering projects by Abhinav Sai Tirunagari.",
};

export default function ProjectsPage() {
  return (
    <Container className="pb-20 pt-10 sm:pt-14">
      <SectionAtmosphere variant={2} />
      <Reveal className="mb-12 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
          Project Index
        </p>
        <h1 className="text-4xl font-semibold text-balance sm:text-5xl">
          A portfolio centered on AI quality, retrieval systems, and
          product-grade engineering.
        </h1>
        <p className="mt-4 text-base text-muted sm:text-lg">
          These case studies are framed around problem definition, system
          design, and measurable outcomes rather than feature lists alone.
        </p>
      </Reveal>
      <ProjectGrid withHeading={false} />
    </Container>
  );
}
