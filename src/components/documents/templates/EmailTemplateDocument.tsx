
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  Image, 
  EditIcon, 
  Save, 
  Mail,
  Tag,
  PlusCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube
} from "lucide-react";

interface EmailTemplateProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  bodyText: string;
  ctaText: string;
  ctaUrl: string;
  footerText: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    youtube: string;
  };
}

const defaultTemplate: EmailTemplateProps = {
  title: "Título principal do seu e-mail",
  subtitle: "Um subtítulo complementar para engajar seu leitor",
  imageUrl: "https://via.placeholder.com/600x300",
  bodyText: "Este é o corpo do e-mail onde você apresenta o conteúdo principal. Mantenha o texto claro, direto e focado no benefício para o leitor. Não escreva parágrafos muito longos para facilitar a leitura em dispositivos móveis.",
  ctaText: "Clique Aqui",
  ctaUrl: "https://exemplo.com",
  footerText: "Você está recebendo este e-mail porque se inscreveu em nossa lista. Para cancelar a inscrição, clique aqui.",
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com"
  }
};

const templates = {
  informative: {
    title: "Nova atualização: conheça nossos recursos",
    subtitle: "Melhoramos nossa plataforma para atender você ainda melhor",
    imageUrl: "https://via.placeholder.com/600x300",
    bodyText: "Olá!\n\nTemos novidades para compartilhar com você. Acabamos de lançar novos recursos que vão melhorar sua experiência com nossa plataforma.\n\nAqui estão os destaques:\n• Funcionalidade X para aumentar sua produtividade\n• Novo design mais intuitivo\n• Performance melhorada para carregamentos mais rápidos\n\nExperimente agora mesmo e nos conte o que achou!",
    ctaText: "Ver novidades",
    ctaUrl: "https://exemplo.com/novidades",
    footerText: "Você está recebendo este e-mail porque se inscreveu em nossa lista. Para cancelar a inscrição, clique aqui.",
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      youtube: "https://youtube.com"
    }
  },
  promotional: {
    title: "OFERTA ESPECIAL: 30% DE DESCONTO",
    subtitle: "Somente esta semana! Aproveite nossa promoção relâmpago",
    imageUrl: "https://via.placeholder.com/600x300",
    bodyText: "Oferta exclusiva e por tempo limitado!\n\nApenas esta semana, você pode adquirir nossos pacotes premium com 30% de desconto.\n\nO que está incluído:\n• Acesso completo a todos os recursos\n• Suporte prioritário\n• Conteúdos exclusivos\n\nOferta válida até 10/05 ou enquanto durarem as vagas.",
    ctaText: "Garantir meu desconto",
    ctaUrl: "https://exemplo.com/promocao",
    footerText: "Para não receber mais nossas ofertas, clique aqui para gerenciar suas preferências.",
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      youtube: "https://youtube.com"
    }
  },
  product: {
    title: "Conheça o novo Marketing Atlas Pro",
    subtitle: "A solução completa para sua estratégia digital",
    imageUrl: "https://via.placeholder.com/600x300",
    bodyText: "Apresentamos o Marketing Atlas Pro\n\nDesenvolvido especialmente para profissionais que buscam resultados reais, nossa nova solução integra:\n\n• Análise avançada de dados\n• Ferramentas de automação de última geração\n• Dashboards personalizáveis\n• IA para otimização de campanhas\n\nSeja um dos primeiros a experimentar e transforme sua estratégia de marketing.",
    ctaText: "Conhecer o produto",
    ctaUrl: "https://exemplo.com/produto",
    footerText: "Este e-mail foi enviado para [email] porque você demonstrou interesse em nossos produtos.",
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      youtube: "https://youtube.com"
    }
  }
};

export const EmailTemplateDocument = () => {
  const [currentTemplate, setCurrentTemplate] = useState<EmailTemplateProps>({...defaultTemplate});
  const [editingField, setEditingField] = useState<string | null>(null);
  const [templateType, setTemplateType] = useState<"informative" | "promotional" | "product">("informative");
  const { toast } = useToast();

  const handleEditToggle = (field: string) => {
    if (editingField === field) {
      setEditingField(null);
    } else {
      setEditingField(field);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setCurrentTemplate({
      ...currentTemplate,
      [field]: value
    });
  };

  const handleSocialLinkChange = (platform: string, value: string) => {
    setCurrentTemplate({
      ...currentTemplate,
      socialLinks: {
        ...currentTemplate.socialLinks,
        [platform]: value
      }
    });
  };

  const handleSave = () => {
    toast({
      title: "Template salvo",
      description: "Seu template de e-mail foi salvo com sucesso.",
    });
  };

  const handleTemplateChange = (type: "informative" | "promotional" | "product") => {
    setTemplateType(type);
    setCurrentTemplate({...templates[type]});
    setEditingField(null);
  };

  const renderEditableField = (field: string, value: string, isMultiline = false) => {
    return editingField === field ? (
      <div className="mt-2">
        {isMultiline ? (
          <Textarea
            value={value}
            onChange={(e) => handleInputChange(field, e.target.value)}
            className="w-full bg-atlas-background/50 border-white/10 text-white"
            rows={5}
          />
        ) : (
          <Input
            value={value}
            onChange={(e) => handleInputChange(field, e.target.value)}
            className="w-full bg-atlas-background/50 border-white/10 text-white"
          />
        )}
        <Button 
          size="sm" 
          variant="ghost" 
          onClick={() => setEditingField(null)}
          className="mt-2 text-atlas-highlight"
        >
          <Save className="h-4 w-4 mr-2" />
          Salvar
        </Button>
      </div>
    ) : null;
  };

  const renderSocialEditFields = () => {
    if (editingField !== 'socialLinks') return null;
    
    return (
      <div className="mt-2 grid grid-cols-1 gap-2">
        {Object.entries(currentTemplate.socialLinks).map(([platform, url]) => (
          <div key={platform} className="flex items-center gap-2">
            <Label className="w-24 text-white capitalize">{platform}</Label>
            <Input
              value={url}
              onChange={(e) => handleSocialLinkChange(platform, e.target.value)}
              className="flex-1 bg-atlas-background/50 border-white/10 text-white"
              placeholder={`URL do ${platform}`}
            />
          </div>
        ))}
        <Button 
          size="sm" 
          variant="ghost" 
          onClick={() => setEditingField(null)}
          className="mt-2 text-atlas-highlight"
        >
          <Save className="h-4 w-4 mr-2" />
          Salvar
        </Button>
      </div>
    );
  };

  // Render the preview of the email template
  const renderEmailPreview = () => {
    return (
      <div className="max-w-2xl mx-auto bg-white text-gray-800 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gray-100">
          <div className="relative group">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              {currentTemplate.title}
            </h2>
            <Button 
              size="sm" 
              variant="ghost" 
              className="absolute -right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleEditToggle('title')}
            >
              <EditIcon className="h-4 w-4" />
            </Button>
            {renderEditableField('title', currentTemplate.title)}
          </div>
          
          <div className="relative group mt-2">
            <h3 className="text-lg text-center text-gray-600">
              {currentTemplate.subtitle}
            </h3>
            <Button 
              size="sm" 
              variant="ghost" 
              className="absolute -right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleEditToggle('subtitle')}
            >
              <EditIcon className="h-4 w-4" />
            </Button>
            {renderEditableField('subtitle', currentTemplate.subtitle)}
          </div>
        </div>
        
        {/* Image */}
        <div className="relative group">
          <img 
            src={currentTemplate.imageUrl} 
            alt="Email header" 
            className="w-full h-auto"
          />
          <Button 
            size="sm" 
            variant="ghost" 
            className="absolute top-2 right-2 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => handleEditToggle('imageUrl')}
          >
            <Image className="h-4 w-4" />
          </Button>
          {renderEditableField('imageUrl', currentTemplate.imageUrl)}
        </div>
        
        {/* Body */}
        <div className="p-6">
          <div className="relative group">
            <div className="text-gray-700 whitespace-pre-line">
              {currentTemplate.bodyText}
            </div>
            <Button 
              size="sm" 
              variant="ghost" 
              className="absolute -right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleEditToggle('bodyText')}
            >
              <EditIcon className="h-4 w-4" />
            </Button>
            {renderEditableField('bodyText', currentTemplate.bodyText, true)}
          </div>
          
          <div className="mt-6 text-center relative group">
            <a 
              href={currentTemplate.ctaUrl} 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              {currentTemplate.ctaText}
            </a>
            <Button 
              size="sm" 
              variant="ghost" 
              className="absolute -right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleEditToggle('ctaSection')}
            >
              <EditIcon className="h-4 w-4" />
            </Button>
            {editingField === 'ctaSection' && (
              <div className="mt-4 space-y-2 text-left">
                <div>
                  <Label className="text-white">Texto do botão</Label>
                  <Input
                    value={currentTemplate.ctaText}
                    onChange={(e) => handleInputChange('ctaText', e.target.value)}
                    className="w-full bg-atlas-background/50 border-white/10 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">URL do botão</Label>
                  <Input
                    value={currentTemplate.ctaUrl}
                    onChange={(e) => handleInputChange('ctaUrl', e.target.value)}
                    className="w-full bg-atlas-background/50 border-white/10 text-white"
                  />
                </div>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => setEditingField(null)}
                  className="text-atlas-highlight"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Salvar
                </Button>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-6 bg-gray-800 text-white">
          <div className="relative group">
            <div className="text-sm text-gray-300 mb-4">
              {currentTemplate.footerText}
            </div>
            <Button 
              size="sm" 
              variant="ghost" 
              className="absolute -right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-white"
              onClick={() => handleEditToggle('footerText')}
            >
              <EditIcon className="h-4 w-4" />
            </Button>
            {renderEditableField('footerText', currentTemplate.footerText, true)}
          </div>
          
          <div className="flex justify-center space-x-4 relative group">
            <a href={currentTemplate.socialLinks.facebook} target="_blank" rel="noopener noreferrer" onClick={(e) => e.preventDefault()}>
              <Facebook className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
            </a>
            <a href={currentTemplate.socialLinks.instagram} target="_blank" rel="noopener noreferrer" onClick={(e) => e.preventDefault()}>
              <Instagram className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
            </a>
            <a href={currentTemplate.socialLinks.twitter} target="_blank" rel="noopener noreferrer" onClick={(e) => e.preventDefault()}>
              <Twitter className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
            </a>
            <a href={currentTemplate.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.preventDefault()}>
              <Linkedin className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
            </a>
            <a href={currentTemplate.socialLinks.youtube} target="_blank" rel="noopener noreferrer" onClick={(e) => e.preventDefault()}>
              <Youtube className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
            </a>
            <Button 
              size="sm" 
              variant="ghost" 
              className="absolute -right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-white"
              onClick={() => handleEditToggle('socialLinks')}
            >
              <EditIcon className="h-4 w-4" />
            </Button>
            {renderSocialEditFields()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Template de E-mail Marketing</h2>
        <p className="text-atlas-neutral mb-6">
          Crie e-mails profissionais para suas campanhas com layouts otimizados para conversão.
        </p>
      </div>
      
      <Card className="bg-atlas-background/50 border-white/10">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-transparent border-white/10 text-atlas-neutral hover:text-white"
                onClick={handleSave}
              >
                <Save className="h-4 w-4 mr-2" />
                Salvar template
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-transparent border-white/10 text-atlas-neutral hover:text-white"
              >
                <Mail className="h-4 w-4 mr-2" />
                Exportar HTML
              </Button>
            </div>
            <Button 
              className="bg-atlas-secondary text-white hover:bg-atlas-secondary/90"
              size="sm"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Salvar na biblioteca
            </Button>
          </div>

          <Tabs defaultValue="informative" className="w-full" onValueChange={(value) => handleTemplateChange(value as any)}>
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="informative" className="data-[state=active]:bg-atlas-highlight data-[state=active]:text-atlas-background">
                <Mail className="h-4 w-4 mr-2" />
                Informativo
              </TabsTrigger>
              <TabsTrigger value="promotional" className="data-[state=active]:bg-atlas-highlight data-[state=active]:text-atlas-background">
                <Tag className="h-4 w-4 mr-2" />
                Promocional
              </TabsTrigger>
              <TabsTrigger value="product" className="data-[state=active]:bg-atlas-highlight data-[state=active]:text-atlas-background">
                <Image className="h-4 w-4 mr-2" />
                Lançamento
              </TabsTrigger>
            </TabsList>

            <TabsContent value="informative" className="mt-0">
              {renderEmailPreview()}
            </TabsContent>
            
            <TabsContent value="promotional" className="mt-0">
              {renderEmailPreview()}
            </TabsContent>
            
            <TabsContent value="product" className="mt-0">
              {renderEmailPreview()}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
