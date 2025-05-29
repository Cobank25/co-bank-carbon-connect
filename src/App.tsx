
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Registro from "./pages/Registro";
import Dashboard from "./pages/Dashboard";
import MobileDashboard from "./pages/MobileDashboard";
import Vender from "./pages/Vender";
import Comprar from "./pages/Comprar";
import Investir from "./pages/Investir";
import MapaBrasil from "./pages/MapaBrasil";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simula tempo de carregamento para mostrar o logo
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white">
        <div className="flex flex-col items-center justify-center gap-4">
          <img 
            src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" 
            alt="CoBank Logo" 
            className="h-24 w-24 animate-pulse" 
          />
          <h1 className="text-3xl font-bold text-green-800 mt-4">CoBank</h1>
          <p className="text-green-600">Conectando o futuro sustentável</p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mobile-dashboard" element={<MobileDashboard />} />
            <Route path="/vender" element={<Vender />} />
            <Route path="/comprar" element={<Comprar />} />
            <Route path="/investir" element={<Investir />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
