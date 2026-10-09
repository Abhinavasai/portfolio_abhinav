"use client";

import {
  useAccessibleMotion,
  Reveal,
  SectionAtmosphere,
} from "@/components/ui/motion";
import { Card } from "@/components/ui/card";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Container } from "@/components/ui/container";

export function ExperienceSection() {
  const reduced = useAccessibleMotion();
  return (
    <section id="experience" className="experience-section py-20 sm:py-28">
      <Container>
        <SectionAtmosphere variant={1} />
        <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="hud-label mb-5">02 / The journey</p>
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Different teams.
                <br />
                <span className="text-accent">One drive to build.</span>
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-muted">
                From AI-enabled healthcare to enterprise platforms and research.
                A career shaped by solving real problems, together.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-line bg-surface px-4 py-3 text-xs font-medium text-muted">
                <span className="h-2 w-2 rounded-full bg-secondary" /> Research.
                Engineering. Delivery.
              </div>
            </Reveal>
          </div>
          <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-9">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={`${item.company}-${item.role}`}
                  className="relative"
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ type: "spring", stiffness: 100, damping: 24 }}
                >
                  <span
                    className="timeline-dot absolute -left-[31px] top-9 h-3 w-3 rounded-full sm:-left-[43px]"
                    aria-hidden="true"
                  />
                  <Card className="experience-card rounded-3xl border border-line p-6 sm:p-8">
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-semibold text-accent">
                        {item.period}
                      </span>
                      <span className="text-xs text-muted">
                        {String(index + 1).padStart(2, "0")} / {item.type}
                      </span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accentSoft text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-xl font-semibold sm:text-2xl">
                          {item.role}
                        </h3>
                        <p className="mt-1 font-medium text-secondary">
                          {item.company}
                        </p>
                        <p className="mt-1 text-xs text-muted">
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-3 border-t border-line pt-5 text-sm leading-relaxed text-muted">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
