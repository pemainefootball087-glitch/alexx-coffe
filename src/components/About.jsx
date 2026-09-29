import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { IMAGES } from "../data/content";

const CHAPTERS = [
  {
    no: "01",
    title: "Biji Pilihan Nusantara",
    text: "Kami memilih biji arabika dan robusta terbaik dari petani lokal, disangrai dengan profil yang konsisten.",
  },
  {
    no: "02",
    title: "Diracik dengan Hati",
    text: "Setiap cangkir dibuat oleh barista berpengalaman dengan takaran presisi dan pelayanan yang ramah.",
  },
  {
    no: "03",
    title: "Ruang untuk Semua",
    text: "Tempat yang nyaman untuk anak muda, keluarga, pekerja, dan siapa pun yang butuh jeda sejenak.",
  },
];

const STATS = [
  { value: "100%", label: "Biji Kopi Pilihan" },
  { value: "17+", label: "Varian Menu" },
  { value: "4.9", label: "Rating Pelanggan" },
];

export default function About() {
  return (
    <section id="tentang" data-testid="about-section" className="overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <img
                src={IMAGES.barista}
                alt="Barista ALEXX COFFEE sedang bekerja"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2} className="absolute -bottom-8 -right-4 hidden w-52 sm:block lg:-right-8">
            <div className="overflow-hidden rounded-2xl border-4 border-cream shadow-2xl">
              <img
                src={IMAGES.pour}
                alt="Proses menyeduh kopi"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div>
          <SectionHeading
            kicker="Tentang Kami"
            title="Tempat di Mana Setiap Cerita Bermula"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-coffee-700/85 md:text-lg">
              ALEXX COFFEE lahir dari kecintaan pada kopi nusantara dan keinginan
              menghadirkan ruang yang hangat di jantung Losarang, Indramayu. Kami
              percaya kopi terbaik bukan hanya soal rasa, tetapi juga tentang dengan
              siapa dan di mana kamu menikmatinya.
            </p>
          </Reveal>

          <div className="mt-10 space-y-7">
            {CHAPTERS.map((ch, i) => (
              <Reveal key={ch.no} delay={0.15 + i * 0.1}>
                <div className="flex gap-5 border-l-2 border-caramel/60 pl-5">
                  <span className="font-accent text-3xl italic text-caramel">{ch.no}</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-coffee-900">
                      {ch.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-coffee-700/80">{ch.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-coffee-900/10 pt-8">
              {STATS.map((s) => (
                <div key={s.label} data-testid={`about-stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <p className="font-display text-3xl font-bold text-coffee-900 sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-coffee-700/70">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
