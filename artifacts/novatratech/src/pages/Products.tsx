import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle2, Layers, Zap, Shield, BarChart3, Users, Bell,
  ArrowRight, Rocket, MessageCircle, TrendingUp, Lock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const WHATSAPP = "https://wa.me/923225194889?text=Hello%20NovatraTech%2C%20I%27d%20like%20to%20discuss%20a%20project";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const cardGradients = [
  "linear-gradient(180deg, #EDEAE4 0%, #F9FBC9 65%, #FEE969 100%)",
  "linear-gradient(180deg, #F0F0F0 0%, #F0C3EC 65%, #CCE7E9 100%)",
  "linear-gradient(180deg, #F2F1ED 0%, #D5DFE0 65%, #E5FF94 100%)",
  "linear-gradient(180deg, #F2F1ED 0%, #F0C4E3 65%, #FBB439 100%)",
  "linear-gradient(180deg, #EDEAE4 0%, #CCE7E9 65%, #E9F1FA 100%)",
  "linear-gradient(270deg, #E9F1FA 0%, #EFFFBD 100%)",
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

const features = [
  { icon: Zap, title: "AI-Powered Workflows", desc: "Automate every repeatable process in your business with intelligent task engines that learn and adapt." },
  { icon: Users, title: "Client Management", desc: "Full CRM capabilities: leads, pipelines, contracts, and communication history in one place." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Real-time metrics on revenue, pipeline, team performance, and growth trajectories." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2-compliant infrastructure. Your data is encrypted at rest and in transit, always." },
  { icon: Bell, title: "Smart Notifications", desc: "Proactive alerts for critical milestones, overdue tasks, and revenue signals that matter." },
  { icon: Layers, title: "Integrations Hub", desc: "Connect to Stripe, Slack, Gmail, HubSpot, Notion, and 200+ tools via native integrations." },
];

const roadmap = [
  { quarter: "Q2 2025", title: "Early Access Launch", desc: "First cohort of 50 founding members onboarded. Core CRM + workflow automation live.", status: "upcoming" },
  { quarter: "Q3 2025", title: "AI Layer + Analytics", desc: "Intelligent task routing, predictive analytics, and smart notification engine shipped.", status: "planned" },
  { quarter: "Q4 2025", title: "Integrations Marketplace", desc: "Native connections to 200+ tools. Public API and webhooks for custom extensions.", status: "planned" },
  { quarter: "Q1 2026", title: "Full Public Launch", desc: "General availability with team collaboration, role management, and enterprise billing.", status: "planned" },
];

export default function Products() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <Navbar />
      <FloatingCTA />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 px-6 md:px-12 lg:px-24 text-center overflow-hidden hero-gradient">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/8 text-[#2563EB] text-sm font-bold mb-8">
            <Bell className="w-3.5 h-3.5" />
            Coming 2026 · Join the Waitlist
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
            className="text-5xl md:text-7xl font-black text-black tracking-tight leading-[0.92] mb-6">
            The Business OS<br />
            <span className="text-gradient-blue">for Digital Teams</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}
            className="text-black text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            One unified platform to manage clients, automate workflows, track revenue, and scale your operations. No $50K software stack required.
          </motion.p>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#2563EB]/8 border border-[#2563EB]/20 text-[#2563EB] font-semibold text-lg">
              <CheckCircle2 className="w-5 h-5" />
              You're on the waitlist! We'll be in touch.
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                data-testid="products-waitlist-email"
                className="flex-1 px-5 py-4 rounded-2xl bg-white/80 border border-[#E8E5E1] text-black placeholder-black/30 focus:outline-none focus:border-[#2563EB]/40 transition-colors text-sm shadow-sm"
              />
              <button type="submit" data-testid="products-waitlist-submit"
                className="px-7 py-4 rounded-2xl font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors whitespace-nowrap shadow-sm">
                Get Early Access
              </button>
            </motion.form>
          )}

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-black">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2563EB]" /><span>No credit card required</span></div>
            <div className="flex items-center gap-2"><Rocket className="w-4 h-4 text-[#6366F1]" /><span>Founding member pricing</span></div>
            <div className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-[#0891B2]" /><span>Lifetime access for early adopters</span></div>
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCT PREVIEW ── */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-white border-y border-[#E8E5E1]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB] mb-3">Product Preview</p>
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">See It in Action</h2>
            </motion.div>
            <motion.div variants={fadeUp}
              className="rounded-3xl overflow-hidden border border-[#E8E5E1]"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.10)" }}>
              <div className="bg-[#F5F3EF] border-b border-[#E8E5E1] px-6 py-3.5 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1.5 rounded-lg bg-white border border-[#E8E5E1] text-xs text-black/50 font-medium">
                    app.novatratech.co
                  </div>
                </div>
              </div>
              <div className="p-8 bg-[#FAF9F7]">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Active Clients", value: "47", color: "#2563EB", gradient: cardGradients[4] },
                    { label: "MRR", value: "$24,800", color: "#059669", gradient: cardGradients[0] },
                    { label: "Tasks Done", value: "94%", color: "#6366F1", gradient: cardGradients[1] },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl border border-[#E8E5E1]" style={{ background: stat.gradient }}>
                      <p className="text-xs text-black/50 font-medium mb-1">{stat.label}</p>
                      <p className="text-2xl font-black" style={{ color: stat.color }}>{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="h-36 rounded-xl bg-white border border-[#E8E5E1] flex items-center justify-center px-6">
                  <div className="flex items-end gap-2 h-24 w-full">
                    {[40, 65, 45, 80, 60, 90, 75, 95].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-md transition-all"
                        style={{
                          height: `${h}%`,
                          background: i === 7
                            ? "linear-gradient(to top, #2563EB, #6366F1)"
                            : i === 5
                            ? "linear-gradient(to top, #2563EB99, #6366F199)"
                            : "rgba(37,99,235,0.12)",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-black/40 text-center mt-3 font-medium">Revenue pipeline • Last 8 weeks</p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 section-pink">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB] mb-3">Platform Features</p>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
                Everything You Need to Run<br />
                <span className="text-gradient-blue">a Modern Business</span>
              </h2>
              <p className="text-black max-w-xl mx-auto">One system, zero switching costs. Replace your fragmented tool stack with a platform built for how you actually work.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <motion.div key={f.title} variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}
                  data-testid={`feature-${f.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="p-6 rounded-2xl border border-[#E8E5E1] hover:border-[#D5D0CB] hover:shadow-md transition-all duration-200"
                  style={{ background: cardGradients[i % 6] }}>
                  <div className="w-11 h-11 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center mb-5">
                    <f.icon className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <h3 className="font-bold text-black mb-2">{f.title}</h3>
                  <p className="text-sm text-black leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-white border-y border-[#E8E5E1]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6366F1] mb-3">Product Roadmap</p>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">What's Coming & When</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roadmap.map((r, i) => (
                <motion.div key={r.quarter} variants={fadeUp} whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  className="p-6 rounded-2xl border border-[#E8E5E1] hover:border-[#D5D0CB] hover:shadow-md transition-all duration-200 relative overflow-hidden"
                  style={{ background: cardGradients[(i + 3) % 6] }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-[#2563EB] uppercase tracking-wider">{r.quarter}</span>
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-white/70 border border-white/80"
                      style={{ color: i === 0 ? "#2563EB" : "#6B7280" }}>
                      {i === 0 ? <><Rocket className="w-3 h-3" /> Upcoming</> : <><Lock className="w-3 h-3" /> Planned</>}
                    </span>
                  </div>
                  <h3 className="font-black text-black text-base mb-2">{r.title}</h3>
                  <p className="text-sm text-black leading-relaxed">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PRICING TEASER ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 section-pink">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB] mb-3">Founding Member Pricing</p>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">Lock In Early Access Pricing</h2>
              <p className="text-black max-w-xl mx-auto">Founding members get lifetime pricing locked in at launch rates, before we raise prices at public release.</p>
            </motion.div>
            <motion.div variants={fadeUp}
              className="max-w-2xl mx-auto p-10 md:p-14 rounded-3xl border border-[#E8E5E1] relative overflow-hidden text-center"
              style={{ background: cardGradients[3], boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#22D3EE]" />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-black bg-white/70 text-[#2563EB] border border-white/80">
                FOUNDING MEMBER
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/70 border border-white/80 flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Layers className="w-8 h-8 text-[#2563EB]" />
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-6xl font-black text-black">$49</span>
                  <div className="text-left">
                    <p className="text-sm line-through text-black/30">$149/mo</p>
                    <p className="text-xs font-bold text-[#059669]">67% off forever</p>
                  </div>
                </div>
                <p className="text-sm text-black/60">per month · locked for life</p>
              </div>
              <div className="space-y-3 mb-8 text-left max-w-xs mx-auto">
                {[
                  "Full platform access at launch",
                  "Lifetime pricing, never increases",
                  "Direct input on product roadmap",
                  "Founding member badge + community access",
                  "Priority onboarding support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-black">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              {submitted ? (
                <div className="flex items-center justify-center gap-2 text-[#2563EB] font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  You're on the waitlist!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com" required
                    className="flex-1 px-4 py-3 rounded-xl bg-white/80 border border-[#E8E5E1] text-black placeholder-black/30 text-sm focus:outline-none focus:border-[#2563EB]/40 shadow-sm" />
                  <button type="submit"
                    className="px-6 py-3 rounded-xl font-semibold text-sm bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors shadow-sm whitespace-nowrap">
                    Reserve Spot
                  </button>
                </form>
              )}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ORANGE CTA ── */}
      <section className="py-28 relative overflow-hidden section-orange-pattern">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-xl mx-auto">
              <div className="p-10 md:p-14 rounded-3xl bg-white border border-[#E8E5E1] text-center" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}>
                <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-tight mb-5">
                  Be First.<br />Be Founding.
                </h2>
                <p className="text-black text-lg mb-10 leading-relaxed">
                  Join the waitlist and lock in founding member pricing before we open to the public. Limited spots available.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="https://wa.me/923225194889" target="_blank" rel="noopener noreferrer">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-base bg-black text-white hover:bg-[#1a1a1a] shadow-sm transition-colors flex items-center gap-2">
                      Join the Waitlist <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-base border border-black/12 text-black/70 hover:bg-black/5 hover:text-black transition-all duration-150 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" /> Ask a Question
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
