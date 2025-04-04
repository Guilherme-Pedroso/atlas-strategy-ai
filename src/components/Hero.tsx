
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-atlas-background text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-atlas-highlight opacity-10 rounded-full filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-atlas-secondary opacity-10 rounded-full filter blur-3xl animate-pulse-soft"></div>
      </div>
      
      <div className="container-atlas relative z-10 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Sua consultoria de marketing. <span className="gradient-text">Inteligente</span>, personalizada e pronta em minutos.
          </h1>
          
          <p className="text-xl md:text-2xl text-atlas-neutral font-medium">
            Você responde. A IA analisa. A estratégia aparece pronta — feita sob medida para sua empresa.
          </p>
          
          <div className="mt-10 flex flex-col items-center">
            <Button 
              className="btn-cta text-lg px-8 py-6 rounded-lg w-full sm:w-auto transform transition-transform duration-300 hover:scale-105" 
              size="lg"
              asChild
            >
              <Link to="/onboarding">
                Comece agora — a partir de R$ 99/mês
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <p className="text-sm md:text-base mt-4 text-atlas-neutral opacity-80">
              Nada de PDFs genéricos. Nada pra baixar. Só ação estratégica real, no seu tempo.
            </p>
            
            <p className="text-sm md:text-base mt-4 text-atlas-highlight font-medium max-w-2xl">
              Inclui acesso completo à nossa biblioteca estratégica com conteúdo que grandes consultorias cobrariam milhares para entregar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
