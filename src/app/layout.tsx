import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Lead Automation Studio | Turn More Leads Into Customers",
  description:
    "Capture leads, automate follow-ups, and manage your sales pipeline in one streamlined system powered by GoHighLevel and AI workflow automation.",
  keywords: [
    "lead automation",
    "GoHighLevel",
    "CRM",
    "email follow-up",
    "AI workflow",
    "sales pipeline",
  ],
  openGraph: {
    title: "AI Lead Automation Studio",
    description:
      "Capture leads, automate follow-ups, and manage your sales pipeline in one streamlined system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
