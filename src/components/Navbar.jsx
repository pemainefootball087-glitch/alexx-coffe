import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu as MenuIcon, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, waLink, ORDER_MESSAGE } from "../data/content";
import { scrollToId } from "../lib/scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 250 : 0);
  };

  const dark = scrolled || open;

  return (
    <>
      <motion.header
        data-testid="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          scrolled
            ? "bg-parchment/90 shadow-[0_1px_0_0_rgba(44,29,17,0.08),0_10px_30px_-15px_rgba(24,17,11,0.25)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className={dark ? "" : "[&_button]:text-cream"}>
            <Logo light={!scrolled || open} />
          </div>
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                data-testid={`nav-link-${link.id}`}
                onClick={() => go(link.id)}
                className={`group relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  dark ? "text-coffee-800 hover:text-caramel" : "text-cream/85 hover:text-cream"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-caramel transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
            <a
              href={waLink(ORDER_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              data-testid="nav-order-btn"
              className="group inline-flex items-center gap-2 rounded-full bg-caramel px-5 py-2.5 text-sm font-semibold text-coffee-950 transition-all duration-300 hover:bg-caramel-light hover:shadow-[0_8px_24px_-8px_rgba(200,125,50,0.7)]"
            >
              <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
              Pesan Sekarang
            </a>
          </div>
          <button
            type="button"
            data-testid="mobile-menu-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className={`rounded-lg p-2 transition-colors lg:hidden ${
              dark ? "text-coffee-900" : "text-cream"
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-coffee-950 px-8 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  type="button"
                  data-testid={`mobile-nav-link-${link.id}`}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => go(link.id)}
                  className="border-b border-cream/10 py-4 text-left font-display text-3xl text-cream transition-colors hover:text-caramel-light"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              href={waLink(ORDER_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              data-testid="mobile-order-btn"
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-caramel px-7 py-3.5 font-semibold text-coffee-950"
            >
              <MessageCircle className="h-5 w-5" />
              Pesan Sekarang
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
