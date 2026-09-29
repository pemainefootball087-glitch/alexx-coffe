import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { REVIEWS } from "../data/content";

const Stars = ({ rating }) => (
  <div className="flex gap-1" aria-label={`Rating ${rating} dari 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-caramel text-caramel" : "fill-coffee-900/10 text-coffee-900/10"
        }`}
      />
    ))}
  </div>
);

export default function Reviews() {
  return (
    <section id="review" data-testid="review-section" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Review Pelanggan"
            title="Kata Mereka tentang Kami"
            sub="Cerita jujur dari pelanggan yang sudah menjadikan ALEXX COFFEE bagian dari kesehariannya."
          />
          <Reveal delay={0.15}>
            <div
              data-testid="review-score-badge"
              className="flex items-center gap-3 rounded-2xl border border-coffee-900/10 bg-white px-5 py-4 shadow-sm"
            >
              <span className="font-display text-3xl font-bold text-coffee-900">4.9</span>
              <div>
                <Stars rating={5} />
                <p className="mt-1 text-xs text-coffee-700/70">dari 250+ ulasan</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.1}>
              <blockquote
                data-testid={`review-card-${i}`}
                className="flex h-full flex-col rounded-2xl border border-coffee-900/10 bg-white p-7 shadow-sm transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_18px_36px_-16px_rgba(44,29,17,0.3)]"
              >
                <Quote className="h-7 w-7 fill-caramel/15 text-caramel/40" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-coffee-800/90">
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="mt-6 flex items-center justify-between border-t border-coffee-900/10 pt-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coffee-900 font-display text-sm font-semibold text-cream">
                      {r.name.charAt(0)}
                    </span>
                    <span className="text-sm font-semibold text-coffee-900">{r.name}</span>
                  </div>
                  <Stars rating={r.rating} />
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
