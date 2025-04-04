
import React from "react";
import { Check, X } from "lucide-react";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";

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

        <div className="overflow-x-auto rounded-lg shadow-lg">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-atlas-background text-white">
                <TableHead className="p-4 text-left font-bold text-white">Aspectos</TableHead>
                <TableHead className="p-4 text-left font-bold text-white">Consultoria Tradicional</TableHead>
                <TableHead className="p-4 text-left font-bold text-white">Marketing Atlas</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisons.map((item, index) => (
                <TableRow 
                  key={index} 
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} 
                  ${item.highlight ? 'font-medium' : ''} hover:bg-gray-100 transition-colors`}
                >
                  <TableCell className="p-4 border-b border-gray-200">
                    <span className={item.highlight ? "text-atlas-background font-semibold" : "text-gray-700"}>
                      {item.aspect}
                    </span>
                  </TableCell>
                  <TableCell className="p-4 border-b border-gray-200">
                    <div className="flex items-center">
                      {item.highlight && <X className="text-atlas-cta mr-2 h-5 w-5 shrink-0" />}
                      <span className={item.highlight ? "text-atlas-cta" : "text-gray-700"}>
                        {item.traditional}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="p-4 border-b border-gray-200">
                    <div className="flex items-center">
                      {item.highlight && (
                        <div className="bg-atlas-highlight/10 p-1 rounded-full mr-2">
                          <Check className="text-atlas-highlight h-5 w-5 shrink-0" />
                        </div>
                      )}
                      <span className={item.highlight ? "text-atlas-highlight font-semibold" : "text-gray-700"}>
                        {item.atlas}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="text-center mt-10 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-medium text-atlas-background">
            Pelo preço de um almoço, você tem o que antes custava o <span className="text-atlas-cta">salário de um time inteiro</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
