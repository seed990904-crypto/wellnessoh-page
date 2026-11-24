import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Flame, Droplets, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PurchaseSection from "@/components/PurchaseSection";
import type { ProductConfig } from "@/components/PurchaseSection";
import { DEFAULT_SUBSCRIPTION_PLANS } from "@/config/subscriptionPlans";
import { BuyButton } from "@/components/BuyButton";
import { cornerstones } from "@/data/cornerstones";
import { useSEO } from "@/hooks/useSEO";
import type { ProductSlug } from "@/config/mall";
import productImg from "@/assets/product-better-salt.jpg";

const product: ProductConfig = {
  id: "better-salt",
  cafe24ProductNo: 15,
  image: productImg,
  brand: "청춘리셋",
  name: "베러솔트",
  engName: "BETTER SALT",
  tags: ["40종 활성 미네랄", "1200도 열처리", "알칼리 소금"],
  unitPrice: 88000,
  freeShippingThreshold: 0,
  shippingFee: 0,
  origin: "국산 (전라남도 신안군)",
  manufacturer: "(주)효소세상",
  subscriptionPlans: DEFAULT_SUBSCRIPTION_PLANS,
};

const ACTIVE_CS = ["02", "04"];

const minerals = [
  "나트륨", "칼륨", "칼슘", "마그네슘", "황", "인", "염소",
  "철", "아연", "구리", "망간", "셀레늄", "크롬", "몰리브덴",
  "요오드", "규소", "붕소", "바나듐", "니켈", "리튬",
  "게르마늄", "루비듐", "스트론튬", "브롬", "플루오르",
  "코발트", "주석", "티타늄", "알루미늄", "바륨",
  "세슘", "란타넘", "세륨", "네오디뮴", "사마륨",
  "유로퓸", "가돌리늄", "테르븀", "에르븀", "이터븀",
];

export default function BetterSalt() {
  useSEO({
    title: "베러솔트 — 신안 40종 활성 미네랄 소금 | Wellness Architect",
    description:
      "전라남도 신안군 천일염 1200도 열처리. 40종 활성 미네랄 · 중금속 0% · 알칼리 소금으로 세포 항상성을 되찾으세요.",
    url: "/products/better-salt",
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main style={{ paddingTop: "80px" }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10">

          {/* ── 상단: 이미지 + 구매 섹션 ─────────────────────── */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
            <div className="flex-1 min-w-0">
              <div
                className="rounded-2xl bg-[#f5f0e8] overflow-hidden flex items-center justify-center mb-5"
                style={{ minHeight: "460px" }}
              >
                <img
                  src={productImg}
                  alt="베러솔트"
                  className="object-contain"
                  style={{ maxHeight: "500px", width: "100%" }}
                />
              </div>

              <p className="text-xs text-muted-foreground font-medium tracking-wide mb-1">청춘리셋</p>
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  베러솔트{" "}
                  <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                    BETTER SALT
                  </span>
                </h1>
                <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
                  ✦ 판매 시작
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                0.9%의 신비, 청춘을 위한 완벽한 밸런스.<br />
                신안 천일염의 정수를 담은 40종 활성 미네랄 소금.
              </p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full md:w-[380px] shrink-0 md:sticky md:top-[96px]">
              <PurchaseSection product={product} />
            </div>
          </div>

          {/* ── 3가지 핵심 차별점 ─────────────────────────────── */}
          <section className="border-t pt-12 mb-14">
            <div className="text-center mb-10">
              <p className="font-mono text-[11px] tracking-[0.25em] text-amber-600 uppercase mb-3">
                Why Better Salt
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                일반 소금과{" "}
                <span className="text-amber-600">결정적으로 다릅니다</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  Icon: Flame,
                  color: "bg-orange-50 border-orange-100",
                  iconColor: "bg-orange-100 text-orange-600",
                  title: "1200도 열처리",
                  desc: "고온 열처리로 불순물과 유해물질을 완전히 제거하고 40가지 미네랄을 활성화 상태로 만듭니다.",
                },
                {
                  Icon: Droplets,
                  color: "bg-teal-50 border-teal-100",
                  iconColor: "bg-teal-100 text-teal-600",
                  title: "중금속 · 미세플라스틱 0%",
                  desc: "신안 천일염의 불순물을 완전 제거한 알칼리 소금. 몸의 pH 균형을 잡고 산성화를 되돌립니다.",
                },
                {
                  Icon: Zap,
                  color: "bg-amber-50 border-amber-100",
                  iconColor: "bg-amber-100 text-amber-700",
                  title: "0.9% 세포 항상성",
                  desc: "인체 혈액과 동일한 0.9% 미네랄 농도. 세포 내외 전해질 균형을 유지해 항상성을 지원합니다.",
                },
              ].map(({ Icon, color, iconColor, title, desc }) => (
                <div key={title} className={`rounded-2xl border p-7 ${color}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 40종 활성 미네랄 ──────────────────────────────── */}
          <section className="border-t pt-12 mb-14">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <p className="font-mono text-[11px] tracking-[0.25em] text-amber-600 uppercase mb-3">
                  40 Active Minerals
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  자연이 넣고, 열이 활성화합니다
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  전라남도 신안군의 청정 갯벌에서 증발·결정된 천일염에는
                  지구가 수억 년에 걸쳐 쌓아온 미네랄이 그대로 담겨있습니다.
                  1200도의 열이 불순물을 태우고 미네랄을 이온화 상태로 활성화합니다.
                </p>

                {/* 미네랄 태그 그리드 */}
                <div className="flex flex-wrap gap-1.5">
                  {minerals.map((m, i) => (
                    <span
                      key={m}
                      className={`text-[10px] font-mono px-2 py-1 rounded-md font-semibold ${
                        i < 7
                          ? "bg-amber-100 text-amber-800 border border-amber-200"
                          : i < 15
                          ? "bg-orange-50 text-orange-700 border border-orange-100"
                          : "bg-muted/50 text-muted-foreground border border-border/40"
                      }`}
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <p className="text-[10px] text-muted-foreground mt-3">
                  진한 색 = 주요 전해질 미네랄 / 나머지 = 미량 미네랄
                </p>
              </div>

              {/* 숫자 카드 */}
              <div className="grid grid-cols-3 md:grid-cols-1 gap-3 shrink-0 md:w-44">
                {[
                  { num: "40종", label: "활성 미네랄" },
                  { num: "1200°C", label: "열처리 온도" },
                  { num: "0.9%", label: "세포 항상성" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-center"
                  >
                    <p className="text-lg font-bold text-amber-700 leading-tight mb-1">{s.num}</p>
                    <p className="text-[10px] text-muted-foreground leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 열처리 3단계 프로세스 ────────────────────────── */}
          <section className="border-t pt-12 mb-14">
            <p className="font-mono text-[11px] tracking-[0.25em] text-amber-600 uppercase mb-3">
              Heat Processing
            </p>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              1200도 열처리의 3단계
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
              {[
                {
                  step: "01",
                  title: "신안 천일염 채취",
                  desc: "전라남도 신안군 청정 갯벌의 천일염을 선별·수확합니다. 미네랄 함량이 풍부한 갯벌 환경이 기초입니다.",
                },
                {
                  step: "02",
                  title: "1200도 고온 소성",
                  desc: "도자기 굽는 가마 온도(1200°C)에서 열처리. 중금속·미세플라스틱·불순물이 완전 연소됩니다.",
                },
                {
                  step: "03",
                  title: "미네랄 활성화 완성",
                  desc: "40종 미네랄이 이온화·활성화 상태로 전환됩니다. 체내 흡수율이 극대화된 완성된 베러솔트.",
                },
              ].map((item, i) => (
                <div key={item.step} className="flex gap-4 md:flex-col md:gap-3 bg-muted/15 border border-border/40 rounded-2xl p-6 relative">
                  <div className="flex items-center gap-2 mb-0 md:mb-3">
                    <span className="w-8 h-8 rounded-lg bg-amber-600 text-white text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                      {item.step}
                    </span>
                    {i < 2 && (
                      <span className="hidden md:block text-muted-foreground/30 text-lg font-thin ml-auto">→</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 4대 코너스톤 ──────────────────────────────────── */}
          <section className="border-t pt-12 mb-14">
            <div className="mb-5">
              <p className="text-[10px] font-mono tracking-[0.2em] text-amber-600 uppercase mb-2">4 Cornerstones</p>
              <h2 className="text-lg font-bold text-foreground">이 제품이 작용하는 코너스톤</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {cornerstones.map((cs) => {
                const isActive = ACTIVE_CS.includes(cs.id);
                return (
                  <div
                    key={cs.id}
                    className={`rounded-2xl p-5 border transition-all ${
                      isActive
                        ? "bg-amber-50/60 border-amber-200/60 shadow-sm"
                        : "bg-muted/15 border-border/20 opacity-35"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-mono font-bold rounded-lg w-8 h-8 flex items-center justify-center mb-3 ${
                        isActive ? "bg-amber-600 text-white" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {cs.id}
                    </span>
                    <h3 className={`text-sm font-bold mb-0.5 leading-snug ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                      {cs.title}
                    </h3>
                    <p className="text-[10px] font-mono text-muted-foreground/60 mb-2">{cs.subtitle}</p>
                    {isActive && (
                      <p className="text-xs text-muted-foreground leading-relaxed">{cs.desc}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── 이런 분께 추천 ────────────────────────────────── */}
          <section className="border-t pt-12 mb-14">
            <h2 className="text-lg font-bold text-foreground mb-6">이런 분께 추천합니다</h2>
            <div className="flex flex-col gap-2.5">
              {[
                "일상에서 미네랄 보충이 필요한 분",
                "체내 pH 균형과 알칼리화를 원하는 분",
                "깨끗하고 건강한 소금으로 식생활을 바꾸고 싶은 분",
                "중금속·미세플라스틱이 걱정되는 분",
                "가족 모두 안심하고 쓸 수 있는 소금을 찾는 분",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-muted/20 rounded-xl px-4 py-3 border border-border/30"
                >
                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-amber-600" />
                  </div>
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 섭취 방법 ─────────────────────────────────────── */}
          <section className="border-t pt-12 mb-14">
            <h2 className="text-lg font-bold text-foreground mb-4">사용 방법</h2>
            <div className="bg-muted/20 rounded-2xl p-6 border border-border/30">
              <p className="text-sm text-foreground leading-loose">
                요리 시 일반 소금 대신 동량으로 사용하세요.<br />
                음식 완성 후 첨가하면 미네랄 활성을 더 잘 유지할 수 있습니다.<br />
                나트륨 일일 권장량(2,000mg) 이내로 섭취하세요.
              </p>
            </div>
          </section>

          {/* ── 표시사항 ──────────────────────────────────────── */}
          <section className="border-t pt-12 mb-10">
            <h2 className="text-base font-bold text-foreground mb-1">제품 표시사항</h2>
            <p className="text-xs text-muted-foreground mb-5">
              식품 등의 표시·광고에 관한 법률에 따른 표시 사항입니다.
              정확한 전성분·함량은 제품 포장 라벨을 확인하세요.
            </p>
            <div className="bg-muted/25 rounded-2xl border border-border/50 divide-y divide-border/40 text-sm overflow-hidden">
              <div className="px-6 py-5">
                <p className="font-semibold text-foreground mb-2">원료명 및 함량</p>
                <p className="text-muted-foreground leading-relaxed">
                  신안 천일염(국산, 전라남도 신안군), 40종 활성 미네랄 (1200도 열처리 정제) —
                  예시 표시이며 실제 전성분·함량은 포장 라벨을 참조하세요.
                </p>
              </div>
              <div className="px-6 py-5">
                <p className="font-semibold text-foreground mb-3">주의사항</p>
                <ul className="space-y-2">
                  {[
                    "나트륨 일일 섭취 권장량(2,000mg) 이내로 사용하세요.",
                    "신장 질환, 고혈압, 심장 질환이 있는 분은 섭취 전 전문의와 상담하세요.",
                    "나트륨 민감성이 있는 분은 소량부터 사용하고 전문가와 상담하세요.",
                    "영·유아 및 어린이에게는 적합하지 않을 수 있습니다.",
                  ].map((c, i) => (
                    <li key={i} className="flex gap-2 text-muted-foreground">
                      <span className="shrink-0 mt-px text-muted-foreground/50">·</span>
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-5">
                <p className="font-semibold text-foreground mb-2">제품 정보</p>
                <p className="text-muted-foreground leading-relaxed text-xs">
                  판매원: ㈜씨투엘코리아 · 소비자상담: 070-8866-7344 · 원산지: 국산 (전라남도 신안군)
                </p>
              </div>
            </div>
          </section>

          {/* ── 관련 콘텐츠 링크 ──────────────────────────────── */}
          <div className="border-t pt-8 mb-10">
            <Link
              to="/ingredients-technology"
              className="inline-flex items-center gap-2 text-sm text-amber-700 font-semibold hover:underline"
            >
              웰니스 아키텍트 성분·기술 자세히 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ── 하단 구매 CTA ─────────────────────────────────── */}
          <div className="border-t pt-10 pb-4 flex flex-col items-center gap-4">
            <p className="text-xs text-muted-foreground tracking-wide uppercase">지금 시작하세요</p>
            <BuyButton
              product={"better-salt" as ProductSlug}
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
}
