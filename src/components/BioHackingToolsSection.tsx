import { Link } from "react-router-dom";
import { ArrowRight, Gift, ShoppingCart } from "lucide-react";
import productSuperImmune from "@/assets/product-super-immune.jpg";
import productSuperGreens from "@/assets/product-super-greens.png";
import productSuperZyme   from "@/assets/product-super-zyme.jpg";
import productBetterSalt  from "@/assets/product-better-salt.jpg";
import productSuperGClean from "@/assets/product-super-gclean.png";
import { MALL_BASE, PRODUCT_NO } from "@/config/mall";

function cafe24Url(slug: string) {
  const no = PRODUCT_NO[slug as keyof typeof PRODUCT_NO];
  if (!no || no === "COMING_SOON") return null;
  return `${MALL_BASE}/product/detail.html?product_no=${no}`;
}

interface Product {
  image: string;
  name: string;
  engName: string;
  bullets: string[];
  price: number;
  slug: string;
  path: string;
  badge?: string;
  badgeColor?: string;
  imgPos?: string;
}

const products: Product[] = [
  {
    image: productSuperImmune,
    name: "슈퍼이뮨 프리미어",
    engName: "SUPER IMMUNE PREMIER",
    bullets: ["2가지 원료 · 5가지 기능성", "에이슈레브넌 SUPERVERA7®", "구아바잎 천연 아연 141%"],
    price: 160000,
    slug: "super-immune",
    path: "/products/super-immune",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
    imgPos: "object-[center_20%]",
  },
  {
    image: productSuperZyme,
    name: "슈퍼자임",
    engName: "SUPER ZYME",
    bullets: ["오토파지 촉진", "17가지 천연 초본 발효", "간헐적 단식 효율 극대화"],
    price: 125000,
    slug: "super-zyme",
    path: "/products/super-zyme",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
  },
  {
    image: productBetterSalt,
    name: "베러솔트",
    engName: "BETTER SALT",
    bullets: ["40종 활성 미네랄", "1200°C 열처리 · 중금속 0%", "0.9% 세포 항상성"],
    price: 88000,
    slug: "better-salt",
    path: "/products/better-salt",
    badge: "NEW",
    badgeColor: "bg-emerald-500",
  },
  {
    image: productSuperGClean,
    name: "슈퍼지클린",
    engName: "SUPER G.CLEAN",
    bullets: ["900일 자연배양 발효 효소", "장 환경 리셋", "독소 흡착 배출"],
    price: 27000,
    slug: "super-gclean",
    path: "/products/super-gclean",
    badge: "BEST",
    badgeColor: "bg-amber-500",
  },
  {
    image: productSuperGreens,
    name: "슈퍼그린스",
    engName: "SUPER GREENS",
    bullets: ["유기농 엽록소 블렌드", "세포 항산화", "23종 슈퍼푸드 복합"],
    price: 150000,
    slug: "super-greens",
    path: "/products/super-greens",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const buyUrl = cafe24Url(product.slug);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col">

      {/* 이미지 — 세로형 2:3 */}
      <Link to={product.path} className="block relative overflow-hidden" style={{ aspectRatio: "2/3" }}>
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06] ${product.imgPos ?? "object-center"}`}
          loading="lazy"
        />
        {/* 그라디언트 — 하단 텍스트 가독성 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* 뱃지 */}
        {product.badge && (
          <span className={`absolute top-3 left-3 ${product.badgeColor ?? "bg-zinc-800"} text-white text-[10px] font-black px-2.5 py-1 rounded-full tracking-widest`}>
            {product.badge}
          </span>
        )}
      </Link>

      {/* 카드 본문 */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex-1">
          <p className="text-[9px] font-mono font-bold tracking-[0.2em] text-zinc-400 mb-1 uppercase">
            {product.engName}
          </p>
          <h3 className="font-black text-zinc-900 text-[17px] leading-tight mb-3">
            {product.name}
          </h3>
          <ul className="space-y-1 mb-4">
            {product.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-[12px] text-zinc-500 leading-relaxed">
                <span className="text-zinc-300 mt-0.5 shrink-0">→</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* 가격 + 버튼 */}
        <div className="border-t border-zinc-100 pt-4 flex items-center justify-between gap-2">
          <span className="font-black text-zinc-900 text-base">
            {product.price.toLocaleString()}원
          </span>

          <div className="flex items-center gap-2">
            <Link
              to={product.path}
              className="text-[11px] font-semibold text-zinc-400 hover:text-zinc-700 flex items-center gap-1 transition-colors"
            >
              상세 <ArrowRight className="w-3 h-3" />
            </Link>
            {buyUrl ? (
              <a
                href={buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-700 text-white text-[11px] font-bold px-3.5 py-2 rounded-full transition-colors"
              >
                <ShoppingCart className="w-3 h-3" />
                구매
              </a>
            ) : (
              <span className="inline-flex items-center text-[10px] font-bold bg-zinc-100 text-zinc-400 px-3 py-1.5 rounded-full">
                출시 예정
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const BioHackingToolsSection = () => (
  <section id="biohacking-tools" className="py-16 md:py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6 md:px-12">

      {/* 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <p className="text-[10px] font-mono tracking-[0.25em] text-emerald-600 uppercase mb-3">
            Biohacking Tools
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900 leading-tight tracking-tight">
            바이오해킹 솔루션
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            장 정화 → 미네랄 복원 → 면역 활성화 → 오토파지
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
          <span className="text-[11px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-full">
            🆕 2026.11 신제품 3종 출시
          </span>
          <Link
            to="/products"
            className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors"
          >
            전체 보기 <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 제품 그리드 — 세로형 카드 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
        {products.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>

      {/* 하단 혜택 띠 */}
      <div className="mt-10 rounded-2xl bg-zinc-900 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
        <div>
          <p className="text-white font-black text-lg md:text-xl leading-tight">
            정기구독으로 최대 25% 절약하세요
          </p>
          <p className="text-zinc-400 text-sm mt-1">
            1·3·6개월 플랜 자유 선택 · 언제든 해지 가능
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <a
            href={`${MALL_BASE}/member/join.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
          >
            <Gift className="w-4 h-4" />
            회원가입 · 첫 구매 10%
          </a>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:bg-white/10 font-semibold text-sm px-6 py-3 rounded-full transition-colors"
          >
            제품 보기
          </Link>
        </div>
      </div>

    </div>
  </section>
);

export default BioHackingToolsSection;
