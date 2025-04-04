
import React from "react";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarHeader,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, Library, Wrench, Sparkles, FileText, User, LogOut } from "lucide-react";

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
  const navigate = useNavigate();
  const location = useLocation();

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
        <Sidebar className="hidden md:flex">
          <SidebarHeader className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">
                Marketing<span className="text-atlas-highlight">Atlas</span>
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton 
                    isActive={isActive(item.path)}
                    onClick={() => navigate(item.path)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {/* Profile and Logout */}
              <div className="mt-auto pt-6">
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <User className="h-4 w-4" />
                    <span>Perfil</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <LogOut className="h-4 w-4" />
                    <span>Sair</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </div>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        {/* Mobile Header */}
        <div className="fixed top-0 z-50 w-full bg-atlas-background/95 backdrop-blur-md border-b border-gray-800 shadow-md md:hidden">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <SidebarTrigger />
              <span className="ml-2 text-xl font-bold text-white">
                Marketing<span className="text-atlas-highlight">Atlas</span>
              </span>
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
