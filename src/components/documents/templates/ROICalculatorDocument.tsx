
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MarketingData {
  investment: number;
  revenue: number;
  fixedCosts: number;
  variableCosts: number;
}

interface CalculationResult {
  roi: number;
  profitMargin: number;
  payback: number;
}

export const ROICalculatorDocument = () => {
  const [formData, setFormData] = useState<MarketingData>({
    investment: 5000,
    revenue: 20000,
    fixedCosts: 2000,
    variableCosts: 3000,
  });
  
  const [result, setResult] = useState<CalculationResult>({
    roi: 0,
    profitMargin: 0,
    payback: 0,
  });
  
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [isGeneratingRecommendations, setIsGeneratingRecommendations] = useState(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  
  const { toast } = useToast();

  // Calculate results whenever form data changes
  useEffect(() => {
    calculateResults();
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Convert to number and validate it's a positive number
    const numValue = parseFloat(value) || 0;
    
    setFormData({
      ...formData,
      [name]: numValue,
    });
  };

  const calculateResults = () => {
    const { investment, revenue, fixedCosts, variableCosts } = formData;
    
    // Calculate profit
    const totalCosts = fixedCosts + variableCosts;
    const profit = revenue - totalCosts;
    
    // Calculate ROI
    const roi = investment > 0 ? ((profit - investment) / investment) * 100 : 0;
    
    // Calculate profit margin
    const profitMargin = revenue > 0 ? (profit / revenue) * 100 : 0;
    
    // Calculate payback in months (assuming revenue is monthly)
    const payback = profit > 0 ? investment / profit : 0;
    
    setResult({
      roi: parseFloat(roi.toFixed(2)),
      profitMargin: parseFloat(profitMargin.toFixed(2)),
      payback: parseFloat(payback.toFixed(2)),
    });
  };

  const generateRecommendations = () => {
    setIsGeneratingRecommendations(true);
    
    // This would be an API call to an AI service in a real implementation
    setTimeout(() => {
      let aiRecommendations: string[] = [];
      
      // Simple rule-based recommendations based on the calculation results
      if (result.roi < 0) {
        aiRecommendations.push("Seu ROI está negativo. Considere reduzir os custos fixos ou aumentar a receita através de upsell para clientes existentes.");
        aiRecommendations.push("Revise sua estratégia de aquisição de clientes para focar em canais com menor custo por aquisição (CAC).");
      } else if (result.roi < 100) {
        aiRecommendations.push("Seu ROI está positivo, mas abaixo do ideal. Considere otimizar sua conversão no funil de vendas para aumentar a receita sem aumentar o investimento.");
        aiRecommendations.push("Teste diferentes canais de marketing para identificar os que oferecem o melhor retorno para seu negócio.");
      } else {
        aiRecommendations.push("Seu ROI está muito bom! Considere aumentar o investimento em marketing para escalar os resultados atuais.");
        aiRecommendations.push("Documente os canais e estratégias que estão gerando esses resultados positivos para replicar o sucesso.");
      }
      
      if (result.profitMargin < 15) {
        aiRecommendations.push("Sua margem de lucro está abaixo do ideal para muitos setores. Analise sua estrutura de custos para identificar oportunidades de otimização.");
      }
      
      if (result.payback > 3) {
        aiRecommendations.push("O tempo de payback é relativamente longo. Considere estratégias de curto prazo para melhorar o fluxo de caixa, como ofertas com ciclo de venda mais curto.");
      }
      
      aiRecommendations.push("Considere criar uma análise de sensibilidade para entender como diferentes níveis de investimento afetariam seu ROI e margem de lucro.");
      
      setRecommendations(aiRecommendations);
      setShowRecommendations(true);
      setIsGeneratingRecommendations(false);
      
      toast({
        title: "Recomendações geradas",
        description: "A IA analisou seus dados e gerou recomendações personalizadas.",
      });
    }, 2000);
  };

  const getRoiColor = (roi: number) => {
    if (roi < 0) return "text-red-500";
    if (roi < 50) return "text-amber-500";
    if (roi < 100) return "text-blue-400";
    return "text-green-500";
  };

  const getMarginColor = (margin: number) => {
    if (margin < 0) return "text-red-500";
    if (margin < 10) return "text-amber-500";
    if (margin < 20) return "text-blue-400";
    return "text-green-500";
  };

  const getPaybackColor = (payback: number) => {
    if (payback > 12) return "text-red-500";
    if (payback > 6) return "text-amber-500";
    if (payback > 3) return "text-blue-400";
    return "text-green-500";
  };

  const getRoiProgress = (roi: number) => {
    if (roi < 0) return 0;
    if (roi > 200) return 100;
    return roi / 2;
  };

  const getMarginProgress = (margin: number) => {
    if (margin < 0) return 0;
    if (margin > 50) return 100;
    return margin * 2;
  };

  const getPaybackProgress = (payback: number) => {
    if (payback <= 0) return 0;
    if (payback >= 12) return 0;
    return 100 - ((payback / 12) * 100);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Calculadora de ROI em Marketing</h2>
        <p className="text-atlas-neutral mb-6">
          Calcule o retorno sobre investimento das suas ações de marketing e descubra como otimizar seus resultados.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-atlas-background/50 border-white/10">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Dados de entrada</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="investment" className="text-white">
                    Investimento em Marketing (R$)
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-atlas-neutral" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-60">Total investido em campanhas, conteúdo, mídia paga e outras ações de marketing</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="investment"
                  name="investment"
                  type="number"
                  className="bg-atlas-background/30 border-white/10 text-white"
                  value={formData.investment}
                  onChange={handleInputChange}
                  min={0}
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="revenue" className="text-white">
                    Receita Gerada (R$)
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-atlas-neutral" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-60">Receita total obtida através das ações de marketing</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="revenue"
                  name="revenue"
                  type="number"
                  className="bg-atlas-background/30 border-white/10 text-white"
                  value={formData.revenue}
                  onChange={handleInputChange}
                  min={0}
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="fixedCosts" className="text-white">
                    Custos Fixos (R$)
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-atlas-neutral" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-60">Custos que não variam com o volume de vendas (equipe, ferramentas, etc.)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="fixedCosts"
                  name="fixedCosts"
                  type="number"
                  className="bg-atlas-background/30 border-white/10 text-white"
                  value={formData.fixedCosts}
                  onChange={handleInputChange}
                  min={0}
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="variableCosts" className="text-white">
                    Custos Variáveis (R$)
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-atlas-neutral" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-60">Custos que variam de acordo com o volume de vendas (comissões, taxas, etc.)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="variableCosts"
                  name="variableCosts"
                  type="number"
                  className="bg-atlas-background/30 border-white/10 text-white"
                  value={formData.variableCosts}
                  onChange={handleInputChange}
                  min={0}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-atlas-background/50 border-white/10">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Resultados</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-atlas-neutral">ROI</p>
                  <p className={`text-xl font-bold ${getRoiColor(result.roi)}`}>
                    {result.roi}%
                  </p>
                </div>
                <Progress value={getRoiProgress(result.roi)} className="h-2 bg-atlas-background" />
                <p className="text-xs text-atlas-neutral mt-1">
                  {result.roi < 0 
                    ? "Negativo - Revisão necessária"
                    : result.roi < 100 
                    ? "Positivo - Com potencial de melhoria"
                    : "Excelente - Alto retorno"}
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-atlas-neutral">Margem de Lucro</p>
                  <p className={`text-xl font-bold ${getMarginColor(result.profitMargin)}`}>
                    {result.profitMargin}%
                  </p>
                </div>
                <Progress value={getMarginProgress(result.profitMargin)} className="h-2 bg-atlas-background" />
                <p className="text-xs text-atlas-neutral mt-1">
                  {result.profitMargin < 0 
                    ? "Negativa - Operação no prejuízo"
                    : result.profitMargin < 15 
                    ? "Baixa - Abaixo da média do mercado"
                    : result.profitMargin < 30 
                    ? "Média - Dentro do esperado"
                    : "Alta - Acima da média do mercado"}
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-atlas-neutral">Payback (meses)</p>
                  <p className={`text-xl font-bold ${getPaybackColor(result.payback)}`}>
                    {result.payback.toFixed(1)}
                  </p>
                </div>
                <Progress value={getPaybackProgress(result.payback)} className="h-2 bg-atlas-background" />
                <p className="text-xs text-atlas-neutral mt-1">
                  {result.payback <= 0 
                    ? "Indefinido - Sem lucro para calcular"
                    : result.payback > 12 
                    ? "Longo - Acima de 1 ano"
                    : result.payback > 6 
                    ? "Médio - Entre 6 e 12 meses"
                    : result.payback > 3 
                    ? "Curto - Entre 3 e 6 meses"
                    : "Muito rápido - Menos de 3 meses"}
                </p>
              </div>
              
              <Button 
                onClick={generateRecommendations}
                disabled={isGeneratingRecommendations}
                className="w-full bg-atlas-secondary text-white hover:bg-atlas-secondary/90 mt-4"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                {isGeneratingRecommendations ? "Gerando recomendações..." : "Gerar recomendações com IA"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {showRecommendations && (
        <Card className="bg-atlas-background/50 border-atlas-secondary/30 mt-6">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Recomendações da IA
            </h3>
            <p className="text-atlas-neutral mb-4">
              Com base na análise dos seus resultados, a IA sugere as seguintes ações:
            </p>
            <ul className="space-y-3">
              {recommendations.map((recommendation, index) => (
                <li key={index} className="pl-6 relative text-white">
                  <span className="absolute left-0 top-1 text-atlas-secondary">•</span>
                  {recommendation}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
