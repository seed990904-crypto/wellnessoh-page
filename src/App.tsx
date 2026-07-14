import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IngredientsTechnology from "./pages/IngredientsTechnology";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Podcast from "./pages/Podcast";
import SuperGClean from "./pages/SuperGClean";
import SuperImmune from "./pages/SuperImmune";
import SuperGreens from "./pages/SuperGreens";
import SuperZyme from "./pages/SuperZyme";
import BetterSalt from "./pages/BetterSalt";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ingredients-technology" element={<IngredientsTechnology />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/products/super-gclean" element={<SuperGClean />} />
          <Route path="/products/super-immune" element={<SuperImmune />} />
          <Route path="/products/super-greens" element={<SuperGreens />} />
          <Route path="/products/super-zyme" element={<SuperZyme />} />
          <Route path="/products/better-salt" element={<BetterSalt />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
