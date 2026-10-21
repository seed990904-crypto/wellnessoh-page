import { useEffect } from "react";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { useSEO } from "@/hooks/useSEO";
import imgGclean  from "@/assets/product-super-gclean.png";
import imgSalt    from "@/assets/product-better-salt.jpg";
import imgGreens  from "@/assets/product-super-greens.png";
import imgImmune  from "@/assets/product-super-immune.jpg";
import imgZyme    from "@/assets/product-super-zyme.jpg";

// ─── 6주 단계 ─────────────────────────────────────────────

const phases = [
  {
    week: "1 ~ 2주차",
    label: "STEP 1",
    badge: "비우기",
    title: "리부트 — 몸을 비웁니다",
    desc: "6주의 시작은 비움입니다. 쌓인 노폐물을 서서히 내보내고, 소화와 장 환경을 정돈합니다.",
    points: [
      "매일 아침 발효 효소로 장 환경 정리",
      "소화가 잘 되는 식사 순서 배우기",
      "혈당을 덜 흔드는 식단 리듬 잡기",
      "오승우 대표와 매일 식단 체크 & 피드백",
    ],
    color: "from-emerald-700/30 to-emerald-500/5",
    dot: "bg-emerald-400",
  },
  {
    week: "3 ~ 4주차",
    label: "STEP 2",
    badge: "채우기",
    title: "임팩트 — 몸을 채웁니다",
    desc: "비워낸 자리에 필요한 것을 채웁니다. 장 건강, 면역력, 미네랄 균형을 회복합니다.",
    points: [
      "내 몸에 맞는 영양 루틴 만들기",
      "장과 면역을 살리는 식단 구성",
      "수면·스트레스 관리 방법 익히기",
      "4주 완주 리포트 & 몸 변화 확인",
    ],
    color: "from-sky-700/30 to-sky-500/5",
    dot: "bg-sky-400",
  },
  {
    week: "5 ~ 6주차",
    label: "STEP 3",
    badge: "습관 만들기",
    title: "메인테인 — 습관이 됩니다",
    desc: "4주간 만들어진 변화를 일상으로 굳힙니다. 이제 특별한 노력 없이도 몸이 스스로 움직입니다.",
    points: [
      "나만의 건강 루틴 완성하기",
      "앞으로 유지할 식단과 생활 습관 정리",
      "6주 후 변화 점검 & 다음 계획 수립",
    ],
    color: "from-violet-700/30 to-violet-500/5",
    dot: "bg-violet-400",
  },
];

// ─── 제품 포뮬러 ──────────────────────────────────────────

const csColors: Record<string, { badge: string; dot: string }> = {
  C1: { badge: "bg-blue-50 text-blue-700 border-blue-200",     dot: "bg-blue-500" },
  C2: { badge: "bg-teal-50 text-teal-700 border-teal-200",     dot: "bg-teal-500" },
  C3: { badge: "bg-violet-50 text-violet-700 border-violet-200", dot: "bg-violet-500" },
  C4: { badge: "bg-amber-50 text-amber-700 border-amber-200",  dot: "bg-amber-500" },
};

const formulaProducts = [
  {
    step: "01",
    image: imgGclean,
    name: "슈퍼지클린",
    engName: "SUPER G.CLEAN",
    role: "장 환경 정화 · 기초 준비",
    cornerstones: ["C3", "C4"],
    keyIngredient: "900일 자연배양 발효 생효소",
    desc: "장 속에 쌓인 노폐물을 발효 생효소로 비워내고, 유익균이 자랄 수 있는 환경을 만듭니다. 모든 루틴의 기초.",
    price: "27,000원",
    path: "/products/super-gclean",
  },
  {
    step: "02",
    image: imgSalt,
    name: "베러솔트",
    engName: "BETTER SALT",
    role: "세포 전해질 · 미네랄 균형",
    cornerstones: ["C2", "C4"],
    keyIngredient: "1200도 열처리 · 40종 활성 미네랄",
    desc: "일반 소금 대신 매일 사용합니다. 세포가 제대로 작동하기 위한 40종 미네랄로 몸의 전기적 균형을 잡아줍니다.",
    price: "88,000원",
    path: "/products/better-salt",
  },
  {
    step: "03",
    image: imgGreens,
    name: "슈퍼그린",
    engName: "SUPER GREENS",
    role: "항산화 · 엽록소 공급",
    cornerstones: ["C2", "C3"],
    keyIngredient: "유기농 엽록소 블렌드",
    desc: "유기농 녹색 식물에서 추출한 엽록소가 몸 안의 산화를 줄이고 세포 에너지 회복을 도와줍니다.",
    price: "150,000원",
    path: "/products/super-greens",
  },
  {
    step: "04",
    image: imgImmune,
    name: "슈퍼이뮨 프리미어",
    engName: "SUPER IMMUNE PREMIER",
    role: "면역 체계 강화",
    cornerstones: ["C1", "C3"],
    keyIngredient: "에이스매넌 · 초유",
    desc: "에이스매넌과 초유 성분이 면역 세포의 통신망을 복원하고, 외부 자극에 무너지지 않는 면역 기반을 만듭니다.",
    price: "160,000원",
    path: "/products/super-immune",
  },
  {
    step: "05",
    image: imgZyme,
    name: "슈퍼자임",
    engName: "SUPER ZYME",
    role: "소화력 회복 · 발효 지원",
    cornerstones: ["C3", "C4"],
    keyIngredient: "17가지 초본 발효 효소",
    desc: "식사 후 소화를 돕고 영양 흡수율을 높입니다. 장내 환경을 꾸준히 유지해 루틴의 효과를 끝까지 지켜줍니다.",
    price: "75,000원",
    path: "/products/super-zyme",
  },
];

// ─── 후기 ─────────────────────────────────────────────────

const testimonials = [
  {
    title: "체지방 10kg 감량",
    age: "56세 남성 / 2024년 8월 ~ 12월",
    story:
      "평생 다이어트에 한 번도 성공해 본 적이 없었어요. 청춘리셋을 시작한 지 일주일 만에 몸이 가벼워지는 게 느껴졌고, 6주 후에는 체지방만 10kg이 빠졌습니다. 먹는 걸 굶지 않고도 이렇게 바뀔 수 있다는 게 놀라웠어요.",
    result: "6주 만에 체지방 10kg 감량, 혈압도 정상 범위로 돌아왔습니다.",
  },
  {
    title: "아이 아토피가 나았어요",
    age: "4세 여아 보호자 / 2021년 10월 ~ 2022년 2월",
    story:
      "태어날 때부터 아토피에 농가진까지 생겼던 아이였어요. 스테로이드도 끊고 약도 줄여가면서 걱정이 많았는데, 청춘리셋 식단과 효소를 꾸준히 쓰면서 2~3주 만에 피부가 눈에 띄게 좋아졌어요. 지금은 가려워하지 않고 밤에 잘 자고 있어요.",
    result: "4개월 후 아토피 거의 소실. 아이가 건강하게 잘 자고 있습니다.",
  },
  {
    title: "10년 만성 피로가 사라졌어요",
    age: "52세 여성 / 2025년 3월",
    story:
      "10년 넘게 아침마다 피곤했어요. 자도 자도 무거웠는데, 2주 차부터 처음으로 아침에 가볍게 일어날 수 있었습니다. 식사 순서 하나 바꿨을 뿐인데 이렇게 달라질 줄 몰랐어요.",
    result: "6주 후 체중 -5kg, 수면의 질과 아침 컨디션이 완전히 달라졌습니다.",
  },
];

// ─── 페이지 ───────────────────────────────────────────────

export default function YouthReset() {
  useSEO({
    title: "청춘리셋 프로그램 — Wellness Architect",
    description:
      "청춘은 타고나는 것이 아니라 매일의 습관이 만듭니다. 비우고, 채우고, 습관이 되는 웰니스 루틴 — 청춘리셋 프로그램.",
    url: "/youth-reset",
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="/youth-reset-hero.jpg"
          alt="청춘리셋 — 함께하는 건강한 삶"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* 노을 쪽(오른쪽 아래)이 밝으므로 왼쪽+위쪽+아래쪽에 그라디언트 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25" />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">

          <p className="text-white/45 text-[11px] font-mono tracking-[0.25em] uppercase mb-5">
            Youth Reset Program · 웰니스 아키텍트 오승우
          </p>

          {/* 핵심 헤드라인 */}
          <h1
            style={{ fontSize: "clamp(1.15rem, 5vw, 4.5rem)" }}
            className="font-bold text-white leading-[1.2] tracking-[-0.04em] mb-5 whitespace-nowrap"
          >
            청춘은 타고나는 게 아닙니다
          </h1>

          {/* 서브 카피 */}
          <p className="text-white/70 text-base md:text-xl leading-relaxed mb-3 font-medium">
            매일의 습관이 만듭니다.
          </p>
          <p className="text-white/55 text-sm md:text-base leading-relaxed mb-10 max-w-md">
            비우고, 채우고, 습관이 되는 6주 웰니스 루틴.<br />
            지금 당신의 몸은 바뀔 준비가 되어 있습니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-black text-sm font-bold px-8 py-3.5 hover:bg-white/90 transition-all duration-200"
            >
              1:1 상담 신청하기 →
            </Link>
            <a
              href="#program"
              onClick={(e) => { e.preventDefault(); document.querySelector("#program")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center justify-center rounded-full border border-white/40 text-white text-sm font-medium px-8 py-3.5 hover:bg-white/10 transition-all duration-200"
            >
              프로그램 알아보기
            </a>
          </div>

          {/* 하단 수치 */}
          <div className="absolute bottom-14 left-6 md:left-16 lg:left-24 flex gap-8 md:gap-14">
            {[
              { num: "2,000명+", label: "청춘리셋 3년 누적" },
              { num: "6주", label: "완성 프로그램" },
              { num: "19년", label: "오승우 대표 임상 경험" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-white font-bold text-xl md:text-2xl leading-none mb-1">{s.num}</p>
                <p className="text-white/40 text-xs tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-12 right-6 md:right-16 flex flex-col items-center gap-1 text-white/30">
          <p className="text-[10px] font-mono tracking-widest uppercase" style={{ writingMode: "vertical-rl" }}>Scroll</p>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* ══ 2. 핵심 메시지 (식물 배경) ══════════════════════════ */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <img
          src="/youth-reset-nature.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p className="font-mono text-[11px] tracking-[0.25em] text-white/40 uppercase mb-6">The Core Philosophy</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.3] mb-8">
            비우고<span className="text-primary mx-3">·</span>채우고<span className="text-primary mx-3">·</span>습관이 됩니다
          </h2>
          <p className="text-white/65 text-base md:text-lg leading-relaxed">
            몸이 아픈 이유는 대부분 단순합니다.<br />
            <strong className="text-white">쌓인 것을 비우지 못하고, 필요한 것을 채우지 못하는 것.</strong><br /><br />
            청춘리셋은 이 순서를 바로잡는 6주 루틴입니다.<br />
            어렵지 않습니다. 하루 한 가지씩 바꾸면 됩니다.
          </p>
        </div>
      </section>

      {/* ══ 3. 청춘리셋이 다른 이유 ══════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase mb-4">What Makes It Different</p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              "그냥 건강식품 아닌가요?"<br />
              <span className="text-primary">청춘리셋은 다릅니다.</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              보충제만 드리는 게 아닙니다. 먹는 방법, 순서, 습관까지 함께 설계합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                icon: "🌱",
                title: "먼저 비웁니다",
                desc: "장에 쌓인 노폐물과 독소를 먼저 내보냅니다. 좋은 것을 넣기 전에 먼저 청소해야 효과가 납니다.",
              },
              {
                step: "02",
                icon: "🌿",
                title: "제대로 채웁니다",
                desc: "미네랄, 효소, 엽록소 — 몸이 진짜 필요로 하는 영양을 제대로 채워드립니다.",
              },
              {
                step: "03",
                icon: "🔄",
                title: "습관으로 만듭니다",
                desc: "6주가 지나면 따로 노력하지 않아도 몸이 스스로 움직이는 루틴이 완성됩니다.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-muted/30 border border-border/40 rounded-2xl p-8 text-center">
                <p className="text-4xl mb-5">{item.icon}</p>
                <p className="font-mono text-[10px] text-primary font-bold mb-2 tracking-widest">{item.step}</p>
                <h3 className="font-bold text-foreground text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. 공감 섹션 ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="font-mono text-[11px] tracking-[0.25em] text-background/35 uppercase mb-4">Does This Sound Familiar?</p>
            <h2 className="text-2xl md:text-4xl font-bold text-background">
              혹시 지금 이런 상황이신가요?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
            {[
              "아침에 일어나도 늘 피곤하고 몸이 무겁다",
              "조금만 먹어도 더부룩하고 소화가 안 된다",
              "피부가 거칠어지고 몸무게가 계속 늘어난다",
              "잠을 자도 개운하지 않고, 낮에 자꾸 졸린다",
              "관절이 쑤시고, 무릎이 아파서 걷기 불편하다",
              "건강식품을 먹어도 뭔가 달라진다는 느낌이 없다",
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl px-5 py-4">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-background/75 text-sm leading-relaxed">{s}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/15 border border-primary/30 rounded-2xl px-8 py-8 text-center">
            <p className="text-background/60 text-sm mb-3">이 모든 것의 공통점이 있습니다.</p>
            <p className="text-white font-bold text-lg md:text-xl leading-relaxed">
              몸속 리듬이 깨져 있는 것입니다.<br />
              <span className="text-primary">증상만 없애려 하면 다시 돌아옵니다.</span><br />
              근본부터 바로잡아야 진짜 변화가 시작됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* ══ 5. 6주 프로그램 ═════════════════════════════════════ */}
      <section id="program" className="py-20 md:py-28 bg-muted/20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase mb-4">6-Week Program</p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
              6주 동안 함께합니다
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              처음 2주는 오승우 대표와 매일 함께 확인합니다.<br />
              5일 챌린지부터 시작해도, 6주 완성 루틴으로 이어가도 좋습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {phases.map((phase, i) => (
              <div
                key={phase.label}
                className={`relative bg-gradient-to-b ${phase.color} border border-border/40 rounded-2xl p-7 hover:shadow-md transition-all duration-200`}
              >
                <span className="absolute top-5 right-5 font-mono text-[10px] text-foreground/15 font-bold">{phase.label}</span>

                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${phase.dot}`} />
                  <span className="text-xs text-muted-foreground font-mono">{phase.week}</span>
                </div>

                <span className="inline-block text-[10px] font-bold tracking-wider text-primary bg-primary/10 px-3 py-0.5 rounded-full mb-4">
                  {phase.badge}
                </span>

                <h3 className="text-base font-bold text-foreground mb-2 leading-snug">{phase.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-5">{phase.desc}</p>

                <ul className="space-y-2.5">
                  {phase.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>

                {i < phases.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-background rounded-full border border-border/40 items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 포함 사항 */}
          <div className="mt-10 bg-white border border-border/40 rounded-2xl px-8 py-8">
            <p className="font-semibold text-foreground mb-5 text-center">프로그램에 포함된 것들</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {[
                { icon: "📱", title: "1:1 맞춤 코칭", desc: "처음 2주, 오승우 대표와 매일 식단·루틴 점검" },
                { icon: "📦", title: "제품 패키지", desc: "개인 상태에 맞게 선별한 청춘리셋 전용 제품 구성" },
                { icon: "📖", title: "6주 실천 가이드", desc: "식단·수면·운동·제품 루틴을 담은 주차별 가이드북" },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center gap-2">
                  <p className="text-3xl">{item.icon}</p>
                  <p className="font-semibold text-foreground text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6. 에너지 이미지 배너 ════════════════════════════════ */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/youth-reset-energy.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[center_75%]"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 gap-3">
          <p className="text-white font-bold text-2xl md:text-4xl leading-snug drop-shadow">
            5일이면 몸이 반응합니다.
          </p>
          <p className="text-white/65 text-sm md:text-base leading-relaxed">
            5일 비움 챌린지 · 2주 · 4주 · 6주 — 지금 시작할 수 있는 방법이 있습니다.
          </p>
        </div>
      </section>

      {/* ══ 7. 바이오해킹 포뮬러 ════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          {/* 헤더 */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase mb-3">Biohacking Formula</p>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
                청춘리셋 바이오해킹 포뮬러
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                5종의 제품은 각각 코너스톤을 담당합니다.<br />
                함께 쓸 때 비움·채움·습관의 효과가 완성됩니다.
              </p>
            </div>
            {/* 코너스톤 범례 */}
            <div className="flex flex-wrap gap-2 shrink-0">
              {[
                { cs: "C1", label: "면역·통신" },
                { cs: "C2", label: "영양·항산화" },
                { cs: "C3", label: "장뇌축·연결" },
                { cs: "C4", label: "정화·대사" },
              ].map(({ cs, label }) => (
                <span
                  key={cs}
                  className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold px-2.5 py-1.5 rounded-full border ${csColors[cs].badge}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${csColors[cs].dot}`} />
                  {cs}
                  <span className="font-sans font-normal opacity-70">· {label}</span>
                </span>
              ))}
            </div>
          </div>

          {/* 5종 카드 그리드 — grid로 행 내 높이 자동 통일 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {formulaProducts.map((p) => (
              <Link
                key={p.name}
                to={p.path}
                className="group flex flex-col bg-white border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 h-full"
              >
                {/* 이미지 */}
                <div className="aspect-[4/3] overflow-hidden bg-muted/10 shrink-0">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* 내용 */}
                <div className="flex flex-col flex-1 p-4 gap-2.5">

                  {/* 코너스톤 배지 */}
                  <div className="flex flex-wrap gap-1">
                    {p.cornerstones.map((cs) => (
                      <span
                        key={cs}
                        className={`inline-flex items-center gap-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border ${csColors[cs].badge}`}
                      >
                        <span className={`w-1 h-1 rounded-full ${csColors[cs].dot}`} />
                        {cs}
                      </span>
                    ))}
                  </div>

                  {/* 제품명 */}
                  <div>
                    <p className="font-mono text-[9px] text-muted-foreground/40 tracking-widest mb-0.5">
                      STEP {p.step}
                    </p>
                    <h3 className="font-bold text-foreground text-base leading-snug">{p.name}</h3>
                    <p className="text-[9px] font-mono text-muted-foreground/40 tracking-wider">{p.engName}</p>
                  </div>

                  {/* 역할 */}
                  <p className="text-[11px] font-semibold text-primary leading-snug">{p.role}</p>

                  {/* 핵심 성분 */}
                  <p className="text-[10px] text-muted-foreground/60 font-mono leading-snug">
                    {p.keyIngredient}
                  </p>

                  {/* 설명 — flex-1로 늘려 하단 가격 정렬 */}
                  <p className="text-[11px] text-muted-foreground leading-relaxed flex-1">
                    {p.desc}
                  </p>

                  {/* 가격 + 화살표 */}
                  <div className="flex items-center justify-between pt-3 mt-auto border-t border-border/30">
                    <span className="text-sm font-bold text-foreground">{p.price}</span>
                    <span className="text-[10px] text-muted-foreground/40 group-hover:text-primary transition-colors flex items-center gap-0.5">
                      자세히 <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 하단 CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/30">
            <p className="text-muted-foreground/60 text-xs leading-relaxed">
              * 개인 상태에 따라 구성이 달라질 수 있습니다. 상담 후 맞춤 포뮬러를 안내드립니다.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors shrink-0"
            >
              전체 제품 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ══ 8. 실제 후기 ═════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase mb-4">Real Stories</p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
              청춘을 리셋한 사람들의<br />진짜 이야기
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              매일 반복되는 피로, 무너진 리듬 속에서 그들은 청춘리셋을 선택했습니다.<br />
              단순한 변화가 아닌, 몸 전체가 달라진 사람들의 이야기입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-border/40 rounded-2xl p-7 flex flex-col gap-4 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">{t.title}</h3>
                  <p className="text-[11px] text-muted-foreground/60 font-mono">{t.age}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t.story}</p>
                <div className="border-t border-border/40 pt-4">
                  <p className="text-xs font-semibold text-primary leading-relaxed">{t.result}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://www.instagram.com/youthreset_official"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-md"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              청춘리셋 인스타그램 보기
              <span className="text-white/75 font-normal">@youthreset_official</span>
            </a>
            <p className="text-muted-foreground text-xs mt-3">
              청춘리셋 프로그램 일정, 일상 루틴, 건강 정보를 먼저 공유합니다.
            </p>
          </div>

        </div>
      </section>

      {/* ══ 9. FAQ ════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase mb-4">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">자주 묻는 질문</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "나이가 많아도 참여할 수 있나요?",
                a: "네, 60~70대 참여자도 많습니다. 청춘리셋은 특정 나이를 위한 프로그램이 아니라, 몸의 리듬을 되찾고 싶은 모든 분을 위한 프로그램입니다.",
              },
              {
                q: "운동을 못 해도 괜찮나요?",
                a: "물론입니다. 청춘리셋은 운동 프로그램이 아닙니다. 식사 순서, 발효 효소, 미네랄 보충 등 생활 습관 중심이라 운동이 어려우신 분도 충분히 참여할 수 있습니다.",
              },
              {
                q: "6주 동안 식단을 엄격하게 지켜야 하나요?",
                a: "엄격한 금식이나 특수 식단은 없습니다. 먹는 순서와 타이밍을 조금씩 바꾸는 것이 핵심입니다. 일반 밥상에서 실천 가능합니다.",
              },
              {
                q: "비용은 어떻게 되나요?",
                a: "제품 구성과 코칭 방식에 따라 달라집니다. 1:1 상담을 통해 개인 상황에 맞게 안내드립니다. 부담 없이 먼저 문의해 주세요.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-muted/30 border border-border/40 rounded-2xl px-7 py-6">
                <p className="font-semibold text-foreground text-sm mb-2">Q. {item.q}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
