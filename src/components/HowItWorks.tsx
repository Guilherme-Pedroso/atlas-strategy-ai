
import React from "react";
import { MessageSquare, Clipboard, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: <Clipboard className="h-12 w-12 text-atlas-highlight" />,
      title: "Responda sobre seu negócio",
      description: "Nome, segmento, desafios, objetivos."
    },
    {
      number: 2,
      icon: <MessageSquare className="h-12 w-12 text-atlas-highlight" />,
      title: "Receba sua estratégia personalizada",
      description: "Com exemplos, metas e ferramentas já adaptadas ao seu caso."
    },
    {
      number: 3,
      icon: <Zap className="h-12 w-12 text-atlas-highlight" />,
      title: "Execute com a ajuda da sua IA",
      description: "Ela te acompanha, dá ideias, responde dúvidas e te guia no caminho mais curto até o resultado."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-atlas">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-atlas-background">
            Como funciona? <span className="text-atlas-secondary">Em 3 passos simples.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="feature-card relative flex flex-col items-center text-center group">
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-atlas-background text-white flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
              
              <div className="mb-5 transform transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-atlas-background">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
