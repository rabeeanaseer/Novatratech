import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, Target, Lightbulb, Globe2, Zap, CheckCircle2,
  Database, TrendingUp, Users, MessageCircle, Code2, Brain,
  Layers, Github, Linkedin, Globe, Star, Award, BookOpen
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>{children}</motion.div>;
}

function CounterStat({ value, label, suffix = "", sublabel = "" }: { value: number; label: string; suffix?: string; sublabel?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2800;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <motion.div ref={ref} className="text-center"
      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
      <div className="text-4xl md:text-5xl font-black text-black mb-1">{count}{suffix}</div>
      <p className="text-sm text-black font-semibold">{label}</p>
      {sublabel && <p className="text-xs text-black/50 mt-0.5">{sublabel}</p>}
    </motion.div>
  );
}

const cardGradients = [
  "linear-gradient(180deg, #EDEAE4 0%, #F9FBC9 65%, #FEE969 100%)",
  "linear-gradient(180deg, #F0F0F0 0%, #F0C3EC 65%, #CCE7E9 100%)",
  "linear-gradient(180deg, #F2F1ED 0%, #D5DFE0 65%, #E5FF94 100%)",
  "linear-gradient(180deg, #F2F1ED 0%, #F0C4E3 65%, #FBB439 100%)",
  "linear-gradient(180deg, #EDEAE4 0%, #CCE7E9 65%, #E9F1FA 100%)",
  "linear-gradient(270deg, #E9F1FA 0%, #EFFFBD 100%)",
];

const values = [
  { icon: Target, title: "Precision Over Volume", desc: "We take on fewer clients so every engagement receives senior-level attention and strategic depth from day one. Quality is not negotiable." },
  { icon: Lightbulb, title: "First Principles Thinking", desc: "We don't template-match. Every system is designed from the ground up based on your actual business model and growth objectives." },
  { icon: Globe2, title: "Global Standard", desc: "Our technical bar is set by what's deployed at the world's best companies: Stripe, Vercel, Linear, and Notion." },
  { icon: Zap, title: "Speed Without Shortcuts", desc: "Modular architecture means you can iterate and scale without a costly rebuild six months down the line." },
  { icon: Database, title: "Data-Driven by Default", desc: "Every system we ship is instrumented from day one. Decisions are grounded in data, not assumptions or guesswork." },
  { icon: TrendingUp, title: "Outcomes Over Deliverables", desc: "We measure success by business impact: conversions, revenue, efficiency. Not by lines of code or pages delivered." },
];

const differentiators = [
  { title: "AI-native from the ground up", desc: "We don't bolt AI onto legacy systems. Every pipeline, workflow, and product we build is designed from day one with intelligence at its core, making your systems smarter over time, not slower.", color: "#2563EB" },
  { title: "End-to-end ownership", desc: "Strategy, design, engineering, testing, and launch all under one roof. No handoffs between agencies. No miscommunication. One team accountable for the entire outcome.", color: "#6366F1" },
  { title: "Obsessive about code quality and longevity", desc: "We write systems that hold up at 10× scale. Clean architecture, typed codebases, automated tests. Not because it's expected, but because it's the only way we know how to build.", color: "#0891B2" },
  { title: "Direct access to senior engineers", desc: "You work with the engineers who actually build your system, not account managers or junior developers. The person you call is the person writing your code.", color: "#059669" },
  { title: "No offshore handoffs", desc: "Integrated cross-functional team means your designer, developer, and systems architect are in sync at every stage. Zero translation loss, zero dropped context.", color: "#d97706" },
  { title: "Post-launch support included", desc: "We don't disappear after go-live. Every engagement includes iteration support, bug fixes, and performance monitoring, because a system that isn't maintained is a system that decays.", color: "#db2777" },
  { title: "Built for your business model", desc: "We don't use templates. Every system is reverse-engineered from your specific revenue model, customer journey, and growth goals, then built from first principles.", color: "#7C3AED" },
  { title: "Performance is measurable by default", desc: "Every system we ship is instrumented from day one. We track what matters: conversions, retention, throughput, so you always know the ROI of what we built.", color: "#2563EB" },
];

const techStack = [
  "Next.js", "React", "TypeScript", "Python", "FastAPI", "Node.js",
  "PostgreSQL", "Supabase", "AWS", "Pandas", "scikit-learn", "Tailwind CSS",
  "NLP", "RAG Systems", "Machine Learning", "Analytics Dashboards",
];

const WHATSAPP = "https://wa.me/923225194889?text=Hello%20NovatraTech%2C%20I%27d%20like%20to%20discuss%20a%20project";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <Navbar />
      <FloatingCTA />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden hero-gradient">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#22C9FF]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(37,99,235,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.025) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB] mb-4">
            About NovatraTech
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
            className="text-5xl md:text-7xl font-black text-black tracking-tight leading-[0.95] mb-6 max-w-4xl">
            We Build the Machines<br />
            <span className="text-gradient-blue">That Run Modern Business</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}
            className="text-black text-xl leading-relaxed max-w-2xl mb-4">
            NovatraTech is not an agency. We're a systems company, an engineering-first team that designs, builds, and deploys the digital infrastructure ambitious businesses need to dominate at scale.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}
            className="text-black/70 text-base leading-relaxed max-w-xl mb-10">
            Founded in Pakistan. Built for the world. Every system we ship is engineered for performance, longevity, and measurable ROI, not just aesthetics.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/923225194889" target="_blank" rel="noopener noreferrer">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-2xl font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-sm transition-colors flex items-center gap-2">
                Work With Us <ArrowRight className="w-4 h-4" />
              </motion.button>
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-2xl font-semibold border border-black/10 bg-white/50 text-black hover:bg-white/80 backdrop-blur-sm transition-all duration-150 flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── COMPANY STATS with counters ── */}
      <section className="py-16 border-y border-[#E8E5E1] bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterStat value={50} suffix="+" label="Projects Delivered" sublabel="Across all service areas" />
            <CounterStat value={35} suffix="+" label="Clients Served" sublabel="In 10+ countries" />
            <CounterStat value={12} suffix="+" label="AI Systems Deployed" sublabel="Live in production" />
            <CounterStat value={98} suffix="%" label="Retention Rate" sublabel="Clients who return" />
          </div>
        </div>
      </section>

      {/* ── COMPANY STORY ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 section-pink">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div variants={fadeUp}>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB] mb-3">Who We Are</p>
                <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-6">Built for Builders</h2>
                <div className="space-y-4 text-black leading-relaxed">
                  <p>NovatraTech was founded on a simple but radical premise: most businesses are running on systems built for a different era. Off-the-shelf tools, disconnected workflows, and agencies that deliver deliverables instead of outcomes. These are the things holding ambitious founders back.</p>
                  <p>We built NovatraTech to be different. Our team operates at the intersection of AI engineering, product strategy, and growth systems, built for the founders who want compounding returns, not one-off projects that look good in a Notion doc but don't move the needle.</p>
                  <p>We don't take on dozens of clients. We take on the right ones. Every engagement is treated like a co-founder relationship. We bring the same urgency, accountability, and strategic depth you'd expect from someone who has skin in the game.</p>
                  <p>Our reputation is built on the results we create, not the invoices we send. We ship fast, measure everything, and stay until the system is genuinely working for you.</p>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { label: "Founded", value: "2022" },
                    { label: "Based in", value: "Pakistan 🇵🇰" },
                    { label: "Clients in", value: "10+ Countries" },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl bg-white border border-[#E8E5E1] text-center">
                      <p className="font-black text-black text-base">{item.value}</p>
                      <p className="text-xs text-black/50 mt-0.5">{item.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="space-y-4">
                <motion.div variants={fadeUp}
                  className="p-8 rounded-3xl border border-[#E8E5E1] relative overflow-hidden"
                  style={{ background: cardGradients[3] }}>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#22D3EE] rounded-t-3xl" />
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6366F1] mb-4">Our Vision</p>
                  <blockquote className="text-2xl font-bold text-black leading-snug mb-4">
                    "To be the world's most trusted AI systems company for businesses serious about scale."
                  </blockquote>
                  <p className="text-black leading-relaxed text-sm">
                    By 2030, we aim to have helped 500+ businesses across 30+ countries build the digital infrastructure that makes them undeniable in their markets.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp}
                  className="p-6 rounded-2xl border border-[#E8E5E1] bg-white">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#059669] mb-3">Our Mission</p>
                  <p className="text-black font-semibold text-base leading-snug mb-2">"Engineer systems that compound."</p>
                  <p className="text-sm text-black leading-relaxed">Every system we build is designed to get better over time, not just work at launch. We build infrastructure that learns, scales, and multiplies your returns with every passing month.</p>
                </motion.div>

                <motion.div variants={fadeUp}
                  className="p-6 rounded-2xl border border-[#E8E5E1]" style={{ background: cardGradients[2] }}>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB] mb-3">What We Believe</p>
                  <div className="space-y-2">
                    {[
                      "Great software should outlast the trend that inspired it",
                      "AI is infrastructure, not a feature",
                      "The best agencies act like co-founders",
                      "Measurement is a product feature, not an afterthought",
                    ].map((belief) => (
                      <div key={belief} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] mt-0.5 shrink-0" />
                        <span className="text-sm text-black">{belief}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FOUNDER / RABEEA NASEER ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-white border-y border-[#E8E5E1]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB] mb-12 text-center">Founder & CEO</p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                {/* Profile card */}
                <div className="lg:col-span-1 flex flex-col gap-4">
                  <div className="p-8 rounded-3xl border border-[#E8E5E1] text-center"
                    style={{ background: "linear-gradient(180deg, #1e1b4b 0%, #2e1065 50%, #312e81 100%)" }}>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] flex items-center justify-center mx-auto mb-5 text-3xl font-black text-white shadow-lg border-4 border-white/20">
                      RN
                    </div>
                    <p className="text-white font-black text-xl mb-1">Rabeea Naseer</p>
                    <p className="text-purple-300 text-sm font-semibold mb-2">Founder & CEO · NovatraTech</p>
                    <p className="text-white/60 text-xs leading-relaxed mb-6">AI & Data-Driven Systems Developer · Building Scalable SaaS, Automation & Data-Intelligent Web Systems</p>
                    <div className="flex items-center justify-center gap-3">
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Github className="w-4 h-4 text-white" />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Personal stats */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 40, suffix: "+", label: "Projects Shipped", sub: "SaaS & data products" },
                      { value: 5, suffix: "+", label: "Years Building", sub: "Full-stack & AI systems" },
                      { value: 25, suffix: "+", label: "Web Assets Built", sub: "Independently managed" },
                      { value: 3, suffix: "", label: "Major Platforms", sub: "GitHub · Kaggle · NovatraTech" },
                    ].map((s, si) => (
                      <div key={s.label} className="p-4 rounded-2xl border border-[#E8E5E1] text-center"
                        style={{ background: cardGradients[si % 6] }}>
                        <CounterStat value={s.value} suffix={s.suffix} label={s.label} sublabel={s.sub} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-2">Built by a Builder</h2>
                    <p className="text-[#2563EB] font-semibold text-sm">AI & Data-Driven Systems Developer</p>
                  </div>

                  <div className="space-y-4 text-black leading-relaxed">
                    <p><strong>Rabeea Naseer</strong> is the founder and CEO of NovatraTech, an AI & data-driven systems developer with deep expertise in building scalable digital infrastructure, automation pipelines, and high-performance SaaS products.</p>
                    <p>With 5+ years of hands-on experience across full-stack development, machine learning, and data engineering, Rabeea has shipped 40+ projects ranging from production SaaS platforms to intelligent automation systems and analytics dashboards.</p>
                    <p>Before NovatraTech, Rabeea built and independently managed 25+ niche web assets, developing a sharp understanding of what makes digital systems convert, retain, and scale. That experience is now baked into every client engagement.</p>
                  </div>

                  <blockquote className="border-l-4 border-[#2563EB] pl-5 py-2">
                    <p className="text-black italic font-medium leading-relaxed">"I kept meeting brilliant founders being held back by their tech stack, or paying agencies that treated them like tickets in a queue. I wanted to build something different: a systems company that thinks like a co-founder, not a contractor."</p>
                    <cite className="text-sm text-black/50 not-italic mt-2 block">— Rabeea Naseer, Founder & CEO</cite>
                  </blockquote>

                  {/* Tech stack */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-black mb-3">Technical Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-[#E8E5E1] text-black bg-white hover:border-[#2563EB]/30 hover:text-[#2563EB] transition-colors cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialisation tags */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-black mb-3">Specialisations</p>
                    <div className="flex flex-wrap gap-2">
                      {["AI Engineering", "Systems Architecture", "Data Science", "SaaS Development", "Growth Strategy", "Predictive Systems", "SEO Architecture", "API Design"].map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#2563EB]/8 text-[#2563EB] border border-[#2563EB]/15">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors shadow-sm">
                        <MessageCircle className="w-4 h-4" /> Connect on WhatsApp
                      </motion.button>
                    </a>
                    <a href="https://wa.me/923225194889" target="_blank" rel="noopener noreferrer">
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-[#E8E5E1] text-black hover:bg-[#F8F7F5] transition-colors">
                        Start a Project <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── OPERATING PRINCIPLES ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 section-pink">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6366F1] mb-3">How We Work</p>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">Our Operating Principles</h2>
              <p className="text-black max-w-xl mx-auto">These aren't on a poster. They're baked into every project, every decision, every line of code we ship.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((v, i) => (
                <motion.div key={v.title} variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}
                  className="p-7 rounded-2xl border border-[#E8E5E1] hover:border-[#D5D0CB] hover:shadow-md transition-all duration-200"
                  style={{ background: cardGradients[i % 6] }}>
                  <div className="w-11 h-11 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <h3 className="font-bold text-black mb-2">{v.title}</h3>
                  <p className="text-sm text-black leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHY DIFFERENT — sticky left + scrolling right ── */}
      <section className="px-6 md:px-12 lg:px-24 bg-white border-y border-[#E8E5E1]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* LEFT — sticky */}
            <div className="lg:sticky lg:top-24 lg:self-start py-24">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB] mb-4">Why Choose Us</p>
                <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-6 leading-tight">
                  Why We're Different<br />
                  <span className="text-gradient-blue">From Every Other Agency</span>
                </h2>
                <p className="text-black leading-relaxed mb-4 text-lg">
                  We don't compete on price. We compete on outcomes. The businesses that work with us aren't shopping for the cheapest quote. They're looking for the team that will make them undeniable in their market.
                </p>
                <p className="text-sm text-black/60 mb-8">Scroll to explore what sets us apart →</p>
                <a href="https://wa.me/923225194889" target="_blank" rel="noopener noreferrer">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="px-7 py-3.5 rounded-2xl font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors shadow-sm flex items-center gap-2">
                    Work With Us <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </a>
                <div className="mt-10 flex items-center gap-1.5 flex-wrap">
                  {differentiators.map((d, i) => (
                    <div key={i} className="w-2 h-2 rounded-full"
                      style={{ background: d.color, opacity: 0.35 + (i * 0.08) }} />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT — scrolls */}
            <div className="py-24 space-y-5">
              {differentiators.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
                  whileHover={{ x: 4, transition: { duration: 0.15 } }}
                  className="p-6 rounded-2xl border border-[#E8E5E1] hover:border-[#D5D0CB] hover:shadow-lg transition-all duration-200"
                  style={{ background: cardGradients[i % 6] }}>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/80 border border-white/90 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <CheckCircle2 className="w-4 h-4" style={{ color: d.color }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-base font-black text-black leading-tight">{d.title}</h3>
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: d.color }} />
                      </div>
                      <p className="text-sm text-black leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── ORANGE CTA ── */}
      <section className="py-28 relative overflow-hidden section-orange-pattern">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-xl mx-auto">
              <div className="p-10 md:p-14 rounded-3xl bg-white border border-[#E8E5E1] text-center" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}>
                <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-tight mb-5">
                  Ready to Build<br />Something Great?
                </h2>
                <p className="text-black text-lg mb-10 leading-relaxed">
                  No pitch decks, no templates. Just an honest conversation about what you're building and how we can help you get there faster.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="https://wa.me/923225194889" target="_blank" rel="noopener noreferrer">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-base bg-black text-white hover:bg-[#1a1a1a] shadow-sm transition-colors flex items-center gap-2">
                      Start a Project <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-base border border-black/12 text-black hover:bg-black/5 transition-all duration-150 flex items-center gap-2">
                      <Users className="w-4 h-4" /> WhatsApp Us
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
