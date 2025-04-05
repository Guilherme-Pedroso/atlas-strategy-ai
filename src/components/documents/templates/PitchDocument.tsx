
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const PitchDocument = () => {
  const { toast } = useToast();
  
  const initialData = {
    problem: "",
    solution: "",
    differentiator: "",
    audience: "",
    traction: "",
    monetization: "",
    callToAction: ""
  };
  
  const [pitchData, setPitchData] = useState(initialData);
  
  const handleChange = (field: keyof typeof initialData, value: string) => {
    setPitchData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleAIFill = (field: keyof typeof initialData) => {
    // Simulate AI response with timeout
    toast({
      title: "IA processando...",
      description: "Gerando sugestão para " + field.replace(/([A-Z])/g, ' $1').toLowerCase(),
    });
    
    setTimeout(() => {
      const aiSuggestions: Record<string, string> = {
        problem: "Pequenos e médios empreendedores gastam em média 15 horas por semana tentando criar estratégias de marketing eficazes, muitas vezes sem resultados proporcionais ao esforço investido. 78% deles relatam frustração com a falta de direcionamento claro.",
        solution: "Marketing Atlas combina inteligência artificial com metodologias comprovadas para criar estratégias personalizadas em minutos, não dias. Nossa plataforma guia o usuário passo a passo por um processo que normalmente custaria milhares de reais com agências.",
        differentiator: "Diferente de cursos genéricos ou ferramentas específicas para um único canal, o Marketing Atlas oferece estratégias completamente personalizadas usando IA proprietária treinada em casos de sucesso reais, além de ferramentas práticas para implementação imediata.",
        audience: "Nosso público-alvo são empreendedores digitais, pequenas empresas em crescimento e profissionais de marketing freelancers que precisam de resultados rápidos mas não têm orçamento para grandes agências ou tempo para múltiplos cursos.",
        traction: "Nos últimos 6 meses, atingimos 5.200 usuários ativos, com taxa de retenção de 72%. Temos NPS de 85 e mais de 150 depoimentos positivos. Crescimento orgânico de 22% ao mês.",
        monetization: "Modelo freemium com planos a partir de R$97/mês. Receita recorrente com margens de 73%. Ticket médio atual de R$127/mês com LTV de R$950. CAC em constante redução, atualmente em R$85.",
        callToAction: "Estamos buscando investidores estratégicos para acelerar nosso crescimento e expandir nossa tecnologia proprietária de IA. Vamos revolucionar como pequenas empresas fazem marketing no Brasil."
      };
      
      handleChange(field, aiSuggestions[field]);
      
      toast({
        title: "Sugestão gerada",
        description: "A IA preencheu o campo com uma sugestão. Edite conforme necessário.",
      });
    }, 1500);
  };
  
  return (
    <div className="bg-atlas-background text-white">
      <h1 className="text-3xl font-bold mb-6">Modelo de Pitch Personalizado</h1>
      <p className="text-atlas-neutral mb-8">
        Este documento estrutura uma apresentação concisa e persuasiva do seu negócio ou projeto, perfeita para investidores ou parceiros potenciais.
      </p>
      
      <div className="space-y-8">
        {/* Problema */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-atlas-highlight mb-1">Problema</h3>
              <p className="text-sm text-atlas-neutral">Que dor ou necessidade clara o seu produto/serviço resolve?</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => handleAIFill("problem")}
              className="bg-atlas-secondary hover:bg-atlas-secondary/80"
            >
              <Sparkles className="h-4 w-4 mr-2" /> IA
            </Button>
          </div>
          
          <div className="bg-atlas-background/50 p-3 rounded-md border border-white/10 mb-3">
            <p className="text-sm italic text-atlas-neutral">
              <span className="text-atlas-highlight font-medium">Dica:</span> Use dados para quantificar o problema. Mencione tempo, dinheiro ou oportunidades perdidas.
            </p>
          </div>
          
          <Textarea 
            value={pitchData.problem} 
            onChange={(e) => handleChange("problem", e.target.value)}
            placeholder="Descreva o problema que você resolve..."
            className="min-h-[120px] bg-white/10 border-white/10 focus:border-atlas-highlight"
          />
        </div>
        
        {/* Solução */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-atlas-highlight mb-1">Solução</h3>
              <p className="text-sm text-atlas-neutral">Como seu produto ou serviço resolve o problema identificado?</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => handleAIFill("solution")}
              className="bg-atlas-secondary hover:bg-atlas-secondary/80"
            >
              <Sparkles className="h-4 w-4 mr-2" /> IA
            </Button>
          </div>
          
          <div className="bg-atlas-background/50 p-3 rounded-md border border-white/10 mb-3">
            <p className="text-sm italic text-atlas-neutral">
              <span className="text-atlas-highlight font-medium">Dica:</span> Seja específico sobre como funciona. Evite jargões técnicos excessivos. Foque nos benefícios diretos.
            </p>
          </div>
          
          <Textarea 
            value={pitchData.solution} 
            onChange={(e) => handleChange("solution", e.target.value)}
            placeholder="Explique sua solução de forma clara e direta..."
            className="min-h-[120px] bg-white/10 border-white/10 focus:border-atlas-highlight"
          />
        </div>
        
        {/* Diferencial */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-atlas-highlight mb-1">Diferencial</h3>
              <p className="text-sm text-atlas-neutral">O que torna sua solução única em relação à concorrência?</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => handleAIFill("differentiator")}
              className="bg-atlas-secondary hover:bg-atlas-secondary/80"
            >
              <Sparkles className="h-4 w-4 mr-2" /> IA
            </Button>
          </div>
          
          <div className="bg-atlas-background/50 p-3 rounded-md border border-white/10 mb-3">
            <p className="text-sm italic text-atlas-neutral">
              <span className="text-atlas-highlight font-medium">Dica:</span> Compare-se diretamente com alternativas. Destaque propriedade intelectual, tecnologia ou abordagem inovadora.
            </p>
          </div>
          
          <Textarea 
            value={pitchData.differentiator} 
            onChange={(e) => handleChange("differentiator", e.target.value)}
            placeholder="Descreva o que diferencia sua solução da concorrência..."
            className="min-h-[120px] bg-white/10 border-white/10 focus:border-atlas-highlight"
          />
        </div>
        
        {/* Público */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-atlas-highlight mb-1">Público-Alvo</h3>
              <p className="text-sm text-atlas-neutral">Quem são seus clientes ideais e qual o tamanho desse mercado?</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => handleAIFill("audience")}
              className="bg-atlas-secondary hover:bg-atlas-secondary/80"
            >
              <Sparkles className="h-4 w-4 mr-2" /> IA
            </Button>
          </div>
          
          <div className="bg-atlas-background/50 p-3 rounded-md border border-white/10 mb-3">
            <p className="text-sm italic text-atlas-neutral">
              <span className="text-atlas-highlight font-medium">Dica:</span> Inclua dados demográficos, comportamentais e o tamanho potencial do mercado (SAM, SOM, TAM).
            </p>
          </div>
          
          <Textarea 
            value={pitchData.audience} 
            onChange={(e) => handleChange("audience", e.target.value)}
            placeholder="Descreva seu público-alvo e o potencial de mercado..."
            className="min-h-[120px] bg-white/10 border-white/10 focus:border-atlas-highlight"
          />
        </div>
        
        {/* Tração */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-atlas-highlight mb-1">Tração</h3>
              <p className="text-sm text-atlas-neutral">Quais resultados você já alcançou? Números, métricas e conquistas.</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => handleAIFill("traction")}
              className="bg-atlas-secondary hover:bg-atlas-secondary/80"
            >
              <Sparkles className="h-4 w-4 mr-2" /> IA
            </Button>
          </div>
          
          <div className="bg-atlas-background/50 p-3 rounded-md border border-white/10 mb-3">
            <p className="text-sm italic text-atlas-neutral">
              <span className="text-atlas-highlight font-medium">Dica:</span> Inclua usuários/clientes, crescimento, engajamento, depoimentos relevantes e parcerias estratégicas.
            </p>
          </div>
          
          <Textarea 
            value={pitchData.traction} 
            onChange={(e) => handleChange("traction", e.target.value)}
            placeholder="Liste suas métricas e conquistas relevantes..."
            className="min-h-[120px] bg-white/10 border-white/10 focus:border-atlas-highlight"
          />
        </div>
        
        {/* Monetização */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-atlas-highlight mb-1">Monetização</h3>
              <p className="text-sm text-atlas-neutral">Como você ganha ou planeja ganhar dinheiro?</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => handleAIFill("monetization")}
              className="bg-atlas-secondary hover:bg-atlas-secondary/80"
            >
              <Sparkles className="h-4 w-4 mr-2" /> IA
            </Button>
          </div>
          
          <div className="bg-atlas-background/50 p-3 rounded-md border border-white/10 mb-3">
            <p className="text-sm italic text-atlas-neutral">
              <span className="text-atlas-highlight font-medium">Dica:</span> Detalhe seu modelo de negócio, preços, margens, LTV e CAC (se aplicável). Mostre por que é escalável.
            </p>
          </div>
          
          <Textarea 
            value={pitchData.monetization} 
            onChange={(e) => handleChange("monetization", e.target.value)}
            placeholder="Explique como sua empresa gera ou gerará receita..."
            className="min-h-[120px] bg-white/10 border-white/10 focus:border-atlas-highlight"
          />
        </div>
        
        {/* Chamada Final */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-atlas-highlight mb-1">Chamada Final</h3>
              <p className="text-sm text-atlas-neutral">O que você está buscando? Investimento, parceria, clientes?</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => handleAIFill("callToAction")}
              className="bg-atlas-secondary hover:bg-atlas-secondary/80"
            >
              <Sparkles className="h-4 w-4 mr-2" /> IA
            </Button>
          </div>
          
          <div className="bg-atlas-background/50 p-3 rounded-md border border-white/10 mb-3">
            <p className="text-sm italic text-atlas-neutral">
              <span className="text-atlas-highlight font-medium">Dica:</span> Seja específico sobre o que busca e como será utilizado. Termine com uma visão inspiradora do futuro.
            </p>
          </div>
          
          <Textarea 
            value={pitchData.callToAction} 
            onChange={(e) => handleChange("callToAction", e.target.value)}
            placeholder="Defina claramente o próximo passo que você deseja..."
            className="min-h-[120px] bg-white/10 border-white/10 focus:border-atlas-highlight"
          />
        </div>
      </div>
    </div>
  );
};
