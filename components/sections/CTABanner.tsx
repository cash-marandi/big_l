"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="relative py-16 bg-[var(--clay-brown)] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Need Professional Engineering Services?
            </h3>
            <p className="text-white/80">
              Contact us today for a free consultation and quote.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--clay-brown)] rounded-full font-semibold hover:bg-[var(--warm-cream)] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}