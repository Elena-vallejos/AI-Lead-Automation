import {
  CheckCircle2,
  Clock,
  FileSpreadsheet,
  FolderX,
  BellOff,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const pairs = [
  {
    icon: Clock,
    problem: "Slow lead response times",
    detail: "New inquiries wait in an inbox until someone has time to reply.",
    solution: "An instant confirmation email goes out the moment a form is submitted.",
  },
  {
    icon: FileSpreadsheet,
    problem: "Manual data entry",
    detail: "Contact details are copied by hand from forms into spreadsheets.",
    solution: "Form data flows straight into the CRM as a tagged contact.",
  },
  {
    icon: BellOff,
    problem: "Forgotten follow-ups",
    detail: "Busy weeks mean promising leads never hear back a second time.",
    solution: "A scheduled follow-up email is sent automatically after a delay.",
  },
  {
    icon: FolderX,
    problem: "Disorganized customer information",
    detail: "No single place shows where each lead is in the sales process.",
    solution: "Every lead becomes an opportunity in a clear, stage-based pipeline.",
  },
];

export function ProblemSolution() {
  return (
    <section id="solutions" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The problem"
          title="Manual lead management leaks opportunities"
          description="Most small teams lose leads not because of a bad offer, but because of slow, inconsistent, manual follow-up. Automation takes the repetitive work off your plate."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {pairs.map((p, i) => (
            <Reveal key={p.problem} delay={i * 0.08}>
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
                    <span className="font-semibold text-white">With automation: </span>
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
