import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, BookOpen, Shield, Activity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import heroPortrait from "@/assets/hero-portrait.jpg";

const cornerstones = [
  {
    id: "01",
    title: "세포 통신망 복구",
    subtitle: "Glycan Network Restoration",
    desc: "세포 표면의 당사슬(Glycan) 안테나를 복구해 끊어진 세포 간 통신을 정상화합니다. 건강의 가장 깊은 기초.",
    products: [
      { label: "Super Immune", path: "/products/super-immune" },
      { label: "Super Greens", path: "/products/super-greens" },
    ],
  },
  {
    id: "02",
    title: "면역 보안 시스템",
    subtitle: "Immune Defense System",
    desc: "만성 염증을 억제하고 대식세포·NK세포 등 1차 면역 방어막을 강화해 외부 공격에 흔들리지 않는 몸을 만듭니다.",
    products: [
      { label: "Super Immune", path: "/products/super-immune" },
      { label: "SuperVera7 원료", path: "/products/super-immune" },
    ],
  },
  {
    id: "03",
    title: "인지·Gut-Brain Axis",
    subtitle: "Brain & Gut Optimization",
    desc: "장과 뇌의 양방향 소통(GBA)을 강화하고 장내 미생물 환경을 안정화해 집중력과 인지 명료함을 최적화합니다.",
    products: [
      { label: "Super GClean", path: "/products/super-gclean" },
      { label: "Super Greens", path: "/products/super-greens" },
    ],
  },
  {
    id: "04",
    title: "대사·호르몬 리셋",
    subtitle: "Metabolic & Hormonal Reset",
    desc: "체내 독소를 배출하고 막혀있던 대사와 호르몬 밸런스를 복구합니다. 신체를 근본부터 최적의 상태로 리셋.",
    products: [
      { label: "Super GClean", path: "/products/super-gclean" },
      { label: "Super Zyme", path: "/products/super-zyme" },
      { label: "Better Salt", path: "/products/better-salt" },
    ],
  },
];

const personalities = [
  {
    role: "설계자",
    en: "Architect",
    Icon: Compass,
    color: "text-blue-600 bg-blue-50",
    tagline: "모든 것을 직접 설계한다",
    desc: "Door to Door 세일즈부터 포뮬러 개발까지. 어떤 과정도 타인에게 맡기지 않고 직접 설계·컨트롤하는 통합적 시야.",
  },
  {
    role: "해설자",
    en: "Translator",
    Icon: BookOpen,
    color: "text-emerald-600 bg-emerald-50",
    tagline: "어려운 과학을 쉬운 언어로",
    desc: "Glycobiology·세포학의 전문 지식을 누구나 이해할 수 있는 언어로 번역합니다. 복잡한 것을 단순하게.",
  },
  {
    role: "수호자",
    en: "Guardian",
    Icon: Shield,
    color: "text-amber-600 bg-amber-50",
    tagline: "사랑하는 사람을 지킨다",
    desc: "어머님의 치매를 마주한 아들의 절박함. 상업적 편향 없이 소비자의 건강을 지키는 파수꾼.",
  },
  {
    role: "실천가",
    en: "Practitioner",
    Icon: Activity,
    color: "text-rose-600 bg-rose-50",
    tagline: "이론이 아닌 결과로 증명",
    desc: "1만 명 코칭, 3년 임상, S서울병원 팀장. 현장에서 직접 검증된 결과만을 이야기합니다.",
  },
];

const timeline = [
  {
    period: "Chapter 01",
    title: "빈털털이로 시작한 뉴욕",
    desc: "하루 200~300군데 Door to Door 세일즈. 거절당하는 날들 속에서 만난 사람들 — 비만, 대사증후군, 암 진단을 받은 이들. 그 문들 뒤에 있던 사람들이 이 브랜드의 진짜 출발점이 되었습니다.",
  },
  {
    period: "Chapter 02",
    title: "1만 명의 삶 앞에 서다",
    desc: "말단 세일즈맨에서 국제기업 최연소 자문위원까지. 1만 명 이상을 직접 건강 코칭하며 현대의학이 해결하지 못하는 문제들을 자연치유 솔루션으로 풀어나갔습니다.",
  },
  {
    period: "Chapter 03",
    title: "전 세계를 돌며 답을 찾다",
    desc: "Glycobiology와 세포학을 공부하며 세계 각국의 천연원료를 탐구했습니다. 그 끝에서 면역특화 생리활성 물질 SuperVera7을 독점 확보했습니다.",
  },
  {
    period: "Chapter 04",
    title: "Call2Life 창립, 청춘리셋 탄생",
    desc: "SuperVera7을 시그니처 원료로 웰니스 제품 라인을 개발하고, 바이오해킹 프로그램 청춘리셋을 출시했습니다. 3년간의 임상이 그 효과를 증명했습니다.",
  },
  {
    period: "Chapter 05",
    title: "의사들과 함께 일하는 사람",
    desc: "현재 S서울병원 통합면역·치매예방센터 팀장으로 재직 중입니다. 현대의학과 자연치유의 접점에서 양쪽의 한계를 보완하는 통합 솔루션을 설계합니다.",
  },
];

const BrandStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Hero ── */}
      <section className="pt-32 pb-28 bg-foreground text-background relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-background/35 mb-8">
            Brand Story
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.12] tracking-tight text-background mb-7 max-w-3xl">
            제가 설계하는 것은<br />단순한 제품이 아닙니다
          </h1>
          <p className="text-background/50 text-lg leading-[1.8] max-w-lg mb-14">
            사랑하는 사람과 온전히 소통하고 함께 누릴 수 있는,<br />
            '더 많은 건강한 내일'을 설계합니다.
          </p>
          <div className="flex flex-wrap gap-3">
            {["19년 필드 경험", "1만 명 건강 코칭", "S서울병원 팀장", "SuperVera7 독점 원료"].map((kw) => (
              <span
                key={kw}
                className="border border-background/20 text-background/45 text-xs tracking-wide rounded-full px-4 py-2"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who is 오승우 ── */}
      <section className="py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <img
                src={heroPortrait}
                alt="오승우 대표 프로필"
                className="w-full rounded-2xl object-cover aspect-[3/4] shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 hidden md:block bg-primary text-primary-foreground rounded-2xl px-6 py-5 shadow-xl">
                <p className="font-mono text-[10px] tracking-[0.2em] opacity-60 mb-1.5">POSITION</p>
                <p className="text-sm font-semibold leading-snug">
                  S서울병원<br />통합면역·치매예방센터 팀장
                </p>
              </div>
            </div>

            <div>
              <p className="font-mono-label mb-5">Wellness Architect</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-8">
                오승우는<br />어떤 사람인가
              </h2>
              <blockquote className="border-l-[3px] border-primary pl-6 mb-8">
                <p className="text-base md:text-[17px] font-medium text-foreground/80 leading-[1.85]">
                  "저는 의사가 아닙니다. 하지만 19년간 치열한 현장에서 무너진 건강이 다시 세워지는 그 길을, 누구보다 가장 가까이에서 함께 걸어온 사람입니다."
                </p>
              </blockquote>
              <p className="text-[16px] leading-[1.85] text-muted-foreground mb-10">
                건축가가 건물을 설계하듯, 오승우 대표는 사람의 몸과 삶을 설계합니다. 단순한 영양제가 아닌, 세포 수준에서 시너지를 내는 통합 건강 솔루션입니다.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { num: "19년", label: "필드 경험" },
                  { num: "1만+", label: "건강 코칭" },
                  { num: "3년", label: "임상 검증" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center bg-muted/40 border border-border/50 rounded-xl py-5">
                    <p className="text-2xl font-bold text-primary mb-1">{stat.num}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <section className="py-28 bg-muted/25">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-4">Origin Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">19년의 여정</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              뉴욕에서 시작된 한 사람의 이야기
            </p>
          </div>

          <div className="relative pl-8 border-l-2 border-border/60 space-y-14">
            {timeline.map((item) => (
              <div key={item.period} className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-sm" />
                <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase mb-2">{item.period}</p>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">{item.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-[1.9]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mother Story ── */}
      <section className="py-28 bg-foreground text-background">
        <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-background/35 mb-8">
            The Heart of the Brand
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
            어머님이 아프셨다
          </h2>
          <div className="space-y-5 text-background/60 text-[16px] leading-[1.95] text-left">
            <p>
              코로나 백신 부작용으로 어머님에게 치매가 찾아왔습니다. 19년간 수많은 사람의 건강을 돌봤지만, 정작 가장 사랑하는 사람은 지키지 못했다는 죄책감.
            </p>
            <p>
              그 아픔이 결심이 됐습니다. 지금까지 쌓아온 모든 지식과 경험을 어머님 한 분을 위해 총동원하겠다고. 가장 최고의 원료로, 가장 까다로운 기준으로, 임상이 있는 원료로만.
            </p>
          </div>
          <div className="mt-14 pt-12 border-t border-background/10">
            <p className="text-2xl md:text-3xl font-bold text-background leading-relaxed mb-4">
              "어머님이 드셔도 되는 것만 만듭니다.<br />
              그것이 제 기준입니다."
            </p>
            <p className="text-background/30 text-sm tracking-wide">— Wellness Architect, 오승우</p>
          </div>
        </div>
      </section>

      {/* ── 4 Cornerstones ── */}
      <section className="py-28 bg-background">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-6">
            <p className="font-mono-label mb-4">The 4 Cornerstones</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
              웰니스 아키텍트의 설계 기준
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
              인체라는 건축물을 세우는 4개의 생물학적 기둥.<br />
              하나라도 무너지면 신체 전체가 기울어집니다.
            </p>
          </div>

          {/* Foundation metaphor bar */}
          <div className="flex items-center justify-center gap-0 mb-14 mt-10">
            {cornerstones.map((cs, i) => (
              <div key={cs.id} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary/40" />
                {i < cornerstones.length - 1 && <div className="w-16 md:w-24 h-px bg-border" />}
              </div>
            ))}
          </div>

          {/* Cornerstone cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {cornerstones.map((cs) => (
              <div
                key={cs.id}
                className="group bg-muted/20 border border-border/50 rounded-2xl p-7 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[11px] font-bold text-primary bg-primary/10 rounded-lg w-9 h-9 flex items-center justify-center shrink-0">
                    {cs.id}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground leading-snug">{cs.title}</h3>
                    <p className="text-[11px] font-mono text-muted-foreground/60 mt-0.5">{cs.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-[1.85] mb-5">{cs.desc}</p>

                {/* Divider */}
                <div className="border-t border-border/50 pt-4">
                  <p className="text-[10px] font-mono tracking-widest text-muted-foreground/50 uppercase mb-3">
                    이 코너스톤의 솔루션
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cs.products.map((prod) => (
                      <Link
                        key={prod.label}
                        to={prod.path}
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/8 border border-primary/20 rounded-full px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {prod.label} <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 청춘리셋 maps to all 4 */}
          <div className="border border-primary/25 bg-primary/5 rounded-2xl px-8 py-7 flex flex-col md:flex-row items-center gap-6">
            <div className="flex shrink-0 gap-2">
              {["01", "02", "03", "04"].map((n) => (
                <span key={n} className="w-8 h-8 rounded-lg bg-primary/15 text-primary text-[11px] font-mono font-bold flex items-center justify-center">
                  {n}
                </span>
              ))}
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs font-mono tracking-widest text-primary uppercase mb-1">4개 코너스톤 동시 작동</p>
              <p className="font-bold text-foreground text-base mb-1">청춘리셋 프로그램 (Youth Reset)</p>
              <p className="text-sm text-muted-foreground">4대 코너스톤을 6주 안에 동시에 세우는 웰니스 아키텍트의 통합 솔루션.</p>
            </div>
            <Link
              to="/youth-reset"
              className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary border border-primary/30 rounded-full px-5 py-2.5 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              자세히 보기 <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4 Personalities ── */}
      <section className="py-28 bg-foreground text-background">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-background/35 mb-4">Brand Personality</p>
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
              스토리에서 태어난 4가지 얼굴
            </h2>
            <p className="text-background/45 text-sm leading-relaxed">
              오승우라는 브랜드를 이루는 4개의 페르소나 — 이 모두가 하나의 사람 안에 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {personalities.map((p) => (
              <div
                key={p.role}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-200"
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <p.Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-background text-lg leading-none">{p.role}</h3>
                      <span className="font-mono text-[10px] tracking-widest text-background/30 uppercase">{p.en}</span>
                    </div>
                    {/* Tagline */}
                    <p className="text-primary text-sm font-semibold mb-3">{p.tagline}</p>
                    {/* Description */}
                    <p className="text-background/55 text-sm leading-[1.85]">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Promise / CTA ── */}
      <section className="py-28 bg-background">
        <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
          <p className="font-mono-label mb-6">Brand Promise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            오늘도 당신의 몸이라는<br />공간을 설계합니다
          </h2>
          <p className="text-muted-foreground text-[16px] leading-[1.9] mb-12">
            10년 뒤를 위한 타협 없는 영양설계.<br />
            사랑하는 사람과 더 많은 건강한 내일을 함께 만들어 갑니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/youth-reset"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              청춘리셋 프로그램 보기 <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground rounded-full px-8 py-4 text-sm font-semibold hover:bg-muted/40 transition-colors"
            >
              1:1 상담 신청하기
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default BrandStory;
