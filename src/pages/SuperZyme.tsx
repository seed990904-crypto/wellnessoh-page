import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, RotateCcw, FlaskConical, Clock } from "lucide-react";
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
import productImg from "@/assets/product-super-zyme.jpg";

const product: ProductConfig = {
  id: "super-zyme",
  cafe24ProductNo: 14,
  image: productImg,
  brand: "청춘리셋",
  name: "슈퍼자임",
  engName: "SUPER ZYME",
  tags: ["간헐적 단식 효율", "오토파지 촉진", "17가지 천연 초본"],
  unitPrice: 125000,
  freeShippingThreshold: 0,
  shippingFee: 0,
  origin: "미국",
  manufacturer: "텐액스랩스",
  subscriptionPlans: DEFAULT_SUBSCRIPTION_PLANS,
};

const ACTIVE_CS = ["03", "04"];

const herbs = [
  { name: "브로멜라인", origin: "파인애플", role: "소화 효소" },
  { name: "파파인", origin: "파파야", role: "단백질 분해" },
  { name: "유산균", origin: "발효", role: "마이크로바이옴" },
  { name: "생강 추출물", origin: "생강", role: "항산화" },
  { name: "심황 추출물", origin: "심황", role: "항염" },
  { name: "펜넬 씨드", origin: "회향", role: "장 편안함" },
  { name: "페퍼민트", origin: "박하", role: "소화 촉진" },
  { name: "감초 추출물", origin: "감초", role: "장 점막 보호" },
  { name: "알로에베라", origin: "알로에", role: "장 세정" },
  { name: "아티초크", origin: "아티초크", role: "담즙 분비" },
  { name: "댄디라이언", origin: "민들레", role: "간 지원" },
  { name: "밀크씨슬", origin: "밀크씨슬", role: "간 보호" },
  { name: "블랙페퍼", origin: "후추", role: "흡수율 향상" },
  { name: "셀러리 씨드", origin: "셀러리", role: "항산화" },
  { name: "아니스 씨드", origin: "아니스", role: "소화 완화" },
  { name: "카다멈", origin: "카더멈", role: "장 운동" },
  { name: "클로브", origin: "정향", role: "항균" },
];

export default function SuperZyme() {
  useSEO({
    title: "슈퍼자임 — 오토파지 촉진 발효 솔루션 | Wellness Architect",
    description:
      "17가지 천연 초본 마이크로바이옴 발효 솔루션. 오토파지를 깨워 세포를 갱신하고 간헐적 단식의 효율을 극대화합니다.",
    url: "/products/super-zyme",
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
                className="rounded-2xl bg-[#ecf5ec] overflow-hidden flex items-center justify-center mb-5"
                style={{ minHeight: "460px" }}
              >
                <img
                  src={productImg}
                  alt="슈퍼자임"
                  className="object-contain"
                  style={{ maxHeight: "500px", width: "100%" }}
                />
              </div>

              <p className="text-xs text-muted-foreground font-medium tracking-wide mb-1">청춘리셋</p>
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  슈퍼자임{" "}
                  <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                    SUPER ZYME
                  </span>
                </h1>
                <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                  ✦ 판매 시작
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                오토파지를 깨우는 마이크로바이옴 발효 솔루션.<br />
                청춘을 되찾는 세포 자가청소 프로그램.
              </p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full md:w-[380px] shrink-0 md:sticky md:top-[96px]">
              <PurchaseSection product={product} />
            </div>
          </div>

          {/* ── 오토파지란? ───────────────────────────────────── */}
          <section className="border-t pt-12 mb-14">
            <div className="text-center mb-10">
              <p className="font-mono text-[11px] tracking-[0.25em] text-emerald-600 uppercase mb-3">
                What is Autophagy
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                세포가 스스로 청소합니다
              </h2>
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                오토파지(Autophagy)는 세포가 손상된 단백질과 소기관을 스스로 분해·재활용하는 자가청소 기전입니다.
                2016년 노벨 생리의학상 수상 주제로, 노화·면역·대사의 근본 메커니즘입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  Icon: RotateCcw,
                  color: "bg-emerald-50/60 border-emerald-100",
                  iconColor: "bg-emerald-100 text-emerald-600",
                  title: "세포 자가청소 활성화",
                  desc: "손상된 세포 소기관과 미스폴딩 단백질을 분해해 세포를 재생합니다. 노화 세포가 젊어지는 근본 메커니즘입니다.",
                },
                {
                  Icon: Clock,
                  color: "bg-teal-50/60 border-teal-100",
                  iconColor: "bg-teal-100 text-teal-600",
                  title: "간헐적 단식 효율 극대화",
                  desc: "단식 중 오토파지가 가장 활성화됩니다. 슈퍼자임은 단식 효과를 최대로 끌어올리는 보조 솔루션입니다.",
                },
                {
                  Icon: FlaskConical,
                  color: "bg-violet-50/60 border-violet-100",
                  iconColor: "bg-violet-100 text-violet-600",
                  title: "장-뇌 축 최적화",
                  desc: "17가지 초본 발효물이 장내 마이크로바이옴을 안정화합니다. 장-뇌 양방향 소통이 개선됩니다.",
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

          {/* ── 17가지 천연 초본 ──────────────────────────────── */}
          <section className="border-t pt-12 mb-14">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <p className="font-mono text-[11px] tracking-[0.25em] text-emerald-600 uppercase mb-3">
                  17 Botanical Ingredients
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  자연에서 고른 17가지
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  소화 효소부터 마이크로바이옴 발효균까지,
                  장 환경을 근본적으로 바꾸는 17가지 천연 초본을
                  발효·농축했습니다.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {herbs.map((herb, i) => (
                    <div
                      key={herb.name}
                      className="flex items-center gap-3 bg-muted/15 border border-border/30 rounded-xl px-3 py-2.5"
                    >
                      <span className="text-[9px] font-mono font-bold text-emerald-600 bg-emerald-50 w-5 h-5 rounded flex items-center justify-center shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-foreground leading-none mb-0.5">{herb.name}</p>
                        <p className="text-[10px] text-muted-foreground">{herb.origin} · {herb.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 숫자 카드 */}
              <div className="grid grid-cols-3 md:grid-cols-1 gap-3 shrink-0 md:w-44">
                {[
                  { num: "17종", label: "천연 초본" },
                  { num: "2016", label: "오토파지 노벨상" },
                  { num: "5일", label: "첫 변화 체감" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 text-center"
                  >
                    <p className="text-lg font-bold text-emerald-700 leading-tight mb-1">{s.num}</p>
                    <p className="text-[10px] text-muted-foreground leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 간헐적 단식 × 슈퍼자임 타임라인 ──────────────── */}
          <section className="border-t pt-12 mb-14">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <p className="font-mono text-[11px] tracking-[0.25em] text-emerald-600 uppercase mb-4">
                  Architect's Protocol
                </p>
                <blockquote className="text-xl md:text-2xl font-bold text-foreground leading-snug mb-3">
                  "단식의 빈 공간을<br />발효가 채웁니다."
                </blockquote>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  간헐적 단식 중 위장이 비어있을 때 슈퍼자임을 섭취하면<br />
                  단식 효과와 오토파지 활성이 동시에 극대화됩니다.
                  — Wellness Architect 오승우
                </p>

                <div className="space-y-5">
                  {[
                    { time: "단식 시작", desc: "슈퍼자임 1캡슐 섭취 — 단식 환경 준비", active: false },
                    { time: "단식 12시간", desc: "오토파지 본격 활성화 구간 진입", active: false },
                    { time: "단식 16~18시간", desc: "오토파지 피크 · 슈퍼자임 초본이 장내 환경 보조", active: true },
                    { time: "식사 재개 전", desc: "슈퍼자임 1캡슐 추가 섭취 — 소화 준비 완료", active: false },
                  ].map((t) => (
                    <div key={t.time} className={`flex gap-4 items-start ${t.active ? "" : "opacity-50"}`}>
                      <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${t.active ? "bg-emerald-500" : "bg-border"}`} />
                      <div>
                        <p className={`text-xs font-mono font-bold mb-0.5 ${t.active ? "text-emerald-600" : "text-muted-foreground"}`}>
                          {t.time}
                        </p>
                        <p className="text-sm text-foreground leading-relaxed">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-1 gap-3 shrink-0 md:w-44">
                {[
                  { num: "16h", label: "오토파지 활성 목표" },
                  { num: "2회", label: "1일 권장 섭취" },
                  { num: "30일", label: "첫 루틴 완성" },
                ].map((s) => (
                  <div key={s.label} className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 text-center">
                    <p className="text-lg font-bold text-emerald-700 leading-tight mb-1">{s.num}</p>
                    <p className="text-[10px] text-muted-foreground leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 4대 코너스톤 ──────────────────────────────────── */}
          <section className="border-t pt-12 mb-14">
            <div className="mb-5">
              <p className="text-[10px] font-mono tracking-[0.2em] text-emerald-600 uppercase mb-2">4 Cornerstones</p>
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
                        ? "bg-emerald-50/60 border-emerald-200/60 shadow-sm"
                        : "bg-muted/15 border-border/20 opacity-35"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-mono font-bold rounded-lg w-8 h-8 flex items-center justify-center mb-3 ${
                        isActive ? "bg-emerald-600 text-white" : "bg-muted text-muted-foreground"
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
                "간헐적 단식을 실천하거나 시작하려는 분",
                "세포 자가청소(오토파지) 효율을 높이고 싶은 분",
                "장내 마이크로바이옴을 최적화하고 싶은 분",
                "소화 불편함이 잦거나 장 환경 개선이 필요한 분",
                "노화 세포를 갱신하고 대사를 리셋하고 싶은 분",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-muted/20 rounded-xl px-4 py-3 border border-border/30"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 섭취 방법 ─────────────────────────────────────── */}
          <section className="border-t pt-12 mb-14">
            <h2 className="text-lg font-bold text-foreground mb-4">섭취 방법</h2>
            <div className="bg-muted/20 rounded-2xl p-6 border border-border/30">
              <p className="text-sm text-foreground leading-loose">
                하루 2캡슐, 단식 기간 중 또는 식전에 물과 함께 섭취하세요.<br />
                간헐적 단식과 병행 시 효과가 배가됩니다.<br />
                처음 섭취 시 소화기 반응이 있을 수 있으니 소량부터 시작하세요.
              </p>
            </div>
          </section>

          {/* ── 법정 표시사항 ──────────────────────────────────── */}
          <section className="border-t pt-12 mb-10">
            <h2 className="text-base font-bold text-foreground mb-1">건강기능식품 법정 표시사항</h2>
            <p className="text-xs text-muted-foreground mb-5">
              건강기능식품에 관한 법률 및 식품 등의 표시·광고에 관한 법률에 따른 표시 사항입니다.
              아래 내용은 예시 형식이며, 정확한 전성분·함량은 제품 포장 라벨을 확인하세요.
            </p>
            <div className="bg-muted/25 rounded-2xl border border-border/50 divide-y divide-border/40 text-sm overflow-hidden">
              <div className="px-6 py-5">
                <p className="font-semibold text-foreground mb-2">원료명 및 함량</p>
                <p className="text-muted-foreground leading-relaxed">
                  17종 천연 초본 발효 복합물(미국산), 브로멜라인, 파파인, 유산균(Bacillus coagulans),
                  이산화규소, 식물성 캡슐 — 예시 표시이며 실제 전성분·함량은 포장 라벨을 참조하세요.
                </p>
              </div>
              <div className="px-6 py-5">
                <p className="font-semibold text-foreground mb-3">섭취 시 주의사항</p>
                <ul className="space-y-2">
                  {[
                    "파인애플·파파야 알레르기가 있는 분은 섭취 전 주의하세요 (브로멜라인·파파인 함유).",
                    "처음 섭취 시 소화기 반응이 있을 수 있으므로 소량부터 시작하세요.",
                    "임산부, 수유부는 섭취 전 전문의와 상담하세요.",
                    "의약품을 복용 중인 경우 전문가와 상담 후 섭취하세요.",
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
                  수입·판매원: ㈜씨투엘코리아 · 소비자상담: 070-8866-7344 ·
                  이상사례 신고: 1577-2488 · 원산지: 미국
                </p>
              </div>
              <div className="px-6 py-4 bg-amber-50/60">
                <p className="text-xs text-amber-800/80 leading-relaxed">
                  ※ 이 제품은 질병의 예방 또는 치료를 위한 의약품이 아닙니다. 개인에 따라 섭취 효과의 차이가
                  있을 수 있으며, 질환이 있거나 의약품을 복용 중인 경우 섭취 전 반드시 전문의와 상담하시기
                  바랍니다.
                </p>
              </div>
            </div>
          </section>

          {/* ── 관련 콘텐츠 링크 ──────────────────────────────── */}
          <div className="border-t pt-8 mb-10">
            <Link
              to="/ingredients-technology"
              className="inline-flex items-center gap-2 text-sm text-emerald-700 font-semibold hover:underline"
            >
              웰니스 아키텍트 성분·기술 자세히 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ── 하단 구매 CTA ─────────────────────────────────── */}
          <div className="border-t pt-10 pb-4 flex flex-col items-center gap-4">
            <p className="text-xs text-muted-foreground tracking-wide uppercase">지금 시작하세요</p>
            <BuyButton
              product={"super-zyme" as ProductSlug}
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
