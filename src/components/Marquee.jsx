import { Coffee } from "lucide-react";
import { MARQUEE_ITEMS } from "../data/content";

export default function Marquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      data-testid="marquee"
      className="overflow-hidden border-y border-cream/10 bg-coffee-950 py-5"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max items-center">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 pr-8 text-sm font-medium uppercase tracking-[0.3em] text-cream/50"
          >
            {item}
            <Coffee className="h-4 w-4 text-caramel" />
          </span>
        ))}
      </div>
    </div>
  );
}
