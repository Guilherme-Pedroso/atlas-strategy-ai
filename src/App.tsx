
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AIAssistant } from "@/components/ai/AIAssistant";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import GeneratingDocuments from "./pages/GeneratingDocuments";
import Library from "./pages/Library";
import Dashboard from "./pages/Dashboard";
import SmartDocuments from "./pages/SmartDocuments";
import AIStrategy from "./pages/AIStrategy";
import Plans from "./pages/Plans";
import AIHistory from "./pages/AIHistory";
import LandingPage from "./pages/LandingPage";
import Whitelist from "./pages/Whitelist";
import NotFound from "./pages/NotFound";
import Tools from "./pages/Tools";
import Pricing from "./pages/Pricing";
import DocumentViewer from "./pages/DocumentViewer";
import MarketingPlanDocument from "./components/documents/templates/MarketingPlanDocument";
import PitchDeckDocument from "./components/documents/templates/PitchDeckDocument";
import PersonaCreatorDocument from "./components/documents/templates/PersonaCreatorDocument";
import UserProfile from "./pages/UserProfile";
import Settings from "./pages/Settings";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Páginas públicas */}
          <Route path="/" element={<Index />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/whitelist" element={<Whitelist />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-de-uso" element={<TermsOfUse />} />
          
          {/* Fluxo de onboarding e pagamento */}
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/generating-documents" element={<GeneratingDocuments />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* Páginas protegidas (área logada) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/library" element={<Library />} />
          <Route path="/documents" element={<SmartDocuments />} />
          <Route path="/document/:documentId" element={<DocumentViewer />} />
          <Route path="/ai" element={<AIStrategy />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/ai-history" element={<AIHistory />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Redirecionando /index para / */}
          <Route path="/index" element={<Navigate replace to="/" />} />
          
          {/* Rota de captura geral para 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AIAssistant />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
