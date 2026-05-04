import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  Bot, Globe, Code2, Smartphone, TrendingUp, Megaphone, ArrowRight,
  Layers, Zap, Target, MessageCircle, CheckCircle2, ArrowRightCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const WHATSAPP = "https://wa.me/923225194889?text=Hello%20NovatraTech%2C%20I%27d%20like%20to%20discuss%20a%20project";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>{children}</motion.div>;
}

const solutions = [
  { icon: Bot, title: "AI Automation Systems", tagline: "Automate operations, reduce cost, increase efficiency", desc: "Intelligent pipelines that eliminate manual work, extract insights from data, and let your team focus on what only humans can do.", color: "#2563EB", href: "/solutions/ai-automation", metric: "60% cost reduction", bg: "linear-gradient(180deg, #EDEAE4 0%, #F9FBC9 65%, #FEE969 100%)" },
  { icon: Globe, title: "High-Converting Websites", tagline: "Built for speed, UX, and conversions", desc: "Precision-engineered digital experiences designed to turn visitors into customers, not just look good in a screenshot.", color: "#0891B2", href: "/solutions/web-development", metric: "4× more leads", bg: "linear-gradient(180deg, #F0F0F0 0%, #F0C3EC 65%, #CCE7E9 100%)" },
  { icon: Code2, title: "SaaS Development", tagline: "Scalable product architecture from day one", desc: "From validated idea to production SaaS. Built to handle 10,000+ users without a costly rebuild when success arrives.", color: "#6366F1", href: "/solutions/saas-development", metric: "99.9% uptime", bg: "linear-gradient(180deg, #F2F1ED 0%, #D5DFE0 65%, #E5FF94 100%)" },
  { icon: Smartphone, title: "App Development", tagline: "Mobile-first solutions that users return to", desc: "iOS, Android, and cross-platform apps with the polish of a senior product team, shipped at startup speed.", color: "#db2777", href: "/solutions/app-development", metric: "4.8★ avg. rating", bg: "linear-gradient(180deg, #F2F1ED 0%, #F0C4E3 65%, #FBB439 100%)" },
  { icon: TrendingUp, title: "Growth Funnels", tagline: "Lead generation systems that close", desc: "Full-funnel conversion architecture from first click to signed contract, measured, tested, and optimized continuously.", color: "#d97706", href: "/solutions/growth-funnels", metric: "4× conversion lift", bg: "linear-gradient(180deg, #EDEAE4 0%, #CCE7E9 65%, #E9F1FA 100%)" },
  { icon: Megaphone, title: "Digital Marketing Systems", tagline: "Performance-based campaigns, not vanity metrics", desc: "Data-driven marketing machines that generate predictable pipeline, not one-off campaigns that spike and die.", color: "#059669", href: "/solutions/digital-marketing", metric: "3.2× ROAS avg.", bg: "linear-gradient(270deg, #E9F1FA 0%, #EFFFBD 100%)" },
];

const pillars = [
  { icon: Layers, title: "Fully Integrated", desc: "Every system we build talks to every other. Your website feeds your CRM, your automation feeds your analytics. Nothing runs in isolation." },
  { icon: Zap, title: "Built for Scale", desc: "We engineer for where you are going, not just where you are. Architecture decisions on day one prevent costly rebuilds at 10× growth." },
  { icon: Target, title: "Performance-Focused", desc: "Everything is tracked, measured, and optimized continuously. We don't ship and disappear, we build systems that compound over time." },
];

const flowStages = [
  { label: "Digital Foundation", solutions: ["High-Converting Websites", "App Development"], color: "#0891B2", icon: Globe },
  { label: "Intelligence Layer", solutions: ["AI Automation Systems", "SaaS Development"], color: "#6366F1", icon: Bot },
  { label: "Growth Engine", solutions: ["Growth Funnels", "Digital Marketing Systems"], color: "#059669", icon: TrendingUp },
];

function DiagramNode({ label, color, icon: Icon, delay = 0 }: { label: string; color: string; icon: any; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center gap-2">
      <div className="w-14 h-14 rounded-2xl border-2 border-white shadow-md flex items-center justify-center"
        style={{ background: `${color}15`, borderColor: `${color}30` }}>
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <span className="text-xs font-bold text-black text-center max-w-[80px] leading-tight">{label}</span>
    </motion.div>
  );
}

function AnimatedArrow({ delay = 0 }: { delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={inView ? { opacity: 1, scaleX: 1 } : {}}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      style={{ transformOrigin: "left" }}
      className="flex items-center self-center pb-5">
      <div className="w-8 md:w-16 h-0.5 bg-gradient-to-r from-[#E8E5E1] to-[#D5D0CB]" />
      <ArrowRightCircle className="w-5 h-5 text-[#D5D0CB] shrink-0" />
    </motion.div>
  );
}

export default function Solutions() {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <Navbar />
      <FloatingCTA />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-24 text-center overflow-hidden hero-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#2563EB]/5 rounded-full blur-3xl" />
          <div className="absolute inset-0"
            style={{ backgroundImage: "linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-xs font-bold uppercase tracking-[0.18em] text-[#2563EB] mb-5">
            Systems We Build
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-black tracking-tight mb-5 leading-[0.95]">
            Infrastructure for the<br />
            <span className="text-gradient-blue">Modern Business</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-black text-lg leading-relaxed mb-8">
            Six solution areas. One integrated systems approach. Select a solution to explore what we build, how we build it, and why it moves the needle.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://wa.me/923225194889" target="_blank" rel="noopener noreferrer">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-full text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors shadow-sm flex items-center gap-2">
                Book a Free Strategy Call <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </a>
            <a href="#systems">
              <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#E8E5E1] bg-white/80 text-black text-sm font-semibold cursor-pointer hover:bg-white transition-colors shadow-sm">
                Explore All Systems
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── PILLAR SECTION: Systems Built for Scale ── */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-white border-y border-[#E8E5E1]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB] mb-3">Our Approach</p>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
                Systems Built for Scale,<br />Not Just Output
              </h2>
              <p className="text-black max-w-xl mx-auto">We don't build isolated tools. We build connected infrastructure that compounds over time and adapts as you grow.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <motion.div key={p.title} variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}
                  className="p-8 rounded-2xl border border-[#E8E5E1] hover:border-[#D5D0CB] hover:shadow-lg transition-all duration-200 bg-[#FAFAFA]">
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/8 flex items-center justify-center mb-5">
                    <p.icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="text-lg font-black text-black mb-3">{p.title}</h3>
                  <p className="text-sm text-black leading-relaxed">{p.desc}</p>
                  <div className="mt-5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span className="text-xs font-semibold text-[#2563EB]">
                      {i === 0 ? "End-to-end connected systems" : i === 1 ? "Engineered for 10× growth" : "Continuous optimisation"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ── */}
      <section id="systems" className="px-6 md:px-12 lg:px-24 py-24 section-pink border-t border-[#E8E5E1]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6366F1] mb-3">Six Solution Areas</p>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">Choose Your System</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <motion.div key={s.title} variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.18 } }}
                  className="group"
                  data-testid={`solution-card-${s.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Link href={s.href}>
                    <div className="relative h-full p-8 rounded-2xl border border-[#E8E5E1] cursor-pointer overflow-hidden transition-all duration-200 hover:border-[#D5D0CB] hover:shadow-xl"
                      style={{ background: s.bg }}>
                      <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-2xl"
                        style={{ background: `linear-gradient(90deg, transparent, ${s.color}80, transparent)` }} />
                      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                        style={{ background: `linear-gradient(to top, ${s.color}06, transparent)` }} />

                      <div className="flex items-start justify-between mb-6">
                        <div className="w-13 h-13 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center shadow-sm w-12 h-12">
                          <s.icon className="w-6 h-6" style={{ color: s.color }} />
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-black bg-white/70 border border-white/80"
                          style={{ color: s.color }}>
                          {s.metric}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-black mb-1 tracking-tight">{s.title}</h3>
                      <p className="text-xs font-bold mb-4" style={{ color: s.color }}>{s.tagline}</p>
                      <p className="text-sm text-black leading-relaxed mb-8">{s.desc}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-bold transition-all duration-150 group-hover:gap-3"
                          style={{ color: s.color }}>
                          Explore System <ArrowRight className="w-4 h-4" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/70 border border-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0">
                          <ArrowRight className="w-3.5 h-3.5" style={{ color: s.color }} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── HOW EVERYTHING CONNECTS ── */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-white border-y border-[#E8E5E1]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB] mb-3">The Bigger Picture</p>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">How Everything Connects</h2>
              <p className="text-black max-w-xl mx-auto">Our six solutions aren't standalone products. They're layers of a single integrated system, each one amplifying the others.</p>
            </motion.div>

            {/* Flow diagram */}
            <motion.div variants={fadeIn} className="relative">
              {/* Desktop flow */}
              <div className="hidden md:flex items-start justify-center gap-2 lg:gap-4">
                {flowStages.map((stage, si) => (
                  <div key={stage.label} className="flex items-center gap-2 lg:gap-4">
                    {/* Stage block */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.2, duration: 0.5 }}
                      className="flex flex-col items-center">
                      <div className="p-5 rounded-2xl border border-[#E8E5E1] bg-[#FAFAFA] w-52 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                          style={{ background: `${stage.color}12` }}>
                          <stage.icon className="w-5 h-5" style={{ color: stage.color }} />
                        </div>
                        <p className="text-xs font-black uppercase tracking-wider mb-3" style={{ color: stage.color }}>{stage.label}</p>
                        <div className="space-y-1.5">
                          {stage.solutions.map((sol) => (
                            <div key={sol} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: stage.color }} />
                              <span className="text-xs text-black font-medium leading-tight">{sol}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                    {/* Arrow */}
                    {si < flowStages.length - 1 && <AnimatedArrow delay={si * 0.2 + 0.3} />}
                  </div>
                ))}
              </div>

              {/* Mobile flow — vertical */}
              <div className="flex md:hidden flex-col items-center gap-4">
                {flowStages.map((stage, si) => (
                  <div key={stage.label} className="flex flex-col items-center gap-3 w-full">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.15 }}
                      className="w-full p-5 rounded-2xl border border-[#E8E5E1] bg-[#FAFAFA]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${stage.color}12` }}>
                          <stage.icon className="w-4 h-4" style={{ color: stage.color }} />
                        </div>
                        <p className="text-sm font-black" style={{ color: stage.color }}>{stage.label}</p>
                      </div>
                      <div className="space-y-1.5">
                        {stage.solutions.map((sol) => (
                          <div key={sol} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: stage.color }} />
                            <span className="text-xs text-black font-medium">{sol}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                    {si < flowStages.length - 1 && (
                      <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
                        transition={{ delay: si * 0.15 + 0.2 }} style={{ transformOrigin: "top" }}
                        className="w-0.5 h-6 bg-gradient-to-b from-[#D5D0CB] to-[#E8E5E1]" />
                    )}
                  </div>
                ))}
              </div>

              {/* Convergence label */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-12 max-w-lg mx-auto p-6 rounded-2xl border border-[#2563EB]/15 bg-[#2563EB]/5 text-center">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mx-auto mb-3">
                  <Layers className="w-5 h-5 text-[#2563EB]" />
                </div>
                <p className="text-sm font-black text-[#2563EB] mb-1">One Integrated System</p>
                <p className="text-sm text-black">
                  Your website feeds your CRM. Your automation feeds your analytics. Your growth funnels feed your SaaS. Every system amplifies every other.
                </p>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="px-6 md:px-12 lg:px-24 py-16 section-pink border-t border-[#E8E5E1]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: "50+", label: "Projects Delivered" },
                { stat: "98%", label: "Client Retention Rate" },
                { stat: "12+", label: "AI Systems Deployed" },
                { stat: "3 Weeks", label: "Avg. Time to Launch" },
              ].map((s) => (
                <motion.div key={s.label} variants={fadeUp} className="p-5 rounded-2xl bg-white border border-[#E8E5E1]">
                  <p className="text-3xl md:text-4xl font-black text-black mb-1">{s.stat}</p>
                  <p className="text-xs text-black font-medium">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 relative overflow-hidden section-orange-pattern">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-2xl mx-auto">
              <div className="p-10 md:p-14 rounded-3xl bg-white border border-[#E8E5E1] text-center" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}>
                <div className="w-14 h-14 rounded-2xl bg-[#2563EB]/8 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-7 h-7 text-[#2563EB]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-tight mb-5">
                  Not Sure Where<br />to Start? We'll Map It.
                </h2>
                <p className="text-black text-lg mb-4 leading-relaxed max-w-md mx-auto">
                  Book a free 30-minute strategy call. We'll diagnose your current setup and map the exact system architecture your business needs.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-black mb-10">
                  {["No pitch", "No pressure", "No commitment"].map((t) => (
                    <span key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F7F5] border border-[#E8E5E1]">
                      <CheckCircle2 className="w-3 h-3 text-[#2563EB]" /> {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="https://wa.me/923225194889" target="_blank" rel="noopener noreferrer">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-base bg-black text-white hover:bg-[#1a1a1a] shadow-sm transition-colors flex items-center gap-2">
                      Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-base border border-black/12 text-black/70 hover:bg-black/5 hover:text-black transition-all duration-150 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" /> WhatsApp Us
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
