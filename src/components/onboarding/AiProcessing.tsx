
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";

interface AiProcessingProps {
  onFinish: () => void;
}

const AiProcessing: React.FC<AiProcessingProps> = ({ onFinish }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [processing, setProcessing] = useState(true);
  const [progressValue, setProgressValue] = useState(0);
  
  const processingMessages = [
    "Analisando seu estágio de negócio...",
    "Identificando ferramentas estratégicas ideais...",
    "Conectando canais ao seu tipo de produto...",
    "Montando plano de ação com base nos seus objetivos...",
    "Ajustando a comunicação ao seu público-alvo...",
    "Gerando plano personalizado..."
  ];

  useEffect(() => {
    // Simulate progress increasing
    const progressInterval = setInterval(() => {
      setProgressValue(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setProcessing(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    // Cycle through processing messages
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % processingMessages.length);
    }, 2000);

    // Cleanup
    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [processingMessages.length]);

  return (
    <div className="space-y-10 text-center">
      <div>
        <h1 className="text-3xl font-bold mb-4">
          {processing 
            ? "Processando suas informações" 
            : "Seu plano estratégico está pronto!"}
        </h1>
        <p className="text-atlas-neutral text-lg">
          {processing 
            ? "Nossa IA está trabalhando para criar seu plano personalizado." 
            : "Criamos uma estratégia personalizada com base nas suas respostas."}
        </p>
      </div>

      {processing ? (
        <div className="space-y-8">
          <div className="h-3">
            <Progress value={progressValue} className="h-3" />
          </div>
          
          <div className="h-16 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-atlas-highlight text-xl font-medium"
              >
                {processingMessages[currentMessage]}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="pt-8 flex justify-center space-x-4">
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
      ) : (
        <div className="space-y-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.2 
              }}
              className="w-24 h-24 rounded-full bg-atlas-highlight flex items-center justify-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-atlas-background"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              onClick={onFinish} 
              className="bg-atlas-highlight text-black hover:bg-atlas-highlight/90 text-lg px-8 py-6 h-auto"
              size="lg"
            >
              Acessar meu painel estratégico
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AiProcessing;
