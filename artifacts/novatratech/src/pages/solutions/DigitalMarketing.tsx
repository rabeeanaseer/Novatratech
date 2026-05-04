import SolutionTemplate, { type SolutionData } from "@/components/SolutionTemplate";
import { Megaphone } from "lucide-react";

const data: SolutionData = {
  icon: Megaphone,
  color: "#34d399",
  title: "Digital Marketing Systems",
  tagline: "Performance-based campaigns, not vanity metrics",
  heroDescription:
    "Data-driven marketing infrastructure that generates demand consistently. We don't run campaigns, we build marketing machines that compound your growth over time and turn ad spend into predictable, measurable revenue.",
  whatThisIs:
    "Most marketing engagements focus on activity: posts, ads, campaigns. We focus on outcomes: pipeline, revenue, and measurable ROI. A digital marketing system is a structured, interconnected set of channels, automations, and measurement frameworks that generates demand continuously, not in bursts. We architect the system, then optimize every component relentlessly using data, not gut feeling.",
  whatYouGet: [
    {
      title: "Paid Media Strategy & Management",
      detail: "Data-driven paid media campaigns across Google Search, Display, Meta, LinkedIn, and TikTok, each platform configured for your audience, budget, and buying stage. We focus on revenue and pipeline, not impressions or click-through rates.",
      bullets: [
        "Platform selection and budget allocation strategy",
        "Campaign architecture across awareness, consideration, and conversion",
        "Keyword research, audience targeting, and bid strategy",
        "Ongoing performance management and weekly optimization",
      ],
    },
    {
      title: "Ad Creative Development",
      detail: "Ad creative that stops the scroll and drives action. We produce conversion-focused copy, static visuals, and video scripts for every placement and format, built around a tested direct-response creative framework proven to generate leads.",
      bullets: [
        "Direct-response copywriting for all ad formats and platforms",
        "Static image and carousel creative design and production",
        "Short-form video scripts, storyboards, and production briefs",
        "Creative performance testing and iteration cadence",
      ],
    },
    {
      title: "SEO Content Strategy",
      detail: "Organic search as a compounding growth channel. We build a keyword architecture, topic cluster model, and editorial calendar that earns qualified organic traffic that keeps growing month over month without requiring additional ad spend.",
      bullets: [
        "Keyword research, gap analysis, and opportunity mapping",
        "Pillar page and cluster content architecture design",
        "Content briefs, editorial calendar, and production support",
        "Technical SEO audit and remediation prioritized by impact",
      ],
    },
    {
      title: "Marketing Automation",
      detail: "Automated marketing workflows that engage leads at every stage without manual effort. We build and configure HubSpot, ActiveCampaign, or Klaviyo to handle nurture sequences, re-engagement campaigns, and upsell workflows automatically.",
      bullets: [
        "Lead nurture workflow design, build, and testing",
        "Behavioral trigger automation across email and SMS",
        "CRM integration and contact sync configuration",
        "Segmentation, personalization, and A/B testing setup",
      ],
    },
    {
      title: "Analytics Infrastructure",
      detail: "You can't optimize what you can't see. We build a measurement framework that tracks every touchpoint from ad click to closed deal, giving you real attribution data and clear ROI visibility instead of surface-level vanity metrics.",
      bullets: [
        "GA4 setup with custom conversion events and audiences",
        "Multi-touch attribution modeling across all channels",
        "Custom Looker Studio or Tableau reporting dashboards",
        "Monthly executive reporting with actionable insights",
      ],
    },
    {
      title: "Conversion Rate Optimization",
      detail: "Paid traffic is expensive. We make sure every visitor you pay for has the best possible chance to convert. Through testing, design optimization, and copy refinement, we continuously improve your landing page and post-click experience performance.",
      bullets: [
        "Landing page heatmap and session recording analysis",
        "A/B testing for headlines, CTAs, layouts, and offers",
        "Form optimization and multi-step checkout improvements",
        "Post-click experience alignment with ad message and intent",
      ],
    },
    {
      title: "Influencer & Partnership Marketing",
      detail: "Strategic influencer and partnership programs that generate authentic awareness and qualified traffic. We identify, vet, and manage creators and strategic partners aligned with your brand values, target audience, and commercial objectives.",
      bullets: [
        "Influencer identification, vetting, and fit analysis",
        "Outreach templates and negotiation support",
        "Campaign briefs, creative guidelines, and approval workflows",
        "Performance tracking and full ROI measurement framework",
      ],
    },
    {
      title: "Performance Reporting & Roadmap",
      detail: "Monthly performance reviews that go beyond impressions and clicks. Every report includes full-funnel visibility, trend analysis, channel-level attribution, and a prioritized optimization roadmap for the next 30 days based on what the data says.",
      bullets: [
        "Full-funnel performance dashboard updated in real time",
        "Channel-by-channel ROAS, CPA, and LTV reporting",
        "Month-over-month trend analysis and benchmark comparison",
        "Prioritized optimization roadmap for the following period",
      ],
    },
  ],
  useCases: [
    { title: "B2B Lead Generation", desc: "LinkedIn and Google campaigns that fill your pipeline with decision-makers at target companies." },
    { title: "E-Commerce Growth", desc: "Meta and Google Shopping campaigns with full-funnel retargeting that scale ROAS profitably." },
    { title: "App User Acquisition", desc: "Mobile-first campaigns across TikTok, Meta, and Google UAC to drive installs at target CPI." },
    { title: "SaaS Pipeline", desc: "Content and paid systems that drive trial signups and demo bookings from ideal customer profiles." },
    { title: "Local Business Visibility", desc: "Google Business, Local Search Ads, and review generation systems for location-based businesses." },
    { title: "Brand Authority", desc: "Thought leadership content, podcast distribution, and PR systems that build long-term brand equity." },
  ],
  whyItMatters:
    "A marketing system generates predictable pipeline. Random campaigns generate unpredictable stress. Businesses that invest in systematic, data-driven marketing create a compounding advantage, every dollar spent teaches the system to perform better. We build the infrastructure that makes your marketing work harder every single month.",
  whyMetric: { value: "3.2×", label: "avg. ROAS improvement" },
};

export default function DigitalMarketing() {
  return <SolutionTemplate data={data} />;
}
