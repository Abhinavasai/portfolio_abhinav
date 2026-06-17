"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, LayoutGrid, LayoutList } from "lucide-react";

import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const NAV_HEIGHT = 56;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal, TiltCard, StaggerGroup, StaggerItem } from "@/components/ui/motion";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════
   Horizontal scroll gallery — used on the homepage (with limit)
   ═══════════════════════════════════════════════════════════════ */

function HorizontalSlide({
  project,
  progress,
  index,
  total,
}: {
  project: (typeof projects)[number];
  progress: import("framer-motion").MotionValue<number>;
  index: number;
  total: number;
}) {
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const segment = 1 / total;
  const center = (index + 0.5) * segment;

  const fadeIn = Math.max(0, center - segment * 0.3);
  const fadeOut = Math.min(1, center + segment * 0.3);
  const exitOut = Math.min(1, center + segment);

  const slideOpacity = useTransform(
    progress,
    isFirst
      ? [0, fadeOut, exitOut]
      : isLast
        ? [fadeIn - segment * 0.7, fadeIn, 1]
        : [Math.max(0, center - segment), fadeIn, center, fadeOut, exitOut],
    isFirst
      ? [1, 1, 0.4]
      : isLast
        ? [0.4, 1, 1]
        : [0.4, 1, 1, 1, 0.4]
  );
  const slideScale = useTransform(
    progress,
    isFirst
      ? [0, fadeOut, exitOut]
      : isLast
        ? [fadeIn - segment * 0.7, fadeIn, 1]
        : [Math.max(0, center - segment), fadeIn, center, fadeOut, exitOut],
    isFirst
      ? [1, 1, 0.92]
      : isLast
        ? [0.92, 1, 1]
        : [0.92, 1, 1, 1, 0.92]
  );

  return (
    <motion.div
      className="flex h-full w-screen shrink-0 items-center px-6 sm:px-10 lg:px-16"
      style={{ opacity: slideOpacity, scale: slideScale }}
    >
      <div className="mx-auto w-full max-w-5xl">
        <Card
          className={cn(
            "iridescent-border relative overflow-hidden p-8 sm:p-10 lg:p-12",
            "transition-shadow duration-500 hover:shadow-[0_24px_80px_rgba(167,139,250,0.22)]"
          )}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80`} />
          <div className="absolute inset-[1px] rounded-[27px] bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0))]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            {/* Left content */}
            <div className="flex flex-col justify-center">
              <p className="hud-label">{project.category}</p>
              <h3 className="mt-3 font-display text-3xl font-bold text-text sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-2 text-base text-muted sm:text-lg">{project.tagline}</p>

              <p className="mt-5 text-sm text-muted sm:text-base">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item} className="bg-white/10 text-text dark:bg-white/5">
                    {item}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-5">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-sm font-medium text-text transition-opacity hover:opacity-70"
                >
                  View case study <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
                {project.links.github !== "#" && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    className="inline-flex items-center text-sm text-muted transition-colors hover:text-text"
                  >
                    <Github className="mr-1.5 h-4 w-4" /> GitHub
                  </Link>
                )}
              </div>
            </div>

            {/* Right — key outcome */}
            <div className="flex flex-col justify-center">
              <div className="rounded-[24px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl dark:bg-black/20">
                <p className="hud-label mb-3">Key outcome</p>
                <p className="text-base text-text/90 sm:text-lg">{project.impact}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}

function ScrollProgress({
  progress,
  total,
}: {
  progress: import("framer-motion").MotionValue<number>;
  total: number;
}) {
  return (
    <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
      {Array.from({ length: total }, (_, i) => {
        const segment = 1 / total;
        const start = i * segment;
        const mid = start + segment * 0.5;
        return (
          <ScrollDot key={i} progress={progress} start={start} mid={mid} isFirst={i === 0} />
        );
      })}
    </div>
  );
}

function ScrollDot({
  progress,
  start,
  mid,
  isFirst,
}: {
  progress: import("framer-motion").MotionValue<number>;
  start: number;
  mid: number;
  isFirst: boolean;
}) {
  const width = useTransform(
    progress,
    isFirst ? [0, mid + 0.1] : [Math.max(0, start - 0.05), mid, mid + 0.1],
    isFirst ? [28, 8] : [8, 28, 8]
  );
  const opacity = useTransform(
    progress,
    isFirst ? [0, mid + 0.1] : [Math.max(0, start - 0.05), mid, mid + 0.1],
    isFirst ? [1, 0.3] : [0.3, 1, 0.3]
  );

  return (
    <motion.div
      className="h-2 rounded-full bg-accent"
      style={{ width, opacity }}
    />
  );
}

function HorizontalGallery({ items }: { items: readonly (typeof projects)[number][] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalSlides = items.length;
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(totalSlides - 1) * 100}vw`]);

  return (
    <div
      id="projects"
      ref={containerRef}
      style={{ height: `${totalSlides * 100}vh` }}
      className="relative"
    >
      <div
        className="sticky overflow-hidden"
        style={{ top: NAV_HEIGHT, height: `calc(100vh - ${NAV_HEIGHT}px)` }}
      >
        {/* Section heading pinned at top */}
        <div className="absolute inset-x-0 top-0 z-10 pt-6">
          <Container>
            <div className="flex items-end justify-between">
              <div>
                <p className="hud-label mb-2">Projects</p>
                <h2 className="font-display text-2xl font-bold text-text sm:text-3xl">
                  AI evaluation, RAG systems, and robust builds.
                </h2>
              </div>
              <motion.div
                className="hidden items-center gap-2 text-sm text-muted sm:flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span>Scroll to explore</span>
                <ArrowRight className="h-4 w-4 animate-pulse" />
              </motion.div>
            </div>
          </Container>
        </div>

        {/* Horizontal track */}
        <motion.div
          className="flex h-full"
          style={{ x, width: `${totalSlides * 100}vw` }}
        >
          {items.map((project, i) => (
            <HorizontalSlide
              key={project.slug}
              project={project}
              progress={scrollYProgress}
              index={i}
              total={totalSlides}
            />
          ))}
        </motion.div>

        {/* Progress dots */}
        <ScrollProgress progress={scrollYProgress} total={totalSlides} />

        {/* Browse all CTA */}
        <div className="absolute bottom-10 right-6 z-10 sm:right-10 lg:right-16">
          <Button href="/projects" variant="secondary" size="lg">
            Browse all projects
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Decorative sweep */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="section-sweep" />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Traditional grid/list — used on /projects page (no limit)
   ═══════════════════════════════════════════════════════════════ */

type ViewMode = "grid" | "list";

function GridCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <TiltCard>
      <Card
        className={cn(
          "iridescent-border group relative h-full overflow-hidden p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(167,139,250,0.18)]"
        )}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80`} />
        <div className="absolute inset-[1px] rounded-[27px] bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0))]" />

        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="hud-label">{project.category}</p>
              <h3 className="mt-2 text-2xl font-semibold text-text">{project.title}</h3>
              <p className="mt-2 text-sm text-muted sm:text-base">{project.tagline}</p>
            </div>
            <div className="shrink-0 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-text backdrop-blur-xl">
              Featured
            </div>
          </div>

          <motion.div
            className="mt-5 flex flex-wrap gap-2"
            initial="rest"
            whileHover="hover"
          >
            {project.stack.map((item, i) => (
              <motion.div
                key={item}
                variants={{
                  rest: { y: 0 },
                  hover: {
                    y: -4,
                    transition: { type: "spring", stiffness: 400, damping: 18, delay: i * 0.035 }
                  }
                }}
              >
                <Badge className="bg-white/10 text-text dark:bg-white/5">{item}</Badge>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-5 text-sm text-muted sm:text-base">{project.description}</p>

          <div className="mt-5 rounded-[20px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl dark:bg-black/20">
            <p className="hud-label mb-2">Key outcome</p>
            <p className="text-sm text-text/90 sm:text-base">{project.impact}</p>
          </div>

          <div className="mt-5 flex items-center gap-4 pt-1">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center text-sm font-medium text-text transition-opacity hover:opacity-70"
            >
              View case study <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
            {project.links.github !== "#" && (
              <Link
                href={project.links.github}
                target="_blank"
                className="inline-flex items-center text-sm text-muted transition-colors hover:text-text"
              >
                <Github className="mr-1.5 h-4 w-4" /> GitHub
              </Link>
            )}
          </div>
        </div>
      </Card>
    </TiltCard>
  );
}

function ListRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group border-b border-line last:border-0">
      <button
        type="button"
        className="flex w-full items-start gap-5 px-6 py-5 text-left transition-colors hover:bg-accentSoft/40"
        onClick={() => setExpanded((v) => !v)}
      >
        <span
          style={{ fontFamily: "ui-monospace, monospace" }}
          className="w-10 shrink-0 pt-0.5 text-xl font-bold tabular-nums text-muted/40"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <div>
            <p className="hud-label mb-1">{project.category}</p>
            <h3 className="text-lg font-semibold text-text transition-colors group-hover:text-accent">
              {project.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((s) => (
              <Badge key={s} className="text-[11px]">{s}</Badge>
            ))}
          </div>
        </div>

        <motion.span
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-0.5 shrink-0 text-muted"
        >
          <ArrowUpRight className="h-5 w-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 1, 0.31, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pl-[4.25rem]">
              <p className="text-sm text-muted">{project.description}</p>
              <div
                className="mt-4 rounded-[16px] border border-line p-4"
                style={{ background: "var(--accent-soft)" }}
              >
                <p className="hud-label mb-1.5">Key outcome</p>
                <p className="text-sm text-text">{project.impact}</p>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                >
                  View case study <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </Link>
                {project.links.github !== "#" && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    className="inline-flex items-center text-sm text-muted hover:text-text"
                  >
                    <Github className="mr-1.5 h-3.5 w-3.5" /> GitHub
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Main export — picks horizontal gallery or traditional grid
   ═══════════════════════════════════════════════════════════════ */

type ProjectGridProps = {
  limit?: number;
  withHeading?: boolean;
};

export function ProjectGrid({ limit, withHeading = true }: ProjectGridProps) {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<ViewMode>("grid");
  const items = typeof limit === "number" ? projects.slice(0, limit) : projects;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const sweepY = useTransform(scrollYProgress, [0, 1], [32, -32]);
  const sweepOpacity = useTransform(scrollYProgress, [0, 1], [0.16, 0.5]);
  const stageY = useTransform(scrollYProgress, [0, 1], [30, -20]);

  if (limit && !prefersReducedMotion) {
    return <HorizontalGallery items={items} />;
  }

  const toggle = (
    <div className="flex items-center gap-1 rounded-xl border border-line p-1" style={{ background: "var(--surface)" }}>
      {(["grid", "list"] as ViewMode[]).map((mode) => (
        <button
          key={mode}
          type="button"
          onClick={() => setView(mode)}
          aria-label={`${mode} view`}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
            view === mode ? "text-accent" : "text-muted hover:text-text"
          )}
          style={view === mode ? { background: "var(--accent-soft)" } : {}}
        >
          {mode === "grid" ? <LayoutGrid className="h-4 w-4" /> : <LayoutList className="h-4 w-4" />}
        </button>
      ))}
    </div>
  );

  const content = (
    <AnimatePresence mode="wait">
      {view === "grid" ? (
        <motion.div
          key="grid"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28, ease: [0.21, 1, 0.31, 1] }}
        >
          <StaggerGroup className="grid gap-6 lg:grid-cols-2">
            {items.map((project) => (
              <StaggerItem key={project.slug}>
                <GridCard project={project} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </motion.div>
      ) : (
        <motion.div
          key="list"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28, ease: [0.21, 1, 0.31, 1] }}
          className="overflow-hidden rounded-[24px] border border-line"
          style={{ background: "var(--surface)" }}
        >
          {items.map((project, i) => (
            <ListRow key={project.slug} project={project} index={i} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!withHeading) {
    return (
      <div>
        <div className="mb-6 flex justify-end">{toggle}</div>
        {content}
      </div>
    );
  }

  return (
    <Container>
      <div ref={sectionRef} className="relative">
        <motion.div
          className="section-sweep"
          style={prefersReducedMotion ? undefined : { y: sweepY, opacity: sweepOpacity }}
        />
        <Section
          id="projects"
          className="section-hud-shell"
          eyebrow="Projects"
          title="AI evaluation, RAG systems, and robust full-stack builds."
          description="A curated set of projects that emphasizes retrieval quality, system design, and polished software delivery."
        >
          <motion.div style={prefersReducedMotion ? undefined : { y: stageY }}>
            <div className="mb-6 flex justify-end">{toggle}</div>
            <Reveal>{content}</Reveal>
          </motion.div>
        </Section>
        <div className="pointer-events-none absolute inset-x-0 bottom-0">
          <div className="section-divider" />
        </div>
      </div>
    </Container>
  );
}
