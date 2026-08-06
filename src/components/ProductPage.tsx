import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PurchaseSection, { ProductConfig } from "@/components/PurchaseSection";
import { BuyButton } from "@/components/BuyButton";
import { cornerstones } from "@/data/cornerstones";
import { useSEO } from "@/hooks/useSEO";
import { useJsonLd } from "@/hooks/useJsonLd";
import { MALL_BASE } from "@/config/mall";
import type { ProductSlug } from "@/config/mall";
import { productToPosts } from "@/config/relatedContent";

const WP_BASE = "https://waoh.life/wp-json/wp/v2";

interface WPPostBrief {
  id: number;
  slug: string;
  title: { rendered: string };
  yoast_head_json?: { og_image?: { url: string }[] };
}

function RelatedPosts({ productId }: { productId: string }) {
  const slugs = productToPosts[productId] ?? [];
  const [posts, setPosts] = useState<WPPostBrief[]>([]);

  useEffect(() => {
    if (slugs.length === 0) return;
    const params = new URLSearchParams();
    slugs.forEach((s) => params.append("slug[]", s));
    params.set("_fields", "id,slug,title,yoast_head_json");
    params.set("per_page", "2");
    fetch(`${WP_BASE}/posts?${params}`)
      .then((r) => r.json())
      .then((data: WPPostBrief[]) => {
        if (Array.isArray(data)) setPosts(data.slice(0, 2));
      })
      .catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  if (slugs.length === 0 || posts.length === 0) return null;

  return (
    <div className="mt-10 mb-10 pt-10 border-t border-border">
      <p className="font-mono-label mb-5">이 성분·원리 더 알아보기</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {posts.map((p) => {
          const ogImg = p.yoast_head_json?.og_image?.[0]?.url;
          return (
            <Link
              key={p.id}
              to={`/blog/${p.slug}`}
              className="flex items-center gap-4 bg-muted/20 border border-border/40 rounded-2xl p-4 hover:bg-muted/30 hover:shadow-sm transition-all group"
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-muted/40">
                {ogImg ? (
                  <img src={ogImg} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-sm font-bold text-foreground leading-snug line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                />
                <p className="text-xs text-primary font-semibold mt-1.5">읽기 →</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export interface ProductFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface LegalDisclosure {
  ingredients: string;
  cautions: string[];
}

interface ProductPageProps {
  product: ProductConfig;
  tagline: string;
  features: ProductFeature[];
  activeCornerstones: string[];
  forWho: string[];
  howToUse: string;
  legalDisclosure: LegalDisclosure;
  detailImages?: string[];
}

const ProductPage = ({
  product,
  tagline,
  features,
  activeCornerstones,
  forWho,
  howToUse,
  legalDisclosure,
  detailImages,
}: ProductPageProps) => {
  useSEO({
    title: `${product.name} — ${product.engName}`,
    description: tagline,
    image: typeof product.image === "string" ? product.image : undefined,
    url: `/products/${product.id}`,
  });

  useJsonLd({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: tagline,
    brand: { "@type": "Brand", name: "웰니스 아키텍트" },
    // offers 생략 — 가격·재고 정보는 카페24 몰이 본체
    ...(product.cafe24ProductNo
      ? { url: `${MALL_BASE}/product/detail.html?product_no=${product.cafe24ProductNo}` }
      : {}),
  });

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
            <section className="border-t pt-12 mb-14">
              <h2 className="text-lg font-bold text-foreground text-center mb-8">상품 상세</h2>
              <div className="max-w-[560px] mx-auto">
                {detailImages.map((src, i) => (
                  <img key={i} src={src} alt={`상세 ${i + 1}`} className="w-full block" />
                ))}
              </div>
            </section>
          )}

          {/* 건강기능식품 법정 표시사항 */}
          <section className="border-t pt-12 mb-10">
            <h2 className="text-base font-bold text-foreground mb-1">건강기능식품 법정 표시사항</h2>
            <p className="text-xs text-muted-foreground mb-5">
              건강기능식품에 관한 법률 및 식품 등의 표시·광고에 관한 법률에 따른 표시 사항입니다.
              아래 내용은 예시 형식이며, 정확한 전성분·함량은 제품 포장 라벨을 확인하세요.
            </p>
            <div className="bg-muted/25 rounded-2xl border border-border/50 divide-y divide-border/40 text-sm overflow-hidden">
              <div className="px-6 py-5">
                <p className="font-semibold text-foreground mb-2">원료명 및 함량</p>
                <p className="text-muted-foreground leading-relaxed">{legalDisclosure.ingredients}</p>
              </div>
              <div className="px-6 py-5">
                <p className="font-semibold text-foreground mb-3">섭취 시 주의사항</p>
                <ul className="space-y-2">
                  {legalDisclosure.cautions.map((c, i) => (
                    <li key={i} className="flex gap-2 text-muted-foreground">
                      <span className="shrink-0 mt-px text-muted-foreground/50">·</span>
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-amber-50/60">
                <p className="text-xs text-amber-800/80 leading-relaxed">
                  ※ 이 제품은 질병의 예방 또는 치료를 위한 의약품이 아닙니다. 개인에 따라 섭취 효과의 차이가 있을 수 있으며, 질환이 있거나 의약품을 복용 중인 경우 섭취 전 반드시 전문의와 상담하시기 바랍니다.
                </p>
              </div>
            </div>
          </section>

          <RelatedPosts productId={product.id} />

          {/* 하단 구매 CTA */}
          <div className="border-t pt-10 pb-4 flex flex-col items-center gap-4">
            <p className="text-xs text-muted-foreground tracking-wide uppercase">지금 시작하세요</p>
            <BuyButton
              product={product.id as ProductSlug}
              size="lg"
              label="카페24에서 구매하기"
              className="min-w-[220px]"
            />
          </div>

        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default ProductPage;
