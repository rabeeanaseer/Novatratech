import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  Bot, Globe, TrendingUp, Code2, Smartphone, Megaphone,
  ArrowRight, ChevronRight, CheckCircle2, Star, Users, Rocket, BarChart3,
  Brain, Layers, Network, Globe2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>{children}</motion.div>;
}

const cardGradients = [
  "linear-gradient(180deg, #EDEAE4 0%, #F9FBC9 65%, #FEE969 100%)",
  "linear-gradient(180deg, #F0F0F0 0%, #F0C3EC 65%, #CCE7E9 100%)",
  "linear-gradient(180deg, #F2F1ED 0%, #D5DFE0 65%, #E5FF94 100%)",
  "linear-gradient(180deg, #F2F1ED 0%, #F0C4E3 65%, #FBB439 100%)",
  "linear-gradient(180deg, #EDEAE4 0%, #CCE7E9 65%, #E9F1FA 100%)",
  "linear-gradient(270deg, #E9F1FA 0%, #EFFFBD 100%)",
];

const services = [
  { icon: Bot, title: "AI Automation Systems", desc: "Intelligent automation that eliminates repetitive workflows, extracts insights, and lets your team focus on what matters.", color: "#2563EB", href: "/solutions/ai-automation" },
  { icon: Globe, title: "High-Converting Websites", desc: "Precision-engineered digital experiences designed to turn visitors into customers with every scroll.", color: "#0891B2", href: "/solutions/web-development" },
  { icon: TrendingUp, title: "Growth Funnels", desc: "End-to-end conversion systems, from first impression to signed contract, built on data and tested relentlessly.", color: "#6366F1", href: "/solutions/growth-funnels" },
  { icon: Code2, title: "SaaS Development", desc: "Scalable software products built on modern architecture. From idea to launch-ready platform in weeks, not months.", color: "#B45309", href: "/solutions/saas-development" },
  { icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile experiences that deliver speed, reliability, and a UI your users will love.", color: "#9333EA", href: "/solutions/app-development" },
  { icon: Megaphone, title: "Digital Marketing Systems", desc: "Data-driven campaigns, automated pipelines, and performance analytics. Your growth engine on autopilot.", color: "#047857", href: "/solutions/digital-marketing" },
];

const caseStudies = [
  { client: "FinTech Startup", tag: "AI Automation", problem: "Manual data processing consumed 40+ hours per week across their operations team.", solution: "Built a custom AI pipeline integrating OCR, classification, and automated reporting workflows.", metric: "94%", metricLabel: "faster processing" },
  { client: "E-Commerce Brand", tag: "Growth Funnel", problem: "High traffic but 1.2% conversion rate. Customers dropping off before purchase.", solution: "Redesigned the entire funnel: landing pages, checkout flow, and post-purchase sequences.", metric: "4×", metricLabel: "conversion uplift" },
  { client: "SaaS Company", tag: "Platform Dev", problem: "Legacy system couldn't scale, constant downtime during growth periods.", solution: "Full platform rebuild on cloud-native architecture with zero-downtime deployment pipeline.", metric: "99.97%", metricLabel: "uptime achieved" },
];

const whyUs = [
  { icon: Brain, title: "AI-First Approach", desc: "Every system we build is designed with intelligence at its core, not bolted on as an afterthought." },
  { icon: Layers, title: "Systems Thinking", desc: "We don't build features, we build ecosystems. Each component is designed to compound your results over time." },
  { icon: Network, title: "Scalable Architecture", desc: "Our tech stack is chosen for longevity. Infrastructure that grows seamlessly from 10 to 10 million users." },
  { icon: Globe2, title: "Global Mindset", desc: "We build for the world's stage. Multilingual, multi-region, built to compete at the highest level." },
];

function CounterStat({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 3000;
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
      <div className="text-4xl md:text-5xl font-black text-white mb-1" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.18)" }}>
        {count}{suffix}
      </div>
      <p className="text-sm text-white/80 font-semibold tracking-wide">{label}</p>
    </motion.div>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] overflow-x-hidden">
      <Navbar />
      <FloatingCTA />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22C9FF]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20 pb-16">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-black/8 text-black text-sm font-semibold mb-8 backdrop-blur-sm shadow-sm">
            <Rocket className="w-3.5 h-3.5 text-[#2563EB]" />
            AI-First Digital Systems Company
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
            className="text-5xl md:text-7xl font-black text-black tracking-tight leading-[0.92] mb-6">
            We Build the Systems Behind<br />
            <span className="text-gradient-blue">Scalable Businesses</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}
            className="text-lg md:text-xl text-black max-w-2xl mx-auto mb-10 leading-relaxed">
            From AI automation to high-converting platforms, NovatraTech engineers the infrastructure that powers growth, optimizes operations, and drives measurable results.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/923225194889" target="_blank" rel="noopener noreferrer">
              <motion.button data-testid="hero-cta-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-2xl font-semibold text-base bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-sm transition-colors flex items-center gap-2">
                Start a Project <ArrowRight className="w-4 h-4" />
              </motion.button>
            </a>
            <Link href="/solutions">
              <motion.button data-testid="hero-cta-secondary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-2xl font-semibold text-base border border-black/10 bg-white/50 text-black hover:bg-white/80 hover:text-black transition-all duration-150 shadow-sm backdrop-blur-sm flex items-center gap-2">
                View Solutions <ChevronRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-14 pt-10 border-t border-black/8">
            {[
              { icon: CheckCircle2, text: "50+ Projects Delivered" },
              { icon: Star, text: "98% Client Satisfaction" },
              { icon: Rocket, text: "Avg. 3-Week Launch" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm font-semibold text-black">
                <Icon className="w-4 h-4 text-[#2563EB]" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #FAF9F7 0%, #FDDEC0 12%, #F89240 26%, #E84B00 42%, #D94000 50%, #E84B00 58%, #F89240 74%, #FDDEC0 88%, #FAF9F7 100%)"
        }}>
        <div className="container-wide px-6 md:px-12 lg:px-24">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div variants={fadeUp}><CounterStat value={50} suffix="+" label="Projects Shipped" /></motion.div>
              <motion.div variants={fadeUp}><CounterStat value={35} suffix="+" label="Clients Worldwide" /></motion.div>
              <motion.div variants={fadeUp}><CounterStat value={12} suffix="+" label="AI Systems Built" /></motion.div>
              <motion.div variants={fadeUp}><CounterStat value={98} suffix="%" label="Client Satisfaction" /></motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="section-padding section-pink">
        <div className="container-wide">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB] mb-3">What We Build</p>
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">Systems, Not Just Services</h2>
              <p className="text-black max-w-xl mx-auto">Every engagement is architected for compounding returns, built to scale, optimized to convert.</p>
            </motion.div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Link href={s.href} key={s.title}>
                <motion.div
                  data-testid={`service-card-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                  initial={{ opacity: 0, y: 64 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -6, transition: { duration: 0.15 } }}
                  className="relative p-6 rounded-2xl cursor-pointer group border border-[#E8E5E1] hover:border-[#D5D0CB] hover:shadow-lg transition-colors duration-200"
                  style={{ background: cardGradients[i] }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-white/70 border border-white/80">
                    <s.icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                  <h3 className="text-base font-bold text-black mb-2">{s.title}</h3>
                  <p className="text-sm text-black leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-150" style={{ color: s.color }}>
                    Explore <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCT ── */}
      <section className="section-padding bg-white border-y border-[#E8E5E1]">
        <div className="container-wide">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB] mb-3">Our Products</p>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">Launching Soon</h2>
            </motion.div>
            <motion.div variants={fadeUp}
              className="max-w-2xl mx-auto p-8 md:p-12 rounded-3xl border border-[#E8E5E1] text-center relative overflow-hidden"
              style={{ background: cardGradients[3], boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#22D3EE]" />
              <div className="absolute top-3 right-4 px-3 py-1 rounded-full text-xs font-bold bg-white/60 text-[#0891B2] border border-white/80">COMING SOON</div>
              <div className="w-14 h-14 rounded-2xl bg-white/70 border border-white/80 flex items-center justify-center mx-auto mb-5 shadow-sm">
                <Layers className="w-7 h-7 text-[#2563EB]" />
              </div>
              <h3 className="text-2xl font-black text-black mb-3">Business SaaS Platform</h3>
              <p className="text-black mb-8 leading-relaxed">
                An all-in-one platform for managing clients, automating workflows, tracking analytics, and scaling your operations. Built for the modern digital business.
              </p>
              {submitted ? (
                <div className="flex items-center justify-center gap-2 text-[#2563EB] font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  You're on the list! We'll notify you at launch.
                </div>
              ) : (
                <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" required data-testid="waitlist-email"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/80 border border-[#E8E5E1] text-black placeholder-[#9DA3AE] text-sm focus:outline-none focus:border-[#2563EB]/40 transition-colors shadow-sm" />
                  <button type="submit" data-testid="waitlist-submit"
                    className="px-6 py-3 rounded-xl font-semibold text-sm bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors shadow-sm whitespace-nowrap">
                    Join Waitlist
                  </button>
                </form>
              )}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="section-padding bg-[#FAF9F7]">
        <div className="container-wide">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6366F1] mb-3">Results</p>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">Real Work. Real Outcomes.</h2>
              <p className="text-black max-w-xl mx-auto">Numbers don't lie. Here's what happens when systems thinking meets execution.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {caseStudies.map((c, i) => (
                <motion.div key={c.client} variants={fadeUp} whileHover={{ y: -4, transition: { duration: 0.15 } }}
                  data-testid={`case-study-${c.client.toLowerCase().replace(/\s+/g, "-")}`}
                  className="p-7 rounded-2xl flex flex-col border border-[#E8E5E1] hover:border-[#D5D0CB] hover:shadow-md transition-all duration-200"
                  style={{ background: cardGradients[(i + 2) % 6] }}>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-black">{c.client}</span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/70 text-[#2563EB] border border-white/80">{c.tag}</span>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-bold text-black uppercase tracking-wide mb-1">Problem</p>
                    <p className="text-sm text-black">{c.problem}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-bold text-black uppercase tracking-wide mb-1">Solution</p>
                    <p className="text-sm text-black">{c.solution}</p>
                  </div>
                  <div className="mt-auto pt-5 border-t border-black/8">
                    <div className="text-3xl font-black text-gradient-blue mb-0.5">{c.metric}</div>
                    <p className="text-xs text-black uppercase tracking-wide font-medium">{c.metricLabel}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHY NOVATRATECH ── */}
      <section className="section-padding bg-white border-y border-[#E8E5E1]">
        <div className="container-wide">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB] mb-4">Why NovatraTech</p>
                <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-6 leading-tight">
                  We Think in Systems,<br />
                  <span className="text-gradient-blue">Not in Features</span>
                </h2>
                <p className="text-black text-lg leading-relaxed mb-8">
                  Most agencies build pages. We build compounding engines. Every system we design is architected to grow, adapt, and outperform as your business evolves.
                </p>
                <Link href="/about">
                  <motion.button whileHover={{ scale: 1.02 }} className="flex items-center gap-2 text-[#2563EB] font-semibold hover:gap-3 transition-all duration-150 text-sm">
                    Learn our approach <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyUs.map((item, i) => (
                  <motion.div key={item.title} variants={fadeUp}
                    className="p-5 rounded-2xl border border-[#E8E5E1] hover:border-[#D5D0CB] transition-all duration-150 hover:shadow-md group"
                    style={{ background: cardGradients[(i + 1) % 6] }}
                    whileHover={{ y: -3, transition: { duration: 0.15 } }}>
                    <div className="w-10 h-10 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <h3 className="font-bold text-black mb-2 text-sm">{item.title}</h3>
                    <p className="text-xs text-black leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ACADEMY ── */}
      <section className="section-padding section-pink">
        <div className="container-wide">
          <AnimatedSection>
            <motion.div variants={fadeUp}
              className="relative rounded-3xl overflow-hidden border border-[#E8E5E1] p-8 md:p-16"
              style={{ background: cardGradients[4], boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#22D3EE]" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6366F1] mb-3">NovatraTech Academy</p>
                  <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-5 leading-tight">
                    Learn the Skills<br />That Pay in 2025
                  </h2>
                  <p className="text-black text-lg leading-relaxed mb-8">
                    From zero to job-ready. Our curriculum is engineered for the modern economy, practical, current, and taught by builders who've shipped real products.
                  </p>
                  <Link href="/academy">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-2xl font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors shadow-sm flex items-center gap-2">
                      Join Academy <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { name: "Web Development Bootcamp", level: "Beginner → Pro", students: "240+", color: "#2563EB" },
                    { name: "AI Systems & Automation", level: "Intermediate", students: "Coming Soon", color: "#6366F1" },
                    { name: "Growth & Digital Marketing", level: "All Levels", students: "Coming Soon", color: "#0891B2" },
                  ].map((course) => (
                    <div key={course.name} className="flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-white/80 hover:bg-white/80 hover:shadow-sm transition-all duration-150 backdrop-blur-sm">
                      <div className="w-9 h-9 rounded-xl bg-white/80 flex items-center justify-center shrink-0 border border-white/80">
                        <BarChart3 className="w-4 h-4" style={{ color: course.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-black text-sm truncate">{course.name}</p>
                        <p className="text-xs text-black mt-0.5">{course.level}</p>
                      </div>
                      <span className="text-xs font-bold shrink-0" style={{ color: course.color }}>{course.students}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FINAL CTA ── warm orange like Base44 */}
      <section className="py-28 relative overflow-hidden section-orange-pattern">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="max-w-xl mx-auto">
              <div className="p-10 md:p-14 rounded-3xl bg-white border border-[#E8E5E1] text-center" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}>
                <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-tight mb-5">
                  So, what are<br />we building?
                </h2>
                <p className="text-black text-lg mb-10 leading-relaxed">
                  Stop patching tools. Start building infrastructure that compounds. Let's architect your next chapter.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="https://wa.me/923225194889" target="_blank" rel="noopener noreferrer">
                    <motion.button data-testid="final-cta-book" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-base bg-black text-white hover:bg-[#1a1a1a] shadow-sm transition-colors flex items-center gap-2">
                      Book a Strategy Call <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </a>
                  <a href="https://wa.me/923225194889" target="_blank" rel="noopener noreferrer" data-testid="final-cta-whatsapp">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-base border border-black/12 text-black hover:bg-black/5 hover:text-black transition-all duration-150 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      WhatsApp Us
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
