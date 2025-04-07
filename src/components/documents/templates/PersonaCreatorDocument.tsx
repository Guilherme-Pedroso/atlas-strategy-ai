import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Save, Copy, UserPlus, User, Edit, Image, MessageSquare, Target, Clock, DollarSign, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

interface Persona {
  id: string;
  name: string;
  age: string;
  occupation: string;
  location: string;
  income: string;
  bio: string;
  goals: string[];
  painPoints: string[];
  channels: string[];
  avatar: string;
}

interface Channel {
  id: string;
  name: string;
}

export const PersonaCreatorDocument = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('editor');
  const [currentPersonaIndex, setCurrentPersonaIndex] = useState(0);
  const [autoSaving, setAutoSaving] = useState(false);
  
  const channelOptions: Channel[] = [
    { id: 'instagram', name: 'Instagram' },
    { id: 'facebook', name: 'Facebook' },
    { id: 'linkedin', name: 'LinkedIn' },
    { id: 'twitter', name: 'Twitter/X' },
    { id: 'tiktok', name: 'TikTok' },
    { id: 'youtube', name: 'YouTube' },
    { id: 'email', name: 'Email' },
    { id: 'whatsapp', name: 'WhatsApp' },
    { id: 'site', name: 'Site/Blog' },
    { id: 'eventos', name: 'Eventos presenciais' },
  ];

  const avatarOptions = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
  ];

  const [personas, setPersonas] = useState<Persona[]>([
    {
      id: 'persona1',
      name: 'Ana Silva',
      age: '32',
      occupation: 'Gerente de Marketing',
      location: 'São Paulo',
      income: 'R$ 7.000 - R$ 12.000',
      bio: 'Ana é uma profissional dedicada que trabalha em uma empresa de médio porte. Ela busca constantemente maneiras de otimizar os resultados de marketing com recursos limitados.',
      goals: [
        'Aumentar o ROI das campanhas de marketing',
        'Automatizar processos para economizar tempo',
        'Demonstrar resultados claros para diretoria'
      ],
      painPoints: [
        'Orçamento limitado para marketing',
        'Falta de tempo para analisar dados',
        'Dificuldade em medir resultados de campanhas'
      ],
      channels: ['linkedin', 'email', 'eventos'],
      avatar: '/placeholder.svg'
    }
  ]);

  const addNewPersona = () => {
    const newPersona: Persona = {
      id: `persona${personas.length + 1}`,
      name: 'Nova Persona',
      age: '',
      occupation: '',
      location: '',
      income: '',
      bio: '',
      goals: [''],
      painPoints: [''],
      channels: [],
      avatar: '/placeholder.svg'
    };
    
    setPersonas([...personas, newPersona]);
    setCurrentPersonaIndex(personas.length);
    
    toast({
      title: "Nova persona criada",
      description: "Preencha os detalhes para personalizar sua persona.",
    });
  };

  const duplicatePersona = () => {
    const currentPersona = personas[currentPersonaIndex];
    const duplicatedPersona: Persona = {
      ...currentPersona,
      id: `persona${personas.length + 1}`,
      name: `${currentPersona.name} (Cópia)`,
    };
    
    setPersonas([...personas, duplicatedPersona]);
    setCurrentPersonaIndex(personas.length);
    
    toast({
      title: "Persona duplicada",
      description: "Uma cópia da persona foi criada com sucesso.",
    });
  };

  const handleTextChange = (field: keyof Persona, value: string) => {
    setPersonas(prevPersonas => {
      const updated = [...prevPersonas];
      updated[currentPersonaIndex] = {
        ...updated[currentPersonaIndex],
        [field]: value
      };
      return updated;
    });
    triggerAutoSave();
  };

  const handleArrayChange = (field: 'goals' | 'painPoints', index: number, value: string) => {
    setPersonas(prevPersonas => {
      const updated = [...prevPersonas];
      const fieldArray = [...updated[currentPersonaIndex][field]];
      fieldArray[index] = value;
      
      updated[currentPersonaIndex] = {
        ...updated[currentPersonaIndex],
        [field]: fieldArray
      };
      
      return updated;
    });
    triggerAutoSave();
  };

  const addArrayItem = (field: 'goals' | 'painPoints') => {
    setPersonas(prevPersonas => {
      const updated = [...prevPersonas];
      updated[currentPersonaIndex] = {
        ...updated[currentPersonaIndex],
        [field]: [...updated[currentPersonaIndex][field], '']
      };
      return updated;
    });
  };

  const removeArrayItem = (field: 'goals' | 'painPoints', index: number) => {
    setPersonas(prevPersonas => {
      const updated = [...prevPersonas];
      const fieldArray = [...updated[currentPersonaIndex][field]];
      
      if (fieldArray.length > 1) {
        fieldArray.splice(index, 1);
        updated[currentPersonaIndex] = {
          ...updated[currentPersonaIndex],
          [field]: fieldArray
        };
      }
      
      return updated;
    });
    triggerAutoSave();
  };

  const handleChannelToggle = (channelId: string) => {
    setPersonas(prevPersonas => {
      const updated = [...prevPersonas];
      const currentChannels = [...updated[currentPersonaIndex].channels];
      
      if (currentChannels.includes(channelId)) {
        updated[currentPersonaIndex] = {
          ...updated[currentPersonaIndex],
          channels: currentChannels.filter(id => id !== channelId)
        };
      } else {
        updated[currentPersonaIndex] = {
          ...updated[currentPersonaIndex],
          channels: [...currentChannels, channelId]
        };
      }
      
      return updated;
    });
    triggerAutoSave();
  };

  const triggerAutoSave = () => {
    setAutoSaving(true);
    setTimeout(() => {
      console.log("Autosaving personas...", personas);
      setAutoSaving(false);
      
      // Show auto-save toast occasionally
      if (Math.random() > 0.7) {
        toast({
          title: "Alterações salvas",
          description: "Suas personas foram salvas automaticamente",
          duration: 2000,
        });
      }
    }, 1000);
  };

  const handleSave = () => {
    console.log("Saving personas manually:", personas);
    toast({
      title: "Salvo com sucesso",
      description: "Suas personas foram salvas com sucesso.",
    });
  };

  const currentPersona = personas[currentPersonaIndex];

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-white">Criador de Personas</h1>
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

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="w-full md:w-64 shrink-0">
          <Card className="bg-atlas-background/50 border-white/10 text-white">
            <CardHeader>
              <CardTitle>Suas Personas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {personas.map((persona, index) => (
                <Button
                  key={persona.id}
                  variant={index === currentPersonaIndex ? "default" : "outline"}
                  className={`w-full justify-start ${index === currentPersonaIndex ? 'bg-white/10 text-white' : 'text-atlas-neutral border-white/20 bg-white/5 hover:bg-white/10'}`}
                  onClick={() => setCurrentPersonaIndex(index)}
                >
                  <User className="h-4 w-4 mr-2" />
                  <span className="truncate">{persona.name || 'Sem nome'}</span>
                </Button>
              ))}
            </CardContent>
            <CardFooter className="pt-0 flex flex-col space-y-2">
              <Button 
                variant="outline" 
                className="w-full text-white border-white/20 bg-white/5 hover:bg-white/10"
                onClick={addNewPersona}
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Nova Persona
              </Button>
              <Button 
                variant="outline" 
                className="w-full text-white border-white/20 bg-white/5 hover:bg-white/10"
                onClick={duplicatePersona}
              >
                <Copy className="h-4 w-4 mr-2" />
                Duplicar Atual
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex-1">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-atlas-background/50 border border-white/10 mb-6">
              <TabsTrigger 
                value="editor" 
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-atlas-neutral"
              >
                <Edit className="h-4 w-4 mr-2" />
                Editor
              </TabsTrigger>
              <TabsTrigger 
                value="preview" 
                className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-atlas-neutral"
              >
                <User className="h-4 w-4 mr-2" />
                Visualização
              </TabsTrigger>
            </TabsList>

            <TabsContent value="editor" className="mt-0">
              <Card className="bg-atlas-background/50 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    <Input
                      value={currentPersona.name}
                      onChange={(e) => handleTextChange('name', e.target.value)}
                      className="text-xl font-bold bg-transparent border-white/10 focus:border-white/20"
                      placeholder="Nome da Persona"
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="age">Idade</Label>
                        <Input
                          id="age"
                          value={currentPersona.age}
                          onChange={(e) => handleTextChange('age', e.target.value)}
                          className="bg-atlas-background/30 border-white/10 text-white"
                          placeholder="Ex: 35"
                        />
                      </div>
                      <div>
                        <Label htmlFor="occupation">Ocupação</Label>
                        <Input
                          id="occupation"
                          value={currentPersona.occupation}
                          onChange={(e) => handleTextChange('occupation', e.target.value)}
                          className="bg-atlas-background/30 border-white/10 text-white"
                          placeholder="Ex: Gerente de Marketing"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Localização</Label>
                        <Input
                          id="location"
                          value={currentPersona.location}
                          onChange={(e) => handleTextChange('location', e.target.value)}
                          className="bg-atlas-background/30 border-white/10 text-white"
                          placeholder="Ex: São Paulo"
                        />
                      </div>
                      <div>
                        <Label htmlFor="income">Faixa de renda</Label>
                        <Input
                          id="income"
                          value={currentPersona.income}
                          onChange={(e) => handleTextChange('income', e.target.value)}
                          className="bg-atlas-background/30 border-white/10 text-white"
                          placeholder="Ex: R$ 5.000 - R$ 8.000"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="bio">Biografia</Label>
                      <Textarea
                        id="bio"
                        value={currentPersona.bio}
                        onChange={(e) => handleTextChange('bio', e.target.value)}
                        className="min-h-[180px] bg-atlas-background/30 border-white/10 text-white resize-y"
                        placeholder="Descreva quem é esta persona, sua personalidade, rotina e contexto"
                      />
                    </div>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <Label className="text-lg font-medium flex items-center mb-2">
                      <Target className="h-5 w-5 mr-2 text-green-400" />
                      Objetivos
                    </Label>
                    <div className="space-y-2">
                      {currentPersona.goals.map((goal, index) => (
                        <div key={`goal-${index}`} className="flex gap-2 items-start">
                          <div className="flex-1">
                            <Input
                              value={goal}
                              onChange={(e) => handleArrayChange('goals', index, e.target.value)}
                              className="bg-atlas-background/30 border-white/10 text-white"
                              placeholder="O que esta persona busca alcançar?"
                            />
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeArrayItem('goals', index)}
                            className="text-atlas-neutral hover:text-red-400 hover:bg-transparent"
                            disabled={currentPersona.goals.length <= 1}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => addArrayItem('goals')}
                        className="mt-2 text-white border-white/20 bg-white/5 hover:bg-white/10"
                      >
                        Adicionar objetivo
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-medium flex items-center mb-2">
                      <MessageSquare className="h-5 w-5 mr-2 text-red-400" />
                      Dores e Desafios
                    </Label>
                    <div className="space-y-2">
                      {currentPersona.painPoints.map((point, index) => (
                        <div key={`pain-${index}`} className="flex gap-2 items-start">
                          <div className="flex-1">
                            <Input
                              value={point}
                              onChange={(e) => handleArrayChange('painPoints', index, e.target.value)}
                              className="bg-atlas-background/30 border-white/10 text-white"
                              placeholder="Quais problemas esta persona enfrenta?"
                            />
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeArrayItem('painPoints', index)}
                            className="text-atlas-neutral hover:text-red-400 hover:bg-transparent"
                            disabled={currentPersona.painPoints.length <= 1}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => addArrayItem('painPoints')}
                        className="mt-2 text-white border-white/20 bg-white/5 hover:bg-white/10"
                      >
                        Adicionar dor/desafio
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-medium flex items-center mb-2">
                      <MessageSquare className="h-5 w-5 mr-2 text-blue-400" />
                      Canais Preferidos
                    </Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {channelOptions.map(channel => (
                        <Badge
                          key={channel.id}
                          variant="outline"
                          className={`cursor-pointer text-sm py-1.5 px-3 ${
                            currentPersona.channels.includes(channel.id)
                              ? 'bg-atlas-highlight/20 text-atlas-highlight border-atlas-highlight/40'
                              : 'bg-white/5 text-atlas-neutral border-white/20 hover:bg-white/10'
                          }`}
                          onClick={() => handleChannelToggle(channel.id)}
                        >
                          {channel.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preview" className="mt-0">
              <Card className="bg-atlas-background/50 border-white/10 text-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                      <div className="w-32 h-32 rounded-full bg-atlas-highlight/20 flex items-center justify-center mb-4 overflow-hidden">
                        <User className="h-16 w-16 text-atlas-highlight" />
                      </div>
                      <h2 className="text-2xl font-bold mb-1">{currentPersona.name || 'Sem nome'}</h2>
                      <p className="text-atlas-neutral mb-2">{currentPersona.occupation || 'Ocupação não definida'}</p>
                      
                      <div className="flex items-center justify-center mb-1 text-sm text-atlas-neutral">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{currentPersona.age || '--'} anos</span>
                      </div>
                      <div className="flex items-center justify-center mb-1 text-sm text-atlas-neutral">
                        <DollarSign className="h-4 w-4 mr-1" />
                        <span>{currentPersona.income || 'Renda não definida'}</span>
                      </div>
                      <div className="flex items-center justify-center text-sm text-atlas-neutral">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>{currentPersona.location || 'Localização não definida'}</span>
                      </div>
                      
                      <div className="mt-4 mb-2">
                        <p className="text-sm font-medium text-white mb-2">Canais preferidos</p>
                        <div className="flex flex-wrap justify-center gap-1">
                          {currentPersona.channels.length > 0 ? (
                            currentPersona.channels.map(channelId => {
                              const channel = channelOptions.find(c => c.id === channelId);
                              return (
                                <Badge key={channelId} className="bg-atlas-highlight/10 text-atlas-highlight border-atlas-highlight/20">
                                  {channel?.name || channelId}
                                </Badge>
                              );
                            })
                          ) : (
                            <span className="text-sm text-atlas-neutral">Nenhum canal selecionado</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-2/3">
                      <div className="mb-6">
                        <h3 className="text-lg font-medium mb-2 flex items-center">
                          <User className="h-4 w-4 mr-2 text-atlas-highlight" />
                          Biografia
                        </h3>
                        <div className="bg-white/5 rounded-md p-4 text-atlas-neutral">
                          {currentPersona.bio || 'Biografia não definida para esta persona.'}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-lg font-medium mb-2 flex items-center">
                            <Target className="h-4 w-4 mr-2 text-green-400" />
                            Objetivos
                          </h3>
                          <ul className="bg-white/5 rounded-md p-4 text-atlas-neutral space-y-2">
                            {currentPersona.goals.length > 0 && currentPersona.goals[0] !== '' ? (
                              currentPersona.goals.map((goal, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="mr-2">•</span>
                                  <span>{goal}</span>
                                </li>
                              ))
                            ) : (
                              <li>Nenhum objetivo definido</li>
                            )}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2 flex items-center">
                            <MessageSquare className="h-4 w-4 mr-2 text-red-400" />
                            Dores e Desafios
                          </h3>
                          <ul className="bg-white/5 rounded-md p-4 text-atlas-neutral space-y-2">
                            {currentPersona.painPoints.length > 0 && currentPersona.painPoints[0] !== '' ? (
                              currentPersona.painPoints.map((point, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="mr-2">•</span>
                                  <span>{point}</span>
                                </li>
                              ))
                            ) : (
                              <li>Nenhuma dor definida</li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="bg-atlas-background/50 border-white/10 text-white col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Recursos adicionais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start text-white border-white/20 bg-white/5 hover:bg-white/10">
              <span>Templates de persona</span>
            </Button>
            <Button variant="outline" className="w-full justify-start text-white border-white/20 bg-white/5 hover:bg-white/10">
              <span>Galeria de imagens</span>
            </Button>
            <Button variant="outline" className="w-full justify-start text-white border-white/20 bg-white/5 hover:bg-white/10">
              <span>Exportar para PDF</span>
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
                <span>Sugira características para uma persona do meu segmento de mercado</span>
              </Button>
              <Button variant="outline" className="w-full justify-start text-left text-white border-white/20 bg-white/5 hover:bg-white/10 h-auto py-2">
                <span>Quais objetivos e dores são típicos para o perfil que estou criando?</span>
              </Button>
              <Button variant="outline" className="w-full justify-start text-left text-white border-white/20 bg-white/5 hover:bg-white/10 h-auto py-2">
                <span>Em quais canais encontro minha persona com mais facilidade?</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PersonaCreatorDocument;
