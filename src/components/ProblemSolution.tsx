"use client";

import {
  CheckCircle2,
  Clock,
  FileSpreadsheet,
  FolderX,
  BellOff,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/lib/i18n";

const icons = [Clock, FileSpreadsheet, BellOff, FolderX];

export function ProblemSolution() {
  const { t } = useLanguage();
  const pairs = t.problem.items.map((p, i) => ({ ...p, icon: icons[i] }));
  return (
    <section id="solutions" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.problem.eyebrow}
          title={t.problem.title}
          description={t.problem.description}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {pairs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-line bg-deep p-6 shadow-lg shadow-black/20">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand">
                    <p.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {p.problem}
                    </h3>
                    <p className="mt-1 text-mist/70">{p.detail}</p>
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-3 rounded-xl bg-teal/25 p-4">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal-light"
                    aria-hidden
                  />
                  <p className="text-sm text-mist">
                    <span className="font-semibold text-white">{t.problem.withAutomation} </span>
                    {p.solution}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
