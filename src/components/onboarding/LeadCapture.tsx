
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { OnboardingData } from "@/pages/Onboarding";

interface LeadCaptureProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

const LeadCapture: React.FC<LeadCaptureProps> = ({ data, updateData }) => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">Bem-vindo(a) ao Marketing Atlas</h1>
        <p className="text-atlas-neutral text-lg">
          Vamos criar sua estratégia de marketing personalizada. Comece nos contando um pouco sobre você.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="name">Qual o seu nome?</Label>
          <Input
            id="name"
            placeholder="Digite seu nome completo"
            value={data.name}
            onChange={(e) => updateData({ name: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="email">Qual seu e-mail?</Label>
          <Input
            id="email"
            type="email"
            placeholder="seuemail@exemplo.com"
            value={data.email}
            onChange={(e) => updateData({ email: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="phone">Qual seu telefone com DDD?</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(99) 99999-9999"
            value={data.phone}
            onChange={(e) => updateData({ phone: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>
      </div>
    </div>
  );
};

export default LeadCapture;
