import type { Metadata } from "next";
import { BRAND } from "@/lib/site";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND}`,
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
