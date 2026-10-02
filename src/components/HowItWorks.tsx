"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BellRing,
  Clock3,
  Database,
  FileInput,
  MailCheck,
  Send,
  Tag,
  Pause,
  Play,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { fill } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const icons = [FileInput, Database, Database, Tag, BellRing, MailCheck, Clock3];

export function HowItWorks() {
  const { t } = useLanguage();
  const steps = t.how.steps.map((s, i) => ({ ...s, icon: icons[i] }));
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!playing || reduce) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % icons.length),
      3000,
    );
    return () => clearInterval(id);
  }, [playing, reduce]);

  const current = steps[active];

  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.how.eyebrow}
          title={t.how.title}
          description={t.how.description}
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <ol className="relative space-y-3" aria-label={t.how.stepsLabel}>
            <span
              className="absolute left-[27px] top-4 bottom-4 w-px bg-line"
              aria-hidden
            />
            {steps.map((s, i) => {
              const isActive = i === active;
              const done = i < active;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => {
                      setActive(i);
                      setPlaying(false);
                    }}
                    aria-current={isActive ? "step" : undefined}
                    className={`relative flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition-colors ${
                      isActive
                        ? "border-brand bg-card"
                        : "border-transparent hover:bg-card/60"
                    }`}
                  >
                    <span
                      className={`relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-bold ml-3 ${
                        isActive
                          ? "bg-brand text-ink"
                          : done
                            ? "bg-teal-light text-ink"
                            : "bg-card text-mist ring-1 ring-line"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <s.icon
                      className={`h-5 w-5 shrink-0 ${isActive ? "text-brand" : "text-teal-light"}`}
                      aria-hidden
                    />
                    <span
                      className={`font-medium ${isActive ? "text-white" : "text-mist/80"}`}
                    >
                      {s.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-line bg-deep p-6 shadow-2xl shadow-black/30 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-semibold text-brand">
                  {fill(t.how.stepOf, { current: active + 1, total: steps.length })}
                </span>
                <button
                  type="button"
                  onClick={() => setPlaying((p) => !p)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs font-medium text-mist hover:border-teal-light"
                >
                  {playing ? (
                    <>
                      <Pause className="h-3.5 w-3.5" /> {t.how.pause}
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5" /> {t.how.autoplay}
                    </>
                  )}
                </button>
              </div>
              <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-card">
                <motion.div
                  className="h-full bg-brand"
                  animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-teal">
                    <current.icon className="h-7 w-7 text-white" aria-hidden />
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {current.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-mist/80">
                    {current.detail}
                  </p>
                </motion.div>
              </AnimatePresence>
              <p className="mt-8 flex items-center gap-2 border-t border-line pt-5 text-xs text-mist/60">
                <Send className="h-3.5 w-3.5" aria-hidden />
                {t.how.chain}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
