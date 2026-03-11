import Image from "next/image";
import { ArrowRight, Download, Sparkles } from "lucide-react";

import { heroBadges, highlights, siteConfig } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal, StaggerGroup, StaggerItem, TiltCard } from "@/components/ui/motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-aurora opacity-90 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-glow blur-3xl" />
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal>
            <div>
              <Badge className="mb-5 bg-accentSoft text-accent">Available for AI, RAG, and product engineering roles</Badge>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] text-balance sm:text-6xl lg:text-7xl">
                {siteConfig.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">{siteConfig.description}</p>
              <p className="mt-5 max-w-2xl text-base text-muted">
                I design and ship systems that connect retrieval research, product-grade interfaces, and cloud delivery. The focus is practical: measurable AI quality, clean software architecture, and experiences people can trust.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {heroBadges.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/#projects" size="lg">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href={siteConfig.resume} variant="secondary" size="lg" download>
                  Download Resume
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <StaggerItem key={item.label}>
                      <Card className="h-full p-5">
                        <div className="flex items-start gap-4">
                          <div className="rounded-2xl bg-accentSoft p-3 text-accent">
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
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <TiltCard>
              <Card className="relative overflow-hidden rounded-[36px] p-4 sm:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_50%)]" />
                <div className="section-ring relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 p-3">
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-400/20 to-transparent" />
                  <Image
                    src="/picture-headshot.jpeg"
                    alt="Portrait of Abhinava Sai Tirunagari"
                    width={960}
                    height={1200}
                    priority
                    className="h-auto w-full rounded-[24px] object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/10 bg-slate-900/50 p-4 backdrop-blur-xl">
                    <div className="flex items-center gap-2 text-sm text-sky-200">
                      <Sparkles className="h-4 w-4" />
                      Building benchmarked AI systems with real delivery constraints.
                    </div>
                  </div>
                </div>
              </Card>
            </TiltCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
