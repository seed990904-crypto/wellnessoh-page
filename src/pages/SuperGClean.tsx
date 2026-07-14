import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PurchaseSection, { ProductConfig } from "@/components/PurchaseSection";
import productImg from "@/assets/product-super-gclean.png";

const product: ProductConfig = {
  brand: "청춘리셋",
  name: "슈퍼지클린",
  engName: "SUPER G.CLEAN",
  tags: ["900일 자연배양 생효소", "장 상태 개선", "2시간의 마법"],
  unitPrice: 27000,
  freeShippingThreshold: 45000,
  shippingFee: 3000,
  origin: "국산",
  manufacturer: "(주)효소세상",
  purchaseUrl: "https://youthreset.kr/product/?idx=5",
};

const features = [
  { title: "900일 자연배양 생효소", desc: "900일간 정성껏 배양한 생효소가 장 속 유해물질을 가수분해하고 배출을 도와줍니다." },
  { title: "2시간 안에 가벼워지는 속", desc: "섭취 후 약 2시간 이내에 장 상태 개선 효과를 체감할 수 있는 빠른 작용 솔루션입니다." },
  { title: "노폐물 가수분해 및 배출", desc: "장 내 쌓인 노폐물을 분해하고 배출하여 가볍고 쾌적한 장 환경을 만들어줍니다." },
];

const SuperGClean = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main style={{ paddingTop: "80px" }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10">

          {/* 상단: 제품 소개 + 구매 섹션 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* 좌측: 제품 이미지 + 소개 */}
            <div className="flex-1 min-w-0">
              <div className="rounded-2xl bg-muted/20 flex items-center justify-center p-6 mb-6" style={{ minHeight: "480px" }}>
                <img
                  src={productImg}
                  alt="슈퍼지클린"
                  className="max-h-[420px] w-auto max-w-full object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                슈퍼지클린 <span className="whitespace-nowrap">SUPER G.CLEAN</span>
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                2시간의 마법, 몸을 리셋하다.<br />
                900일 자연배양 생효소로 장 상태를 개선하는 클렌징 솔루션.
              </p>
              <div className="space-y-4">
                {features.map((f) => (
                  <div key={f.title} className="border rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">{f.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 우측: 구매 섹션 (sticky) */}
            <div className="w-full md:w-[380px] shrink-0 md:sticky md:top-[96px]">
              <PurchaseSection product={product} />
            </div>

          </div>

          {/* 하단: 상품 상세 이미지 */}
          <div className="mt-16 border-t pt-12">
            <h2 className="text-xl font-bold text-foreground text-center mb-8">상품 상세</h2>
            <div className="max-w-[560px] mx-auto">
              <img
                src="/super-gclean-detail-1.png"
                alt="슈퍼지클린 상세 1"
                className="w-full block"
              />
              <img
                src="/super-gclean-detail-2.png"
                alt="슈퍼지클린 상세 2"
                className="w-full block"
              />
              <img
                src="/super-gclean-detail-3.png"
                alt="슈퍼지클린 상세 3"
                className="w-full block"
              />
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
