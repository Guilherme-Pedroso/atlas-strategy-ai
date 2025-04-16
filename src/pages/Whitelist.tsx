import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Check,
  ArrowRight,
  FileText,
  BarChart,
  MessageSquare,
  PenTool,
  Users,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Whitelist = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-atlas-background">
      {/* Header */}
      <header className="bg-atlas-background py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-atlas-highlight" />
            <span className="text-white font-bold text-xl">
              Marketing Atlas
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 px-4 bg-gradient-to-b from-atlas-background to-atlas-background/95 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Entre agora mesmo na lista de espera do{" "}
                <span className="text-atlas-highlight">
                  futuro do Marketing!
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Ao se cadastrar você receberá acesso antecipado à plataforma e
                condições especiais/benefícios no lançamento!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Forms Section */}
      <section className="py-10 px-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Responda 3 simples perguntas para{" "}
              <span className="text-atlas-highlight">
                fazer parte da história
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leva menos de 1 minuto! Investimento de tempo quase inexistente
              para um potencial grande de retorno.
            </p>
          </div>
          <div className="grid grid-cols-1 max-w-x mx-auto gap-6">
            <form className="space-y-6 w-full">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="name"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-atlas-highlight"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="phone"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-atlas-highlight"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-atlas-highlight"
                  placeholder="seu@email.com"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-atlas-highlight text-white hover:bg-atlas-highlight/90"
              >
                Entrar na lista de espera
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-atlas-background/95 text-gray-300 py-4 px-4">
        <div className="container mx-auto max-w-6xl">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-atlas-highlight" />
              <span className="text-white font-bold text-xl">
                Marketing Atlas
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Estratégias de marketing profissionais automatizadas por IA.
            </p>
            <p>
              © {new Date().getFullYear()} Marketing Atlas. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Whitelist;
