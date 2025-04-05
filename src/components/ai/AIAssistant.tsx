
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, X, MessageSquare, Info, ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const getContextualHelp = () => {
    const path = location.pathname;
    
    if (path.includes("/dashboard")) {
      return {
        title: "Dashboard",
        tips: [
          "Aqui você visualiza os principais indicadores da sua estratégia.",
          "Confira seu uso de IA e limite disponível na parte superior.",
          "Documentos recentes ficam na parte central para acesso rápido."
        ]
      };
    } else if (path.includes("/documents")) {
      return {
        title: "Documentos Inteligentes",
        tips: [
          "Crie documentos com preenchimento assistido por IA.",
          "Use a matriz SWOT para análise estratégica do seu negócio.",
          "Experimente a calculadora de ROI para visualizar o retorno dos seus investimentos."
        ]
      };
    } else if (path.includes("/ai")) {
      return {
        title: "Assistente de IA",
        tips: [
          "Faça perguntas específicas sobre marketing e estratégia.",
          "Envie arquivos para análise usando o botão de upload.",
          "Suas conversas são salvas no histórico para consulta posterior."
        ]
      };
    } else if (path.includes("/library")) {
      return {
        title: "Biblioteca",
        tips: [
          "Explore modelos e recursos organizados por categoria.",
          "Use os filtros no topo para encontrar conteúdo específico.",
          "Clique nos itens para visualizar ou criar a partir deles."
        ]
      };
    } else if (path.includes("/plans")) {
      return {
        title: "Planos e Assinaturas",
        tips: [
          "Compare os benefícios de cada plano side-by-side.",
          "O plano Pro oferece o melhor custo-benefício para a maioria dos usuários.",
          "Faça upgrade para aumentar seu limite de uso de IA."
        ]
      };
    } else {
      return {
        title: "Marketing Atlas",
        tips: [
          "Explore o menu lateral para navegar entre as funcionalidades.",
          "Use a IA para automatizar sua estratégia de marketing.",
          "Precisa de ajuda? Estou aqui para responder suas dúvidas."
        ]
      };
    }
  };
  
  const contextualHelp = getContextualHelp();
  
  return (
    <>
      {/* Botão flutuante de IA */}
      <Button
        className="fixed bottom-6 right-6 size-12 rounded-full bg-atlas-highlight text-atlas-background shadow-lg hover:bg-atlas-highlight/90 z-50 flex items-center justify-center"
        onClick={() => setIsOpen(true)}
      >
        <Sparkles className="size-5" />
      </Button>
      
      {/* Painel de assistência */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 z-50 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <Card className="bg-atlas-background/95 backdrop-blur border-white/10 shadow-xl">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-atlas-highlight" />
                <CardTitle className="text-white text-lg">
                  Assistente Atlas
                </CardTitle>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-atlas-neutral hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="mb-3 flex items-start gap-3 bg-white/5 p-3 rounded-md">
                <Info className="h-5 w-5 text-atlas-highlight mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-medium text-sm mb-1">
                    {contextualHelp.title}
                  </h3>
                  <ul className="space-y-2">
                    {contextualHelp.tips.map((tip, index) => (
                      <li key={index} className="text-atlas-neutral text-sm flex gap-2">
                        <span className="text-atlas-highlight">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="text-white font-medium text-sm mb-2">Precisa de mais ajuda?</h3>
                <Button 
                  variant="outline" 
                  className="w-full justify-between bg-transparent border-white/10 hover:bg-white/5 text-white"
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/ai");
                  }}
                >
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2 text-atlas-highlight" />
                    <span>Converse com a IA estratégica</span>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <p className="text-xs text-atlas-neutral italic">
                Dica: Use Ctrl+J para abrir este assistente a qualquer momento.
              </p>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};
