import SolutionTemplate, { type SolutionData } from "@/components/SolutionTemplate";
import { Code2 } from "lucide-react";

const data: SolutionData = {
  icon: Code2,
  color: "#8A5CFF",
  title: "SaaS Development",
  tagline: "Scalable product architecture from day one",
  heroDescription:
    "From validated idea to production-ready software product. We architect SaaS platforms that scale gracefully, handle complex billing, and support thousands of concurrent users, without a costly rebuild when success hits.",
  whatThisIs:
    "SaaS development is not just coding. It's product strategy, system architecture, user experience, and infrastructure engineering all fused into a single coherent product. We work like a senior product team, not a dev shop. That means we push back on bad ideas, architect for longevity, and care deeply about the outcome. From your first line of schema to your first 10,000 paying users, we build the system that gets you there.",
  whatYouGet: [
    {
      title: "Full-Stack Development",
      detail: "Production-grade code across the entire stack using Next.js, React, Node.js, Python, and FastAPI. Every layer is architected for performance, maintainability, and long-term scalability, with TypeScript enforced throughout for type safety and developer confidence.",
      bullets: [
        "Next.js App Router with server components and ISR",
        "Node.js or Python/FastAPI backend API services",
        "TypeScript throughout: frontend, backend, and shared types",
        "Code review, documentation, and full handover package",
      ],
    },
    {
      title: "Multi-Tenant Architecture & RBAC",
      detail: "Designed from day one to support thousands of isolated customer accounts within a single platform. Role-based access control ensures every user sees exactly what they're permitted to, with granular permissions configurable at the org and user level.",
      bullets: [
        "Tenant isolation at database or schema level",
        "Granular permission and role management system",
        "Admin, member, and viewer roles fully configurable",
        "Enterprise SSO and organization-level access control",
      ],
    },
    {
      title: "Subscription Billing with Stripe",
      detail: "End-to-end billing infrastructure using Stripe, including plan management, free trials, metered usage, upgrade and downgrade flows, failed payment recovery, and dunning sequences that reduce involuntary churn from day one.",
      bullets: [
        "Stripe Plans, Products, and Prices configuration",
        "Free trial and promotional period logic",
        "Automated dunning and failed payment retry sequences",
        "Revenue recognition, invoicing, and tax handling",
      ],
    },
    {
      title: "Authentication & Identity",
      detail: "Secure, production-grade authentication flows supporting email/password, social login, SSO, and magic links. Built using Clerk, Auth0, or custom OAuth depending on your stack and compliance requirements.",
      bullets: [
        "Multi-provider social login: Google, GitHub, LinkedIn",
        "Magic link and passwordless authentication flows",
        "Organization and team-level authentication support",
        "Session management and refresh token handling",
      ],
    },
    {
      title: "Database Design & ORM Layer",
      detail: "Thoughtful schema design built for your specific data model using PostgreSQL or MongoDB with Drizzle or Prisma ORM. Query performance, indexing strategies, and migration workflows are handled from the start, not as an afterthought.",
      bullets: [
        "Normalized schema with proper indexing and constraints",
        "Drizzle or Prisma ORM for type-safe query building",
        "Database migration strategy and version control",
        "Read replicas and connection pooling configuration",
      ],
    },
    {
      title: "CI/CD Pipelines & Cloud Deployment",
      detail: "From commit to production in minutes. Automated testing, staging environments, and zero-downtime deployment pipelines on AWS, GCP, or Vercel, configured for your release cadence and team size.",
      bullets: [
        "GitHub Actions or GitLab CI pipeline setup",
        "Docker containerization and private registry",
        "Staging and production environment parity",
        "Zero-downtime blue/green deployments with rollback",
      ],
    },
    {
      title: "Monitoring, Alerting & Error Tracking",
      detail: "You can't fix what you can't see. We instrument your platform with Sentry, Datadog, or equivalent tools to catch errors before your users do and give you full visibility into system health, performance, and uptime.",
      bullets: [
        "Error tracking with Sentry across frontend and backend",
        "Uptime monitoring with PagerDuty or similar alerting",
        "Performance profiling and slow query detection",
        "Custom dashboards for key platform health metrics",
      ],
    },
    {
      title: "API Design & Documentation",
      detail: "Clean, versioned, and well-documented APIs designed for developer ergonomics. Whether RESTful or GraphQL, every endpoint is built with consistency, security, and performance in mind, and ships with full OpenAPI documentation.",
      bullets: [
        "RESTful and/or GraphQL API design and implementation",
        "OpenAPI / Swagger auto-generated documentation",
        "Rate limiting, authentication middleware, and versioning",
        "Postman collection and client SDK generation",
      ],
    },
  ],
  useCases: [
    { title: "B2B SaaS Products", desc: "Workflow tools, dashboards, and platforms built for teams and enterprise clients." },
    { title: "Marketplace Platforms", desc: "Two-sided marketplaces with seller/buyer flows, payments, and review systems." },
    { title: "Internal Tools", desc: "Custom internal software replacing spreadsheets and manual processes at scale." },
    { title: "API Products", desc: "Developer-facing API platforms with documentation, SDKs, and billing." },
    { title: "Analytics Platforms", desc: "Data products that surface insights from user behavior, operations, or third-party sources." },
    { title: "No-Code Builders", desc: "Visual builder platforms that let end-users create without engineering skills." },
  ],
  whyItMatters:
    "The right architecture at the start avoids a $200K rebuild at scale. Most SaaS startups hit a ceiling not because of market or product fit, but because their technical foundation wasn't built to grow. We architect with 10x growth in mind from day one, so your platform is as solid at 10,000 users as it was at 10.",
  whyMetric: { value: "99.9%", label: "uptime on production" },
};

export default function SaaSDevelopment() {
  return <SolutionTemplate data={data} />;
}
