
import React from "react";
import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const comparisons = [
    {
      aspect: "Preço médio",
      traditional: "R$3.000 a R$12.000/mês",
      atlas: "A partir de R$ 99/mês",
      highlight: true
    },
    {
      aspect: "Tempo de entrega",
      traditional: "15 a 60 dias",
      atlas: "Estratégia em minutos",
      highlight: true
    },
    {
      aspect: "Personalização real",
      traditional: "Limitada à reunião inicial",
      atlas: "100% adaptada às suas respostas",
      highlight: true
    },
    {
      aspect: "Atualização de plano",
      traditional: "Manual, exige nova consultoria",
      atlas: "Automática, contínua com IA",
      highlight: false
    },
    {
      aspect: "Suporte",
      traditional: "Horário comercial (e-mail lento)",
      atlas: "24/7 com IA treinada no seu negócio",
      highlight: false
    },
    {
      aspect: "Formato",
      traditional: "PDF estático e reuniões",
      atlas: "Ferramentas interativas no seu painel",
      highlight: false
    },
    {
      aspect: "Escopo",
      traditional: "Limitado a um projeto",
      atlas: "Evolui com sua empresa",
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-atlas">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-atlas-background">
            Consultoria tradicional ou <span className="text-atlas-secondary">inteligência personalizada</span> em tempo real?
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-atlas-background text-white">
                <th className="p-4 text-left rounded-tl-lg">Aspectos</th>
                <th className="p-4 text-left">Consultoria Tradicional</th>
                <th className="p-4 text-left rounded-tr-lg">Marketing Atlas</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr 
                  key={index} 
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} 
                  ${item.highlight ? 'text-atlas-background font-medium' : 'text-gray-700'}`}
                >
                  <td className="p-4 border-b border-gray-200">{item.aspect}</td>
                  <td className="p-4 border-b border-gray-200">
                    <div className="flex items-center">
                      {item.highlight && <X className="text-atlas-cta mr-2 h-5 w-5" />}
                      {item.traditional}
                    </div>
                  </td>
                  <td className="p-4 border-b border-gray-200">
                    <div className="flex items-center">
                      {item.highlight && <Check className="text-atlas-highlight mr-2 h-5 w-5" />}
                      {item.atlas}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-xl font-medium text-atlas-background">
            Pelo preço de um almoço, você tem o que antes custava o salário de um time inteiro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
