
import { LibraryItem, ContentType, BusinessStage, ThematicArea } from "@/types/library";

export const contentTypes: ContentType[] = [
  'Explicativo', 'Editável', 'Template', 'Ferramenta', 'Estratégia pronta'
];

export const businessStages: BusinessStage[] = [
  'Validação', 'Crescimento', 'Escala', 'Branding', 'Lançamento', 'Organização'
];

export const thematicAreas: ThematicArea[] = [
  'Marketing', 'Growth', 'Produto', 'Vendas', 'Finanças', 'Jurídico', 
  'Liderança', 'BI', 'Coaching', 'Processos', 'Empreendedorismo', 'Dados', 'Branding'
];

export const generateMockLibraryData = (): LibraryItem[] => {
  return [
    {
      id: '1',
      title: 'Matriz SWOT Interativa',
      type: 'Ferramenta',
      description: 'Analise pontos fortes, fracos, oportunidades e ameaças do seu negócio com nossa matriz interativa.',
      tags: ['Marketing', 'Estratégia', 'Liderança'],
      stages: ['Validação', 'Crescimento', 'Lançamento'],
      isEditable: true
    },
    {
      id: '2',
      title: 'Cronograma de Conteúdo para Instagram',
      type: 'Template',
      description: 'Template pronto para planejar seu conteúdo no Instagram com sugestões de temas e frequência.',
      tags: ['Marketing', 'Redes Sociais', 'Conteúdo'],
      stages: ['Crescimento', 'Branding'],
      isEditable: true
    },
    {
      id: '3',
      title: 'Pitch Deck Editável',
      type: 'Editável',
      description: 'Modelo profissional de apresentação para investidores com slides essenciais para seu pitch.',
      tags: ['Empreendedorismo', 'Vendas', 'Finanças'],
      stages: ['Validação', 'Crescimento', 'Escala'],
      isEditable: true
    },
    {
      id: '4',
      title: 'Canvas de Proposta de Valor',
      type: 'Ferramenta',
      description: 'Defina claramente o valor do seu produto ou serviço e como ele resolve problemas reais dos clientes.',
      tags: ['Produto', 'Marketing', 'Vendas'],
      stages: ['Validação', 'Branding', 'Lançamento'],
      isEditable: true
    },
    {
      id: '5',
      title: 'Calculadora de ROI em Marketing',
      type: 'Ferramenta',
      description: 'Calcule o retorno sobre investimento das suas campanhas e ações de marketing.',
      tags: ['Marketing', 'Finanças', 'BI'],
      stages: ['Crescimento', 'Escala'],
      isEditable: true
    },
    {
      id: '6',
      title: 'Guia de Precificação Estratégica',
      type: 'Explicativo',
      description: 'Aprenda a definir preços que maximizam suas margens sem comprometer vendas.',
      tags: ['Finanças', 'Vendas', 'Estratégia'],
      stages: ['Validação', 'Crescimento', 'Escala'],
      isEditable: false
    },
    {
      id: '7',
      title: 'Template de E-mail Marketing',
      type: 'Template',
      description: 'Modelos prontos de e-mails para nutrição, vendas e relacionamento com clientes.',
      tags: ['Marketing', 'Vendas', 'Conteúdo'],
      stages: ['Crescimento', 'Escala'],
      isEditable: true
    },
    {
      id: '8',
      title: 'Análise Competitiva de Mercado',
      type: 'Estratégia pronta',
      description: 'Framework para mapear concorrentes, identificar oportunidades e diferenciais competitivos.',
      tags: ['Marketing', 'Estratégia', 'BI'],
      stages: ['Validação', 'Crescimento', 'Escala'],
      isEditable: true
    },
    {
      id: '9',
      title: 'Checklist de Lançamento',
      type: 'Ferramenta',
      description: 'Lista completa de tarefas para garantir o sucesso do lançamento do seu produto ou serviço.',
      tags: ['Marketing', 'Produto', 'Processos'],
      stages: ['Lançamento'],
      isEditable: true
    },
    {
      id: '10',
      title: 'Estratégia de Funil de Vendas',
      type: 'Estratégia pronta',
      description: 'Monte seu funil de vendas completo com etapas, conteúdos e métricas para cada fase.',
      tags: ['Vendas', 'Marketing', 'Growth'],
      stages: ['Crescimento', 'Escala'],
      isEditable: true
    },
    {
      id: '11',
      title: 'Calculadora de LTV e CAC',
      type: 'Ferramenta',
      description: 'Calcule o valor do tempo de vida do cliente e custo de aquisição para otimizar suas estratégias.',
      tags: ['Finanças', 'Marketing', 'BI'],
      stages: ['Crescimento', 'Escala'],
      isEditable: true
    },
    {
      id: '12',
      title: 'Plano de Marketing em 1 Página',
      type: 'Template',
      description: 'Template simples e eficaz para visualizar toda sua estratégia de marketing em um único lugar.',
      tags: ['Marketing', 'Estratégia', 'Processos'],
      stages: ['Validação', 'Crescimento', 'Branding'],
      isEditable: true
    }
  ];
};

export const getRecommendedItems = (): LibraryItem[] => {
  const allItems = generateMockLibraryData();
  return [
    allItems.find(item => item.title === 'Matriz SWOT Interativa')!,
    allItems.find(item => item.title === 'Cronograma de Conteúdo para Instagram')!,
    allItems.find(item => item.title === 'Pitch Deck Editável')!,
    allItems.find(item => item.title === 'Canvas de Proposta de Valor')!,
    allItems.find(item => item.title === 'Calculadora de ROI em Marketing')!,
  ];
};
