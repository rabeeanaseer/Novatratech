import SolutionTemplate, { type SolutionData } from "@/components/SolutionTemplate";
import { Globe } from "lucide-react";

const data: SolutionData = {
  icon: Globe,
  color: "#00BFA5",
  title: "High-Converting Websites",
  tagline: "Built for speed, UX, and conversions",
  heroDescription:
    "Premium, conversion-optimized websites engineered to perform. Every line of code is written with speed, SEO, and conversion rate at the forefront, not just aesthetics. We don't build pages, we build revenue machines.",
  whatThisIs:
    "A high-converting website is a precision instrument. It exists for one purpose: to turn visitors into customers. We combine world-class design, performance engineering, and conversion rate optimization into a single product. Every page is structured around your customer's decision journey, from first impression to signed contract. And because it's built on modern architecture, it will outperform competitors for years, not months.",
  whatYouGet: [
    {
      title: "Custom Design System",
      detail: "A brand-consistent, conversion-optimized design language built specifically for your business. Not a template adapted from a marketplace. Every color, typeface, spacing unit, and component is designed to serve your conversion goals while reflecting your brand identity.",
      bullets: [
        "Full component library in Figma and production code",
        "Brand-consistent typography and color token system",
        "Conversion-optimized UI patterns: CTAs, forms, social proof",
        "Reusable, scalable design tokens for long-term consistency",
      ],
    },
    {
      title: "Multi-Page Website & Landing Pages",
      detail: "From single high-intent landing pages to full multi-page corporate sites, product pages, and web applications. Each page is structured around your customer's decision journey from first impression to the moment they reach out or buy.",
      bullets: [
        "Homepage, about, services, and contact page design",
        "Product and feature-specific landing pages",
        "Pricing pages, comparison tables, and trial CTAs",
        "Blog and resource hub templates for content marketing",
      ],
    },
    {
      title: "Performance Engineering",
      detail: "We obsess over Lighthouse scores, Core Web Vitals, and real-user performance. Fast sites rank better, convert better, and retain users longer. Sub-2-second load times are the baseline, not the stretch goal, and we engineer every site to hit it.",
      bullets: [
        "Lighthouse 90+ on performance, accessibility, SEO, and best practices",
        "Image optimization pipeline: WebP, AVIF, lazy loading",
        "Code splitting, tree-shaking, and critical CSS extraction",
        "CDN configuration and full-page edge caching",
      ],
    },
    {
      title: "SEO Architecture",
      detail: "Technical SEO is built in from day one, not bolted on after launch. We handle site structure, semantic HTML, metadata, schema markup, canonical URLs, and sitemap configuration so you begin earning organic visibility from the moment you go live.",
      bullets: [
        "Semantic HTML and proper heading hierarchy throughout",
        "Schema.org structured data markup for rich results",
        "XML sitemap, robots.txt, and redirect configuration",
        "Core Web Vitals optimization for search ranking signals",
      ],
    },
    {
      title: "CMS Integration",
      detail: "Content management that empowers your team to update pages, publish posts, and manage media without touching code or filing tickets. We integrate the CMS that best fits your team's workflow, technical comfort, and content volume.",
      bullets: [
        "Sanity, Contentful, or headless WordPress integration",
        "Live preview and draft publishing workflows",
        "Media library and structured content modeling",
        "Role-based editor access for marketing teams",
      ],
    },
    {
      title: "Analytics & Conversion Tracking",
      detail: "Every click, scroll, and form submission is tracked from day one. We configure GA4, Hotjar, Meta Pixel, and conversion events so you have the real data needed to make intelligent optimization decisions rather than guessing.",
      bullets: [
        "GA4 setup with custom events, goals, and audiences",
        "Hotjar heatmaps, scroll maps, and session recordings",
        "Meta Pixel and Google Ads conversion tracking",
        "Custom ecommerce or lead-gen attribution modeling",
      ],
    },
    {
      title: "Mobile-First Responsive Design",
      detail: "Built for every screen, device, and breakpoint from the ground up. Mobile-first development ensures your site performs flawlessly for the majority of visitors who arrive on a phone, with touch-optimized interactions and adaptive layouts throughout.",
      bullets: [
        "Mobile-first CSS architecture with progressive enhancement",
        "Tested across iOS Safari, Android Chrome, and all major browsers",
        "Touch-optimized interactive elements and gestures",
        "Responsive images and adaptive layout systems",
      ],
    },
    {
      title: "Post-Launch CRO Support",
      detail: "Launch is just the beginning. We offer post-launch optimization audits, A/B testing support, and conversion rate analysis to ensure your site doesn't just look good at launch but continuously improves its performance over time.",
      bullets: [
        "30-day post-launch monitoring and performance review",
        "Heatmap and session recording analysis and recommendations",
        "CTA, headline, and layout A/B testing support",
        "Monthly conversion performance reporting and roadmap",
      ],
    },
  ],
  useCases: [
    { title: "SaaS Companies", desc: "Marketing sites and landing pages built to convert trial signups and demos." },
    { title: "Service Businesses", desc: "Authority-building sites that position you as the premium choice and generate inbound leads." },
    { title: "E-Commerce Brands", desc: "Optimized product and category pages that maximize revenue per visitor." },
    { title: "Agencies & Consultancies", desc: "Portfolio sites and case study pages that close high-ticket clients." },
    { title: "Startups", desc: "Launch-ready sites that communicate your value proposition with clarity and confidence." },
    { title: "Coaches & Creators", desc: "Personal brand sites that build trust and drive course, program, and offer sales." },
  ],
  whyItMatters:
    "A site built for conversion can generate 3 to 5x more qualified leads from the same traffic. Design without strategy is just decoration. Every element, the headline, the layout, the CTA placement, needs to be deliberate. We obsess over the details so your customers convert, not just browse.",
  whyMetric: { value: "4×", label: "more leads, same traffic" },
};

export default function WebDevelopment() {
  return <SolutionTemplate data={data} />;
}
