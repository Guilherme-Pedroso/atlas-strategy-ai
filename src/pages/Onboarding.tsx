
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import LeadCapture from "@/components/onboarding/LeadCapture";
import StrategyDiagnostic from "@/components/onboarding/StrategyDiagnostic";
import AiProcessing from "@/components/onboarding/AiProcessing";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Types for our form data
export type OnboardingData = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  stage: string;
  primaryGoal: string;
  targetAudience: string;
  productType: string;
  marketingChannels: string[];
  biggestChallenge: string;
  teamSize: string;
  hasBudget: string;
  region: string;
};

const initialData: OnboardingData = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  stage: "",
  primaryGoal: "",
  targetAudience: "",
  productType: "",
  marketingChannels: [],
  biggestChallenge: "",
  teamSize: "",
  hasBudget: "",
  region: "",
};

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<OnboardingData>(initialData);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  // Calculate progress percentage
  useEffect(() => {
    // 3 steps total (0-based index): Lead capture, Strategy diagnostic, AI processing
    const totalSteps = 3;
    const percentage = (step / (totalSteps - 1)) * 100;
    setProgress(percentage);
  }, [step]);

  // When moving to next step
  const nextStep = () => {
    if (step === 0) {
      // Validate lead info
      if (!data.name || !data.email || !data.phone) {
        toast({
          title: "Informações necessárias",
          description: "Por favor, preencha todos os campos para continuar.",
          variant: "destructive",
        });
        return;
      }
      
      // Save lead information
      console.log("Lead captured:", {
        name: data.name,
        email: data.email,
        phone: data.phone
      });
      
      // In a real app, you would send this to your backend/API
      toast({
        title: "Informações salvas!",
        description: "Suas informações foram salvas com sucesso.",
      });
    }
    
    // Move to next step if not at the end
    if (step < 2) {
      setStep(step + 1);
    }
  };

  // When moving to previous step
  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  // Update form data
  const updateData = (newData: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  // Handle final action
  const handleFinish = () => {
    // In a real app, submit all data to backend
    console.log("Complete onboarding data:", data);
    
    // Redirect to a dashboard or success page
    window.location.href = "/dashboard"; // For now, just redirect to home
  };

  return (
    <div className="min-h-screen flex flex-col bg-atlas-background text-white overflow-x-hidden">
      {/* Progress bar */}
      <div className="w-full p-4">
        <Progress value={progress} className="h-2 bg-white/10" />
      </div>
      
      {/* Content container */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-black/20 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-xl"
            >
              {step === 0 && (
                <LeadCapture data={data} updateData={updateData} />
              )}
              
              {step === 1 && (
                <StrategyDiagnostic data={data} updateData={updateData} />
              )}
              
              {step === 2 && (
                <AiProcessing onFinish={handleFinish} />
              )}
              
              {/* Navigation buttons */}
              <div className="flex justify-between mt-6 sm:mt-8 md:mt-10">
                {step > 0 ? (
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                    className="text-white border-white/20 hover:bg-white/10"
                    size={isMobile ? "sm" : "default"}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar
                  </Button>
                ) : (
                  <div></div> // Empty div to maintain flex layout
                )}
                
                {step < 2 ? (
                  <Button 
                    onClick={nextStep}
                    className="bg-atlas-highlight text-black hover:bg-atlas-highlight/90"
                    size={isMobile ? "sm" : "default"}
                  >
                    Continuar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : null}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
