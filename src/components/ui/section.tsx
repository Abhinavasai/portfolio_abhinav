import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal, SectionAtmosphere } from "./motion";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-24", className)}>
      <SectionAtmosphere
        variant={id === "skills" ? 1 : id === "contact" ? 2 : 0}
      />
      <Reveal className="relative mb-12 max-w-3xl">
        {eyebrow ? <p className="hud-label mb-4">{eyebrow}</p> : null}
        <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </Reveal>
      {children}
    </section>
  );
}
