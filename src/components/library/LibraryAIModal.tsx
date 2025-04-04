
import React from "react";
import { LibraryItem } from "@/types/library";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface LibraryAIModalProps {
  item: LibraryItem;
  isOpen: boolean;
  onClose: () => void;
}

export const LibraryAIModal = ({ item, isOpen, onClose }: LibraryAIModalProps) => {
  const handleGenerateWithAI = () => {
    toast({
      title: "Solicitação enviada",
      description: `A IA está preparando o conteúdo para "${item.title}"`,
      variant: "default",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-atlas-background border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">Assistente IA</DialogTitle>
          <DialogDescription className="text-gray-400">
            Personalize este conteúdo automaticamente com IA
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 space-y-4">
          <div className="p-4 rounded-lg bg-atlas-secondary/10 border border-atlas-secondary/30">
            <h3 className="font-medium text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.description}</p>
          </div>
          
          <p className="text-gray-300">
            Quer que a IA preencha esse material com base no seu negócio?
          </p>
          
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <p className="text-sm text-gray-300">
              A IA utilizará as informações do seu perfil e diagnóstico para personalizar este conteúdo para seu negócio.
            </p>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="border-gray-700 text-gray-300 hover:bg-gray-800">
            Cancelar
          </Button>
          <Button 
            onClick={handleGenerateWithAI}
            className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Sim, gerar com IA
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
