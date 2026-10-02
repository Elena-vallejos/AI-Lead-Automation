import { BrainCircuit, KanbanSquare, MailCheck, MousePointerClick } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: MousePointerClick,
    title: "Lead Capture Automation",
    description: "Branded GoHighLevel forms embedded on your website and landing pages.",
    benefit: "Every inquiry is captured in one place.",
  },
  {
    icon: KanbanSquare,
    title: "CRM and Pipeline Setup",
    description: "A clear five-stage pipeline from New Lead to Won / Converted.",
    benefit: "See where every lead stands at a glance.",
  },
  {
    icon: MailCheck,
    title: "Automated Email Follow-ups",
    description: "Confirmation and follow-up emails sequenced with smart delays.",
    benefit: "Consistent follow-up without remembering to send it.",
  },
  {
    icon: BrainCircuit,
    title: "AI Workflow Integration",
    description: "AI-assisted copywriting and workflow planning to design your automations.",
    benefit: "Launch faster with well-structured workflows.",
  },
];

export function Services() {
  return (
    <section className="bg-deep/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to automate your lead flow"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 shadow-lg shadow-black/20 transition-transform hover:-translate-y-1 hover:border-brand/50">
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-teal text-white transition-colors group-hover:bg-brand group-hover:text-ink">
                  <s.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mist/75">
                  {s.description}
                </p>
                <p className="mt-5 border-t border-line pt-4 text-sm font-medium text-brand">
                  {s.benefit}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
