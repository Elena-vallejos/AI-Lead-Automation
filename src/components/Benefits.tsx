"use client";

import { Eye, HeartHandshake, KanbanSquare, Repeat, Timer } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/lib/i18n";

const icons = [Timer, Repeat, Eye, KanbanSquare, HeartHandshake];

export function Benefits() {
  const { t } = useLanguage();
  const benefits = t.benefits.items.map((b, i) => ({ ...b, icon: icons[i] }));
  return (
    <section className="bg-deep/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.benefits.eyebrow} title={t.benefits.title} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((b, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-card p-5 text-center">
                <span className="mx-auto mb-4 grid h-11 w-11 place-items-center rounded-full bg-brand/15 text-brand">
                  <b.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-mist/70">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
