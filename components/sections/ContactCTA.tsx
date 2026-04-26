"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[var(--earth-dark)] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--clay-brown)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--clay-brown)] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start
              <span className="text-[var(--clay-brown)]"> Your Project?</span>
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Contact Select Group today for professional civil and structural engineering solutions. 
              Whether you have a question about our services or need a quote, we&apos;re here to help.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-white/80">
                <MapPin className="w-5 h-5 text-[var(--clay-brown)]" />
                <span>Suite 108, Nelmed Building, Nelspruit, Mpumalanga</span>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <Phone className="w-5 h-5 text-[var(--clay-brown)]" />
                <a href="tel:+27133470200">+27 13 347 0200</a>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <Mail className="w-5 h-5 text-[var(--clay-brown)]" />
                <a href="mailto:info@selectgroup.co.za">info@selectgroup.co.za</a>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[var(--sand-beige)] font-semibold hover:gap-4 transition-all duration-300"
            >
              View Full Contact Page
            </Link>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--earth-dark)] mb-4">Thank You!</h3>
                <p className="text-[var(--stone-gray)]">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-medium text-[var(--earth-dark)] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[var(--sand-light)] focus:outline-none focus:border-[var(--clay-brown)] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium text-[var(--earth-dark)] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[var(--sand-light)] focus:outline-none focus:border-[var(--clay-brown)] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-medium text-[var(--earth-dark)] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--sand-light)] focus:outline-none focus:border-[var(--clay-brown)] transition-colors"
                    placeholder="+27..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium text-[var(--earth-dark)] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--sand-light)] focus:outline-none focus:border-[var(--clay-brown)] transition-colors resize-none"
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
    </section>
  );
}