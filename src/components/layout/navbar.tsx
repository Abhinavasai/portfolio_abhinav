"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { navItems, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [tick, setTick] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname);
      return;
    }

    const ids = ["about", "experience", "skills", "contact"];
    const observers: IntersectionObserver[] = [];

    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(`/#${id}`);
        },
        { threshold: 0.3, rootMargin: "-64px 0px -38% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    }

    return () => observers.forEach((obs) => obs.disconnect());
  }, [pathname]);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => !t), 700);
    return () => clearInterval(id);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return activeSection === href;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "relative transition-all duration-500",
          scrolled
            ? "border-b border-line bg-surface/90 backdrop-blur-2xl shadow-[0_1px_0_var(--line)]"
            : "bg-transparent"
        )}
      >
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

        <Container>
          <div className="flex h-14 items-center justify-between gap-4">
            <div className="flex shrink-0 items-center gap-3.5">
              <div className="hidden items-center gap-2 sm:flex">
                <span
                  style={{ fontFamily: "ui-monospace, monospace" }}
                  className="text-[9px] font-semibold uppercase tracking-[0.28em] text-muted"
                >
                  SYS
                </span>
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full bg-emerald-400 transition-opacity duration-300",
                    tick ? "opacity-100" : "opacity-20"
                  )}
                />
              </div>

              <Link href="/" className="font-display text-sm font-semibold tracking-tight">
                {siteConfig.name.split(" ")[0]}
                <span className="gradient-text">.</span>
              </Link>
            </div>

            <nav className="hidden flex-1 items-center justify-center gap-0.5 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-3.5 py-2 text-sm font-medium transition-colors hover:text-text"
                  style={{ color: isActive(item.href) ? "var(--accent)" : "var(--muted)" }}
                >
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "var(--accent-soft)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="hidden shrink-0 items-center gap-3 md:flex">
              <ThemeToggle />
              <Link
                href="/#contact"
                className="bracket-frame inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent transition-all hover:border-accent"
                style={{ background: "var(--accent-soft)" }}
              >
                Transmit
                <span style={{ fontFamily: "ui-monospace, monospace" }} className="text-[10px] opacity-70">
                  -&gt;
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                aria-label="Toggle navigation"
                onClick={() => setOpen((v) => !v)}
                className="glass-panel flex h-9 w-9 items-center justify-center rounded-xl text-muted transition-colors hover:text-text"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {open ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="h-4 w-4" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="h-4 w-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0.96 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.97 }}
            transition={{ duration: 0.22, ease: [0.2, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
            className="scanline-overlay glass-panel mx-3 mt-1 rounded-2xl p-4 md:hidden"
          >
            <div className="mb-3 border-b border-line pb-3">
              <span className="hud-label">Navigation</span>
            </div>

            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors",
                    isActive(item.href) ? "text-accent" : "text-muted hover:text-text"
                  )}
                  style={isActive(item.href) ? { background: "var(--accent-soft)" } : {}}
                >
                  <span style={{ fontFamily: "ui-monospace, monospace" }} className="text-[10px] text-accent opacity-50">
                    //
                  </span>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 border-t border-line pt-4">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-accent"
                style={{ background: "var(--accent-soft)" }}
              >
                Transmit
                <span style={{ fontFamily: "ui-monospace, monospace" }}>-&gt;</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
