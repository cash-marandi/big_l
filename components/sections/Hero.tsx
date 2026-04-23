"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeImageRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 50, y: 50 });
  const rafId = useRef<number>(0);

  const updateMask = useCallback(() => {
    if (!beforeImageRef.current) return;
    const x = mousePos.current.x;
    const y = mousePos.current.y;
    
    // Create multiple overlapping circles for blob effect
    const circles = [];
    for (let i = 0; i < 8; i++) {
      const angle = (Date.now() / 1000) + (i / 8) * Math.PI * 2;
      const offsetX = Math.cos(angle) * 3;
      const offsetY = Math.sin(angle * 0.7) * 3;
      const size = 12 + Math.sin(angle + i) * 3;
      circles.push(`circle(${size}% at ${x + offsetX}% ${y + offsetY}%)`);
    }
    
    const clipPath = circles.join(", ");
    beforeImageRef.current.style.clipPath = clipPath;
    
    rafId.current = requestAnimationFrame(updateMask);
  }, []);

  useEffect(() => {
    rafId.current = requestAnimationFrame(updateMask);
    return () => cancelAnimationFrame(rafId.current);
  }, [updateMask]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mousePos.current = {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    };
  }, []);

  // GSAP entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.from(".hero-buttons", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.7,
      });

      gsap.from(".scroll-indicator", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--earth-dark)]"
      onMouseMove={handleMouseMove}
    >
      {/* Layer 1: Completed Project (hero_after.png) - Always visible */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_after.png"
          alt="Completed construction project"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--earth-dark)]/70 via-[var(--earth-dark)]/30 to-[var(--earth-dark)]/80" />
      </div>

      {/* Layer 2: Construction Phase (hero_before.png) - Revealed by clip-path */}
      <div
        ref={beforeImageRef}
        className="absolute inset-0"
        style={{
          clipPath: "circle(0% at 50% 50%)",
        }}
      >
        <Image
          src="/images/hero_before.png"
          alt="Construction phase"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--earth-dark)]/70 via-[var(--earth-dark)]/30 to-[var(--earth-dark)]/80" />
      </div>

      {/* Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-[2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--clay-brown)]/30 backdrop-blur-sm rounded-full mb-6 border border-[var(--sand-beige)]/20">
              <span className="w-2 h-2 bg-[var(--sand-beige)] rounded-full animate-pulse" />
              <span className="text-[var(--sand-beige)] text-sm font-medium">Building Excellence Since 2010</span>
            </div>

            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              From Ground
              <span className="block text-[var(--sand-beige)]">To Greatness</span>
            </h1>

            <p className="hero-subtitle text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed drop-shadow-md">
              Move your cursor to reveal the transformation. Premier civil engineering company in Nelspruit, delivering exceptional construction across Mpumalanga.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--clay-brown)] text-white rounded-full font-semibold transition-all duration-300 hover:bg-[var(--clay-brown-dark)] hover:scale-105 shadow-lg"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold backdrop-blur-sm border border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "150+", label: "Projects" },
                { value: "14", label: "Years" },
                { value: "50+", label: "Experts" },
                { value: "100%", label: "Commitment" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-3xl font-bold text-[var(--sand-beige)] group-hover:scale-110 transition-transform">
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
        className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer z-10"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
}
