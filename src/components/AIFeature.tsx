
import React from "react";
import { MessageSquare } from "lucide-react";

const AIFeature = () => {
  return (
    <section className="py-20 bg-atlas-background text-white">
      <div className="container-atlas">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Uma IA pensante, que <span className="text-atlas-highlight">conhece seu negócio</span>.
            </h2>
            
            <p className="text-lg mb-8 text-atlas-neutral">
              Não é só um robô genérico. Nossa IA é treinada com sua história, suas respostas e seus objetivos. 
              Ela conversa, sugere, corrige e evolui junto com você. E está disponível 24/7.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 relative">
            <div className="absolute -top-3 -left-3">
              <div className="bg-atlas-highlight text-atlas-background p-2 rounded-lg shadow-lg">
                <MessageSquare className="h-6 w-6" />
              </div>
            </div>
            
            <p className="text-white text-lg font-medium ml-6 mt-2">
              "Com base na sua meta de vender 3 mil reais por semana, aqui está um funil de Instagram e WhatsApp sugerido. Quer que eu gere os conteúdos?"
            </p>
            
            <div className="mt-4 ml-6 flex space-x-2">
              <button className="bg-atlas-highlight/20 text-atlas-highlight px-4 py-2 rounded-md hover:bg-atlas-highlight/30 transition-colors">
                Gerar conteúdos
              </button>
              <button className="bg-white/10 text-white px-4 py-2 rounded-md hover:bg-white/20 transition-colors">
                Ajustar funil
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeature;
