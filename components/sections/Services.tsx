"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home, Building, Road, HardHat, Trees, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "From custom homes to housing developments, we bring your residential vision to life with quality craftsmanship and attention to detail.",
    features: [
      "Custom Home Building",
      "Housing Estates",
      "Renovations & Extensions",
      "Luxury Villas",
      "Affordable Housing",
      "Sustainable Homes",
    ],
    process: ["Consultation", "Design", "Planning", "Construction", "Handover"],
  },
  {
    icon: Building,
    title: "Commercial Construction",
    description: "Expert commercial building solutions for offices, retail spaces, and industrial facilities that meet your business needs.",
    features: [
      "Office Buildings",
      "Retail Spaces",
      "Warehouses",
      "Industrial Facilities",
      "Shopping Centers",
      "Medical Facilities",
    ],
    process: ["Requirements", "Design", "Approvals", "Build", "Completion"],
  },
  {
    icon: Road,
    title: "Infrastructure Development",
    description: "Comprehensive infrastructure solutions including roads, bridges, and utilities that connect and serve communities.",
    features: [
      "Road Construction",
      "Bridge Building",
      "Storm Water Systems",
      "Utilities Installation",
      "Pavement Works",
      "Traffic Management",
    ],
    process: ["Survey", "Design", "Approval", "Construction", "Quality Check"],
  },
  {
    icon: HardHat,
    title: "Earthworks & Grading",
    description: "Professional site preparation and earthmoving services using modern equipment for efficient project execution.",
    features: [
      "Site Clearing",
      "Excavation",
      "Land Grading",
      "Soil Stabilization",
      "Demolition",
      "Rock Breaking",
    ],
    process: ["Assessment", "Planning", "Mobilization", "Execution", "Completion"],
  },
  {
    icon: Trees,
    title: "Landscaping & Outdoor",
    description: "Transform outdoor spaces with our landscaping services, creating beautiful and functional environments.",
    features: [
      "Garden Design",
      "Hardscaping",
      "Irrigation Systems",
      "Outdoor Living Spaces",
      "Water Features",
      "Lighting Design",
    ],
    process: ["Design", "Material Selection", "Installation", "Planting", "Maintenance"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description: "Ongoing maintenance and repair services to keep your properties in optimal condition year after year.",
    features: [
      "Structural Repairs",
      "Preventive Maintenance",
      "Emergency Repairs",
      "Facility Management",
      "Renovations",
      "Upgrades",
    ],
    process: ["Inspection", "Assessment", "Quote", "Repair", "Follow-up"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Cards animation with scroll
      const cards = cardsRef.current?.querySelectorAll(".service-card");
      cards?.forEach((card, index) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        });
      });

      // Parallax background
      gsap.to(".services-bg-element", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[var(--warm-cream)] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="services-bg-element absolute top-1/4 left-0 w-72 h-72 bg-[var(--clay-brown)]/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="services-bg-element absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--sand-beige)]/15 rounded-full blur-3xl translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="reveal inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
            What We Offer
          </span>
          <h2 className="reveal text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6 leading-tight">
            Our Professional
            <span className="text-[var(--clay-brown)]"> Services</span>
          </h2>
          <p className="reveal text-lg text-[var(--stone-gray)] leading-relaxed">
            We offer a comprehensive range of civil engineering and construction services, 
            backed by years of expertise and a commitment to excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <TiltCard key={index} intensity={10} className="h-full">
              <div
                className="service-card group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--sand-light)]/30 hover:-translate-y-3 h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-[var(--clay-brown)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--clay-brown)] group-hover:scale-110 transition-all duration-300" style={{ transform: "translateZ(40px)" }}>
                  <service.icon className="w-8 h-8 text-[var(--clay-brown)] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[var(--earth-dark)] mb-4 group-hover:text-[var(--clay-brown)] transition-colors duration-300" style={{ transform: "translateZ(30px)" }}>
                  {service.title}
                </h3>
                <p className="text-[var(--stone-gray)] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-[var(--stone-gray)]">
                      <CheckCircle className="w-4 h-4 text-[var(--clay-brown)] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[var(--clay-brown)] font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[var(--stone-gray)] mb-6">
            Need a custom solution for your project?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--clay-brown)] text-white rounded-full font-semibold hover:bg-[var(--clay-brown-dark)] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
