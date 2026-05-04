import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/923225194889?text=Hello%20NovatraTech%2C%20I%27d%20like%20to%20discuss%20a%20project";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-15 animate-ping" style={{ animationDelay: "0.4s" }} />

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="floating-whatsapp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-[0_0_32px_rgba(37,211,102,0.6)] transition-shadow duration-300"
      >
        <MessageCircle className="w-6 h-6 text-white" fill="white" />
      </motion.a>
    </div>
  );
}
