
import React from "react";
import { FilterState, ContentType, BusinessStage, ThematicArea } from "@/types/library";
import { contentTypes, businessStages, thematicAreas } from "@/lib/mock-data";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface LibrarySidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export const LibrarySidebar = ({ filters, setFilters }: LibrarySidebarProps) => {
  const handleContentTypeChange = (type: ContentType) => {
    setFilters(prev => {
      if (prev.contentTypes.includes(type)) {
        return {
          ...prev,
          contentTypes: prev.contentTypes.filter(t => t !== type)
        };
      } else {
        return {
          ...prev,
          contentTypes: [...prev.contentTypes, type]
        };
      }
    });
  };

  const handleStageChange = (stage: BusinessStage) => {
    setFilters(prev => {
      if (prev.businessStages.includes(stage)) {
        return {
          ...prev,
          businessStages: prev.businessStages.filter(s => s !== stage)
        };
      } else {
        return {
          ...prev,
          businessStages: [...prev.businessStages, stage]
        };
      }
    });
  };

  const handleThematicAreaChange = (area: ThematicArea) => {
    setFilters(prev => {
      if (prev.thematicAreas.includes(area)) {
        return {
          ...prev,
          thematicAreas: prev.thematicAreas.filter(a => a !== area)
        };
      } else {
        return {
          ...prev,
          thematicAreas: [...prev.thematicAreas, area]
        };
      }
    });
  };

  return (
    <aside className="w-64 border-r border-gray-800 p-4 overflow-y-auto bg-gray-900/30">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-white mb-3">Tipo de conteúdo</h3>
          <div className="space-y-2">
            {contentTypes.map(type => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox 
                  id={`type-${type}`} 
                  checked={filters.contentTypes.includes(type)}
                  onCheckedChange={() => handleContentTypeChange(type)}
                />
                <Label 
                  htmlFor={`type-${type}`}
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-white mb-3">Estágio do negócio</h3>
          <div className="space-y-2">
            {businessStages.map(stage => (
              <div key={stage} className="flex items-center space-x-2">
                <Checkbox 
                  id={`stage-${stage}`} 
                  checked={filters.businessStages.includes(stage)}
                  onCheckedChange={() => handleStageChange(stage)}
                />
                <Label 
                  htmlFor={`stage-${stage}`}
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  {stage}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-white mb-3">Área temática</h3>
          <div className="space-y-2">
            {thematicAreas.map(area => (
              <div key={area} className="flex items-center space-x-2">
                <Checkbox 
                  id={`area-${area}`} 
                  checked={filters.thematicAreas.includes(area)}
                  onCheckedChange={() => handleThematicAreaChange(area)}
                />
                <Label 
                  htmlFor={`area-${area}`}
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  {area}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
