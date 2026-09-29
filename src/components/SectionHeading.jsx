import { Reveal } from "./Reveal";

export const SectionHeading = ({ kicker, title, sub, light = false, center = false }) => (
  <Reveal className={center ? "text-center" : ""}>
    <p
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] ${
        light ? "text-caramel-light" : "text-caramel"
      } ${center ? "justify-center" : ""}`}
    >
      <span className={`h-px w-10 ${light ? "bg-caramel-light" : "bg-caramel"}`} />
      {kicker}
      {center && <span className={`h-px w-10 ${light ? "bg-caramel-light" : "bg-caramel"}`} />}
    </p>
    <h2
      className={`mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl ${
        light ? "text-cream" : "text-coffee-900"
      }`}
    >
      {title}
    </h2>
    {sub && (
      <p
        className={`mt-4 max-w-2xl text-base md:text-lg ${
          light ? "text-cream/70" : "text-coffee-700/80"
        } ${center ? "mx-auto" : ""}`}
      >
        {sub}
      </p>
    )}
  </Reveal>
);
