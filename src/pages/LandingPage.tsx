
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
  Clock 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white text-atlas-background">
      {/* Header */}
      <header className="bg-atlas-background py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-atlas-highlight" />
            <span className="text-white font-bold text-xl">Marketing Atlas</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-white hover:text-atlas-highlight"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
              onClick={() => navigate("/onboarding")}
            >
              Começar Grátis
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-atlas-background to-atlas-background/95 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sua consultoria de marketing <span className="text-atlas-highlight">automatizada por IA</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Crie estratégias profissionais, gere conteúdo impactante e tome decisões baseadas em dados sem precisar de uma equipe de marketing completa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90 text-lg px-8"
                  onClick={() => navigate("/onboarding")}
                >
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 text-lg"
                  onClick={() => {
                    const demoSection = document.getElementById("como-funciona");
                    demoSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Ver demonstração
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
                  alt="Marketing Atlas em uso"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-atlas-highlight text-atlas-background p-3 rounded-lg">
                  <div className="font-bold text-sm">Resultados em minutos</div>
                  <div className="text-xs">Não em semanas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher o <span className="text-atlas-highlight">Marketing Atlas</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Combinamos inteligência artificial avançada com estratégias comprovadas para entregar resultados reais para o seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8 text-atlas-highlight" />,
                title: "Economize tempo",
                description: "Transforme horas de pesquisa e planejamento em minutos de interação com nossa IA estratégica."
              },
              {
                icon: <BarChart className="h-8 w-8 text-atlas-highlight" />,
                title: "Decisões baseadas em dados",
                description: "Acesse insights de mercado e análises competitivas sem precisar mergulhar em planilhas complexas."
              },
              {
                icon: <FileText className="h-8 w-8 text-atlas-highlight" />,
                title: "Documentos profissionais",
                description: "Crie estratégias, planos de marketing e apresentações prontos para implementação ou compartilhamento."
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-atlas-highlight/10 w-16 h-16 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como o Marketing Atlas funciona
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Um assistente de marketing completo, alimentado por IA avançada e estratégias de marketing comprovadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800" 
                alt="Marketing Atlas em ação" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Onboarding inteligente",
                    description: "Responda algumas perguntas sobre seu negócio e objetivos para personalizar sua experiência."
                  },
                  {
                    number: "02",
                    title: "Inteligência contextual",
                    description: "Nossa IA aprende com suas entradas e adapta recomendações específicas para seu setor e desafios."
                  },
                  {
                    number: "03",
                    title: "Documentos interativos",
                    description: "Gere e edite documentos estratégicos como matriz SWOT, planos de marketing e dashboards."
                  },
                  {
                    number: "04",
                    title: "Implementação guiada",
                    description: "Receba orientações passo a passo para implementar as estratégias geradas em seu negócio."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="rounded-full bg-atlas-highlight/10 w-12 h-12 flex-shrink-0 flex items-center justify-center text-atlas-highlight font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recursos poderosos para sua estratégia
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              O Marketing Atlas oferece ferramentas completas para cada aspecto da sua estratégia de marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-6 w-6 text-atlas-highlight" />,
                title: "IA Estratégica",
                description: "Converse com nossa IA treinada em marketing e receba orientações personalizadas."
              },
              {
                icon: <FileText className="h-6 w-6 text-blue-500" />,
                title: "Documentos inteligentes",
                description: "Crie e edite documentos estratégicos como matriz SWOT, planos de marketing e muito mais."
              },
              {
                icon: <BarChart className="h-6 w-6 text-green-500" />,
                title: "Calculadoras de ROI",
                description: "Quantifique o retorno dos seus investimentos em marketing com facilidade."
              },
              {
                icon: <PenTool className="h-6 w-6 text-purple-500" />,
                title: "Criação de conteúdo",
                description: "Gere conteúdo para redes sociais, emails, blogs e outros canais com um clique."
              },
              {
                icon: <Users className="h-6 w-6 text-orange-500" />,
                title: "Análise de público-alvo",
                description: "Compreenda melhor seu público e crie personas de cliente detalhadas."
              },
              {
                icon: <Sparkles className="h-6 w-6 text-pink-500" />,
                title: "Biblioteca de recursos",
                description: "Acesse templates, guias, planilhas e outros recursos para potencializar sua estratégia."
              }
            ].map((feature, index) => (
              <Card key={index} className="border border-gray-100 transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="rounded-full bg-gray-50 w-12 h-12 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800"
                alt="Guilherme, criador do Marketing Atlas"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Quem somos</h2>
              <p className="text-lg text-gray-600 mb-4">
                O Marketing Atlas foi criado por Guilherme, um especialista em marketing digital com mais de 10 anos de experiência ajudando empresas a conquistarem presença online e resultados reais.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Após anos trabalhando com empresas de diferentes portes, Guilherme percebeu que muitos empreendedores e equipes pequenas não têm acesso a estratégias de marketing de qualidade devido aos altos custos de agências e consultores.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Com o Marketing Atlas, nossa missão é democratizar o acesso a estratégias de marketing profissionais usando o poder da inteligência artificial, permitindo que qualquer negócio possa competir no cenário digital com eficiência.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-atlas-highlight" />
                  <span className="text-gray-700 font-medium">Mais de 10 anos de experiência</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-atlas-highlight" />
                  <span className="text-gray-700 font-medium">500+ projetos de marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-atlas-highlight" />
                  <span className="text-gray-700 font-medium">IA treinada com estratégias comprovadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-atlas-background text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para revolucionar sua estratégia de marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Junte-se a centenas de empresas que já estão economizando tempo e gerando resultados melhores com o Marketing Atlas.
          </p>
          <Button
            size="lg"
            className="bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90 text-lg px-8"
            onClick={() => navigate("/onboarding")}
          >
            Começar Agora (Teste Grátis)
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-gray-400 mt-4">
            Não é necessário cartão de crédito. Acesso gratuito a recursos principais.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-atlas-background/95 text-gray-300 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-atlas-highlight" />
                <span className="text-white font-bold text-xl">Marketing Atlas</span>
              </div>
              <p className="text-gray-400 mb-6">
                Estratégias de marketing profissionais automatizadas por IA.
              </p>
              <div className="flex gap-4">
                {/* Social icons would go here */}
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Produto</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-atlas-highlight transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-atlas-highlight transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-atlas-highlight transition-colors">Integrações</a></li>
                <li><a href="#" className="hover:text-atlas-highlight transition-colors">Exemplos</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Recursos</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-atlas-highlight transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-atlas-highlight transition-colors">Guias</a></li>
                <li><a href="#" className="hover:text-atlas-highlight transition-colors">Webinars</a></li>
                <li><a href="#" className="hover:text-atlas-highlight transition-colors">Estudos de caso</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Empresa</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-atlas-highlight transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-atlas-highlight transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-atlas-highlight transition-colors">Termos de uso</a></li>
                <li><a href="#" className="hover:text-atlas-highlight transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Marketing Atlas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
