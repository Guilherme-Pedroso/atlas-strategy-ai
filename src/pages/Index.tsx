
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
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <Header />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Problem />
        <Comparison />
        <HowItWorks />
        <LibrarySection />
        <AIFeature />
        <Tools />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
