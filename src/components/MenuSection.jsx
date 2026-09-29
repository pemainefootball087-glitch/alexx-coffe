import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import ProductModal from "./ProductModal";
import { CATEGORIES, MENU_ITEMS, formatPrice } from "../data/content";

export default function MenuSection({ overrides = {} }) {
  const [active, setActive] = useState("semua");
  const [selected, setSelected] = useState(null);

  const items =
    active === "semua" ? MENU_ITEMS : MENU_ITEMS.filter((m) => m.category === active);

  return (
    <section id="menu" data-testid="menu-section" className="bg-parchment py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Menu Kami"
          title="Menu Favorit"
          sub="Dari espresso yang pekat hingga dessert yang manis — semuanya dibuat fresh setiap hari."
        />

        <div className="no-scrollbar mt-10 flex gap-3 overflow-x-auto pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              data-testid={`menu-filter-${cat.id}`}
              onClick={() => setActive(cat.id)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === cat.id
                  ? "border-coffee-900 bg-coffee-900 text-cream shadow-md"
                  : "border-coffee-900/15 bg-white/60 text-coffee-800 hover:border-caramel hover:text-caramel"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  type="button"
                  data-testid={`menu-card-${item.id}`}
                  onClick={() => setSelected(item)}
                  className="group block w-full overflow-hidden rounded-2xl border border-coffee-900/10 bg-white text-left shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-caramel/50 hover:shadow-[0_20px_40px_-18px_rgba(44,29,17,0.35)]"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={overrides[item.id] || item.img}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    {item.tag && (
                      <span className="absolute left-3 top-3 rounded-full bg-coffee-950/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-caramel-light backdrop-blur-sm">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-coffee-900">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-coffee-700/75">{item.desc}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-display text-lg font-bold text-caramel-dark">
                        {formatPrice(item.price)}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-coffee-900 transition-all duration-300 group-hover:bg-caramel group-hover:text-coffee-950">
                        <Plus className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProductModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
