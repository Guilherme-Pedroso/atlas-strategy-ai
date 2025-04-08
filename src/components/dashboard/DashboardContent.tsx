
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  TrendingUp, 
  Users, 
  FileText, 
  Sparkles, 
  Calendar,
  PlusCircle,
  HelpCircle,
  ChevronRight,
  Clock
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const DashboardContent = () => {
  const [aiTokensUsed, setAiTokensUsed] = useState(800);
  const totalAiTokens = 1000;
  const aiUsagePercentage = (aiTokensUsed / totalAiTokens) * 100;
  const resetDate = new Date();
  resetDate.setDate(resetDate.getDate() + 15); // Reset in 15 days
  const navigate = useNavigate();
  
  const formatResetDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };
  
  // Helper function to determine progress bar color
  const getProgressColor = (percentage: number) => {
    if (percentage < 50) return "bg-green-300";
    if (percentage < 80) return "bg-green-300";
    return "bg-green-500";
  };
  
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Bem-vindo ao seu Dashboard</h1>
          <p className="text-atlas-neutral">
            Acompanhe suas métricas, documentos recentes e recomendações personalizadas.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-atlas-background/50 border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-white flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                Crescimento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">+23%</div>
              <p className="text-atlas-neutral text-sm">vs. mês anterior</p>
            </CardContent>
          </Card>
          
          <Card className="bg-atlas-background/50 border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-white flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-500" />
                Novos Leads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">147</div>
              <p className="text-atlas-neutral text-sm">neste mês</p>
            </CardContent>
          </Card>
          
          <Card className="bg-atlas-background/50 border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-white flex items-center">
                <BarChart className="h-5 w-5 mr-2 text-purple-500" />
                Engajamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">5.2</div>
              <p className="text-atlas-neutral text-sm">média por cliente</p>
            </CardContent>
          </Card>
        </div> */}

        {/* AI Usage Card */}
        <Card className="bg-atlas-background/50 border-white/10 mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-white flex items-center justify-between">
              <div className="flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-atlas-highlight" />
                Uso de IA Estratégica
                <Button variant="ghost" size="icon" className="ml-1 text-atlas-neutral hover:text-black">
                  <HelpCircle className="h-4 w-4" />
                </Button>
              </div>
              <Button 
                className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
                onClick={() => navigate("/plans")}
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Aumentar limite
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 items-center">
                  <span className="text-white text-sm">Tokens utilizados este mês</span>
                  <span className="text-atlas-neutral text-sm font-mono">{aiTokensUsed}/{totalAiTokens}</span>
                </div>
                <Progress
                  value={aiUsagePercentage}
                  className={`h-2 bg-atlas-background ${getProgressColor(aiUsagePercentage)}`}
                />
              </div>
              
              <div className="flex justify-between text-sm">
                <div className="flex items-center text-atlas-neutral">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Limite será resetado em: <b><span className="text-white">{formatResetDate(resetDate)}</span></b></span>
                </div>
                <div className="flex items-center text-atlas-secondary hover:underline cursor-pointer">
                  <span>Ver histórico de uso</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="bg-atlas-background/50 border-white/10 h-full">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-atlas-secondary" />
                    Documentos Recentes
                  </div>
                  <Button 
                    variant="outline"
                    className="bg-transparent border-white/10 text-atlas-neutral hover:text-black"
                    onClick={() => window.location.href = "/documents"}
                  >
                    Ver todos
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Matriz SWOT - Marketing Digital", date: "Editado 2h atrás", icon: "📊" },
                    { title: "Plano de Conteúdo - Q3 2023", date: "Editado ontem", icon: "📝" },
                    { title: "Pitch para Investidores", date: "Criado 3 dias atrás", icon: "🚀" },
                  ].map((doc, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-3 rounded-md border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                      onClick={() => window.location.href = "/documents"}
                    >
                      <div className="mr-3 text-2xl">{doc.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium">{doc.title}</h3>
                        <p className="text-atlas-neutral text-sm">{doc.date}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-atlas-neutral" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-atlas-background/50 border-white/10 h-full">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-white flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-atlas-cta" />
                  Próximas Atividades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Reunião de Estratégia", time: "Hoje, 14:00", type: "meeting" },
                    { title: "Publicar Post no Instagram", time: "Amanhã, 10:00", type: "task" },
                    { title: "Lançamento da Campanha", time: "24/07, 09:00", type: "launch" },
                  ].map((event, index) => (
                    <div key={index} className="flex items-start p-3 rounded-md border border-white/5 bg-white/5">
                      <div className={`w-3 h-3 rounded-full mt-1.5 mr-3 ${
                        event.type === 'meeting' ? 'bg-blue-500' :
                        event.type === 'task' ? 'bg-green-500' : 'bg-purple-500'
                      }`} />
                      <div>
                        <h3 className="text-white font-medium">{event.title}</h3>
                        <p className="text-atlas-neutral text-sm">{event.time}</p>
                      </div>
                    </div>
                  ))}
                  
                  <Button 
                    variant="outline" 
                    className="w-full bg-transparent border-white/10 text-atlas-neutral hover:text-black"
                  >
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Adicionar atividade
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
