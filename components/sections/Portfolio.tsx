"use client";

import { useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Modern Residential Estate",
    category: "Residential",
    location: "Nelspruit",
    description: "A luxury residential development featuring 24 modern homes with sustainable design elements.",
    year: "2024",
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    category: "Commercial",
    location: "White River",
    description: "State-of-the-art office building with 15,000 sqm of modern workspace.",
    year: "2023",
  },
  {
    id: 3,
    title: "Riverside Villa",
    category: "Residential",
    location: "Mbombela",
    description: "Custom-designed family home with smart home integration.",
    year: "2023",
  },
  {
    id: 4,
    title: "Infrastructure Upgrade",
    category: "Infrastructure",
    location: "Nelspruit",
    description: "Complete road rehabilitation and storm water system upgrade.",
    year: "2024",
  },
];

const categories = ["All", "Residential", "Commercial", "Infrastructure"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="relative py-24 lg:py-32 bg-[var(--warm-cream)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <span className="inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
              Our Work
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6 leading-tight">
              Featured
              <span className="text-[var(--clay-brown)]"> Projects</span>
            </h2>
            <p className="text-lg text-[var(--stone-gray)] leading-relaxed">
              Explore our portfolio of successful engineering projects across various sectors.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--clay-brown)] text-white rounded-full font-semibold hover:bg-[var(--clay-brown-dark)] transition-all duration-300 self-start"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[var(--clay-brown)] text-white"
                  : "bg-white text-[var(--stone-gray)] hover:bg-[var(--sand-light)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio`}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 block"
            >
              <div className="relative aspect-[16/10] bg-[var(--sand-light)]">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/images/hero_after.png')" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-dark)]/60 via-transparent to-transparent" />
                
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[var(--earth-dark)]">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 bg-[var(--clay-brown)] rounded-full text-sm font-medium text-white">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-[var(--stone-gray)] text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
                <h3 className="text-xl font-bold text-[var(--earth-dark)] mb-2 group-hover:text-[var(--clay-brown)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[var(--stone-gray)] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}