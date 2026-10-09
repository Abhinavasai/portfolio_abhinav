"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useAccessibleMotion } from "@/components/ui/motion";

export default function Template({ children }: { children: ReactNode }) {
  const reduced = useAccessibleMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}
