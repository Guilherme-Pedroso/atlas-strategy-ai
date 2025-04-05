
import React from "react";
import { 
  FileText, 
  Zap, 
  MessageSquare, 
  ChevronRight,
  Sparkles,
  PenTool,
  Layers,
  BarChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const AISidebar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleOpenDocument = () => {
    navigate("/documents");
  };
  
  const handleQuickAction = (action: string) => {
    toast({
      title: "Ação iniciada",
      description: `A ação "${action}" foi iniciada com sucesso.`,
    });
  };
  
  return (
    <div className="w-80 border-l border-white/10 bg-atlas-background/30 backdrop-blur-sm p-4 hidden lg:block overflow-auto">
      {/* Last Document Section */}
      <div className="mb-6">
        <h3 className="text-white font-medium text-sm mb-3">Último documento</h3>
        <Card className="bg-atlas-background/50 border-white/10 hover:bg-atlas-background/70 transition-colors cursor-pointer shadow-md" onClick={handleOpenDocument}>
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-atlas-highlight/10 p-2">
                <FileText className="h-5 w-5 text-atlas-highlight" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm mb-1">Matriz SWOT</h4>
                <p className="text-atlas-neutral text-xs">Última edição: 2h atrás</p>
                <div className="flex items-center mt-2 text-atlas-highlight text-xs font-medium group">
                  <span>Retomar</span>
                  <ChevronRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Separator className="bg-white/10 my-6" />
      
      {/* AI Recommendations */}
      <div className="mb-6">
        <h3 className="text-white font-medium text-sm mb-3">Recomendações da IA</h3>
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full justify-start bg-transparent border-white/10 hover:bg-white/5 text-atlas-neutral"
            onClick={() => handleQuickAction("Análise de concorrentes")}
          >
            <BarChart className="h-4 w-4 mr-2 text-atlas-secondary" />
            Análise de concorrentes
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start bg-transparent border-white/10 hover:bg-white/5 text-atlas-neutral"
            onClick={() => handleQuickAction("Calendário editorial")}
          >
            <PenTool className="h-4 w-4 mr-2 text-atlas-cta" />
            Calendário editorial
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start bg-transparent border-white/10 hover:bg-white/5 text-atlas-neutral"
            onClick={() => handleQuickAction("Funil de vendas")}
          >
            <Layers className="h-4 w-4 mr-2 text-atlas-highlight" />
            Funil de vendas
          </Button>
        </div>
      </div>
      
      <Separator className="bg-white/10 my-6" />
      
      {/* Quick Actions */}
      <div>
        <h3 className="text-white font-medium text-sm mb-3">Ações rápidas</h3>
        <div className="space-y-3">
          <Button 
            className="w-full bg-atlas-highlight/10 border border-atlas-highlight/20 hover:bg-atlas-highlight/20 text-atlas-highlight justify-start"
            onClick={() => navigate("/documents")}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Criar nova estratégia
          </Button>
          <Button 
            className="w-full bg-atlas-secondary/10 border border-atlas-secondary/20 hover:bg-atlas-secondary/20 text-atlas-secondary justify-start"
            onClick={() => handleQuickAction("Preencher campos do documento")}
          >
            <FileText className="h-4 w-4 mr-2" />
            Preencher documento
          </Button>
          <Button 
            className="w-full bg-atlas-cta/10 border border-atlas-cta/20 hover:bg-atlas-cta/20 text-atlas-cta justify-start"
            onClick={() => handleQuickAction("Gerar conteúdo para post")}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Gerar conteúdo para post
          </Button>
        </div>
      </div>
    </div>
  );
};
