import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PurchaseSection, { ProductConfig } from "@/components/PurchaseSection";
import productImg from "@/assets/product-super-greens.png";

const product: ProductConfig = {
  brand: "청춘리셋",
  name: "슈퍼그린",
  engName: "SUPER GREENS",
  tags: ["유기농 엽록소 블렌드", "세포 디톡스", "항산화"],
  unitPrice: 150000,
  freeShippingThreshold: 0,
  shippingFee: 0,
  origin: "미국",
  manufacturer: "텐액스랩스",
  purchaseUrl: "https://youthreset.kr/product/?idx=2",
};

const features = [
  { title: "유기농 엽록소 블렌드", desc: "식물의 혈액이라 불리는 엽록소를 유기농으로 농축하여 청춘 디톡스를 실현합니다." },
  { title: "체내 세포 디톡스 및 항산화", desc: "세포 수준의 독소를 제거하고 산화 스트레스로부터 세포를 보호합니다." },
  { title: "초록빛 청춘 에너지", desc: "다양한 녹색 식물의 정수를 담아 활력과 젊음을 지원합니다." },
];

const SuperGreens = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main style={{ paddingTop: "80px" }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* 좌측: 제품 이미지 + 소개 */}
            <div className="flex-1 min-w-0">
              <div className="rounded-2xl bg-muted/20 flex items-center justify-center p-8 mb-6" style={{ minHeight: "340px" }}>
                <img
                  src={productImg}
                  alt="슈퍼그린"
                  className="max-h-72 w-auto max-w-full object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                슈퍼그린 <span className="whitespace-nowrap">SUPER GREENS</span>
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                식물의 혈액으로 마시는 초록빛 청춘 디톡스.<br />
                유기농 엽록소로 세포를 깨끗하게 리셋합니다.
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
        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default SuperGreens;
