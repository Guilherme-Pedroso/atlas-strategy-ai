
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { FilterState, ContentType, BusinessStage, ThematicArea } from "@/types/library";
import { ChevronDown } from "lucide-react";

interface LibraryFiltersBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export const LibraryFiltersBar = ({ filters, setFilters }: LibraryFiltersBarProps) => {
  const contentTypes = [
    { label: "Templates", value: "Template" as ContentType },
    { label: "Explicativos", value: "Explicativo" as ContentType },
    { label: "Editáveis", value: "Editável" as ContentType },
    { label: "Ferramentas", value: "Ferramenta" as ContentType }
  ];
  
  const businessStages = [
    { label: "Validação", value: "Validação" as BusinessStage },
    { label: "Crescimento", value: "Crescimento" as BusinessStage },
    { label: "Escala", value: "Escala" as BusinessStage },
    { label: "Branding", value: "Branding" as BusinessStage }
  ];
  
  const thematicAreas = [
    { label: "Marketing", value: "Marketing" as ThematicArea },
    { label: "Vendas", value: "Vendas" as ThematicArea },
    { label: "Finanças", value: "Finanças" as ThematicArea },
    { label: "Branding", value: "Branding" as ThematicArea },
    { label: "Estratégia", value: "Estratégia" as ThematicArea },
    { label: "Conteúdo", value: "Conteúdo" as ThematicArea }
  ];
  
  const toggleFilter = (filterType: keyof FilterState, value: ContentType | BusinessStage | ThematicArea) => {
    setFilters(prev => {
      const currentArray = prev[filterType] as any[];
      if (currentArray.includes(value)) {
        return {
          ...prev,
          [filterType]: currentArray.filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [filterType]: [...currentArray, value]
        };
      }
    });
  };
  
  const clearAllFilters = () => {
    setFilters({
      contentTypes: [],
      businessStages: [],
      thematicAreas: []
    });
  };
  
  const hasActiveFilters = 
    filters.contentTypes.length > 0 || 
    filters.businessStages.length > 0 || 
    filters.thematicAreas.length > 0;
  
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3">
      {/* Tipo de conteúdo */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="bg-atlas-background/50 border-white/10 text-white hover:bg-atlas-background/80"
          >
            Tipo de conteúdo
            <ChevronDown className="ml-2 h-4 w-4 text-atlas-neutral" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-atlas-background border-white/10 text-white">
          {contentTypes.map((type) => (
            <DropdownMenuCheckboxItem
              key={type.value}
              checked={filters.contentTypes.includes(type.value)}
              onCheckedChange={() => toggleFilter("contentTypes", type.value)}
              className="text-atlas-neutral focus:text-white focus:bg-atlas-background/80 cursor-pointer"
            >
              {type.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* Estágio do negócio */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="bg-atlas-background/50 border-white/10 text-white hover:bg-atlas-background/80"
          >
            Estágio do negócio
            <ChevronDown className="ml-2 h-4 w-4 text-atlas-neutral" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-atlas-background border-white/10 text-white">
          {businessStages.map((stage) => (
            <DropdownMenuCheckboxItem
              key={stage.value}
              checked={filters.businessStages.includes(stage.value)}
              onCheckedChange={() => toggleFilter("businessStages", stage.value)}
              className="text-atlas-neutral focus:text-white focus:bg-atlas-background/80 cursor-pointer"
            >
              {stage.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* Áreas temáticas */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="bg-atlas-background/50 border-white/10 text-white hover:bg-atlas-background/80"
          >
            Áreas temáticas
            <ChevronDown className="ml-2 h-4 w-4 text-atlas-neutral" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-atlas-background border-white/10 text-white">
          {thematicAreas.map((area) => (
            <DropdownMenuCheckboxItem
              key={area.value}
              checked={filters.thematicAreas.includes(area.value)}
              onCheckedChange={() => toggleFilter("thematicAreas", area.value)}
              className="text-atlas-neutral focus:text-white focus:bg-atlas-background/80 cursor-pointer"
            >
              {area.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* Limpar filtros */}
      {hasActiveFilters && (
        <Button 
          variant="ghost" 
          size="sm"
          className="text-atlas-neutral hover:text-white"
          onClick={clearAllFilters}
        >
          Limpar filtros
        </Button>
      )}
    </div>
  );
};
