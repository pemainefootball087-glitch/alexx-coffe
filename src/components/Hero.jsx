import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { IMAGES, waLink, ORDER_MESSAGE } from "../data/content";
import { scrollToId } from "../lib/scroll";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero({ image }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="beranda"
      ref={ref}
      data-testid="hero-section"
      className="relative flex min-h-screen items-center overflow-hidden bg-coffee-950"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img
          src={image || IMAGES.hero}
          alt="Barista ALEXX COFFEE menyeduh kopi"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-coffee-950/95 via-coffee-950/60 to-coffee-950/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-coffee-950/50" />

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-32 sm:px-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
          className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-caramel-light"
        >
          <span className="h-px w-12 bg-caramel" />
          ALEXX COFFEE · Losarang, Indramayu
        </motion.p>

        <h1
          data-testid="hero-title"
          className="max-w-3xl font-display text-4xl font-medium leading-[1.1] text-cream sm:text-5xl lg:text-6xl"
        >
          <span className="block overflow-hidden pb-1">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.4, ease: EASE }}
            >
              Secangkir Kopi,
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span
              className="block font-accent italic text-caramel-light"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
            >
              Sejuta Cerita.
            </motion.span>
          </span>
        </h1>

        <motion.p
          data-testid="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
          className="mt-6 max-w-xl text-base text-cream/75 md:text-lg"
        >
          Nikmati kopi pilihan terbaik dan suasana nyaman untuk menemani setiap
          momenmu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            type="button"
            data-testid="hero-menu-btn"
            onClick={() => scrollToId("menu")}
            className="group relative overflow-hidden rounded-full bg-caramel px-8 py-4 text-sm font-semibold text-coffee-950 transition-shadow duration-300 hover:shadow-[0_12px_36px_-10px_rgba(200,125,50,0.8)]"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-cream">
              Lihat Menu
            </span>
            <span className="absolute inset-0 origin-left scale-x-0 bg-coffee-900 transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </button>
          <a
            href={waLink(ORDER_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            data-testid="hero-order-btn"
            className="inline-flex items-center gap-2 rounded-full border border-cream/35 px-8 py-4 text-sm font-semibold text-cream transition-all duration-300 hover:border-caramel-light hover:bg-cream/10"
          >
            <MessageCircle className="h-4 w-4" />
            Pesan Sekarang
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-cream/50">
          Gulir
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-cream/20">
          <motion.span
            className="absolute left-0 top-0 h-4 w-px bg-caramel-light"
            animate={{ y: ["-100%", "300%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
