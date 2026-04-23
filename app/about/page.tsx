"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "@/components/ui/TiltCard";
import Scroll3D from "@/components/ui/Scroll3D";
import { Target, Lightbulb, Shield, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2010", title: "Founded", description: "Big L Civils established in Nelspruit" },
  { year: "2013", title: "First Major Project", description: "Completed first large-scale residential development" },
  { year: "2016", title: "Team Expansion", description: "Grew to 30+ employees and expanded services" },
  { year: "2019", title: "Equipment Upgrade", description: "Invested in modern machinery and technology" },
  { year: "2022", title: "100th Project", description: "Celebrated completion of 100th project" },
  { year: "2024", title: "Industry Leader", description: "Recognized as leading civil engineering company in Mpumalanga" },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our work, from planning to execution.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing modern techniques and technologies to deliver better results.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Operating with honesty, transparency, and ethical standards in all dealings.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients, partners, and communities for mutual success.",
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax
      gsap.to(".hero-bg", {
        yPercent: 30,
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
      <div ref={heroRef} className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="hero-bg absolute inset-0">
          <Image
            src="/images/hero_before.png"
            alt="Big L Civils construction site"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--earth-dark)]/90 to-[var(--earth-dark)]/60" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Building excellence in Nelspruit and beyond since 2010
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <Scroll3D direction="left" intensity={80}>
              <div>
                <span className="inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
                  Our Story
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6">
                  Building a Legacy of Excellence
                </h2>
                <p className="text-lg text-[var(--stone-gray)] mb-6 leading-relaxed">
                  Founded in 2010, Big L Civils has grown from a small local contractor to one of the most respected civil engineering companies in Mpumalanga. Our journey has been defined by a relentless commitment to quality, safety, and client satisfaction.
                </p>
                <p className="text-[var(--stone-gray)] mb-6 leading-relaxed">
                  We have completed over 150 projects ranging from residential homes to large-scale infrastructure developments. Our team of skilled professionals brings together decades of experience in civil engineering, construction management, and project execution.
                </p>
                <p className="text-[var(--stone-gray)] leading-relaxed">
                  Today, Big L Civils continues to set the standard for construction excellence in the region, combining traditional craftsmanship with modern innovation to deliver projects that exceed expectations.
                </p>
              </div>
            </Scroll3D>

            <Scroll3D direction="right" intensity={80}>
              <TiltCard intensity={8}>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/hero_after.png"
                      alt="Completed project by Big L Civils"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-[var(--clay-brown)] text-white p-6 rounded-2xl shadow-xl" style={{ transform: "translateZ(50px)" }}>
                    <div className="text-4xl font-bold">150+</div>
                    <div className="text-sm text-white/80">Projects Completed</div>
                  </div>
                </div>
              </TiltCard>
            </Scroll3D>
          </div>

          {/* Values Section */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
                Our Values
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6">
                What We Stand For
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Scroll3D key={index} direction="rotateY" intensity={45}>
                  <TiltCard intensity={10}>
                    <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full" style={{ transformStyle: "preserve-3d" }}>
                      <div className="w-16 h-16 bg-[var(--clay-brown)]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--clay-brown)] transition-colors duration-300" style={{ transform: "translateZ(40px)" }}>
                        <value.icon className="w-8 h-8 text-[var(--clay-brown)] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-[var(--earth-dark)] mb-3" style={{ transform: "translateZ(30px)" }}>{value.title}</h3>
                      <p className="text-[var(--stone-gray)] text-sm">{value.description}</p>
                    </div>
                  </TiltCard>
                </Scroll3D>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
                Our Journey
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6">
                Milestones
              </h2>
            </div>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[var(--sand-beige)]" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <Scroll3D key={index} direction={index % 2 === 0 ? "left" : "right"} intensity={60}>
                    <div
                      className={`flex items-center gap-8 ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      <div className={`w-1/2 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                        <div className="bg-white p-6 rounded-2xl shadow-lg inline-block hover:shadow-xl transition-shadow">
                          <div className="text-[var(--clay-brown)] font-bold text-2xl mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-[var(--earth-dark)] mb-2">{milestone.title}</h3>
                          <p className="text-[var(--stone-gray)] text-sm">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-[var(--clay-brown)] rounded-full border-4 border-white shadow-lg z-10" />
                      <div className="w-1/2" />
                    </div>
                  </Scroll3D>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
