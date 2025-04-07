
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LibraryItem } from "@/types/library";
import { FileText, MessageSquare, Clock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface LibraryContentProps {
  items: LibraryItem[];
  onRequestAI: (item: LibraryItem) => void;
}

export const LibraryContent = ({ items, onRequestAI }: LibraryContentProps) => {
  // Helper function to get badge color based on content type
  const getBadgeColor = (type: string) => {
    switch (type) {
      case "template":
        return "bg-blue-600 hover:bg-blue-700";
      case "calculator":
        return "bg-green-600 hover:bg-green-700";
      case "guide":
        return "bg-purple-600 hover:bg-purple-700";
      case "checklist":
        return "bg-orange-600 hover:bg-orange-700";
      default:
        return "bg-slate-600 hover:bg-slate-700";
    }
  };

  // Helper function to get icon based on content type
  const getTypeLabel = (type: string) => {
    switch (type) {
      case "template":
        return "Template";
      case "calculator":
        return "Calculadora";
      case "guide":
        return "Guia";
      case "checklist":
        return "Checklist";
      default:
        return type;
    }
  };

  // Map item types to document routes
  const getDocumentRoute = (type: string, id: string) => {
    const typeMap: Record<string, string> = {
      "calculator": "exemplo-roi",
      "template": "exemplo-email",
      "guide": "exemplo-branding",
      "checklist": "exemplo-content-plan",
      "swot": "exemplo-swot",
      "pitch": "exemplo-pitch"
    };
    
    // Default to document type from id if available
    const documentType = id.includes("swot") ? "exemplo-swot" : 
                         id.includes("roi") ? "exemplo-roi" :
                         id.includes("email") ? "exemplo-email" :
                         id.includes("content") ? "exemplo-content-plan" :
                         id.includes("pitch") ? "exemplo-pitch" :
                         id.includes("brand") ? "exemplo-branding" :
                         typeMap[type] || "exemplo-swot";
    
    return `/document/${documentType}`;
  };

  return (
    <div>
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden border-white/10 bg-atlas-background/50 transition-all hover:bg-atlas-background">
              <div className="relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-40 w-full object-cover"
                />
                <Badge
                  className={`absolute top-3 left-3 ${getBadgeColor(item.type)}`}
                >
                  {getTypeLabel(item.type)}
                </Badge>
                {item.isPremium && (
                  <Badge
                    className="absolute top-3 right-3 bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
                  >
                    Premium
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold text-white line-clamp-1">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm text-atlas-neutral line-clamp-2">
                  {item.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-white/5 text-atlas-neutral border-white/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {item.tags.length > 3 && (
                    <Badge
                      variant="outline"
                      className="bg-white/5 text-atlas-neutral border-white/10"
                    >
                      +{item.tags.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center text-xs text-atlas-neutral">
                    <Clock className="mr-1 h-3.5 w-3.5" />
                    {item.estimatedTime}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="h-8 gap-1 bg-white/10 text-white hover:bg-white/20"
                      asChild
                    >
                      <Link to={getDocumentRoute(item.type, item.id)}>
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">Abrir</span>
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="h-8 gap-1 bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
                      onClick={() => onRequestAI(item)}
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Pedir à IA</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="mb-4 rounded-full bg-white/5 p-4">
            <MessageSquare className="h-10 w-10 text-atlas-neutral" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">
            Nenhum item encontrado
          </h3>
          <p className="mb-6 text-center text-atlas-neutral">
            Tente ajustar os filtros ou fazer uma nova busca.
          </p>
        </div>
      )}
    </div>
  );
};
