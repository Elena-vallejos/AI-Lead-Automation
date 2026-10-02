# AI Lead Automation Studio

A modern, responsive lead-generation website that demonstrates how businesses can capture leads, organize them in a CRM, and automate follow-ups with **GoHighLevel (GHL)** and AI workflow automation.

Built for Pareto Bootcamp — Day 6 homework ("HighLevel: Run the Funnel").

## Tech stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (subtle animations)
- Lucide React (icons)
- GoHighLevel — form, CRM, pipeline, and workflow
- Deployed on Vercel

## Page sections

Navbar · Hero (animated workflow visual) · Problem & Solution · Services · How It Works (interactive 7-step workflow) · CRM Pipeline (interactive demo board) · Featured Expert (Kasim Aslam + books) · Book a Discovery Call (live GHL form) · Benefits · FAQ · Footer · `/privacy` page.

## Run locally

Requires Node.js 18.18+ (Node 20/22 recommended).

```bash
npm install
cp .env.example .env.local   # optional
npm run dev                   # http://localhost:3000
```

Quality checks:

```bash
npm run lint
npm run build
```

## Environment variables

| Name | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_GHL_FORM_ID` | No | GoHighLevel form ID for the embedded form. Defaults to `dq8At6bscfy1fA6JeuDG` ("AI Creator Registration"). It is a public ID, not a secret. |

No API keys or secrets are used in the frontend.

## GoHighLevel integration

### What is live vs. demo

- **Live:** the discovery-call form (`src/components/BookCall.tsx`) is the official GoHighLevel form embed (iframe + `form_embed.js`). Submissions go directly to GoHighLevel; field validation (required fields, email format), success/error messages, and duplicate-submission handling are provided by the GHL form.
- **Demo / illustration:** the hero workflow animation, the "How It Works" stepper, and the pipeline board use sample data only and are not connected to the CRM.

### Workflow configured in GoHighLevel

Workflow name: **AI Lead Follow-up Automation**

```
Form Submitted (AI Creator Registration)
  → Add Contact Tag: New-Automation-Lead
  → Create Opportunity in "AI Lead Automation Pipeline" (stage: New Lead)
  → Send Internal Notification to the owner (yourself, not the whole workspace)
  → Send Confirmation Email to Contact
  → Wait 1 Day
  → Send Follow-up Email
```

Pipeline **AI Lead Automation Pipeline** stages: New Lead → Contacted → Qualified → Meeting Booked → Won / Converted.

### Connect a different form

1. In GHL go to **Sites → Forms → Builder**, open your form, click **Integrate**.
2. Copy the `data-form-id` value from the embed code.
3. Set `NEXT_PUBLIC_GHL_FORM_ID` to that value (locally in `.env.local`, and in Vercel → Project → Settings → Environment Variables), then redeploy.
4. In **Automation → Workflows**, make sure your workflow's trigger is **Form Submitted** filtered to that form, and the workflow is **Published**.

### Testing the full chain

1. Open the deployed site and submit the form with your own email.
2. In GHL check: **Contacts** (new contact with tag `New-Automation-Lead`), **Opportunities** (card in New Lead), your notification, and the confirmation email in your inbox.
3. Check **Automation → Workflow → Enrollment history / Execution logs**; the follow-up email is sent after 1 day.

## Deploy to Vercel

1. Go to https://vercel.com/new and sign in with GitHub.
2. Import the `AI-Lead-Automation` repository.
3. Framework preset: **Next.js** (auto-detected). Leave build settings as default.
4. (Optional) add `NEXT_PUBLIC_GHL_FORM_ID` under Environment Variables.
5. Click **Deploy**. Every push to `main` redeploys automatically.

## Known limitations

- Contact details in the footer are placeholders — replace them with real information.
- The privacy policy is a template; review it before commercial use.
- Email delivery depends on the GHL workflow being published and the sending domain being configured in GoHighLevel.
