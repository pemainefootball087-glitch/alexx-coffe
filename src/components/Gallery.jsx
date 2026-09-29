import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { GALLERY } from "../data/content";

export default function Gallery({ extra = [] }) {
  const items = [...GALLERY, ...extra];
  return (
    <section id="gallery" data-testid="gallery-section" className="bg-parchment py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Gallery"
          title="Suasana di ALEXX COFFEE"
          sub="Sepotong momen dari sudut-sudut cafe kami — dari barisan bar sampai taman malam hari."
        />
        <div className="mt-14 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {items.map((g, i) => (
            <Reveal key={`${g.title}-${i}`} delay={(i % 3) * 0.08}>
              <figure
                data-testid={`gallery-item-${i}`}
                className="group relative break-inside-avoid overflow-hidden rounded-2xl"
              >
                <img
                  src={g.img}
                  alt={g.title}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-coffee-950/80 via-coffee-950/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="translate-y-2 font-display text-lg text-cream transition-transform duration-500 group-hover:translate-y-0">
                    {g.title}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
