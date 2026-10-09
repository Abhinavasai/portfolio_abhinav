"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { TiltCard, useAccessibleMotion } from "@/components/ui/motion";
import { heroBadges, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  const reduced = useAccessibleMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });
  const cubeRotation = useTransform(progress, [0, 1], [-24, 65]);
  const cubeY = useTransform(progress, [0, 1], [0, 65]);
  return (
    <section
      ref={heroRef}
      className="hero-section relative overflow-hidden pb-16 pt-12 sm:pt-20 lg:pb-20"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 22 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-xs font-semibold text-muted">
              <span className="h-2 w-2 rounded-full bg-secondary" /> Open to new
              opportunities
            </div>
            <p className="mb-4 font-display text-lg font-medium text-muted">
              Hello, I’m {siteConfig.name}.
            </p>
            <h1 className="max-w-3xl font-display text-[clamp(3.2rem,6.3vw,6.5rem)] font-bold leading-[1.02] tracking-[-0.065em]">
              Intelligence.
              <br />
              <span className="gradient-text">Engineered.</span>
              <br />
              Experiences.
              <br />
              <span className="hero-outline">Elevated.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.title}. Connecting retrieval research, thoughtful
              interfaces, and reliable software to build AI that earns its place
              in the real world.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/#projects" size="lg">
                Explore my work <ArrowUpRight className="ml-3 h-5 w-5" />
              </Button>
              <Button
                href={siteConfig.resume}
                variant="secondary"
                size="lg"
                download
              >
                Resume <Download className="ml-3 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <Github className="h-4 w-4" /> GitHub{" "}
                <ArrowUpRight className="h-3 w-3" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn{" "}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="relative mx-auto w-full max-w-lg pb-8 pt-5"
            initial={reduced ? false : { opacity: 0, y: 30, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 85,
              damping: 22,
              delay: reduced ? 0 : 0.12,
            }}
          >
            <motion.div
              aria-hidden="true"
              className="hero-geometry pointer-events-none absolute -right-5 -top-5"
              style={reduced ? undefined : { rotateZ: cubeRotation, y: cubeY }}
            >
              <div className="geometry-cube">
                {["front", "back", "left", "right", "top", "bottom"].map(
                  (face) => (
                    <span key={face} className={`cube-face cube-${face}`} />
                  ),
                )}
              </div>
            </motion.div>
            <TiltCard>
              <div className="portrait-orbit" aria-hidden="true" />
              <div className="portrait-frame relative overflow-hidden rounded-[2.5rem] border border-line p-3">
                <div className="mb-3 flex items-center justify-between px-3 py-2 text-xs font-semibold text-muted">
                  <span>THE PERSON BEHIND THE BUILD</span>
                  <Sparkles className="h-4 w-4 text-accent" />
                </div>
                <Image
                  src="/illustrated-portrait.webp"
                  alt="Illustration of Abhinav Sai Tirunagari"
                  width={900}
                  height={900}
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="aspect-square w-full rounded-[1.8rem] object-cover"
                />
                <div className="flex items-center justify-between gap-3 px-3 pb-2 pt-5">
                  <div>
                    <p className="font-display text-lg font-semibold">
                      Research meets reality.
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      AI systems · Full-stack engineering
                    </p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accentSoft text-accent">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </TiltCard>
            <div className="portrait-note relative ml-6 mt-4 flex items-center gap-3 rounded-2xl border border-line px-5 py-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accentSoft text-accent">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">
                  Curiosity → working systems
                </p>
                <p className="mt-1 text-xs text-muted">
                  Built with intention, across the stack.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-line pt-6 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="text-xs font-semibold tracking-wide text-muted"
              >
                {badge}
              </span>
            ))}
          </div>
          <a href="#about" className="social-link shrink-0 text-xs text-muted">
            A little more about me <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
