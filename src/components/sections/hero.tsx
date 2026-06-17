"use client";

import { ArrowRight, Download } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { heroBadges, highlights, siteConfig } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ParticleCanvas } from "@/components/ui/canvas-bg";
import { Reveal, TiltCard, StaggerGroup, StaggerItem } from "@/components/ui/motion";

function useTypewriter(text: string, startDelay = 900, charDelay = 38) {
  const [displayed, setDisplayed] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    const timer = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          if (interval) clearInterval(interval);
          setFinished(true);
        }
      }, charDelay);
    }, startDelay);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [text, startDelay, charDelay]);

  return { displayed, finished };
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.028, delayChildren: 0.12 }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 44, rotateX: -55 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring" as const, stiffness: 180, damping: 18 }
  }
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const { displayed: titleText, finished: titleDone } = useTypewriter(siteConfig.title);
  const nameChars = siteConfig.name.split("");
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const sweepY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const sweepOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.2]);
  const leftDepth = useTransform(scrollYProgress, [0, 1], [0, 84]);
  const rightDepth = useTransform(scrollYProgress, [0, 1], [0, 52]);

  const pauseMarquee = () => {
    if (marqueeRef.current) marqueeRef.current.style.animationPlayState = "paused";
  };
  const resumeMarquee = () => {
    if (marqueeRef.current) marqueeRef.current.style.animationPlayState = "running";
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <ParticleCanvas className="h-full w-full opacity-60 dark:opacity-100" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="section-sweep"
          style={prefersReducedMotion ? undefined : { y: sweepY, opacity: sweepOpacity }}
        />
        <div className="absolute left-[-10%] top-[-8%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.18),transparent_65%)] blur-3xl" />
        <div className="absolute right-[-5%] top-[5%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.14),transparent_60%)] blur-3xl" />
      </div>

      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div className="space-y-6" style={prefersReducedMotion ? undefined : { y: leftDepth }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5, ease: [0.21, 1, 0.31, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2 text-sm"
              style={{ background: "var(--surface)" }}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-muted">
                Available for <span className="font-medium text-text">AI / RAG roles</span>
              </span>
            </motion.div>

            {prefersReducedMotion ? (
              <h1 className="font-display text-4xl font-bold leading-[0.95] tracking-tight text-text sm:text-5xl lg:text-6xl xl:text-[5rem]">
                {siteConfig.name}
              </h1>
            ) : (
              <motion.h1
                className="font-display text-4xl font-bold leading-[0.95] tracking-tight text-text sm:text-5xl lg:text-6xl xl:text-[5rem]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ perspective: "600px" }}
              >
                {nameChars.map((char, i) =>
                  char === " " ? (
                    <span key={i} className="inline-block w-[0.28em]">
                      &nbsp;
                    </span>
                  ) : (
                    <motion.span key={i} variants={letterVariants} className="inline-block" style={{ transformStyle: "preserve-3d" }}>
                      {char}
                    </motion.span>
                  )
                )}
              </motion.h1>
            )}

            <div className="mt-2 min-h-[2rem] text-lg font-medium text-muted sm:text-xl">
              <span>{titleText}</span>
              {!titleDone && <span className="ml-0.5 inline-block animate-blink text-accent">|</span>}
            </div>

            <Reveal delay={0.05}>
              <p className="max-w-xl text-base text-muted">
                I design and ship systems that connect retrieval research, product-grade interfaces, and cloud delivery. The focus is practical:
                measurable AI quality, clean software architecture, and experiences people can trust.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div ref={marqueeRef} className="flex w-max gap-3 animate-marquee" onMouseEnter={pauseMarquee} onMouseLeave={resumeMarquee}>
                  {[...heroBadges, ...heroBadges].map((item, i) => (
                    <Badge key={i} className="shrink-0 border border-line bg-surface px-3 py-1 text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/#projects" size="lg">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href={siteConfig.resume} variant="secondary" size="lg" download>
                  Download Resume
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Reveal>

            <StaggerGroup className="mt-4 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.label}>
                    <Card className="iridescent-border h-full p-5">
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl p-3" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-text">{item.label}</p>
                          <p className="mt-2 text-sm text-muted">{item.value}</p>
                        </div>
                      </div>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </motion.div>

          <motion.div style={prefersReducedMotion ? undefined : { y: rightDepth }}>
            <Reveal delay={0.1}>
              <TiltCard>
                <Card className="iridescent-border relative overflow-hidden rounded-[36px] p-4 sm:p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_52%)]" />

                  <div className="absolute left-5 top-5 z-10 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="hud-label opacity-80">SUBJECT</span>
                  </div>

                  <div className="section-ring relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 p-3">
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-violet-400/20 to-transparent" />
                    <img
                      src="/picture-headshot.png"
                      alt="Portrait of Abhinava Sai Tirunagari"
                      className="aspect-[4/5] w-full rounded-[24px] object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 rounded-[20px] border border-white/10 bg-slate-900/60 p-4 backdrop-blur-xl">
                      <div className="flex items-center gap-2 text-sm text-violet-200">
                        <span className="hud-label text-[9px]">SYS://</span>
                        Building benchmarked AI systems with real delivery constraints.
                      </div>
                    </div>
                  </div>
                </Card>
              </TiltCard>
            </Reveal>
          </motion.div>
        </div>
      </Container>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="section-divider" />
        </div>
      </div>
    </section>
  );
}
