"use client";

import { Building2, Shield, Road, Users, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Building2,
    title: "Structural Engineering",
    description: "Expert structural engineering design for low to medium-rise buildings, ensuring safety and compliance with building regulations.",
    features: [
      "Building Design",
      "Structural Analysis",
      "Foundation Design",
      "Steel & Concrete",
      "Retrofitting",
      "Code Compliance",
    ],
  },
  {
    icon: Shield,
    title: "Civil Engineering",
    description: "Comprehensive civil engineering services covering all aspects of infrastructure development and site works.",
    features: [
      "Site Development",
      "Storm Water",
      "Roads & Pavement",
      "Bulk Earthworks",
      "Utilities Design",
      "Municipal Services",
    ],
  },
  {
    icon: Road,
    title: "Infrastructure",
    description: "Complete infrastructure solutions for residential, commercial, and government projects.",
    features: [
      "Road Design",
      "Storm Water Systems",
      "Sewer & Water",
      "Traffic Planning",
      "Parking Areas",
      "Access Roads",
    ],
  },
  {
    icon: Users,
    title: "Project Management",
    description: "Professional project management services ensuring projects are delivered on time and within budget.",
    features: [
      "Construction Monitoring",
      "Quality Control",
      "Cost Management",
      "Program Management",
      "Contract Administration",
      "Risk Management",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-[var(--warm-cream)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6 leading-tight">
            Our Professional
            <span className="text-[var(--clay-brown)]"> Services</span>
          </h2>
          <p className="text-lg text-[var(--stone-gray)] leading-relaxed">
            We offer a comprehensive range of civil and structural engineering consulting services, backed by years of expertise and registered with ECSA.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[var(--clay-brown)]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-[var(--clay-brown)]" />
              </div>

              <h3 className="text-xl font-bold text-[var(--earth-dark)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--stone-gray)] text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-1">
                {service.features.slice(0, 4).map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-xs text-[var(--stone-gray)]">
                    <CheckCircle className="w-3 h-3 text-[var(--clay-brown)] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[var(--stone-gray)] mb-6">
            Looking for professional engineering services?
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--clay-brown)] text-white rounded-full font-semibold hover:bg-[var(--clay-brown-dark)] transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}