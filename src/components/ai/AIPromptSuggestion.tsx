
import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AIPromptSuggestionProps {
  text: string;
  onClick: () => void;
}

export const AIPromptSuggestion = ({ text, onClick }: AIPromptSuggestionProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="bg-atlas-background/50 border border-white/10 text-white hover:bg-atlas-background/80 hover:border-atlas-highlight/50 transition-all duration-200 group"
      onClick={onClick}
    >
      <span>{text}</span>
      <ChevronRight className="h-3.5 w-3.5 ml-1 text-atlas-highlight opacity-70 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Button>
  );
};
