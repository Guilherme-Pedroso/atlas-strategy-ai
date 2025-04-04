
import React from "react";
import { LibraryItem } from "@/types/library";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Sparkles, FileText, Tool, LayoutTemplate, Book, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface LibraryContentProps {
  items: LibraryItem[];
  onRequestAI: (item: LibraryItem) => void;
}

export const LibraryContent = ({ items, onRequestAI }: LibraryContentProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Explicativo':
        return <Book className="h-4 w-4" />;
      case 'Editável':
        return <Edit className="h-4 w-4" />;
      case 'Template':
        return <LayoutTemplate className="h-4 w-4" />;
      case 'Ferramenta':
        return <Tool className="h-4 w-4" />;
      case 'Estratégia pronta':
        return <Lightbulb className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">
          {items.length} {items.length === 1 ? 'resultado' : 'resultados'} encontrados
        </h2>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 mx-auto text-gray-500 mb-4" />
          <h3 className="text-lg font-medium text-white mb-2">Nenhum material encontrado</h3>
          <p className="text-gray-400">
            Tente ajustar seus filtros ou termos de busca para encontrar o que precisa.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <LibraryCard 
              key={item.id}
              item={item}
              onRequestAI={() => onRequestAI(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface LibraryCardProps {
  item: LibraryItem;
  onRequestAI: () => void;
}

const LibraryCard = ({ item, onRequestAI }: LibraryCardProps) => {
  const typeIcon = getTypeIcon(item.type);
  
  return (
    <Card className="bg-[#1A1F2E] border-gray-800 text-white overflow-hidden hover:shadow-lg hover:shadow-atlas-highlight/5 transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="bg-gray-800/70 text-gray-300 flex items-center gap-1">
            {typeIcon}
            {item.type}
          </Badge>
        </div>
        <CardTitle className="mt-2 text-xl">{item.title}</CardTitle>
        <CardDescription className="text-gray-400">
          {item.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-1 mt-1">
          {item.tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="secondary" className="bg-atlas-secondary/20 text-atlas-secondary border-atlas-secondary/30">
              {tag}
            </Badge>
          ))}
          {item.tags.length > 3 && (
            <Badge variant="secondary" className="bg-gray-800 text-gray-400">
              +{item.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-4">
        <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700">
          <Eye className="h-4 w-4 mr-1" />
          Visualizar
        </Button>
        {item.isEditable && (
          <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700">
            <Edit className="h-4 w-4 mr-1" />
            Editar
          </Button>
        )}
        <Button 
          variant="outline" 
          size="sm" 
          className="ml-auto bg-atlas-secondary/10 border-atlas-secondary/30 text-atlas-secondary hover:bg-atlas-secondary/20"
          onClick={onRequestAI}
        >
          <Sparkles className="h-4 w-4 mr-1" />
          IA
        </Button>
      </CardFooter>
    </Card>
  );
};
