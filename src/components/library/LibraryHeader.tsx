
import React from "react";
import { Search, BookOpen, Filter, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface LibraryHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const LibraryHeader = ({ searchQuery, setSearchQuery }: LibraryHeaderProps) => {
  return (
    <header className="sticky top-0 z-10 bg-atlas-background/90 backdrop-blur-md border-b border-gray-800 p-4 md:p-6">
      <div className="container-atlas">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-atlas-highlight" />
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Biblioteca <span className="text-atlas-highlight">Estratégica</span>
              </h1>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              Mais de 100 materiais explicativos, editáveis e ferramentas táticas — todos conectados com sua estratégia
            </p>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-96">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                type="search"
                placeholder="Buscar materiais, templates e ferramentas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 w-full focus-visible:ring-atlas-highlight"
              />
            </div>
            <Button className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90">
              <Sparkles className="h-4 w-4 mr-2" />
              Sugerir
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <RecommendationPill text="Aproveite nossa inteligência artificial exclusiva. Treinada com milhares de data-points e que entende sua empresa!" />
          {/* <RecommendationPill text="Funil de vendas" />
          <RecommendationPill text="SEO" />
          <RecommendationPill text="Orçamento" />
          <RecommendationPill text="Templates de post" /> */}
        </div>
      </div>
    </header>
  );
};

const RecommendationPill = ({ text }: { text: string }) => (
  <button className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-atlas-secondary/30 text-white hover:bg-atlas-secondary/40 transition-colors">
    {text}
  </button>
);
