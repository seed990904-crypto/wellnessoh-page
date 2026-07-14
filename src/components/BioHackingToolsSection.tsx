import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import productSuperImmune from "@/assets/product-super-immune.jpg";
import productSuperGreens from "@/assets/product-super-greens.png";
import productSuperGClean from "@/assets/product-super-gclean.png";
import productSuperZyme from "@/assets/product-super-zyme.jpg";
import productBetterSalt from "@/assets/product-better-salt.jpg";

type Colors = {
  accent: string;
  badgeBg: string;
  badgeText: string;
  dot: string;
  label: string;
  cardBar: string;
};

type Product = {
  image: string;
  name: string;
  engName: string;
  subtitle: string;
  bullets: string[];
  detailPath: string;
};

type Cornerstone = {
  code: string;
  name: string;
  sub: string;
  colors: Colors;
  products: Product[];
  comingSoon?: string;
};

const cornerstones: Cornerstone[] = [
  {
    code: "C1",
    name: "통신과 방어",
    sub: "면역",
    colors: {
      accent: "bg-blue-500",
      badgeBg: "bg-blue-50",
      badgeText: "text-blue-700",
      dot: "bg-blue-500",
      label: "text-blue-600",
      cardBar: "bg-blue-500",
    },
    products: [
      {
        image: productSuperImmune,
        name: "슈퍼이뮨",
        engName: "SUPER IMMUNE",
        subtitle: "세포의 대화가 시작되는 면역조절 서포트",
        bullets: ["세포 통신망(당사슬) 리셋", "에이스매넌 및 초유 함유"],
        detailPath: "/products/super-immune",
      },
    ],
  },
  {
    code: "C2",
    name: "보존과 영양",
    sub: "항산화",
    colors: {
      accent: "bg-teal-500",
      badgeBg: "bg-teal-50",
      badgeText: "text-teal-700",
      dot: "bg-teal-500",
      label: "text-teal-600",
      cardBar: "bg-teal-500",
    },
    products: [
      {
        image: productSuperGreens,
        name: "슈퍼그린",
        engName: "SUPER GREENS",
        subtitle: "식물의 혈액으로 마시는 초록빛 청춘 디톡스",
        bullets: ["체내 세포 디톡스 및 항산화", "유기농 엽록소 블렌드"],
        detailPath: "/products/super-greens",
      },
      {
        image: productBetterSalt,
        name: "베러솔트",
        engName: "BETTER SALT",
        subtitle: "0.9%의 신비, 청춘을 위한 완벽한 밸런스",
        bullets: ["1200도 열처리 40종 활성 미네랄", "유해물질 0% 알칼리 소금"],
        detailPath: "/products/better-salt",
      },
    ],
  },
  {
    code: "C3",
    name: "제어와 연결",
    sub: "장뇌축",
    colors: {
      accent: "bg-violet-500",
      badgeBg: "bg-violet-50",
      badgeText: "text-violet-700",
      dot: "bg-violet-500",
      label: "text-violet-600",
      cardBar: "bg-violet-500",
    },
    products: [
      {
        image: productSuperZyme,
        name: "슈퍼자임",
        engName: "SUPER ZYME",
        subtitle: "오토파지를 깨우는 마이크로바이옴 발효 솔루션",
        bullets: ["간헐적 단식 효율 극대화", "17가지 천연 초본 식단 솔루션"],
        detailPath: "/products/super-zyme",
      },
      {
        image: productSuperGClean,
        name: "슈퍼지클린",
        engName: "SUPER G.CLEAN",
        subtitle: "2시간의 마법, 장 상태 개선 클렌징 솔루션",
        bullets: ["900일 자연배양 생효소", "노폐물 가수분해 및 배출"],
        detailPath: "/products/super-gclean",
      },
    ],
  },
  {
    code: "C4",
    name: "정화와 재생",
    sub: "대사",
    colors: {
      accent: "bg-amber-500",
      badgeBg: "bg-amber-50",
      badgeText: "text-amber-700",
      dot: "bg-amber-500",
      label: "text-amber-600",
      cardBar: "bg-amber-500",
    },
    products: [],
    comingSoon: "코어루틴 1.0 출시 예정",
  },
];

const BioHackingToolsSection = () => (
  <section id="biohacking-tools" className="py-24 bg-background">
    <div className="container max-w-6xl">

      {/* 섹션 헤더 */}
      <div className="text-center mb-14">
        <p className="font-mono-label mb-3">BIOHACKING TOOLS</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          바이오해킹 툴
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          웰니스 아키텍트가 <span className="font-semibold text-foreground">4대 코너스톤</span> 기준으로 설계한 생체 복원 아키텍처입니다.
        </p>
      </div>

      {/* 코너스톤 범례 */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {cornerstones.map((cs) => (
          <div
            key={cs.code}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium ${cs.colors.badgeBg} ${cs.colors.badgeText} border-current/20`}
          >
            <span className={`w-2 h-2 rounded-full shrink-0 ${cs.colors.dot}`} />
            <span className="font-mono font-semibold">{cs.code}</span>
            <span className="text-current/60">·</span>
            <span>{cs.name}</span>
            <span className="text-current/50">({cs.sub})</span>
          </div>
        ))}
      </div>

      {/* 코너스톤별 제품 그룹 */}
      <div className="space-y-14">
        {cornerstones.map((cs) => (
          <div key={cs.code}>
            {/* 코너스톤 라벨 행 */}
            <div className="flex items-center gap-3 mb-6">
              <span className={`w-1 h-8 rounded-full shrink-0 ${cs.colors.accent}`} />
              <span className={`font-mono text-xs font-bold tracking-widest uppercase ${cs.colors.label}`}>
                {cs.code}
              </span>
              <span className="text-sm font-semibold text-foreground">{cs.name}</span>
              <span className="text-xs text-muted-foreground">· {cs.sub}</span>
              <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${cs.colors.badgeBg} ${cs.colors.badgeText} font-medium`}>
                {cs.products.length}종
              </span>
            </div>

            {/* 제품 카드 or 출시 예정 */}
            {cs.products.length === 0 ? (
              <div className={`rounded-xl border border-dashed p-8 flex flex-col items-center justify-center text-center gap-3 ${cs.colors.badgeBg}`}>
                <span className={`text-xs font-mono font-bold tracking-widest ${cs.colors.label}`}>{cs.code}</span>
                <p className={`text-sm font-semibold ${cs.colors.badgeText}`}>{cs.comingSoon}</p>
                <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                  {cs.name} 코너스톤의 제품이 곧 출시됩니다.
                </p>
              </div>
            ) : (
              <div
                className={`grid gap-5 ${
                  cs.products.length === 1
                    ? "sm:grid-cols-1 max-w-[480px]"
                    : "sm:grid-cols-2"
                }`}
              >
                {cs.products.map((p) => (
                  <ProductCard key={p.name} product={p} colors={cs.colors} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProductCard = ({
  product,
  colors,
}: {
  product: Product;
  colors: Colors;
}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-xl border overflow-hidden flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      {/* 상단 컬러 바 */}
      <div className={`h-1 w-full shrink-0 ${colors.cardBar}`} />

      <div className="p-5 flex flex-col flex-1">
        {/* 제품 이미지 */}
        <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-muted/30 mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* 이름 */}
        <div className="mb-1">
          <span className={`text-xs font-mono font-medium ${colors.label}`}>
            {product.engName}
          </span>
        </div>
        <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
        <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{product.subtitle}</p>

        {/* 핵심 특징 */}
        <ul className="space-y-2 mb-5 flex-1">
          {product.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className={`mt-1 h-1.5 w-1.5 rounded-full shrink-0 ${colors.dot}`} />
              {b}
            </li>
          ))}
        </ul>

        <Button
          variant="outline"
          size="sm"
          className={`self-start rounded-lg text-xs border-current/30 ${colors.badgeText} hover:opacity-80`}
          style={{ backgroundColor: "transparent" }}
          onClick={() => navigate(product.detailPath)}
        >
          자세히 보기 →
        </Button>
      </div>
    </div>
  );
};

export default BioHackingToolsSection;
