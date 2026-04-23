"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Calendar, ArrowUpRight, Filter } from "lucide-react";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Modern Residential Estate",
    category: "Residential",
    location: "Nelspruit",
    description: "A luxury residential development featuring 24 modern homes with sustainable design elements and premium finishes throughout.",
    image: "/images/hero_after.png",
    year: "2024",
    client: "Private Developer",
    value: "R45 Million",
    duration: "18 months",
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    category: "Commercial",
    location: "White River",
    description: "State-of-the-art office building with 15,000 sqm of modern workspace, underground parking, and green building certification.",
    image: "/images/hero_before.png",
    year: "2023",
    client: "ABC Holdings",
    value: "R120 Million",
    duration: "24 months",
  },
  {
    id: 3,
    title: "Riverside Villa",
    category: "Residential",
    location: "Mbombela",
    description: "Custom-designed family home overlooking the river with premium finishes, smart home integration, and sustainable features.",
    image: "/images/hero_after.png",
    year: "2023",
    client: "Private Client",
    value: "R18 Million",
    duration: "14 months",
  },
  {
    id: 4,
    title: "Infrastructure Upgrade Project",
    category: "Infrastructure",
    location: "Nelspruit",
    description: "Complete road rehabilitation and storm water system upgrade project spanning 5 kilometers of urban roadway.",
    image: "/images/hero_before.png",
    year: "2024",
    client: "Municipality",
    value: "R85 Million",
    duration: "30 months",
  },
];

const categories = ["All", "Residential", "Commercial", "Infrastructure"];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current?.querySelectorAll(".reveal") || [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Cards animation with stagger
      const cards = gridRef.current?.querySelectorAll(".portfolio-card");
      cards?.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.15,
        });
      });

      // Parallax for images
      gsap.utils.toArray<HTMLElement>(".portfolio-image").forEach((image) => {
        gsap.to(image, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[var(--warm-cream)] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-[var(--clay-brown)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <span className="reveal inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
              Our Work
            </span>
            <h2 className="reveal text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6 leading-tight">
              Featured
              <span className="text-[var(--clay-brown)]"> Projects</span>
            </h2>
            <p className="reveal text-lg text-[var(--stone-gray)] leading-relaxed">
              Explore our portfolio of successful projects across residential, commercial, and infrastructure sectors.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="reveal inline-flex items-center gap-2 px-6 py-3 bg-[var(--clay-brown)] text-white rounded-full font-semibold hover:bg-[var(--clay-brown-dark)] transition-all duration-300 hover:scale-105 self-start"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard key={project.id} intensity={6} className="h-full">
              <Link
                href={`/portfolio/${project.id}`}
                className="portfolio-card group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full block"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="portfolio-image absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-dark)]/80 via-[var(--earth-dark)]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6" style={{ transform: "translateZ(50px)" }}>
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[var(--earth-dark)]">
                      {project.category}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-6 right-6" style={{ transform: "translateZ(50px)" }}>
                    <span className="px-3 py-1 bg-[var(--clay-brown)] rounded-full text-sm font-medium text-white">
                      {project.year}
                    </span>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6 text-[var(--clay-brown)]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-[var(--stone-gray)] text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--earth-dark)] mb-3 group-hover:text-[var(--clay-brown)] transition-colors duration-300" style={{ transform: "translateZ(30px)" }}>
                    {project.title}
                  </h3>
                  <p className="text-[var(--stone-gray)] text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
