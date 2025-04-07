
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-atlas-background text-white overflow-x-hidden">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-atlas max-w-4xl mx-auto px-4">
          <div className="bg-atlas-background/50 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Política de Privacidade</h1>
            
            <div className="prose prose-invert prose-sm md:prose-base max-w-none">
              <p className="text-atlas-neutral">Última atualização: 7 de abril de 2025</p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">1. Introdução</h2>
              <p>
                A Marketing Atlas ("nós", "nosso" ou "nossos") está comprometida em proteger sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais quando você utiliza nossos serviços, website e aplicativos (coletivamente, os "Serviços").
              </p>
              <p>
                Ao utilizar nossos Serviços, você concorda com a coleta e uso das informações de acordo com esta política. Processamos seus dados pessoais apenas para os fins descritos nesta Política de Privacidade e de acordo com a legislação de proteção de dados aplicável, incluindo a Lei Geral de Proteção de Dados (LGPD).
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">2. Informações que Coletamos</h2>
              <p>
                <strong>2.1 Informações que você nos fornece: </strong>
                Coletamos informações que você nos fornece diretamente quando:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cria uma conta ou se registra em nossos Serviços (nome, e-mail, senha);</li>
                <li>Preenche formulários ou responde a pesquisas (dados da empresa, setor, tamanho);</li>
                <li>Comunica-se conosco através de canais de suporte;</li>
                <li>Fornece informações de pagamento para assinaturas;</li>
                <li>Utiliza nossa plataforma de IA para gerar conteúdo ou estratégias.</li>
              </ul>
              
              <p>
                <strong>2.2 Informações coletadas automaticamente: </strong>
                Quando você utiliza nossos Serviços, podemos coletar automaticamente:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Informações de uso e interação com nossos Serviços;</li>
                <li>Informações do dispositivo (tipo, sistema operacional, navegador);</li>
                <li>Endereço IP e informações de localização aproximada;</li>
                <li>Cookies e tecnologias semelhantes para rastreamento;</li>
                <li>Registros de acesso e logs de serviço.</li>
              </ul>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">3. Como Utilizamos suas Informações</h2>
              <p>
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer, manter e melhorar nossos Serviços;</li>
                <li>Processar transações e administrar sua conta;</li>
                <li>Personalizar sua experiência e conteúdo;</li>
                <li>Treinar nossos modelos de IA para gerar melhores estratégias de marketing;</li>
                <li>Enviar comunicações relacionadas ao serviço e atualizações;</li>
                <li>Responder a suas solicitações e fornecer suporte;</li>
                <li>Analisar tendências de uso e eficácia de nossas ferramentas;</li>
                <li>Detectar, prevenir e resolver problemas técnicos e de segurança;</li>
                <li>Cumprir obrigações legais.</li>
              </ul>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">4. Compartilhamento de Informações</h2>
              <p>
                Podemos compartilhar suas informações pessoais com:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prestadores de serviços que nos auxiliam na operação de nossos Serviços;</li>
                <li>Parceiros de negócios para oferecer produtos ou serviços integrados;</li>
                <li>Autoridades competentes quando exigido por lei ou processo legal;</li>
                <li>Empresas afiliadas que fazem parte de nosso grupo corporativo;</li>
                <li>Terceiros em caso de reorganização empresarial, fusão ou venda.</li>
              </ul>
              <p>
                Não vendemos, alugamos ou comercializamos suas informações pessoais.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">5. Seus Direitos e Escolhas</h2>
              <p>
                De acordo com a legislação aplicável, você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acesso às suas informações pessoais;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Restrição ou oposição ao processamento de seus dados;</li>
                <li>Portabilidade de dados para outro fornecedor de serviço;</li>
                <li>Eliminação de dados pessoais desnecessários ou excessivos;</li>
                <li>Revogação de consentimento a qualquer momento;</li>
                <li>Esclarecimentos sobre o não fornecimento de consentimento.</li>
              </ul>
              <p>
                Para exercer seus direitos, entre em contato conosco através dos canais indicados na seção "Contato".
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">6. Segurança de Dados</h2>
              <p>
                Implementamos medidas técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Estas medidas incluem:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Criptografia de dados sensíveis;</li>
                <li>Firewalls e sistemas de detecção de intrusões;</li>
                <li>Acesso restrito às informações pessoais;</li>
                <li>Monitoramento regular e testes de segurança;</li>
                <li>Treinamento de funcionários sobre práticas de segurança.</li>
              </ul>
              <p>
                Embora nos esforcemos para proteger suas informações, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">7. Retenção de Dados</h2>
              <p>
                Retemos suas informações pessoais pelo tempo necessário para cumprir as finalidades descritas nesta Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">8. Transferências Internacionais</h2>
              <p>
                Suas informações pessoais podem ser transferidas e processadas em países fora do Brasil, onde nossas instalações ou prestadores de serviços estão localizados. Garantimos que estas transferências sejam realizadas de acordo com os requisitos legais aplicáveis e com garantias adequadas para proteger seus dados.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">9. Cookies e Tecnologias Semelhantes</h2>
              <p>
                Utilizamos cookies e tecnologias semelhantes para coletar informações sobre suas atividades em nossos Serviços. Você pode controlar o uso de cookies através das configurações do seu navegador.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">10. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre alterações significativas publicando a nova política em nosso website e, quando apropriado, enviando uma notificação direta.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">11. Contato</h2>
              <p>
                Se você tiver dúvidas, comentários ou solicitações relacionadas a esta Política de Privacidade ou ao processamento de seus dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados:
              </p>
              <p className="mt-2">
                <strong>E-mail:</strong> privacidade@marketingatlas.com.br<br />
                <strong>Endereço:</strong> Av. Paulista, 1000, São Paulo - SP, 01310-100<br />
                <strong>Telefone:</strong> (11) 1234-5678
              </p>
              
              <p className="mt-8 text-atlas-neutral">
                Esta Política de Privacidade deve ser lida em conjunto com nossos <Link to="/termos-de-uso" className="text-atlas-highlight hover:underline">Termos de Uso</Link>, que fornecem informações adicionais sobre nossos Serviços.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
