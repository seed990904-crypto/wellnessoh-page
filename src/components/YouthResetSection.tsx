import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const phases = [
  {
    badge: "WEEKS 1–2",
    label: "REBOOT",
    title: "리부트",
    sub: "호르몬 & 대사 리셋",
    points: [
      "비우기 루틴 시작",
      "혈당을 덜 흔드는 식사 순서",
      "식사 시간과 리듬 정비",
    ],
  },
  {
    badge: "WEEKS 3–4",
    label: "IMPACT",
    title: "임팩트",
    sub: "면역 시스템 리셋",
    points: [
      "면역 설계 루틴",
      "장 건강을 위한 식단",
      "수면·스트레스 관리",
    ],
  },
  {
    badge: "WEEKS 5–6",
    label: "MAINTAIN",
    title: "메인테인",
    sub: "노화 진행 리셋",
    points: [
      "6주 동안 만든 습관 유지",
      "나에게 맞는 루틴 정리",
      "다음 단계 계획",
    ],
  },
];

const YouthResetSection = () => {
  const navigate = useNavigate();

  return (
    <section id="youth-reset" className="bg-foreground text-background py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* 헤더 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[11px] font-mono tracking-[0.22em] text-background/35 uppercase mb-4">
              Youth Reset Program
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background leading-tight">
              6주간의<br />완벽한 생체 재건축
            </h2>
          </div>
          <p className="text-background/50 text-sm leading-relaxed max-w-xs md:text-right">
            식단 · 수면 · 생활 리듬을 6주 동안 함께 다시 설계하는
            웰니스 아키텍트의 1:1 밀착 솔루션
          </p>
        </div>

        {/* 페이즈 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {phases.map((phase, i) => (
            <div
              key={phase.label}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors"
            >
              {/* 번호 */}
              <span className="absolute top-5 right-5 font-mono text-[11px] text-background/20 font-bold">
                0{i + 1}
              </span>

              {/* 배지 */}
              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-[10px] tracking-widest text-background/35">
                  {phase.badge}
                </span>
                <span className="font-mono text-[10px] font-bold tracking-wider text-primary bg-primary/20 px-2 py-0.5 rounded-full">
                  {phase.label}
                </span>
              </div>

              <h3 className="text-lg font-bold text-background mb-0.5">{phase.title}</h3>
              <p className="text-xs text-primary font-semibold mb-5">{phase.sub}</p>

              <ul className="space-y-2.5">
                {phase.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm text-background/55 leading-relaxed">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-10">
          <p className="text-background/45 text-sm leading-relaxed">
            소수 정예 · 기수별 모집 · 1:1 맞춤 프로그램
          </p>
          <button
            onClick={() => navigate("/youth-reset#waitlist")}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold hover:bg-primary/90 transition-colors shrink-0"
          >
            다음 기수 대기자 등록 <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default YouthResetSection;
