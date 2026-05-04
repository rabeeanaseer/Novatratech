import SolutionTemplate, { type SolutionData } from "@/components/SolutionTemplate";
import { Bot } from "lucide-react";

const data: SolutionData = {
  icon: Bot,
  color: "#4F7CFF",
  title: "AI Automation Systems",
  tagline: "Automate operations, reduce cost, increase efficiency",
  heroDescription:
    "Deploy intelligent automation that eliminates operational drag and unlocks strategic capacity. We engineer AI pipelines that learn your workflows, integrate with your existing tools, and continuously improve over time.",
  whatThisIs:
    "AI Automation is not just connecting a few Zapier zaps. It's designing an intelligent operating system for your business, one that handles repetitive work with precision, extracts insights from your data, and empowers your team to focus on the 20% that drives 80% of results. We build end-to-end AI workflows using GPT-4, Claude, open-source models, and custom-trained pipelines, tailored to your exact business logic.",
  whatYouGet: [
    {
      title: "Custom AI Workflow Design",
      detail: "We architect intelligent pipelines using GPT-4, Claude, Gemini, and fine-tuned open-source models tailored to your exact business logic. Every workflow is designed to automate repetitive decisions, not just tasks, so your system gets smarter with every interaction.",
      bullets: [
        "Custom prompt engineering and model selection per use case",
        "LLM orchestration with LangChain or LlamaIndex",
        "Domain-specific model fine-tuning on your data",
        "Automated fallback, retry, and error-handling logic",
      ],
    },
    {
      title: "Document Processing & OCR",
      detail: "Structured extraction from unstructured documents including PDFs, invoices, contracts, forms, and emails. We convert raw documents into clean, queryable data ready for downstream automation, reporting, or CRM sync.",
      bullets: [
        "OCR with layout-aware parsing (AWS Textract, Azure DI)",
        "Intelligent document classification and routing",
        "Multi-format support: PDF, Word, scanned images",
        "Data validation, normalization, and quality checks",
      ],
    },
    {
      title: "CRM & Data Pipeline Integrations",
      detail: "Seamless connections between your AI systems and business tools like HubSpot, Salesforce, Notion, Airtable, and custom databases. Your data flows where it needs to go automatically, without manual intervention or copy-paste workflows.",
      bullets: [
        "Bi-directional CRM sync with real-time updates",
        "Webhook and REST API integrations across platforms",
        "Custom ETL pipelines for data transformation",
        "Automated record enrichment and deduplication",
      ],
    },
    {
      title: "Real-Time Decision Engines",
      detail: "Intelligent rule systems that evaluate incoming data and trigger instant actions, whether that's routing a lead, escalating a support ticket, flagging an anomaly, or sending an alert to the right person at exactly the right moment.",
      bullets: [
        "Configurable rule trees and threshold-based logic",
        "Multi-channel alert delivery: Slack, email, SMS",
        "Priority scoring and smart escalation workflows",
        "Full audit logs for every automated decision",
      ],
    },
    {
      title: "AI-Powered Reporting Dashboards",
      detail: "Natural language interfaces that let anyone on your team ask questions and get answers from your live data, no SQL required. Connected to your databases, warehouses, and APIs for always-current, actionable insights.",
      bullets: [
        "Natural language querying powered by GPT-4",
        "Live connections to databases and data warehouses",
        "Automated anomaly detection and insight surfacing",
        "Embeddable dashboards with role-based access control",
      ],
    },
    {
      title: "Slack, Email & Webhook Automation",
      detail: "Trigger automation from anywhere in your stack. Whether it's an inbound email, a Slack message, a form submission, or a third-party webhook, we wire everything together into a single coherent automated operating system.",
      bullets: [
        "Custom Slack bot design and deployment",
        "Email parsing, classification, and response automation",
        "Zapier, Make, or n8n integration where applicable",
        "Custom webhook servers for cross-platform triggers",
      ],
    },
    {
      title: "Model Fine-Tuning & Prompt Engineering",
      detail: "Generic AI produces generic results. We invest in customization, fine-tuning models on your data and engineering prompts that reflect your brand voice, domain expertise, and quality standards so every AI output is production-ready.",
      bullets: [
        "Dataset preparation, cleaning, and labeling pipelines",
        "Fine-tuning on OpenAI, Hugging Face, and Replicate",
        "Prompt versioning, A/B evaluation, and benchmarking",
        "Quality scoring against baseline and target metrics",
      ],
    },
    {
      title: "Monitoring, Logging & Continuous Improvement",
      detail: "AI systems degrade without oversight. We build monitoring infrastructure that tracks model performance, flags regressions, catches cost spikes, and feeds improvement loops so your automation gets smarter every month.",
      bullets: [
        "Latency, cost, and token usage tracking per call",
        "Error rate monitoring with automated alerting",
        "Human-in-the-loop feedback and correction systems",
        "Scheduled retraining and performance evaluation pipelines",
      ],
    },
  ],
  useCases: [
    { title: "Financial Operations", desc: "Automate invoice processing, expense categorization, and financial reporting with zero manual entry." },
    { title: "Customer Support", desc: "AI-powered first-response systems that resolve 60% of tickets before a human sees them." },
    { title: "Lead Qualification", desc: "Intelligent pipelines that score, enrich, and route inbound leads automatically." },
    { title: "Data Processing", desc: "Transform unstructured data from documents, emails, and forms into clean, queryable databases." },
    { title: "Content Operations", desc: "Automate content generation, editing workflows, and multi-channel publishing pipelines." },
    { title: "HR & Onboarding", desc: "Streamline hiring workflows, document collection, and employee onboarding with AI assistants." },
  ],
  whyItMatters:
    "Businesses that implement intelligent automation reduce operational costs by 40 to 60% on average and redirect hundreds of hours per month toward high-value strategic work. In a competitive market, AI automation is no longer an advantage, it's a baseline requirement for scaling without proportionally scaling headcount.",
  whyMetric: { value: "60%", label: "avg. cost reduction" },
};

export default function AIAutomation() {
  return <SolutionTemplate data={data} />;
}
