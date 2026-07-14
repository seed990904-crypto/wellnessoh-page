import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PurchaseSection, { ProductConfig } from "@/components/PurchaseSection";
import productImg from "@/assets/product-better-salt.jpg";

const product: ProductConfig = {
  brand: "청춘리셋",
  name: "베러솔트",
  engName: "BETTER SALT",
  tags: ["40종 활성 미네랄", "1200도 열처리", "알칼리 소금"],
  unitPrice: 88000,
  freeShippingThreshold: 0,
  shippingFee: 0,
  origin: "국산 (전라남도 신안군)",
  manufacturer: "(주)효소세상",
  purchaseUrl: "https://youthreset.kr/product/?idx=1",
};

const features = [
  { title: "1200도 열처리 40종 활성 미네랄", desc: "고온 열처리로 불순물을 제거하고 40가지 미네랄을 활성화하여 체내 흡수율을 높입니다." },
  { title: "유해물질 0% 알칼리 소금", desc: "중금속과 미세플라스틱을 완전히 제거한 청결한 알칼리 소금으로 몸의 pH 균형을 잡습니다." },
  { title: "0.9% 생명의 기초 밸런스", desc: "인체 혈액과 동일한 0.9% 미네랄 농도로 세포의 항상성을 유지합니다." },
];

const BetterSalt = () => {
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
                  alt="베러솔트"
                  className="max-h-72 w-auto max-w-full object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                베러솔트 <span className="whitespace-nowrap">BETTER SALT</span>
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                0.9%의 신비, 청춘을 위한 완벽한 밸런스.<br />
                신안 천일염의 정수를 담은 활성 미네랄 소금.
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

export default BetterSalt;
