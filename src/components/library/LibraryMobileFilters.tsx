
import React, { useState } from "react";
import { FilterState } from "@/types/library";
import { contentTypes, businessStages, thematicAreas } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal, Filter, X, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LibrarySidebar } from "./LibrarySidebar";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue
} from "@/components/ui/select";

interface LibraryMobileFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export const LibraryMobileFilters = ({ filters, setFilters }: LibraryMobileFiltersProps) => {
  const [open, setOpen] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  
  const totalFiltersApplied = 
    filters.contentTypes.length + 
    filters.businessStages.length + 
    filters.thematicAreas.length;
  
  const handleClearFilters = () => {
    setFilters({
      contentTypes: [],
      businessStages: [],
      thematicAreas: []
    });
  };
  
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 bg-gray-800/70 border-gray-700 text-white hover:bg-gray-800/90 hover:border-atlas-highlight">
                <Filter className="h-4 w-4" />
                Filtros
                {totalFiltersApplied > 0 && (
                  <Badge className="ml-1 bg-atlas-highlight text-atlas-background">
                    {totalFiltersApplied}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-atlas-background border-r border-gray-800 text-white w-[300px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle className="text-white flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filtros
                    {totalFiltersApplied > 0 && (
                      <Badge className="ml-1 bg-atlas-highlight text-atlas-background">
                        {totalFiltersApplied}
                      </Badge>
                    )}
                  </span>
                  {totalFiltersApplied > 0 && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={handleClearFilters}
                      className="text-gray-400 hover:text-white"
                    >
                      Limpar todos
                    </Button>
                  )}
                </SheetTitle>
              </SheetHeader>
              <LibrarySidebar filters={filters} setFilters={setFilters} />
            </SheetContent>
          </Sheet>
          
          <div className="flex items-center gap-1">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[160px] bg-gray-800/70 border-gray-700 text-white focus:ring-atlas-highlight">
                <div className="flex items-center">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Ordenar por" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                <SelectItem value="relevance">Relevância</SelectItem>
                <SelectItem value="recent">Mais recentes</SelectItem>
                <SelectItem value="popular">Mais populares</SelectItem>
                <SelectItem value="az">A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {totalFiltersApplied > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleClearFilters}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-4 w-4 mr-1" />
            Limpar filtros
          </Button>
        )}
      </div>
      
      {/* Active filters badges */}
      {totalFiltersApplied > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {filters.contentTypes.map(type => (
            <Badge key={type} className="bg-atlas-background border border-atlas-highlight/50 text-atlas-highlight flex items-center gap-1">
              {type}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setFilters(prev => ({
                  ...prev,
                  contentTypes: prev.contentTypes.filter(t => t !== type)
                }))}
              />
            </Badge>
          ))}
          
          {filters.businessStages.map(stage => (
            <Badge key={stage} className="bg-atlas-background border border-atlas-secondary/50 text-atlas-secondary flex items-center gap-1">
              {stage}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setFilters(prev => ({
                  ...prev,
                  businessStages: prev.businessStages.filter(s => s !== stage)
                }))}
              />
            </Badge>
          ))}
          
          {filters.thematicAreas.map(area => (
            <Badge key={area} className="bg-atlas-background border border-white/20 text-white flex items-center gap-1">
              {area}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setFilters(prev => ({
                  ...prev,
                  thematicAreas: prev.thematicAreas.filter(a => a !== area)
                }))}
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};
