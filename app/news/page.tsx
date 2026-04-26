"use client";

import { useState } from "react";
import { Calendar, ArrowUpRight, Search, Tag } from "lucide-react";
import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    title: "Select Group Expands Services to KwaZulu-Natal",
    excerpt: "We are proud to announce the expansion of our consulting engineering services to KwaZulu-Natal, bringing our expertise to more clients across the region.",
    category: "Company News",
    date: "2024-03-15",
    author: "Select Group Team",
  },
  {
    id: 2,
    title: "ECSA Registration Renewal",
    excerpt: "Select Group has successfully renewed our ECSA registration, continuing our status as a professional engineering consultancy.",
    category: "Company News",
    date: "2024-03-10",
    author: "Management",
  },
  {
    id: 3,
    title: "New Project Management Team Member",
    excerpt: "We are excited to welcome a new senior engineer to our team, strengthening our project management capabilities.",
    category: "Team",
    date: "2024-02-28",
    author: "HR Department",
  },
  {
    id: 4,
    title: "Infrastructure Project Completed in Mbombela",
    excerpt: "Select Group successfully completes another infrastructure project, delivering quality engineering solutions to the Mbombela municipality.",
    category: "Project Update",
    date: "2024-02-20",
    author: "Projects Team",
  },
  {
    id: 5,
    title: "Building Stronger Communities",
    excerpt: "Our commitment to community development continues with our latest initiative in local infrastructure support.",
    category: "Community",
    date: "2024-02-15",
    author: "CSR Team",
  },
  {
    id: 6,
    title: "New Office Location",
    excerpt: "Select Group has moved to a new, larger office space to accommodate our growing team and client base.",
    category: "Company News",
    date: "2024-02-10",
    author: "Administration",
  },
];

const categories = ["All", "Company News", "Project Update", "Team", "Community"];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[var(--warm-cream)]">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[350px] bg-[var(--earth-dark)]">
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              News & Insights
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Stay updated with our latest projects and company announcements
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--warm-cream)] to-transparent" />
      </div>

      {/* News Content */}
      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
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

          <div className="mb-8 text-[var(--stone-gray)]">
            Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href="/news"
                className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-[var(--clay-brown)]/10 rounded-full text-xs font-medium text-[var(--clay-brown)]">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[var(--stone-gray)]">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.date)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--earth-dark)] mb-3 group-hover:text-[var(--clay-brown)] transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-[var(--stone-gray)] text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-[var(--stone-gray)] mb-4">
                    <span>By {article.author}</span>
                  </div>

                  <div className="pt-4 border-t border-[var(--sand-light)]/50">
                    <span className="inline-flex items-center gap-2 text-[var(--clay-brown)] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      Read More
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

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