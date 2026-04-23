"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import Scroll3D from "@/components/ui/Scroll3D";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[var(--warm-cream)]">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[40vh] min-h-[350px] bg-[var(--earth-dark)]">
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Get in touch with us for a free consultation and quote on your next project
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--warm-cream)] to-transparent" />
      </div>

      {/* Contact Content */}
      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <Scroll3D direction="left" intensity={80}>
              <div>
                <span className="inline-block text-[var(--clay-brown)] font-semibold text-sm tracking-wider uppercase mb-4">
                  Get in Touch
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6">
                  Let&apos;s Build Together
                </h2>
                <p className="text-lg text-[var(--stone-gray)] mb-12 leading-relaxed">
                  Whether you have a question about our services, need a quote, or want to discuss your project, we&apos;re here to help. Reach out to us and our team will get back to you promptly.
                </p>

                {/* Contact Details */}
                <div className="space-y-6 mb-12">
                  <TiltCard intensity={5}>
                    <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md" style={{ transformStyle: "preserve-3d" }}>
                      <div className="w-12 h-12 bg-[var(--clay-brown)]/10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ transform: "translateZ(30px)" }}>
                        <MapPin className="w-6 h-6 text-[var(--clay-brown)]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--earth-dark)] mb-1">Address</h3>
                        <p className="text-[var(--stone-gray)]">
                          123 Main Street<br />
                          Nelspruit, Mpumalanga<br />
                          South Africa
                        </p>
                      </div>
                    </div>
                  </TiltCard>

                  <TiltCard intensity={5}>
                    <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md" style={{ transformStyle: "preserve-3d" }}>
                      <div className="w-12 h-12 bg-[var(--clay-brown)]/10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ transform: "translateZ(30px)" }}>
                        <Phone className="w-6 h-6 text-[var(--clay-brown)]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--earth-dark)] mb-1">Phone</h3>
                        <a href="tel:+27123456789" className="text-[var(--stone-gray)] hover:text-[var(--clay-brown)] transition-colors">
                          +27 12 345 6789
                        </a>
                      </div>
                    </div>
                  </TiltCard>

                  <TiltCard intensity={5}>
                    <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md" style={{ transformStyle: "preserve-3d" }}>
                      <div className="w-12 h-12 bg-[var(--clay-brown)]/10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ transform: "translateZ(30px)" }}>
                        <Mail className="w-6 h-6 text-[var(--clay-brown)]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--earth-dark)] mb-1">Email</h3>
                        <a href="mailto:info@biglcivils.co.za" className="text-[var(--stone-gray)] hover:text-[var(--clay-brown)] transition-colors">
                          info@biglcivils.co.za
                        </a>
                      </div>
                    </div>
                  </TiltCard>

                  <TiltCard intensity={5}>
                    <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md" style={{ transformStyle: "preserve-3d" }}>
                      <div className="w-12 h-12 bg-[var(--clay-brown)]/10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ transform: "translateZ(30px)" }}>
                        <Clock className="w-6 h-6 text-[var(--clay-brown)]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--earth-dark)] mb-1">Working Hours</h3>
                        <p className="text-[var(--stone-gray)]">
                          Monday - Friday: 7:00 AM - 5:00 PM<br />
                          Saturday: 8:00 AM - 12:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </div>
            </Scroll3D>

            {/* Contact Form */}
            <Scroll3D direction="right" intensity={80}>
              <TiltCard intensity={3}>
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl" style={{ transformStyle: "preserve-3d" }}>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--earth-dark)] mb-4">Message Sent!</h3>
                      <p className="text-[var(--stone-gray)]">
                        Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block font-medium text-[var(--earth-dark)] mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-[var(--sand-light)]/50 focus:outline-none focus:border-[var(--clay-brown)] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block font-medium text-[var(--earth-dark)] mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[var(--sand-light)]/50 focus:outline-none focus:border-[var(--clay-brown)] transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block font-medium text-[var(--earth-dark)] mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-[var(--sand-light)]/50 focus:outline-none focus:border-[var(--clay-brown)] transition-colors"
                            placeholder="+27 12 345 6789"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block font-medium text-[var(--earth-dark)] mb-2">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--sand-light)]/50 focus:outline-none focus:border-[var(--clay-brown)] transition-colors bg-white"
                        >
                          <option value="">Select a service</option>
                          <option value="residential">Residential Construction</option>
                          <option value="commercial">Commercial Construction</option>
                          <option value="infrastructure">Infrastructure Development</option>
                          <option value="earthworks">Earthworks & Grading</option>
                          <option value="landscaping">Landscaping & Outdoor</option>
                          <option value="maintenance">Maintenance & Repairs</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block font-medium text-[var(--earth-dark)] mb-2">
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--sand-light)]/50 focus:outline-none focus:border-[var(--clay-brown)] transition-colors resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-[var(--clay-brown)] text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[var(--clay-brown-dark)] transition-all duration-300 hover:scale-[1.02]"
                      >
                        Send Message
                        <Send className="w-5 h-5" />
                      </button>
                    </form>
                  )}
                </div>
              </TiltCard>
            </Scroll3D>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <Scroll3D direction="up" intensity={60}>
        <div className="h-96 bg-[var(--sand-light)]/30">
          <div className="h-full flex items-center justify-center text-[var(--stone-gray)]">
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-[var(--clay-brown)]" />
              <p className="text-lg">Map Integration Coming Soon</p>
              <p className="text-sm mt-2">123 Main Street, Nelspruit, Mpumalanga</p>
            </div>
          </div>
        </div>
      </Scroll3D>
    </div>
  );
}
