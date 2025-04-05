
import React, { useState } from "react";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarHeader,
  SidebarTrigger,
  SidebarFooter
} from "@/components/ui/sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Library, 
  Wrench, 
  Sparkles, 
  FileText, 
  User, 
  LogOut,
  Bell,
  Settings,
  HelpCircle,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard className="h-4 w-4" />,
      path: "/dashboard",
    },
    {
      name: "Biblioteca",
      icon: <Library className="h-4 w-4" />,
      path: "/library",
    },
    {
      name: "Ferramentas",
      icon: <Wrench className="h-4 w-4" />,
      path: "/tools",
    },
    {
      name: "IA Estratégica",
      icon: <Sparkles className="h-4 w-4" />,
      path: "/ai",
      badge: "Novo"
    },
    {
      name: "Meus Documentos",
      icon: <FileText className="h-4 w-4" />,
      path: "/documents",
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-atlas-background">
        {/* Desktop Sidebar */}
        <Sidebar className="hidden md:flex border-r border-white/10 shadow-xl">
          <SidebarHeader className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">
                Marketing<span className="text-atlas-highlight">Atlas</span>
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent className="bg-gradient-to-b from-atlas-background to-atlas-background/95">
            <div className="px-3 pt-6 pb-2">
              <div className="flex items-center justify-between mb-6">
                <Avatar className="h-10 w-10 border-2 border-atlas-highlight">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="bg-atlas-secondary/30 text-white">JD</AvatarFallback>
                </Avatar>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">João Silva</p>
                  <p className="text-xs text-atlas-neutral">Atlas Pro</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-4 w-4 text-atlas-neutral" />
                </div>
                <input
                  type="search"
                  placeholder="Buscar..."
                  className="w-full pl-10 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white placeholder:text-atlas-neutral focus:outline-none focus:ring-1 focus:ring-atlas-highlight"
                />
              </div>
            </div>
            
            <SidebarMenu className="mt-2 px-3">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton 
                    isActive={isActive(item.path)}
                    onClick={() => navigate(item.path)}
                    className="group transition-all duration-200 hover:bg-white/5 data-[active=true]:bg-atlas-highlight/10 data-[active=true]:text-atlas-highlight data-[active=true]:border-l-2 data-[active=true]:border-atlas-highlight"
                  >
                    <span className="text-atlas-neutral group-hover:text-white group-data-[active=true]:text-atlas-highlight">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                    {item.badge && (
                      <Badge className="ml-auto bg-atlas-highlight text-atlas-background text-xs py-0">
                        {item.badge}
                      </Badge>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            
            {/* Bottom actions */}
            <div className="mt-auto px-3 pb-6">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="hover:bg-white/5">
                    <HelpCircle className="h-4 w-4 text-atlas-neutral" />
                    <span>Ajuda e Suporte</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="hover:bg-white/5">
                    <Settings className="h-4 w-4 text-atlas-neutral" />
                    <span>Configurações</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="hover:bg-white/5 text-atlas-cta">
                    <LogOut className="h-4 w-4" />
                    <span>Sair</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
          </SidebarContent>
        </Sidebar>

        {/* Mobile Header */}
        <div className="fixed top-0 z-50 w-full bg-atlas-background/95 backdrop-blur-md border-b border-gray-800 shadow-md md:hidden">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <span className="text-xl font-bold text-white">
                Marketing<span className="text-atlas-highlight">Atlas</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-atlas-neutral">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-atlas-neutral">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar className="h-8 w-8 border-2 border-atlas-highlight">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="bg-atlas-secondary/30 text-white">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 pt-16 md:pt-0 md:pl-[var(--sidebar-width)]">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};
