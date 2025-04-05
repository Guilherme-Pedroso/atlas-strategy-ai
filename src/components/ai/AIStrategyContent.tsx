
import React, { useState, useRef, useEffect } from "react";
import { AIMessage } from "@/components/ai/AIMessage";
import { AIPromptSuggestion } from "@/components/ai/AIPromptSuggestion";
import { AISidebar } from "@/components/ai/AISidebar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Sparkles, 
  Send, 
  Paperclip, 
  X, 
  FileText, 
  Image as ImageIcon, 
  Clock, 
  ChevronRight,
  History 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

type Message = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
};

type UploadedFile = {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
};

export const AIStrategyContent = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      content: "Olá João, como posso ajudar com sua estratégia hoje? Estou conectado aos seus documentos e contexto de negócio para oferecer suporte personalizado.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [showUploadPanel, setShowUploadPanel] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const { toast } = useToast();
  
  // Auto scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim() && uploadedFiles.length === 0) return;
    
    // Add user message
    const userMessage: Message = {
      id: `user_${Date.now()}`,
      content: prompt,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setPrompt("");
    setIsLoading(true);
    
    // Prepare message with any file attachments
    let messageWithAttachments = prompt;
    if (uploadedFiles.length > 0) {
      const filesList = uploadedFiles.map(file => `- ${file.name}`).join("\n");
      messageWithAttachments += `\n\nArquivos anexados:\n${filesList}`;
    }
    
    // Clear file uploads after sending
    setUploadedFiles([]);
    setShowUploadPanel(false);
    
    // Mock AI response (this would be an API call in production)
    setTimeout(() => {
      const responses = [
        "Analisei seus dados e identifiquei oportunidades de otimização em sua estratégia de conteúdo. Recomendo focar em formatos mais interativos como vídeos curtos e infográficos para aumentar o engajamento.",
        "Com base no documento que você compartilhou, vejo que seu público-alvo principal são profissionais de marketing entre 25-45 anos. Para este segmento, sugiro conteúdos mais técnicos e focados em ROI.",
        "Sua matriz SWOT mostra forças significativas em expertise técnica, mas oportunidades inexploradas em parcerias estratégicas. Recomendo buscar colaborações com influenciadores do seu setor para ampliar alcance."
      ];
      
      const aiResponse: Message = {
        id: `ai_${Date.now()}`,
        content: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 2000);
  };
  
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    
    const newFiles: UploadedFile[] = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileType = file.type.startsWith('image/') ? 'image' : 'document';
      
      newFiles.push({
        id: `file_${Date.now()}_${i}`,
        name: file.name,
        type: fileType,
        size: file.size,
        url: URL.createObjectURL(file)
      });
    }
    
    setUploadedFiles(prev => [...prev, ...newFiles]);
    setShowUploadPanel(true);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    
    toast({
      title: "Arquivo anexado",
      description: `${newFiles.length > 1 ? `${newFiles.length} arquivos anexados` : newFiles[0].name}`,
    });
  };
  
  const removeFile = (id: string) => {
    setUploadedFiles(prevFiles => prevFiles.filter(file => file.id !== id));
    if (uploadedFiles.length <= 1) {
      setShowUploadPanel(false);
    }
  };
  
  const formatFileSize = (bytes: number) => {
    const kb = bytes / 1024;
    if (kb < 1024) {
      return `${kb.toFixed(2)} KB`;
    }
    return `${(kb / 1024).toFixed(2)} MB`;
  };
  
  const getQuickPromptSuggestions = () => {
    return [
      "Crie um post com foco em vendas para nosso produto principal",
      "Revise minha matriz SWOT e sugira melhorias",
      "Sugira um funil de lançamento para nosso novo serviço",
      "Analise o desempenho da nossa última campanha"
    ];
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] md:h-screen overflow-hidden bg-atlas-background">
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Chat container with scrollable area */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 md:p-6"
          >
            {/* Welcome card */}
            <div className="max-w-3xl mx-auto mb-8 bg-atlas-background/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-atlas-highlight/20">
                  <Sparkles className="h-6 w-6 text-atlas-highlight" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">IA Estratégica</h2>
                  <p className="text-atlas-neutral">Seu co-piloto de marketing</p>
                </div>
              </div>
              
              <p className="text-white mb-4">
                Olá <span className="font-semibold">João</span>, como posso te ajudar hoje?
              </p>
              
              <div className="flex flex-wrap gap-2">
                {getQuickPromptSuggestions().map((suggestion, index) => (
                  <AIPromptSuggestion 
                    key={index}
                    text={suggestion}
                    onClick={() => {
                      setPrompt(suggestion);
                      if (chatContainerRef.current) {
                        chatContainerRef.current.scrollTo({
                          top: chatContainerRef.current.scrollHeight,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  />
                ))}
              </div>
              
              {/* Histórico de conversas button */}
              <Button
                variant="outline"
                className="mt-4 bg-transparent border-white/10 text-atlas-neutral hover:bg-white/5 hover:text-white"
                onClick={() => navigate("/ai-history")}
              >
                <History className="h-4 w-4 mr-2" />
                Histórico de conversas
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            
            {/* Messages */}
            <div className="max-w-3xl mx-auto space-y-6">
              {messages.map((message) => (
                <AIMessage 
                  key={message.id}
                  content={message.content}
                  isUser={message.isUser}
                  timestamp={message.timestamp}
                />
              ))}
              {isLoading && (
                <div className="flex justify-center py-4">
                  <div className="flex items-center justify-center gap-2 text-atlas-neutral">
                    <div className="animate-pulse flex items-center">
                      <div className="h-2 w-2 bg-atlas-highlight rounded-full mr-1"></div>
                      <div className="h-2 w-2 bg-atlas-highlight rounded-full mr-1 animation-delay-200"></div>
                      <div className="h-2 w-2 bg-atlas-highlight rounded-full animation-delay-400"></div>
                    </div>
                    <span>Gerando resposta...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* File upload panel */}
          {showUploadPanel && (
            <div className="px-4 md:px-6 py-3 border-t border-white/10 bg-atlas-background/80">
              <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium text-white">Arquivos anexados</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => {
                      setUploadedFiles([]);
                      setShowUploadPanel(false);
                    }}
                    className="text-atlas-neutral hover:text-white h-7 px-2"
                  >
                    Limpar todos
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {uploadedFiles.map((file) => (
                    <div 
                      key={file.id}
                      className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-md py-1 px-2"
                    >
                      {file.type === 'image' ? (
                        <ImageIcon className="h-4 w-4 text-atlas-highlight" />
                      ) : (
                        <FileText className="h-4 w-4 text-atlas-secondary" />
                      )}
                      <span className="text-sm text-white truncate max-w-[150px]">{file.name}</span>
                      <span className="text-xs text-atlas-neutral">{formatFileSize(file.size)}</span>
                      <button 
                        onClick={() => removeFile(file.id)}
                        className="text-atlas-neutral hover:text-white"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Input area */}
          <div className="px-4 md:px-6 py-4 border-t border-white/10 bg-atlas-background">
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
              <div className="flex items-end gap-2">
                <div className="relative flex-1">
                  <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Digite sua mensagem para a IA..."
                    className="min-h-[60px] max-h-[200px] py-3 pr-10 bg-atlas-background/50 border-white/10 rounded-md resize-none focus-visible:ring-atlas-highlight"
                    disabled={isLoading}
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    multiple
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={handleUploadClick}
                    className="absolute bottom-2 right-2 text-atlas-neutral hover:text-white"
                    disabled={isLoading}
                  >
                    <Paperclip className="h-5 w-5" />
                  </Button>
                </div>
                <Button
                  type="submit"
                  className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90 h-10 w-10 p-0 rounded-full flex items-center justify-center"
                  disabled={isLoading || (!prompt.trim() && uploadedFiles.length === 0)}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex justify-center mt-2">
                <p className="text-xs text-atlas-neutral flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  Essa IA é treinada com o seu contexto e evolui conforme você usa a plataforma
                </p>
              </div>
            </form>
          </div>
        </div>
        
        {/* Sidebar */}
        <AISidebar />
      </div>
    </div>
  );
};
