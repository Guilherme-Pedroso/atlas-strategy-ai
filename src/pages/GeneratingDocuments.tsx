
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, FileText, PieChart, Mail, Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const GeneratingDocuments = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const phases = [
    "Analisando suas respostas...",
    "Gerando matriz SWOT personalizada...",
    "Criando pitch deck estratégico...",
    "Definindo estratégia de marketing...",
    "Desenvolvendo análise de ROI...",
    "Finalizando documentos...",
  ];
  
  const documentExamples = [
    {
      title: "Matriz SWOT",
      icon: <PieChart className="h-8 w-8 text-blue-400" />,
      description: "Análise detalhada dos pontos fortes, fracos, oportunidades e ameaças do seu negócio.",
      color: "from-blue-600/20 to-blue-400/5",
    },
    {
      title: "Pitch Deck",
      icon: <FileText className="h-8 w-8 text-purple-400" />,
      description: "Apresentação profissional para investidores, com todos os slides essenciais.",
      color: "from-purple-600/20 to-purple-400/5",
    },
    {
      title: "Plano de Marketing",
      icon: <Sparkles className="h-8 w-8 text-atlas-highlight" />,
      description: "Estratégia completa de marketing adaptada ao seu segmento e objetivos.",
      color: "from-atlas-highlight/20 to-atlas-highlight/5",
    },
    {
      title: "Templates de Email",
      icon: <Mail className="h-8 w-8 text-green-400" />,
      description: "Modelos de email prontos para comunicação com clientes e leads.",
      color: "from-green-600/20 to-green-400/5",
    },
  ];

  useEffect(() => {
    // Simular progresso
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Redirecionar para a página de checkout após 1 segundo
          setTimeout(() => navigate("/checkout"), 1000);
          return 100;
        }
        return prev + 0.6;
      });
    }, 50);

    // Alternar entre as fases
    const phaseInterval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % phases.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(phaseInterval);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-atlas-background flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full mx-auto text-center">
        <h1 className="text-3xl font-bold text-white mb-3">
          Gerando seus documentos estratégicos
        </h1>
        <p className="text-atlas-neutral text-lg mb-8">
          Estamos criando sua estratégia personalizada com base nas suas respostas. Isso pode levar alguns instantes.
        </p>

        <div className="w-full mb-6">
          <Progress value={progress} className="h-2" />
        </div>

        <div className="h-12 mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-atlas-highlight text-xl font-medium"
            >
              {phases[currentPhase]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {documentExamples.map((doc, index) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className={`bg-gradient-to-br ${doc.color} p-6 rounded-lg border border-white/5 text-left`}
            >
              <div className="flex items-start">
                <div className="rounded-full bg-atlas-background/50 p-3 mr-4">
                  {doc.icon}
                </div>
                <div>
                  <h3 className="text-white font-medium text-lg">{doc.title}</h3>
                  <p className="text-atlas-neutral text-sm">{doc.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
              className="w-3 h-3 rounded-full bg-atlas-highlight"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneratingDocuments;
