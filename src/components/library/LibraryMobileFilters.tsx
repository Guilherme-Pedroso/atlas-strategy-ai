
import React, { useState } from "react";
import { FilterState } from "@/types/library";
import { contentTypes, businessStages, thematicAreas } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal, Filter, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LibrarySidebar } from "./LibrarySidebar";

interface LibraryMobileFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export const LibraryMobileFilters = ({ filters, setFilters }: LibraryMobileFiltersProps) => {
  const [open, setOpen] = useState(false);
  
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
    <div className="flex items-center justify-between mb-4">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 bg-gray-800 border-gray-700 text-white">
            <Filter className="h-4 w-4" />
            Filtros
            {totalFiltersApplied > 0 && (
              <Badge className="ml-1 bg-atlas-highlight text-atlas-background">
                {totalFiltersApplied}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-atlas-background border-r border-gray-800 text-white">
          <SheetHeader>
            <SheetTitle className="text-white flex justify-between items-center">
              <span>Filtros</span>
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
  );
};
