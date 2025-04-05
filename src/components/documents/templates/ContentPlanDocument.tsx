
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const ContentPlanDocument = () => {
  const { toast } = useToast();
  
  interface ContentItem {
    id: string;
    type: string;
    channel: string;
    objective: string;
    content: string;
    cta: string;
  }
  
  const initialWeeklyPlan: ContentItem[] = [
    { id: '1', type: '', channel: '', objective: '', content: '', cta: '' },
    { id: '2', type: '', channel: '', objective: '', content: '', cta: '' },
    { id: '3', type: '', channel: '', objective: '', content: '', cta: '' },
    { id: '4', type: '', channel: '', objective: '', content: '', cta: '' },
  ];
  
  const [weeklyPlan, setWeeklyPlan] = useState<ContentItem[]>(initialWeeklyPlan);
  const [funnelDescriptions, setFunnelDescriptions] = useState({
    tofu: "",
    mofu: "",
    bofu: ""
  });
  
  const handleContentItemChange = (id: string, field: keyof ContentItem, value: string) => {
    setWeeklyPlan(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };
  
  const handleFunnelDescriptionChange = (stage: keyof typeof funnelDescriptions, value: string) => {
    setFunnelDescriptions(prev => ({ ...prev, [stage]: value }));
  };
  
  const addContentItem = () => {
    const newId = (weeklyPlan.length + 1).toString();
    setWeeklyPlan(prev => [...prev, { id: newId, type: '', channel: '', objective: '', content: '', cta: '' }]);
  };
  
  const handleAIFill = (stage: keyof typeof funnelDescriptions) => {
    toast({
      title: "IA processando...",
      description: `Gerando descrição para ${stage.toUpperCase()}...`,
    });
    
    setTimeout(() => {
      const aiSuggestions: Record<string, string> = {
        tofu: "Conteúdo TOFU (Topo do Funil) visa atrair novos potenciais clientes que podem nem saber que têm um problema. Foque em conteúdo educacional, blog posts informativos, infográficos e vídeos curtos que abordam problemas comuns. Esse conteúdo deve ser amplamente compartilhável e não focado em vendas.",
        mofu: "Conteúdo MOFU (Meio do Funil) é direcionado a pessoas que já reconhecem seu problema e estão pesquisando soluções. Ofereça webinars, guias detalhados, estudos de caso e comparativos. Esse conteúdo deve mostrar sua expertise e como sua solução resolve o problema específico.",
        bofu: "Conteúdo BOFU (Fundo do Funil) é para leads qualificados prontos para comprar. Inclua avaliações gratuitas, demonstrações personalizadas, ofertas especiais e depoimentos detalhados. Esse conteúdo deve eliminar objeções finais e facilitar a decisão de compra."
      };
      
      handleFunnelDescriptionChange(stage, aiSuggestions[stage]);
      
      toast({
        title: "Descrição gerada",
        description: "A IA preencheu a descrição do estágio do funil.",
      });
    }, 1500);
  };
  
  const handleContentAIFill = (id: string) => {
    const item = weeklyPlan.find(item => item.id === id);
    if (!item || !item.type || !item.channel) {
      toast({
        title: "Dados insuficientes",
        description: "Preencha pelo menos o tipo de conteúdo e o canal antes de usar a IA.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "IA processando...",
      description: "Gerando sugestão de conteúdo...",
    });
    
    setTimeout(() => {
      // Find which item to fill
      const itemIndex = weeklyPlan.findIndex(item => item.id === id);
      if (itemIndex === -1) return;
      
      const currentItem = weeklyPlan[itemIndex];
      let objective = "";
      let content = "";
      let cta = "";
      
      // Generate based on type and channel
      if (currentItem.type === "tofu") {
        objective = "Aumentar conhecimento de marca e atrair novos visitantes";
        
        if (currentItem.channel === "instagram") {
          content = "Carrossel com 5 dicas para melhorar a estratégia de marketing digital com gráficos e estatísticas interessantes. Design clean com cores da marca.";
          cta = "Quer mais dicas como essas? Clique no link da bio para acessar nosso guia completo!";
        } else if (currentItem.channel === "blog") {
          content = "Artigo: '7 Tendências de Marketing Digital para Ficar de Olho em 2025' - Conteúdo educacional com exemplos práticos e referências a estudos recentes.";
          cta = "Inscreva-se na nossa newsletter para receber mais conteúdos exclusivos como este.";
        } else {
          content = "Vídeo curto explicativo sobre um problema comum do seu público-alvo, apresentando estatísticas surpreendentes e desmistificando conceitos.";
          cta = "Compartilhe com alguém que precisa dessa informação! Comente abaixo sua maior dúvida sobre o assunto.";
        }
      } 
      else if (currentItem.type === "mofu") {
        objective = "Nutrir leads e demonstrar expertise na solução";
        
        if (currentItem.channel === "instagram") {
          content = "Série de Stories mostrando um caso de sucesso com antes/depois. Inclua números reais e depoimento do cliente em vídeo curto.";
          cta = "Quer resultados como esses? Faça o teste gratuito da nossa ferramenta através do link na bio!";
        } else if (currentItem.channel === "email") {
          content = "Email com estudo de caso detalhado: 'Como a Empresa X aumentou em 43% suas conversões em apenas 2 meses' com passos detalhados da implementação.";
          cta = "Responda este email com 'QUERO' para agendar uma demonstração gratuita da nossa solução.";
        } else {
          content = "Webinar ao vivo com especialista da área explicando passo a passo como resolver um problema específico, com sessão de perguntas e respostas ao final.";
          cta = "Cadastre-se para nossa próxima masterclass gratuita e receba o ebook complementar!";
        }
      }
      else if (currentItem.type === "bofu") {
        objective = "Converter leads em clientes através de ofertas diretas";
        
        if (currentItem.channel === "instagram") {
          content = "Post anunciando promoção por tempo limitado com depoimento de cliente satisfeito e resultado específico alcançado com dados.";
          cta = "Oferta válida apenas até sexta-feira! Clique no link da bio e use o cupom PROMO20 para 20% de desconto.";
        } else if (currentItem.channel === "whatsapp") {
          content = "Mensagem personalizada para leads qualificados oferecendo uma demonstração exclusiva do produto com um consultor especializado.";
          cta = "Responda 'SIM' para agendar sua demonstração personalizada gratuita de 30 minutos com nosso consultor.";
        } else {
          content = "Landing page com oferta especial, incluindo garantia de satisfação, comparativo com concorrentes e depoimentos em vídeo.";
          cta = "Comece agora com 30% de desconto no plano anual + 3 bônus exclusivos!";
        }
      }
      
      // Update the state with new values
      const updatedPlan = [...weeklyPlan];
      updatedPlan[itemIndex] = {
        ...currentItem,
        objective,
        content,
        cta
      };
      
      setWeeklyPlan(updatedPlan);
      
      toast({
        title: "Conteúdo gerado",
        description: "A IA preencheu os campos baseados no tipo e canal selecionados.",
      });
    }, 2000);
  };
  
  return (
    <div className="bg-atlas-background text-white">
      <h1 className="text-3xl font-bold mb-6">Plano de Conteúdo para Redes Sociais</h1>
      <p className="text-atlas-neutral mb-8">
        Este documento ajuda a estruturar sua estratégia de conteúdo para diferentes estágios do funil de vendas, organizando publicações semanais.
      </p>
      
      {/* Explicação do Funil */}
      <div className="mb-10 space-y-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Entendendo o Funil de Conteúdo</h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="tofu" className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <span className="font-semibold">T</span>
                </div>
                <h3 className="text-xl font-semibold">TOFU (Topo do Funil)</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="flex justify-between items-start mb-4">
                <div className="pr-6 flex-1">
                  <Textarea 
                    value={funnelDescriptions.tofu} 
                    onChange={(e) => handleFunnelDescriptionChange("tofu", e.target.value)}
                    placeholder="Descreva estratégias para o topo do funil..."
                    className="min-h-[120px] bg-white/10 border-white/10 focus:border-atlas-highlight"
                  />
                </div>
                <Button 
                  size="sm" 
                  onClick={() => handleAIFill("tofu")}
                  className="bg-blue-500 hover:bg-blue-600 shrink-0"
                >
                  <Sparkles className="h-4 w-4 mr-2" /> IA
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="mofu" className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                  <span className="font-semibold">M</span>
                </div>
                <h3 className="text-xl font-semibold">MOFU (Meio do Funil)</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="flex justify-between items-start mb-4">
                <div className="pr-6 flex-1">
                  <Textarea 
                    value={funnelDescriptions.mofu} 
                    onChange={(e) => handleFunnelDescriptionChange("mofu", e.target.value)}
                    placeholder="Descreva estratégias para o meio do funil..."
                    className="min-h-[120px] bg-white/10 border-white/10 focus:border-atlas-highlight"
                  />
                </div>
                <Button 
                  size="sm" 
                  onClick={() => handleAIFill("mofu")}
                  className="bg-purple-500 hover:bg-purple-600 shrink-0"
                >
                  <Sparkles className="h-4 w-4 mr-2" /> IA
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="bofu" className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <span className="font-semibold">B</span>
                </div>
                <h3 className="text-xl font-semibold">BOFU (Fundo do Funil)</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="flex justify-between items-start mb-4">
                <div className="pr-6 flex-1">
                  <Textarea 
                    value={funnelDescriptions.bofu} 
                    onChange={(e) => handleFunnelDescriptionChange("bofu", e.target.value)}
                    placeholder="Descreva estratégias para o fundo do funil..."
                    className="min-h-[120px] bg-white/10 border-white/10 focus:border-atlas-highlight"
                  />
                </div>
                <Button 
                  size="sm" 
                  onClick={() => handleAIFill("bofu")}
                  className="bg-green-500 hover:bg-green-600 shrink-0"
                >
                  <Sparkles className="h-4 w-4 mr-2" /> IA
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      {/* Plano Semanal */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">Plano Semanal de Conteúdo</h2>
          <Button 
            onClick={addContentItem}
            className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
          >
            <PlusCircle className="h-4 w-4 mr-2" /> Adicionar Conteúdo
          </Button>
        </div>
        
        <div className="space-y-6">
          {weeklyPlan.map((item) => (
            <div key={item.id} className="p-6 rounded-xl border border-white/10 bg-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-atlas-neutral mb-2">
                    Tipo de Conteúdo
                  </label>
                  <Select 
                    value={item.type} 
                    onValueChange={(value) => handleContentItemChange(item.id, "type", value)}
                  >
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Selecione o estágio do funil" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tofu">TOFU (Topo do Funil)</SelectItem>
                      <SelectItem value="mofu">MOFU (Meio do Funil)</SelectItem>
                      <SelectItem value="bofu">BOFU (Fundo do Funil)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-atlas-neutral mb-2">
                    Canal
                  </label>
                  <Select 
                    value={item.channel} 
                    onValueChange={(value) => handleContentItemChange(item.id, "channel", value)}
                  >
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Selecione o canal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                      <SelectItem value="blog">Blog</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-atlas-neutral mb-2">
                    Objetivo
                  </label>
                  <Input 
                    value={item.objective} 
                    onChange={(e) => handleContentItemChange(item.id, "objective", e.target.value)}
                    placeholder="Qual o objetivo deste conteúdo?"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-atlas-neutral mb-2">
                    Descrição do Conteúdo
                  </label>
                  <Textarea 
                    value={item.content} 
                    onChange={(e) => handleContentItemChange(item.id, "content", e.target.value)}
                    placeholder="Descreva o conteúdo em detalhes..."
                    className="min-h-[80px] bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-atlas-neutral mb-2">
                    Chamada para Ação (CTA)
                  </label>
                  <Input 
                    value={item.cta} 
                    onChange={(e) => handleContentItemChange(item.id, "cta", e.target.value)}
                    placeholder="O que você quer que o público faça depois?"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                
                <div className="pt-2">
                  <Button 
                    onClick={() => handleContentAIFill(item.id)}
                    className="w-full bg-atlas-secondary hover:bg-atlas-secondary/80"
                  >
                    <Sparkles className="h-4 w-4 mr-2" /> Gerar com IA
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
