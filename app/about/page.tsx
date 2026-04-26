"use client";

import { Target, Lightbulb, Shield, Users } from "lucide-react";

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
    description: "Operating with honesty, transparency, and ethical standards.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients for mutual success.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--warm-cream)]">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden bg-[var(--earth-dark)]">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/hero_before.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--earth-dark)]/90 to-[var(--earth-dark)]/60" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Consulting Civil and Structural Engineering since 2017
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
                Our Story
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6">
                Building a Legacy of Excellence
              </h2>
              <p className="text-lg text-[var(--stone-gray)] mb-6 leading-relaxed">
                Select Group (Pty) Ltd was established as a Consulting Civil and Structural Engineering Consultancy firm in 2017 by Lucky Kwinda. In the initial years following the firm&apos;s establishment, significant effort was dedicated to assessing and defining the target market and establishing the core values that define our organisation.
              </p>
              <p className="text-[var(--stone-gray)] mb-6 leading-relaxed">
                Thanks to the successful completion of several projects and the resulting increase in new inquiries, Select Group has, since 2020, evolved into a full-time business venture. To date, Select Group has successfully completed a diverse range of projects across various fields in civil and structural engineering.
              </p>
              <p className="text-[var(--stone-gray)] leading-relaxed">
                Currently based in Nelspruit, Mpumalanga, our main focus is to assist clients in need of our services across Mpumalanga, KwaZulu-Natal, Gauteng, and Limpopo. No project is too small for us, and we pride ourselves on providing professional service, offering a number of options and alternatives to choose from.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-[var(--sand-light)]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero_after.png')" }} />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[var(--clay-brown)] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">2017</div>
                <div className="text-sm text-white/80">Established</div>
              </div>
            </div>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="p-6 bg-white rounded-2xl shadow-lg text-center">
                  <div className="w-14 h-14 bg-[var(--clay-brown)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-[var(--clay-brown)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--earth-dark)] mb-2">{value.title}</h3>
                  <p className="text-[var(--stone-gray)] text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Registrations */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-[var(--earth-dark)] mb-6">Professional Registrations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-[var(--warm-cream)] rounded-xl">
                <Shield className="w-8 h-8 text-[var(--clay-brown)] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[var(--earth-dark)]">ECSA Registered</h4>
                  <p className="text-sm text-[var(--stone-gray)]">Engineering Council of South Africa - Registration in compliance with statutory requirements</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-[var(--warm-cream)] rounded-xl">
                <Shield className="w-8 h-8 text-[var(--clay-brown)] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[var(--earth-dark)]">NHBRC Certified</h4>
                  <p className="text-sm text-[var(--stone-gray)]">National Home Builders Registration Council - Certified as engineers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}