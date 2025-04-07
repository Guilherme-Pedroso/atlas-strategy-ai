
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Calendar,
  Clock,
  Edit,
  Copy,
  Trash2,
  Share2,
  Download,
  EyeIcon,
  ExternalLink
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface Document {
  id: string;
  name: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  status: "draft" | "published" | "archived";
  tags: string[];
  route?: string;
}

export const SmartDocumentsContent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "doc-1",
      name: "Plano de Marketing Q1 2025",
      type: "Estratégia",
      createdAt: new Date(2025, 0, 15),
      updatedAt: new Date(2025, 2, 20),
      status: "published",
      tags: ["marketing", "2025", "planejamento"],
      route: "/document/plano-marketing"
    },
    {
      id: "doc-2",
      name: "Análise SWOT",
      type: "Matriz",
      createdAt: new Date(2025, 1, 10),
      updatedAt: new Date(2025, 1, 10),
      status: "draft",
      tags: ["análise", "estratégia"],
      route: "/document/exemplo-swot"
    },
    {
      id: "doc-3",
      name: "Funil de Vendas B2B",
      type: "Framework",
      createdAt: new Date(2025, 2, 5),
      updatedAt: new Date(2025, 3, 1),
      status: "published",
      tags: ["vendas", "b2b"],
      route: "/document/exemplo-branding"
    },
    {
      id: "doc-4",
      name: "Calendário Editorial Q2",
      type: "Planejamento",
      createdAt: new Date(2025, 3, 10),
      updatedAt: new Date(2025, 3, 12),
      status: "draft",
      tags: ["conteúdo", "planejamento"],
      route: "/document/exemplo-content-plan"
    },
    {
      id: "doc-5",
      name: "Pitch Deck",
      type: "Apresentação",
      createdAt: new Date(2025, 2, 22),
      updatedAt: new Date(2025, 2, 25),
      status: "published",
      tags: ["pitch", "startup"],
      route: "/document/pitch-deck"
    },
    {
      id: "doc-6",
      name: "Criador de Personas",
      type: "Template",
      createdAt: new Date(2025, 1, 5),
      updatedAt: new Date(2025, 2, 18),
      status: "draft",
      tags: ["personas", "público-alvo"],
      route: "/document/persona-creator"
    }
  ]);
  
  const handleOpenDocument = (docId: string) => {
    const doc = documents.find(d => d.id === docId);
    if (doc?.route) {
      navigate(doc.route);
    } else {
      toast({
        title: "Documento não encontrado",
        description: "Não foi possível abrir este documento."
      });
    }
  };
  
  const handleDuplicateDocument = (doc: Document) => {
    const newDoc: Document = {
      ...doc,
      id: `doc-${Date.now()}`,
      name: `${doc.name} (Cópia)`,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: "draft"
    };
    
    setDocuments([newDoc, ...documents]);
    
    toast({
      title: "Documento duplicado",
      description: `"${doc.name}" foi duplicado com sucesso.`
    });
  };
  
  const handleDeleteDocument = (docId: string) => {
    setDocuments(documents.filter(doc => doc.id !== docId));
    
    toast({
      title: "Documento excluído",
      description: "O documento foi excluído permanentemente."
    });
  };
  
  const handleShareDocument = (docId: string) => {
    toast({
      title: "Link de compartilhamento copiado",
      description: "O link foi copiado para a área de transferência."
    });
  };
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit"
    });
  };
  
  const getStatusColor = (status: Document["status"]) => {
    switch (status) {
      case "published":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "draft":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "archived":
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };
  
  const filteredDocuments = documents.filter(doc => 
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div className="p-6 bg-atlas-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Meus Documentos</h1>
            <p className="text-atlas-neutral">
              Gerencie seus documentos estratégicos e análises de marketing
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Novo documento
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-atlas-background border-white/10 text-white">
                <DialogHeader>
                  <DialogTitle>Criar novo documento</DialogTitle>
                  <DialogDescription className="text-atlas-neutral">
                    Escolha um tipo de documento para começar.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer transition-colors">
                    <CardContent className="p-4 flex flex-col items-center">
                      <div className="p-2 rounded-md bg-blue-500/10 mb-2">
                        <FileText className="h-6 w-6 text-blue-500" />
                      </div>
                      <h4 className="font-medium mb-1">Documento em Branco</h4>
                      <p className="text-sm text-atlas-neutral text-center">
                        Comece do zero com um documento vazio
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer transition-colors">
                    <CardContent className="p-4 flex flex-col items-center">
                      <div className="p-2 rounded-md bg-purple-500/10 mb-2">
                        <FileText className="h-6 w-6 text-purple-500" />
                      </div>
                      <h4 className="font-medium mb-1">Usar Template</h4>
                      <p className="text-sm text-atlas-neutral text-center">
                        Escolha a partir de modelos prontos
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className="mb-6 bg-atlas-background/50 rounded-lg border border-white/10 p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-atlas-neutral" />
              <Input 
                placeholder="Buscar documentos..." 
                className="pl-9 bg-atlas-background/50 border-white/10 text-white placeholder:text-atlas-neutral" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" className="bg-transparent border-white/10 text-white hover:bg-white/5">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              
              <div className="border border-white/10 rounded-md overflow-hidden flex">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`h-9 w-9 ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-atlas-neutral hover:text-white'}`}
                  onClick={() => setViewMode("grid")}
                >
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                  </div>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`h-9 w-9 ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-atlas-neutral hover:text-white'}`}
                  onClick={() => setViewMode("list")}
                >
                  <div className="flex flex-col gap-0.5 items-center justify-center">
                    <div className="w-4 h-1 bg-current rounded-sm"></div>
                    <div className="w-4 h-1 bg-current rounded-sm"></div>
                    <div className="w-4 h-1 bg-current rounded-sm"></div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-atlas-background/50 border border-white/10 mb-6 overflow-x-auto flex-nowrap max-w-full w-auto">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-atlas-neutral"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger 
              value="recent" 
              className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-atlas-neutral"
            >
              Recentes
            </TabsTrigger>
            <TabsTrigger 
              value="published" 
              className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-atlas-neutral"
            >
              Publicados
            </TabsTrigger>
            <TabsTrigger 
              value="drafts" 
              className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-atlas-neutral"
            >
              Rascunhos
            </TabsTrigger>
            <TabsTrigger 
              value="archived" 
              className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-atlas-neutral"
            >
              Arquivados
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            {filteredDocuments.length > 0 ? (
              <>
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDocuments.map((doc) => (
                      <Card 
                        key={doc.id} 
                        className="bg-atlas-background/50 border-white/10 hover:bg-atlas-background/70 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                        onClick={() => handleOpenDocument(doc.id)}
                      >
                        <CardContent className="p-0">
                          <div className="p-6 pb-4">
                            <div className="flex justify-between items-start mb-3">
                              <div className="p-2 bg-atlas-highlight/10 rounded-md">
                                <FileText className="h-5 w-5 text-atlas-highlight" />
                              </div>
                              
                              <div className="flex items-center">
                                <Badge className={`${getStatusColor(doc.status)}`}>
                                  {doc.status === "published" ? "Publicado" : 
                                   doc.status === "draft" ? "Rascunho" : "Arquivado"}
                                </Badge>
                                
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-atlas-neutral hover:text-white ml-1" onClick={(e) => e.stopPropagation()}>
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent className="bg-atlas-background border-white/10 text-white">
                                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                    <DropdownMenuSeparator className="bg-white/10" />
                                    <DropdownMenuItem 
                                      className="cursor-pointer hover:bg-white/5"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleOpenDocument(doc.id);
                                      }}
                                    >
                                      <EyeIcon className="h-4 w-4 mr-2" />
                                      Visualizar
                                    </DropdownMenuItem>
                                    <DropdownMenuItem 
                                      className="cursor-pointer hover:bg-white/5"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleOpenDocument(doc.id);
                                      }}
                                    >
                                      <Edit className="h-4 w-4 mr-2" />
                                      Editar
                                    </DropdownMenuItem>
                                    <DropdownMenuItem 
                                      className="cursor-pointer hover:bg-white/5"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleDuplicateDocument(doc);
                                      }}
                                    >
                                      <Copy className="h-4 w-4 mr-2" />
                                      Duplicar
                                    </DropdownMenuItem>
                                    <DropdownMenuItem 
                                      className="cursor-pointer hover:bg-white/5"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleShareDocument(doc.id);
                                      }}
                                    >
                                      <Share2 className="h-4 w-4 mr-2" />
                                      Compartilhar
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="bg-white/10" />
                                    <DropdownMenuItem 
                                      className="cursor-pointer text-red-400 hover:bg-white/5 hover:text-red-400"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteDocument(doc.id);
                                      }}
                                    >
                                      <Trash2 className="h-4 w-4 mr-2" />
                                      Excluir
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </div>
                            
                            <h3 className="text-lg font-medium text-white mb-1 line-clamp-1">
                              {doc.name}
                            </h3>
                            
                            <p className="text-atlas-neutral text-sm mb-2">
                              {doc.type}
                            </p>
                            
                            <div className="flex flex-wrap gap-1 mb-3">
                              {doc.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-atlas-neutral"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="border-t border-white/10 p-3 flex items-center justify-between text-xs text-atlas-neutral">
                            <div className="flex items-center">
                              <Calendar className="h-3.5 w-3.5 mr-1" />
                              <span>Criado: {formatDate(doc.createdAt)}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-3.5 w-3.5 mr-1" />
                              <span>Editado: {formatDate(doc.updatedAt)}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <ScrollArea className="h-[calc(100vh-340px)]">
                    <Table className="border border-white/10 rounded-md overflow-hidden">
                      <TableHeader className="bg-white/5">
                        <TableRow className="border-white/10 hover:bg-transparent">
                          <TableHead className="text-white w-[300px]">Nome</TableHead>
                          <TableHead className="text-white">Tipo</TableHead>
                          <TableHead className="text-white">Status</TableHead>
                          <TableHead className="text-white">Criado em</TableHead>
                          <TableHead className="text-white">Última edição</TableHead>
                          <TableHead className="text-white">Tags</TableHead>
                          <TableHead className="text-white text-right">Ações</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredDocuments.map((doc) => (
                          <TableRow 
                            key={doc.id} 
                            className="border-white/10 hover:bg-white/5 cursor-pointer"
                            onClick={() => handleOpenDocument(doc.id)}
                          >
                            <TableCell className="font-medium text-white">
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-atlas-highlight" />
                                {doc.name}
                              </div>
                            </TableCell>
                            <TableCell className="text-atlas-neutral">{doc.type}</TableCell>
                            <TableCell>
                              <Badge className={`${getStatusColor(doc.status)}`}>
                                {doc.status === "published" ? "Publicado" : 
                                 doc.status === "draft" ? "Rascunho" : "Arquivado"}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-atlas-neutral">{formatDate(doc.createdAt)}</TableCell>
                            <TableCell className="text-atlas-neutral">{formatDate(doc.updatedAt)}</TableCell>
                            <TableCell className="text-atlas-neutral">
                              <div className="flex flex-wrap gap-1">
                                {doc.tags.map((tag, index) => (
                                  <span
                                    key={index}
                                    className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-atlas-neutral"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end items-center" onClick={(e) => e.stopPropagation()}>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="h-8 w-8 text-atlas-neutral hover:text-white hover:bg-white/5"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleShareDocument(doc.id);
                                  }}
                                >
                                  <Share2 className="h-4 w-4" />
                                </Button>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button 
                                      variant="ghost" 
                                      size="icon" 
                                      className="h-8 w-8 text-atlas-neutral hover:text-white hover:bg-white/5"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent className="bg-atlas-background border-white/10 text-white">
                                    <DropdownMenuItem 
                                      className="cursor-pointer hover:bg-white/5"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleOpenDocument(doc.id);
                                      }}
                                    >
                                      <Edit className="h-4 w-4 mr-2" />
                                      Editar
                                    </DropdownMenuItem>
                                    <DropdownMenuItem 
                                      className="cursor-pointer hover:bg-white/5"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleDuplicateDocument(doc);
                                      }}
                                    >
                                      <Copy className="h-4 w-4 mr-2" />
                                      Duplicar
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="bg-white/10" />
                                    <DropdownMenuItem 
                                      className="cursor-pointer text-red-400 hover:bg-white/5 hover:text-red-400"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteDocument(doc.id);
                                      }}
                                    >
                                      <Trash2 className="h-4 w-4 mr-2" />
                                      Excluir
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </ScrollArea>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="mx-auto w-16 h-16 rounded-full bg-atlas-background/50 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-atlas-neutral" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Nenhum documento encontrado</h3>
                <p className="text-atlas-neutral max-w-md mx-auto mb-6">
                  {searchQuery 
                    ? `Não encontramos nenhum documento com o termo "${searchQuery}".`
                    : "Você ainda não tem documentos. Crie seu primeiro documento para começar."}
                </p>
                <Button 
                  className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Criar novo documento
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="recent" className="mt-0">
            {/* Filtered for recent documents */}
            <div className="text-center py-16">
              <p className="text-atlas-neutral">Selecione a aba "Todos" para visualizar seus documentos.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="published" className="mt-0">
            {/* Filtered for published documents */}
            <div className="text-center py-16">
              <p className="text-atlas-neutral">Selecione a aba "Todos" para visualizar seus documentos.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="drafts" className="mt-0">
            {/* Filtered for draft documents */}
            <div className="text-center py-16">
              <p className="text-atlas-neutral">Selecione a aba "Todos" para visualizar seus documentos.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="archived" className="mt-0">
            {/* Filtered for archived documents */}
            <div className="text-center py-16">
              <p className="text-atlas-neutral">Selecione a aba "Todos" para visualizar seus documentos.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
