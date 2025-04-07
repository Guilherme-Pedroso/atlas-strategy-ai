
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AIAssistant } from "@/components/ai/AIAssistant";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Library from "./pages/Library";
import Dashboard from "./pages/Dashboard";
import SmartDocuments from "./pages/SmartDocuments";
import AIStrategy from "./pages/AIStrategy";
import Plans from "./pages/Plans";
import AIHistory from "./pages/AIHistory";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Tools from "./pages/Tools";
import Pricing from "./pages/Pricing";
import DocumentViewer from "./pages/DocumentViewer";
import MarketingPlanDocument from "./components/documents/templates/MarketingPlanDocument";
import PitchDeckDocument from "./components/documents/templates/PitchDeckDocument";
import PersonaCreatorDocument from "./components/documents/templates/PersonaCreatorDocument";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Definindo Index como a rota principal */}
          <Route path="/" element={<Index />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/library" element={<Library />} />
          <Route path="/documents" element={<SmartDocuments />} />
          <Route path="/document/:documentId" element={<DocumentViewer />} />
          <Route path="/ai" element={<AIStrategy />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/ai-history" element={<AIHistory />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* Redirecionando /index para / */}
          <Route path="/index" element={<Navigate replace to="/" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AIAssistant />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
