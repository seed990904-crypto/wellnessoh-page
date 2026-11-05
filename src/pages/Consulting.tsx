import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";

const KAKAO_URL = "http://pf.kakao.com/_VxdWxhG";

const packages = [
  {
    id: "starter",
    tier: "STARTER",
    name: "기초 리셋",
    tagline: "처음 시작하는 분께",
    price: "27,000원",
    priceNote: "슈퍼지클린 1개월분",
    highlight: false,
    products: ["슈퍼지클린 (장 환경 정화)"],
    desc: "장 환경을 정화하는 것이 모든 변화의 출발점입니다. 가장 낮은 진입 비용으로 시작해보세요.",
    cta: "카카오로 상담 후 시작",
  },
  {
    id: "reset30",
    tier: "RECOMMENDED",
    name: "30일 집중 리셋",
    tagline: "본격적인 변화를 원하는 분께",
    price: "240,000원",
    priceNote: "3종 제품 세트",
    highlight: true,
    products: [
      "슈퍼지클린 (장 환경 정화)",
      "베러솔트 (40종 미네랄 균형)",
      "슈퍼자임 (소화력·발효 지원)",
    ],
    desc: "장을 비우고, 미네랄을 채우고, 소화력을 회복합니다. 한 달 안에 몸의 기초가 달라집니다.",
    cta: "카카오로 상담 후 시작",
  },
  {
    id: "youth6w",
    tier: "COMPLETE",
    name: "청춘리셋 6주 풀세트",
    tagline: "완전한 리셋을 원하는 분께",
    price: "550,000원",
    priceNote: "5종 전체 세트",
    highlight: false,
    products: [
      "슈퍼지클린 (비우기)",
      "베러솔트 (미네랄 균형)",
      "슈퍼그린 (항산화·엽록소)",
      "슈퍼이뮨 프리미어 (면역 기반)",
      "슈퍼자임 (소화·발효)",
    ],
    desc: "오승우 대표가 설계한 6주 프로그램의 완전한 포뮬러입니다. 비우고, 채우고, 습관이 됩니다.",
    cta: "카카오로 상담 후 시작",
  },
];

const steps = [
  {
    num: "01",
    label: "무료 상담",
    desc: "카카오채널로 연결합니다. 현재 건강 상태와 목표를 말씀해 주세요.",
  },
  {
    num: "02",
    label: "맞춤 설계",
    desc: "오승우 대표가 직접 당신에게 맞는 제품 프로토콜을 설계합니다.",
  },
  {
    num: "03",
    label: "제품 시작",
    desc: "설계된 순서대로 제품을 시작합니다. 카페24 쇼핑몰에서 구매 가능합니다.",
  },
  {
    num: "04",
    label: "지속 관리",
    desc: "정기구독으로 전환하면 10~25% 할인과 함께 오승우 대표의 지속 피드백을 받습니다.",
  },
];

const Consulting = () => {
  useSEO({
    url: "/consulting",
    title: "청춘리셋 설계 상담 | waoh.life",
    description:
      "웰니스 아키텍트 오승우 대표와 무료 1:1 상담 후 맞춤 청춘리셋 제품 프로토콜을 설계받으세요.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Hero ── */}
      <section className="bg-foreground pt-36 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/40 text-[10px] font-mono tracking-[0.3em] uppercase mb-6">
            WELLNESS CONSULTING · waoh.life
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6">
            당신에게 맞는<br />
            설계를 받으세요.
          </h1>
          <p className="text-white/50 text-base leading-relaxed max-w-md mb-10">
            카카오채널로 연결하면 오승우 대표가 직접 현재 상태를 듣고,
            가장 적합한 제품 프로토콜을 설계해드립니다.
          </p>

          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#FEE500] text-[#3A1D1D] text-sm font-bold px-8 py-4 hover:bg-[#FEE500]/90 transition-all duration-200 hover:scale-[1.02] active:scale-100"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 1.5C4.86 1.5 1.5 4.14 1.5 7.38c0 2.07 1.26 3.9 3.18 5.01l-.81 3.03 3.3-2.16c.6.09 1.2.15 1.83.15 4.14 0 7.5-2.64 7.5-5.88S13.14 1.5 9 1.5z"
                fill="#3A1D1D"
              />
            </svg>
            무료 상담 신청하기
          </a>

          {/* 신뢰 지표 */}
          <div className="flex flex-wrap gap-8 mt-16 pt-12 border-t border-white/10">
            {[
              { num: "19년", label: "임상 경험" },
              { num: "1만 명+", label: "설계 케이스" },
              { num: "S서울병원", label: "협업" },
            ].map((b) => (
              <div key={b.label}>
                <p className="text-white font-bold text-2xl leading-none mb-1">{b.num}</p>
                <p className="text-white/40 text-xs tracking-wide">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 진행 흐름 ── */}
      <section className="py-20 px-6 md:px-12 bg-muted/20 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono-label mb-10">HOW IT WORKS</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-full w-full h-px bg-border -translate-y-1/2 z-0" style={{ width: "calc(100% - 2rem)" }} />
                )}
                <p className="text-4xl font-bold text-foreground/10 mb-3 leading-none">{s.num}</p>
                <p className="font-semibold text-foreground text-sm mb-2">{s.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 제품 패키지 ── */}
      <section className="py-20 px-6 md:px-12 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="font-mono-label mb-3">PRODUCT PACKAGES</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              상담 후 많이 시작하는 패키지
            </h2>
            <p className="mt-3 text-muted-foreground text-sm max-w-md">
              무료 상담에서 현재 상태를 공유하시면 아래 패키지 중 가장 적합한 조합을 추천해드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl flex flex-col ${
                  pkg.highlight
                    ? "bg-foreground text-white p-8"
                    : "border border-border bg-background p-8"
                }`}
              >
                <div className="mb-6">
                  <span
                    className={`inline-block text-[9px] font-bold tracking-[0.2em] rounded-full px-2.5 py-1 mb-4 ${
                      pkg.highlight
                        ? "bg-white/10 text-white/60"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {pkg.tier}
                  </span>
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      pkg.highlight ? "text-white" : "text-foreground"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-xs mb-5 ${
                      pkg.highlight ? "text-white/40" : "text-muted-foreground"
                    }`}
                  >
                    {pkg.tagline}
                  </p>
                  <p
                    className={`text-3xl font-bold tracking-tight ${
                      pkg.highlight ? "text-white" : "text-foreground"
                    }`}
                  >
                    {pkg.price}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      pkg.highlight ? "text-white/40" : "text-muted-foreground"
                    }`}
                  >
                    {pkg.priceNote}
                  </p>
                </div>

                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    pkg.highlight ? "text-white/60" : "text-muted-foreground"
                  }`}
                >
                  {pkg.desc}
                </p>

                <ul className="space-y-2 mb-8 flex-1">
                  {pkg.products.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <span
                        className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${
                          pkg.highlight ? "bg-white/40" : "bg-foreground/25"
                        }`}
                      />
                      <span
                        className={
                          pkg.highlight ? "text-white/70" : "text-foreground/70"
                        }
                      >
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={KAKAO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center rounded-full text-sm font-semibold px-6 py-3.5 transition-all duration-200 hover:scale-[1.02] active:scale-100 ${
                    pkg.highlight
                      ? "bg-white text-foreground hover:bg-white/90"
                      : "border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {pkg.cta} →
                </a>
              </div>
            ))}
          </div>

          {/* 정기구독 배너 */}
          <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 px-8 py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex-1">
              <p className="text-xs font-mono text-primary/60 tracking-widest uppercase mb-1">
                MAINTENANCE PLAN
              </p>
              <p className="font-bold text-foreground text-base">
                정기구독으로 전환하면 10~25% 할인
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                한 달 경험 후 몸의 변화가 느껴지면, 정기구독으로 전환하세요. 매달 자동 배송에 지속 피드백이 더해집니다.
              </p>
            </div>
            <Link
              to="/youth-reset"
              className="shrink-0 inline-flex items-center justify-center rounded-full border border-primary text-primary text-sm font-semibold px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-200 whitespace-nowrap"
            >
              청춘리셋 보기 →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consulting;
