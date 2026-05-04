import SolutionTemplate, { type SolutionData } from "@/components/SolutionTemplate";
import { TrendingUp } from "lucide-react";

const data: SolutionData = {
  icon: TrendingUp,
  color: "#fbbf24",
  title: "Growth Funnels",
  tagline: "Lead generation systems that close",
  heroDescription:
    "Systematized conversion architecture from awareness to close. We map your customer journey, eliminate friction at every stage, and engineer the full-funnel system that moves the needle on revenue.",
  whatThisIs:
    "A growth funnel is the engineered path from stranger to paying customer. Most businesses have traffic. Most businesses have an offer. What they're missing is the precision system that connects the two. We build the full funnel including paid acquisition, landing page design, email and SMS sequences, retargeting, and CRM automation as a single integrated machine. Every component is measured, tested, and optimized continuously.",
  whatYouGet: [
    {
      title: "Full-Funnel Strategy",
      detail: "Before building a single page, we map your complete customer journey from first awareness to signed contract. Every stage is defined, every metric is established, and every bottleneck is identified so the system we build solves the right problem from the start.",
      bullets: [
        "Customer journey mapping and buyer persona definition",
        "Stage-by-stage conversion goals and KPI benchmarks",
        "Competitive positioning and offer differentiation analysis",
        "Value proposition refinement and messaging hierarchy",
      ],
    },
    {
      title: "High-Converting Landing Pages",
      detail: "Landing pages built around a single, clear objective. We combine conversion-focused copywriting, proven visual hierarchy, social proof architecture, and CTA optimization into pages that turn paid and organic traffic into qualified leads.",
      bullets: [
        "Above-the-fold conversion optimization and headline testing",
        "Persuasive copy using proven direct-response frameworks",
        "Trust signals: testimonials, case studies, logos, guarantees",
        "Form design and multi-step flow to reduce friction",
      ],
    },
    {
      title: "Email Marketing Sequences",
      detail: "Automated email sequences that nurture leads from first opt-in through to purchase decision. We design welcome flows, educational sequences, and sales campaigns using tested copy frameworks that move people through your funnel without feeling pushy.",
      bullets: [
        "Welcome and onboarding sequences for new subscribers",
        "Educational nurture series (5 to 10 email campaigns)",
        "Sales, urgency, and close sequences with proven copy",
        "Behavioral trigger-based automation and personalization",
      ],
    },
    {
      title: "SMS Automation & Re-Engagement",
      detail: "High-intent leads respond to SMS. We build automated SMS workflows that re-engage, remind, and convert at the moments that matter most, fully compliant with TCPA and GDPR requirements and integrated with your existing CRM.",
      bullets: [
        "SMS opt-in flow and compliance setup (TCPA/GDPR)",
        "Abandoned lead and cart re-engagement SMS campaigns",
        "Appointment reminder and confirmation SMS sequences",
        "Personalized, behavior-triggered SMS automation flows",
      ],
    },
    {
      title: "A/B Testing Framework",
      detail: "Every assumption is a hypothesis until it's tested. We build a structured A/B testing program across landing pages, email subject lines, offers, and CTAs so every optimization is backed by statistically significant data, not gut feeling.",
      bullets: [
        "Multivariate page testing using Google Optimize or VWO",
        "Email subject line and body content split testing",
        "CTA copy, color, and placement variation testing",
        "Statistical significance tracking and test result reporting",
      ],
    },
    {
      title: "CRM Pipeline & Lead Scoring",
      detail: "Your CRM is the backbone of your funnel. We configure your pipeline stages, behavioral lead scoring models, and automation rules so every lead is tracked, prioritized, and followed up at exactly the right moment by the right person.",
      bullets: [
        "HubSpot, Salesforce, or Pipedrive pipeline configuration",
        "Behavioral and demographic lead scoring model setup",
        "Automated lead routing, assignment, and notification rules",
        "Deal stage progression and follow-up task automation",
      ],
    },
    {
      title: "Retargeting Architecture",
      detail: "Most first-time visitors don't convert. We build retargeting campaigns on Meta, Google, and LinkedIn that follow your prospects through the awareness-to-decision cycle and bring them back with the right message when they're ready to act.",
      bullets: [
        "Custom audience creation from website and CRM data",
        "Retargeting creative strategy segmented by funnel stage",
        "Budget allocation and bid strategy optimization",
        "Frequency capping and ad fatigue prevention systems",
      ],
    },
    {
      title: "Conversion Analytics & Attribution",
      detail: "You can't optimize what you can't measure. We build the analytics and attribution infrastructure that connects every touchpoint from the first ad click to the closed deal, so you know exactly what's generating revenue and what's wasting budget.",
      bullets: [
        "GA4 and CRM closed-loop attribution configuration",
        "Multi-touch attribution modeling across all channels",
        "Custom conversion event and goal tracking setup",
        "Monthly revenue attribution and full-funnel ROI reporting",
      ],
    },
  ],
  useCases: [
    { title: "B2B Lead Generation", desc: "Outbound and inbound funnels that deliver qualified sales pipeline on a predictable schedule." },
    { title: "Course & Coaching Sales", desc: "Webinar funnels, challenge funnels, and email sequences that sell high-ticket programs." },
    { title: "SaaS Trial Conversion", desc: "Onboarding sequences and upgrade funnels that convert free users to paying customers." },
    { title: "E-Commerce Revenue", desc: "Abandoned cart recovery, post-purchase upsells, and loyalty sequences that compound revenue." },
    { title: "Event & Webinar Funnels", desc: "Registration, reminder, and show-up sequences that maximize attendance and conversions." },
    { title: "Local Business Growth", desc: "Lead capture and follow-up systems that fill appointment books and service pipelines." },
  ],
  whyItMatters:
    "Most businesses think they have a traffic problem. They almost always have a funnel problem. Fixing your conversion rate from 1% to 4% is the equivalent of quadrupling your ad budget at zero cost. A well-engineered funnel compounds over time, generates predictable pipeline, and turns your marketing spend into a reliable investment.",
  whyMetric: { value: "4×", label: "avg. conversion lift" },
};

export default function GrowthFunnels() {
  return <SolutionTemplate data={data} />;
}
