import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Mic, Play, Clock, Calendar, Headphones, ExternalLink } from "lucide-react";

const EPISODES = [
  {
    num: "EP.48",
    title: "세포 노화의 침묵 — 텔로미어와 NAD+의 실체",
    desc: "텔로미어 단축이 노화의 원인인가, 결과인가? NAD+ 보충의 과학적 근거를 깊게 파헤칩니다. 왜 같은 나이도 생물학적 나이는 다른지, 그 핵심을 짚습니다.",
    duration: "58분",
    date: "2025.07.01",
    category: "노화과학",
  },
  {
    num: "EP.47",
    title: "장 건강이 뇌를 지배한다 — 마이크로바이옴 완전 해부",
    desc: "장-뇌 축(Gut-Brain Axis)의 최신 연구. 우울, 불안, 인지 기능에 미치는 장내세균의 영향과 실천 전략.",
    duration: "52분",
    date: "2025.06.24",
    category: "마이크로바이옴",
  },
  {
    num: "EP.46",
    title: "수면 최적화의 과학 — 성장호르몬을 극대화하는 밤",
    desc: "수면 중 분비되는 성장호르몬의 메커니즘과, 수면 질을 획기적으로 높이는 실천 프로토콜.",
    duration: "47분",
    date: "2025.06.17",
    category: "수면",
  },
  {
    num: "EP.45",
    title: "단식의 역설 — 왜 굶어야 더 오래 사는가",
    desc: "간헐적 단식과 오토파지의 연결고리. 언제, 얼마나, 어떻게 단식해야 효과적인가.",
    duration: "61분",
    date: "2025.06.10",
    category: "바이오해킹",
  },
  {
    num: "EP.44",
    title: "만성 염증의 침묵 — 우리 몸이 조용히 타는 이유",
    desc: "거의 모든 만성질환의 뿌리인 저강도 만성 염증의 정체. 일상에서 염증을 끄는 구체적인 방법.",
    duration: "54분",
    date: "2025.06.03",
    category: "염증",
  },
  {
    num: "EP.43",
    title: "미토콘드리아를 깨워라 — 에너지 대사 완전 정복",
    desc: "만성 피로의 근본 원인인 미토콘드리아 기능 저하. 세포 에너지 생산을 최적화하는 바이오해킹 전략.",
    duration: "49분",
    date: "2025.05.27",
    category: "에너지",
  },
];

const PLATFORMS = [
  { name: "Spotify" },
  { name: "Apple Podcasts" },
  { name: "YouTube" },
  { name: "네이버 팟캐스트" },
];

const Podcast = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [featured, ...rest] = EPISODES;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-[1fr_360px] gap-12 md:gap-16 items-center">

            {/* Left: copy */}
            <div>
              <p className="font-mono-label mb-4">PODCAST</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground mb-5">
                몸을 설계하는 대화
              </h1>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mb-10">
                웰니스 아키텍트 오대표와 함께하는 바이오해킹·장수 과학·최적 컨디션의 모든 것.
                세포 수준의 과학을 일상 언어로 풀어드립니다.
              </p>

              {/* Coming soon notice */}
              <div className="inline-flex items-center gap-2.5 mb-10 px-4 py-2.5 rounded-full bg-muted/60 border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-none" />
                <span className="text-xs text-muted-foreground">에피소드 및 청취자 통계 — <span className="text-foreground font-medium">곧 준비될 예정입니다.</span></span>
              </div>

              {/* Platform links */}
              <div className="flex flex-wrap gap-2.5">
                {PLATFORMS.map((p) => (
                  <button
                    key={p.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border border-border text-foreground hover:border-foreground/40 hover:bg-muted/50 transition-colors"
                  >
                    <Headphones size={12} />
                    {p.name}
                    <ExternalLink size={10} className="text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: host photo */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-72 md:w-full max-w-[360px]">
                <div className="relative rounded-2xl overflow-hidden bg-muted/40 border border-border/60">
                  <div className="absolute top-0 left-0 right-0 flex justify-center pt-4 z-10">
                    <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-foreground/40" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      Wellness Architect
                    </span>
                  </div>
                  <img
                    src="/host-photo.png"
                    alt="웰니스 아키텍트 오대표"
                    className="w-full object-cover object-top"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-xl px-4 py-2.5 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-none">
                      <Mic size={13} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground leading-none mb-0.5">웰니스 아키텍트</div>
                      <div className="text-[10px] text-muted-foreground">오대표 호스트</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Episode ─── */}
      <section className="py-14 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="font-mono-label mb-6">LATEST EPISODE</p>
          <div className="bg-background border border-border rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-[1fr_180px] gap-0">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono-label">{featured.num}</span>
                  <span className="w-px h-3 bg-border" />
                  <span className="text-xs text-muted-foreground">{featured.category}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground leading-snug mb-4 max-w-2xl">
                  {featured.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-7 max-w-xl">
                  {featured.desc}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
                    <Play size={13} fill="currentColor" />
                    재생하기
                  </button>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock size={12} />{featured.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar size={12} />{featured.date}
                  </span>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center bg-muted/40 border-l border-border">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Mic size={28} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Episode Grid ─── */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-10">
            <p className="font-mono-label mb-2">ALL EPISODES</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">모든 에피소드</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {rest.map((ep) => (
              <article
                key={ep.num}
                className="bg-muted/50 border border-border rounded-xl p-6 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-label">{ep.num}</span>
                  <span className="text-[10px] text-muted-foreground px-2.5 py-1 rounded-full bg-background border border-border font-medium">
                    {ep.category}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-3 leading-snug flex-1 text-sm md:text-base">
                  {ep.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-5">
                  {ep.desc}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock size={11} />{ep.duration}</span>
                  <span className="flex items-center gap-1"><Calendar size={11} />{ep.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Host Bio ─── */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">
            <div className="rounded-2xl overflow-hidden border border-border/60 bg-background">
              <img src="/host-photo.png" alt="웰니스 아키텍트 오대표" className="w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-mono-label mb-3">HOST</p>
              <h2 className="text-2xl font-bold text-foreground mb-1">웰니스 아키텍트 오대표</h2>
              <p className="text-sm text-muted-foreground mb-6">Wellness Architect · 바이오해킹 전문가</p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                "어머님이 드셔도 되는 것만"이라는 기준으로 건강 설계를 시작한 웰니스 아키텍트 오대표.
                세포 수준의 과학을 일상 언어로 번역하는 것을 사명으로, 바이오해킹·장수 과학·최적 컨디션에 관한
                깊이 있는 이야기를 매주 청취자들과 나눕니다.
                단순한 건강 정보가 아니라, 몸을 이해하고 직접 설계하는 관점을 공유합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Podcast;
