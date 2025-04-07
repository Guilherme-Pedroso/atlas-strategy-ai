
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { ArrowLeft, ArrowRight, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SlideContent {
  title: string;
  content: string;
  notes?: string;
}

export const PitchDeckDocument = () => {
  const { toast } = useToast();
  const [activeSlide, setActiveSlide] = useState("problema");
  const [autoSaving, setAutoSaving] = useState(false);
  const [slides, setSlides] = useState<Record<string, SlideContent>>({
    problema: {
      title: "O Problema",
      content: "Descreva aqui o problema que sua empresa resolve. O que dói no seu cliente? Quais são as consequências de não resolver esse problema?",
      notes: "Dica: Use dados e estatísticas para dimensionar o problema. Conte uma história que gere empatia."
    },
    solucao: {
      title: "Nossa Solução",
      content: "Explique como sua solução resolve o problema de forma única. O que você faz diferente dos concorrentes? Qual é sua proposta de valor exclusiva?",
      notes: "Dica: Seja claro e conciso. Evite jargões técnicos. Foque em benefícios, não só em recursos."
    },
    mercado: {
      title: "Tamanho do Mercado",
      content: "Dimensione o mercado total, o mercado disponível e o mercado que você pode capturar. Quais são as tendências deste mercado?",
      notes: "Dica: Use o modelo TAM-SAM-SOM (Mercado Total, Mercado Disponível, Mercado Obtível)."
    },
    produto: {
      title: "Produto/Serviço",
      content: "Descreva seu produto ou serviço em detalhes. Como ele funciona? Quais são seus principais diferenciais?",
      notes: "Dica: Inclua demonstrações visuais, se possível. Mostre seu produto em ação."
    },
    modelo: {
      title: "Modelo de Negócio",
      content: "Explique como você ganha dinheiro. Qual é seu modelo de receita, estrutura de preços e margens?",
      notes: "Dica: Seja transparente sobre os custos e como você planeja escalar o negócio."
    },
    time: {
      title: "Nosso Time",
      content: "Apresente os fundadores e membros-chave da equipe. Quais são suas qualificações e experiências relevantes?",
      notes: "Dica: Destaque realizações anteriores e por que esta equipe é a ideal para executar essa visão."
    },
    projecoes: {
      title: "Projeções Financeiras",
      content: "Compartilhe suas projeções de receita, crescimento e rentabilidade para os próximos 3-5 anos.",
      notes: "Dica: Seja realista. Explique suas premissas e mostre um plano claro para atingir o ponto de equilíbrio."
    },
    investimento: {
      title: "Investimento & Uso dos Recursos",
      content: "Informe quanto você está buscando captar e como pretende usar estes recursos para atingir marcos importantes.",
      notes: "Dica: Seja específico sobre os marcos que você pretende atingir com o investimento."
    }
  });

  const handleContentChange = (slideId: string, newContent: string) => {
    setSlides(prevSlides => ({
      ...prevSlides,
      [slideId]: {
        ...prevSlides[slideId],
        content: newContent
      }
    }));
    triggerAutoSave();
  };

  const handleTitleChange = (slideId: string, newTitle: string) => {
    setSlides(prevSlides => ({
      ...prevSlides,
      [slideId]: {
        ...prevSlides[slideId],
        title: newTitle
      }
    }));
    triggerAutoSave();
  };

  const triggerAutoSave = () => {
    setAutoSaving(true);
    setTimeout(() => {
      console.log("Autosaving pitch deck...");
      setAutoSaving(false);
      
      // Show auto-save toast occasionally
      if (Math.random() > 0.7) {
        toast({
          title: "Alterações salvas",
          description: "Seu pitch deck foi salvo automaticamente",
          duration: 2000,
        });
      }
    }, 1000);
  };

  const handleSave = () => {
    console.log("Saving pitch deck manually:", slides);
    toast({
      title: "Pitch Deck salvo",
      description: "Todas as alterações foram salvas com sucesso.",
    });
  };

  const handleNavigate = (direction: 'next' | 'prev') => {
    const slideIds = Object.keys(slides);
    const currentIndex = slideIds.indexOf(activeSlide);
    
    if (direction === 'next' && currentIndex < slideIds.length - 1) {
      setActiveSlide(slideIds[currentIndex + 1]);
    } else if (direction === 'prev' && currentIndex > 0) {
      setActiveSlide(slideIds[currentIndex - 1]);
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Pitch Deck</h1>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            className="text-white border-white/20 bg-white/5 hover:bg-white/10"
            onClick={handleSave}
          >
            <Save className="h-4 w-4 mr-2" />
            Salvar
          </Button>
          {autoSaving && (
            <span className="text-atlas-neutral text-sm py-2">Salvando...</span>
          )}
        </div>
      </div>

      <div className="relative mb-4 overflow-x-auto">
        <Tabs value={activeSlide} onValueChange={setActiveSlide} className="w-full">
          <TabsList className="bg-atlas-background/50 border border-white/10 w-auto inline-flex overflow-x-auto max-w-full pb-1 px-1">
            {Object.entries(slides).map(([id, slide]) => (
              <TabsTrigger 
                key={id}
                value={id} 
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-atlas-neutral whitespace-nowrap"
              >
                {slide.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(slides).map(([id, slide]) => (
            <TabsContent key={id} value={id} className="mt-4">
              <Card className="bg-atlas-background/50 border-white/10 text-white">
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <Input
                      value={slide.title}
                      onChange={(e) => handleTitleChange(id, e.target.value)}
                      className="text-xl font-bold bg-transparent border-white/10 focus:border-white/20"
                    />
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleNavigate('prev')}
                        disabled={id === Object.keys(slides)[0]}
                        className="text-white border-white/20 hover:bg-white/10"
                      >
                        <ArrowLeft className="h-4 w-4 mr-1" /> Anterior
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleNavigate('next')}
                        disabled={id === Object.keys(slides)[Object.keys(slides).length - 1]}
                        className="text-white border-white/20 hover:bg-white/10"
                      >
                        Próximo <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Textarea
                      value={slide.content}
                      onChange={(e) => handleContentChange(id, e.target.value)}
                      className="min-h-[200px] bg-atlas-background/30 border-white/10 text-white resize-y"
                      placeholder="Conteúdo do slide..."
                    />
                  </div>
                  {slide.notes && (
                    <div className="bg-atlas-highlight/10 border border-atlas-highlight/20 rounded-md p-3 text-sm text-atlas-neutral">
                      <p className="font-medium text-atlas-highlight mb-1">Dicas:</p>
                      <p>{slide.notes}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="bg-atlas-background/50 border-white/10 text-white col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Recursos adicionais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start text-white border-white/20 bg-white/5 hover:bg-white/10">
              <span>Galeria de imagens</span>
            </Button>
            <Button variant="outline" className="w-full justify-start text-white border-white/20 bg-white/5 hover:bg-white/10">
              <span>Modelos de gráficos</span>
            </Button>
            <Button variant="outline" className="w-full justify-start text-white border-white/20 bg-white/5 hover:bg-white/10">
              <span>Exemplos de pitches</span>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-atlas-background/50 border-white/10 text-white col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Pergunte à IA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start text-left text-white border-white/20 bg-white/5 hover:bg-white/10 h-auto py-2">
                <span>Como posso destacar melhor meu diferencial competitivo neste slide?</span>
              </Button>
              <Button variant="outline" className="w-full justify-start text-left text-white border-white/20 bg-white/5 hover:bg-white/10 h-auto py-2">
                <span>Sugira dados estatísticos para ilustrar o tamanho do mercado no meu segmento.</span>
              </Button>
              <Button variant="outline" className="w-full justify-start text-left text-white border-white/20 bg-white/5 hover:bg-white/10 h-auto py-2">
                <span>Revise meu texto atual e sugira melhorias profissionais.</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PitchDeckDocument;
