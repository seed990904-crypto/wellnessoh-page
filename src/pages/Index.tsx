import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScienceSection from "@/components/ScienceSection";
import ReelsSection from "@/components/ReelsSection";
import BioHackingToolsSection from "@/components/BioHackingToolsSection";
import YouthResetSection from "@/components/YouthResetSection";
import OfferSection from "@/components/OfferSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PromoPopup from "@/components/PromoPopup";
import { useJsonLd } from "@/hooks/useJsonLd";
import { brandSchemas } from "@/data/brandSchemas";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({ url: "/" });
  useJsonLd(brandSchemas);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ScienceSection />
      <ReelsSection />
      <BioHackingToolsSection />
      <YouthResetSection />
      <OfferSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
      <PromoPopup />
    </div>
  );
};

export default Index;
