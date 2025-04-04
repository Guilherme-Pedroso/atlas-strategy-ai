
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Comparison from "@/components/Comparison";
import HowItWorks from "@/components/HowItWorks";
import LibrarySection from "@/components/LibrarySection";
import AIFeature from "@/components/AIFeature";
import Tools from "@/components/Tools";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problem />
      <Comparison />
      <HowItWorks />
      <LibrarySection />
      <AIFeature />
      <Tools />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
