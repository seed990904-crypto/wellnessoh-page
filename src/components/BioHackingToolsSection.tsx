import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import productSuperImmune from "@/assets/product-super-immune.jpg";
import productSuperGreens from "@/assets/product-super-greens.png";
import productSuperGClean from "@/assets/product-super-gclean.png";
import productSuperZyme from "@/assets/product-super-zyme.jpg";
import productBetterSalt from "@/assets/product-better-salt.jpg";

const products = [
  {
    image: productSuperImmune,
    name: "슈퍼이뮨 (SUPER IMMUNE)",
    subtitle: "세포의 대화가 시작되는 면역조절 서포트",
    bullets: ["세포 통신망(당사슬) 리셋", "에이스매넌 및 초유 함유"],
    detailPath: "/products/super-immune",
  },
  {
    image: productSuperGreens,
    name: "슈퍼그린 (SuperGreens)",
    subtitle: "식물의 혈액으로 마시는 초록빛 청춘 디톡스",
    bullets: ["체내 세포 디톡스 및 항산화", "유기농 엽록소 블렌드"],
    detailPath: "/products/super-greens",
  },
  {
    image: productSuperGClean,
    name: "슈퍼지클린 (SUPER G.CLEAN)",
    subtitle: "2시간의 마법, 장 상태 개선 클렌징 솔루션",
    bullets: ["900일 자연배양 생효소", "노폐물 가수분해 및 배출"],
    detailPath: "/products/super-gclean",
  },
  {
    image: productSuperZyme,
    name: "슈퍼자임 (SUPER ZYME)",
    subtitle: "오토파지를 깨우는 마이크로바이옴 발효 솔루션",
    bullets: ["간헐적 단식 효율 극대화", "17가지 천연 초본 식단 솔루션"],
    detailPath: "/products/super-zyme",
  },
  {
    image: productBetterSalt,
    name: "베러솔트 (Better Salt)",
    subtitle: "0.9%의 신비, 청춘을 위한 완벽한 밸런스",
    bullets: ["1200도 열처리 40종 활성 미네랄", "유해물질 0% 알칼리 소금"],
    detailPath: "/products/better-salt",
  },
];

const BioHackingToolsSection = () => (
  <section id="biohacking-tools" className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <p className="font-mono-label mb-3">BIOHACKING TOOLS</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          바이오해킹 툴 [BioHacking Tools]
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          웰니스 아키텍트가 4대 기둥의 기준을 가지고 설계한 완벽한 생체 복원 아키텍처입니다.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-6 max-w-[calc(66.666%+0.75rem)] mx-auto">
          {products.slice(3).map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ProductCard = ({ product }: { product: (typeof products)[number] }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-muted/50 rounded-xl border p-6 flex flex-col">
      <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-accent mb-5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
      <p className="text-xs text-muted-foreground mb-4">{product.subtitle}</p>

      <ul className="space-y-2 mb-6 flex-1">
        {product.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            {b}
          </li>
        ))}
      </ul>

      <Button
        variant="outline"
        size="sm"
        className="self-start rounded-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        onClick={() => product.detailPath && navigate(product.detailPath)}
      >
        자세히 보기
      </Button>
    </div>
  );
};

export default BioHackingToolsSection;
