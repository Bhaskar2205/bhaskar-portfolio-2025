"use client";

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Thin accent bar at the top of the viewport that fills as the visitor scrolls. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-accent print:hidden"
    />
  );
}

/**
 * Counts a stat like "100+" up from zero when it scrolls into view.
 * The server renders the final value, so no-JS visitors, crawlers and print see the real number.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const el = ref.current;
    if (!el || target === null || reduce) return;
    // Printing before the stat was scrolled to must still show the real number.
    const showFinal = () => {
      el.textContent = `${target}${suffix}`;
    };
    window.addEventListener("beforeprint", showFinal);
    if (!inView) {
      el.textContent = `0${suffix}`;
      return () => window.removeEventListener("beforeprint", showFinal);
    }
    const controls = animate(0, target, {
      duration: 1.4,
      ease,
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => {
      controls.stop();
      window.removeEventListener("beforeprint", showFinal);
    };
  }, [inView, reduce, target, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}

export type Milestone = {
  version: string;
  year: string;
  title: string;
  note: string;
  next?: boolean;
};

/** Career shown as product releases: the track draws itself, then each release pops in. */
export function Roadmap({ items }: { items: Milestone[] }) {
  const view = { once: true, margin: "-80px" } as const;
  return (
    <div className="relative">
      {/* desktop: horizontal track */}
      <div className="absolute inset-x-0 top-[11px] hidden h-px bg-line md:block" />
      <motion.div
        className="absolute inset-x-0 top-[11px] hidden h-px origin-left bg-accent md:block"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={view}
        transition={{ duration: 1.8, ease }}
      />
      {/* mobile: vertical track */}
      <div className="absolute inset-y-0 left-[11px] w-px bg-line md:hidden" />
      <motion.div
        className="absolute inset-y-0 left-[11px] w-px origin-top bg-accent md:hidden"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={view}
        transition={{ duration: 1.8, ease }}
      />

      <ol className="relative grid gap-9 md:grid-cols-6 md:gap-5">
        {items.map((m, i) => (
          <motion.li
            key={m.version}
            className="relative pl-10 md:pl-0 md:pt-11"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.22 }}
          >
            <span
              aria-hidden
              className={`absolute left-0 top-0 grid h-[23px] w-[23px] place-items-center rounded-full border-2 ${
                m.next ? "border-accent bg-accent" : "border-accent bg-bg"
              }`}
            >
              {m.next && (
                <span className="absolute inset-[-2px] rounded-full bg-accent/50 motion-safe:animate-ping" />
              )}
              <span className={`h-2 w-2 rounded-full ${m.next ? "bg-bg" : "bg-accent"}`} />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {m.version} · {m.year}
            </p>
            <h3 className="mt-1.5 font-semibold tracking-tight">{m.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{m.note}</p>
            {m.next && (
              <span className="mt-3 inline-flex rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-bg">
                Shipping next
              </span>
            )}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
