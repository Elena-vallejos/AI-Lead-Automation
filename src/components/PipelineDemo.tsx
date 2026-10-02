"use client";

import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { ArrowRight, RotateCcw, UserRound } from "lucide-react";
import { LEAD_TAG, PIPELINE_NAME, PIPELINE_STAGES } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

type Lead = { id: number; name: string; stage: number };

const initialLeads: Lead[] = [
  { id: 1, name: "Sample Lead A", stage: 0 },
  { id: 2, name: "Sample Lead B", stage: 1 },
  { id: 3, name: "Sample Lead C", stage: 2 },
  { id: 4, name: "Sample Lead D", stage: 3 },
];

export function PipelineDemo() {
  const [leads, setLeads] = useState(initialLeads);

  const advance = (id: number) =>
    setLeads((ls) =>
      ls.map((l) =>
        l.id === id
          ? { ...l, stage: Math.min(l.stage + 1, PIPELINE_STAGES.length - 1) }
          : l,
      ),
    );

  return (
    <section className="bg-deep/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="CRM pipeline"
          title={PIPELINE_NAME}
          description="Five stages that map the real journey from lead to customer. Try it: click a sample lead to move it to the next stage."
        />
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={() => setLeads(initialLeads)}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-mist hover:border-teal-light"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset demo
          </button>
        </div>
        <LayoutGroup>
          <div className="grid gap-4 overflow-x-auto pb-2 sm:grid-cols-2 lg:grid-cols-5">
            {PIPELINE_STAGES.map((stage, si) => {
              const inStage = leads.filter((l) => l.stage === si);
              return (
                <div
                  key={stage}
                  className="flex min-h-48 flex-col rounded-2xl border border-line bg-card/70 p-3"
                >
                  <div className="mb-3 flex items-center justify-between px-1">
                    <h3 className="text-sm font-semibold text-white">
                      {si + 1}. {stage}
                    </h3>
                    <span className="rounded-full bg-teal/50 px-2 text-xs text-teal-light">
                      {inStage.length}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    {inStage.map((l) => {
                      const last = si === PIPELINE_STAGES.length - 1;
                      return (
                        <motion.button
                          layout
                          layoutId={`lead-${l.id}`}
                          key={l.id}
                          type="button"
                          disabled={last}
                          onClick={() => advance(l.id)}
                          className={`rounded-xl border p-3 text-left text-sm transition-colors ${
                            last
                              ? "border-brand/60 bg-brand/15"
                              : "border-line bg-deep hover:border-brand"
                          }`}
                          aria-label={
                            last
                              ? `${l.name} converted`
                              : `Move ${l.name} to ${PIPELINE_STAGES[si + 1]}`
                          }
                        >
                          <span className="flex items-center gap-2 font-medium text-white">
                            <UserRound className="h-4 w-4 text-teal-light" aria-hidden />
                            {l.name}
                          </span>
                          <span className="mt-2 inline-block rounded-md bg-teal/40 px-1.5 py-0.5 text-[10px] text-teal-light">
                            {LEAD_TAG}
                          </span>
                          {!last && (
                            <span className="mt-2 flex items-center gap-1 text-xs text-brand">
                              Advance <ArrowRight className="h-3 w-3" aria-hidden />
                            </span>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </LayoutGroup>
        <p className="mt-4 text-center text-xs text-mist/60">
          Interactive illustration with sample data only — not connected to a
          live CRM.
        </p>
      </div>
    </section>
  );
}
