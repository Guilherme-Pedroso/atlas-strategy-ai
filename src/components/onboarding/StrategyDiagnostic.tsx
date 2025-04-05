
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { OnboardingData } from "@/pages/Onboarding";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface StrategyDiagnosticProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

const StrategyDiagnostic: React.FC<StrategyDiagnosticProps> = ({ data, updateData }) => {
  // Handle checkbox changes for marketing channels
  const handleChannelChange = (channel: string, checked: boolean) => {
    if (checked) {
      updateData({ 
        marketingChannels: [...data.marketingChannels, channel] 
      });
    } else {
      updateData({ 
        marketingChannels: data.marketingChannels.filter(c => c !== channel) 
      });
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">Diagnóstico Estratégico</h1>
        <p className="text-atlas-neutral text-lg">
          Conte-nos sobre seu negócio para que possamos criar uma estratégia personalizada.
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-3">
          <Label htmlFor="businessName">Qual é o nome do seu negócio ou projeto?</Label>
          <Input
            id="businessName"
            placeholder="Nome do seu negócio"
            value={data.businessName}
            onChange={(e) => updateData({ businessName: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>

        <div className="space-y-3">
          <Label>Em qual estágio você está?</Label>
          <RadioGroup 
            value={data.stage} 
            onValueChange={(value) => updateData({ stage: value })}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ideia" id="stage-ideia" />
              <Label htmlFor="stage-ideia">Ideia / Validação</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="primeiras_vendas" id="stage-primeiras" />
              <Label htmlFor="stage-primeiras">Primeiras vendas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="crescimento" id="stage-crescimento" />
              <Label htmlFor="stage-crescimento">Em crescimento</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="escalando" id="stage-escalando" />
              <Label htmlFor="stage-escalando">Escalando</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="reposicionamento" id="stage-reposicionamento" />
              <Label htmlFor="stage-reposicionamento">Reposicionamento</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>Qual é o principal objetivo neste momento?</Label>
          <RadioGroup 
            value={data.primaryGoal} 
            onValueChange={(value) => updateData({ primaryGoal: value })}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="aumentar_vendas" id="goal-vendas" />
              <Label htmlFor="goal-vendas">Aumentar vendas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="crescer_redes" id="goal-redes" />
              <Label htmlFor="goal-redes">Crescer redes sociais</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="melhorar_branding" id="goal-branding" />
              <Label htmlFor="goal-branding">Melhorar branding</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lancar_produto" id="goal-produto" />
              <Label htmlFor="goal-produto">Lançar um produto</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="estruturar_marketing" id="goal-marketing" />
              <Label htmlFor="goal-marketing">Estruturar o marketing</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label htmlFor="targetAudience">Quem é seu público-alvo hoje?</Label>
          <Textarea
            id="targetAudience"
            placeholder="Descreva seu público-alvo"
            value={data.targetAudience}
            onChange={(e) => updateData({ targetAudience: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="productType">Qual tipo de produto ou serviço você oferece?</Label>
          <Input
            id="productType"
            placeholder="Ex: infoproduto, loja física, SaaS, serviço B2B"
            value={data.productType}
            onChange={(e) => updateData({ productType: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>

        <div className="space-y-3">
          <Label>Você já utiliza algum canal de marketing?</Label>
          <div className="space-y-2">
            {["Instagram", "Google Ads", "TikTok", "E-mail Marketing", "Influenciadores", "Nenhum"].map((channel) => (
              <div key={channel} className="flex items-center space-x-2">
                <Checkbox 
                  id={`channel-${channel}`} 
                  checked={data.marketingChannels.includes(channel)}
                  onCheckedChange={(checked) => handleChannelChange(channel, checked as boolean)}
                />
                <Label htmlFor={`channel-${channel}`}>{channel}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="biggestChallenge">Qual é o maior desafio que você enfrenta com marketing hoje?</Label>
          <Textarea
            id="biggestChallenge"
            placeholder="Descreva seu maior desafio"
            value={data.biggestChallenge}
            onChange={(e) => updateData({ biggestChallenge: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>

        <div className="space-y-3">
          <Label>Você trabalha sozinho ou com equipe?</Label>
          <RadioGroup 
            value={data.teamSize} 
            onValueChange={(value) => updateData({ teamSize: value })}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sozinho" id="team-sozinho" />
              <Label htmlFor="team-sozinho">Sozinho(a)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1-2" id="team-1-2" />
              <Label htmlFor="team-1-2">1-2 pessoas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="equipe" id="team-equipe" />
              <Label htmlFor="team-equipe">Equipe estruturada</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>Você sabe qual é o seu orçamento atual para marketing?</Label>
          <RadioGroup 
            value={data.hasBudget} 
            onValueChange={(value) => updateData({ hasBudget: value })}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="budget-sim" />
              <Label htmlFor="budget-sim">Sim</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="não" id="budget-nao" />
              <Label htmlFor="budget-nao">Não</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ajuda" id="budget-ajuda" />
              <Label htmlFor="budget-ajuda">Preciso de ajuda com isso</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label htmlFor="region">Em qual região geográfica você atua ou quer crescer?</Label>
          <Select 
            value={data.region} 
            onValueChange={(value) => updateData({ region: value })}
          >
            <SelectTrigger className="bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Selecione uma região" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="brasil">Brasil</SelectItem>
              <SelectItem value="sp">São Paulo</SelectItem>
              <SelectItem value="rj">Rio de Janeiro</SelectItem>
              <SelectItem value="mg">Minas Gerais</SelectItem>
              <SelectItem value="nordeste">Nordeste</SelectItem>
              <SelectItem value="sul">Sul</SelectItem>
              <SelectItem value="centro-oeste">Centro-Oeste</SelectItem>
              <SelectItem value="norte">Norte</SelectItem>
              <SelectItem value="norte">Sudeste</SelectItem>
              <SelectItem value="internacional">Internacional</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default StrategyDiagnostic;
