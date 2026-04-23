"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Calendar, ArrowUpRight, Filter } from "lucide-react";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";
import Scroll3D from "@/components/ui/Scroll3D";

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
  {
    id: 5,
    title: "Shopping Center Development",
    category: "Commercial",
    location: "Hazyview",
    description: "Mixed-use development featuring retail spaces, restaurants, and entertainment facilities with ample parking.",
    image: "/images/hero_after.png",
    year: "2023",
    client: "Retail Group",
    value: "R200 Million",
    duration: "36 months",
  },
  {
    id: 6,
    title: "Luxury Estate Homes",
    category: "Residential",
    location: "White River",
    description: "Exclusive estate development with 12 luxury homes, each featuring private gardens and access to communal facilities.",
    image: "/images/hero_before.png",
    year: "2024",
    client: "Estate Developers",
    value: "R95 Million",
    duration: "28 months",
  },
];

const categories = ["All", "Residential", "Commercial", "Infrastructure"];

export default function PortfolioPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax
      gsap.to(".hero-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[var(--warm-cream)]">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="hero-bg absolute inset-0">
          <Image
            src="/images/hero_after.png"
            alt="Portfolio hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--earth-dark)]/90 to-[var(--earth-dark)]/60" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Explore our completed projects and see the quality of our work firsthand
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Content */}
      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <Scroll3D direction="rotateX" intensity={20}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Filter className="w-5 h-5 text-[var(--stone-gray)]" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[var(--clay-brown)] text-white"
                      : "bg-white text-[var(--earth-dark)] hover:bg-[var(--clay-brown)]/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Scroll3D>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Scroll3D key={project.id} direction="rotateY" intensity={45}>
                <TiltCard intensity={8}>
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-dark)]/80 via-transparent to-transparent" />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2" style={{ transform: "translateZ(40px)" }}>
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[var(--earth-dark)]">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4" style={{ transform: "translateZ(40px)" }}>
                        <span className="px-3 py-1 bg-[var(--clay-brown)] rounded-full text-xs font-medium text-white">
                          {project.year}
                        </span>
                      </div>

                      {/* Arrow */}
                      <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 text-[var(--clay-brown)]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-[var(--stone-gray)] mb-2">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <h3 className="text-xl font-bold text-[var(--earth-dark)] mb-3 group-hover:text-[var(--clay-brown)] transition-colors" style={{ transform: "translateZ(30px)" }}>
                        {project.title}
                      </h3>
                      <p className="text-[var(--stone-gray)] text-sm line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      
                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--sand-light)]/50">
                        <div>
                          <div className="text-xs text-[var(--stone-gray)]">Value</div>
                          <div className="font-semibold text-[var(--earth-dark)]">{project.value}</div>
                        </div>
                        <div>
                          <div className="text-xs text-[var(--stone-gray)]">Duration</div>
                          <div className="font-semibold text-[var(--earth-dark)]">{project.duration}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </Scroll3D>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
