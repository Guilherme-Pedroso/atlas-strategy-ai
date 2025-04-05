
import React from "react";
import { FilterState, ContentType, BusinessStage, ThematicArea } from "@/types/library";
import { contentTypes, businessStages, thematicAreas } from "@/lib/mock-data";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { BadgeInfo, Sparkles, BookOpen, FileText, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

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

  // Helper to get the icon for a content type
  const getContentTypeIcon = (type: string) => {
    switch(type) {
      case "Tutorial":
        return <BookOpen className="h-4 w-4 text-atlas-highlight" />;
      case "Template":
        return <FileText className="h-4 w-4 text-atlas-secondary" />;
      case "Ferramenta":
        return <Layers className="h-4 w-4 text-atlas-cta" />;
      case "Guia":
        return <BadgeInfo className="h-4 w-4 text-blue-400" />;
      default:
        return <FileText className="h-4 w-4 text-atlas-neutral" />;
    }
  };

  return (
    <aside className="w-64 border-r border-gray-800 p-5 overflow-y-auto bg-gray-900/30 rounded-lg">
      <div className="space-y-6">
        {/* User Pro info section */}
        <div className="p-4 bg-atlas-secondary/10 border border-atlas-secondary/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 text-atlas-secondary" />
            <h3 className="text-sm font-semibold text-white">Atlas Pro</h3>
          </div>
          <p className="text-xs text-atlas-neutral mb-3">Acesso ilimitado à biblioteca estratégica</p>
          <div className="mb-2">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-atlas-neutral">Uso mensal</span>
              <span className="text-white">64/100</span>
            </div>
            <Progress value={64} className="h-1 bg-atlas-background" />
          </div>
          <Button className="w-full bg-atlas-secondary/20 hover:bg-atlas-secondary/30 text-atlas-secondary text-xs h-8">
            Gerenciar assinatura
          </Button>
        </div>

        <div>
          <h3 className="text-sm font-medium text-white mb-3 flex items-center">
            <FileText className="h-4 w-4 mr-2" />
            Tipo de conteúdo
          </h3>
          <div className="space-y-2">
            {contentTypes.map(type => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox 
                  id={`type-${type}`} 
                  checked={filters.contentTypes.includes(type)}
                  onCheckedChange={() => handleContentTypeChange(type)}
                  className="border-white/30 data-[state=checked]:bg-atlas-highlight data-[state=checked]:border-atlas-highlight"
                />
                <Label 
                  htmlFor={`type-${type}`}
                  className="text-sm text-gray-300 cursor-pointer flex items-center"
                >
                  {getContentTypeIcon(type)}
                  <span className="ml-2">{type}</span>
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-gray-800" />

        <div>
          <h3 className="text-sm font-medium text-white mb-3 flex items-center">
            <Layers className="h-4 w-4 mr-2" />
            Estágio do negócio
          </h3>
          <div className="space-y-2">
            {businessStages.map(stage => (
              <div key={stage} className="flex items-center space-x-2">
                <Checkbox 
                  id={`stage-${stage}`} 
                  checked={filters.businessStages.includes(stage)}
                  onCheckedChange={() => handleStageChange(stage)}
                  className="border-white/30 data-[state=checked]:bg-atlas-secondary data-[state=checked]:border-atlas-secondary"
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

        <Separator className="bg-gray-800" />

        <div>
          <h3 className="text-sm font-medium text-white mb-3 flex items-center">
            <BadgeInfo className="h-4 w-4 mr-2" />
            Área temática
          </h3>
          <div className="space-y-2">
            {thematicAreas.map(area => (
              <div key={area} className="flex items-center space-x-2">
                <Checkbox 
                  id={`area-${area}`} 
                  checked={filters.thematicAreas.includes(area)}
                  onCheckedChange={() => handleThematicAreaChange(area)}
                  className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:border-white"
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
