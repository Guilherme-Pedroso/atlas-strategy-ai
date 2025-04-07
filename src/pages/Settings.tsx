
import React, { useState } from "react";
import { AppShell } from "@/components/dashboard/AppShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Bell, Globe, Lock, LogOut, Moon, Shield, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

// Define the structure of our settings object with a type
type SettingsState = {
  notifications: {
    emailDigest: boolean;
    newFeatures: boolean;
    documentUpdates: boolean;
    marketingEmails: boolean;
  };
  preferences: {
    darkMode: boolean;
    compactView: boolean;
    autoSave: boolean;
    language: string;
  };
  privacy: {
    shareAnalytics: boolean;
    storeHistory: boolean;
    allowCookies: boolean;
  };
};

const Settings = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [settings, setSettings] = useState<SettingsState>({
    notifications: {
      emailDigest: true,
      newFeatures: true,
      documentUpdates: true,
      marketingEmails: false
    },
    preferences: {
      darkMode: true,
      compactView: false,
      autoSave: true,
      language: "pt-BR"
    },
    privacy: {
      shareAnalytics: true,
      storeHistory: true,
      allowCookies: true
    }
  });
  
  // Fix: Make category parameter properly typed as a key of SettingsState
  const handleToggleSetting = (category: keyof SettingsState, setting: string) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: !prev[category][setting as keyof typeof prev[category]]
      }
    }));
  };
  
  const handleSaveSettings = () => {
    toast({
      title: "Configurações salvas",
      description: "Suas preferências foram atualizadas com sucesso.",
    });
  };
  
  const handleLogout = () => {
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
    });
    navigate("/login");
  };

  return (
    <AppShell>
      <div className="container py-8 max-w-3xl">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Configurações</h1>
            <p className="text-atlas-neutral">Gerencie suas preferências e configurações da conta.</p>
          </div>
          
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="bg-atlas-background/30 border border-white/10 mb-4">
              <TabsTrigger value="account" className="data-[state=active]:bg-atlas-highlight data-[state=active]:text-atlas-background">
                <User className="h-4 w-4 mr-2" />
                Conta
              </TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:bg-atlas-highlight data-[state=active]:text-atlas-background">
                <Bell className="h-4 w-4 mr-2" />
                Notificações
              </TabsTrigger>
              <TabsTrigger value="preferences" className="data-[state=active]:bg-atlas-highlight data-[state=active]:text-atlas-background">
                <Globe className="h-4 w-4 mr-2" />
                Preferências
              </TabsTrigger>
              <TabsTrigger value="privacy" className="data-[state=active]:bg-atlas-highlight data-[state=active]:text-atlas-background">
                <Shield className="h-4 w-4 mr-2" />
                Privacidade
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="account" className="mt-0">
              <Card className="bg-atlas-background/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Informações da conta</CardTitle>
                  <CardDescription className="text-atlas-neutral">
                    Gerencie suas informações de conta e configurações de segurança.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium">Perfil</h3>
                        <p className="text-sm text-atlas-neutral">Gerencie suas informações pessoais</p>
                      </div>
                      <Button 
                        variant="outline" 
                        onClick={() => navigate("/profile")}
                        className="border-white/10 text-white hover:bg-white/5"
                      >
                        Editar perfil
                      </Button>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium">Senha</h3>
                        <p className="text-sm text-atlas-neutral">Atualize sua senha e configurações de segurança</p>
                      </div>
                      <Button 
                        variant="outline" 
                        className="border-white/10 text-white hover:bg-white/5"
                      >
                        <Lock className="mr-2 h-4 w-4" />
                        Alterar senha
                      </Button>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium">Verificação em duas etapas</h3>
                        <p className="text-sm text-atlas-neutral">Adicione uma camada extra de segurança</p>
                      </div>
                      <Button 
                        variant="outline" 
                        className="border-white/10 text-white hover:bg-white/5"
                      >
                        Configurar
                      </Button>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-red-400 font-medium">Encerrar sessão</h3>
                        <p className="text-sm text-atlas-neutral">Sair da sua conta em todos os dispositivos</p>
                      </div>
                      <Button 
                        variant="destructive" 
                        className="bg-red-500/20 text-red-400 hover:bg-red-500/30"
                        onClick={handleLogout}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sair
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications" className="mt-0">
              <Card className="bg-atlas-background/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Configurações de notificações</CardTitle>
                  <CardDescription className="text-atlas-neutral">
                    Escolha como e quando deseja receber notificações.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium">Resumo por e-mail</h3>
                        <p className="text-sm text-atlas-neutral">Receba um resumo semanal das suas atividades</p>
                      </div>
                      <Switch
                        checked={settings.notifications.emailDigest}
                        onCheckedChange={() => handleToggleSetting('notifications', 'emailDigest')}
                      />
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium">Novas funcionalidades</h3>
                        <p className="text-sm text-atlas-neutral">Seja notificado sobre novas ferramentas e recursos</p>
                      </div>
                      <Switch
                        checked={settings.notifications.newFeatures}
                        onCheckedChange={() => handleToggleSetting('notifications', 'newFeatures')}
                      />
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium">Atualizações de documentos</h3>
                        <p className="text-sm text-atlas-neutral">Seja notificado quando houver mudanças em documentos compartilhados</p>
                      </div>
                      <Switch
                        checked={settings.notifications.documentUpdates}
                        onCheckedChange={() => handleToggleSetting('notifications', 'documentUpdates')}
                      />
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium">E-mails de marketing</h3>
                        <p className="text-sm text-atlas-neutral">Receba dicas, ofertas e promoções</p>
                      </div>
                      <Switch
                        checked={settings.notifications.marketingEmails}
                        onCheckedChange={() => handleToggleSetting('notifications', 'marketingEmails')}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-white/10 pt-6">
                  <Button 
                    className="ml-auto bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
                    onClick={handleSaveSettings}
                  >
                    Salvar configurações
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="preferences" className="mt-0">
              <Card className="bg-atlas-background/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Preferências de interface</CardTitle>
                  <CardDescription className="text-atlas-neutral">
                    Personalize sua experiência na plataforma.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium">Tema escuro</h3>
                        <p className="text-sm text-atlas-neutral">Usar interface com fundo escuro</p>
                      </div>
                      <Switch
                        checked={settings.preferences.darkMode}
                        onCheckedChange={() => handleToggleSetting('preferences', 'darkMode')}
                      />
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium">Visualização compacta</h3>
                        <p className="text-sm text-atlas-neutral">Mostrar mais conteúdo com menos espaçamento</p>
                      </div>
                      <Switch
                        checked={settings.preferences.compactView}
                        onCheckedChange={() => handleToggleSetting('preferences', 'compactView')}
                      />
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium">Salvamento automático</h3>
                        <p className="text-sm text-atlas-neutral">Salvar documentos automaticamente enquanto edita</p>
                      </div>
                      <Switch
                        checked={settings.preferences.autoSave}
                        onCheckedChange={() => handleToggleSetting('preferences', 'autoSave')}
                      />
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium">Idioma</h3>
                        <p className="text-sm text-atlas-neutral">Selecione o idioma da interface</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <select 
                          className="bg-white/5 border border-white/10 rounded text-white px-3 py-1"
                          value={settings.preferences.language}
                          onChange={(e) => setSettings(prev => ({
                            ...prev,
                            preferences: {
                              ...prev.preferences,
                              language: e.target.value
                            }
                          }))}
                        >
                          <option value="pt-BR">Português (Brasil)</option>
                          <option value="en-US">English (US)</option>
                          <option value="es">Español</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-white/10 pt-6">
                  <Button 
                    className="ml-auto bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
                    onClick={handleSaveSettings}
                  >
                    Salvar configurações
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="privacy" className="mt-0">
              <Card className="bg-atlas-background/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Configurações de privacidade</CardTitle>
                  <CardDescription className="text-atlas-neutral">
                    Gerencie como seus dados são utilizados e armazenados.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium">Compartilhar analytics</h3>
                        <p className="text-sm text-atlas-neutral">Ajude-nos a melhorar compartilhando dados de uso anônimos</p>
                      </div>
                      <Switch
                        checked={settings.privacy.shareAnalytics}
                        onCheckedChange={() => handleToggleSetting('privacy', 'shareAnalytics')}
                      />
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium">Armazenar histórico</h3>
                        <p className="text-sm text-atlas-neutral">Guardar histórico de conversas com IA</p>
                      </div>
                      <Switch
                        checked={settings.privacy.storeHistory}
                        onCheckedChange={() => handleToggleSetting('privacy', 'storeHistory')}
                      />
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium">Permitir cookies</h3>
                        <p className="text-sm text-atlas-neutral">Personalizar sua experiência com cookies</p>
                      </div>
                      <Switch
                        checked={settings.privacy.allowCookies}
                        onCheckedChange={() => handleToggleSetting('privacy', 'allowCookies')}
                      />
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium">Documentos legais</h3>
                        <p className="text-sm text-atlas-neutral">Revise nossos termos e políticas</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="link" 
                          className="text-atlas-highlight h-auto p-0" 
                          onClick={() => window.open('/termos-de-uso', '_blank')}
                        >
                          Termos de Uso
                        </Button>
                        <span className="text-atlas-neutral">|</span>
                        <Button 
                          variant="link" 
                          className="text-atlas-highlight h-auto p-0" 
                          onClick={() => window.open('/politica-de-privacidade', '_blank')}
                        >
                          Política de Privacidade
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-white/10 pt-6">
                  <Button 
                    className="ml-auto bg-atlas-highlight text-atlas-background hover:bg-atlas-highlight/90"
                    onClick={handleSaveSettings}
                  >
                    Salvar configurações
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppShell>
  );
};

export default Settings;
