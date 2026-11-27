import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import imgHeroWater     from "@/assets/hero-water-bg.jpg";
import imgGclean        from "@/assets/product-super-gclean.png";
import imgSaltStick     from "@/assets/product-better-salt-stick.png";
import imgZymeKnockout  from "@/assets/product-super-zyme-knockout.png";
import imgImmuneBottle  from "@/assets/product-super-immune-bottle.png";

// ─── 데이터 ───────────────────────────────────────────────────

const fiveChanges = [
  { n: "01", title: "장내 미생물이 바뀝니다",    body: "먹는 것이 바뀌면 장내 미생물 구성은 불과 며칠 만에 달라지기 시작합니다. 유익균에게 먹이를 주고, 유해균이 살기 어려운 환경을 만듭니다.", ref: "David LA et al., Nature 2014" },
  { n: "02", title: "단맛 중독의 고리가 끊깁니다", body: "당이 들어올 때마다 도파민이 보상을 주던 고리를 쉬게 합니다. 5일이 지나면 단것에 대한 갈망이 조용해집니다.", ref: "" },
  { n: "03", title: "인슐린이 쉽니다",           body: "혈당을 자극하던 입력을 멈추면 인슐린이 낮아지고, 몸은 지방을 꺼내 쓰기 시작합니다. 체지방 연소의 첫 스위치입니다.", ref: "" },
  { n: "04", title: "장벽이 다시 촘촘해집니다",  body: "유익균이 단쇄지방산을 만들어 장 세포의 연료가 되고 세포 사이 잠금을 돕습니다. 새는 장(장누수)이 하루하루 회복됩니다.", ref: "Peng L et al., J Nutr 2009" },
  { n: "05", title: "몸이 정화됩니다",           body: "첨가물·당·가공식품을 멈추고 장과 간이 쌓인 것을 처리할 시간을 갖습니다. 면역·대사·호르몬 리셋의 진짜 시작입니다.", ref: "" },
];

const products = [
  {
    step: "01",
    img1: imgSaltStick,
    img2: null,
    twoImg: false,
    name: "베러솔트",
    eng: "BETTER SALT",
    role: "수분 · 미네랄 보충",
    spec: "4g × 30포",
    bgColor: "bg-[#f5f3ee]",
    accentColor: "text-amber-700",
    borderAccent: "border-l-amber-400",
    badgeBg: "bg-amber-50 border-amber-200 text-amber-700",
    why: "비우기 시작하면 수분과 미네랄이 같이 빠져나갑니다. 물만 마시면 오히려 더 빠져나가요. 소금과 미네랄이 함께 있어야 마신 물이 몸에 머뭅니다.",
    points: [
      "1,200℃ 72시간 고온 소성 — 짠맛이 둥글고 부드러움",
      "미세플라스틱 불검출 (한국미세플라스틱연구원 2025)",
      "100% 천일염 · 물에 녹이면 알칼리성",
    ],
    when: "아침 소금물 1포 + 보틀 1포 (하루 2포 기준)",
  },
  {
    step: "02",
    img1: imgGclean,
    img2: null,
    twoImg: false,
    name: "슈퍼지클린",
    eng: "SUPER G.CLEAN",
    role: "장 클렌징",
    spec: "120ml × 3병",
    bgColor: "bg-[#f0f4f1]",
    accentColor: "text-emerald-700",
    borderAccent: "border-l-emerald-400",
    badgeBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
    why: "900일을 길러 낸 발효 효소가 장 속에 오래 머문 찌꺼기를 비워 냅니다. 장이 비워진 자리에서 비로소 회복이 시작됩니다.",
    points: [
      "식물 원료를 미생물이 900일 발효 — 길러 낸 효소 원액",
      "장을 자극하는 완하제 성분 없음 · 보존료 없음",
      "발효 유기산이 자연적으로 잡균을 차단",
    ],
    when: "1·3·5일 저녁 — 슈퍼자임 30분 뒤, 물 2–3배 희석 후 음용",
  },
  {
    step: "03",
    img1: imgZymeKnockout,
    img2: null,
    twoImg: false,
    name: "슈퍼자임",
    eng: "SUPER ZYME",
    role: "점심 · 저녁 식사 대용",
    spec: "200ml × 10포",
    bgColor: "bg-[#f7f0ee]",
    accentColor: "text-orange-700",
    borderAccent: "border-l-orange-400",
    badgeBg: "bg-orange-50 border-orange-200 text-orange-700",
    why: "오토파지(세포 청소)는 몸이 비어 있을 때만 일어납니다. 단백질이나 인슐린이 올라오면 멈춥니다. 슈퍼자임은 오토파지 흐름을 유지하면서 필수 미량영양소를 채우기 위해 설계됐습니다.",
    points: [
      "산야초 18가지 자연 유래균 발효 (약모밀·민들레·야콘·영지버섯 등)",
      "전통 방식 발효식초 엄윤향 포함",
      "비타민 C·D3·E · 엽산 · 비오틴 · 아연 · 구리 · 망간",
    ],
    when: "점심 1포 · 저녁 1포 — 반드시 공복에 단독으로",
  },
  {
    step: "04",
    img1: imgImmuneBottle,
    img2: null,
    twoImg: false,
    name: "슈퍼이뮨 프리미어™",
    eng: "SUPER IMMUNE PREMIER",
    role: "면역 · 장 · 피부",
    spec: "60캡슐 × 1",
    bgColor: "bg-[#edf0f7]",
    accentColor: "text-blue-700",
    borderAccent: "border-l-blue-400",
    badgeBg: "bg-blue-50 border-blue-200 text-blue-700",
    why: "비워낸 장벽을 회복하고 면역 시스템을 되살리는 역할입니다. 에이스매넌은 세포 간 신호 체계(당사슬)를 복원해 면역이 제대로 작동하도록 돕습니다.",
    points: [
      "에이스매넌 SUPERVERA7® — 2캡슐당 총다당체 126mg",
      "식약처 인정: 면역력 증진 · 장 건강 · 피부 건강",
      "구아바잎 유래 아연 12mg · 미국 cGMP·FDA 등록 시설 제조",
    ],
    when: "아침 2캡슐 · 저녁 2캡슐 (5일 후: 각 1캡슐로 유지)",
  },
];

const routine = [
  {
    time: "아침",
    sub: "일어나자마자 ~ 9시",
    steps: [
      { label: "베러솔트 소금물", detail: "따뜻한 물 500ml + 베러솔트 1포" },
      { label: "그린 스무디",    detail: "슈퍼그린 1스쿱 + 사과 ½ · 셀러리 · 쌈케일 · 물 250ml (아보카도 추천)" },
      { label: "슈퍼이뮨 2캡슐", detail: "" },
    ],
  },
  {
    time: "점심",
    sub: "12시 ~ 1시",
    steps: [
      { label: "슈퍼자임 1포", detail: "공복에 단독으로, 천천히" },
    ],
  },
  {
    time: "저녁",
    sub: "7시 전에 마무리",
    steps: [
      { label: "슈퍼자임 1포",    detail: "오늘의 마지막 식사" },
      { label: "슈퍼이뮨 2캡슐",  detail: "" },
      { label: "슈퍼지클린 1병",  detail: "1·3·5일만 — 슈퍼자임 30분 뒤, 물 2–3배 희석" },
    ],
  },
  {
    time: "하루 종일",
    sub: "틈틈이",
    steps: [
      { label: "베러솔트 보틀", detail: "물 500ml + 베러솔트 1포를 조금씩 (하루 총 2포)" },
    ],
  },
];

const days = [
  { d: "1", title: "비움 시작",   gclean: true,  body: "저장해 둔 포도당을 먼저 씁니다. 배고픔이 가장 큰 날입니다. 사골국과 소금물을 넉넉히 준비하세요.", mission: "사골국 미리 끓여 두기" },
  { d: "2", title: "지방 연소 시작", gclean: false, body: "케톤이 오르며 지방이 연료로 전환됩니다. 두통·무기력이 오면 베러솔트 2포를 꼭 채워 주세요.", mission: "베러솔트 2포 필수" },
  { d: "3", title: "오토파지 시작", gclean: true,  body: "세포의 대청소가 본격 시작됩니다. 리듬이 잡히기 시작하는 날입니다.", mission: "아침 몸무게 기록" },
  { d: "4", title: "머리가 맑아짐", gclean: false, body: "케톤이 뇌의 에너지가 되면서 집중력이 뚜렷이 높아집니다. 피부에도 변화가 오는 분이 많습니다.", mission: "1일차와 비교 기록" },
  { d: "5", title: "기준선 완성",  gclean: true,  body: "5일을 해냈습니다. 비어 있는 상태의 진짜 가벼움을 경험하세요. 이 감각이 평생 나침반이 됩니다.", mission: "5일 돌아보기" },
];

// ─── 컴포넌트 ─────────────────────────────────────────────────

export default function FiveDayReset() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "5일 비움챌린지 | 웰니스 아키텍트";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ══ 히어로 ════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "80px",
          backgroundImage: `url(${imgHeroWater})`,
          backgroundSize: "cover",
          backgroundPosition: "right top",
        }}
      >
        {/* 왼쪽(텍스트) → 불투명, 오른쪽(이미지) → 투명 */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0) 100%)" }} />
        {/* 하단 → 흰색으로 페이드 */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent" />

        <div className="relative max-w-[1200px] mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] tracking-[0.25em] text-sky-700 uppercase mb-5">
              청춘리셋 · 1단계 · 5일 비움챌린지
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              비움이<br />먼저입니다
            </h1>
            <p className="text-lg text-foreground/50 italic mb-6">
              Empty, and begin to heal.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-10 max-w-md">
              좋은 걸 먹어도 몸이 그대로인 이유는<br />
              <span className="text-foreground font-medium">받아들일 준비가 안 됐기 때문입니다.</span><br />
              5일, 먼저 비우면 몸이 달라집니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://call2life2026.cafe24.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-colors"
              >
                챌린지 시작하기 <ArrowRight size={14} />
              </a>
              <button
                onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-foreground/20 bg-white/50 text-foreground/60 hover:text-foreground font-medium text-sm transition-colors backdrop-blur-sm"
              >
                왜 비워야 하나요?
              </button>
            </div>
          </div>

          {/* 숫자 증거 */}
          <div className="flex flex-wrap gap-10 mt-16 border-t border-foreground/10 pt-10">
            {[
              { n: "19년", label: "웰니스 현장 경험" },
              { n: "1만 명", label: "건강 설계 사례" },
              { n: "5일", label: "실증된 비움 프로토콜" },
            ].map((s) => (
              <div key={s.n}>
                <div className="text-2xl font-bold text-sky-700">{s.n}</div>
                <div className="text-xs text-foreground/45 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 왜 비워야 하나 ════════════════════════════════════ */}
      <section id="why" className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-20">

          <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase mb-4">Why Empty First</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-snug">
            영양제를 늘려도, 식단을 바꿔도<br />
            왜 몸은 그대로일까요?
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-14 max-w-xl">
            문제는 <strong className="text-foreground">'무엇을 넣는가'</strong>가 아닙니다.<br />
            '넣을 준비가 되어 있는가'입니다.
          </p>

          {/* 악순환 플로우 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-14">
            {[
              { n: "①", t: "몸이 안 좋다",    d: "피곤하고 더부룩하고 머리가 흐리다" },
              { n: "②", t: "더 먹는다",        d: "영양제·건강식품을 하나씩 추가한다" },
              { n: "③", t: "장·간이 한계",     d: "쉴 틈 없이 일하다 해독이 밀린다" },
              { n: "④", t: "효과 없이 포기",   d: '"나한테는 안 맞나 봐"' },
              { n: "⑤", t: "독소 축적",        d: "처리 못한 것이 몸에 쌓인다", red: true },
            ].map((s, i) => (
              <div key={i} className={`relative p-5 rounded-2xl border text-center ${s.red ? "bg-red-50 border-red-100" : "bg-[#f7f7f5] border-border/40"}`}>
                {i < 4 && <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-xs text-muted-foreground">→</div>}
                <div className={`text-xs font-bold mb-2 ${s.red ? "text-red-400" : "text-muted-foreground"}`}>{s.n}</div>
                <p className={`text-sm font-semibold mb-1 ${s.red ? "text-red-700" : "text-foreground"}`}>{s.t}</p>
                <p className={`text-xs leading-snug ${s.red ? "text-red-500" : "text-muted-foreground"}`}>{s.d}</p>
              </div>
            ))}
          </div>

          {/* 올바른 순서 */}
          <div className="bg-foreground rounded-2xl p-8 md:p-10">
            <p className="font-mono text-[11px] tracking-[0.25em] text-emerald-400 uppercase mb-3">The Right Order</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">올바른 순서는 먼저 비우는 것입니다</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { step: "STEP 1", title: "멈춘다", body: "부담을 주던 입력을 잠시 멈춥니다.\n정제 탄수화물·첨가물·육류를 쉽니다." },
                { step: "STEP 2 · 5일", title: "비워낸다", body: "장과 간이 쌓인 것을 처리할 시간을 줍니다.\n세포가 스스로 청소하기 시작합니다." },
                { step: "STEP 3", title: "채운다", body: "받아들일 준비가 된 몸에\n필요한 것을 채웁니다." },
              ].map((s) => (
                <div key={s.step} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-emerald-400 mb-2">{s.step}</p>
                  <h4 className="text-base font-bold text-white mb-2">{s.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed whitespace-pre-line">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 과학 — 오토파지 & 키토시스 ═══════════════════════ */}
      <section className="bg-[#f7f7f5] border-t">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-20">

          <div className="text-center mb-12">
            <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase mb-4">The Science</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug mb-3">
              5일 안에 켜지는 두 개의 스위치
            </h2>
            <p className="max-w-xl mx-auto text-sm leading-relaxed text-foreground/70">
              비어 있는 시간이 길어지면 몸은{" "}
              <strong className="text-foreground font-bold">'들어온 것을 쓰는 모드'</strong>에서<br />
              <strong className="text-foreground font-bold">'가진 것을 꺼내 쓰고 정리하는 모드'</strong>로 전환됩니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {/* 키토시스 */}
            <div className="bg-white rounded-2xl border border-border/40 overflow-hidden">
              <div className="bg-amber-50 border-b border-amber-100 px-7 py-6">
                <p className="font-mono text-[10px] tracking-[0.2em] text-amber-600 uppercase mb-2">Ketosis · 키토시스</p>
                <h3 className="text-xl font-bold text-foreground">지방을 태우는 몸으로</h3>
              </div>
              <div className="px-7 py-6">
                <div className="flex flex-col gap-4 mb-5">
                  <div className="flex gap-3">
                    <span className="text-xs font-bold text-amber-600 w-10 shrink-0 pt-0.5">Day 2</span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">케톤이 오르기 시작</p>
                      <p className="text-xs text-muted-foreground mt-0.5">간의 당이 줄며 체지방을 케톤으로 전환합니다</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xs font-bold text-amber-600 w-10 shrink-0 pt-0.5">Day 3</span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">뇌가 케톤을 연료로 사용</p>
                      <p className="text-xs text-muted-foreground mt-0.5">단식 연구: 뇌 속 케톤이 평소의 10배 이상</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic border-t border-border/40 pt-4">
                  "3일째부터 머리가 맑아지고 집중이 잘 된다고 느끼는 분이 많습니다" — 현장 관찰
                </p>
              </div>
            </div>

            {/* 오토파지 */}
            <div className="bg-white rounded-2xl border border-border/40 overflow-hidden">
              <div className="bg-emerald-50 border-b border-emerald-100 px-7 py-6">
                <p className="font-mono text-[10px] tracking-[0.2em] text-emerald-600 uppercase mb-2">Autophagy · 오토파지</p>
                <h3 className="text-xl font-bold text-foreground">세포가 스스로 대청소합니다</h3>
              </div>
              <div className="px-7 py-6">
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3 mb-5">
                  <p className="text-xs font-bold text-emerald-700 mb-1">2016 노벨 생리의학상</p>
                  <p className="text-sm text-foreground leading-relaxed">
                    오스미 요시노리 교수가 오토파지를 발견하고 그 메커니즘을 밝혀 노벨상을 받았습니다.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <span className="text-xs font-bold text-emerald-600 w-10 shrink-0 pt-0.5">Day 2</span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">오토파지 활성화 시작</p>
                      <p className="text-xs text-muted-foreground mt-0.5">낡고 손상된 세포 성분을 분해 · 재활용</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xs font-bold text-emerald-600 w-10 shrink-0 pt-0.5">Day 4</span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">세포 재생 가속</p>
                      <p className="text-xs text-muted-foreground mt-0.5">쥐 실험: 24–48시간 공복에 뇌세포 오토파지 급증</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 타임라인 바 */}
          <div className="bg-white rounded-2xl border border-border/40 px-6 py-7">
            <div className="grid grid-cols-5 gap-3">
              {[
                { d: "DAY 1", e: "포도당 소모 시작",    c: "bg-stone-300",   t: "text-stone-500" },
                { d: "DAY 2", e: "케톤 · 오토파지 시작", c: "bg-amber-400",   t: "text-amber-600" },
                { d: "DAY 3", e: "지방 연소 가속",       c: "bg-emerald-400", t: "text-emerald-600" },
                { d: "DAY 4", e: "머리 맑아짐",          c: "bg-sky-400",     t: "text-sky-600" },
                { d: "DAY 5", e: "기준선 완성",          c: "bg-violet-400",  t: "text-violet-600" },
              ].map((t) => (
                <div key={t.d} className="text-center">
                  <div className={`h-2 rounded-full mb-3 ${t.c}`} />
                  <p className={`text-xs font-bold mb-1.5 ${t.t}`}>{t.d}</p>
                  <p className="text-xs text-foreground/70 leading-snug font-medium">{t.e}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 5일, 5가지 변화 ═══════════════════════════════════ */}
      <section className="border-t">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-20">

          <div className="mb-12">
            <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase mb-4">5 Days · 5 Keys</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug mb-3">
              단순히 굶는 것이 아닙니다
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg leading-relaxed">
              5일 동안 이 다섯 가지가 동시에 바뀝니다. 첫 5일이 가장 중요한 이유입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fiveChanges.map((c) => (
              <div key={c.n} className="flex gap-5 p-6 rounded-2xl border border-border/40 hover:border-emerald-200 hover:bg-emerald-50/20 transition-colors">
                <div className="text-sm font-bold text-muted-foreground/40 shrink-0 w-7 pt-0.5">{c.n}</div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-1.5">{c.body}</p>
                  {c.ref && <p className="text-[10px] text-muted-foreground/50">{c.ref}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 셀프체크 ══════════════════════════════════════════ */}
      <section className="bg-[#f7f7f5] border-t">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase mb-4">Self Check</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug mb-5">
                이 중에 하나라도<br />해당되나요?
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                이런 증상들은 단순한 피로가 아닙니다. 장과 간이 쌓인 것을 처리하지 못하고 있다는 신호입니다.
              </p>
              <p className="text-sm text-emerald-700 font-medium">
                → 비워낸 자리에서, 몸은 스스로 회복합니다
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {[
                "이유 없이 늘 피곤하다",
                "머리가 흐리고 집중이 안 된다",
                "아침에 일어나기가 너무 힘들다",
                "속이 더부룩하고 소화가 잘 안 된다",
                "아무리 먹어도 컨디션이 그대로다",
                "몸이 잘 붓고 얼굴이 칙칙하다",
                "감기에 자주 걸리고 면역이 약하다",
                "입 냄새나 체취가 심해졌다",
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-border/40 rounded-xl px-4 py-3">
                  <div className="w-4 h-4 rounded border border-border/60 shrink-0" />
                  <span className="text-sm text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 하루 루틴 ═════════════════════════════════════════ */}
      <section className="border-t">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-20">

          <div className="text-center mb-12">
            <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase mb-4">Daily Routine</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug mb-3">5일 모두 같은 하루 순서</h2>
            <p className="text-sm text-muted-foreground">억지로 참는 기간이 아닙니다. 위와 장에 온전한 휴식을 주는 기간입니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {routine.map((r, i) => (
              <div key={i} className="bg-[#f7f7f5] rounded-2xl border border-border/40 p-6">
                <div className="mb-4">
                  <p className="text-sm font-bold text-foreground">{r.time}</p>
                  <p className="text-xs text-muted-foreground">{r.sub}</p>
                </div>
                <div className="flex flex-col gap-2.5">
                  {r.steps.map((step, j) => (
                    <div key={j} className="bg-white rounded-xl border border-border/40 px-4 py-3">
                      <p className="text-sm font-semibold text-foreground">{step.label}</p>
                      {step.detail && <p className="text-xs text-muted-foreground mt-0.5">{step.detail}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 12–14시간 공복 */}
          <div className="bg-foreground rounded-2xl px-8 py-8 md:py-10 text-center">
            <p className="font-mono text-[11px] tracking-[0.25em] text-emerald-400 uppercase mb-3">The Key Window</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">가장 중요한 시간 — 12–14시간 공복</h3>
            <p className="text-sm text-white/50 max-w-lg mx-auto leading-relaxed mb-7">
              저녁 7시 전에 슈퍼자임으로 하루를 마치고 다음 날 아침까지 위와 장을 쉬게 합니다.
              이 공복 시간 동안 오토파지와 지방 연소가 일어납니다.
            </p>
            <div className="inline-flex items-center gap-6 md:gap-10 bg-white/5 border border-white/10 rounded-xl px-8 py-5">
              <div className="text-center">
                <p className="text-sm font-semibold text-white">저녁 7시 전</p>
                <p className="text-xs text-white/35 mt-0.5">마지막 슈퍼자임</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-400">12h</p>
                <p className="text-xs text-white/35">공복 유지</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-white">아침 7–9시</p>
                <p className="text-xs text-white/35 mt-0.5">따뜻한 소금물</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 제품 구성 ═════════════════════════════════════════ */}
      <section className="bg-[#f7f7f5] border-t">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-20">

          <div className="mb-12">
            <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase mb-4">The Kit</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug mb-3">5일 챌린지 제품 구성</h2>
            <p className="text-sm text-muted-foreground">순서와 역할이 있습니다. 4가지가 함께 작동합니다.</p>
          </div>

          <div className="flex flex-col gap-6">
            {products.map((p, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""} rounded-2xl overflow-hidden border border-border/40 bg-white`}
              >
                {/* 제품 이미지 영역 */}
                <div className={`${p.bgColor} flex items-center justify-center p-10 md:p-14 md:w-[340px] shrink-0`}>
                  {p.twoImg ? (
                    // 베러솔트: 스틱 + 박스 함께
                    <div className="flex items-end justify-center gap-4">
                      <img
                        src={p.img1}
                        alt={`${p.name} 스틱`}
                        className="h-52 md:h-64 w-auto object-contain drop-shadow-sm"
                      />
                      <img
                        src={p.img2!}
                        alt={`${p.name} 박스`}
                        className="h-36 md:h-44 w-auto object-contain drop-shadow-sm"
                      />
                    </div>
                  ) : (
                    <img
                      src={p.img1}
                      alt={p.name}
                      className="h-52 md:h-64 w-auto object-contain drop-shadow-sm"
                    />
                  )}
                </div>

                {/* 텍스트 영역 */}
                <div className="flex-1 p-7 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="text-xs font-bold text-muted-foreground/40">{p.step}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${p.badgeBg}`}>{p.role}</span>
                    <span className="text-xs text-muted-foreground">{p.spec}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-0.5">{p.name}</h3>
                  <p className="text-xs text-muted-foreground tracking-widest mb-5">{p.eng}</p>

                  {/* 왜 이 제품인가 — 왼쪽 색상 보더 */}
                  <div className={`border-l-4 pl-4 py-1 mb-5 ${p.borderAccent}`}>
                    <p className="text-sm text-foreground/80 leading-relaxed">{p.why}</p>
                  </div>

                  {/* 성분 */}
                  <ul className="flex flex-col gap-1.5 mb-6">
                    {p.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check size={13} className={`shrink-0 mt-0.5 ${p.accentColor}`} />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {/* 섭취 방법 — 구분된 스타일 */}
                  <div className="flex items-start gap-3">
                    <span className={`font-mono text-[10px] tracking-[0.15em] uppercase font-bold shrink-0 mt-0.5 ${p.accentColor}`}>WHEN</span>
                    <span className="text-sm text-foreground/75 leading-relaxed">{p.when}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5일 여정 ══════════════════════════════════════════ */}
      <section className="border-t">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-20">

          <div className="mb-12">
            <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase mb-4">5-Day Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug mb-3">5일, 하루하루 몸이 바뀝니다</h2>
          </div>

          <div className="flex flex-col gap-4">
            {days.map((d, i) => (
              <div key={i} className="flex gap-5 md:gap-7 items-start">
                {/* 날짜 */}
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-foreground flex flex-col items-center justify-center text-white">
                  <span className="text-[9px] tracking-wider text-white/40 font-medium">DAY</span>
                  <span className="text-xl font-bold leading-none">{d.d}</span>
                </div>

                {/* 내용 */}
                <div className="flex-1 bg-[#f7f7f5] rounded-2xl border border-border/40 px-6 py-5">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-base font-bold text-foreground">{d.title}</h3>
                    {d.gclean && (
                      <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                        슈퍼지클린
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2.5">{d.body}</p>
                  <p className="text-xs text-muted-foreground/60">미션 — {d.mission}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 멈추는 것 ═════════════════════════════════════════ */}
      <section className="bg-[#f7f7f5] border-t">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase mb-4">Five Pauses</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug mb-5">
                5일 동안<br />이것만 멈춥니다
            </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                참는 기간이 아닙니다.<br />
                <span className="text-foreground font-medium">위와 장에 처음으로 온전한 쉬는 시간</span>을 주는 겁니다.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { label: "정제 탄수화물", detail: "밥·면·빵·떡 — 혈당·인슐린을 반복해 자극하는 것들" },
                { label: "설탕·초가공식품", detail: "첨가물과 당이 장내 환경을 직접 무너뜨립니다" },
                { label: "고기·육류 단백질", detail: "소화 에너지를 덜어 몸이 정화에 집중하게 합니다" },
                { label: "커피·카페인·단 음료", detail: "자극을 쉬고 수분 손실을 줄입니다" },
                { label: "술·야식", detail: "알코올은 간이 가장 먼저 처리해야 하는 독성 물질입니다" },
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-4 bg-white border border-border/40 rounded-xl px-5 py-4">
                  <div className="w-1 h-6 rounded-full bg-muted-foreground/20 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{p.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 5일 이후 ══════════════════════════════════════════ */}
      <section className="border-t">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-20">

          <div className="text-center mb-12">
            <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase mb-4">After 5 Days</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug mb-3">
              5일은 끝이 아닙니다.<br />새로운 기준선입니다.
            </h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              몸이 가벼울 때의 감각을 경험하면 어떤 음식이 나를 무겁게 하는지 몸이 말해 주기 시작합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { title: "아침 소금물 습관", body: "일어나자마자 따뜻한 물 500ml + 베러솔트 1포. 하루를 미네랄로 시작합니다." },
              { title: "12시간 공복 유지", body: "저녁을 일찍 마치고 위와 장에 쉬는 시간을 줍니다. 바쁜 날은 슈퍼자임 한 포로." },
              { title: "주기적인 비움", body: "한두 주에 한 번, 슈퍼지클린으로 장을 비워 줍니다. 비움을 습관으로." },
              { title: "면역 루틴 유지", body: "슈퍼이뮨 프리미어로 면역력·장 건강·피부 건강을 꾸준히 이어 갑니다." },
            ].map((h, i) => (
              <div key={i} className="border border-border/40 rounded-2xl px-6 py-5">
                <h3 className="text-sm font-semibold text-foreground mb-1.5">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>

          {/* 청춘리셋 연결 */}
          <div className="bg-[#f7f7f5] border border-border/40 rounded-2xl p-8 md:p-10 text-center">
            <p className="font-mono text-[11px] tracking-[0.25em] text-emerald-600 uppercase mb-3">Youth Reset · 6 Weeks</p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-snug">
              5일 비움챌린지는<br />청춘리셋 6주 프로그램의 시작입니다
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed mb-7">
              비움 → 호르몬·대사 리셋 → 면역 시스템 강화 → 노화 진행 리셋.<br />
              6주 동안 면역·대사·호르몬 체계를 기초부터 다시 세웁니다.
            </p>
            <Link
              to="/youth-reset"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground hover:bg-foreground/80 text-white font-semibold text-sm transition-colors"
            >
              청춘리셋 6주 프로그램 보기 <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 최종 CTA ══════════════════════════════════════════ */}
      <section className="bg-foreground border-t">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-20 text-center">
          <p className="font-mono text-[11px] tracking-[0.25em] text-emerald-400 uppercase mb-6">시작하기</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
            우리, 함께 걸어볼까요?
          </h2>
          <blockquote className="text-sm text-white/50 leading-relaxed mb-8 max-w-lg mx-auto italic">
            "19년 동안 1만 명의 건강을 설계하며 한 가지를 배웠습니다.<br />
            건강은 무엇을 더 먹느냐가 아니라,<br />
            <span className="text-white/70 not-italic font-medium">무엇을 먼저 비우느냐에서 시작된다는 것.</span>"
            <br />
            <cite className="text-white/30 not-italic text-xs mt-2 block">— Wellness Architect 오승우</cite>
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://call2life2026.cafe24.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-colors"
            >
              5일 챌린지 키트 구매하기 <ArrowRight size={14} />
            </a>
            <Link
              to="/youth-reset"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white/60 hover:text-white/80 font-medium text-sm transition-colors"
            >
              청춘리셋 전체 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
