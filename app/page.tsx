import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ClientLogos from "@/components/sections/ClientLogos";
import ContactCTA from "@/components/sections/ContactCTA";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <ClientLogos />
      <CTABanner />
      <ContactCTA />
    </>
  );
}