import { MapPin, Clock, Phone, Instagram, ExternalLink, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import {
  ADDRESS,
  OPEN_HOURS,
  WA_DISPLAY,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_EMBED,
  MAPS_LINK,
  waLink,
  ORDER_MESSAGE,
} from "../data/content";

const INFO = [
  { icon: MapPin, label: "Alamat", value: ADDRESS, testid: "location-address" },
  { icon: Clock, label: "Jam Buka", value: OPEN_HOURS, testid: "location-hours" },
  { icon: Phone, label: "WhatsApp", value: WA_DISPLAY, testid: "location-phone" },
  { icon: Instagram, label: "Instagram", value: INSTAGRAM_HANDLE, testid: "location-instagram" },
];

export default function Location() {
  return (
    <section id="lokasi" data-testid="location-section" className="bg-parchment py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Lokasi"
          title="Mampir, Kami Tunggu"
          sub="Kami ada di Rajaiyang, Losarang — mudah dijangkau dan selalu hangat menyambut."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl border border-coffee-900/10 bg-white p-8 shadow-sm">
              <ul className="flex-1 space-y-6">
                {INFO.map((item) => (
                  <li key={item.label} className="flex gap-4" data-testid={item.testid}>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-caramel-dark">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coffee-700/60">
                        {item.label}
                      </p>
                      {item.label === "Instagram" ? (
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-1 block text-sm font-medium text-coffee-900 transition-colors hover:text-caramel"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium leading-relaxed text-coffee-900">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-coffee-900/10 pt-7">
                <a
                  href={waLink(ORDER_MESSAGE)}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="location-wa-btn"
                  className="inline-flex items-center gap-2 rounded-full bg-caramel px-6 py-3 text-sm font-semibold text-coffee-950 transition-colors duration-300 hover:bg-caramel-light"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat WhatsApp
                </a>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="location-maps-btn"
                  className="inline-flex items-center gap-2 rounded-full border border-coffee-900/20 px-6 py-3 text-sm font-semibold text-coffee-900 transition-colors duration-300 hover:border-caramel hover:text-caramel"
                >
                  <ExternalLink className="h-4 w-4" />
                  Buka Google Maps
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="h-full min-h-[380px] overflow-hidden rounded-3xl border border-coffee-900/10 shadow-sm">
              <iframe
                data-testid="maps-iframe"
                title="Peta lokasi ALEXX COFFEE"
                src={MAPS_EMBED}
                className="h-full min-h-[380px] w-full grayscale-[35%] transition-all duration-700 hover:grayscale-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
