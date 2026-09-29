import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { waLink, PROMO_MESSAGE } from "../data/content";

export default function Promo() {
  return (
    <section
      id="promo"
      data-testid="promo-section"
      className="relative overflow-hidden bg-caramel py-24 sm:py-28"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[20vw] font-black leading-none text-coffee-950/10"
      >
        SENJA
      </span>
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-coffee-950/70">
            Promo Spesial
          </p>
          <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-coffee-950 sm:text-5xl lg:text-6xl">
            BUY 2 GET 1 FREE
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base font-medium text-coffee-950/80 md:text-lg">
            Nikmati promo spesial setiap hari Senin&ndash;Kamis. Berlaku untuk semua
            varian kopi favoritmu, dine-in maupun takeaway.
          </p>
          <a
            href={waLink(PROMO_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            data-testid="promo-cta-btn"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-coffee-950 px-9 py-4 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgba(24,17,11,0.6)]"
          >
            <MessageCircle className="h-4 w-4" />
            Ambil Promo
          </a>
        </Reveal>
      </div>
    </section>
  );
}
