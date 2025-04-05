
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, 
  Search, 
  Clock, 
  Trash2, 
  Edit2,
  ChevronRight,
  Plus
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

type Conversation = {
  id: string;
  title: string;
  preview: string;
  timestamp: Date;
  messageCount: number;
};

export const AIHistoryContent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: "conv-1",
      title: "Estratégia de lançamento",
      preview: "Como desenvolver uma estratégia de lançamento para produto SaaS?",
      timestamp: new Date(Date.now() - 3600000 * 2),
      messageCount: 8
    },
    {
      id: "conv-2",
      title: "Análise de concorrentes",
      preview: "Preciso fazer uma análise completa dos concorrentes do segmento de...",
      timestamp: new Date(Date.now() - 3600000 * 24),
      messageCount: 14
    },
    {
      id: "conv-3",
      title: "Funil de vendas",
      preview: "Como estruturar um funil de vendas eficiente para e-commerce?",
      timestamp: new Date(Date.now() - 3600000 * 48),
      messageCount: 10
    },
    {
      id: "conv-4",
      title: "Planejamento de conteúdo",
      preview: "Me ajude a criar um planejamento de conteúdo para o próximo trimestre...",
      timestamp: new Date(Date.now() - 3600000 * 72),
      messageCount: 12
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
  
  const handleEditTitle = (conversation: Conversation) => {
    setEditingId(conversation.id);
    setEditTitle(conversation.title);
  };
  
  const saveEditTitle = () => {
    if (editingId && editTitle.trim()) {
      setConversations(prev => 
        prev.map(conv => 
          conv.id === editingId 
            ? { ...conv, title: editTitle.trim() } 
            : conv
        )
      );
      toast({
        title: "Título atualizado",
        description: "O título da conversa foi atualizado com sucesso."
      });
    }
    setEditingId(null);
  };
  
  const deleteConversation = (id: string) => {
    setConversations(prev => prev.filter(conv => conv.id !== id));
    toast({
      title: "Conversa excluída",
      description: "A conversa foi removida do histórico."
    });
  };
  
  const filteredConversations = conversations.filter(conv => 
    conv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-atlas-background p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Histórico de conversas</h1>
            <p className="text-atlas-neutral mt-1">
              Acesse suas conversas anteriores com a IA estratégica
            </p>
          </div>
          <Button 
            className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
            onClick={() => navigate("/ai")}
          >
            <Plus className="h-4 w-4 mr-2" />
            Nova conversa
          </Button>
        </div>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-atlas-neutral" />
          <Input 
            className="pl-10 bg-atlas-background/50 border-white/10 text-white placeholder:text-atlas-neutral h-12"
            placeholder="Buscar nas conversas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredConversations.length > 0 ? (
          <div className="space-y-4">
            {filteredConversations.map(conversation => (
              <Card 
                key={conversation.id} 
                className="bg-atlas-background/50 border-white/10 hover:bg-atlas-background/70 transition-colors"
              >
                <div className="p-4 flex items-start gap-4">
                  <div className="mt-1 p-2 bg-atlas-highlight/10 rounded-md flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-atlas-highlight" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      {editingId === conversation.id ? (
                        <div className="flex gap-2 w-full">
                          <Input
                            className="bg-atlas-background/50 border-white/10 text-white h-8"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            autoFocus
                            onKeyDown={(e) => e.key === 'Enter' && saveEditTitle()}
                          />
                          <Button size="sm" onClick={saveEditTitle}>Salvar</Button>
                        </div>
                      ) : (
                        <h3 className="text-lg font-medium text-white truncate pr-4">
                          {conversation.title}
                        </h3>
                      )}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full hover:bg-white/10 text-atlas-neutral hover:text-white"
                          onClick={() => handleEditTitle(conversation)}
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-full hover:bg-white/10 text-atlas-neutral hover:text-white"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-atlas-background border-white/10 text-white">
                            <DialogHeader>
                              <DialogTitle>Excluir conversa</DialogTitle>
                            </DialogHeader>
                            <div className="py-3">
                              <p>Tem certeza que deseja excluir esta conversa? Esta ação não pode ser desfeita.</p>
                            </div>
                            <DialogFooter>
                              <Button 
                                variant="outline" 
                                className="bg-transparent border-white/10 text-white hover:bg-white/5"
                                onClick={() => {}}
                              >
                                Cancelar
                              </Button>
                              <Button 
                                variant="destructive"
                                onClick={() => deleteConversation(conversation.id)}
                              >
                                Excluir
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    
                    <p className="text-atlas-neutral mt-1 mb-3 text-sm line-clamp-2">
                      {conversation.preview}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-atlas-neutral">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        <span>{formatTimestamp(conversation.timestamp)}</span>
                        <span className="mx-2">•</span>
                        <span>{conversation.messageCount} mensagens</span>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-atlas-highlight hover:text-atlas-highlight/90 hover:bg-atlas-highlight/10"
                        onClick={() => navigate("/ai")}
                      >
                        Continuar
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-atlas-background/50 mb-4">
              <MessageSquare className="h-8 w-8 text-atlas-neutral" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Nenhuma conversa encontrada</h3>
            <p className="text-atlas-neutral max-w-md mx-auto mb-6">
              {searchQuery 
                ? `Não encontramos nenhuma conversa com o termo "${searchQuery}".` 
                : "Você ainda não iniciou nenhuma conversa com a IA estratégica."}
            </p>
            <Button
              className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
              onClick={() => navigate("/ai")}
            >
              <Plus className="h-4 w-4 mr-2" />
              Iniciar nova conversa
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
