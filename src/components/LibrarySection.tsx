
import React from "react";
import { 
  Grid2X2, 
  Calculator, 
  FileText, 
  Calendar, 
  LayoutList, 
  MessageSquare
} from "lucide-react";

const LibrarySection = () => {
  const libraryItems = [
    {
      icon: <Grid2X2 className="h-10 w-10 text-atlas-highlight" />,
      title: "Matriz SWOT interativa"
    },
    {
      icon: <Calculator className="h-10 w-10 text-atlas-highlight" />,
      title: "Calculadoras de ROI, CAC, LTV"
    },
    {
      icon: <FileText className="h-10 w-10 text-atlas-highlight" />,
      title: "Modelos de proposta comercial"
    },
    {
      icon: <Calendar className="h-10 w-10 text-atlas-highlight" />,
      title: "Cronogramas de conteúdo com IA"
    },
    {
      icon: <LayoutList className="h-10 w-10 text-atlas-highlight" />,
      title: "Estratégias de funil para cada estágio"
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-atlas-highlight" />,
      title: "Templates prontos de pitch, briefing, storytelling"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-atlas">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-atlas-background">
            Uma biblioteca viva, <span className="text-atlas-secondary">com inteligência de verdade.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
            Mais de 100 materiais explicativos, editáveis e ferramentas táticas — todos conectados 
            com sua estratégia e contexto de negócio. Nada de cursos longos, e-books ou PDFs avulsos. 
            Tudo adaptado ao que você precisa, com sugestões da IA a cada passo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {libraryItems.map((item, index) => (
            <div 
              key={index} 
              className="feature-card hover:border-atlas-highlight transition-all duration-300 flex flex-col items-center p-6 hover:shadow-md hover:shadow-atlas-highlight/10"
            >
              <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-atlas-background text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium italic text-atlas-background">
            É como ter uma escola de negócios operando dentro da sua empresa — só que sob demanda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;
