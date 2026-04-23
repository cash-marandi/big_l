"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

interface Blob {
  x: number;
  y: number;
  radius: number;
  opacity: number;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [blobCircles, setBlobCircles] = useState<Blob[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);
  const blobStatesRef = useRef<Blob[]>([]);

  // Initialize blob positions
  useEffect(() => {
    const initialBlobs: Blob[] = Array.from({ length: 20 }, () => ({
      x: -1000,
      y: -1000,
      radius: 80 + Math.random() * 100,
      opacity: 0,
    }));
    blobStatesRef.current = initialBlobs;
    setBlobCircles(initialBlobs);
  }, []);

  // Animation loop for blob positions
  useEffect(() => {
    let time = 0;
    
    const animate = () => {
      time += 0.016;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const isActive = mx > 0;

      const updatedBlobs = blobStatesRef.current.map((blob, i) => {
        const angle = time * 2 + (i / 20) * Math.PI * 2;
        const offsetRadius = isActive ? 120 : 0;
        
        let targetX = mx + Math.cos(angle) * offsetRadius * (0.5 + i * 0.05);
        let targetY = my + Math.sin(angle * 0.8) * offsetRadius * (0.5 + i * 0.05);
        
        // Natural floating when no mouse
        if (!isActive) {
          targetX = -1000;
          targetY = -1000;
        }

        // Smooth lerp
        const lerp = 0.08;
        const newX = blob.x + (targetX - blob.x) * lerp;
        const newY = blob.y + (targetY - blob.y) * lerp;
        
        // Fade in/out based on mouse activity
        const targetOpacity = isActive ? 1 : 0;
        const newOpacity = blob.opacity + (targetOpacity - blob.opacity) * 0.05;

        return {
          ...blob,
          x: newX,
          y: newY,
          opacity: newOpacity,
        };
      });

      blobStatesRef.current = updatedBlobs;
      setBlobCircles([...updatedBlobs]);

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
    setCursorPos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseRef.current = { x: -1000, y: -1000 };
  };

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

  // Build clip-path string from blobs
  const buildClipPath = () => {
    if (!blobCircles.length) return "circle(0% at 50% 50%)";
    
    const activeBlobs = blobCircles.filter(b => b.opacity > 0.01 && b.x > -100);
    if (activeBlobs.length === 0) return "circle(0% at 50% 50%)";
    
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    
    const circles = activeBlobs.map(blob => {
      const cx = ((blob.x / vw) * 100).toFixed(1);
      const cy = ((blob.y / vh) * 100).toFixed(1);
      const r = ((blob.radius / Math.min(vw, vh)) * 100).toFixed(1);
      return `circle(${r}% at ${cx}% ${cy}%)`;
    });
    
    return circles.join(", ");
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--earth-dark)]"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Layer 1: Completed Project (hero_after.png) - Always visible underneath */}
      <div className="absolute inset-0 z-0">
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
        className="absolute inset-0 z-[1] transition-all duration-75"
        style={{
          clipPath: buildClipPath(),
          WebkitClipPath: buildClipPath(),
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

      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none z-50 w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center transition-all duration-150 mix-blend-difference"
        style={{
          left: cursorPos.x - 24,
          top: cursorPos.y - 24,
          opacity: isHovering ? 1 : 0,
          transform: isHovering ? "scale(1)" : "scale(0)",
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full" />
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

      {/* Hover Instruction */}
      <div 
        className={`absolute bottom-24 left-1/2 -translate-x-1/2 transition-opacity duration-500 pointer-events-none z-10 ${isHovering ? 'opacity-0' : 'opacity-100'}`}
      >
        <span className="text-white/70 text-sm font-medium animate-pulse">
          Move cursor to reveal the transformation
        </span>
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
