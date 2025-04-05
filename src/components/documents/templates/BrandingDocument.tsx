
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const BrandingDocument = () => {
  const { toast } = useToast();
  
  const initialData = {
    mission: "",
    vision: "",
    values: "",
    voiceTone: "",
    adjectives: "",
    valueProposition: "",
    visualIdentity: ""
  };
  
  const [brandingData, setBrandingData] = useState(initialData);
  
  const handleChange = (field: keyof typeof initialData, value: string) => {
    setBrandingData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleAIFill = (field: keyof typeof initialData) => {
    // Simulate AI response with timeout
    toast({
      title: "IA processando...",
      description: "Gerando sugestão para " + field.replace(/([A-Z])/g, ' $1').toLowerCase(),
    });
    
    setTimeout(() => {
      const aiSuggestions: Record<string, string> = {
        mission: "Capacitar empreendedores e profissionais de marketing a criarem estratégias eficazes e inovadoras que gerem resultados tangíveis para seus negócios.",
        vision: "Ser a principal plataforma de estratégia de marketing do Brasil, democratizando o acesso à inteligência estratégica e ferramentas profissionais.",
        values: "Inovação, Simplicidade, Resultados, Transparência, Comunidade",
        voiceTone: "Profissional mas acessível, inspirador sem ser exagerado, direto e empático. Usamos linguagem clara e objetiva, evitando jargões desnecessários.",
        adjectives: "Estratégico, Transformador, Prático, Confiável, Inovador",
        valueProposition: "Marketing Atlas é a plataforma que transforma a complexidade do marketing em estratégias claras e executáveis, combinando inteligência artificial com metodologias comprovadas para impulsionar seu crescimento.",
        visualIdentity: "Cores principais: #0A2540 (azul profundo), #64F4AC (mint), #9E7BFF (roxo)\nFonte: Inter (moderna, clean)\nEstilo visual: Minimalista com elementos futuristas"
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
      <h1 className="text-3xl font-bold mb-6">Documento de Branding Base</h1>
      <p className="text-atlas-neutral mb-8">
        Este documento define os elementos fundamentais da sua marca, servindo como guia para todas as suas comunicações e materiais.
      </p>
      
      <div className="space-y-8">
        {/* Missão */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-atlas-highlight mb-1">Missão</h3>
              <p className="text-sm text-atlas-neutral">A razão de existir da sua empresa. O que você busca resolver ou transformar.</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => handleAIFill("mission")}
              className="bg-atlas-secondary hover:bg-atlas-secondary/80"
            >
              <Sparkles className="h-4 w-4 mr-2" /> IA
            </Button>
          </div>
          
          <div className="bg-atlas-background/50 p-3 rounded-md border border-white/10 mb-3">
            <p className="text-sm italic text-atlas-neutral">
              Exemplo: "Capacitar pessoas a se expressarem criativamente através da tecnologia."
            </p>
          </div>
          
          <Textarea 
            value={brandingData.mission} 
            onChange={(e) => handleChange("mission", e.target.value)}
            placeholder="Digite a missão da sua marca..."
            className="min-h-[100px] bg-white/10 border-white/10 focus:border-atlas-highlight"
          />
        </div>
        
        {/* Visão */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-atlas-highlight mb-1">Visão</h3>
              <p className="text-sm text-atlas-neutral">Onde você quer chegar. O futuro que sua marca ajuda a construir.</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => handleAIFill("vision")}
              className="bg-atlas-secondary hover:bg-atlas-secondary/80"
            >
              <Sparkles className="h-4 w-4 mr-2" /> IA
            </Button>
          </div>
          
          <div className="bg-atlas-background/50 p-3 rounded-md border border-white/10 mb-3">
            <p className="text-sm italic text-atlas-neutral">
              Exemplo: "Ser a empresa mais inovadora em nosso segmento, reconhecida por transformar a experiência dos usuários."
            </p>
          </div>
          
          <Textarea 
            value={brandingData.vision} 
            onChange={(e) => handleChange("vision", e.target.value)}
            placeholder="Digite a visão da sua marca..."
            className="min-h-[100px] bg-white/10 border-white/10 focus:border-atlas-highlight"
          />
        </div>
        
        {/* Valores */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-atlas-highlight mb-1">Valores</h3>
              <p className="text-sm text-atlas-neutral">Princípios que guiam suas decisões e comportamentos.</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => handleAIFill("values")}
              className="bg-atlas-secondary hover:bg-atlas-secondary/80"
            >
              <Sparkles className="h-4 w-4 mr-2" /> IA
            </Button>
          </div>
          
          <div className="bg-atlas-background/50 p-3 rounded-md border border-white/10 mb-3">
            <p className="text-sm italic text-atlas-neutral">
              Exemplo: "Inovação, Integridade, Colaboração, Excelência, Sustentabilidade"
            </p>
          </div>
          
          <Textarea 
            value={brandingData.values} 
            onChange={(e) => handleChange("values", e.target.value)}
            placeholder="Digite os valores da sua marca (separados por vírgula)..."
            className="min-h-[100px] bg-white/10 border-white/10 focus:border-atlas-highlight"
          />
        </div>
        
        {/* Tom de Voz */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-atlas-highlight mb-1">Tom de Voz</h3>
              <p className="text-sm text-atlas-neutral">Como sua marca se comunica e se expressa.</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => handleAIFill("voiceTone")}
              className="bg-atlas-secondary hover:bg-atlas-secondary/80"
            >
              <Sparkles className="h-4 w-4 mr-2" /> IA
            </Button>
          </div>
          
          <div className="bg-atlas-background/50 p-3 rounded-md border border-white/10 mb-3">
            <p className="text-sm italic text-atlas-neutral">
              Exemplo: "Amigável mas profissional, utilizando linguagem simples e acessível. Evitamos jargões técnicos e priorizamos clareza."
            </p>
          </div>
          
          <Textarea 
            value={brandingData.voiceTone} 
            onChange={(e) => handleChange("voiceTone", e.target.value)}
            placeholder="Descreva o tom de voz da sua marca..."
            className="min-h-[100px] bg-white/10 border-white/10 focus:border-atlas-highlight"
          />
        </div>
        
        {/* Adjetivos */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-atlas-highlight mb-1">Adjetivos da Marca</h3>
              <p className="text-sm text-atlas-neutral">Palavras que descrevem a personalidade da sua marca.</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => handleAIFill("adjectives")}
              className="bg-atlas-secondary hover:bg-atlas-secondary/80"
            >
              <Sparkles className="h-4 w-4 mr-2" /> IA
            </Button>
          </div>
          
          <div className="bg-atlas-background/50 p-3 rounded-md border border-white/10 mb-3">
            <p className="text-sm italic text-atlas-neutral">
              Exemplo: "Inovadora, Confiável, Dinâmica, Acessível, Sofisticada"
            </p>
          </div>
          
          <Textarea 
            value={brandingData.adjectives} 
            onChange={(e) => handleChange("adjectives", e.target.value)}
            placeholder="Liste adjetivos que representam sua marca..."
            className="min-h-[80px] bg-white/10 border-white/10 focus:border-atlas-highlight"
          />
        </div>
        
        {/* Proposta de Valor */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-atlas-highlight mb-1">Proposta de Valor</h3>
              <p className="text-sm text-atlas-neutral">O benefício único que você oferece ao seu público.</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => handleAIFill("valueProposition")}
              className="bg-atlas-secondary hover:bg-atlas-secondary/80"
            >
              <Sparkles className="h-4 w-4 mr-2" /> IA
            </Button>
          </div>
          
          <div className="bg-atlas-background/50 p-3 rounded-md border border-white/10 mb-3">
            <p className="text-sm italic text-atlas-neutral">
              Exemplo: "Desenvolvemos soluções que simplificam processos complexos, economizando tempo e recursos para nossos clientes enquanto entregamos resultados superiores."
            </p>
          </div>
          
          <Textarea 
            value={brandingData.valueProposition} 
            onChange={(e) => handleChange("valueProposition", e.target.value)}
            placeholder="Descreva sua proposta de valor única..."
            className="min-h-[100px] bg-white/10 border-white/10 focus:border-atlas-highlight"
          />
        </div>
        
        {/* Identidade Visual */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-atlas-highlight mb-1">Identidade Visual</h3>
              <p className="text-sm text-atlas-neutral">Elementos visuais que representam sua marca (cores, tipografia, estilo).</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => handleAIFill("visualIdentity")}
              className="bg-atlas-secondary hover:bg-atlas-secondary/80"
            >
              <Sparkles className="h-4 w-4 mr-2" /> IA
            </Button>
          </div>
          
          <div className="bg-atlas-background/50 p-3 rounded-md border border-white/10 mb-3">
            <p className="text-sm italic text-atlas-neutral">
              Exemplo: "Cores principais: Azul (#1a73e8), Verde (#34a853); Fonte: Montserrat; Estilo: Minimalista com bordas arredondadas"
            </p>
          </div>
          
          <Textarea 
            value={brandingData.visualIdentity} 
            onChange={(e) => handleChange("visualIdentity", e.target.value)}
            placeholder="Descreva os elementos visuais da sua marca..."
            className="min-h-[100px] bg-white/10 border-white/10 focus:border-atlas-highlight"
          />
        </div>
      </div>
    </div>
  );
};
