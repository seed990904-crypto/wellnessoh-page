import { Button } from "@/components/ui/button";
import { Droplets, Shield, FlaskConical } from "lucide-react";

const products = [
  {
    icon: FlaskConical,
    name: "슈퍼지클린",
    eng: "Super G.Clean",
    desc: "장 상태 개선 및 해독 솔루션",
  },
  {
    icon: Shield,
    name: "슈퍼이뮨",
    eng: "Super Immune",
    desc: "세포 통신망 복구 및 면역 증진",
  },
  {
    icon: Droplets,
    name: "베러솔트",
    eng: "Better Salt",
    desc: "0.9% 생명의 기초 밸런스",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="text-center mb-14">
        <p className="font-mono-label mb-3">WELLNESS ARCHITECTURE</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          아키텍트가 설계한 웰니스 도구들
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {products.map((p) => (
          <div
            key={p.eng}
            className="bg-card rounded-xl p-6 border text-center hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
              <p.icon size={24} className="text-accent-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{p.name}</h3>
            <p className="font-mono text-xs text-primary mb-2">{p.eng}</p>
            <p className="text-sm text-muted-foreground mb-6 flex-1">{p.desc}</p>
            <Button variant="outline" size="sm" className="mx-auto rounded-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              자세히 보기
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
