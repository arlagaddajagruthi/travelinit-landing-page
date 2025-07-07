import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { UpcomingFeaturesSection } from "@/components/UpcomingFeaturesSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UpcomingFeaturesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
