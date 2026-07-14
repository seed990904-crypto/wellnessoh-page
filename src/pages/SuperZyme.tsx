import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PurchaseSection, { ProductConfig } from "@/components/PurchaseSection";
import productImg from "@/assets/product-super-zyme.jpg";

const product: ProductConfig = {
  brand: "청춘리셋",
  name: "슈퍼자임",
  engName: "SUPER ZYME",
  tags: ["간헐적 단식 효율", "오토파지 촉진", "17가지 천연 초본"],
  unitPrice: 75000,
  freeShippingThreshold: 0,
  shippingFee: 0,
  origin: "미국",
  manufacturer: "텐액스랩스",
  purchaseUrl: "https://youthreset.kr/product/?idx=4",
};

const features = [
  { title: "오토파지(Autophagy) 촉진", desc: "세포 자가청소 기전인 오토파지를 활성화하여 노화된 세포를 갱신합니다." },
  { title: "간헐적 단식 효율 극대화", desc: "단식 중 영양 공백을 채우며 단식의 효과를 최대한 끌어냅니다." },
  { title: "17가지 천연 초본 발효 솔루션", desc: "자연에서 엄선한 17가지 초본 식물을 발효해 마이크로바이옴을 최적화합니다." },
];

const SuperZyme = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main style={{ paddingTop: "80px" }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* 좌측: 제품 소개 */}
            <div className="flex-1 min-w-0">
              <div className="bg-muted/30 rounded-2xl p-8 flex flex-col items-center mb-8">
                <img
                  src={productImg}
                  alt="슈퍼자임"
                  className="w-64 h-64 object-contain mb-6"
                />
                <h1 className="text-2xl font-bold text-foreground text-center mb-2">
                  슈퍼자임 <span className="whitespace-nowrap">SUPER ZYME</span>
                </h1>
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  오토파지를 깨우는 마이크로바이옴 발효 솔루션.<br />
                  청춘을 되찾는 세포 자가청소 프로그램.
                </p>
              </div>

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

export default SuperZyme;
