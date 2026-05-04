import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  Code2, Zap, TrendingUp, CheckCircle2, Clock, Users,
  Star, Play, ArrowRight, BookOpen, Globe, Target, Award,
  Layers, Lock, MessageCircle, Lightbulb, Hammer, DollarSign,
  RefreshCw, Bell, Instagram, Facebook, Rocket, Brain
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const WHATSAPP = "https://wa.me/923225194889?text=Hello%20NovatraTech%20Academy%2C%20I%27d%20like%20to%20learn%20more";

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
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>{children}</motion.div>;
}

const approach = [
  { icon: Hammer, label: "Practical execution" },
  { icon: Globe, label: "Market-relevant skills" },
  { icon: Brain, label: "System-based thinking" },
];

const preparedFor = [
  { icon: DollarSign, label: "Freelancing" },
  { icon: Globe, label: "Remote work" },
  { icon: Rocket, label: "Startup building" },
  { icon: Code2, label: "Technical careers" },
];

const missionBridges = [
  { from: "Learning", to: "Earning" },
  { from: "Knowledge", to: "Execution" },
  { from: "Skills", to: "Real-world application" },
];

const visionPoints = [
  "Students working with international clients",
  "Freelancers building scalable income streams",
  "Developers creating real-world products",
  "Individuals becoming self-reliant through skill",
];

const whatYouBecome = [
  { icon: Lightbulb, title: "Problem Solvers", desc: "Think through challenges and find the right solution, not just the fastest one." },
  { icon: Brain, title: "System Thinkers", desc: "Understand how everything connects: workflows, tools, data, and outcomes." },
  { icon: DollarSign, title: "Independent Earners", desc: "Monetize your skills and build income you own, not just a salary someone can cut." },
  { icon: Hammer, title: "Builders of Real Solutions", desc: "Ship actual products and projects, not just homework assignments." },
];

const learningApproach = [
  "Build real projects from day one",
  "Work on practical, industry-relevant use cases",
  "Learn the exact tools used in production environments",
  "Understand complete end-to-end workflows",
  "Build, test, and deploy. Not just watch videos.",
];

const curriculum = [
  { week: "Week 1–2", title: "Foundations", topics: ["HTML5 semantics & modern CSS", "CSS Grid, Flexbox & responsive design", "JavaScript fundamentals (ES2024)"] },
  { week: "Week 3–4", title: "JavaScript Deep Dive", topics: ["DOM manipulation & events", "Async/await & API integration", "Modern tooling (Vite, npm)"] },
  { week: "Week 5–7", title: "React.js Mastery", topics: ["Component architecture & hooks", "State management & Context API", "React Router & performance"] },
  { week: "Week 8–9", title: "Backend & APIs", topics: ["Node.js & Express server", "REST API design & auth", "PostgreSQL database design"] },
  { week: "Week 10–11", title: "Real-World Projects", topics: ["3 portfolio projects from scratch", "GitHub workflow & code review", "Deployment on Vercel/Railway"] },
  { week: "Week 12", title: "Freelancing Launch", topics: ["Portfolio & profile setup", "Client acquisition & pricing strategy", "Proposal writing & delivery system"] },
];

const upcomingCourses = [
  { icon: Zap, title: "AI Automation Systems", desc: "Build intelligent automation pipelines that solve real business problems without a PhD.", color: "#6366F1", eta: "Q3 2025" },
  { icon: Code2, title: "SaaS Development", desc: "From validated idea to production SaaS: architecture, billing, auth, and launch.", color: "#d97706", eta: "Q4 2025" },
  { icon: TrendingUp, title: "Growth Systems & Funnels", desc: "Build data-driven marketing and conversion systems that generate revenue on autopilot.", color: "#059669", eta: "Q1 2026" },
  { icon: Layers, title: "Digital Business Infrastructure", desc: "Build the operational backbone of a modern digital business from the ground up.", color: "#0891B2", eta: "Q1 2026" },
];

const whyReasons = [
  { icon: Globe, title: "Real-World Focused Learning", desc: "Every module is built around what businesses actually need today, not academic theory from five years ago." },
  { icon: Award, title: "Built by Practitioners", desc: "Courses are designed by builders who've shipped real products and run real businesses, not career lecturers." },
  { icon: Target, title: "Market-Demand Aligned", desc: "Curriculum is continuously updated to reflect what clients, employers, and the market are paying for right now." },
  { icon: DollarSign, title: "Focus on Income & Growth", desc: "We don't just teach skills, we teach you how to turn those skills into real, sustainable income streams." },
  { icon: RefreshCw, title: "Continuously Evolving", desc: "New modules, advanced topics, and expanded learning paths are added as the market grows and changes." },
];

const outcomes = [
  "Start freelancing with real clients",
  "Build a portfolio that speaks for itself",
  "Work with clients locally and internationally",
  "Launch your own products or projects",
  "Create sustainable, scalable income streams",
];

export default function Academy() {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <Navbar />
      <FloatingCTA />

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #DDD6FE -26.16%, #FAF9F7 50%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(109,40,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C3AED]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#A78BFA]/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-20 w-14 h-14 rounded-2xl bg-white border border-[#E8E5E1] shadow-md hidden lg:flex items-center justify-center">
          <Code2 className="w-6 h-6 text-[#7C3AED]" />
        </motion.div>
        <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-48 left-16 w-12 h-12 rounded-xl bg-white border border-[#E8E5E1] shadow-md hidden lg:flex items-center justify-center">
          <Zap className="w-5 h-5 text-[#6366F1]" />
        </motion.div>
        <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 left-32 w-10 h-10 rounded-xl bg-white border border-[#E8E5E1] shadow-md hidden lg:flex items-center justify-center">
          <Star className="w-4 h-4 text-[#A78BFA]" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-20 pb-16 text-center">
          {/* Academy Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-2xl opacity-40"
                style={{ background: "radial-gradient(circle, #7C3AED 0%, #6366F1 60%, transparent 100%)", transform: "scale(1.2)" }} />
              <img
                src="/logo-academy.png"
                alt="NovatraTech Academy"
                className="relative w-52 h-52 md:w-64 md:h-64 object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/8 text-[#7C3AED] text-sm font-bold mb-8">
            <BookOpen className="w-3.5 h-3.5" />
            NovatraTech Academy · Now Enrolling
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="text-5xl md:text-7xl font-black text-black tracking-tight leading-[0.92] mb-6">
            Build High-Income<br />
            <span style={{ background: "linear-gradient(135deg, #7C3AED, #A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Digital Skills
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-black text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Learn real-world systems, build production-ready projects, and develop skills that translate directly into income, freelancing, and scalable careers.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#courses">
              <motion.button data-testid="academy-hero-enroll" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-2xl font-semibold text-base text-white shadow-md transition-colors flex items-center gap-2"
                style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}>
                <Play className="w-4 h-4" fill="currentColor" />
                Start Learning
              </motion.button>
            </a>
            <a href="#courses">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-2xl font-semibold text-base border border-[#E8E5E1] bg-white text-black hover:bg-[#F8F7F5] hover:border-[#D5D0CB] transition-all duration-150 shadow-sm">
                Explore Courses
              </motion.button>
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-black">
            <div className="flex items-center gap-2"><Users className="w-4 h-4 text-[#7C3AED]" /><span>240+ students enrolled</span></div>
            <span className="hidden sm:block text-[#D5D0CB]">•</span>
            <div className="flex items-center gap-1.5">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#fbbf24] text-[#fbbf24]" />)}</div>
              <span>4.9/5 average rating</span>
            </div>
            <span className="hidden sm:block text-[#D5D0CB]">•</span>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#A78BFA]" /><span>Lifetime access included</span></div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT THE ACADEMY ── */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-white border-y border-[#E8E5E1]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED] mb-3">About the Academy</p>
                <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-6">
                  Not a Traditional<br />Learning Platform
                </h2>
                <p className="text-black leading-relaxed mb-4">
                  NovatraTech Academy doesn't teach outdated theory or generic tutorials. We train individuals to build real systems, real products, and real income streams.
                </p>
                <p className="text-black leading-relaxed mb-8">
                  Our approach is grounded in execution. Every lesson, every project, and every module is designed around what actually works in the market today.
                </p>
                <div className="mb-8">
                  <p className="text-xs font-bold text-black uppercase tracking-wider mb-4">Our Approach Is Focused On</p>
                  <div className="space-y-3">
                    {approach.map((a) => (
                      <div key={a.label} className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#7C3AED]/8 flex items-center justify-center shrink-0">
                          <a.icon className="w-4 h-4 text-[#7C3AED]" />
                        </div>
                        <span className="text-sm font-semibold text-black">{a.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="p-8 rounded-2xl border border-[#E8E5E1]" style={{ background: cardGradients[1] }}>
                  <p className="text-xs font-bold text-black uppercase tracking-wider mb-6">We Prepare Students For</p>
                  <div className="grid grid-cols-2 gap-4">
                    {preparedFor.map((p) => (
                      <div key={p.label} className="flex items-center gap-3 p-4 rounded-xl bg-white/70 border border-white/80">
                        <div className="w-9 h-9 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center shrink-0">
                          <p.icon className="w-4 h-4 text-[#7C3AED]" />
                        </div>
                        <span className="text-sm font-bold text-black">{p.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/60">
                    <p className="text-sm text-black text-center font-semibold italic">
                      "Turn learners into builders."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MISSION + VISION ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 section-pink">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">Mission & Vision</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="p-8 rounded-2xl border border-[#E8E5E1]" style={{ background: cardGradients[3] }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">Our Mission</p>
                    <h3 className="font-black text-black text-lg">Empower Through Skills</h3>
                  </div>
                </div>
                <p className="text-black leading-relaxed mb-6">
                  To empower individuals with high-value digital skills that create real opportunities and bridge the gap between learning and earning.
                </p>
                <div className="space-y-3">
                  {missionBridges.map((b) => (
                    <div key={b.from} className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-white/70">
                      <span className="text-sm font-bold text-black">{b.from}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                      <span className="text-sm font-bold text-[#7C3AED]">{b.to}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="p-8 rounded-2xl border border-[#E8E5E1]" style={{ background: cardGradients[4] }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#0891B2]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0891B2]">Our Vision</p>
                    <h3 className="font-black text-black text-lg">Compete Globally</h3>
                  </div>
                </div>
                <p className="text-black leading-relaxed mb-6">
                  To build a generation of digitally skilled individuals who can compete on the global stage and create opportunities for themselves anywhere.
                </p>
                <div className="space-y-2.5">
                  {visionPoints.map((v) => (
                    <div key={v} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0891B2] mt-0.5 shrink-0" />
                      <span className="text-sm text-black">{v}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHAT WE WANT STUDENTS TO BECOME ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-white border-y border-[#E8E5E1]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED] mb-3">Student Transformation</p>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">What We Want You to Become</h2>
              <p className="text-black max-w-xl mx-auto">
                We don't just want you to complete a course. Every student leaves with the mindset, skills, and confidence to create real outcomes.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {whatYouBecome.map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}
                  className="p-6 rounded-2xl border border-[#E8E5E1] hover:border-[#D5D0CB] hover:shadow-md transition-all duration-200"
                  style={{ background: cardGradients[i % 6] }}>
                  <div className="w-11 h-11 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center mb-5">
                    <item.icon className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <h3 className="font-black text-black mb-2">{item.title}</h3>
                  <p className="text-sm text-black leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-8 p-6 rounded-2xl border border-[#7C3AED]/15 bg-[#7C3AED]/5 text-center">
              <p className="text-sm text-[#6D28D9] font-semibold">
                Our goal: every student understands how things work, can build from scratch, and can monetize their skills.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── LEARNING APPROACH ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 section-pink">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp}>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED] mb-3">Our Learning Approach</p>
                <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-6">
                  Execution, Not<br />Passive Learning
                </h2>
                <p className="text-black text-lg leading-relaxed mb-8">
                  We focus on doing, not watching. Inside our programs, you build real things from day one, and you understand every step of why.
                </p>
                <div className="space-y-3">
                  {learningApproach.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#7C3AED]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED]" />
                      </div>
                      <span className="text-black font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeUp}
                className="p-8 rounded-2xl border border-[#E8E5E1] relative overflow-hidden"
                style={{ background: cardGradients[2] }}>
                <p className="text-xs font-bold uppercase tracking-wider text-black/50 mb-6">The NovatraTech Difference</p>
                <div className="space-y-5">
                  {[
                    { label: "Theory Only", bad: true, desc: "Watch 10 hours of video, take a quiz, get a certificate." },
                    { label: "Our Way", bad: false, desc: "Build a real app, deploy it live, and pitch it to a client." },
                  ].map((row) => (
                    <div key={row.label} className={`p-5 rounded-xl border ${row.bad ? "border-[#FECACA] bg-[#FEF2F2]/60" : "border-[#BBF7D0] bg-[#F0FDF4]/60"}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-black ${row.bad ? "bg-[#FCA5A5] text-[#991B1B]" : "bg-[#6EE7B7] text-[#065F46]"}`}>
                          {row.bad ? "✗" : "✓"}
                        </div>
                        <span className="text-sm font-black text-black">{row.label}</span>
                      </div>
                      <p className="text-sm text-black">{row.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-white/70 border border-white/80 text-center">
                  <p className="text-sm font-black text-black">You won't just watch. You will build, test, and deploy.</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FEATURED COURSE ── */}
      <section id="courses" className="px-6 md:px-12 lg:px-24 py-24 bg-white border-y border-[#E8E5E1]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED] mb-3">Courses We Offer</p>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">Start With Web Development</h2>
            </motion.div>
            <motion.div variants={fadeUp} data-testid="course-web-development-bootcamp"
              className="relative rounded-3xl overflow-hidden border border-[#E8E5E1] bg-white"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#6366F1]" />
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center">
                        <Code2 className="w-6 h-6 text-[#7C3AED]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl font-black text-black">Web Development Bootcamp</h3>
                          <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#dcfce7] text-[#16a34a] border border-[#bbf7d0]">LIVE</span>
                        </div>
                        <p className="text-sm text-black mt-0.5">From Zero to Full-Stack Developer</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-black mb-6">
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 12 weeks</span>
                      <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 240+ enrolled</span>
                      <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> Beginner → Advanced</span>
                      <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 fill-[#fbbf24] text-[#fbbf24]" /> 4.9 rating</span>
                    </div>
                    <p className="text-xs font-bold text-black uppercase tracking-wider mb-4">What You Will Learn</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {[
                        "HTML, CSS & JavaScript: modern fundamentals",
                        "Responsive design for all screen sizes",
                        "Real-world project building from scratch",
                        "Deployment, hosting, and DevOps basics",
                        "Freelancing fundamentals: clients, pricing, delivery",
                        "Git workflows, deployment & production setup",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#7C3AED] mt-0.5 shrink-0" />
                          <span className="text-sm text-black">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 rounded-xl bg-[#7C3AED]/6 border border-[#7C3AED]/12">
                      <p className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider mb-1">Outcome</p>
                      <p className="text-sm text-[#5B21B6] font-semibold">Build production-ready websites and launch as a freelancer or junior developer in 12 weeks.</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    {[
                      "12 weeks of structured curriculum",
                      "3 portfolio projects + capstone build",
                      "Private community access",
                      "Certificate of completion",
                      "Direct instructor Q&A sessions",
                      "Lifetime access + all updates",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-black">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7C3AED] shrink-0" />
                        {item}
                      </div>
                    ))}
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-4">
                      <motion.button data-testid="course-enroll-webdev" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        className="w-full py-4 rounded-xl font-bold text-base text-white transition-colors shadow-sm flex items-center justify-center gap-2"
                        style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}>
                        <Play className="w-4 h-4" fill="currentColor" />
                        Enroll Now
                      </motion.button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 12-WEEK CURRICULUM ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 section-pink">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED] mb-3">Full Curriculum</p>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">12-Week Roadmap</h2>
              <p className="text-black max-w-xl mx-auto">Every week is structured, project-based, and designed to build the exact skills the market pays for.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {curriculum.map((c, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  className="p-6 rounded-2xl border border-[#E8E5E1] hover:border-[#D5D0CB] hover:shadow-md transition-all duration-200"
                  style={{ background: cardGradients[i % 6] }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider">{c.week}</span>
                    <span className="w-7 h-7 rounded-full bg-white/70 border border-white/80 flex items-center justify-center text-xs font-black text-[#7C3AED]">{i + 1}</span>
                  </div>
                  <h3 className="font-black text-black text-base mb-3">{c.title}</h3>
                  <div className="space-y-2">
                    {c.topics.map((t) => (
                      <div key={t} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]/40 mt-1.5 shrink-0" />
                        <p className="text-xs text-black leading-relaxed">{t}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── UPCOMING COURSES ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-white border-y border-[#E8E5E1]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6366F1] mb-3">Also Offered</p>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">More Programs We Offer</h2>
              <p className="text-black max-w-xl mx-auto">Alongside Web Development, we also offer training in these high-demand domains. Contact us to enroll or learn more.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {upcomingCourses.map((course, i) => (
                <motion.div key={course.title} variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}
                  data-testid={`upcoming-course-${course.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative p-6 rounded-2xl border border-[#E8E5E1] hover:border-[#D5D0CB] hover:shadow-md transition-all duration-200"
                  style={{ background: cardGradients[(i + 2) % 6] }}>
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-white/70 border border-white/80"
                      style={{ color: course.color }}>
                      <CheckCircle2 className="w-3 h-3" /> Available
                    </span>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center mb-5">
                    <course.icon className="w-5 h-5" style={{ color: course.color }} />
                  </div>
                  <h3 className="font-black text-black text-sm mb-2 pr-16">{course.title}</h3>
                  <p className="text-xs text-black leading-relaxed mb-5">{course.desc}</p>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-1.5 text-xs font-bold cursor-pointer hover:gap-2.5 transition-all duration-150" style={{ color: course.color }}>
                      Enroll Now <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHY NOVATRATECH ACADEMY ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 section-pink">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED] mb-3">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">Why NovatraTech Academy</h2>
              <p className="text-black max-w-xl mx-auto">Five things that make our approach fundamentally different from any other learning platform.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyReasons.map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}
                  className="p-6 rounded-2xl border border-[#E8E5E1] hover:border-[#D5D0CB] hover:shadow-md transition-all duration-200"
                  style={{ background: cardGradients[(i + 1) % 6] }}>
                  <div className="w-11 h-11 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center mb-5">
                    <item.icon className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <h3 className="font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-sm text-black leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── OUTCOMES + CONTINUOUS GROWTH ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-white border-y border-[#E8E5E1]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={fadeUp} className="p-8 rounded-2xl border border-[#E8E5E1]" style={{ background: cardGradients[0] }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">Outcome-Driven</p>
                    <h3 className="font-black text-black text-lg">What You Will Achieve</h3>
                  </div>
                </div>
                <p className="text-black leading-relaxed mb-6">Our programs are designed around real outcomes, not completion certificates. Every module moves you closer to an actual result.</p>
                <div className="space-y-3">
                  {outcomes.map((o) => (
                    <div key={o} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#7C3AED] mt-0.5 shrink-0" />
                      <span className="text-sm text-black">{o}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="p-8 rounded-2xl border border-[#E8E5E1]" style={{ background: cardGradients[5] }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-[#059669]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#059669]">Always Growing</p>
                    <h3 className="font-black text-black text-lg">Continuous Growth</h3>
                  </div>
                </div>
                <p className="text-black leading-relaxed mb-6">Learning doesn't stop after a course. We continuously update and expand so you're never left behind as the market evolves.</p>
                <div className="space-y-3">
                  {[
                    "Content updated as the market changes",
                    "New modules added regularly",
                    "Advanced topics introduced over time",
                    "Expanded learning paths for career growth",
                    "Community-driven knowledge sharing",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] mt-0.5 shrink-0" />
                      <span className="text-sm text-black">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── STAY UPDATED ── */}
      <section className="px-6 md:px-12 lg:px-24 py-20 section-pink">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E8E5E1] shadow-sm flex items-center justify-center mx-auto mb-6">
                <Bell className="w-6 h-6 text-[#7C3AED]" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED] mb-3">Stay Updated</p>
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-4">Never Miss a Launch</h2>
              <p className="text-black max-w-md mx-auto mb-8">
                Follow us for updates, new course announcements, learning resources, and opportunities to join upcoming programs early.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm border border-[#E8E5E1] bg-white text-black hover:bg-[#F8F7F5] hover:border-[#D5D0CB] transition-all duration-150 shadow-sm">
                    <Instagram className="w-5 h-5 text-[#E1306C]" />
                    Follow on Instagram
                  </motion.button>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm border border-[#E8E5E1] bg-white text-black hover:bg-[#F8F7F5] hover:border-[#D5D0CB] transition-all duration-150 shadow-sm">
                    <Facebook className="w-5 h-5 text-[#1877F2]" />
                    Follow on Facebook
                  </motion.button>
                </a>
              </div>
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
                  Start Your Journey<br />with NovatraTech Academy
                </h2>
                <p className="text-black text-lg mb-3 leading-relaxed font-medium">
                  Build skills that matter.<br />Learn what the market demands.<br />Create opportunities for yourself.
                </p>
                <p className="text-black/60 text-sm mb-10">Join 240+ students who chose to invest in themselves.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <motion.button data-testid="academy-final-cta" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-base bg-black text-white hover:bg-[#1a1a1a] shadow-sm transition-colors flex items-center gap-2">
                      <Play className="w-4 h-4" fill="currentColor" />
                      Enroll Now
                    </motion.button>
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-base border border-black/12 text-black/70 hover:bg-black/5 hover:text-black transition-all duration-150 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" /> Join the Community
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
