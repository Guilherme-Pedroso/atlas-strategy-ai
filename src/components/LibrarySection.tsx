
import React from "react";
import { 
  Grid2X2, 
  Calculator, 
  FileText, 
  Calendar, 
  LayoutList, 
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const LibrarySection = () => {
  const isMobile = useIsMobile();
  const libraryItems = [
    {
      icon: <Grid2X2 className="h-8 w-8 md:h-10 md:w-10 text-atlas-highlight" />,
      title: "Matriz SWOT interativa",
      link: "/document/exemplo-swot"
    },
    {
      icon: <Calculator className="h-8 w-8 md:h-10 md:w-10 text-atlas-highlight" />,
      title: "Calculadoras de ROI, CAC, LTV",
      link: "/document/exemplo-roi"
    },
    {
      icon: <FileText className="h-8 w-8 md:h-10 md:w-10 text-atlas-highlight" />,
      title: "Modelos de proposta comercial",
      link: "/document/exemplo-pitch"
    },
    {
      icon: <Calendar className="h-8 w-8 md:h-10 md:w-10 text-atlas-highlight" />,
      title: "Cronogramas de conteúdo com IA",
      link: "/document/exemplo-content-plan"
    },
    {
      icon: <LayoutList className="h-8 w-8 md:h-10 md:w-10 text-atlas-highlight" />,
      title: "Estratégias de funil para cada estágio",
      link: "/document/exemplo-branding"
    },
    {
      icon: <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-atlas-highlight" />,
      title: "Templates prontos de pitch, briefing, storytelling",
      link: "/document/exemplo-email"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-atlas px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-atlas-background">
            Uma biblioteca viva, <span className="text-atlas-secondary">com inteligência de verdade.</span>
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 md:mb-10">
            Mais de 100 materiais explicativos, editáveis e ferramentas táticas — todos conectados 
            com sua estratégia e contexto de negócio. Nada de cursos longos, e-books ou PDFs avulsos. 
            Tudo adaptado ao que você precisa, com sugestões da IA a cada passo.
          </p>

          <Button 
            className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90 mb-8"
            asChild
          >
            <Link to="/library">
              Explorar biblioteca completa
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {libraryItems.map((item, index) => (
            <Link 
              to={item.link} 
              key={index}
              className="feature-card hover:border-atlas-highlight transition-all duration-300 flex flex-col items-center p-4 md:p-6 hover:shadow-md hover:shadow-atlas-highlight/10 no-underline"
            >
              <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-base md:text-lg font-semibold text-atlas-background text-center">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 md:mt-12 text-center">
          <p className="text-base md:text-lg font-medium italic text-atlas-background">
            É como ter uma escola de negócios operando dentro da sua empresa — só que sob demanda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;
