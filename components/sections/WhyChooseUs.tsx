"use client";

import { Check, Shield, Clock, Users, TrendingUp, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "ECSA & NHBRC Registered",
    description: "Fully registered with Engineering Council of South Africa and NHBRC for your peace of mind.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We deliver projects on schedule without compromising on quality or safety.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our team consists of former practising engineers with decades of experience.",
  },
  {
    icon: TrendingUp,
    title: "Cost-Effective Solutions",
    description: "We offer practical engineering solutions that maximize value for your budget.",
  },
  {
    icon: Award,
    title: "ProvenTrack Record",
    description: "Successfully completed 50+ projects across 4 provinces in South Africa.",
  },
  {
    icon: Check,
    title: "Professional Service",
    description: "We pride ourselves on offering multiple options and alternatives to choose from.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6 leading-tight">
            Engineering Excellence
            <span className="text-[var(--clay-brown)]"> You Can Trust</span>
          </h2>
          <p className="text-lg text-[var(--stone-gray)] leading-relaxed">
            Select Group combines professional expertise with personalized service to deliver exceptional engineering solutions for every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border-2 border-[var(--sand-light)] hover:border-[var(--clay-brown)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-[var(--clay-brown)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--clay-brown)] transition-colors duration-300 group-hover:scale-110">
                <reason.icon className="w-7 h-7 text-[var(--clay-brown)] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[var(--earth-dark)] mb-3 group-hover:text-[var(--clay-brown)] transition-colors duration-300">{reason.title}</h3>
              <p className="text-[var(--stone-gray)] text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}