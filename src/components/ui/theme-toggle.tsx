"use client";

import { MonitorCog, MoonStar, SunMedium } from "lucide-react";

import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const themes = [
  { label: "Light", value: "light", icon: SunMedium },
  { label: "Dark", value: "dark", icon: MoonStar },
  { label: "System", value: "system", icon: MonitorCog }
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="glass-panel inline-flex items-center gap-1 rounded-full p-1">
      {themes.map((item) => {
        const Icon = item.icon;
        const active = theme === item.value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => setTheme(item.value)}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors duration-200",
              active && "primary-button shadow-md"
            )}
            aria-label={`Switch theme to ${item.label}`}
            aria-pressed={active}
            title={item.label}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
