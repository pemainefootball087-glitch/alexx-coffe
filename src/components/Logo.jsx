import { scrollToId } from "../lib/scroll";

export const CupMark = ({ className = "h-8 w-8" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M9 22h26v5a11 11 0 0 1-11 11h-4A11 11 0 0 1 9 27v-5Z" />
    <path d="M35 24h2.5a5 5 0 0 1 0 10H34" />
    <path d="M19 16c-1.8-2 1.8-3.6 0-6" />
    <path d="M26 16c-1.8-2 1.8-3.6 0-6" />
    <path d="M13 42h18" />
  </svg>
);

export const Logo = ({ light = false }) => (
  <button
    type="button"
    onClick={() => scrollToId("beranda")}
    data-testid="brand-logo"
    className={`flex items-center gap-3 text-left ${light ? "text-cream" : "text-coffee-900"}`}
    aria-label="ALEXX COFFEE - kembali ke atas"
  >
    <CupMark className="h-8 w-8 shrink-0 text-caramel" />
    <span className="leading-none">
      <span className="block font-display text-lg font-bold tracking-[0.18em]">ALEXX</span>
      <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.5em] opacity-70">
        Coffee
      </span>
    </span>
  </button>
);
