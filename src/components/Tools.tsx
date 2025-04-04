
import React from "react";
import { FileText, Star, Calendar, Users } from "lucide-react";

const Tools = () => {
  const tools = [
    {
      icon: <Star className="h-6 w-6 text-atlas-highlight" />,
      name: "Análise SWOT",
      description: "Descubra forças, fraquezas, oportunidades e ameaças do seu negócio."
    },
    {
      icon: <FileText className="h-6 w-6 text-atlas-highlight" />,
      name: "Branding",
      description: "Defina sua identidade de marca e posicionamento estratégico."
    },
    {
      icon: <Users className="h-6 w-6 text-atlas-highlight" />,
      name: "Funil de Vendas",
      description: "Mapeie toda a jornada do cliente, da atração à conversão."
    },
    {
      icon: <Calendar className="h-6 w-6 text-atlas-highlight" />,
      name: "Calendário Editorial",
      description: "Planeje seu conteúdo com estratégia e consistência."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-atlas">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-atlas-background">
            Ferramentas feitas pra você. <span className="text-atlas-secondary">Não pra uma persona fictícia.</span>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A plataforma vem com materiais explicativos e ferramentas editáveis que se adaptam ao seu negócio: 
            SWOT, branding, funil, calendário editorial, estratégia de lançamento... 
            Todos vivos, interativos e salvos online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="feature-card group hover:border-atlas-highlight transition-all">
              <div className="mb-4">{tool.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-atlas-background group-hover:text-atlas-secondary transition-colors">
                {tool.name}
              </h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-sm text-gray-500">
            Tudo na nuvem. Nada pra baixar. Sempre pronto pra usar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tools;
