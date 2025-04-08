import React from "react";
import {
  Calculator,
  FileCheck,
  Sparkles,
  Calendar,
  BarChart,
  Target,
  Users,
  Mail,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  isNew?: boolean;
  isPremium?: boolean;
  documentPath: string;
}

export const ToolsContent: React.FC = () => {
  const isMobile = useIsMobile();

  const tools: Tool[] = [
    {
      id: "roi-calculator",
      title: "Calculadora de ROI",
      description:
        "Calcule o retorno sobre investimento das suas campanhas de marketing.",
      icon: <Calculator className="h-6 w-6" />,
      category: "Análise",
      isPremium: true,
      documentPath: "/document/exemplo-roi",
    },
    {
      id: "marketing-checklist",
      title: "Checklist de Marketing",
      description:
        "Verifique se sua estratégia de marketing cobre todos os pontos essenciais.",
      icon: <FileCheck className="h-6 w-6" />,
      category: "Planejamento",
      documentPath: "/document/exemplo-content-plan",
    },
    {
      id: "ai-idea-generator",
      title: "Gerador de Ideias com IA",
      description:
        "Use inteligência artificial para gerar ideias criativas de marketing.",
      icon: <Sparkles className="h-6 w-6" />,
      category: "Criação",
      isNew: true,
      documentPath: "/ai",
    },
    {
      id: "content-planner",
      title: "Planejador de Conteúdo",
      description: "Organize seu calendário editorial e planeje publicações.",
      icon: <Calendar className="h-6 w-6" />,
      category: "Conteúdo",
      documentPath: "/document/exemplo-content-plan",
    },
    {
      id: "competitor-analysis",
      title: "Análise de Concorrentes",
      description:
        "Compare sua estratégia com a dos principais concorrentes do setor.",
      icon: <BarChart className="h-6 w-6" />,
      category: "Análise",
      isPremium: true,
      documentPath: "/document/exemplo-swot",
    },
    {
      id: "audience-targeting",
      title: "Segmentação de Público",
      description:
        "Defina e refine seu público-alvo com base em dados demográficos e comportamentais.",
      icon: <Target className="h-6 w-6" />,
      category: "Estratégia",
      documentPath: "/document/exemplo-branding",
    },
    {
      id: "persona-creator",
      title: "Criador de Personas",
      description:
        "Crie personas detalhadas para orientar suas estratégias de marketing.",
      icon: <Users className="h-6 w-6" />,
      category: "Estratégia",
      documentPath: "/document/exemplo-branding",
    },
    {
      id: "email-templates",
      title: "Templates de Email",
      description:
        "Acesse modelos prontos para suas campanhas de email marketing.",
      icon: <Mail className="h-6 w-6" />,
      category: "Conteúdo",
      documentPath: "/document/exemplo-email",
    },
    {
      id: "social-caption-generator",
      title: "Gerador de Legendas",
      description:
        "Crie legendas impactantes para suas publicações em redes sociais.",
      icon: <MessageCircle className="h-6 w-6" />,
      category: "Conteúdo",
      isNew: true,
      documentPath: "/document/exemplo-email",
    },
  ];

  const categories = Array.from(new Set(tools.map((tool) => tool.category)));

  return (
    <div className="min-h-screen bg-atlas-background text-white p-4 md:p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Ferramentas de Marketing
        </h1>
        <p className="text-atlas-neutral">
          Utilize nossas ferramentas especializadas para impulsionar sua
          estratégia de marketing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {tools.map((tool) => (
          <Card
            key={tool.id}
            className="bg-atlas-background/50 border border-white/10 hover:border-atlas-highlight/50 transition-all overflow-hidden"
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="p-2 rounded-md bg-atlas-highlight/10 text-atlas-highlight">
                  {tool.icon}
                </div>
                <div className="flex gap-2">
                  {tool.isNew && (
                    <Badge className="bg-atlas-highlight text-black">
                      Novo
                    </Badge>
                  )}
                  {tool.isPremium && (
                    <Badge className="bg-atlas-secondary/80">Premium</Badge>
                  )}
                </div>
              </div>
              <CardTitle className="mt-3 text-lg text-white">
                {tool.title}
              </CardTitle>
              <Badge
                variant="outline"
                className="w-fit mt-1 text-xs text-atlas-highlight border-atlas-highlight/30"
              >
                {tool.category}
              </Badge>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-atlas-neutral">
                {tool.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-white/10 hover:bg-white/20 border border-white/10"
                asChild
              >
                <Link
                  to={tool.documentPath}
                  className="flex items-center justify-center"
                >
                  <span>Acessar Ferramenta</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
