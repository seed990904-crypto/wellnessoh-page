import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Mic, Play, Clock, Calendar, Headphones, ExternalLink } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const EPISODES = [
  {
    num: "EP.1",
    title: '"아이들은 신진대사가 빨라서 탄수화물이 더 필요한 것 아니에요?" 예.. 아닙니다..',
    desc: "잘못된 유아식 탄단지 상식을 바로잡는 특집. 아이들이 신진대사가 빠르다는 이유로 탄수화물이 더 필요하다는 주장, 사실일까요? 웰니스 아키텍트 오승우가 과학적으로 짚어드립니다.",
    duration: "21분",
    date: "2026.09.12",
    category: "유아식·탄수화물",
    youtubeId: "fCZXigQEwdA",
  },
];

const PLATFORMS = [
  { name: "YouTube", url: "https://www.youtube.com/watch?v=fCZXigQEwdA" },
  { name: "Spotify", url: null },
  { name: "Apple Podcasts", url: null },
  { name: "네이버 팟캐스트", url: null },
];

const Podcast = () => {
  useSEO({
    title: "팟캐스트 — 웰니스 심화 강의",
    description: "웰니스 아키텍트 오승우의 과학 기반 건강 팟캐스트. 잘못된 건강 상식을 바로잡고 올바른 웰니스 설계를 이야기합니다.",
    url: "/podcast",
  });
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [featured] = EPISODES;

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

              {/* Platform links */}
              <div className="flex flex-wrap gap-2.5">
                {PLATFORMS.map((p) => (
                  p.url ? (
                    <a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border border-border text-muted-foreground hover:border-foreground/40 hover:bg-muted/50 transition-colors"
                    >
                      <Headphones size={12} />
                      {p.name}
                      <ExternalLink size={10} className="text-muted-foreground" />
                    </a>
                  ) : (
                    <span
                      key={p.name}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border border-border text-muted-foreground opacity-40 cursor-default"
                    >
                      <Headphones size={12} />
                      {p.name}
                      <span className="text-[10px]">준비 중</span>
                    </span>
                  )
                ))}
              </div>
            </div>

            {/* Right: host photo */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-72 md:w-full max-w-[360px]">
                <div className="relative rounded-2xl overflow-hidden bg-muted/40 border border-border/60">
                  <div className="absolute top-[10%] left-0 right-0 flex justify-center z-10 pointer-events-none">
                    <span className="text-[13px] font-bold tracking-[0.28em] uppercase text-foreground/35" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
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
            <div className="grid md:grid-cols-[1fr_280px] gap-0">
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
                  <a
                    href={`https://www.youtube.com/watch?v=${featured.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Play size={13} fill="currentColor" />
                    YouTube에서 보기
                  </a>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock size={12} />{featured.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar size={12} />{featured.date}
                  </span>
                </div>
              </div>
              {/* YouTube 썸네일 */}
              <a
                href={`https://www.youtube.com/watch?v=${featured.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block relative border-l border-border overflow-hidden group"
              >
                <img
                  src={`https://img.youtube.com/vi/${featured.youtubeId}/maxresdefault.jpg`}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <Play size={18} fill="currentColor" className="text-foreground ml-0.5" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Next Episode ─── */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-10">
            <p className="font-mono-label mb-2">ALL EPISODES</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">모든 에피소드</h2>
          </div>
          <div className="flex items-center gap-4 p-8 rounded-2xl border border-dashed border-border bg-muted/20">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-none">
              <Mic size={18} className="text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-0.5">새 에피소드를 준비하고 있습니다</p>
              <p className="text-xs text-muted-foreground">YouTube 채널을 구독하시면 업로드 알림을 받을 수 있습니다.</p>
            </div>
            <a
              href="https://www.youtube.com/watch?v=fCZXigQEwdA"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex-none flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
            >
              YouTube 채널 <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Host Bio ─── */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-[220px_1fr] gap-10 items-center">
            <div className="rounded-2xl overflow-hidden border border-border/60 bg-background h-[260px]">
              <img src="/host-photo.png" alt="웰니스 아키텍트 오대표" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
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
