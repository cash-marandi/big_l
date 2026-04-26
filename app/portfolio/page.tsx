"use client";

import { useState } from "react";
import { MapPin, Filter } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Modern Residential Estate",
    category: "Residential",
    location: "Nelspruit",
    description: "A luxury residential development featuring 24 modern homes with sustainable design elements.",
    year: "2024",
    client: "Private Developer",
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    category: "Commercial",
    location: "White River",
    description: "State-of-the-art office building with 15,000 sqm of modern workspace.",
    year: "2023",
    client: "ABC Holdings",
  },
  {
    id: 3,
    title: "Riverside Villa",
    category: "Residential",
    location: "Mbombela",
    description: "Custom-designed family home with smart home integration.",
    year: "2023",
    client: "Private Client",
  },
  {
    id: 4,
    title: "Infrastructure Upgrade",
    category: "Infrastructure",
    location: "Nelspruit",
    description: "Complete road rehabilitation and storm water system upgrade.",
    year: "2024",
    client: "Municipality",
  },
  {
    id: 5,
    title: "Shopping Center Development",
    category: "Commercial",
    location: "Hazyview",
    description: "Mixed-use development featuring retail spaces and entertainment facilities.",
    year: "2023",
    client: "Retail Group",
  },
  {
    id: 6,
    title: "Luxury Estate Homes",
    category: "Residential",
    location: "White River",
    description: "Exclusive estate development with 12 luxury homes.",
    year: "2024",
    client: "Estate Developers",
  },
];

const categories = ["All", "Residential", "Commercial", "Infrastructure"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[var(--warm-cream)]">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden bg-[var(--earth-dark)]">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/hero_after.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--earth-dark)]/90 to-[var(--earth-dark)]/60" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Explore our completed engineering projects
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Content */}
      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href="/portfolio"
                className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/images/hero_after.png')" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-dark)]/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[var(--earth-dark)]">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[var(--clay-brown)] rounded-full text-xs font-medium text-white">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-[var(--stone-gray)] mb-2">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--earth-dark)] mb-3 group-hover:text-[var(--clay-brown)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--stone-gray)] text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="pt-4 border-t border-[var(--sand-light)]/50">
                    <span className="text-xs text-[var(--stone-gray)]">Client: </span>
                    <span className="text-xs font-medium text-[var(--earth-dark)]">{project.client}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}