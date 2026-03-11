"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <Container>
        <div
          className={cn(
            "glass-panel flex items-center justify-between rounded-full px-4 py-3 transition-all duration-300 sm:px-5",
            scrolled && "shadow-soft"
          )}
        >
          <Link href="/" className="font-display text-lg font-semibold tracking-tight">
            {siteConfig.name.split(" ")[0]}
            <span className="gradient-text">.</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-text">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link
              href="/#contact"
              className="rounded-full bg-text px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              Let&apos;s build
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle navigation menu"
              className="glass-panel flex h-10 w-10 items-center justify-center rounded-full"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="glass-panel mt-3 rounded-[28px] p-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm text-muted transition-colors hover:bg-accentSoft hover:text-text"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
