
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative bg-atlas-background text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-atlas-highlight opacity-10 rounded-full filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-atlas-secondary opacity-10 rounded-full filter blur-3xl animate-pulse-soft"></div>
      </div>
      
      <div className="container-atlas relative z-10 py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Sua consultoria de marketing. <span className="gradient-text">Inteligente</span>, personalizada e pronta em minutos.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-atlas-neutral font-medium">
            Você responde. A IA analisa. A estratégia aparece pronta — feita sob medida para sua empresa.
          </p>
          
          <div className="mt-8 flex flex-col items-center">
            <Button 
              className="btn-cta text-base md:text-lg px-6 py-5 md:px-8 md:py-6 rounded-lg w-full sm:w-auto transform transition-transform duration-300 hover:scale-105" 
              size="lg"
              asChild
            >
              <Link to="/onboarding" className="flex items-center justify-center">
                {isMobile ? "Comece agora" : "Comece agora — a partir de R$ 99/mês"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <p className="text-sm md:text-base mt-4 text-atlas-neutral opacity-80 px-2">
              Nada de PDFs genéricos. Nada pra baixar. Só ação estratégica real, no seu tempo.
            </p>
            
            <p className="text-sm md:text-base mt-4 text-atlas-highlight font-medium max-w-2xl px-2">
              Inclui acesso completo à nossa biblioteca estratégica com conteúdo que grandes consultorias cobrariam milhares de reais para entregar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
