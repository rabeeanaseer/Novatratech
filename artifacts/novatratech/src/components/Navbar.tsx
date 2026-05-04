import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const WHATSAPP = "https://wa.me/923225194889";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/products", label: "Products" },
  { href: "/academy", label: "Academy" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/98 backdrop-blur-xl shadow-lg border border-[#E8E5E1]"
              : "bg-white shadow-md border border-[#E8E5E1]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <Link href="/" data-testid="nav-logo">
                <div className="flex items-center gap-2.5 group cursor-pointer">
                  <img
                    src="/logo.png"
                    alt="NovatraTech Logo"
                    className="w-8 h-8 rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="flex flex-col leading-none">
                    <span className="text-[11px] font-black tracking-[0.08em] text-black uppercase">NovatraTech</span>
                    <span className="text-[8px] font-semibold tracking-[0.06em] text-black/40 uppercase">SMC Private Limited</span>
                  </div>
                </div>
              </Link>

              {/* Desktop nav links */}
              <div className="hidden md:flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} data-testid={`nav-link-${link.label.toLowerCase()}`}>
                    <span
                      className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer ${
                        location === link.href
                          ? "text-[#2563EB] bg-[#2563EB]/8"
                          : "text-[#374151] hover:text-black hover:bg-[#F5F4F2]"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>

              {/* CTA + mobile toggle */}
              <div className="flex items-center gap-3">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hidden md:block" data-testid="nav-cta">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-5 py-2 rounded-full text-sm font-semibold border-2 border-[#39D353] text-[#1A8A2E] hover:bg-[#39D353] hover:text-white transition-all duration-200"
                  >
                    Get Started
                  </motion.button>
                </a>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden p-1.5 rounded-lg text-black hover:bg-[#F5F4F2] transition-colors"
                  data-testid="nav-mobile-menu"
                >
                  {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Mobile menu — drops below the pill */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="mt-2 rounded-2xl bg-white border border-[#E8E5E1] shadow-lg md:hidden overflow-hidden"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span
                      className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                        location === link.href
                          ? "text-[#2563EB] bg-[#2563EB]/8"
                          : "text-[#374151] hover:text-black hover:bg-[#F5F4F2]"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-2 block">
                  <span className="block px-4 py-2.5 rounded-full text-sm font-semibold text-center border-2 border-[#39D353] text-[#1A8A2E] hover:bg-[#39D353] hover:text-white transition-all cursor-pointer">
                    Get Started
                  </span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Spacer so page content starts below the floating nav */}
      <div className="h-20" />
    </>
  );
}
