import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PurchaseSection, { ProductConfig } from "@/components/PurchaseSection";
import productImg from "@/assets/product-super-immune.jpg";

const product: ProductConfig = {
  brand: "청춘리셋",
  name: "슈퍼이뮨",
  engName: "SUPER IMMUNE",
  tags: ["세포 통신망 리셋", "에이스매넌 & 초유", "면역 조절 서포트"],
  unitPrice: 160000,
  freeShippingThreshold: 0,
  shippingFee: 0,
  origin: "미국",
  manufacturer: "텐액스랩스",
  purchaseUrl: "https://youthreset.kr/product/?idx=3",
};

const features = [
  { title: "세포 통신망(당사슬) 리셋", desc: "손상된 세포 간 신호 체계를 복원하여 면역 반응을 정상화합니다." },
  { title: "에이스매넌(Acemannan) 함유", desc: "알로에 베라에서 추출한 핵심 성분으로 면역세포 활성화를 돕습니다." },
  { title: "초유(Colostrum) 블렌드", desc: "성장인자와 면역 글로불린이 풍부한 초유로 세포 방어력을 강화합니다." },
];

const SuperImmune = () => {
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
              <div className="rounded-2xl bg-muted/20 flex items-center justify-center p-6 mb-6" style={{ minHeight: "480px" }}>
                <img
                  src={productImg}
                  alt="슈퍼이뮨"
                  className="max-h-[420px] w-auto max-w-full object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                슈퍼이뮨 <span className="whitespace-nowrap">SUPER IMMUNE</span>
              </h1>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                세포의 대화가 시작되는 면역조절 서포트.<br />
                당사슬 복원으로 몸의 방어 체계를 리셋합니다.
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

export default SuperImmune;
