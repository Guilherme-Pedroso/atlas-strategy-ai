
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative bg-atlas-background py-20 md:py-28 overflow-hidden w-full">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-atlas-secondary opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-atlas-highlight opacity-10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Construa estratégias <span className="text-atlas-highlight">inteligentes</span> sem as dores de cabeça tradicionais
          </h2>
          
          <p className="text-lg md:text-xl text-atlas-neutral">
            Pare de gastar tempo tentando elaborar planos de marketing sem direção. 
            Comece a obter resultados com estratégias personalizadas criadas em minutos.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button 
              className="btn-cta text-base px-8 py-6 h-auto transform transition-transform hover:scale-105" 
              size="lg"
              onClick={() => navigate("/signup")}
            >
              Começar agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="text-base border-white/10 text-white hover:bg-white/5"
              onClick={() => navigate("/pricing")}
            >
              Conheça nossos planos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
