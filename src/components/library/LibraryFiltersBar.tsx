
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { FilterState } from "@/types/library";
import { ChevronDown } from "lucide-react";

interface LibraryFiltersBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export const LibraryFiltersBar = ({ filters, setFilters }: LibraryFiltersBarProps) => {
  const contentTypes = [
    { label: "Templates", value: "template" },
    { label: "Calculadoras", value: "calculator" },
    { label: "Guias", value: "guide" },
    { label: "Checklists", value: "checklist" }
  ];
  
  const businessStages = [
    { label: "Iniciante", value: "beginner" },
    { label: "Em crescimento", value: "growth" },
    { label: "Estabelecido", value: "established" },
    { label: "Expansão", value: "expansion" }
  ];
  
  const thematicAreas = [
    { label: "Marketing Digital", value: "digital-marketing" },
    { label: "Redes Sociais", value: "social-media" },
    { label: "E-commerce", value: "ecommerce" },
    { label: "Branding", value: "branding" },
    { label: "Vendas", value: "sales" },
    { label: "Conteúdo", value: "content" }
  ];
  
  const toggleFilter = (filterType: keyof FilterState, value: string) => {
    setFilters(prev => {
      if (prev[filterType].includes(value)) {
        return {
          ...prev,
          [filterType]: prev[filterType].filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [filterType]: [...prev[filterType], value]
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
