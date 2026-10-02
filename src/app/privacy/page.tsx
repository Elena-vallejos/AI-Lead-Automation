import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { BRAND } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND}`,
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-brand hover:underline">
        <ArrowLeft className="h-4 w-4" aria-hidden /> Back to home
      </Link>
      <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mt-2 text-sm text-mist/60">Template — review and adapt before using commercially.</p>
      <div className="mt-10 space-y-6 leading-relaxed text-mist/80">
        <section>
          <h2 className="mb-2 text-xl font-semibold text-white">Information we collect</h2>
          <p>When you submit the discovery-call form we collect the details you provide, such as your name and email address.</p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold text-white">How we use it</h2>
          <p>Your information is stored in our GoHighLevel CRM and used only to respond to your request, send a registration confirmation, and send related follow-up emails.</p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold text-white">Third-party services</h2>
          <p>The form is provided by GoHighLevel (LeadConnector). Their handling of data is governed by their own privacy policy.</p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold text-white">Your choices</h2>
          <p>You can unsubscribe from emails at any time using the link in each email, or contact us to request deletion of your data.</p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold text-white">Contact</h2>
          <p>[your-email@example.com]</p>
        </section>
      </div>
    </main>
  );
}
