
import React, { useState } from "react";
import { 
  Clock, 
  MessageSquare,
  ChevronRight,
  Sparkles,
  Plus,
  Search,
  Trash2,
  MoreVertical,
  BarChart,
  PenTool,
  Layers,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ChatHistory = {
  id: string;
  title: string;
  timestamp: Date;
  messageCount: number;
};

export const AISidebar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([
    {
      id: "chat-1",
      title: "Estratégia de lançamento",
      timestamp: new Date(Date.now() - 1000 * 60 * 60),
      messageCount: 8
    },
    {
      id: "chat-2",
      title: "Análise de concorrentes",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      messageCount: 14
    },
    {
      id: "chat-3",
      title: "Funil de vendas",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
      messageCount: 10
    }
  ]);
  
  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);
    
    if (diffHours < 24) {
      if (diffHours < 1) {
        return "Agora há pouco";
      }
      return `${Math.floor(diffHours)}h atrás`;
    } else if (diffHours < 48) {
      return "Ontem";
    } else {
      return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit"
      });
    }
  };
  
  const handleOpenChat = (chatId: string) => {
    toast({
      title: "Abrindo conversa",
      description: "Carregando histórico da conversa...",
    });
  };
  
  const handleDeleteChat = (chatId: string) => {
    setChatHistory(prev => prev.filter(chat => chat.id !== chatId));
    toast({
      title: "Conversa excluída",
      description: "A conversa foi removida do histórico.",
    });
  };
  
  const handleNewChat = () => {
    navigate("/ai");
    toast({
      title: "Nova conversa",
      description: "Uma nova conversa foi iniciada.",
    });
  };
  
  const handleQuickAction = (action: string) => {
    toast({
      title: "Ação iniciada",
      description: `A ação "${action}" foi iniciada com sucesso.`,
    });
  };
  
  return (
    <div className="w-80 border-l border-white/10 bg-atlas-background/30 backdrop-blur-sm p-4 hidden lg:block overflow-hidden flex flex-col h-full">
      {/* Chat History Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-white font-medium text-sm">Histórico de conversas</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-atlas-highlight hover:bg-white/5 h-7 px-2"
            onClick={handleNewChat}
          >
            <Plus className="h-4 w-4 mr-1" />
            Nova
          </Button>
        </div>
        
        <div className="relative mb-3">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-atlas-neutral" />
          <input
            type="search"
            placeholder="Buscar conversas..."
            className="w-full pl-8 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-white placeholder:text-atlas-neutral focus:outline-none focus:ring-1 focus:ring-atlas-highlight"
          />
        </div>
        
        <ScrollArea className="h-[calc(100vh-300px)]">
          {chatHistory.length > 0 ? (
            <div className="space-y-2">
              {chatHistory.map((chat) => (
                <Card 
                  key={chat.id} 
                  className="bg-atlas-background/50 border-white/10 hover:bg-atlas-background/70 transition-colors"
                >
                  <CardContent className="p-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 p-1.5 bg-atlas-highlight/10 rounded-md flex-shrink-0">
                          <MessageSquare className="h-3.5 w-3.5 text-atlas-highlight" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-white line-clamp-1">{chat.title}</h4>
                          <div className="flex items-center text-xs text-atlas-neutral mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{formatTimestamp(chat.timestamp)}</span>
                            <span className="mx-1">•</span>
                            <span>{chat.messageCount} msgs</span>
                          </div>
                        </div>
                      </div>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-7 w-7 rounded-full hover:bg-white/10 text-atlas-neutral hover:text-white"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent 
                          className="bg-atlas-background border-white/10 text-white" 
                          align="end"
                        >
                          <DropdownMenuItem 
                            className="cursor-pointer hover:bg-white/5"
                            onClick={() => handleOpenChat(chat.id)}
                          >
                            Abrir conversa
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            className="cursor-pointer text-red-400 hover:bg-white/5 hover:text-red-400"
                            onClick={() => handleDeleteChat(chat.id)}
                          >
                            Excluir
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <MessageSquare className="h-10 w-10 text-atlas-neutral mx-auto mb-2 opacity-50" />
              <p className="text-atlas-neutral text-sm">
                Sem conversas recentes
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="mt-3 border-white/10 text-white hover:bg-white/5"
                onClick={handleNewChat}
              >
                <Plus className="h-4 w-4 mr-1" />
                Iniciar nova conversa
              </Button>
            </div>
          )}
        </ScrollArea>
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
