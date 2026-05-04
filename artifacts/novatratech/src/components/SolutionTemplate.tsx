import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2, Users, type LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ThreeDScene from "@/components/ThreeDScene";

const WHATSAPP = "https://wa.me/923225194889?text=Hello%20NovatraTech%2C%20I%27d%20like%20to%20discuss%20a%20project";

const cardGradients = [
  "linear-gradient(180deg, #EDEAE4 0%, #F9FBC9 65%, #FEE969 100%)",
  "linear-gradient(180deg, #F0F0F0 0%, #F0C3EC 65%, #CCE7E9 100%)",
  "linear-gradient(180deg, #F2F1ED 0%, #D5DFE0 65%, #E5FF94 100%)",
  "linear-gradient(180deg, #F2F1ED 0%, #F0C4E3 65%, #FBB439 100%)",
  "linear-gradient(180deg, #EDEAE4 0%, #CCE7E9 65%, #E9F1FA 100%)",
  "linear-gradient(270deg, #E9F1FA 0%, #EFFFBD 100%)",
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

export interface WhatYouGetItem {
  title: string;
  detail: string;
  bullets: string[];
}

function TiltCard({ children, color, gradient, index }: {
  children: React.ReactNode;
  color: string;
  gradient: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const [isMobile, setIsMobile] = useState(false);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-80, 80], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-80, 80], [-10, 10]), springConfig);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mouseX.set(e.clientX - cx);
    mouseY.set(e.clientY - cy);
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  }, [mouseX, mouseY, glowX, glowY, isMobile]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    glowX.set(50);
    glowY.set(50);
  }, [mouseX, mouseY, glowX, glowY]);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={isMobile ? {} : { rotateX, rotateY }}
      whileHover={isMobile ? {} : { scale: 1.02 }}
      className="relative rounded-2xl border border-[#E8E5E1] overflow-hidden cursor-default"
    >
      {/* base gradient */}
      <div className="absolute inset-0 transition-opacity duration-300" style={{ background: gradient }} />

      {/* mouse-tracking inner glow — desktop only */}
      {!isMobile && (
        <motion.div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 180px at ${glowX.get()}% ${glowY.get()}%, ${color}22, transparent 70%)`,
            opacity: 0,
          }}
          whileHover={{ opacity: 1 }}
        />
      )}

      {/* animated colored border glow on hover — desktop only */}
      {!isMobile && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          style={{
            boxShadow: `inset 0 0 0 1.5px ${color}50, 0 0 40px ${color}20`,
          }}
        />
      )}

      {/* top accent bar */}
      <motion.div
        className="absolute top-0 left-0 h-0.5 rounded-t-2xl"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.08 + 0.3, ease: "easeOut" }}
        style={{ background: `linear-gradient(90deg, ${color}90, ${color}20)` }}
      />

      {/* content — no 3D translateZ to avoid mobile rendering bugs */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

function EverythingIncludedScroll({
  items, color, Icon,
}: { items: WhatYouGetItem[]; color: string; Icon: LucideIcon }) {
  return (
    <section className="section-pink">
      {/* Section header */}
      <div className="pt-20 pb-10 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color }}>What You Get</p>
          <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-2">Everything Included</h2>
          <p className="text-base" style={{ color: "rgba(0,0,0,0.55)" }}>
            {items.length} deliverables — scroll to explore each one.
          </p>
        </motion.div>
      </div>

      {/* One card per scroll step — each card is ~90dvh so only one shows at a time */}
      <div className="pb-24 space-y-6 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-15%" }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-[#E8E5E1] overflow-hidden flex flex-col"
            style={{
              background: cardGradients[i % 6],
              boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
              minHeight: "88dvh",
            }}
          >
            {/* top accent bar */}
            <div className="h-1.5 w-full shrink-0"
              style={{ background: `linear-gradient(90deg, ${color}, ${color}50)` }} />

            <div className="flex flex-col flex-1 p-7 md:p-10">

              {/* header row */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/90 border border-white flex items-center justify-center shadow-sm">
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>
                <span className="text-6xl font-black tracking-tighter text-black select-none leading-none"
                  style={{ opacity: 0.07 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* title */}
              <h3 className="text-2xl md:text-3xl font-black text-black leading-tight mb-4">
                {item.title}
              </h3>

              {/* description */}
              <p className="text-base text-black leading-relaxed mb-6" style={{ opacity: 0.65 }}>
                {item.detail}
              </p>

              {/* bullets */}
              <div className="space-y-3 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.15em] mb-3"
                  style={{ color: "rgba(0,0,0,0.35)" }}>What's Included</p>
                {item.bullets.map((b, bi) => (
                  <div key={bi} className="flex items-start gap-3 p-4 rounded-2xl border"
                    style={{ background: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.95)" }}>
                    <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: color }} />
                    <span className="text-sm text-black leading-relaxed" style={{ opacity: 0.78 }}>{b}</span>
                  </div>
                ))}
              </div>

              {/* badge — pinned to bottom */}
              <div className="flex items-center gap-2 mt-6 pt-4 border-t"
                style={{ borderColor: "rgba(0,0,0,0.07)" }}>
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color }} />
                <span className="text-sm font-bold" style={{ color }}>Included in this engagement</span>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export interface UseCase { title: string; desc: string; }

export interface SolutionData {
  icon: LucideIcon;
  color: string;
  title: string;
  tagline: string;
  heroDescription: string;
  whatThisIs: string;
  whatYouGet: WhatYouGetItem[];
  useCases: UseCase[];
  whyItMatters: string;
  whyMetric?: { value: string; label: string };
}

export default function SolutionTemplate({ data }: { data: SolutionData }) {
  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <Navbar />
      <FloatingCTA />

      {/* HERO */}
      <section className="relative pt-36 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden hero-gradient">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] rounded-full blur-3xl opacity-[0.07] pointer-events-none"
          style={{ background: data.color }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/solutions">
              <span className="inline-flex items-center gap-2 text-sm text-black hover:text-black/70 transition-colors mb-6 cursor-pointer group">
                <span className="group-hover:-translate-x-0.5 transition-transform">←</span> All Solutions
              </span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-6"
                style={{ backgroundColor: `${data.color}10`, borderColor: `${data.color}25`, color: data.color }}>
                <Icon className="w-3.5 h-3.5" />
                {data.tagline}
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-black text-black tracking-tight leading-[0.95] mb-6">
                {data.title}
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-black text-lg leading-relaxed mb-8">
                {data.heroDescription}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="px-7 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2 text-white shadow-sm transition-all duration-150"
                    style={{ backgroundColor: data.color }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(0.9)")}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = "")}>
                    Build This System <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </a>
                <a href="https://wa.me/923225194889" target="_blank" rel="noopener noreferrer">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="px-7 py-3.5 rounded-xl font-semibold text-sm border border-black/10 bg-white/50 text-black hover:bg-white hover:border-black/15 transition-all duration-150">
                    Start Your Project
                  </motion.button>
                </a>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="hidden lg:flex justify-end">
              <div className="w-[340px] h-[340px] rounded-3xl relative overflow-hidden border border-[#E8E5E1]"
                style={{ background: `linear-gradient(135deg, #ffffff, ${data.color}06)`, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
                <div className="absolute inset-0 opacity-50">
                  <ThreeDScene color={data.color} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white shadow-md border border-[#E8E5E1]">
                    <Icon className="w-8 h-8" style={{ color: data.color }} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ORANGE SEMI-CIRCLE GLOW DIVIDER */}
      <div className="relative w-full overflow-hidden" style={{ height: "320px", background: "#FAF9F7" }}>
        {/* main ellipse glow — semi-circle rising from center */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 85% at 50% 65%, #E84B00 0%, #FF6B1A 18%, #FF8C35 35%, #FFAB5C 52%, #FFCF98 70%, #FAF9F7 88%)",
        }} />
        {/* soft left bleed */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 50% 60% at 15% 70%, #FF8C3530 0%, transparent 65%)",
        }} />
        {/* soft right bleed */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 50% 60% at 85% 70%, #FFAB5C28 0%, transparent 65%)",
        }} />
        {/* top fade to page bg */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, #FAF9F7 0%, transparent 30%)",
        }} />
        {/* bottom fade to white */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(0deg, #ffffff 0%, transparent 35%)",
        }} />
      </div>

      {/* WHAT THIS IS */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-white border-y border-[#E8E5E1]">
        <div className="max-w-7xl mx-auto">
          <Section>
            <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: data.color }}>What This Is</p>
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-5">The Full Picture</h2>
              <p className="text-black text-lg leading-relaxed">{data.whatThisIs}</p>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* EVERYTHING INCLUDED */}
      <EverythingIncludedScroll items={data.whatYouGet} color={data.color} Icon={Icon} />

      {/* USE CASES */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-white border-y border-[#E8E5E1]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: data.color }}>Use Cases</p>
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">Who This Is Built For</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.useCases.map((uc, i) => (
              <TiltCard key={i} color={data.color} gradient={cardGradients[(i + 2) % 6]} index={i}>
                <div className="p-8 md:p-10 min-h-[220px] flex flex-col">
                  {/* top row: icon + number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/80 border border-white/90 flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-6 h-6" style={{ color: data.color }} />
                    </div>
                    <span className="text-4xl font-black tracking-tighter opacity-10 text-black select-none leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* title */}
                  <h3 className="text-xl font-black text-black leading-tight mb-3 flex items-center gap-2">
                    {uc.title}
                    <motion.span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: data.color }}
                      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    />
                  </h3>

                  {/* description */}
                  <p className="text-sm text-black/70 leading-relaxed flex-1">{uc.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto">
          <Section>
            <motion.div variants={fadeUp}
              className="relative rounded-3xl overflow-hidden p-10 md:p-16 border border-[#E8E5E1]"
              style={{ background: cardGradients[4], boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ background: `linear-gradient(90deg, ${data.color}, ${data.color}60)` }} />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
                {data.whyMetric && (
                  <div className="text-center lg:text-left">
                    <div className="text-6xl font-black mb-2" style={{ color: data.color }}>{data.whyMetric.value}</div>
                    <p className="text-sm text-black font-semibold uppercase tracking-wider">{data.whyMetric.label}</p>
                  </div>
                )}
                <div className={data.whyMetric ? "lg:col-span-2" : "lg:col-span-3"}>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: data.color }}>Why It Matters</p>
                  <p className="text-xl text-black leading-relaxed font-semibold">{data.whyItMatters}</p>
                </div>
              </div>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 relative overflow-hidden section-orange-pattern">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <Section>
            <motion.div variants={fadeUp} className="max-w-xl mx-auto">
              <div className="p-10 md:p-14 rounded-3xl bg-white border border-[#E8E5E1] text-center" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}>
                <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-tight mb-5">
                  Ready to Build<br />This System?
                </h2>
                <p className="text-black text-lg mb-10 leading-relaxed">
                  Let's talk about your project. We'll map out the exact architecture and timeline, no pitch, no pressure.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-base bg-black text-white hover:bg-[#1a1a1a] shadow-sm transition-colors flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" /> Message on WhatsApp
                    </motion.button>
                  </a>
                  <a href="https://wa.me/923225194889" target="_blank" rel="noopener noreferrer">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-base border border-black/12 text-black/70 hover:bg-black/5 hover:text-black transition-all duration-150 flex items-center gap-2">
                      <Users className="w-4 h-4" /> Start Your Project
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          </Section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
