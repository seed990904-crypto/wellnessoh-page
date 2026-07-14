import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PurchaseSection from "@/components/PurchaseSection";

const SuperGClean = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main style={{ paddingTop: "80px" }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* 좌측: 상세 이미지 */}
            <div className="flex-1 min-w-0">
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

            {/* 우측: 구매 섹션 (sticky) */}
            <div className="w-full md:w-[380px] shrink-0 md:sticky md:top-[96px]">
              <PurchaseSection />
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default SuperGClean;
