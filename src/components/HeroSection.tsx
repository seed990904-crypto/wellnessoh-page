import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: Record<string, unknown>) => void;
    };
  }
}

const stats = [
  { num: "19년", label: "필드 경험" },
  { num: "1만+", label: "건강 코칭" },
  { num: "2,000명", label: "청춘리셋 3년" },
];

const HeroSection = () => {
  const openLongevityScore = () => {
    const options = {
      width: 700,
      onSubmit: () => {
        toast("셀프 체크 완료!", {
          description: "전문가의 도움이 필요하시면 1:1 컨설팅을 신청해 보세요.",
          action: {
            label: "상담 신청하기",
            onClick: () =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }),
          },
          duration: 8000,
        });
      },
    };

    if (window.Tally) {
      window.Tally.openPopup("ja9EEY", options);
    } else {
      window.open("https://tally.so/r/ja9EEY", "_blank");
    }
  };

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

      {/* Gradient Overlay — left heavy + bottom heavy */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">

        {/* Brand label */}
        <p className="text-white/55 text-[11px] font-mono tracking-[0.22em] uppercase mb-6">
          웰니스 아키텍트 오승우 · WELLNESS ARCHITECT
        </p>

        {/* Headline */}
        <h1 className="text-[26px] sm:text-[38px] md:text-[50px] lg:text-[60px] font-bold text-white leading-[1.25] tracking-[-0.045em] mb-6 whitespace-nowrap">
          기초가 단단해야,<br />
          내일이 흔들리지 않습니다.
        </h1>

        {/* Sub copy */}
        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10">
          19년 동안 1만 명의 몸을 설계했습니다.<br />
          <strong className="text-white font-bold">지금은 단 한 사람, 엄마의 하루를 설계합니다.</strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={openLongevityScore}
            className="inline-flex items-center justify-center rounded-full bg-white text-black text-sm font-semibold px-8 py-3.5 hover:bg-white/90 transition-all duration-200"
          >
            무료 · 나의 롱제비티 스코어 셀프 체크
          </button>
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-full border border-white/40 text-white text-sm font-medium px-8 py-3.5 hover:bg-white/10 transition-all duration-200"
          >
            브랜드 스토리 보기
          </Link>
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
