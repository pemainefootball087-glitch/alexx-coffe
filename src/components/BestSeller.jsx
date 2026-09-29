import { MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { MENU_ITEMS, BEST_SELLER_IDS, waLink, formatPrice } from "../data/content";

export default function BestSeller({ overrides = {} }) {
  const items = BEST_SELLER_IDS.map((id) => MENU_ITEMS.find((m) => m.id === id)).filter(Boolean);

  return (
    <section
      id="best-seller"
      data-testid="best-seller-section"
      className="relative overflow-hidden bg-coffee-950 py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-caramel/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          light
          center
          kicker="Paling Dicari"
          title="Best Seller Kami"
          sub="Tiga racikan yang paling sering dipesan dan paling dirindukan pelanggan kami."
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.12}
              className={i === 1 ? "lg:mt-14" : ""}
            >
              <article
                data-testid={`best-seller-card-${item.id}`}
                className="group relative"
              >
                <div
                  className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-caramel/25 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-b-3xl rounded-t-[10rem] border border-cream/10">
                  <img
                    src={overrides[item.id] || item.img}
                    alt={item.name}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-5 rotate-3 rounded-full bg-caramel px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-coffee-950 shadow-lg">
                    Best Seller
                  </span>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-display text-2xl text-cream">{item.name}</h3>
                  <p className="mt-2 text-sm text-cream/60">{item.desc}</p>
                  <div className="mt-5 flex items-center justify-center gap-4">
                    <span className="font-display text-xl text-caramel-light">
                      {formatPrice(item.price)}
                    </span>
                    <a
                      href={waLink(`Halo ALEXX COFFEE, saya ingin memesan ${item.name}.`)}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`best-seller-order-${item.id}`}
                      className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-2 text-xs font-semibold text-cream transition-all duration-300 hover:border-caramel hover:bg-caramel hover:text-coffee-950"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      Pesan
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
