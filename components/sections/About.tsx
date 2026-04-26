"use client";

import { Award, Users, Building2, Shield } from "lucide-react";

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
    description: "State-of-the-art engineering tools and technology for efficient solutions.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Strict safety protocols ensuring protection for workers and clients.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-[var(--warm-cream)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Content Side */}
          <div>
            <span className="inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
              About Select Group
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6 leading-tight">
              Engineering
              <span className="text-[var(--clay-brown)]"> Excellence</span>
            </h2>
            
            <p className="text-lg text-[var(--stone-gray)] mb-6 leading-relaxed">
              Select Group (Pty) Ltd is a premier Consulting Civil and Structural Engineering firm based in Nelspruit, Mpumalanga. Established in 2017, we have grown into a full-scale consultancy serving clients across Mpumalanga, KwaZulu-Natal, Gauteng, and Limpopo.
            </p>
            
            <p className="text-[var(--stone-gray)] mb-8 leading-relaxed">
              As a duly registered entity with ECSA and NHBRC certification, we provide Civil and Structural Infrastructural Project Management Services to private developers and government departments.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { value: "50+", suffix: "", label: "Projects Completed" },
                { value: "2017", suffix: "", label: "Established" },
                { value: "4", suffix: "", label: "Provinces" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[var(--clay-brown)]">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-[var(--stone-gray)] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href="/about"
              className="inline-flex items-center gap-2 text-[var(--clay-brown)] font-semibold hover:gap-4 transition-all duration-300"
            >
              Learn More About Us
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/hero_before.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-dark)]/40 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 lg:right-8 bg-[var(--clay-brown)] text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">2017</div>
              <div className="text-sm text-white/80">Established</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[var(--clay-brown)]/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-[var(--clay-brown)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--earth-dark)] mb-3">{feature.title}</h3>
              <p className="text-[var(--stone-gray)] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}