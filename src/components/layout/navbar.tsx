"use client";

import { useAccessibleMotion } from "@/components/ui/motion";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduced = useAccessibleMotion();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-3">
          <Link
            href="/"
            aria-label="Abhinav home"
            className="flex items-center gap-3"
          >
            <span className="primary-button flex h-10 w-10 items-center justify-center rounded-xl font-display text-lg font-bold">
              AT
            </span>
            <span className="hidden font-display text-base font-semibold sm:block">
              Abhinav<span className="text-accent">.</span>
            </span>
          </Link>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-accentSoft hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/#contact"
              className="primary-button hidden min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold xl:inline-flex"
            >
              Let’s talk <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : -8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 border-b border-line bg-surface px-6 py-4 shadow-soft lg:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-muted hover:bg-accentSoft hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
