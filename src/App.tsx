import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GaRouteTracker } from "@/components/GaRouteTracker";
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
import YouthReset from "./pages/YouthReset";
import BrandStory from "./pages/BrandStory";
import Products from "./pages/Products";
import SuperLongeVita from "./pages/SuperLongeVita";
import CoreRoutine from "./pages/CoreRoutine";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GaRouteTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ingredients-technology" element={<IngredientsTechnology />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/products/super-gclean" element={<SuperGClean />} />
          <Route path="/products/super-immune" element={<SuperImmune />} />
          <Route path="/products/super-greens" element={<SuperGreens />} />
          <Route path="/products/super-zyme" element={<SuperZyme />} />
          <Route path="/products/better-salt" element={<BetterSalt />} />
          <Route path="/products/super-longe-vita" element={<SuperLongeVita />} />
          <Route path="/products/core-routine" element={<CoreRoutine />} />
          <Route path="/youth-reset" element={<YouthReset />} />
          <Route path="/about" element={<BrandStory />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
