
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
          <Button onClick={handleSaveDocument} className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90">
            Salvar documento
          </Button>
        </div>

        {activeDocument === "branding" && <BrandingDocument />}
        {activeDocument === "pitch" && <PitchDocument />}
        {activeDocument === "contentPlan" && <ContentPlanDocument />}
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
