import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import productSuperImmune from "@/assets/product-super-immune.jpg";
import productSuperGreens from "@/assets/product-super-greens.png";
import productSuperGClean from "@/assets/product-super-gclean.png";
import productSuperZyme from "@/assets/product-super-zyme.jpg";
import productBetterSalt from "@/assets/product-better-salt.jpg";

const csColors = {
  C1: { dot: "bg-blue-500",   badge: "bg-blue-50 text-blue-700",   border: "border-blue-200" },
  C2: { dot: "bg-teal-500",   badge: "bg-teal-50 text-teal-700",   border: "border-teal-200" },
  C3: { dot: "bg-violet-500", badge: "bg-violet-50 text-violet-700", border: "border-violet-200" },
  C4: { dot: "bg-amber-500",  badge: "bg-amber-50 text-amber-700",  border: "border-amber-200" },
} as const;

type CsKey = keyof typeof csColors;

interface Product {
  image: string;
  name: string;
  engName: string;
  subtitle: string;
  price: number;
  cornerstones: CsKey[];
  path: string;
  isPhoto?: boolean;
}

const products: Product[] = [
  {
    image: productSuperImmune,
    name: "슈퍼이뮨",
    engName: "SUPER IMMUNE",
    subtitle: "세포 통신망 리셋 · 면역 조절 서포트",
    price: 160000,
    cornerstones: ["C1", "C2"],
    path: "/products/super-immune",
    isPhoto: true,
  },
  {
    image: productSuperGreens,
    name: "슈퍼그린",
    engName: "SUPER GREENS",
    subtitle: "유기농 엽록소 블렌드 · 세포 디톡스",
    price: 150000,
    cornerstones: ["C1", "C3"],
    path: "/products/super-greens",
    isPhoto: true,
  },
  {
    image: productSuperZyme,
    name: "슈퍼자임",
    engName: "SUPER ZYME",
    subtitle: "오토파지 촉진 · 장내 마이크로바이옴",
    price: 75000,
    cornerstones: ["C3", "C4"],
    path: "/products/super-zyme",
    isPhoto: true,
  },
  {
    image: productSuperGClean,
    name: "슈퍼지클린",
    engName: "SUPER G.CLEAN",
    subtitle: "900일 자연배양 생효소 · 장 상태 개선",
    price: 27000,
    cornerstones: ["C3", "C4"],
    path: "/products/super-gclean",
    isPhoto: true,
  },
  {
    image: productBetterSalt,
    name: "베러솔트",
    engName: "BETTER SALT",
    subtitle: "40종 활성 미네랄 · 알칼리 소금",
    price: 88000,
    cornerstones: ["C2", "C4"],
    path: "/products/better-salt",
    isPhoto: true,
  },
];

const legend = [
  { cs: "C1" as CsKey, name: "통신과 방어 · 면역" },
  { cs: "C2" as CsKey, name: "보존과 영양 · 항산화" },
  { cs: "C3" as CsKey, name: "제어와 연결 · 장뇌축" },
  { cs: "C4" as CsKey, name: "정화와 재생 · 대사" },
];

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(product.path)}
      className="group bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 cursor-pointer flex flex-col"
    >
      {/* 이미지 */}
      <div className="aspect-[4/3] bg-muted/20 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
            product.isPhoto
              ? "object-cover"
              : "object-contain p-4"
          }`}
          loading="lazy"
        />
      </div>

      {/* 정보 */}
      <div className="p-5 flex flex-col flex-1">
        {/* 코너스톤 배지 */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.cornerstones.map((cs) => (
            <span
              key={cs}
              className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold px-2 py-1 rounded-md ${csColors[cs].badge}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${csColors[cs].dot}`} />
              {cs}
            </span>
          ))}
        </div>

        <h3 className="font-bold text-foreground text-lg leading-snug mb-0.5">
          {product.name}
        </h3>
        <p className="text-[11px] font-mono text-muted-foreground/50 mb-2 tracking-wide">
          {product.engName}
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-5 flex-1">
          {product.subtitle}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border/40">
          <span className="text-base font-bold text-foreground">
            {product.price.toLocaleString()}원
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
            자세히 보기 <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};

const BioHackingToolsSection = () => (
  <section id="biohacking-tools" className="py-16 md:py-24 bg-muted/25">
    <div className="max-w-6xl mx-auto px-6 md:px-12">

      {/* 헤더 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-[11px] font-mono tracking-[0.2em] text-primary uppercase mb-3">
            Biohacking Tools
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug">
            바이오해킹 제품
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed md:text-right">
          4대 코너스톤으로 설계된<br className="hidden md:block" />
          5가지 생체 복원 솔루션
        </p>
      </div>

      {/* 코너스톤 범례 */}
      <div className="flex flex-wrap gap-2 mb-10">
        {legend.map(({ cs, name }) => (
          <span
            key={cs}
            className={`inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full ${csColors[cs].badge}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${csColors[cs].dot}`} />
            <span className="font-mono font-bold">{cs}</span>
            <span className="opacity-70">· {name}</span>
          </span>
        ))}
      </div>

      {/* 제품 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}

        {/* Coming Soon */}
        <div className="rounded-2xl border border-dashed border-border/50 bg-muted/20 flex flex-col items-center justify-center p-10 text-center gap-4 min-h-[260px]">
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-muted text-muted-foreground tracking-widest">
            COMING SOON
          </span>
          <div className="space-y-1.5">
            <p className="font-bold text-foreground text-sm">슈퍼롱제비티</p>
            <p className="font-bold text-foreground text-sm">코어루틴</p>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            출시 예정
          </p>
        </div>
      </div>

    </div>
  </section>
);

export default BioHackingToolsSection;
