import { Link } from "react-router-dom";
import { RefreshCw, Zap } from "lucide-react";

const OfferSection = () => {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-mono-label mb-3">THE OFFER</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            당신의 설계 방식을 선택하세요
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-md mx-auto">
            처음이라면 30일 리셋으로 시작하고,
            결과가 나오면 유지보수 계약으로 전환하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* 단품 구매 */}
          <div className="rounded-2xl border border-border bg-background p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <Zap className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                  One-Time Reset
                </p>
                <p className="font-bold text-foreground">단품 구매</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              30일 리셋 키트로 시작합니다. 첫 구매 고객을 위한 진입 경로로,
              몸의 변화를 직접 경험해보세요.
            </p>

            <ul className="space-y-2 mb-8 text-sm text-foreground">
              {["30일 1회 설계 경험", "핵심 제품 단품 선택", "무료 배송"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/products"
              className="mt-auto inline-flex items-center justify-center rounded-full border border-border text-foreground text-sm font-semibold px-8 py-3.5 hover:bg-muted transition-all duration-200"
            >
              제품 보기 →
            </Link>
          </div>

          {/* 정기구독 */}
          <div className="rounded-2xl border-2 border-primary bg-primary/5 p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 tracking-wide">
              추천
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-mono text-primary/70 tracking-widest uppercase">
                  Maintenance Plan
                </p>
                <p className="font-bold text-foreground">정기구독</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              매달 자동 배송으로 설계된 루틴을 유지합니다.
              건강 관리를 "유지보수 계약"으로 프레이밍하세요.
            </p>
            <p className="text-primary font-bold text-sm mb-6">10~25% 할인 적용</p>

            <ul className="space-y-2 mb-8 text-sm text-foreground">
              {["매달 자동 배송", "10~25% 정기구독 할인", "언제든 변경·해지 가능", "무료 배송"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/youth-reset"
              className="mt-auto inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold px-8 py-3.5 hover:bg-primary/90 transition-all duration-200"
            >
              청춘리셋 패키지 보기 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
