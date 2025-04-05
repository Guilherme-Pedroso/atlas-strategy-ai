
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calculator, 
  CheckSquare, 
  Sparkles, 
  Calendar, 
  BarChart, 
  Target, 
  Users, 
  MessageSquare 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const ToolsContent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleToolClick = (toolName: string) => {
    toast({
      title: "Ferramenta em desenvolvimento",
      description: `A ferramenta "${toolName}" será disponibilizada em breve.`
    });
  };
  
  const tools = [
    {
      id: "roi-calculator",
      title: "Calculadora de ROI",
      description: "Calcule o retorno sobre investimento das suas campanhas de marketing",
      icon: <Calculator className="h-6 w-6 text-green-500" />,
      color: "green"
    },
    {
      id: "marketing-checklist",
      title: "Checklist de Marketing",
      description: "Verifique se sua estratégia de marketing está completa",
      icon: <CheckSquare className="h-6 w-6 text-blue-500" />,
      color: "blue"
    },
    {
      id: "idea-generator",
      title: "Gerador de Ideias com IA",
      description: "Gere ideias criativas para suas campanhas de marketing",
      icon: <Sparkles className="h-6 w-6 text-purple-500" />,
      color: "purple"
    },
    {
      id: "content-planner",
      title: "Planejador de Conteúdo",
      description: "Crie um plano de conteúdo para suas redes sociais",
      icon: <Calendar className="h-6 w-6 text-orange-500" />,
      color: "orange"
    },
    {
      id: "analytics-dashboard",
      title: "Dashboard de Análise",
      description: "Visualize o desempenho das suas campanhas",
      icon: <BarChart className="h-6 w-6 text-indigo-500" />,
      color: "indigo"
    },
    {
      id: "kpi-tracker",
      title: "Rastreador de KPIs",
      description: "Acompanhe os indicadores-chave de desempenho do seu marketing",
      icon: <Target className="h-6 w-6 text-red-500" />,
      color: "red"
    },
    {
      id: "persona-creator",
      title: "Criador de Personas",
      description: "Defina as personas do seu negócio com ajuda da IA",
      icon: <Users className="h-6 w-6 text-cyan-500" />,
      color: "cyan"
    },
    {
      id: "copywriting-assistant",
      title: "Assistente de Copywriting",
      description: "Crie textos persuasivos para suas campanhas",
      icon: <MessageSquare className="h-6 w-6 text-amber-500" />,
      color: "amber"
    }
  ];
  
  return (
    <div className="p-6 bg-atlas-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Ferramentas</h1>
          <p className="text-atlas-neutral">
            Utilize ferramentas especializadas para aprimorar suas estratégias de marketing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Card 
              key={tool.id} 
              className="bg-atlas-background/50 border-white/10 hover:bg-atlas-background/70 transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-md bg-${tool.color}-500/10`}>
                    {tool.icon}
                  </div>
                  <CardTitle className="text-lg text-white">{tool.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-atlas-neutral">{tool.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
                  onClick={() => handleToolClick(tool.title)}
                >
                  Acessar ferramenta
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
