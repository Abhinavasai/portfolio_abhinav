"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { experiences } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const NAV_HEIGHT = 56;

function ExperienceCard({
  item,
  progress,
  index,
  total,
}: {
  item: (typeof experiences)[number];
  progress: import("framer-motion").MotionValue<number>;
  index: number;
  total: number;
}) {
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const segment = 1 / total;
  const start = index * segment;
  const mid = start + segment * 0.15;
  const end = start + segment * 0.85;
  const exitEnd = start + segment;

  const opacity = useTransform(
    progress,
    isFirst
      ? [0, end, exitEnd]
      : isLast
        ? [start, mid, 1]
        : [start, mid, end, exitEnd],
    isFirst
      ? [1, 1, 0]
      : isLast
        ? [0, 1, 1]
        : [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    isFirst
      ? [0, end, exitEnd]
      : isLast
        ? [start, mid, 1]
        : [start, mid, end, exitEnd],
    isFirst
      ? [0, 0, -40]
      : isLast
        ? [60, 0, 0]
        : [60, 0, 0, -40]
  );
  const scale = useTransform(
    progress,
    isFirst ? [0, 0.01] : [start, mid],
    isFirst ? [1, 1] : [0.96, 1]
  );

  const Icon = item.icon;

  return (
    <motion.div
      className="absolute inset-x-0 top-0 flex min-h-full items-start"
      style={{ opacity, y, scale }}
    >
      <Card className="scanline-overlay w-full p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl p-3" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xl font-semibold text-text">{item.role}</p>
              <p className="mt-1 text-base text-accent">{item.company}</p>
              <p className="mt-1 text-sm text-muted">{item.location} | {item.type}</p>
            </div>
          </div>
          <div className="shrink-0 rounded-full bg-accentSoft px-3 py-1 text-sm font-medium text-accent">
            {item.period}
          </div>
        </div>
        <ul className="mt-5 space-y-3 text-sm text-muted sm:text-base">
          {item.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}

function TimelineDot({
  index,
  total,
  progress,
  label,
}: {
  index: number;
  total: number;
  progress: import("framer-motion").MotionValue<number>;
  label: string;
}) {
  const isFirst = index === 0;
  const segment = 1 / total;
  const start = index * segment;
  const mid = start + segment * 0.15;

  const dotScale = useTransform(progress, isFirst ? [0, 0.01] : [start, mid], isFirst ? [1, 1] : [0.7, 1]);
  const dotOpacity = useTransform(progress, isFirst ? [0, 0.01] : [start, mid], isFirst ? [1, 1] : [0.35, 1]);
  const labelOpacity = useTransform(progress, isFirst ? [0, 0.01] : [start, mid], isFirst ? [1, 1] : [0, 1]);
  const labelX = useTransform(progress, isFirst ? [0, 0.01] : [start, mid], isFirst ? [0, 0] : [-8, 0]);

  return (
    <div className="flex items-center gap-3">
      <motion.div
        className="flex h-3 w-3 items-center justify-center"
        style={{ scale: dotScale, opacity: dotOpacity }}
      >
        <div className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(167,139,250,0.5)]" />
      </motion.div>
      <motion.span
        className="text-xs font-medium text-muted"
        style={{ opacity: labelOpacity, x: labelX }}
      >
        {label}
      </motion.span>
    </div>
  );
}

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (prefersReducedMotion) {
    return (
      <Container>
        <Section
          id="experience"
          className="section-hud-shell"
          eyebrow="Experience"
          title="From healthcare quality improvement to product engineering, the work stays outcomes-focused."
          description="A timeline of roles spanning AI-enabled healthcare, front-end product delivery, enterprise engineering, and research environments."
        >
          <div className="grid gap-5">
            {experiences.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={`${item.company}-${item.role}`} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl p-3" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-text">{item.role}</p>
                      <p className="mt-1 text-base text-accent">{item.company}</p>
                      <p className="mt-1 text-sm text-muted">{item.location} | {item.type}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm text-muted sm:text-base">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </Section>
      </Container>
    );
  }

  return (
    <div
      ref={containerRef}
      id="experience"
      style={{ height: `${experiences.length * 100}vh` }}
      className="relative"
    >
      <div
        className="sticky overflow-hidden"
        style={{ top: NAV_HEIGHT, height: `calc(100vh - ${NAV_HEIGHT}px)` }}
      >
        <Container>
          <div
            className="flex items-center"
            style={{ height: `calc(100vh - ${NAV_HEIGHT}px)` }}
          >
            <div className="grid w-full gap-8 lg:grid-cols-[280px_1fr] lg:gap-12 xl:grid-cols-[320px_1fr]">
              {/* Left — sticky info panel */}
              <div className="flex flex-col justify-center">
                <p className="hud-label mb-3">Experience</p>
                <h2 className="font-display text-2xl font-bold leading-tight text-text sm:text-3xl">
                  Outcomes-focused across every role.
                </h2>
                <p className="mt-3 text-sm text-muted">
                  AI-enabled healthcare, product delivery, enterprise engineering, and research.
                </p>

                {/* Timeline dots */}
                <div className="relative mt-8 space-y-4 pl-1">
                  <div className="absolute left-[5px] top-0 h-full w-px bg-line" />
                  <motion.div
                    className="absolute left-[5px] top-0 h-full w-px origin-top bg-gradient-to-b from-accent via-secondary to-transparent"
                    style={{ scaleY: lineProgress }}
                  />
                  {experiences.map((item, i) => (
                    <TimelineDot
                      key={`${item.company}-${item.role}`}
                      index={i}
                      total={experiences.length}
                      progress={scrollYProgress}
                      label={item.company}
                    />
                  ))}
                </div>
              </div>

              {/* Right — card stage */}
              <div className="relative" style={{ minHeight: 420 }}>
                {experiences.map((item, i) => (
                  <ExperienceCard
                    key={`${item.company}-${item.role}`}
                    item={item}
                    progress={scrollYProgress}
                    index={i}
                    total={experiences.length}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>

        {/* Decorative sweep */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="section-sweep" />
        </div>
      </div>
    </div>
  );
}
