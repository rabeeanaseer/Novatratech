import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Clock, CheckCircle2, ArrowRight, AlertCircle, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const cardGradients = [
  "linear-gradient(180deg, #EDEAE4 0%, #F9FBC9 65%, #FEE969 100%)",
  "linear-gradient(180deg, #F0F0F0 0%, #F0C3EC 65%, #CCE7E9 100%)",
  "linear-gradient(180deg, #F2F1ED 0%, #D5DFE0 65%, #E5FF94 100%)",
  "linear-gradient(180deg, #F2F1ED 0%, #F0C4E3 65%, #FBB439 100%)",
  "linear-gradient(180deg, #EDEAE4 0%, #CCE7E9 65%, #E9F1FA 100%)",
];

const projectTypes = ["AI Automation System", "Website Development", "SaaS Development", "App Development", "Growth Funnel", "Digital Marketing", "Social Media Management", "Other"];
const budgetRanges = ["Under $2,000", "$2,000 – $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+", "Not sure yet"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", budget: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please try WhatsApp instead.");
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white border border-[#E8E5E1] text-black placeholder-[#9DA3AE] text-sm focus:outline-none focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/20 transition-all";
  const labelClass = "block text-sm font-semibold text-black mb-2";

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <Navbar />
      <FloatingCTA />

      {/* HERO */}
      <section className="relative pt-36 pb-16 px-6 md:px-12 lg:px-24 text-center overflow-hidden hero-gradient">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#22C9FF]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-xs font-bold uppercase tracking-[0.15em] text-[#2563EB] mb-4">Contact Us</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
            className="text-5xl md:text-6xl font-black text-black tracking-tight leading-tight mb-5">
            Let's Build<br /><span className="text-gradient-blue">Something Great</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}
            className="text-black text-lg leading-relaxed">
            Tell us about your project and we'll respond within 24 hours with a clear path forward.
          </motion.p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* CONTACT INFO */}
            <div className="space-y-4">
              <motion.a href="mailto:novatratechsmcpvtltd@gmail.com" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-[#E8E5E1] hover:border-[#D5D0CB] hover:shadow-md transition-all duration-200 block"
                style={{ background: cardGradients[0] }}>
                <div className="w-10 h-10 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <p className="font-bold text-black mb-0.5">Email Us</p>
                  <p className="text-sm text-black break-all">novatratechsmcpvtltd@gmail.com</p>
                  <p className="text-xs text-black mt-0.5">We respond within 24 hours</p>
                </div>
              </motion.a>

              <motion.a href="https://wa.me/923225194889" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                data-testid="contact-whatsapp"
                className="flex items-start gap-4 p-6 rounded-2xl border border-[#E8E5E1] hover:border-[#D5D0CB] hover:shadow-md transition-all duration-200 block"
                style={{ background: cardGradients[2] }}>
                <div className="w-10 h-10 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <p className="font-bold text-black mb-0.5">WhatsApp</p>
                  <p className="text-sm text-black">+92 322 5194889</p>
                  <p className="text-xs text-[#25D366] mt-1 flex items-center gap-1 font-semibold">Chat now <ArrowRight className="w-3 h-3" /></p>
                </div>
              </motion.a>

              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                className="p-6 rounded-2xl border border-[#E8E5E1]"
                style={{ background: cardGradients[1] }}>
                <div className="w-10 h-10 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-[#6366F1]" />
                </div>
                <h3 className="font-bold text-black mb-2">Strategy Call</h3>
                <p className="text-sm text-black mb-3 leading-relaxed">Free 30-minute consultation to map the right solution for your business.</p>
                <div className="space-y-1.5 text-xs text-black">
                  <p>Mon – Fri: 9am – 6pm (GMT+5)</p>
                  <p>Available globally via Google Meet</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
                className="p-5 rounded-2xl border border-[#E8E5E1]"
                style={{ background: cardGradients[4] }}>
                <p className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">Typical response time</p>
                <p className="text-2xl font-black text-black">Under 24h</p>
                <p className="text-xs text-black mt-1">For all project inquiries</p>
              </motion.div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-2">
              {status === "success" ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex items-center justify-center p-12 rounded-3xl border border-[#E8E5E1] text-center min-h-96"
                  style={{ background: cardGradients[2] }}>
                  <div>
                    <div className="w-16 h-16 rounded-full bg-white/80 border border-[#25D366]/30 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-[#25D366]" />
                    </div>
                    <h3 className="text-2xl font-black text-black mb-3">Message Sent!</h3>
                    <p className="text-black max-w-md mx-auto leading-relaxed">We've received your inquiry and will respond within 24 hours. For faster support, message us on WhatsApp.</p>
                    <a href="https://wa.me/923225194889" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl text-sm font-semibold bg-[#25D366] text-white hover:bg-[#1FB954] transition-colors shadow-sm">
                      <MessageCircle className="w-4 h-4" /> Message on WhatsApp
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.form initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  onSubmit={handleSubmit}
                  className="p-8 md:p-10 rounded-3xl border border-[#E8E5E1] space-y-5 bg-white"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" data-testid="contact-name" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" data-testid="contact-email" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Project Type *</label>
                    <select name="projectType" value={form.projectType} onChange={handleChange} required data-testid="contact-project-type"
                      className={`${inputClass} appearance-none`}>
                      <option value="" disabled>Select project type</option>
                      {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Budget Range</label>
                    <select name="budget" value={form.budget} onChange={handleChange} data-testid="contact-budget"
                      className={`${inputClass} appearance-none`}>
                      <option value="" disabled>Select budget range</option>
                      {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Tell us about your project</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                      placeholder="Describe your goals, current situation, and what success looks like..."
                      data-testid="contact-message"
                      className={`${inputClass} resize-none`} />
                  </div>
                  {status === "error" && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />{errorMsg}
                    </div>
                  )}
                  <motion.button type="submit" disabled={status === "loading"} data-testid="contact-submit"
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-2xl font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors disabled:opacity-60 flex items-center justify-center gap-2 shadow-sm">
                    {status === "loading" ? <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> : <><span>Send Message</span> <ArrowRight className="w-4 h-4" /></>}
                  </motion.button>
                  <p className="text-xs text-center text-black">
                    By submitting, you agree to our <a href="/privacy" className="text-[#2563EB] hover:underline">Privacy Policy</a>. We never spam.
                  </p>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ORANGE CTA */}
      <section className="py-28 relative overflow-hidden section-orange-pattern">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-xl mx-auto">
            <div className="p-10 md:p-14 rounded-3xl bg-white border border-[#E8E5E1] text-center" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}>
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-tight mb-5">
                Prefer to chat<br />on WhatsApp?
              </h2>
              <p className="text-black text-lg mb-10 leading-relaxed">
                Get a faster response by messaging us directly. We usually reply within a few hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/923225194889" target="_blank" rel="noopener noreferrer">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-full font-semibold text-base bg-black text-white hover:bg-[#1a1a1a] shadow-sm transition-colors flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> Open WhatsApp
                  </motion.button>
                </a>
                <a href="mailto:novatratechsmcpvtltd@gmail.com">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-full font-semibold text-base border border-black/12 text-black hover:bg-black/5 hover:text-black transition-all duration-150 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Send Email
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
