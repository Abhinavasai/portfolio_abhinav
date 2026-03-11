"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/motion";
import { Section } from "@/components/ui/section";

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
        event.currentTarget.reset();
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <Container>
      <Section
        id="contact"
        eyebrow="Contact"
        title="If you need someone who can reason through AI quality and ship the product around it, let’s talk."
        description="Open to roles and collaborations spanning RAG systems, AI evaluation, developer-facing platforms, and modern full-stack product work."
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Card className="h-full p-6 sm:p-8">
              <div className="space-y-5">
                <div className="rounded-[24px] bg-accentSoft p-5 text-accent">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">Now</p>
                  <p className="mt-3 text-lg font-medium text-text">{siteConfig.status}</p>
                </div>

                <div className="space-y-4 text-sm text-muted">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-accent" />
                    <Link href={`mailto:${siteConfig.email}`} className="hover:text-text">
                      {siteConfig.email}
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>{siteConfig.location}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link href={siteConfig.github} target="_blank" className="glass-panel rounded-full p-3 text-muted transition-colors hover:text-text">
                    <Github className="h-4 w-4" />
                  </Link>
                  <Link href={siteConfig.linkedin} target="_blank" className="glass-panel rounded-full p-3 text-muted transition-colors hover:text-text">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="p-6 sm:p-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-text">
                    Name
                    <input
                      name="name"
                      required
                      className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm text-text placeholder:text-muted"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-text">
                    Email
                    <input
                      name="email"
                      type="email"
                      required
                      className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm text-text placeholder:text-muted"
                      placeholder="your@email.com"
                    />
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-medium text-text">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="rounded-[24px] border border-line bg-surface px-4 py-3 text-sm text-text placeholder:text-muted"
                    placeholder="Tell me what you're building, hiring for, or evaluating."
                  />
                </label>
                <div className="flex flex-wrap items-center gap-4">
                  <Button type="submit" size="lg" disabled={status === "loading" || status === "success"}>
                    {status === "loading" ? "Sending\u2026" : "Send message"}
                    {status !== "loading" && <Send className="ml-2 h-4 w-4" />}
                  </Button>
                  {status === "success" && (
                    <p className="text-sm font-medium text-emerald-500">Message sent — I'll be in touch soon!</p>
                  )}
                  {status === "error" && (
                    <p className="text-sm font-medium text-red-500">{errorMsg}</p>
                  )}
                </div>
              </form>
            </Card>
          </Reveal>
        </div>
      </Section>
    </Container>
  );
}
