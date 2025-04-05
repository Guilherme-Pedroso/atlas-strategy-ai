
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Plus, X, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

type SWOTItem = {
  id: string;
  text: string;
  quadrant: "strength" | "weakness" | "opportunity" | "threat";
};

type SWOTQuadrant = {
  id: "strength" | "weakness" | "opportunity" | "threat";
  title: string;
  color: string;
  bgColor: string;
  description: string;
};

const quadrants: SWOTQuadrant[] = [
  {
    id: "strength",
    title: "Forças",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    description: "Vantagens internas que destacam seu negócio da concorrência"
  },
  {
    id: "weakness",
    title: "Fraquezas",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    description: "Áreas internas que precisam de melhorias ou desenvolvimento"
  },
  {
    id: "opportunity",
    title: "Oportunidades",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    description: "Fatores externos favoráveis que podem beneficiar seu negócio"
  },
  {
    id: "threat",
    title: "Ameaças",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    description: "Fatores externos que podem prejudicar seu negócio ou estratégia"
  }
];

const ItemTypes = {
  SWOT_ITEM: 'swotItem'
};

const DraggableItem = ({ item, onEdit, onDelete, onDrop }: { 
  item: SWOTItem;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
  onDrop: (id: string, quadrant: SWOTItem["quadrant"]) => void;
}) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(item.text);
  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.SWOT_ITEM,
    item: { id: item.id, quadrant: item.quadrant },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleEdit = () => {
    if (editing) {
      onEdit(item.id, text);
    }
    setEditing(!editing);
  };

  const quadrantColor = quadrants.find(q => q.id === item.quadrant)?.color || "text-white";

  return (
    <div 
      ref={drag}
      className={`p-3 mb-2 rounded-md border border-white/10 bg-atlas-background/50 hover:bg-atlas-background/80 transition-all ${isDragging ? 'opacity-50' : 'opacity-100'}`}
      style={{ cursor: 'move' }}
    >
      {editing ? (
        <div className="flex flex-col gap-2">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 bg-atlas-background border border-white/20 rounded-md text-white"
            autoFocus
          />
          <div className="flex justify-end gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => setEditing(false)}
              className="text-atlas-neutral hover:text-white"
            >
              Cancelar
            </Button>
            <Button 
              size="sm" 
              onClick={handleEdit}
              className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
            >
              Salvar
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-start">
          <p className="text-white">{item.text}</p>
          <div className="flex gap-1 ml-2">
            <button 
              onClick={handleEdit}
              className="text-atlas-neutral hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={() => onDelete(item.id)}
              className="text-atlas-neutral hover:text-red-500 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const QuadrantDropzone = ({ 
  quadrant, 
  items, 
  onAdd, 
  onEdit, 
  onDelete, 
  onDrop 
}: { 
  quadrant: SWOTQuadrant;
  items: SWOTItem[];
  onAdd: (quadrant: SWOTItem["quadrant"], text: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
  onDrop: (id: string, quadrant: SWOTItem["quadrant"]) => void;
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.SWOT_ITEM,
    drop: (item: { id: string }) => {
      onDrop(item.id, quadrant.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [isAdding, setIsAdding] = useState(false);
  const [newItemText, setNewItemText] = useState("");

  const handleAddItem = () => {
    if (newItemText.trim()) {
      onAdd(quadrant.id, newItemText);
      setNewItemText("");
      setIsAdding(false);
    }
  };

  const quadrantItems = items.filter(item => item.quadrant === quadrant.id);

  return (
    <div 
      ref={drop} 
      className={`flex-1 p-4 rounded-xl ${quadrant.bgColor} ${isOver ? 'ring-2 ring-white/30' : ''} min-h-[300px] transition-all`}
    >
      <div className="mb-4">
        <h3 className={`text-lg font-semibold ${quadrant.color}`}>{quadrant.title}</h3>
        <p className="text-sm text-atlas-neutral mb-4">{quadrant.description}</p>
      </div>
      
      <div className="mb-4">
        {quadrantItems.map(item => (
          <DraggableItem 
            key={item.id} 
            item={item} 
            onEdit={onEdit} 
            onDelete={onDelete} 
            onDrop={onDrop}
          />
        ))}
      </div>
      
      {isAdding ? (
        <div className="flex flex-col gap-2">
          <textarea
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            placeholder="Digite o item..."
            className="w-full p-2 bg-atlas-background border border-white/20 rounded-md text-white"
            autoFocus
          />
          <div className="flex justify-end gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => setIsAdding(false)}
              className="text-atlas-neutral hover:text-white"
            >
              Cancelar
            </Button>
            <Button 
              size="sm" 
              onClick={handleAddItem}
              className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
            >
              Adicionar
            </Button>
          </div>
        </div>
      ) : (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setIsAdding(true)}
          className="w-full border-dashed border-white/20 text-atlas-neutral hover:text-white hover:bg-atlas-background/10"
        >
          <Plus className="h-4 w-4 mr-2" />
          Adicionar item
        </Button>
      )}
    </div>
  );
};

export const SWOTDocument = () => {
  const [items, setItems] = useState<SWOTItem[]>([]);
  const [showAIModal, setShowAIModal] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<SWOTItem[]>([]);
  const [isGeneratingSuggestions, setIsGeneratingSuggestions] = useState(false);
  const { toast } = useToast();

  // Mock data for initial load
  useEffect(() => {
    // This would be replaced with real data loading from backend
    const initialItems: SWOTItem[] = [];
    setItems(initialItems);
  }, []);

  // Autosave effect
  useEffect(() => {
    if (items.length > 0) {
      // This would be replaced with real autosave functionality
      console.log("Autosaving SWOT matrix...", items);
      // API call to save items would go here
    }
  }, [items]);

  const handleAddItem = (quadrant: SWOTItem["quadrant"], text: string) => {
    const newItem: SWOTItem = {
      id: `item_${Date.now()}`,
      text,
      quadrant
    };
    setItems([...items, newItem]);
    toast({
      title: "Item adicionado",
      description: `Novo item adicionado ao quadrante ${
        quadrants.find(q => q.id === quadrant)?.title
      }`,
    });
  };

  const handleEditItem = (id: string, text: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, text } : item
    ));
  };

  const handleDeleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
    toast({
      title: "Item removido",
      description: "O item foi removido da matriz SWOT",
    });
  };

  const handleDropItem = (id: string, newQuadrant: SWOTItem["quadrant"]) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quadrant: newQuadrant } : item
    ));
    toast({
      title: "Item movido",
      description: `Item movido para o quadrante ${
        quadrants.find(q => q.id === newQuadrant)?.title
      }`,
    });
  };

  const generateAISuggestions = () => {
    setIsGeneratingSuggestions(true);
    // Mock AI suggestion generation - this would be an API call in production
    setTimeout(() => {
      const mockSuggestions: SWOTItem[] = [
        {
          id: `ai_strength_${Date.now()}`,
          text: "Expertise em marketing digital comprovada por cases de sucesso",
          quadrant: "strength"
        },
        {
          id: `ai_strength_${Date.now()+1}`,
          text: "Equipe qualificada com certificações na área",
          quadrant: "strength"
        },
        {
          id: `ai_weakness_${Date.now()}`,
          text: "Recursos financeiros limitados para grandes campanhas",
          quadrant: "weakness"
        },
        {
          id: `ai_weakness_${Date.now()+1}`,
          text: "Processos internos ainda em desenvolvimento",
          quadrant: "weakness"
        },
        {
          id: `ai_opportunity_${Date.now()}`,
          text: "Mercado de pequenas empresas buscando digitalização",
          quadrant: "opportunity"
        },
        {
          id: `ai_opportunity_${Date.now()+1}`,
          text: "Crescente demanda por marketing de conteúdo especializado",
          quadrant: "opportunity"
        },
        {
          id: `ai_threat_${Date.now()}`,
          text: "Grandes agências expandindo para seu nicho de mercado",
          quadrant: "threat"
        },
        {
          id: `ai_threat_${Date.now()+1}`,
          text: "Mudanças constantes nos algoritmos das plataformas sociais",
          quadrant: "threat"
        }
      ];
      
      setAiSuggestions(mockSuggestions);
      setShowAIModal(true);
      setIsGeneratingSuggestions(false);
    }, 2000);
  };

  const handleAcceptSuggestion = (suggestion: SWOTItem) => {
    setItems([...items, { ...suggestion, id: `item_${Date.now()}` }]);
    setAiSuggestions(aiSuggestions.filter(item => item.id !== suggestion.id));
  };

  const handleRejectSuggestion = (id: string) => {
    setAiSuggestions(aiSuggestions.filter(item => item.id !== id));
  };

  const handleAcceptAllSuggestions = () => {
    const newItems = aiSuggestions.map(suggestion => ({
      ...suggestion,
      id: `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }));
    setItems([...items, ...newItems]);
    setAiSuggestions([]);
    setShowAIModal(false);
    toast({
      title: "Sugestões adicionadas",
      description: "Todas as sugestões da IA foram adicionadas à matriz SWOT",
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Matriz SWOT Interativa</h2>
            <p className="text-atlas-neutral">
              Analise os fatores internos e externos que impactam seu negócio. 
              Arraste e solte os itens entre quadrantes conforme necessário.
            </p>
          </div>
          <Button 
            onClick={generateAISuggestions}
            disabled={isGeneratingSuggestions}
            className="bg-atlas-secondary text-white hover:bg-atlas-secondary/90"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            {isGeneratingSuggestions ? "Gerando sugestões..." : "Gerar com IA"}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <QuadrantDropzone
            quadrant={quadrants[0]}
            items={items}
            onAdd={handleAddItem}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
            onDrop={handleDropItem}
          />
          <QuadrantDropzone
            quadrant={quadrants[1]}
            items={items}
            onAdd={handleAddItem}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
            onDrop={handleDropItem}
          />
          <QuadrantDropzone
            quadrant={quadrants[2]}
            items={items}
            onAdd={handleAddItem}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
            onDrop={handleDropItem}
          />
          <QuadrantDropzone
            quadrant={quadrants[3]}
            items={items}
            onAdd={handleAddItem}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
            onDrop={handleDropItem}
          />
        </div>

        {showAIModal && (
          <Card className="mt-8 border border-atlas-secondary/30 bg-atlas-background/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">Sugestões da IA</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowAIModal(false)}
                  className="text-atlas-neutral hover:text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-atlas-neutral mb-4">
                Com base no seu perfil e contexto de negócio, a IA sugeriu os seguintes itens para sua matriz SWOT:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {quadrants.map(quadrant => (
                  <div key={quadrant.id} className={`p-4 rounded-lg ${quadrant.bgColor}`}>
                    <h4 className={`text-md font-semibold ${quadrant.color} mb-2`}>{quadrant.title}</h4>
                    <div className="space-y-2">
                      {aiSuggestions
                        .filter(suggestion => suggestion.quadrant === quadrant.id)
                        .map(suggestion => (
                          <div 
                            key={suggestion.id}
                            className="flex justify-between items-center p-3 bg-atlas-background/70 rounded-md border border-white/10"
                          >
                            <p className="text-white text-sm">{suggestion.text}</p>
                            <div className="flex space-x-2">
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                onClick={() => handleRejectSuggestion(suggestion.id)}
                                className="h-8 w-8 p-0 text-atlas-neutral hover:text-red-500"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                onClick={() => handleAcceptSuggestion(suggestion)}
                                className="h-8 w-8 p-0 text-atlas-neutral hover:text-green-500"
                              >
                                <ArrowRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      {aiSuggestions.filter(suggestion => suggestion.quadrant === quadrant.id).length === 0 && (
                        <p className="text-atlas-neutral text-sm italic">Nenhuma sugestão para este quadrante</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {aiSuggestions.length > 0 && (
                <div className="flex justify-end">
                  <Button 
                    onClick={handleAcceptAllSuggestions}
                    className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
                  >
                    Aceitar todas as sugestões
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </DndProvider>
  );
};
