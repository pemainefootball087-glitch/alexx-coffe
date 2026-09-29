import { Instagram, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { scrollToId } from "../lib/scroll";
import {
  NAV_LINKS,
  OPEN_HOURS,
  ADDRESS,
  WA_DISPLAY,
  INSTAGRAM_URL,
  waLink,
  ORDER_MESSAGE,
} from "../data/content";

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-coffee-950 pt-20 text-cream/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Coffee shop di Losarang, Indramayu. Kopi pilihan, suasana nyaman, dan
              pelayanan ramah untuk setiap momenmu.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-instagram-link"
                aria-label="Instagram ALEXX COFFEE"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-all duration-300 hover:border-caramel hover:bg-caramel hover:text-coffee-950"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={waLink(ORDER_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-whatsapp-link"
                aria-label="WhatsApp ALEXX COFFEE"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-all duration-300 hover:border-caramel hover:bg-caramel hover:text-coffee-950"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-caramel-light">
              Navigasi
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    data-testid={`footer-link-${link.id}`}
                    onClick={() => scrollToId(link.id)}
                    className="text-sm transition-colors duration-300 hover:text-caramel-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-caramel-light">
              Jam Buka
            </h3>
            <p className="mt-5 text-sm leading-relaxed">{OPEN_HOURS}</p>
            <p className="mt-3 text-sm leading-relaxed text-cream/50">
              Dine-in & takeaway. Datang sore, suasananya paling syahdu.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-caramel-light">
              Kontak
            </h3>
            <p className="mt-5 text-sm leading-relaxed">{ADDRESS}</p>
            <p className="mt-3 text-sm">{WA_DISPLAY}</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/10 py-7 text-xs text-cream/45 sm:flex-row">
          <p data-testid="footer-copyright">
            &copy; 2026 ALEXX COFFEE. Seluruh hak cipta dilindungi.
          </p>
          <p className="font-accent italic text-caramel-light/70">
            Secangkir Kopi, Sejuta Cerita.
          </p>
        </div>
      </div>
    </footer>
  );
}
