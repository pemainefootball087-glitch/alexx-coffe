import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { waLink, formatPrice } from "../data/content";

const SUGAR_OPTIONS = ["Normal", "Less Sugar", "No Sugar"];
const ICE_OPTIONS = ["Normal Ice", "Less Ice", "No Ice"];

export default function ProductModal({ item, onClose }) {
  const [sugar, setSugar] = useState(SUGAR_OPTIONS[0]);
  const [ice, setIce] = useState(ICE_OPTIONS[0]);

  useEffect(() => {
    if (item) {
      setSugar(SUGAR_OPTIONS[0]);
      setIce(ICE_OPTIONS[0]);
    }
  }, [item]);

  const orderMessage = item
    ? `Halo ALEXX COFFEE, saya ingin memesan ${item.name} (Gula: ${sugar}, Es: ${ice}).`
    : "";

  const OptionRow = ({ label, options, value, onChange, testid }) => (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coffee-700/60">
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            data-testid={`${testid}-${opt.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={() => onChange(opt)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
              value === opt
                ? "border-coffee-900 bg-coffee-900 text-cream"
                : "border-coffee-900/15 text-coffee-800 hover:border-caramel"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <Dialog open={!!item} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        data-testid="menu-modal"
        className="max-w-md overflow-hidden border-coffee-900/10 bg-parchment p-0"
      >
        {item && (
          <div>
            <div className="relative h-60">
              <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-coffee-950/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-caramel-light backdrop-blur-sm">
                {item.categoryLabel}
              </span>
            </div>
            <div className="space-y-5 p-6">
              <div>
                <DialogTitle className="font-display text-2xl font-semibold text-coffee-900">
                  {item.name}
                </DialogTitle>
                <p className="mt-2 text-sm leading-relaxed text-coffee-700/80">{item.long}</p>
              </div>
              <OptionRow label="Tingkat Gula" options={SUGAR_OPTIONS} value={sugar} onChange={setSugar} testid="modal-sugar" />
              <OptionRow label="Tingkat Es" options={ICE_OPTIONS} value={ice} onChange={setIce} testid="modal-ice" />
              <div className="flex items-center justify-between border-t border-coffee-900/10 pt-5">
                <span className="font-display text-2xl font-bold text-caramel-dark">
                  {formatPrice(item.price)}
                </span>
                <a
                  href={waLink(orderMessage)}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="modal-order-btn"
                  className="inline-flex items-center gap-2 rounded-full bg-caramel px-5 py-3 text-sm font-semibold text-coffee-950 transition-all duration-300 hover:bg-caramel-light"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
