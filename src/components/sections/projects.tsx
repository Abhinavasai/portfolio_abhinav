"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import {
  TiltCard,
  useAccessibleMotion,
  Reveal,
  SectionAtmosphere,
} from "@/components/ui/motion";
import { cn } from "@/lib/utils";

export function ProjectGrid({
  limit,
  withHeading = true,
}: {
  limit?: number;
  withHeading?: boolean;
}) {
  const [category, setCategory] = useState("All");
  const reduced = useAccessibleMotion();
  const base = limit ? projects.slice(0, limit) : projects;
  const categories = [
    "All",
    ...new Set(base.map((project) => project.category)),
  ];
  const items = base.filter(
    (project) => category === "All" || project.category === category,
  );
  const content = (
    <>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {categories.map((value) => (
          <button
            type="button"
            key={value}
            onClick={() => setCategory(value)}
            aria-pressed={category === value}
            className={cn(
              "project-filter relative min-h-11 rounded-full border px-5 text-sm font-medium",
              category === value
                ? "border-accent bg-accentSoft text-accent"
                : "border-line bg-surface text-muted hover:text-text",
            )}
          >
            {value}
          </button>
        ))}
      </div>
      <motion.div
        layout={!reduced}
        className="grid items-stretch gap-6 md:grid-cols-2"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {items.map((project) => {
            const index = base.findIndex((item) => item.slug === project.slug);
            return (
              <motion.article
                key={project.slug}
                layout={!reduced}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduced ? 0 : -12 }}
                transition={{ type: "spring", stiffness: 140, damping: 25 }}
                className={cn(
                  "project-card group flex min-w-0 flex-col overflow-hidden rounded-[2rem] border border-line",
                  index === 0 && "md:col-span-2 md:grid md:grid-cols-2",
                )}
              >
                <div className="project-image-stage flex items-center justify-center overflow-hidden p-3 sm:p-4">
                  <TiltCard className="w-full">
                    <Link
                      href={`/projects/${project.slug}`}
                      aria-label={`Explore ${project.title}`}
                      className="block overflow-hidden rounded-2xl"
                    >
                      <Image
                        src={project.image}
                        alt={`Concept illustration for ${project.title}`}
                        width={project.imageWidth}
                        height={project.imageHeight}
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                    </Link>
                  </TiltCard>
                </div>
                <div className="flex min-w-0 flex-1 flex-col p-6 sm:p-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
                    {project.category}
                  </p>
                  <p className="mb-3 text-xs text-muted">
                    {project.period} · {project.context}
                  </p>
                  <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:text-accent"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mb-7 mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="social-link min-h-11 text-sm font-semibold"
                    >
                      Explore project{" "}
                      <ArrowUpRight className="h-4 w-4 text-accent" />
                    </Link>
                    {project.links.github !== "#" && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="social-link min-h-11 text-xs text-muted"
                      >
                        <Github className="h-4 w-4" /> Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
      {limit && (
        <div className="mt-8 flex justify-end">
          <Link
            href="/projects"
            className="social-link min-h-11 text-sm font-semibold text-accent"
          >
            See all projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </>
  );
  if (!withHeading) return content;
  return (
    <section id="projects" className="py-20 sm:py-28">
      <Container>
        <SectionAtmosphere variant={2} />
        <Reveal className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="hud-label mb-5">03 / Selected work</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Ideas made <span className="text-accent">real.</span>
            </h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-muted lg:justify-self-end">
            Retrieval systems, intelligent workflows, and software built from
            the architecture up. Explore the thinking behind the build.
          </p>
        </Reveal>
        {content}
      </Container>
    </section>
  );
}
