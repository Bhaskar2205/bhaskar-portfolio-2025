"use client";

import { motion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Honors the visitor's reduced-motion setting: movement is dropped, only the fade remains.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function PrintButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <button type="button" onClick={() => window.print()} className={className}>
      {children}
    </button>
  );
}
