"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home, Building, Road, HardHat, Trees, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";
import Scroll3D from "@/components/ui/Scroll3D";

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

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="min-h-screen bg-[var(--warm-cream)]">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="hero-bg absolute inset-0 bg-[var(--earth-dark)]" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Comprehensive civil engineering and construction solutions tailored to your needs
            </p>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--warm-cream)] to-transparent" />
      </div>

      {/* Services Content */}
      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Scroll3D direction="rotateX" intensity={30}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
                What We Offer
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6">
                Professional Construction Services
              </h2>
              <p className="text-lg text-[var(--stone-gray)]">
                From concept to completion, we provide end-to-end construction services with a focus on quality, safety, and client satisfaction.
              </p>
            </div>
          </Scroll3D>

          {/* Services List */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <Scroll3D key={index} direction={index % 2 === 0 ? "left" : "right"} intensity={80}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-20 h-20 bg-[var(--clay-brown)]/10 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-10 h-10 text-[var(--clay-brown)]" />
                    </div>
                    <h3 className="text-3xl font-bold text-[var(--earth-dark)] mb-4">{service.title}</h3>
                    <p className="text-lg text-[var(--stone-gray)] mb-8 leading-relaxed">{service.description}</p>
                    
                    {/* Features */}
                    <div className="mb-8">
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

                    {/* Process */}
                    <div>
                      <h4 className="font-bold text-[var(--earth-dark)] mb-4">Our Process</h4>
                      <div className="flex flex-wrap gap-3">
                        {service.process.map((step, sIndex) => (
                          <div key={sIndex} className="flex items-center gap-2">
                            <span className="w-8 h-8 bg-[var(--clay-brown)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {sIndex + 1}
                            </span>
                            <span className="text-sm text-[var(--stone-gray)]">{step}</span>
                            {sIndex < service.process.length - 1 && (
                              <ArrowRight className="w-4 h-4 text-[var(--sand-beige)] ml-1" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <TiltCard intensity={8} className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg" style={{ transformStyle: "preserve-3d" }}>
                      <div className="aspect-video bg-[var(--sand-light)]/30 rounded-2xl flex items-center justify-center">
                        <service.icon className="w-24 h-24 text-[var(--clay-brown)]/30" />
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </Scroll3D>
            ))}
          </div>

          {/* CTA Section */}
          <Scroll3D direction="up" intensity={60}>
            <div className="mt-24 text-center bg-[var(--clay-brown)] rounded-3xl p-12 lg:p-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. Let us help you bring your vision to life.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--clay-brown)] rounded-full font-semibold hover:bg-[var(--warm-cream)] transition-all duration-300 hover:scale-105"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </Scroll3D>
        </div>
      </div>
    </div>
  );
}
