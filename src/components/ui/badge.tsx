import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "kinetic-badge inline-flex max-w-full items-center rounded-full border border-line bg-surface px-3 py-1 text-sm font-medium leading-5 text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
