"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "@/components/ui/TiltCard";
import { Award, Users, Building2, HardHat } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Committed to delivering the highest standards in every project we undertake.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with decades of combined experience in civil engineering.",
  },
  {
    icon: Building2,
    title: "Modern Equipment",
    description: "State-of-the-art machinery and technology for efficient construction.",
  },
  {
    icon: HardHat,
    title: "Safety First",
    description: "Rigorous safety protocols ensuring protection for workers and clients.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the image
      gsap.to(imageRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Content reveal animation
      gsap.from(contentRef.current?.querySelectorAll(".reveal-item") || [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Features stagger animation
      gsap.from(".feature-item", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".features-container",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Stats counter animation
      const statNumbers = statsRef.current?.querySelectorAll(".stat-number");
      statNumbers?.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-value") || "0");
        gsap.from(stat, {
          textContent: 0,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          onUpdate: function() {
            stat.textContent = Math.ceil(this.targets()[0].textContent) + (stat.getAttribute("data-suffix") || "");
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[var(--warm-cream)] overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--sand-beige)]/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--clay-brown)]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Image Side */}
          <TiltCard intensity={8}>
            <div ref={imageRef} className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero_before.png"
                  alt="Big L Civils construction team at work"
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-dark)]/40 to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 lg:right-8 bg-[var(--clay-brown)] text-white p-6 rounded-2xl shadow-xl" style={{ transform: "translateZ(50px)" }}>
                <div className="text-3xl font-bold">14+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>

              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[var(--sand-beige)] rounded-3xl -z-10" />
            </div>
          </TiltCard>

          {/* Content Side */}
          <div ref={contentRef}>
            <span className="reveal-item inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
              About Big L Civils
            </span>
            
            <h2 className="reveal-item text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6 leading-tight">
              Building Excellence in
              <span className="text-[var(--clay-brown)]"> Nelspruit</span>
            </h2>
            
            <p className="reveal-item text-lg text-[var(--stone-gray)] mb-6 leading-relaxed">
              Big L Civils is a premier civil engineering company based in Nelspruit, Mpumalanga. With over 14 years of experience, we have established ourselves as leaders in residential construction, commercial developments, and infrastructure projects throughout the region.
            </p>
            
            <p className="reveal-item text-[var(--stone-gray)] mb-8 leading-relaxed">
              Our commitment to quality, safety, and innovation has earned us the trust of hundreds of clients. We combine traditional craftsmanship with modern engineering techniques to deliver projects that stand the test of time.
            </p>

            <div ref={statsRef} className="reveal-item grid grid-cols-3 gap-6 mb-8">
              {[
                { value: "150", suffix: "+", label: "Projects Completed" },
                { value: "50", suffix: "+", label: "Team Members" },
                { value: "98", suffix: "%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="stat-number text-3xl lg:text-4xl font-bold text-[var(--clay-brown)]"
                    data-value={stat.value}
                    data-suffix={stat.suffix}
                  >
                    0{stat.suffix}
                  </div>
                  <div className="text-sm text-[var(--stone-gray)] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href="/about"
              className="reveal-item inline-flex items-center gap-2 text-[var(--clay-brown)] font-semibold hover:gap-4 transition-all duration-300"
            >
              Learn More About Us
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="features-container grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <TiltCard intensity={10}>
                <div
                  className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[var(--sand-light)]/50"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="w-14 h-14 bg-[var(--clay-brown)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--clay-brown)] group-hover:scale-110 transition-all duration-300" style={{ transform: "translateZ(30px)" }}>
                    <feature.icon className="w-7 h-7 text-[var(--clay-brown)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--earth-dark)] mb-3" style={{ transform: "translateZ(20px)" }}>{feature.title}</h3>
                  <p className="text-[var(--stone-gray)] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
