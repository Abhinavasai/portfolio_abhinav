"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import type { PropsWithChildren } from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

// Keep the first client render consistent with server output, then apply the preference.
export function useAccessibleMotion() {
  const preference = useReducedMotion();
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const compact = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const update = () => setReduced(Boolean(preference) || compact.matches);
    update();
    compact.addEventListener("change", update);
    return () => compact.removeEventListener("change", update);
  }, [preference]);
  return reduced;
}

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useAccessibleMotion();

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 95, damping: 23, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type TiltCardProps = PropsWithChildren<{
  className?: string;
}>;

export function TiltCard({ children, className }: TiltCardProps) {
  const prefersReducedMotion = useAccessibleMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
    mass: 0.6,
  });
  const springY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
    mass: 0.6,
  });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={cn("depth-scene relative", className)}
      ref={ref}
      onPointerMove={(event) => {
        if (
          !ref.current ||
          event.pointerType !== "mouse" ||
          !window.matchMedia("(hover: hover) and (pointer: fine)").matches
        ) {
          return;
        }

        const rect = ref.current.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        rotateY.set((px - 0.5) * 12);
        rotateX.set((0.5 - py) * 12);
      }}
      onPointerLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
    >
      <motion.div
        className="depth-surface"
        whileHover={{ z: 8 }}
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function StaggerGroup({ children, className }: RevealProps) {
  const prefersReducedMotion = useAccessibleMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.04,
            delayChildren: 0.04,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: RevealProps) {
  const prefersReducedMotion = useAccessibleMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ type: "spring", stiffness: 110, damping: 23 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionAtmosphere({ variant = 0 }: { variant?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useAccessibleMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 25 });
  const rotate = useTransform(progress, [0, 1], [-35, 65]);
  const y = useTransform(progress, [0, 1], [45, -60]);
  return (
    <div
      ref={ref}
      className={`section-atmosphere atmosphere-${variant % 3}`}
      aria-hidden="true"
    >
      <motion.div
        className="atmosphere-sculpture"
        style={reduced ? undefined : { rotateZ: rotate, y }}
      >
        <span />
        <span />
        <span />
      </motion.div>
      <div className="atmosphere-glow" />
    </div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const reduced = useAccessibleMotion();
  return (
    <motion.div
      aria-hidden="true"
      className="reading-progress"
      style={{ scaleX: reduced ? scrollYProgress : progress }}
    />
  );
}
