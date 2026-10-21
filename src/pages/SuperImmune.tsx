import { useState, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PurchaseSection from "@/components/PurchaseSection";
import type { ProductConfig } from "@/components/PurchaseSection";
import { BuyButton } from "@/components/BuyButton";
import { cornerstones } from "@/data/cornerstones";
import { useSEO } from "@/hooks/useSEO";
import type { ProductSlug } from "@/config/mall";

const product: ProductConfig = {
  id: "super-immune",
  image: "/super-immune-premier-main.jpg",
  brand: "청춘리셋",
  name: "슈퍼이뮨 프리미어",
  engName: "SUPER IMMUNE PREMIER",
  tags: ["에이스매넌", "천연 아연", "식물성 캡슐"],
  unitPrice: 160000,
  freeShippingThreshold: 0,
  shippingFee: 0,
  origin: "미국",
  manufacturer: "라이벌 랩스",
};

const gallery = [
  { src: "/super-immune-premier-main.jpg", type: "image" as const, alt: "슈퍼이뮨 프리미어 정면" },
  { src: "/super-immune-premier-open.jpg", type: "image" as const, alt: "슈퍼이뮨 프리미어 캡슐" },
  { src: "/super-immune-premier-lineup.jpg", type: "image" as const, alt: "슈퍼이뮨 프리미어 라인업" },
  { src: "/super-immune-premier-promo.mp4", type: "video" as const, alt: "슈퍼이뮨 프리미어 소개 영상" },
];

const ACTIVE_CS = ["01", "03"];

export default function SuperImmune() {
  const [activeIdx, setActiveIdx] = useState(0);

  useSEO({
    title: "슈퍼이뮨 프리미어 — 2가지 원료, 5가지 기능성 | Wellness Architect",
    description:
      "화산 토양 유기농 알로에겔(SUPERVERA7®)과 구아바잎 천연 아연(RGen-Zn™). 2가지 기능성 원료로 5가지 기능성을 담은 슈퍼이뮨 프리미어.",
    url: "/products/super-immune",
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const active = gallery[activeIdx];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main style={{ paddingTop: "80px" }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10">

          {/* ── 상단: 갤러리 + 구매 섹션 ─────────────────────── */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
            <div className="flex-1 min-w-0">

              {/* 메인 이미지 / 영상 */}
              <div
                className="rounded-2xl bg-[#e8edf7] overflow-hidden flex items-center justify-center mb-3"
                style={{ minHeight: "460px" }}
              >
                {active.type === "video" ? (
                  <video
                    src={active.src}
                    className="w-full h-full object-cover"
                    style={{ minHeight: "460px", maxHeight: "560px" }}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={active.src}
                    alt={active.alt}
                    className="object-contain"
                    style={{ maxHeight: "500px", width: "100%" }}
                  />
                )}
              </div>

              {/* 썸네일 스트립 */}
              <div className="flex gap-2 mb-6">
                {gallery.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      i === activeIdx
                        ? "border-primary shadow-sm"
                        : "border-transparent opacity-55 hover:opacity-90"
                    }`}
                  >
                    {item.type === "video" ? (
                      <div className="w-full h-full bg-muted/40 flex items-center justify-center">
                        <span className="text-lg text-muted-foreground">▶</span>
                      </div>
                    ) : (
                      <img src={item.src} alt="" className="w-full h-full object-cover" />
                    )}
                  </button>
                ))}
              </div>

              {/* 제품명 + 리뉴얼 배지 */}
              <p className="text-xs text-muted-foreground font-medium tracking-wide mb-1">청춘리셋</p>
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  슈퍼이뮨 프리미어{" "}
                  <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                    SUPER IMMUNE PREMIER
                  </span>
                </h1>
                <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                  ✦ 리뉴얼
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                매일 챙기는 면역, 어렵게 생각하지 마세요.<br />
                하루 두 번으로 시작하는 우리 가족 면역 루틴.
              </p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full md:w-[380px] shrink-0 md:sticky md:top-[96px]">
              <PurchaseSection product={product} />
            </div>
          </div>

          {/* ── 5가지 기능성 ──────────────────────────────────── */}
          <section className="border-t pt-12 mb-14">
            <div className="text-center mb-10">
              <p className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase mb-3">
                Certified Functions
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                두 가지 원료로{" "}
                <span className="text-primary">다섯 가지 기능성</span>을 담았습니다
              </h2>
              <p className="text-muted-foreground text-sm">건강기능식품으로 인정된 기능성입니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-8">
              {/* 알로에겔 */}
              <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-7">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">
                    01
                  </span>
                  <span className="font-bold text-foreground">알로에겔</span>
                  <span className="text-xs text-blue-500 font-mono">SUPERVERA7®</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {["면역력 증진", "장 건강", "피부 건강"].map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <p className="text-sm text-foreground font-medium">{f}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 아연 */}
              <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-7">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">
                    02
                  </span>
                  <span className="font-bold text-foreground">아연</span>
                  <span className="text-xs text-emerald-600 font-mono">구아바잎 · RGen-Zn™</span>
                  <span className="ml-auto text-xs text-emerald-600 font-bold whitespace-nowrap">기준치 141%</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {["정상적인 면역기능", "정상적인 세포분열"].map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <p className="text-sm text-foreground font-medium">{f}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3 + 2 = 5 */}
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">
                3{" "}
                <span className="text-muted-foreground text-2xl font-normal">+</span>{" "}
                2{" "}
                <span className="text-muted-foreground text-2xl font-normal">=</span>{" "}
                <span className="text-primary">5</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2">하루 두 알로 챙기는 다섯 가지 기능성</p>
              <p className="text-[10px] text-muted-foreground/55 mt-4 max-w-lg mx-auto leading-relaxed">
                알로에겔: 피부건강·장 건강·면역력 증진에 도움을 줄 수 있음 / 아연: 정상적인 면역기능에 필요, 정상적인
                세포분열에 필요<br />
                1일 섭취량 기준 알로에겔 총 다당체 126mg · 아연 12mg (영양성분 기준치 141%)
              </p>
            </div>
          </section>

          {/* ── 설계 기준 4가지 ───────────────────────────────── */}
          <section className="border-t pt-12 mb-14">
            <div className="mb-8">
              <p className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase mb-3">
                Immune Architecture
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                좋은 원료를 고르는 기준이 있습니다
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                어디서, 어떻게 만들었는지가 효과를 결정합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  no: "01",
                  title: "유기농 알로에겔",
                  desc: "새벽에 손으로 거둬 그날 아침 바로 가공합니다. SUPERVERA7® 기술로 에이스매넌 성분을 온전히 보존합니다.",
                },
                {
                  no: "02",
                  title: "구아바잎 천연 아연",
                  desc: "합성 아연 대신 구아바잎에서 얻은 천연 아연(RGen-Zn™)을 사용했습니다. 물로만 추출한 수용성 형태입니다.",
                },
                {
                  no: "03",
                  title: "사람 연구로 검증된 배합",
                  desc: "EpiCor®(효모 발효물)와 낙엽송 아라비노갈락탄 — 두 원료 모두 사람 대상 연구가 있습니다.",
                },
                {
                  no: "04",
                  title: "인공 첨가물 없이, 식물성 캡슐",
                  desc: "인공향료·합성감미료·인공색소 없이, 식물성 캡슐에 담았습니다. 매일 드셔도 안심입니다.",
                },
              ].map((item) => (
                <div key={item.no} className="bg-muted/20 border border-border/40 rounded-2xl p-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-primary text-primary-foreground text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                      {item.no}
                    </span>
                    <h3 className="font-bold text-foreground text-sm leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 에이스매넌 교육 링크 */}
            <div className="mt-6 bg-foreground/5 border border-border/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-foreground text-sm mb-0.5">그저 알로에겔이 아닙니다.</p>
                <p className="text-xs text-muted-foreground">에이스매넌에 대해 더 알고 싶으신가요?</p>
              </div>
              <a
                href="https://waoh.life/acemannan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-colors shrink-0"
              >
                에이스매넌 자세히 보기 <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>

          {/* ── 세대 변화 타임라인 ────────────────────────────── */}
          <section className="border-t pt-12 mb-14">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <p className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase mb-4">
                  Architect's Note
                </p>
                <blockquote className="text-xl md:text-2xl font-bold text-foreground leading-snug mb-3">
                  "어머님이 드셔도 되는가?"
                </blockquote>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  슈퍼이뮨 프리미어는 이 질문 하나로 원료를 다시 골랐습니다.<br />
                  — Wellness Architect 오승우
                </p>

                <div className="space-y-5">
                  {[
                    { year: "2022", desc: "알로에겔 1종으로 시작", active: false },
                    { year: "2024", desc: "EpiCor®(효모 발효물) 추가", active: false },
                    { year: "2026", desc: "구아바잎 천연 아연 + 낙엽송 아라비노갈락탄 추가 · 프리미어 출시", active: true },
                  ].map((t) => (
                    <div key={t.year} className={`flex gap-4 items-start ${t.active ? "" : "opacity-45"}`}>
                      <div
                        className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${
                          t.active ? "bg-primary" : "bg-border"
                        }`}
                      />
                      <div>
                        <p
                          className={`text-xs font-mono font-bold mb-0.5 ${
                            t.active ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          {t.year}
                        </p>
                        <p className="text-sm text-foreground leading-relaxed">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 숫자 카드 */}
              <div className="grid grid-cols-3 md:grid-cols-1 gap-3 shrink-0 md:w-48">
                {[
                  { num: "1종 → 2종", label: "기능성 원료" },
                  { num: "3 → 5", label: "인정 기능성" },
                  { num: "141%", label: "아연 기준치 (1일)" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-primary/5 border border-primary/20 rounded-2xl p-5 text-center"
                  >
                    <p className="text-lg font-bold text-primary leading-tight mb-1">{s.num}</p>
                    <p className="text-[10px] text-muted-foreground leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 4대 코너스톤 ──────────────────────────────────── */}
          <section className="border-t pt-12 mb-14">
            <div className="mb-5">
              <p className="text-[10px] font-mono tracking-[0.2em] text-primary uppercase mb-2">4 Cornerstones</p>
              <h2 className="text-lg font-bold text-foreground">이 제품이 작용하는 코너스톤</h2>
            </div>
            <div className="flex gap-3">
              {cornerstones.map((cs) => {
                const isActive = ACTIVE_CS.includes(cs.id);
                return (
                  <div
                    key={cs.id}
                    className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-primary border-primary/30 shadow-sm"
                        : "bg-muted/20 border-border/20 opacity-30"
                    }`}
                  >
                    <span
                      className={`text-sm font-mono font-bold ${
                        isActive ? "text-primary-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {cs.id}
                    </span>
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
                "환절기 컨디션 관리가 필요한 분",
                "장 건강과 피부 건강을 함께 챙기고 싶은 분",
                "부모님께 드릴 믿을 수 있는 제품을 찾는 분",
                "합성 첨가물 없는 건강기능식품을 원하는 분",
                "온 가족이 함께 먹을 수 있는 면역 루틴을 원하는 분",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-muted/20 rounded-xl px-4 py-3 border border-border/30"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
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
                1일 2회, 1회 1캡슐을 충분한 물과 함께 섭취하십시오.<br />
                39g (650mg × 60캡슐, 30일분)
              </p>
            </div>
          </section>

          {/* ── 건강기능식품 법정 표시사항 ────────────────────── */}
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
                  알로에겔(알로에베라·유기농·미국산) · 효모발효물(EpiCor®) · 아라비노갈락탄(낙엽송추출) ·
                  구아바잎추출물(RGen-Zn™, 아연 12mg 함유) · 식물성캡슐(하이프로멜로오스)
                </p>
              </div>
              <div className="px-6 py-5">
                <p className="font-semibold text-foreground mb-3">섭취 시 주의사항</p>
                <ul className="space-y-2">
                  {[
                    "알로에·효모 등 원료에 알레르기가 있으신 분은 섭취하지 마십시오.",
                    "이상사례 발생 시 섭취를 즉시 중단하고 전문가와 상담하십시오.",
                    "질병 치료나 약물 투여를 하시는 분들은 의사와 상의하십시오.",
                    "어린이가 손에 닿지 않는 곳에 보관하십시오.",
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

          {/* ── 관련 페이지 ───────────────────────────────────── */}
          <div className="border-t pt-8 mb-10">
            <Link
              to="/ingredients-technology"
              className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
            >
              SuperVera7® 원료 자세히 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ── 하단 구매 CTA ──────────────────────────────────── */}
          <div className="border-t pt-10 pb-4 flex flex-col items-center gap-4">
            <p className="text-xs text-muted-foreground tracking-wide uppercase">지금 시작하세요</p>
            <BuyButton
              product={"super-immune" as ProductSlug}
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
