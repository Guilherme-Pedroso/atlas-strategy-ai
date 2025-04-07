
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen flex flex-col bg-atlas-background text-white overflow-x-hidden">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container-atlas max-w-4xl mx-auto px-4">
          <div className="bg-atlas-background/50 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Termos de Uso</h1>
            
            <div className="prose prose-invert prose-sm md:prose-base max-w-none">
              <p className="text-atlas-neutral">Última atualização: 7 de abril de 2025</p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">1. Aceitação dos Termos</h2>
              <p>
                Bem-vindo à Marketing Atlas. Ao acessar ou utilizar nosso website, aplicativos, API ou quaisquer outros serviços oferecidos (coletivamente, os "Serviços"), você concorda em ficar vinculado a estes Termos de Uso. Se você não concordar com estes termos, não utilize nossos Serviços.
              </p>
              <p>
                Estes Termos de Uso constituem um acordo legal entre você e Marketing Atlas ("nós", "nosso" ou "nossos"). Além destes Termos, nossa Política de Privacidade, incorporada por referência, também é aplicável ao seu uso dos Serviços.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">2. Descrição dos Serviços</h2>
              <p>
                A Marketing Atlas oferece uma plataforma de consultoria de marketing automatizada com inteligência artificial, personalizada para pequenos empresários, infoprodutores e e-commerces. Nossos Serviços incluem, mas não se limitam a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ferramentas de IA para geração de estratégias de marketing;</li>
                <li>Modelos e templates de documentos estratégicos;</li>
                <li>Biblioteca de recursos e conteúdos de marketing;</li>
                <li>Assistência personalizada de IA para questões de marketing;</li>
                <li>Análise e recomendações estratégicas.</li>
              </ul>
              <p>
                Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer parte dos Serviços a qualquer momento, com ou sem aviso prévio.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">3. Registro e Conta</h2>
              <p>
                <strong>3.1 Criação de Conta:</strong> Para acessar certas funcionalidades dos Serviços, você deverá criar uma conta. Ao registrar-se, você concorda em fornecer informações precisas, atuais e completas, e em mantê-las atualizadas.
              </p>
              <p>
                <strong>3.2 Responsabilidade pela Conta:</strong> Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorram em sua conta. Você concorda em notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.
              </p>
              <p>
                <strong>3.3 Restrições de Idade:</strong> Os Serviços destinam-se a usuários com idade igual ou superior a 18 anos. Ao criar uma conta, você confirma que tem pelo menos 18 anos de idade.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">4. Planos e Pagamentos</h2>
              <p>
                <strong>4.1 Planos:</strong> Oferecemos diferentes planos de assinatura para acesso aos Serviços. Os detalhes específicos de cada plano, incluindo preços e recursos, estão disponíveis em nossa página de preços.
              </p>
              <p>
                <strong>4.2 Pagamentos:</strong> Ao assinar um plano pago, você concorda em pagar todas as taxas aplicáveis. A menos que indicado de outra forma, os pagamentos são recorrentes e serão cobrados automaticamente no início de cada período de cobrança.
              </p>
              <p>
                <strong>4.3 Cancelamentos e Reembolsos:</strong> Você pode cancelar sua assinatura a qualquer momento. Os reembolsos são processados de acordo com nossa política de reembolso vigente. Em geral, não oferecemos reembolsos para períodos parciais de assinatura.
              </p>
              <p>
                <strong>4.4 Alterações de Preços:</strong> Reservamo-nos o direito de modificar nossos preços a qualquer momento. Qualquer alteração de preço entrará em vigor no próximo período de cobrança após a notificação.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">5. Conteúdo e Licença</h2>
              <p>
                <strong>5.1 Conteúdo da Marketing Atlas:</strong> Todos os textos, gráficos, interfaces de usuário, interfaces visuais, fotografias, marcas comerciais, logotipos, sons, ilustrações e código de computador (coletivamente, "Conteúdo"), incluindo, mas não se limitando a, design, estrutura, seleção, coordenação, expressão, "look and feel" e arranjo de tal Conteúdo, contido nos Serviços, é de propriedade, controlado ou licenciado pela Marketing Atlas e está protegido por leis de direitos autorais, patentes, marcas comerciais e outros direitos de propriedade intelectual.
              </p>
              <p>
                <strong>5.2 Licença para o Usuário:</strong> Sujeito à sua conformidade com estes Termos, concedemos a você uma licença limitada, não exclusiva, não transferível, revogável para acessar e utilizar os Serviços para seus fins comerciais internos.
              </p>
              <p>
                <strong>5.3 Conteúdo Gerado pelo Usuário:</strong> Você mantém a propriedade de qualquer conteúdo que você cria, carrega ou compartilha através dos Serviços ("Conteúdo do Usuário"). Ao fornecer Conteúdo do Usuário, você concede à Marketing Atlas uma licença mundial, não exclusiva, isenta de royalties, sublicenciável e transferível para usar, reproduzir, modificar, adaptar, publicar, traduzir, criar trabalhos derivados, distribuir e exibir esse conteúdo em conexão com os Serviços.
              </p>
              <p>
                <strong>5.4 Restrições de Conteúdo:</strong> Você concorda em não enviar, carregar ou compartilhar conteúdo que: (a) infrinja direitos de propriedade intelectual; (b) seja ilegal, difamatório, obsceno ou ofensivo; (c) contenha malware ou código malicioso; (d) viole a privacidade de terceiros; ou (e) seja spam ou publicidade não solicitada.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">6. Uso Aceitável</h2>
              <p>
                Ao utilizar nossos Serviços, você concorda em não:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violar quaisquer leis ou regulamentos aplicáveis;</li>
                <li>Usar os Serviços para qualquer finalidade ilícita ou não autorizada;</li>
                <li>Tentar acessar contas ou sistemas sem autorização;</li>
                <li>Interferir ou interromper a integridade ou o desempenho dos Serviços;</li>
                <li>Contornar, desativar ou interferir com recursos relacionados à segurança;</li>
                <li>Realizar engenharia reversa ou tentar derivar o código-fonte;</li>
                <li>Automatizar o acesso aos Serviços sem nossa permissão;</li>
                <li>Revender, sublicenciar ou compartilhar sua conta;</li>
                <li>Usar os Serviços de maneira que possa sobrecarregar nossa infraestrutura.</li>
              </ul>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">7. Limitação de Responsabilidade</h2>
              <p>
                <strong>7.1 Serviços "Como Estão":</strong> Os Serviços são fornecidos "como estão" e "conforme disponíveis". Não garantimos que os Serviços serão ininterruptos, oportunos, seguros ou livres de erros.
              </p>
              <p>
                <strong>7.2 Renúncia de Garantias:</strong> Na extensão máxima permitida por lei, renunciamos a todas as garantias, expressas ou implícitas, incluindo, mas não se limitando a, garantias implícitas de comercialização, adequação a uma finalidade específica e não violação.
              </p>
              <p>
                <strong>7.3 Limitação de Danos:</strong> Em nenhuma circunstância a Marketing Atlas será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo perda de lucros, dados ou uso, resultantes de ou relacionados ao uso ou incapacidade de usar os Serviços.
              </p>
              <p>
                <strong>7.4 Teto de Responsabilidade:</strong> Nossa responsabilidade total para com você por quaisquer danos não excederá o valor pago por você à Marketing Atlas nos três meses anteriores ao evento que deu origem à responsabilidade.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">8. Indenização</h2>
              <p>
                Você concorda em indenizar, defender e isentar a Marketing Atlas, seus diretores, funcionários, agentes e afiliados de e contra quaisquer reclamações, responsabilidades, danos, perdas e despesas, incluindo, sem limitação, honorários advocatícios razoáveis, decorrentes de ou de alguma forma relacionados ao seu acesso ou uso dos Serviços, seu Conteúdo do Usuário ou sua violação destes Termos.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">9. Rescisão</h2>
              <p>
                <strong>9.1 Por Sua Iniciativa:</strong> Você pode encerrar sua conta a qualquer momento, por qualquer motivo, seguindo as instruções nos Serviços.
              </p>
              <p>
                <strong>9.2 Por Nossa Iniciativa:</strong> Podemos suspender ou encerrar seu acesso aos Serviços, a nosso critério exclusivo, com ou sem aviso prévio, se você violar estes Termos ou por qualquer outro motivo que considerarmos apropriado.
              </p>
              <p>
                <strong>9.3 Efeitos da Rescisão:</strong> Após a rescisão, seu direito de acessar os Serviços cessará imediatamente. Todas as disposições destes Termos que, por sua natureza, devem sobreviver à rescisão, sobreviverão.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">10. Alterações nos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos a qualquer momento, a nosso critério exclusivo. Se fizermos alterações, publicaremos os Termos atualizados e, se as alterações forem significativas, forneceremos um aviso mais proeminente. Seu uso continuado dos Serviços após tais alterações constitui sua aceitação dos Termos revisados.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">11. Disposições Gerais</h2>
              <p>
                <strong>11.1 Lei Aplicável:</strong> Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar disposições sobre conflitos de leis.
              </p>
              <p>
                <strong>11.2 Resolução de Disputas:</strong> Qualquer disputa decorrente destes Termos será resolvida por arbitragem de acordo com as regras da Câmara de Arbitragem do Mercado.
              </p>
              <p>
                <strong>11.3 Integralidade do Acordo:</strong> Estes Termos, juntamente com nossa Política de Privacidade, constituem o acordo integral entre você e a Marketing Atlas em relação aos Serviços.
              </p>
              <p>
                <strong>11.4 Divisibilidade:</strong> Se qualquer disposição destes Termos for considerada inválida ou inexequível, essa disposição será limitada ou eliminada ao mínimo necessário para que os Termos permaneçam em pleno vigor e efeito.
              </p>
              <p>
                <strong>11.5 Renúncia:</strong> Nossa falha em fazer valer qualquer direito ou disposição destes Termos não constituirá uma renúncia a tais direitos.
              </p>
              <p>
                <strong>11.6 Atribuição:</strong> Você não pode atribuir estes Termos sem o consentimento prévio por escrito da Marketing Atlas. Podemos atribuir estes Termos a qualquer momento sem aviso prévio.
              </p>
              
              <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-white">12. Contato</h2>
              <p>
                Se você tiver dúvidas sobre estes Termos, entre em contato conosco:
              </p>
              <p className="mt-2">
                <strong>E-mail:</strong> contato@marketingatlas.com.br<br />
                <strong>Endereço:</strong> Av. Paulista, 1000, São Paulo - SP, 01310-100<br />
                <strong>Telefone:</strong> (11) 1234-5678
              </p>
              
              <p className="mt-8 text-atlas-neutral">
                Ao usar nossos Serviços, você confirma que leu, entendeu e concorda com estes Termos de Uso e nossa <Link to="/politica-de-privacidade" className="text-atlas-highlight hover:underline">Política de Privacidade</Link>.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfUse;
