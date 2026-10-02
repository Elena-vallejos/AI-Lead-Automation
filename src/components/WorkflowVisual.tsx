"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, ClipboardList, Database, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const icons = [ClipboardList, Bot, Database, Mail];

export function WorkflowVisual() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();
  const nodes = t.hero.nodes.map((n, i) => ({ ...n, icon: icons[i] }));
  return (
    <div className="relative rounded-3xl border border-line bg-deep/80 p-6 shadow-2xl shadow-black/40">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-brand/80" />
          <span className="h-3 w-3 rounded-full bg-teal-light/70" />
          <span className="h-3 w-3 rounded-full bg-mist/30" />
        </div>
        <span className="rounded-full bg-teal/40 px-3 py-1 text-xs font-medium text-teal-light">
          {t.hero.preview}
        </span>
      </div>
      <ol className="relative space-y-4">
        <span
          className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-brand via-teal-light to-brand/40"
          aria-hidden
        />
        {nodes.map((n, i) => (
          <motion.li
            key={i}
            className="relative flex items-center gap-4 rounded-2xl border border-line bg-card p-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.4 }}
          >
            <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal">
              <n.icon className="h-6 w-6 text-white" aria-hidden />
              {!reduce && (
                <motion.span
                  className="absolute inset-0 rounded-xl ring-2 ring-brand"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: nodes.length * 1.2 - 1.2,
                    delay: 1.2 + i * 1.2,
                  }}
                  aria-hidden
                />
              )}
            </span>
            <div>
              <p className="font-semibold text-white">{n.label}</p>
              <p className="text-sm text-mist/70">{n.sub}</p>
            </div>
            <span className="ml-auto text-xs font-medium text-brand">
              {t.hero.step} {i + 1}
            </span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
