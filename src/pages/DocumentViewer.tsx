
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppShell } from "@/components/dashboard/AppShell";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save } from "lucide-react";
import { SWOTDocument } from "@/components/documents/templates/SWOTDocument";
import { ROICalculatorDocument } from "@/components/documents/templates/ROICalculatorDocument";
import { EmailTemplateDocument } from "@/components/documents/templates/EmailTemplateDocument";
import { ContentPlanDocument } from "@/components/documents/templates/ContentPlanDocument";
import { PitchDocument } from "@/components/documents/templates/PitchDocument";
import { BrandingDocument } from "@/components/documents/templates/BrandingDocument";
import { useToast } from "@/hooks/use-toast";

const DocumentViewer = () => {
  const { documentId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [documentTitle, setDocumentTitle] = useState("");

  // Map document types to their components
  const documentComponents: Record<string, React.ReactNode> = {
    "exemplo-swot": <SWOTDocument />,
    "exemplo-roi": <ROICalculatorDocument />,
    "exemplo-email": <EmailTemplateDocument />,
    "exemplo-content-plan": <ContentPlanDocument />,
    "exemplo-pitch": <PitchDocument />,
    "exemplo-branding": <BrandingDocument />
  };

  // Map document IDs to titles
  const documentTitles: Record<string, string> = {
    "exemplo-swot": "Análise SWOT Interativa",
    "exemplo-roi": "Calculadora de ROI de Marketing",
    "exemplo-email": "Template de Email Marketing",
    "exemplo-content-plan": "Plano de Conteúdo",
    "exemplo-pitch": "Template de Pitch",
    "exemplo-branding": "Estratégia de Marca"
  };

  useEffect(() => {
    // Simulate loading document data
    const timer = setTimeout(() => {
      setLoading(false);
      if (documentId && documentTitles[documentId]) {
        setDocumentTitle(documentTitles[documentId]);
      } else {
        setDocumentTitle("Documento não encontrado");
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [documentId]);

  const handleSave = () => {
    toast({
      title: "Documento salvo",
      description: "Todas as alterações foram salvas com sucesso.",
    });
  };

  if (!documentId || !documentComponents[documentId]) {
    return (
      <AppShell>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-atlas-background text-white p-4">
          <h1 className="text-2xl font-bold mb-4">Documento não encontrado</h1>
          <p className="text-atlas-neutral mb-6">O documento que você está procurando não existe ou foi removido.</p>
          <Button onClick={() => navigate("/library")}>
            Voltar para a Biblioteca
          </Button>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="bg-atlas-background text-white min-h-screen">
        <div className="border-b border-white/10 bg-atlas-background/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="container-atlas py-4 px-4 md:px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => navigate("/library")}
                  className="text-white hover:text-atlas-highlight hover:bg-white/5"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <h1 className="text-xl font-bold truncate">{documentTitle}</h1>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button 
                  className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90 w-full sm:w-auto"
                  onClick={handleSave}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Salvar alterações
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-atlas py-6 px-4 md:px-6">
          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-white/5 rounded w-1/4"></div>
              <div className="h-64 bg-white/5 rounded"></div>
              <div className="h-32 bg-white/5 rounded"></div>
            </div>
          ) : (
            documentComponents[documentId]
          )}
        </div>
      </div>
    </AppShell>
  );
};

export default DocumentViewer;
