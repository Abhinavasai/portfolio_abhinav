"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  const gridPlacement = className
    ?.split(" ")
    .filter((name) => name.includes("col-span-") || name.includes("row-span-"))
    .join(" ");
  return (
    <div className={cn("shared-card-scene h-full min-w-0", gridPlacement)}>
      <div
        className={cn(
          "kinetic-card section-ring glass-panel relative h-full rounded-[28px]",
          className,
        )}
      >
        <div className="card-sheen" aria-hidden="true" />
        {children}
      </div>
    </div>
  );
}
