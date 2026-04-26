"use client";

import { useState } from "react";
import { Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    title: "Select Group Expands Services to KwaZulu-Natal",
    excerpt: "We are proud to announce the expansion of our consulting engineering services to KwaZulu-Natal, bringing our expertise to more clients across the region.",
    category: "Company News",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "ECSA Registration Renewal",
    excerpt: "Select Group has successfully renewed our ECSA registration, continuing our status as a professional engineering consultancy.",
    category: "Company News",
    date: "2024-03-10",
  },
  {
    id: 3,
    title: "New Project Management Team Member",
    excerpt: "We are excited to welcome a new senior engineer to our team, strengthening our project management capabilities.",
    category: "Team",
    date: "2024-02-28",
  },
];

export default function News() {
  const [selectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(p => p.category === selectedCategory);

  return (
    <section
      id="news"
      className="relative py-24 lg:py-32 bg-[var(--warm-cream)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <span className="inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
              Latest Updates
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6 leading-tight">
              News &
              <span className="text-[var(--clay-brown)]"> Insights</span>
            </h2>
            <p className="text-lg text-[var(--stone-gray)] leading-relaxed">
              Stay updated with our latest projects and company announcements.
            </p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--clay-brown)] text-white rounded-full font-semibold hover:bg-[var(--clay-brown-dark)] transition-all duration-300 self-start"
          >
            View All News
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/news`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 block"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[var(--clay-brown)]/10 rounded-full text-xs font-medium text-[var(--clay-brown)]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[var(--stone-gray)]">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[var(--earth-dark)] mb-3 group-hover:text-[var(--clay-brown)] transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-[var(--stone-gray)] text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="mt-4 pt-4 border-t border-[var(--sand-light)]/50">
                  <span className="inline-flex items-center gap-2 text-[var(--clay-brown)] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}