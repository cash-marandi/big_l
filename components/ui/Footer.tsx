"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

// Custom social icons as SVG components
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--earth-dark)] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--clay-brown)]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--forest-green)]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-40 h-16 relative">
                <Image
                  src="/images/logo.png"
                  alt="Select Group"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Premier Consulting Civil and Structural Engineering firm based in Nelspruit, registered with ECSA and NHBRC.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--clay-brown)] transition-colors duration-300"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--clay-brown)] transition-colors duration-300"
              >
                <LinkedinIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--clay-brown)] transition-colors duration-300"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[var(--sand-beige)]">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/news", label: "News & Updates" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[var(--sand-beige)] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[var(--sand-beige)]">Services</h4>
            <ul className="space-y-3">
              {[
                "Civil Engineering",
                "Structural Engineering",
                "Project Management",
                "Building Design",
                "Infrastructure",
                "Geotechnical",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-[var(--sand-beige)] transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[var(--sand-beige)]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--clay-brown)] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Suite 108, Nelmed Building<br />
                  Nelspruit, Mpumalanga<br />
                  South Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--clay-brown)] flex-shrink-0" />
                <a
                  href="tel:+27133470200"
                  className="text-white/70 hover:text-[var(--sand-beige)] transition-colors duration-300 text-sm"
                >
                  +27 13 347 0200
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--clay-brown)] flex-shrink-0" />
                <a
                  href="mailto:info@selectgroup.co.za"
                  className="text-white/70 hover:text-[var(--sand-beige)] transition-colors duration-300 text-sm"
                >
                  info@selectgroup.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Select Group (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-white/50">Built by</span>
            <a 
              href="https://www.livelonke.co.za" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[var(--sand-beige)] font-medium transition-colors"
            >
              Live Lonke ICT
            </a>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[var(--clay-brown)] flex items-center justify-center hover:bg-[var(--clay-brown-light)] transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
