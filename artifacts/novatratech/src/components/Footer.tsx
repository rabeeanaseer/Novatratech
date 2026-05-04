import { Link } from "wouter";
import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/923225194889?text=Hello%20NovatraTech%2C%20I%27d%20like%20to%20start%20a%20project";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.738l7.727-8.836L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const socials = [
  { icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=61586986363374", label: "Facebook", hoverColor: "#1877F2" },
  { icon: InstagramIcon, href: "https://www.instagram.com/novatratech.smc_pvt_ltd/", label: "Instagram", hoverColor: "#E1306C" },
  { icon: XIcon, href: "https://x.com/RabeeaNaseer", label: "X", hoverColor: "#000000" },
  { icon: PinterestIcon, href: "https://www.pinterest.com/NovatraTech/", label: "Pinterest", hoverColor: "#E60023" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#B0EDED]" style={{ background: 'linear-gradient(180deg, #C8F4F4 0%, #DDF9F9 45%, #F0FEFE 100%)' }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] rounded-full blur-3xl pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle, #7DDEDE 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-3 mb-5 cursor-pointer w-fit">
                <img
                  src="/logo.png"
                  alt="NovatraTech Logo"
                  className="w-12 h-12 rounded-xl object-cover shadow-md"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-black tracking-[0.06em] text-black uppercase">NovatraTech</span>
                  <span className="text-[10px] font-semibold tracking-[0.04em] text-black/50 uppercase">SMC Private Limited</span>
                </div>
              </div>
            </Link>
            <p className="text-xs font-bold text-[#2563EB] uppercase tracking-[0.15em] mb-3">AI & Data-Driven Systems</p>
            <p className="text-sm text-black/60 leading-relaxed mb-6">
              NovatraTech is an AI & data-driven systems company that builds scalable digital infrastructure, high-converting platforms, and intelligent automation solutions for modern businesses.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, href, label, hoverColor }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-xl bg-white border border-[#E8E5E1] flex items-center justify-center text-black/40 transition-all duration-150"
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = hoverColor;
                    el.style.borderColor = `${hoverColor}40`;
                    el.style.backgroundColor = `${hoverColor}10`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "";
                    el.style.borderColor = "";
                    el.style.backgroundColor = "";
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-bold text-black uppercase tracking-[0.15em] mb-5">Solutions</h4>
            <ul className="space-y-3">
              {[
                { label: "All Solutions", href: "/solutions" },
                { label: "AI Automation", href: "/solutions/ai-automation" },
                { label: "Websites", href: "/solutions/web-development" },
                { label: "SaaS Development", href: "/solutions/saas-development" },
                { label: "Growth Funnels", href: "/solutions/growth-funnels" },
                { label: "Digital Marketing", href: "/solutions/digital-marketing" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className="text-sm text-black/55 hover:text-black transition-colors duration-150 cursor-pointer flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#2563EB]/40 group-hover:bg-[#2563EB] transition-colors" />
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-black uppercase tracking-[0.15em] mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Academy", href: "/academy" },
                { label: "Products", href: "/products" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className="text-sm text-black/55 hover:text-black transition-colors duration-150 cursor-pointer flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#6366F1]/40 group-hover:bg-[#6366F1] transition-colors" />
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h4 className="text-xs font-bold text-black uppercase tracking-[0.15em] mb-5">Start Building</h4>
            <p className="text-sm text-black/55 mb-5 leading-relaxed">Ready to build systems that compound your growth?</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block">
              <motion.button
                data-testid="footer-cta"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-5 py-3 rounded-xl text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors duration-150 mb-3 shadow-sm"
              >
                Start Your Project
              </motion.button>
            </a>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-semibold border border-[#22C55E]/40 text-[#16A34A] hover:bg-[#22C55E]/10 transition-all duration-150 mb-4"
            >
              <MessageCircle className="w-4 h-4" fill="currentColor" />
              WhatsApp Us
            </motion.a>
            <a href="mailto:novatratechsmcpvtltd@gmail.com"
              className="flex items-center gap-2 text-sm text-black/50 hover:text-black transition-colors duration-150">
              <Mail className="w-3.5 h-3.5" />
              <span className="truncate text-xs">novatratechsmcpvtltd@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E8E5E1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-black/40">&copy; {new Date().getFullYear()} NOVATRATECH SMC PRIVATE LIMITED. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-black/40">
            <Link href="/privacy"><span className="hover:text-black transition-colors cursor-pointer">Privacy</span></Link>
            <Link href="/terms"><span className="hover:text-white transition-colors cursor-pointer">Terms</span></Link>
            <span>Built for scale. Engineered with precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
