import { Link } from "react-router-dom";
import { Bell } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BuyButton } from "@/components/BuyButton";
import { cornerstones } from "@/data/cornerstones";
import { useSEO } from "@/hooks/useSEO";
import { cn } from "@/lib/utils";
import type { ProductSlug } from "@/config/mall";

import imgImmune  from "@/assets/product-super-immune.jpg";
import imgGreens  from "@/assets/product-super-greens.png";
import imgSalt    from "@/assets/product-better-salt.jpg";
import imgGclean  from "@/assets/product-super-gclean.png";
import imgZyme    from "@/assets/product-super-zyme.jpg";

// ─── 타입 ────────────────────────────────────────────────
interface CatalogProduct {
  slug:      ProductSlug;
  name:      string;
  engName:   string;
  price:     number;
  tags:      string[];
  image:     string;
  primaryCs: string;
}
interface ComingSoonProduct {
  slug:    ProductSlug;
  name:    string;
  engName: string;
  teaser:  string;
}

// ─── 데이터 ──────────────────────────────────────────────
const catalog: CatalogProduct[] = [
  {
    slug: "super-immune", name: "슈퍼이뮨", engName: "SUPER IMMUNE",
    price: 160000, primaryCs: "01",
    tags: ["세포 통신망 리셋", "에이스매넌 & 초유", "면역 조절 서포트"],
    image: imgImmune,
  },
  {
    slug: "super-greens", name: "슈퍼그린", engName: "SUPER GREENS",
    price: 150000, primaryCs: "01",
    tags: ["유기농 엽록소 블렌드", "세포 디톡스", "항산화"],
    image: imgGreens,
  },
  {
    slug: "better-salt", name: "베러솔트", engName: "BETTER SALT",
    price: 88000, primaryCs: "02",
    tags: ["40종 활성 미네랄", "1200도 열처리", "알칼리 소금"],
    image: imgSalt,
  },
  {
    slug: "super-gclean", name: "슈퍼지클린", engName: "SUPER G.CLEAN",
    price: 27000, primaryCs: "03",
    tags: ["900일 자연배양 생효소", "장 상태 개선", "2시간의 마법"],
    image: imgGclean,
  },
  {
    slug: "super-zyme", name: "슈퍼자임", engName: "SUPER ZYME",
    price: 75000, primaryCs: "03",
    tags: ["간헐적 단식 효율", "오토파지 촉진", "17가지 천연 초본"],
    image: imgZyme,
  },
];

const comingSoon: ComingSoonProduct[] = [
  {
    slug: "super-longe-vita", name: "슈퍼롱제비타", engName: "SUPER LONGEVITA",
    teaser: "세포 수명 연장 · 항노화 솔루션",
  },
  {
    slug: "core-routine", name: "코어루틴", engName: "CORE ROUTINE",
    teaser: "4대 코너스톤 통합 바이오해킹 패키지",
  },
];

// ─── 코너스톤별 스타일 ────────────────────────────────────
const csStyle: Record<string, { badge: string; strip: string; dot: string }> = {
  "01": { badge: "bg-blue-50 text-blue-700",     strip: "bg-blue-50/60",     dot: "bg-blue-400"    },
  "02": { badge: "bg-emerald-50 text-emerald-700", strip: "bg-emerald-50/60", dot: "bg-emerald-400" },
  "03": { badge: "bg-amber-50 text-amber-700",    strip: "bg-amber-50/60",    dot: "bg-amber-400"   },
  "04": { badge: "bg-violet-50 text-violet-700",  strip: "bg-violet-50/60",   dot: "bg-violet-400"  },
};

// ─── 제품 카드 ────────────────────────────────────────────
function ProductCard({ p }: { p: CatalogProduct }) {
  const style = csStyle[p.primaryCs];

  return (
    <article className="flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      {/* 클릭 영역 → 상세 페이지 */}
      <Link to={`/products/${p.slug}`} className="flex flex-col flex-1 group">
        {/* 이미지 */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className={cn(
            "absolute top-3 left-3 text-[10px] font-bold font-mono px-2 py-0.5 rounded-full",
            style.badge,
          )}>
            C{p.primaryCs}
          </span>
        </div>

        {/* 텍스트 */}
        <div className="p-4 flex-1 flex flex-col">
          <p className="text-xs tracking-[0.18em] text-muted-foreground/70 uppercase mb-1 font-mono">
            {p.engName}
          </p>
          <h3 className="text-base font-bold text-foreground mb-3 leading-snug">
            {p.name}
          </h3>
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-0.5 rounded-full bg-primary/8 text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* 가격 + 구매 버튼 (Link 밖 — 중첩 <a> 방지) */}
      <div className="flex items-center justify-between px-4 pb-4 pt-3 border-t border-border/40">
        <span className="text-base font-bold text-foreground">
          {p.price.toLocaleString()}
          <span className="text-sm font-normal text-muted-foreground ml-0.5">원</span>
        </span>
        <BuyButton product={p.slug} size="sm" />
      </div>
    </article>
  );
}

// ─── 출시예정 카드 ────────────────────────────────────────
function ComingSoonCard({ p }: { p: ComingSoonProduct }) {
  return (
    <Link
      to={`/products/${p.slug}`}
      className="flex flex-col bg-white border border-dashed border-border/60 rounded-2xl overflow-hidden opacity-80 hover:opacity-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="aspect-[4/3] bg-muted/30 flex flex-col items-center justify-center gap-3">
        <div className="w-14 h-14 rounded-full bg-muted/60 flex items-center justify-center">
          <span className="text-xl font-bold text-muted-foreground/30">?</span>
        </div>
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-muted-foreground font-mono">
          Coming Soon
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs tracking-[0.18em] text-muted-foreground/70 uppercase mb-1 font-mono">
          {p.engName}
        </p>
        <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
          {p.name}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
          {p.teaser}
        </p>
        <span className={cn(
          "inline-flex items-center justify-center gap-1.5 w-full rounded-lg",
          "border border-primary/30 text-primary text-xs font-semibold",
          "py-2 px-3",
        )}>
          <Bell size={11} />
          출시 알림 신청
        </span>
      </div>
    </Link>
  );
}

// ─── 코너스톤 그룹 ────────────────────────────────────────
function CornerGroup({ csId, children }: { csId: string; children: React.ReactNode }) {
  const cs    = cornerstones.find((c) => c.id === csId)!;
  const style = csStyle[csId];

  return (
    <div className="mb-10">
      {/* 인라인 섹션 헤더 */}
      <div className={cn("flex items-center gap-3 px-4 py-2.5 rounded-xl mb-4", style.strip)}>
        <span className={cn(
          "shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold font-mono",
          style.badge,
        )}>
          C{csId}
        </span>
        <div className="flex items-baseline gap-2 flex-1 min-w-0">
          <h2 className="text-sm font-bold text-foreground whitespace-nowrap">{cs.title}</h2>
          <span className="text-[10px] text-muted-foreground font-mono truncate hidden sm:block">{cs.subtitle}</span>
        </div>
        <span className={cn("w-2 h-2 rounded-full shrink-0", style.dot)} />
      </div>

      {/* 카드 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
}

// ─── 페이지 ──────────────────────────────────────────────
export default function Products() {
  useSEO({
    title: "바이오해킹 제품 — Wellness Architect",
    description: "4대 코너스톤을 기반으로 세포 수준에서 설계된 5종의 바이오해킹 솔루션.",
    url: "/products",
  });

  const byCs = (id: string) => catalog.filter((p) => p.primaryCs === id);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main style={{ paddingTop: "80px" }}>
        {/* 페이지 헤더 */}
        <div className="border-b border-border bg-muted/20 mb-8">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary font-semibold font-mono mb-3">
              Biohacking Solutions
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground font-heading leading-tight mb-3">
              바이오해킹 제품
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-nowrap hidden sm:block">
              세포 통신망, 면역, 장뇌축, 대사. 4대 코너스톤을 기반으로 설계된 바이오해킹 솔루션입니다.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed sm:hidden">
              세포 통신망, 면역, 장뇌축, 대사.<br />4대 코너스톤을 기반으로 설계된 바이오해킹 솔루션입니다.
            </p>

            {/* 코너스톤 범례 */}
            <div className="flex flex-wrap gap-2 mt-5">
              {cornerstones.map((cs) => (
                <span
                  key={cs.id}
                  className={cn(
                    "inline-flex items-center gap-1.5 text-xs font-semibold font-mono px-3 py-1 rounded-full",
                    csStyle[cs.id].badge,
                  )}
                >
                  <span className={cn("w-1.5 h-1.5 rounded-full", csStyle[cs.id].dot)} />
                  C{cs.id}
                  <span className="font-sans font-medium opacity-80">{cs.title}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 제품 그룹 */}
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16">
          <CornerGroup csId="01">
            {byCs("01").map((p) => <ProductCard key={p.slug} p={p} />)}
          </CornerGroup>

          <CornerGroup csId="02">
            {byCs("02").map((p) => <ProductCard key={p.slug} p={p} />)}
          </CornerGroup>

          <CornerGroup csId="03">
            {byCs("03").map((p) => <ProductCard key={p.slug} p={p} />)}
          </CornerGroup>

          <CornerGroup csId="04">
            {comingSoon.map((p) => <ComingSoonCard key={p.slug} p={p} />)}
          </CornerGroup>
        </div>
      </main>

      <Footer />
    </div>
  );
}
