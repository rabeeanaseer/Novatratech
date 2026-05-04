import { useState, useEffect, useRef, type LucideIcon } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";

interface CarouselProps {
  items: string[];
  color: string;
  Icon: LucideIcon;
  whatsappUrl?: string;
}

function parseItem(raw: string): { title: string; detail: string } {
  const colonIdx = raw.indexOf(": ");
  if (colonIdx !== -1) return { title: raw.slice(0, colonIdx), detail: raw.slice(colonIdx + 2) };
  const parenIdx = raw.indexOf(" (");
  if (parenIdx !== -1) return { title: raw.slice(0, parenIdx), detail: raw.slice(parenIdx + 2).replace(/\)$/, "") };
  if (raw.length > 72) {
    const cut = raw.lastIndexOf(" ", 72);
    return { title: raw.slice(0, cut), detail: raw.slice(cut + 1) };
  }
  return { title: raw, detail: "" };
}

const WA = "https://wa.me/923225194889?text=Hello%20NovatraTech%2C%20I%27d%20like%20to%20discuss%20a%20project";

export default function WhatYouGetCarousel({ items, color, Icon, whatsappUrl = WA }: CarouselProps) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const go = (next: number, direction: 1 | -1) => {
    setDir(direction);
    setIdx((next + items.length) % items.length);
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => go((idx + 1) % items.length, 1), 5000);
    return () => clearTimeout(timerRef.current);
  }, [idx, paused, items.length]);

  const parsed = items.map(parseItem);
  const current = parsed[idx];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "55%" : "-55%", opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] } },
    exit: (d: number) => ({ x: d > 0 ? "-55%" : "55%", opacity: 0, scale: 0.96, transition: { duration: 0.28, ease: "easeIn" } }),
  };

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart === null) return;
        const delta = e.changedTouches[0].clientX - touchStart;
        if (Math.abs(delta) > 50) go(idx + (delta < 0 ? 1 : -1), delta < 0 ? 1 : -1);
        setTouchStart(null);
      }}
    >
      {/* Main card */}
      <div className="relative overflow-hidden rounded-2xl" style={{ minHeight: "380px" }}>
        <AnimatePresence custom={dir} mode="popLayout">
          <motion.div
            key={idx}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex flex-col justify-between p-8 md:p-10 rounded-2xl border bg-white overflow-hidden"
            style={{
              borderColor: "#E2E8F0",
              boxShadow: "0 4px 20px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            {/* Subtle top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }}
            />
            {/* Soft bg tint */}
            <div
              className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl opacity-[0.06] pointer-events-none"
              style={{ background: color }}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${color}12`, border: `1px solid ${color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <span
                  className="text-xs font-bold tracking-widest px-3 py-1.5 rounded-full border"
                  style={{ backgroundColor: `${color}08`, color, borderColor: `${color}18` }}
                >
                  {String(idx + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-black text-[#0F172A] leading-tight mb-4 tracking-tight">
                {current.title}
              </h3>

              {/* Detail */}
              {current.detail && (
                <p className="text-[#64748B] text-base leading-relaxed mb-5">{current.detail}</p>
              )}

              {/* Adjacent preview items */}
              <div className="flex flex-col gap-2.5 mt-2">
                {[items[(idx + 1) % items.length], items[(idx + 2) % items.length]].map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color }} />
                    <p className="text-sm text-black leading-relaxed line-clamp-1">{parseItem(f).title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="relative z-10 mt-8 flex items-center justify-between">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold transition-all duration-150 hover:gap-3"
                style={{ color }}
              >
                Build This System <ArrowRight className="w-4 h-4" />
              </a>
              {/* Progress bar */}
              <div className="h-1 w-28 rounded-full bg-[#E2E8F0] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: color }}
                  initial={{ width: "0%" }}
                  animate={{ width: paused ? undefined : "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  key={`${idx}-${paused}`}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-5 px-1">
        {/* Dots */}
        <div className="flex gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > idx ? 1 : -1)}
              className="transition-all duration-300 rounded-full h-2"
              style={{
                width: i === idx ? "24px" : "8px",
                backgroundColor: i === idx ? color : "#CBD5E1",
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          {[{ action: () => go(idx - 1, -1), Icon: ChevronLeft }, { action: () => go(idx + 1, 1), Icon: ChevronRight }].map(({ action, Icon: ArrowIcon }, k) => (
            <button
              key={k}
              onClick={action}
              className="w-9 h-9 rounded-xl border border-[#E2E8F0] bg-white flex items-center justify-center text-black shadow-sm transition-all duration-150 hover:border-[#CBD5E1] hover:text-[#64748B] hover:shadow-md"
            >
              <ArrowIcon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
