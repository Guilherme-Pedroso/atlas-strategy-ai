
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  return (
    <section className="relative bg-atlas-background text-white overflow-hidden w-full">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-atlas-highlight opacity-10 rounded-full filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-atlas-secondary opacity-10 rounded-full filter blur-3xl animate-pulse-soft"></div>
      </div>
      
      <div className="container mx-auto relative z-10 py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Sua consultoria de marketing. <span className="gradient-text">Inteligente</span>, personalizada e pronta em minutos.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-atlas-neutral font-medium">
            Você responde. A IA analisa. A estratégia aparece pronta — feita sob medida para sua empresa.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center items-center gap-4">
            <Button 
              className="btn-cta text-base md:text-lg px-6 py-5 md:px-8 md:py-6 rounded-lg w-full sm:w-auto transform transition-transform duration-300 hover:scale-105" 
              size="lg"
              onClick={() => navigate("/signup")}
            >
              {isMobile ? "Comece agora" : "Comece agora — a partir de R$ 99/mês"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="text-base border-white/10 text-black hover:bg-white/5 w-full sm:w-auto"
              onClick={() => navigate("/pricing")}
            >
              Conheça nossos planos
            </Button>
          </div>
          
          <p className="text-sm md:text-base mt-4 text-atlas-neutral opacity-80 px-2">
            Nada de PDFs genéricos. Nada pra baixar. Só ação estratégica real, no seu tempo.
          </p>
          
          <p className="text-sm md:text-base mt-4 text-atlas-highlight font-medium max-w-2xl px-2">
            Inclui acesso completo à nossa AI treinada e à nossa biblioteca estratégica com conteúdo que grandes consultorias cobrariam milhares de reais para entregar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
