import { useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PurchaseSection, { ProductConfig } from "@/components/PurchaseSection";
import { cornerstones } from "@/data/cornerstones";

export interface ProductFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ProductPageProps {
  product: ProductConfig;
  tagline: string;
  features: ProductFeature[];
  activeCornerstones: string[];
  forWho: string[];
  howToUse: string;
  detailImages?: string[];
}

const ProductPage = ({
  product,
  tagline,
  features,
  activeCornerstones,
  forWho,
  howToUse,
  detailImages,
}: ProductPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main style={{ paddingTop: "80px" }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10">

          {/* 상단: 이미지 + 구매 섹션 */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
            <div className="flex-1 min-w-0">
              <div
                className="rounded-2xl bg-muted/20 flex items-center justify-center p-6 mb-6"
                style={{ minHeight: "480px" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[420px] w-auto max-w-full object-contain"
                />
              </div>
              <p className="text-xs text-muted-foreground font-medium tracking-wide mb-1">
                {product.brand}
              </p>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {product.name}{" "}
                <span className="text-xl font-semibold text-muted-foreground whitespace-nowrap">
                  {product.engName}
                </span>
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tagline}</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full md:w-[380px] shrink-0 md:sticky md:top-[96px]">
              <PurchaseSection product={product} />
            </div>
          </div>

          {/* 핵심 작용 원리 */}
          <section className="border-t pt-12 mb-14">
            <h2 className="text-lg font-bold text-foreground mb-6">핵심 작용 원리</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-muted/20 rounded-2xl p-6 border border-border/40"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-sm leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4대 코너스톤 */}
          <section className="border-t pt-12 mb-14">
            <div className="mb-7">
              <p className="text-[10px] font-mono tracking-[0.2em] text-primary uppercase mb-2">
                4 Cornerstones
              </p>
              <h2 className="text-lg font-bold text-foreground mb-1">
                이 제품이 작용하는 코너스톤
              </h2>
              <p className="text-sm text-muted-foreground">
                웰니스 아키텍트가 설계한 4대 생물학적 기둥 중 이 제품이 담당하는 영역입니다.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {cornerstones.map((cs) => {
                const isActive = activeCornerstones.includes(cs.id);
                return (
                  <div
                    key={cs.id}
                    className={`rounded-2xl p-5 border transition-all ${
                      isActive
                        ? "bg-primary/5 border-primary/25 shadow-sm"
                        : "bg-muted/15 border-border/20 opacity-35"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-mono font-bold rounded-lg w-8 h-8 flex items-center justify-center mb-3 ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {cs.id}
                    </span>
                    <h3
                      className={`text-sm font-bold mb-0.5 leading-snug ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {cs.title}
                    </h3>
                    <p className="text-[10px] font-mono text-muted-foreground/60 mb-2">
                      {cs.subtitle}
                    </p>
                    {isActive && (
                      <p className="text-xs text-muted-foreground leading-relaxed">{cs.desc}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* 이런 분께 추천 */}
          <section className="border-t pt-12 mb-14">
            <h2 className="text-lg font-bold text-foreground mb-6">이런 분께 추천합니다</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {forWho.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-muted/20 rounded-xl p-4 border border-border/30"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 섭취 방법 */}
          <section className="border-t pt-12 mb-14">
            <h2 className="text-lg font-bold text-foreground mb-4">섭취 방법</h2>
            <div className="bg-muted/20 rounded-2xl p-6 border border-border/30">
              <p className="text-sm text-foreground leading-loose">{howToUse}</p>
            </div>
          </section>

          {/* 상품 상세 이미지 */}
          {detailImages && detailImages.length > 0 && (
            <section className="border-t pt-12">
              <h2 className="text-lg font-bold text-foreground text-center mb-8">상품 상세</h2>
              <div className="max-w-[560px] mx-auto">
                {detailImages.map((src, i) => (
                  <img key={i} src={src} alt={`상세 ${i + 1}`} className="w-full block" />
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default ProductPage;
