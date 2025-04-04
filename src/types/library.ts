
export type ContentType = 'Explicativo' | 'Editável' | 'Template' | 'Ferramenta' | 'Estratégia pronta';
export type BusinessStage = 'Validação' | 'Crescimento' | 'Escala' | 'Branding' | 'Lançamento' | 'Organização';
export type ThematicArea = 'Marketing' | 'Growth' | 'Produto' | 'Vendas' | 'Finanças' | 'Jurídico' | 'Liderança' | 'BI' | 'Coaching' | 'Processos' | 'Empreendedorismo' | 'Dados' | 'Branding';

export interface LibraryItem {
  id: string;
  title: string;
  type: ContentType;
  description: string;
  tags: ThematicArea[];
  stages: BusinessStage[];
  isEditable: boolean;
  thumbnail?: string;
}

export interface FilterState {
  contentTypes: ContentType[];
  businessStages: BusinessStage[];
  thematicAreas: ThematicArea[];
}

export interface RecommendedItem extends LibraryItem {
  reason: string;
}
