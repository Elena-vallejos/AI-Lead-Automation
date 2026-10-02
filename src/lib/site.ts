export const BRAND = "AI Lead Automation Studio";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
] as const;

export const GHL_FORM_ID =
  process.env.NEXT_PUBLIC_GHL_FORM_ID || "dq8At6bscfy1fA6JeuDG";

export const GHL_FORM_NAME = "AI Creator Registration";

export const PIPELINE_NAME = "AI Lead Automation Pipeline";

export const PIPELINE_STAGES = [
  "New Lead",
  "Contacted",
  "Qualified",
  "Meeting Booked",
  "Won / Converted",
] as const;

export const LEAD_TAG = "New-Automation-Lead";
