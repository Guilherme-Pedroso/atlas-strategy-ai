import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Calendar, Target, Users, MessageSquare, BarChart, Trash2, Save, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PlanSection {
  id: string;
  title: string;
  content: string;
  icon: React.ReactNode;
  color: string;
}

export const MarketingPlanDocument = () => {
  const { toast } = useToast();
  const [planTitle, setPlanTitle] = useState('Plano de Marketing 2025');
  const [autoSaving, setAutoSaving] = useState(false);
  const [sections, setSections] = useState<PlanSection[]>([
    {
      id: 'objectives',
      title: 'Objetivos',
      content: '1. Aumentar tráfego do site em 40% até o final do ano\n2. Converter 15% dos visitantes em leads\n3. Lançar 2 novos produtos\n4. Dobrar o engajamento nas redes sociais',
      icon: <Target className="h-5 w-5" />,
      color: 'bg-blue-500/10 text-blue-500 border-blue-500/20'
    },
    {
      id: 'audience',
      title: 'Públicos-alvo',
      content: '1. Profissionais de marketing (25-45 anos)\n2. Donos de pequenos negócios\n3. Gestores de e-commerce\n4. Startups em fase de crescimento',
      icon: <Users className="h-5 w-5" />,
      color: 'bg-purple-500/10 text-purple-500 border-purple-500/20'
    },
    {
      id: 'channels',
      title: 'Canais',
      content: '1. LinkedIn (conteúdo orgânico + ads)\n2. Email marketing (newsletters semanais)\n3. Webinars mensais\n4. Parcerias com influenciadores\n5. SEO e blog',
      icon: <MessageSquare className="h-5 w-5" />,
      color: 'bg-green-500/10 text-green-500 border-green-500/20'
    },
    {
      id: 'messages',
      title: 'Mensagens-chave',
      content: '1. "Resultados mensuráveis em 90 dias ou dinheiro de volta"\n2. "Tecnologia proprietária com inteligência artificial"\n3. "Atendimento personalizado por especialistas"\n4. "Solução completa sem complicação"',
      icon: <MessageSquare className="h-5 w-5" />,
      color: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
    },
    {
      id: 'timeline',
      title: 'Cronograma',
      content: 'Q1: Lançamento da campanha principal\nQ2: Evento presencial + campanha de afiliados\nQ3: Lançamento de produto + webinars\nQ4: Black Friday + campanha de fim de ano',
      icon: <Calendar className="h-5 w-5" />,
      color: 'bg-orange-500/10 text-orange-500 border-orange-500/20'
    },
    {
      id: 'kpis',
      title: 'KPIs',
      content: '1. Custo por aquisição (CPA): máx. R$200\n2. Taxa de conversão: meta 2.5%\n3. ROI de marketing: meta 300%\n4. NPS: meta 70+\n5. Retenção mensal: meta 85%',
      icon: <BarChart className="h-5 w-5" />,
      color: 'bg-red-500/10 text-red-500 border-red-500/20'
    }
  ]);

  const handleContentChange = (sectionId: string, newContent: string) => {
    setSections(prevSections => 
      prevSections.map(section => 
        section.id === sectionId 
          ? { ...section, content: newContent } 
          : section
      )
    );
    triggerAutoSave();
  };

  const handleTitleChange = (sectionId: string, newTitle: string) => {
    setSections(prevSections => 
      prevSections.map(section => 
        section.id === sectionId 
          ? { ...section, title: newTitle } 
          : section
      )
    );
    triggerAutoSave();
  };

  const handlePlanTitleChange = (newTitle: string) => {
    setPlanTitle(newTitle);
    triggerAutoSave();
  };

  const triggerAutoSave = () => {
    setAutoSaving(true);
    setTimeout(() => {
      console.log("Autosaving marketing plan...");
      setAutoSaving(false);
      
      // Show auto-save toast occasionally
      if (Math.random() > 0.7) {
        toast({
          title: "Alterações salvas",
          description: "Seu plano de marketing foi salvo automaticamente",
          duration: 2000,
        });
      }
    }, 1000);
  };

  const handleSave = () => {
    console.log("Saving marketing plan manually:", { title: planTitle, sections });
    toast({
      title: "Plano salvo",
      description: "Todas as alterações foram salvas com sucesso.",
    });
  };

  const handleAddSection = () => {
    const newSection: PlanSection = {
      id: `section-${Date.now()}`,
      title: 'Nova Seção',
      content: 'Adicione conteúdo para esta seção...',
      icon: <MessageSquare className="h-5 w-5" />,
      color: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20'
    };
    
    setSections([...sections, newSection]);
    toast({
      title: "Nova seção adicionada",
      description: "Personalize sua nova seção do plano de marketing.",
    });
  };

  const handleRemoveSection = (sectionId: string) => {
    setSections(sections.filter(section => section.id !== sectionId));
    toast({
      title: "Seção removida",
      description: "A seção foi removida do seu plano de marketing.",
    });
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="w-full sm:w-auto">
          <Input
            value={planTitle}
            onChange={(e) => handlePlanTitleChange(e.target.value)}
            className="text-2xl font-bold bg-transparent border-white/10 focus:border-white/20 text-white"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button 
            className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90 w-full sm:w-auto"
            onClick={handleSave}
          >
            <Save className="mr-2 h-4 w-4" />
            Salvar alterações
          </Button>
          {autoSaving && (
            <span className="text-atlas-neutral text-sm py-2">Salvando...</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {sections.map((section) => (
          <Card key={section.id} className={`bg-atlas-background/50 border-white/10 text-white h-full`}>
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-2">
                <div className={`p-1.5 rounded-md ${section.color}`}>
                  {section.icon}
                </div>
                <Input
                  value={section.title}
                  onChange={(e) => handleTitleChange(section.id, e.target.value)}
                  className="text-lg font-medium bg-transparent border-white/10 focus:border-white/20"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveSection(section.id)}
                className="text-atlas-neutral hover:text-red-400 hover:bg-transparent -mt-1"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <Textarea
                value={section.content}
                onChange={(e) => handleContentChange(section.id, e.target.value)}
                className="min-h-[180px] bg-atlas-background/30 border-white/10 text-white resize-y"
                placeholder="Conteúdo da seção..."
              />
            </CardContent>
          </Card>
        ))}
        
        <Card 
          className="bg-atlas-background/30 border-white/10 border-dashed text-white h-full flex flex-col items-center justify-center cursor-pointer hover:bg-atlas-background/40 transition-colors"
          onClick={handleAddSection}
        >
          <CardContent className="flex flex-col items-center justify-center h-full py-8">
            <div className="p-3 rounded-full bg-white/5 mb-4">
              <Plus className="h-6 w-6 text-atlas-neutral" />
            </div>
            <p className="text-atlas-neutral text-center font-medium">Adicionar nova seção</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="bg-atlas-background/50 border-white/10 text-white col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Recursos adicionais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start text-white border-white/20 bg-white/5 hover:bg-white/10">
              <span>Modelos de plano</span>
            </Button>
            <Button variant="outline" className="w-full justify-start text-white border-white/20 bg-white/5 hover:bg-white/10">
              <span>Exemplos de KPIs</span>
            </Button>
            <Button variant="outline" className="w-full justify-start text-white border-white/20 bg-white/5 hover:bg-white/10">
              <span>Análise de tendências</span>
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
                <span>Sugira objetivos SMART para o meu negócio</span>
              </Button>
              <Button variant="outline" className="w-full justify-start text-left text-white border-white/20 bg-white/5 hover:bg-white/10 h-auto py-2">
                <span>Quais canais de marketing funcionariam melhor para meu público?</span>
              </Button>
              <Button variant="outline" className="w-full justify-start text-left text-white border-white/20 bg-white/5 hover:bg-white/10 h-auto py-2">
                <span>Como posso melhorar meu cronograma de conteúdo para o próximo trimestre?</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketingPlanDocument;
