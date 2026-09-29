import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";
import { waLink, ORDER_MESSAGE } from "../data/content";
import { scrollToTop } from "../lib/scroll";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={waLink(ORDER_MESSAGE)}
        target="_blank"
        rel="noreferrer"
        data-testid="wa-float-btn"
        aria-label="Pesan via WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-110"
      >
        <span
          className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40"
          aria-hidden="true"
        />
        <MessageCircle className="relative h-6 w-6" />
      </a>

      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            data-testid="back-to-top-btn"
            aria-label="Kembali ke atas"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-[5.75rem] right-[1.65rem] z-50 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 bg-coffee-900 text-cream shadow-lg transition-colors duration-300 hover:bg-caramel hover:text-coffee-950"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
