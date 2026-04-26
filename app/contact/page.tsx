"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      <div className="relative h-[40vh] min-h-[350px] bg-[var(--earth-dark)]">
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Get in touch with us for professional engineering services
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
                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md">
                  <div className="w-12 h-12 bg-[var(--clay-brown)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--clay-brown)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--earth-dark)] mb-1">Address</h3>
                    <p className="text-[var(--stone-gray)]">
                      Suite 108, Nelmed Building<br />
                      Nelspruit, Mpumalanga<br />
                      South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md">
                  <div className="w-12 h-12 bg-[var(--clay-brown)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[var(--clay-brown)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--earth-dark)] mb-1">Phone</h3>
                    <a href="tel:+27133470200" className="text-[var(--stone-gray)] hover:text-[var(--clay-brown)] transition-colors">
                      +27 13 347 0200
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md">
                  <div className="w-12 h-12 bg-[var(--clay-brown)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[var(--clay-brown)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--earth-dark)] mb-1">Email</h3>
                    <a href="mailto:info@selectgroup.co.za" className="text-[var(--stone-gray)] hover:text-[var(--clay-brown)] transition-colors">
                      info@selectgroup.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md">
                  <div className="w-12 h-12 bg-[var(--clay-brown)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--clay-brown)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--earth-dark)] mb-1">Working Hours</h3>
                    <p className="text-[var(--stone-gray)]">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: By appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
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
                        <option value="structural">Structural Engineering</option>
                        <option value="civil">Civil Engineering</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="project">Project Management</option>
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
                      className="w-full py-4 bg-[var(--clay-brown)] text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[var(--clay-brown-dark)] transition-all duration-300"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-96 bg-[var(--sand-light)]/30">
        <div className="h-full flex items-center justify-center text-[var(--stone-gray)]">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-[var(--clay-brown)]" />
            <p className="text-lg">Map Integration Coming Soon</p>
            <p className="text-sm mt-2">Suite 108, Nelmed Building, Nelspruit, Mpumalanga</p>
          </div>
        </div>
      </div>
    </div>
  );
}