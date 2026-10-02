import { Workflow } from "lucide-react";
import { BRAND } from "@/lib/site";

export function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2 font-bold text-white">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal ring-1 ring-teal-light/40">
        <Workflow className="h-5 w-5 text-brand" aria-hidden />
      </span>
      <span className="text-sm leading-tight sm:text-base">{BRAND}</span>
    </a>
  );
}
