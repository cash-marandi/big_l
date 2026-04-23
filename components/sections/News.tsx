"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Calendar, ArrowUpRight, Search, Tag } from "lucide-react";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";

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

export default function News() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll(".news-card");
      cards?.forEach((card, index) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.15,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="news"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[var(--warm-cream)] overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--sand-beige)]/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-[var(--clay-brown)]/10 rounded-full blur-3xl translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <span className="reveal inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
              Latest Updates
            </span>
            <h2 className="reveal text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6 leading-tight">
              News &
              <span className="text-[var(--clay-brown)]"> Insights</span>
            </h2>
            <p className="reveal text-lg text-[var(--stone-gray)] leading-relaxed">
              Stay updated with our latest projects, industry insights, and company announcements.
            </p>
          </div>
          <Link
            href="/news"
            className="reveal inline-flex items-center gap-2 px-6 py-3 bg-[var(--clay-brown)] text-white rounded-full font-semibold hover:bg-[var(--clay-brown-dark)] transition-all duration-300 hover:scale-105 self-start"
          >
            View All News
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* News Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <TiltCard key={article.id} intensity={8} className="h-full">
              <Link
                href={`/news/${article.id}`}
                className="news-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--sand-light)]/30 h-full block"
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
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[var(--earth-dark)] mb-3 group-hover:text-[var(--clay-brown)] transition-colors duration-300 line-clamp-2" style={{ transform: "translateZ(20px)" }}>
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[var(--stone-gray)] text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>

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
          ))}
        </div>
      </div>
    </section>
  );
}
