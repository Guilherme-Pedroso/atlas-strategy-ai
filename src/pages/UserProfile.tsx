
import React, { useState } from "react";
import { AppShell } from "@/components/dashboard/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CreditCard, Gift, User, Upload, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "João Silva",
    email: "joao.silva@exemplo.com",
    cpf: "123.456.789-00",
    phone: "+55 (11) 98765-4321",
    companyName: "Minha Empresa",
    companySize: "5-10 funcionários",
    industry: "Tecnologia",
    businessGoals: "Aumentar vendas online e melhorar engajamento nas redes sociais"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram salvas com sucesso.",
    });
  };

  const handleUpgradePlan = () => {
    navigate("/plans");
  };

  const handleBuyCredits = () => {
    toast({
      title: "Compra de créditos",
      description: "Redirecionando para tela de pagamento...",
    });
  };

  return (
    <AppShell>
      <div className="container py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-80 space-y-4">
            <Card className="bg-atlas-background/50 border-white/10">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-20 w-20 mb-4 border-2 border-atlas-highlight">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback className="bg-atlas-secondary/30 text-white text-xl">JS</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold text-white">{formData.name}</h2>
                  <p className="text-atlas-neutral">{formData.email}</p>
                  
                  <div className="mt-4 w-full">
                    <Badge className="bg-atlas-highlight text-atlas-background mb-2 w-full justify-center py-1">
                      Plano Atlas Pro
                    </Badge>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/10 text-white hover:bg-white/5"
                      onClick={handleUpgradePlan}
                    >
                      Fazer upgrade
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-atlas-background/50 border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-white">Consumo de IA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-atlas-neutral">Créditos utilizados</span>
                      <span className="text-white">123/500</span>
                    </div>
                    <Progress className="h-2" value={25} />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-atlas-neutral">Documentos criados</span>
                      <span className="text-white">8/20</span>
                    </div>
                    <Progress className="h-2" value={40} />
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="w-full bg-atlas-highlight/10 border border-atlas-highlight/20 hover:bg-atlas-highlight/20 text-atlas-highlight"
                    onClick={handleBuyCredits}
                  >
                    <Gift className="mr-2 h-4 w-4" /> Comprar créditos
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-atlas-background/50 border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-white">Links úteis</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-col divide-y divide-white/5">
                  <Button 
                    variant="ghost" 
                    className="justify-start rounded-none py-3 hover:bg-white/5 text-atlas-neutral hover:text-white"
                    onClick={() => navigate("/settings")}
                  >
                    Configurações
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="justify-start rounded-none py-3 hover:bg-white/5 text-atlas-neutral hover:text-white"
                    onClick={() => navigate("/plans")}
                  >
                    Planos
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="justify-start rounded-none py-3 hover:bg-white/5 text-atlas-neutral hover:text-white"
                  >
                    Ajuda e suporte
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 w-full">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="bg-atlas-background/30 border border-white/10 mb-4">
                <TabsTrigger value="profile" className="data-[state=active]:bg-atlas-highlight data-[state=active]:text-atlas-background">
                  <User className="h-4 w-4 mr-2" />
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="billing" className="data-[state=active]:bg-atlas-highlight data-[state=active]:text-atlas-background">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Faturamento
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="mt-0">
                <Card className="bg-atlas-background/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Informações pessoais</CardTitle>
                    <CardDescription className="text-atlas-neutral">
                      Atualize seus dados de contato e informações pessoais.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm text-atlas-neutral">Nome completo</label>
                        <Input 
                          name="name"
                          value={formData.name} 
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/10 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-atlas-neutral">E-mail</label>
                        <Input 
                          name="email"
                          value={formData.email} 
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/10 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-atlas-neutral">CPF</label>
                        <Input 
                          name="cpf"
                          value={formData.cpf} 
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/10 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-atlas-neutral">Celular</label>
                        <Input 
                          name="phone"
                          value={formData.phone} 
                          onChange={handleInputChange}
                          className="bg-white/5 border-white/10 text-white"
                        />
                      </div>
                    </div>
                    
                    <Separator className="bg-white/10 my-6" />
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">Informações estratégicas</h3>
                      <p className="text-sm text-atlas-neutral">
                        Estes dados foram coletados durante o onboarding e são utilizados para personalizar suas estratégias.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm text-atlas-neutral">Nome da empresa</label>
                          <Input 
                            name="companyName"
                            value={formData.companyName} 
                            onChange={handleInputChange}
                            className="bg-white/5 border-white/10 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-atlas-neutral">Tamanho da empresa</label>
                          <Input 
                            name="companySize"
                            value={formData.companySize} 
                            onChange={handleInputChange}
                            className="bg-white/5 border-white/10 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-atlas-neutral">Indústria / Setor</label>
                          <Input 
                            name="industry"
                            value={formData.industry} 
                            onChange={handleInputChange}
                            className="bg-white/5 border-white/10 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-atlas-neutral">Objetivos de negócio</label>
                          <Textarea 
                            name="businessGoals"
                            value={formData.businessGoals} 
                            onChange={handleInputChange}
                            className="bg-white/5 border-white/10 text-white min-h-24"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-white/10 pt-6 flex justify-between">
                    <Button 
                      variant="ghost" 
                      className="text-atlas-neutral hover:text-white hover:bg-white/5"
                      onClick={() => navigate("/settings")}
                    >
                      Ir para configurações
                    </Button>
                    <Button 
                      className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
                      onClick={handleSaveProfile}
                    >
                      Salvar alterações
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="billing" className="mt-0">
                <Card className="bg-atlas-background/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Plano atual</CardTitle>
                    <CardDescription className="text-atlas-neutral">
                      Gerencie seu plano e informações de pagamento.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-atlas-highlight/10 border border-atlas-highlight/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-semibold text-white">Atlas Pro</h3>
                          <p className="text-atlas-neutral">R$ 99,00/mês</p>
                        </div>
                        <Badge className="bg-atlas-highlight text-atlas-background">Ativo</Badge>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-sm text-atlas-neutral">
                          <CheckCircle2 className="h-4 w-4 text-atlas-highlight" />
                          <span>Acesso a todas as ferramentas</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-atlas-neutral">
                          <CheckCircle2 className="h-4 w-4 text-atlas-highlight" />
                          <span>500 créditos de IA / mês</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-atlas-neutral">
                          <CheckCircle2 className="h-4 w-4 text-atlas-highlight" />
                          <span>Até 20 documentos</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-atlas-neutral">
                          <CheckCircle2 className="h-4 w-4 text-atlas-highlight" />
                          <span>Exportação ilimitada</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex gap-3">
                        <Button 
                          variant="outline" 
                          className="border-white/10 text-white hover:bg-white/5"
                          onClick={handleUpgradePlan}
                        >
                          Fazer upgrade
                        </Button>
                        <Button 
                          variant="ghost" 
                          className="text-red-400 hover:bg-red-400/10 hover:text-red-400"
                        >
                          Cancelar assinatura
                        </Button>
                      </div>
                    </div>
                    
                    <Separator className="bg-white/10 my-6" />
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">Método de pagamento</h3>
                      
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-white/10 p-2 rounded">
                              <CreditCard className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <p className="text-white font-medium">•••• •••• •••• 4242</p>
                              <p className="text-sm text-atlas-neutral">Expira em 12/2025</p>
                            </div>
                          </div>
                          <Button variant="ghost" className="text-atlas-neutral hover:text-white hover:bg-white/5">
                            Editar
                          </Button>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <Button 
                          variant="outline" 
                          className="border-white/10 text-white hover:bg-white/5"
                        >
                          <CreditCard className="mr-2 h-4 w-4" />
                          Adicionar método de pagamento
                        </Button>
                      </div>
                    </div>
                    
                    <Separator className="bg-white/10 my-6" />
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">Histórico de faturas</h3>
                      
                      <div className="bg-white/5 border border-white/10 rounded-lg divide-y divide-white/10">
                        <div className="p-4 flex justify-between items-center">
                          <div>
                            <p className="text-white">Fatura #1234</p>
                            <p className="text-sm text-atlas-neutral">07/04/2025</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-medium">R$ 99,00</p>
                            <Badge variant="outline" className="text-atlas-highlight border-atlas-highlight">Pago</Badge>
                          </div>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                          <div>
                            <p className="text-white">Fatura #1233</p>
                            <p className="text-sm text-atlas-neutral">07/03/2025</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-medium">R$ 99,00</p>
                            <Badge variant="outline" className="text-atlas-highlight border-atlas-highlight">Pago</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default UserProfile;
