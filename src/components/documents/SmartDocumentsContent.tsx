
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BrandingDocument } from "@/components/documents/templates/BrandingDocument";
import { PitchDocument } from "@/components/documents/templates/PitchDocument";
import { ContentPlanDocument } from "@/components/documents/templates/ContentPlanDocument";
import { X, MinusCircle, PlusCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const SmartDocumentsContent = () => {
  const [activeDocument, setActiveDocument] = useState<string | null>(null);
  const [filtersMinimized, setFiltersMinimized] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCloseDocument = () => {
    setActiveDocument(null);
  };

  const handleSaveDocument = () => {
    toast({
      title: "Documento salvo",
      description: "Seu documento foi salvo com sucesso no painel estratégico.",
    });
    navigate("/dashboard");
  };

  const renderActiveDocument = () => {
    if (!activeDocument) return null;

    return (
      <div className="bg-atlas-background rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <Button 
            variant="ghost" 
            onClick={handleCloseDocument}
            className="text-atlas-neutral hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleCloseDocument} 
              className="text-atlas-neutral hover:text-white"
            >
              <X className="h-4 w-4" />
            </Button>
            <Button onClick={handleSaveDocument} className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90">
              Salvar documento
            </Button>
          </div>
        </div>

        <div className="flex">
          {!filtersMinimized && (
            <div className="w-64 pr-6 border-r border-white/10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-white">Filtros</h3>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setFiltersMinimized(true)}
                  className="h-8 w-8 text-atlas-neutral hover:text-white"
                >
                  <MinusCircle className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-atlas-neutral block mb-2">Categoria</label>
                  <select className="w-full bg-atlas-background/50 border border-white/10 rounded-md p-2 text-white">
                    <option>Todos</option>
                    <option>Branding</option>
                    <option>Estratégia</option>
                    <option>Conteúdo</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-atlas-neutral block mb-2">Dificuldade</label>
                  <select className="w-full bg-atlas-background/50 border border-white/10 rounded-md p-2 text-white">
                    <option>Todos</option>
                    <option>Iniciante</option>
                    <option>Intermediário</option>
                    <option>Avançado</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-atlas-neutral block mb-2">Tempo</label>
                  <select className="w-full bg-atlas-background/50 border border-white/10 rounded-md p-2 text-white">
                    <option>Todos</option>
                    <option>{"< 30 min"}</option>
                    <option>30-60 min</option>
                    <option>{">"} 60 min</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          
          <div className={`${filtersMinimized ? 'w-full' : 'flex-1 pl-6'}`}>
            {filtersMinimized && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setFiltersMinimized(false)}
                className="mb-4 bg-atlas-background/50 border-white/10 text-atlas-neutral hover:text-white"
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Mostrar filtros
              </Button>
            )}
            
            {activeDocument === "branding" && <BrandingDocument />}
            {activeDocument === "pitch" && <PitchDocument />}
            {activeDocument === "contentPlan" && <ContentPlanDocument />}
          </div>
        </div>
      </div>
    );
  };

  const renderDocumentList = () => {
    const documents = [
      {
        id: "branding",
        title: "Documento de Branding Base",
        description: "Define a essência da sua marca: missão, visão, valores e identidade.",
        icon: "🎨"
      },
      {
        id: "pitch",
        title: "Modelo de Pitch Personalizado",
        description: "Estrutura perfeita para apresentar sua ideia ou negócio a investidores ou clientes.",
        icon: "🚀"
      },
      {
        id: "contentPlan",
        title: "Plano de Conteúdo para Redes Sociais",
        description: "Organize sua estratégia de conteúdo para cada etapa do funil de vendas.",
        icon: "📱"
      }
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <div 
            key={doc.id}
            className="bg-atlas-background/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-lg transition-all hover:transform hover:scale-[1.02] cursor-pointer"
            onClick={() => setActiveDocument(doc.id)}
          >
            <div className="text-4xl mb-4">{doc.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{doc.title}</h3>
            <p className="text-atlas-neutral mb-4">{doc.description}</p>
            <Button className="w-full bg-atlas-secondary hover:bg-atlas-secondary/80 text-white">
              Abrir documento
            </Button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-atlas-background p-6">
      <div className="max-w-7xl mx-auto">
        {!activeDocument ? (
          <>
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-white mb-2">Documentos Inteligentes</h1>
              <p className="text-atlas-neutral">
                Modelos estratégicos prontos para personalizar sua estratégia de marketing.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Documentos Recomendados
              </h2>
              {renderDocumentList()}
            </div>
          </>
        ) : (
          renderActiveDocument()
        )}
      </div>
    </div>
  );
};
