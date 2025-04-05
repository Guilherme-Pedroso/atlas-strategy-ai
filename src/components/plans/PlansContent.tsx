
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Crown, Zap, Sparkles, Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export const PlansContent = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleUpgrade = (planName: string) => {
    toast({
      title: "Upgrade solicitado",
      description: `Você escolheu o plano ${planName}. Implementação de pagamento pendente.`,
    });
  };
  
  return (
    <div className="p-6 bg-atlas-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Escolha o plano ideal para sua estratégia
          </h1>
          <p className="text-atlas-neutral max-w-2xl mx-auto text-lg">
            Desbloqueie todo o potencial da Marketing Atlas com um plano que atenda às necessidades da sua empresa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Plano Gratuito */}
          <Card className="bg-atlas-background/50 border-white/10 relative">
            <CardHeader className="pb-4">
              <div className="mb-2 flex justify-center">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <CardTitle className="text-xl text-center text-white">Gratuito</CardTitle>
              <div className="flex justify-center mt-2">
                <span className="text-3xl font-bold text-white">R$0</span>
                <span className="text-atlas-neutral self-end ml-1 mb-1">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">10 gerações de IA por mês</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">5 documentos interativos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Acesso à biblioteca básica</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-atlas-neutral">Templates premium</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-atlas-neutral">Suporte prioritário</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-atlas-neutral">Exportação ilimitada</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => navigate("/dashboard")}
              >
                Seu plano atual
              </Button>
            </CardFooter>
          </Card>
          
          {/* Plano Pro */}
          <Card className="bg-atlas-background/50 border-atlas-highlight relative">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <div className="bg-atlas-highlight text-atlas-background font-medium text-xs px-3 py-1 rounded-full">
                Mais popular
              </div>
            </div>
            <CardHeader className="pb-4">
              <div className="mb-2 flex justify-center">
                <Crown className="h-8 w-8 text-atlas-highlight" />
              </div>
              <CardTitle className="text-xl text-center text-white">Pro</CardTitle>
              <div className="flex justify-center mt-2">
                <span className="text-3xl font-bold text-white">R$97</span>
                <span className="text-atlas-neutral self-end ml-1 mb-1">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">100 gerações de IA por mês</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Documentos ilimitados</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Acesso à biblioteca completa</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Templates premium</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Exportação para múltiplos formatos</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-atlas-neutral">Consultoria personalizada</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-atlas-highlight hover:bg-atlas-highlight/90 text-atlas-background"
                onClick={() => handleUpgrade("Pro")}
              >
                Fazer upgrade
              </Button>
            </CardFooter>
          </Card>
          
          {/* Plano Avançado */}
          <Card className="bg-atlas-background/50 border-white/10 relative">
            <CardHeader className="pb-4">
              <div className="mb-2 flex justify-center">
                <Rocket className="h-8 w-8 text-purple-400" />
              </div>
              <CardTitle className="text-xl text-center text-white">Avançado</CardTitle>
              <div className="flex justify-center mt-2">
                <span className="text-3xl font-bold text-white">R$197</span>
                <span className="text-atlas-neutral self-end ml-1 mb-1">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Gerações de IA ilimitadas</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Documentos ilimitados</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Acesso à biblioteca completa</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Templates premium exclusivos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Suporte dedicado</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Consultoria mensal (1h)</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => handleUpgrade("Avançado")}
              >
                Fazer upgrade
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-atlas-neutral mb-4">
            Tem dúvidas sobre qual plano escolher? Fale com nosso time
          </p>
          <Button 
            variant="outline" 
            className="bg-transparent border-white/10 text-white hover:bg-white/5"
            onClick={() => navigate("/ai")}
          >
            <Sparkles className="h-4 w-4 mr-2 text-atlas-highlight" />
            Consultar a IA estratégica
          </Button>
        </div>
      </div>
    </div>
  );
};
