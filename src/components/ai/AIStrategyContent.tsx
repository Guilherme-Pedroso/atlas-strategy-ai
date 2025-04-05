
import React, { useState, useRef, useEffect } from "react";
import { 
  Send, 
  Mic, 
  ChevronRight, 
  Zap, 
  FileText, 
  MessageSquare, 
  Copy, 
  ExternalLink, 
  Edit,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { AIMessage } from "@/components/ai/AIMessage";
import { AIPromptSuggestion } from "@/components/ai/AIPromptSuggestion";
import { AISidebar } from "@/components/ai/AISidebar";

export const AIStrategyContent = () => {
  const [messages, setMessages] = useState<Array<{
    id: string;
    content: string;
    role: "user" | "assistant";
    timestamp: Date;
  }>>([
    {
      id: "welcome",
      content: "Olá Guilherme, como posso te ajudar hoje com sua estratégia de marketing?",
      role: "assistant",
      timestamp: new Date(),
    }
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const promptSuggestions = [
    "Crie um post com foco em vendas",
    "Revise minha matriz SWOT",
    "Sugira um funil de lançamento"
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const newUserMessage = {
      id: Date.now().toString(),
      content: inputValue,
      role: "user" as const,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue("");
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responseContent = generateAIResponse(inputValue);
      
      const newAIMessage = {
        id: (Date.now() + 1).toString(),
        content: responseContent,
        role: "assistant" as const,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, newAIMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handlePromptSuggestion = (suggestion: string) => {
    setInputValue(suggestion);
    handleSendMessage();
  };

  const generateAIResponse = (userInput: string): string => {
    if (userInput.toLowerCase().includes("post") || userInput.toLowerCase().includes("vendas")) {
      return `
        **Aqui está um modelo de post com foco em vendas para sua empresa:**

        🔥 **Headline:** Transforme sua estratégia digital em resultados reais

        📌 **Corpo:**
        Cansado de investir em marketing sem ver retorno?
        
        Nossa solução já ajudou mais de 200 empresas a aumentarem suas vendas em até 40% no primeiro trimestre.
        
        ✅ Estratégia personalizada
        ✅ Dashboard de resultados em tempo real
        ✅ Suporte especializado

        🔗 Conheça nossos casos de sucesso no link da bio

        **Hashtags sugeridas:**
        #MarketingDigital #Resultados #VendasOnline

        Quer adaptar este conteúdo para sua marca específica?
      `;
    } else if (userInput.toLowerCase().includes("swot") || userInput.toLowerCase().includes("matriz")) {
      return `
        **Revisão de matriz SWOT para seu negócio:**

        Para revisar adequadamente sua matriz SWOT, precisamos analisar os quatro quadrantes:

        **Forças (Strengths):**
        - Verifique se você listou capacidades internas tangíveis
        - Pense em diferenciais competitivos reais
        - Considere aspectos como: equipe, tecnologia proprietária, base de clientes

        **Fraquezas (Weaknesses):**
        - Seja honesto sobre limitações internas
        - Identifique gargalos operacionais
        - Avalie: recursos limitados, processos ineficientes, gaps de conhecimento

        **Oportunidades (Opportunities):**
        - Foque em fatores externos favoráveis
        - Observe tendências de mercado emergentes
        - Exemplos: novos segmentos, mudanças regulatórias, fraquezas dos concorrentes

        **Ameaças (Threats):**
        - Mapeie riscos externos reais
        - Considere aspectos macro e microeconômicos
        - Pontos críticos: novos entrantes, mudanças tecnológicas, alterações no comportamento do consumidor

        Gostaria que eu ajudasse a preencher algum quadrante específico com base no seu contexto?
      `;
    } else if (userInput.toLowerCase().includes("funil") || userInput.toLowerCase().includes("lançamento")) {
      return `
        **Sugestão de funil de lançamento em 5 etapas:**

        **1. Aquecimento (2-3 semanas antes)**
        - Conteúdo educativo sobre a dor/problema
        - Histórias de casos similares
        - Pesquisa de validação com a audiência
        - Lista de espera com bônus especial

        **2. Pré-lançamento (1 semana antes)**
        - Teaser do produto/serviço
        - Mini-treinamentos gratuitos
        - Depoimentos de beta-testers
        - Countdown para abertura

        **3. Lançamento (abertura)**
        - Vídeo/live de apresentação completa
        - Página de vendas detalhada
        - FAQ respondendo objeções
        - Bônus de ação rápida (48h)

        **4. Engajamento (durante o carrinho aberto)**
        - Case studies aprofundados
        - Workshops ao vivo
        - Sessões de perguntas e respostas
        - Demonstrações do produto/serviço

        **5. Fechamento (últimos 2 dias)**
        - Última chance com senso de urgência
        - Recapitulação de benefícios e garantias
        - Depoimentos de resultados
        - Encerramento com próximos passos

        Gostaria de adaptar esse funil para seu produto específico ou se aprofundar em alguma etapa?
      `;
    } else {
      return `
        Obrigado por sua mensagem. Como seu assistente de marketing estratégico, estou aqui para ajudar com:

        - Criação de conteúdo para redes sociais
        - Planejamento de campanhas
        - Revisão de estratégias de marketing
        - Otimização de funis de vendas
        - Análise de métricas e KPIs
        - Pesquisa de mercado e concorrência

        Por favor, me diga mais sobre o que você precisa, e poderei fornecer sugestões específicas para sua estratégia.
      `;
    }
  };

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast({
          title: "Copiado para a área de transferência",
          description: "O conteúdo foi copiado com sucesso!",
        });
      })
      .catch((err) => {
        console.error("Erro ao copiar texto: ", err);
      });
  };

  const handleInsertIntoDocument = () => {
    toast({
      title: "Inserido no documento",
      description: "O conteúdo foi adicionado ao documento aberto.",
    });
  };

  const handleEditManually = () => {
    toast({
      title: "Modo de edição ativado",
      description: "Você pode editar o conteúdo manualmente agora.",
    });
  };

  return (
    <div className="flex min-h-screen bg-atlas-background w-full">
      <div className="flex-1 flex flex-col relative">
        {/* Main Chat Area */}
        <div className="flex-1 overflow-auto p-4 md:p-6 pb-24">
          <div className="max-w-4xl mx-auto">
            {/* Welcome Block */}
            <div className="bg-atlas-background/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8 shadow-lg">
              <h1 className="text-2xl font-bold text-white mb-4">IA Estratégica</h1>
              <p className="text-atlas-neutral mb-6">
                Converse com um assistente especializado em marketing que entende seu contexto e pode ajudar com estratégias, conteúdo e análises.
              </p>
              
              <h3 className="text-white font-medium mb-3">Sugestões rápidas:</h3>
              <div className="flex flex-wrap gap-2">
                {promptSuggestions.map((suggestion, index) => (
                  <AIPromptSuggestion 
                    key={index}
                    text={suggestion}
                    onClick={() => handlePromptSuggestion(suggestion)}
                  />
                ))}
              </div>
            </div>
            
            {/* Messages */}
            <div className="space-y-6 mb-20">
              {messages.map((message) => (
                <AIMessage
                  key={message.id}
                  message={message}
                  onCopy={handleCopyToClipboard}
                  onInsertIntoDocument={handleInsertIntoDocument}
                  onEditManually={handleEditManually}
                />
              ))}
              
              {isLoading && (
                <div className="flex items-center space-x-3 text-atlas-neutral">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-atlas-highlight animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-atlas-highlight animate-pulse delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-atlas-highlight animate-pulse delay-150"></div>
                  </div>
                  <span>Pensando...</span>
                </div>
              )}
              
              <div ref={chatEndRef} />
            </div>
          </div>
        </div>
        
        {/* Input Area - Fixed at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-atlas-background/80 backdrop-blur-md border-t border-white/10 p-4">
          <div className="max-w-4xl mx-auto flex">
            <div className="relative flex-1 rounded-lg border border-white/20 bg-atlas-background/50 overflow-hidden">
              <textarea
                className="w-full bg-transparent px-4 py-3 h-12 max-h-32 text-white resize-none focus:outline-none"
                placeholder="Faça uma pergunta ou peça ajuda com sua estratégia..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                rows={1}
                style={{ 
                  minHeight: '48px', 
                  height: 'auto',
                  maxHeight: '160px'
                }}
              />
              <div className="absolute right-2 bottom-2 flex space-x-1">
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="text-atlas-neutral hover:text-white opacity-50"
                  disabled
                >
                  <Mic className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  onClick={handleSendMessage}
                  className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-atlas-neutral/70 mt-2 text-center">
              Essa IA é treinada com o seu contexto e evolui conforme você usa a plataforma.
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Sidebar - Only visible on desktop */}
      <AISidebar />
    </div>
  );
};
