
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Sparkles, 
  Wrench, 
  ArrowRight, 
  Calendar, 
  Instagram, 
  BarChart3, 
  Clock,
  Edit,
  Target
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const DashboardContent = () => {
  const navigate = useNavigate();
  
  // Get time of day for greeting
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };

  const recommendedMaterials = [
    {
      id: 1,
      title: "Matriz de canais",
      icon: <BarChart3 className="h-5 w-5 text-atlas-highlight" />,
      description: "Análise estratégica dos canais mais efetivos"
    },
    {
      id: 2,
      title: "Estratégia de conteúdo para Instagram",
      icon: <Instagram className="h-5 w-5 text-atlas-highlight" />,
      description: "Planejamento de posts e engajamento"
    },
    {
      id: 3,
      title: "Cronograma de lançamento",
      icon: <Calendar className="h-5 w-5 text-atlas-highlight" />,
      description: "Timeline e etapas para seu próximo produto"
    },
  ];

  const recentlyAccessed = [
    {
      id: 1,
      title: "Planejamento Trimestral",
      lastEdited: "Ontem às 14:25",
      type: "Documento",
    },
    {
      id: 2,
      title: "Matriz SWOT",
      lastEdited: "12/04/2025 às 09:15",
      type: "Ferramenta",
    },
    {
      id: 3,
      title: "Arquétipo de Cliente",
      lastEdited: "10/04/2025 às 16:40",
      type: "Template",
    },
  ];

  return (
    <div className="container-atlas py-8 md:py-12">
      <div className="space-y-8">
        {/* Greeting */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            {getTimeOfDay()}, Guilherme. <span className="text-atlas-highlight">Vamos evoluir sua estratégia hoje?</span>
          </h1>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Current Journey Stage */}
          <Card className="bg-[#1A1F2E] border-gray-800 text-white hover:shadow-lg hover:shadow-atlas-highlight/10 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Etapa atual da jornada</CardTitle>
              <CardDescription className="text-gray-400">
                Veja onde você está no processo estratégico
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 my-4">
                <Target className="h-6 w-6 text-atlas-secondary" />
                <span className="text-lg font-medium">Você está em: <span className="text-atlas-secondary">Crescimento</span></span>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-atlas-secondary/10 border-atlas-secondary/30 text-atlas-secondary hover:bg-atlas-secondary/20"
                variant="outline"
                onClick={() => navigate("/library")}
              >
                Ver plano recomendado <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>

          {/* Quick Access */}
          <Card className="bg-[#1A1F2E] border-gray-800 text-white hover:shadow-lg hover:shadow-atlas-highlight/10 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Acesso rápido</CardTitle>
              <CardDescription className="text-gray-400">
                Atalhos para suas ações mais comuns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <Button variant="outline" className="w-full justify-start bg-gray-800 border-gray-700 hover:bg-gray-700" onClick={() => navigate("/library")}>
                <BookOpen className="h-4 w-4 mr-2" />
                Explorar Biblioteca
              </Button>
              <Button variant="outline" className="w-full justify-start bg-gray-800 border-gray-700 hover:bg-gray-700">
                <Sparkles className="h-4 w-4 mr-2" />
                Criar nova estratégia com IA
              </Button>
              <Button variant="outline" className="w-full justify-start bg-gray-800 border-gray-700 hover:bg-gray-700">
                <Wrench className="h-4 w-4 mr-2" />
                Abrir ferramenta recente
              </Button>
            </CardContent>
          </Card>
          
          {/* Recently Accessed */}
          <Card className="bg-[#1A1F2E] border-gray-800 text-white row-span-1 md:row-span-2 hover:shadow-lg hover:shadow-atlas-highlight/10 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Últimos materiais acessados</CardTitle>
              <CardDescription className="text-gray-400">
                Continue de onde parou
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 pt-4">
                {recentlyAccessed.map((item) => (
                  <div key={item.id} className="flex items-center p-3 rounded-lg border border-gray-800 bg-gray-900/40">
                    <div className="flex-1">
                      <h4 className="font-medium text-white">{item.title}</h4>
                      <div className="flex items-center text-xs text-gray-400 mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.lastEdited}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 px-2 text-gray-400 hover:text-white">
                        Continuar
                      </Button>
                      {item.type !== "Ferramenta" && (
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full text-gray-400 hover:text-white">
                Ver todos os documentos
              </Button>
            </CardFooter>
          </Card>

          {/* AI Recommendations */}
          <Card className="bg-[#1A1F2E] border-gray-800 text-white md:col-span-2 hover:shadow-lg hover:shadow-atlas-highlight/10 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Recomendações da IA</CardTitle>
              <CardDescription className="text-gray-400">
                Com base nas suas respostas, a IA recomenda começar por:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                {recommendedMaterials.map((material) => (
                  <div key={material.id} className="bg-gray-900/40 p-4 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-3">
                      {material.icon}
                      <h4 className="ml-2 font-medium">{material.title}</h4>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{material.description}</p>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                        onClick={() => navigate("/library")}
                      >
                        Ver documento
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="bg-atlas-secondary/10 border-atlas-secondary/30 text-atlas-secondary hover:bg-atlas-secondary/20"
                      >
                        <Sparkles className="h-3 w-3 mr-1" />
                        IA
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
