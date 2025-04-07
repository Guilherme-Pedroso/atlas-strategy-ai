
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { CheckIcon, CreditCard, ShieldCheck } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type FormValues = {
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
};

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<string>("pro");
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      cardName: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
    },
  });

  const plans = [
    {
      id: "basic",
      name: "Básico",
      price: "0",
      description: "Para quem está começando",
      features: ["5 documentos", "1 estratégia básica", "Exportação limitada"],
      color: "bg-blue-600",
      textColor: "text-blue-600",
      borderColor: "border-blue-600",
    },
    {
      id: "pro",
      name: "Pro",
      price: "97",
      description: "Para profissionais e pequenas empresas",
      features: ["Documentos ilimitados", "3 estratégias avançadas", "Exportação ilimitada", "Suporte prioritário"],
      color: "bg-atlas-highlight",
      textColor: "text-atlas-highlight",
      borderColor: "border-atlas-highlight",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "197",
      description: "Para empresas maiores",
      features: ["Tudo do Pro", "Consultoria mensal", "API de integração", "Suporte 24/7"],
      color: "bg-purple-600",
      textColor: "text-purple-600",
      borderColor: "border-purple-600",
    },
  ];

  const onSubmit = (data: FormValues) => {
    setLoading(true);
    
    // Simular processamento de pagamento
    setTimeout(() => {
      setLoading(false);
      setShowSuccessModal(true);
      
      // Salvar no localStorage que o usuário concluiu o processo
      localStorage.setItem("checkoutCompleted", "true");
      
      // Após 2 segundos, redirecionar para o dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-atlas-background text-white">
      <div className="container max-w-6xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Finalize sua assinatura</h1>
          <p className="text-atlas-neutral max-w-xl mx-auto">
            Estamos quase lá! Escolha seu plano e complete seu pagamento para acessar o Marketing Atlas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`bg-atlas-background/50 border-white/10 ${
                selectedPlan === plan.id ? `border-2 ${plan.borderColor}` : ""
              } relative cursor-pointer transition-all hover:translate-y-[-4px]`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <div className="bg-atlas-highlight text-atlas-background font-medium text-xs px-3 py-1 rounded-full">
                    Mais popular
                  </div>
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-center text-white flex items-center justify-between">
                  {plan.name}
                  {selectedPlan === plan.id && (
                    <div className={`${plan.color} h-6 w-6 rounded-full flex items-center justify-center`}>
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                  )}
                </CardTitle>
                <div className="flex justify-center mt-2">
                  <span className="text-3xl font-bold text-white">R${plan.price}</span>
                  <span className="text-atlas-neutral self-end ml-1 mb-1">/mês</span>
                </div>
                <p className="text-center text-sm text-atlas-neutral">{plan.description}</p>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className={`h-5 w-5 ${plan.textColor} mr-2 mt-0.5 flex-shrink-0`} />
                      <span className="text-white text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-atlas-background/50 border-white/10">
            <CardHeader>
              <CardTitle className="text-xl">Detalhes do pagamento</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="cardName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome no cartão</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Nome como aparece no cartão"
                            className="bg-white/5 border-white/20"
                            required
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número do cartão</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="1234 5678 9012 3456"
                            className="bg-white/5 border-white/20"
                            required
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="cardExpiry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data de expiração</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="MM/AA"
                              className="bg-white/5 border-white/20"
                              required
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cardCvc"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CVC</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="123"
                              className="bg-white/5 border-white/20"
                              required
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex items-center gap-2 text-atlas-neutral text-sm mt-2">
                    <ShieldCheck className="h-4 w-4" />
                    <p>Seus dados estão seguros e criptografados</p>
                  </div>

                  <CardFooter className="px-0 pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-atlas-highlight hover:bg-atlas-highlight/90 text-atlas-background"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex items-center">
                          <div className="animate-spin mr-2 h-4 w-4 border-2 border-b-transparent rounded-full"></div>
                          Processando pagamento...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Finalizar pagamento
                        </div>
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="bg-atlas-background border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Pagamento confirmado!</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center py-6">
            <div className="bg-green-500 rounded-full h-16 w-16 flex items-center justify-center mb-6">
              <CheckIcon className="h-8 w-8 text-white" />
            </div>
            <p className="text-center">
              Seu pagamento foi processado com sucesso. Você será redirecionado para o painel estratégico.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Checkout;
