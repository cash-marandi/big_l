"use client";

import { Building2, Shield, Road, Users, CheckCircle, ArrowRight, FileText, Award } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Building2,
    title: "Structural Engineering",
    description: "Expert structural engineering design for low to medium-rise buildings, ensuring safety and compliance with building regulations. Our main strengths lie in structural engineering, particularly in the design of low to medium-rise buildings.",
    features: [
      "Building Design",
      "Structural Analysis",
      "Foundation Design",
      "Steel & Concrete Structures",
      "Structural Retrofitting",
      "Building Code Compliance",
    ],
  },
  {
    icon: Shield,
    title: "Civil Engineering",
    description: "Comprehensive civil engineering services covering all aspects of infrastructure development and site works for both private and public sector clients.",
    features: [
      "Site Development",
      "Storm Water Systems",
      "Roads & Pavement Design",
      "Bulk Earthworks",
      "Utilities Design",
      "Municipal Services",
    ],
  },
  {
    icon: Road,
    title: "Infrastructure",
    description: "Complete infrastructure solutions for residential, commercial, and government projects across multiple sectors.",
    features: [
      "Road Design",
      "Storm Water Systems",
      "Sewer & Water Reticulation",
      "Traffic Planning",
      "Parking Areas",
      "Access Roads",
    ],
  },
  {
    icon: Users,
    title: "Project Management",
    description: "Professional project management services ensuring projects are delivered on time and within budget. Our project management team consists of former practising engineers.",
    features: [
      "Construction Monitoring",
      "Quality Control",
      "Cost Management",
      "Program Management",
      "Contract Administration",
      "Risk Management",
    ],
  },
  {
    icon: FileText,
    title: "Building Control",
    description: "Building control and inspection services to ensure compliance with all relevant regulations and standards.",
    features: [
      "Plan Review",
      "Site Inspections",
      "Compliance Audits",
      "Occupancy Certificates",
      "By-law Compliance",
      "Standard Assessments",
    ],
  },
  {
    icon: Award,
    title: "Geotechnical",
    description: "Geotechnical engineering services including soil investigations and foundation recommendations.",
    features: [
      "Soil Investigations",
      "Foundation Recommendations",
      "Geotechnical Reports",
      "Ground Conditions",
      "Bearing Capacity",
      "Stability Assessments",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--warm-cream)]">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden bg-[var(--earth-dark)]">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/hero_after.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--earth-dark)]/90 to-[var(--earth-dark)]/60" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Comprehensive civil engineering and structural engineering consulting services
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--warm-cream)] to-transparent" />
      </div>

      {/* Services Content */}
      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6">
              Professional Engineering Services
            </h2>
            <p className="text-lg text-[var(--stone-gray)]">
              Select Group offers a wide range of civil and structural engineering services designed to meet the diverse needs of our clients. Our integrated approach allows us to manage projects across infrastructure, structural, and geotechnical domains.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-[var(--clay-brown)]/10 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-[var(--clay-brown)]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[var(--earth-dark)] mb-4">{service.title}</h3>
                  <p className="text-lg text-[var(--stone-gray)] mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-[var(--earth-dark)] mb-4">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2 text-[var(--stone-gray)]">
                          <CheckCircle className="w-4 h-4 text-[var(--clay-brown)] flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <div className="aspect-video bg-[var(--sand-light)]/30 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-[var(--clay-brown)]/30" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center bg-[var(--clay-brown)] rounded-3xl p-12 lg:p-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. Let us help you bring your vision to life with professional engineering solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--clay-brown)] rounded-full font-semibold hover:bg-[var(--warm-cream)] transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}