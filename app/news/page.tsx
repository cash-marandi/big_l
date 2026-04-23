"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Clock, User, ArrowUpRight, Search, Tag } from "lucide-react";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";
import Scroll3D from "@/components/ui/Scroll3D";

gsap.registerPlugin(ScrollTrigger);

const newsArticles = [
  {
    id: 1,
    title: "Big L Civils Completes Major Residential Development in Nelspruit",
    excerpt: "We are proud to announce the completion of our latest residential project, featuring 24 luxury homes with modern sustainable design elements. This development represents a significant milestone in our commitment to quality residential construction.",
    category: "Project Update",
    date: "2024-03-15",
    readTime: "5 min read",
    author: "Big L Civils Team",
    image: "/images/hero_after.png",
    tags: ["Residential", "Sustainability", "Nelspruit"],
  },
  {
    id: 2,
    title: "New Safety Standards Implementation Across All Sites",
    excerpt: "As part of our ongoing commitment to worker safety, we have implemented enhanced safety protocols and comprehensive training programs across all our construction sites. This initiative ensures the highest level of protection for our workforce.",
    category: "Company News",
    date: "2024-03-10",
    readTime: "3 min read",
    author: "Safety Department",
    image: "/images/hero_before.png",
    tags: ["Safety", "Compliance", "Training"],
  },
  {
    id: 3,
    title: "Investing in the Future: New Equipment Acquisition",
    excerpt: "Big L Civils has invested in state-of-the-art machinery and technology to improve efficiency and quality across all our projects. This significant investment demonstrates our commitment to staying at the forefront of the construction industry.",
    category: "Industry News",
    date: "2024-02-28",
    readTime: "4 min read",
    author: "Operations Team",
    image: "/images/hero_after.png",
    tags: ["Equipment", "Technology", "Innovation"],
  },
  {
    id: 4,
    title: "Community Outreach: Building for a Better Tomorrow",
    excerpt: "Our team recently participated in a community development project, providing construction services for a local school renovation. We believe in giving back to the communities that have supported our growth over the years.",
    category: "Community",
    date: "2024-02-20",
    readTime: "3 min read",
    author: "CSR Team",
    image: "/images/hero_before.png",
    tags: ["Community", "CSR", "Education"],
  },
  {
    id: 5,
    title: "Award Recognition: Excellence in Civil Engineering",
    excerpt: "We are honored to receive the Mpumalanga Construction Excellence Award for our outstanding work on the Riverside Development project. This recognition reflects our dedication to delivering exceptional results.",
    category: "Awards",
    date: "2024-02-15",
    readTime: "2 min read",
    author: "Management",
    image: "/images/hero_after.png",
    tags: ["Awards", "Excellence", "Recognition"],
  },
  {
    id: 6,
    title: "Sustainable Construction Practices at Big L Civils",
    excerpt: "Learn about our commitment to sustainable construction methods and how we are reducing our environmental impact while delivering high-quality projects. From material selection to waste management, sustainability is at our core.",
    category: "Sustainability",
    date: "2024-02-10",
    readTime: "6 min read",
    author: "Technical Team",
    image: "/images/hero_before.png",
    tags: ["Sustainability", "Environment", "Green Building"],
  },
];

const categories = ["All", "Project Update", "Company News", "Industry News", "Community", "Awards", "Sustainability"];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function NewsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[var(--warm-cream)]">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[40vh] min-h-[350px] bg-[var(--earth-dark)]">
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              News & Insights
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Stay updated with our latest projects, industry insights, and company announcements
            </p>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--warm-cream)] to-transparent" />
      </div>

      {/* News Content */}
      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <Scroll3D direction="rotateX" intensity={20}>
            <div className="flex flex-col lg:flex-row gap-6 mb-12">
              {/* Search */}
              <div className="relative lg:w-1/3">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--stone-gray)]" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-[var(--sand-light)]/50 focus:outline-none focus:border-[var(--clay-brown)] transition-colors"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap items-center gap-2 lg:gap-3">
                <Tag className="w-5 h-5 text-[var(--stone-gray)]" />
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-[var(--clay-brown)] text-white"
                        : "bg-white text-[var(--earth-dark)] hover:bg-[var(--clay-brown)]/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </Scroll3D>

          {/* Results Count */}
          <div className="mb-8 text-[var(--stone-gray)]">
            Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Scroll3D key={article.id} direction="rotateY" intensity={30}>
                <TiltCard intensity={8} className="h-full">
                  <Link
                    href={`/news/${article.id}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--sand-light)]/30 h-full"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4" style={{ transform: "translateZ(40px)" }}>
                        <span className="px-3 py-1 bg-[var(--clay-brown)] rounded-full text-xs font-medium text-white">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-[var(--stone-gray)] mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(article.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-[var(--earth-dark)] mb-3 group-hover:text-[var(--clay-brown)] transition-colors duration-300 line-clamp-2" style={{ transform: "translateZ(30px)" }}>
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-[var(--stone-gray)] text-sm leading-relaxed line-clamp-3 mb-4">
                        {article.excerpt}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-2 text-sm text-[var(--stone-gray)]">
                        <User className="w-4 h-4" />
                        {article.author}
                      </div>

                      {/* Read More */}
                      <div className="mt-4 pt-4 border-t border-[var(--sand-light)]/50">
                        <span className="inline-flex items-center gap-2 text-[var(--clay-brown)] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                          Read Article
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </Scroll3D>
            ))}
          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-[var(--stone-gray)]">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-[var(--clay-brown)] font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
