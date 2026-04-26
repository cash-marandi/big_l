"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--earth-dark)]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero_after.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--earth-dark)]/80 via-[var(--earth-dark)]/50 to-[var(--earth-dark)]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--clay-brown)]/30 backdrop-blur-sm rounded-full mb-6 border border-[var(--sand-beige)]/20">
              <span className="w-2 h-2 bg-[var(--sand-beige)] rounded-full" />
              <span className="text-[var(--sand-beige)] text-sm font-medium">Consulting Engineers</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Engineering
              <span className="block text-[var(--sand-beige)]">Excellence</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Select Group is a premier Consulting Civil and Structural Engineering firm based in Nelspruit. Registered with ECSA and NHBRC, delivering professional engineering solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--clay-brown)] text-white rounded-full font-semibold transition-all duration-300 hover:bg-[var(--clay-brown-dark)]"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold backdrop-blur-sm border border-white/30 transition-all duration-300 hover:bg-white/20"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Projects" },
                { value: "2017", label: "Established" },
                { value: "4", label: "Provinces" },
                { value: "100%", label: "Client Focus" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                >
                  <div className="text-3xl font-bold text-[var(--sand-beige)]">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer z-10"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
}