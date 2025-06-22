
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { AIAssistant } from "./components/AIAssistant";
import { AnimatedCursor } from "./components/AnimatedCursor";
import { ScrollBar } from "./components/ScrollBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Artists from "./pages/Artists";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import JoinUs from "./pages/JoinUs";
import AIAssistantPage from "./pages/AIAssistantPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          <AnimatedCursor />
          <ScrollBar />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/ai-assistant" element={<AIAssistantPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AIAssistant />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
