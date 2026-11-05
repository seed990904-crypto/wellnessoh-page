import { Link } from "react-router-dom";
import { ChevronDown, Sparkles } from "lucide-react";

const KAKAO_URL = "http://pf.kakao.com/_VxdWxhG";

const stats = [
  { num: "19년", label: "필드 경험" },
  { num: "1만+", label: "건강 코칭" },
  { num: "2,000명", label: "청춘리셋 3년" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">

        {/* Brand label */}
        <p className="text-white/40 text-[10px] font-mono tracking-[0.3em] uppercase mb-6">
          Biology by Design · WELLNESS ARCHITECT
        </p>

        {/* Headline */}
        <h1 className="text-[32px] sm:text-[46px] md:text-[58px] lg:text-[68px] font-bold text-white leading-[1.2] tracking-[-0.03em] mb-8">
          몸의 기초를<br />다시 설계합니다.
        </h1>

        {/* Sub copy */}
        <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
          19년간 1만 명의 몸을 설계했습니다.<br />
          지금은 단 한 사람, 엄마의 하루를 설계합니다.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          {/* 출시 이벤트 버튼 */}
          <a
            href="https://superimmune-premier-film.netlify.app/?ch=kakao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-bold px-8 py-3.5 transition-all duration-200 hover:scale-[1.03] active:scale-100"
            style={{
              background: "linear-gradient(135deg, #b8860b 0%, #f0c040 50%, #b8860b 100%)",
              color: "#1a0f00",
              boxShadow: "0 0 20px rgba(240,192,64,0.35)",
            }}
          >
            <Sparkles className="w-4 h-4" />
            슈퍼이뮨 프리미어 출시 이벤트 구매하기
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-full bg-white text-black text-sm font-semibold px-8 py-3.5 hover:bg-white/90 transition-all duration-200"
          >
            설계 시작하기 →
          </Link>
          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/40 text-white text-sm font-medium px-8 py-3.5 hover:bg-white/10 transition-all duration-200"
          >
            1:1 상담 신청
          </a>
        </div>

        {/* Stats row — pinned to bottom */}
        <div className="absolute bottom-14 left-6 md:left-16 lg:left-24 flex gap-5 sm:gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-white font-bold text-xl md:text-2xl leading-none mb-1">
                {stat.num}
              </p>
              <p className="text-white/45 text-xs tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 right-6 md:right-16 flex flex-col items-center gap-1 text-white/30">
        <p className="text-[10px] font-mono tracking-widest uppercase" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </p>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
