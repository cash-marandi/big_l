"use client";

import { useEffect, useRef } from "react";

const clients = [
  { name: "Mpumalanga Department", logo: "MD" },
  { name: "Nelspruit Municipality", logo: "NM" },
  { name: "Private Developers", logo: "PD" },
  { name: "White River Housing", logo: "WRH" },
  { name: "Mbombela Council", logo: "MC" },
  { name: "KZN Projects", logo: "KZN" },
  { name: "Gauteng Development", logo: "GD" },
  { name: "Limpopo Infrastructure", logo: "LI" },
];

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollContent = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scrollContent, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 bg-[var(--warm-cream)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <span className="inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
            Trusted By
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--earth-dark)]">
            Companies We&apos;ve Worked With
          </h2>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden gap-12 px-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...clients, ...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-sm"
          >
            <div className="w-12 h-12 bg-[var(--clay-brown)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">{client.logo}</span>
            </div>
            <span className="text-[var(--earth-dark)] font-medium text-sm whitespace-nowrap">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}