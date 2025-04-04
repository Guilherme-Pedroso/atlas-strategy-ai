
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-atlas-background text-white">
      <div className="container-atlas text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Se você tem um negócio, <span className="text-atlas-highlight">já devia estar aqui dentro</span>.
          </h2>
          
          <p className="text-xl text-atlas-neutral">
            A consultoria estratégica que você nunca teve — agora, automática, personalizada e pronta pra rodar.
          </p>
          
          <div className="mt-10">
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
            
            <p className="text-sm mt-6 text-atlas-neutral opacity-80">
              Você pode sair depois. Mas vai se perguntar por que perdeu tanto tempo fazendo tudo sozinho.
            </p>
          </div>
          
          <div className="mt-6">
            <Link 
              to="/library" 
              className="text-atlas-highlight hover:text-atlas-highlight/80 transition-colors underline font-medium"
            >
              Explore nossa biblioteca estratégica
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
