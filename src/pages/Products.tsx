import { Link } from "react-router-dom";
import { Bell } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BuyButton } from "@/components/BuyButton";
import { useSEO } from "@/hooks/useSEO";
import { cn } from "@/lib/utils";
import type { ProductSlug } from "@/config/mall";

import imgImmune  from "@/assets/product-super-immune.jpg";
import imgGreens  from "@/assets/product-super-greens.png";
import imgSalt    from "@/assets/product-better-salt.jpg";
import imgGclean  from "@/assets/product-super-gclean.png";
import imgZyme    from "@/assets/product-super-zyme.jpg";

// ─── 코너스톤 스타일 ──────────────────────────────────────
const CS_ALL = ["01", "02", "03", "04"] as const;
type CsId = typeof CS_ALL[number];

const csStyle: Record<CsId, { badge: string; dot: string; label: string }> = {
  "01": { badge: "bg-blue-50 text-blue-700",      dot: "bg-blue-400",    label: "통신과 방어" },
  "02": { badge: "bg-emerald-50 text-emerald-700", dot: "bg-emerald-400", label: "보존과 영양" },
  "03": { badge: "bg-amber-50 text-amber-700",     dot: "bg-amber-400",   label: "제어와 연결" },
  "04": { badge: "bg-violet-50 text-violet-700",   dot: "bg-violet-400",  label: "정화와 재생" },
};

// ─── 타입 ────────────────────────────────────────────────
interface CatalogProduct {
  slug:        ProductSlug;
  name:        string;
  engName:     string;
  price:       number;
  subtitle:    string;
  tags:        string[];
  image:       string;
  cornerstones: CsId[];
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
    price: 160000,
    subtitle: "세포 통신망 리셋 · 면역 조절 서포트",
    tags: ["에이스매넌 & 초유", "면역 조절"],
    cornerstones: ["01", "02"],
    image: imgImmune,
  },
  {
    slug: "super-greens", name: "슈퍼그린", engName: "SUPER GREENS",
    price: 150000,
    subtitle: "유기농 엽록소 블렌드 · 세포 디톡스",
    tags: ["유기농 엽록소", "항산화"],
    cornerstones: ["01", "03"],
    image: imgGreens,
  },
  {
    slug: "better-salt", name: "베러솔트", engName: "BETTER SALT",
    price: 88000,
    subtitle: "40종 활성 미네랄 · 알칼리 소금",
    tags: ["40종 미네랄", "1200도 열처리"],
    cornerstones: ["02", "04"],
    image: imgSalt,
  },
  {
    slug: "super-gclean", name: "슈퍼지클린", engName: "SUPER G.CLEAN",
    price: 27000,
    subtitle: "900일 자연배양 생효소 · 장 상태 개선",
    tags: ["생효소", "장 환경"],
    cornerstones: ["03", "04"],
    image: imgGclean,
  },
  {
    slug: "super-zyme", name: "슈퍼자임", engName: "SUPER ZYME",
    price: 75000,
    subtitle: "오토파지 촉진 · 간헐적 단식 효율",
    tags: ["오토파지", "17가지 초본"],
    cornerstones: ["03", "04"],
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

// ─── 코너스톤 체크 표시 ───────────────────────────────────
function CsBadges({ active }: { active: CsId[] }) {
  return (
    <div className="flex gap-1.5 mb-3">
      {CS_ALL.map((id) => {
        const on = active.includes(id);
        return (
          <span
            key={id}
            className={cn(
              "inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md transition-all",
              on ? csStyle[id].badge : "bg-muted/30 text-muted-foreground/30",
            )}
          >
            {on && <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", csStyle[id].dot)} />}
            C{id}
          </span>
        );
      })}
    </div>
  );
}

// ─── 제품 카드 ────────────────────────────────────────────
function ProductCard({ p }: { p: CatalogProduct }) {
  return (
    <article className="flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      <Link to={`/products/${p.slug}`} className="flex flex-col flex-1 group">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <CsBadges active={p.cornerstones} />
          <p className="text-[10px] tracking-[0.18em] text-muted-foreground/60 uppercase mb-1 font-mono">
            {p.engName}
          </p>
          <h3 className="text-base font-bold text-foreground mb-1 leading-snug">
            {p.name}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">
            {p.subtitle}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-primary/8 text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>

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
      className="flex flex-col bg-white border border-dashed border-border/60 rounded-2xl overflow-hidden opacity-75 hover:opacity-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="aspect-[4/3] bg-muted/20 flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center">
          <span className="text-lg font-bold text-muted-foreground/30">?</span>
        </div>
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-muted-foreground font-mono">
          Coming Soon
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-[10px] tracking-[0.18em] text-muted-foreground/60 uppercase mb-1 font-mono">
          {p.engName}
        </p>
        <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
          {p.name}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
          {p.teaser}
        </p>
        <span className="inline-flex items-center justify-center gap-1.5 w-full rounded-lg border border-primary/30 text-primary text-xs font-semibold py-2 px-3">
          <Bell size={11} />
          출시 알림 신청
        </span>
      </div>
    </Link>
  );
}

// ─── 페이지 ──────────────────────────────────────────────
export default function Products() {
  useSEO({
    title: "바이오해킹 제품 — Wellness Architect",
    description: "4대 코너스톤을 기반으로 세포 수준에서 설계된 5종의 바이오해킹 솔루션.",
    url: "/products",
  });

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
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-3">
              바이오해킹 제품
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              세포 통신망, 면역, 장뇌축, 대사. 4대 코너스톤을 기반으로 설계된 바이오해킹 솔루션입니다.
            </p>

            {/* 코너스톤 범례 */}
            <div className="flex flex-wrap gap-2 mt-5">
              {CS_ALL.map((id) => (
                <span
                  key={id}
                  className={cn(
                    "inline-flex items-center gap-1.5 text-xs font-semibold font-mono px-3 py-1 rounded-full",
                    csStyle[id].badge,
                  )}
                >
                  <span className={cn("w-1.5 h-1.5 rounded-full", csStyle[id].dot)} />
                  C{id}
                  <span className="font-sans font-medium opacity-80">{csStyle[id].label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 제품 그리드 */}
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {catalog.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
            {comingSoon.map((p) => (
              <ComingSoonCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
