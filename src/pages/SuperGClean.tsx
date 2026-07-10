import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const SuperGClean = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main style={{ paddingTop: "80px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <img
            src="/super-gclean-detail-1.png"
            alt="슈퍼지클린 상세페이지 1"
            style={{ width: "100%", display: "block" }}
          />
          <img
            src="/super-gclean-detail-2.png"
            alt="슈퍼지클린 상세페이지 2"
            style={{ width: "100%", display: "block" }}
          />
          <img
            src="/super-gclean-detail-3.png"
            alt="슈퍼지클린 상세페이지 3"
            style={{ width: "100%", display: "block" }}
          />
        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default SuperGClean;
