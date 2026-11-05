import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const phases = [
  {
    day: "DAY 01–14",
    label: "REBOOT",
    title: "리부트",
    sub: "호르몬 & 대사 리셋",
    desc: "함께 보는 2주로 시작합니다.",
    points: [
      "비우기 루틴 시작",
      "혈당을 덜 흔드는 식사 순서",
      "식사 시간과 리듬 정비",
      "매일 식단 확인과 질문 답변",
    ],
  },
  {
    day: "DAY 15–28",
    label: "IMPACT",
    title: "임팩트",
    sub: "면역 시스템 리셋",
    desc: "스스로, 가이드와 함께.",
    points: [
      "면역 설계 루틴",
      "장 건강을 위한 식단",
      "수면·스트레스 관리",
      "28일 완주 리포트",
    ],
  },
  {
    day: "DAY 29–42",
    label: "MAINTAIN",
    title: "메인테인",
    sub: "몸의 리듬을 지키는 기간",
    desc: "습관이 되는 마지막 2주.",
    points: [
      "만들어진 습관 유지",
      "나에게 맞는 루틴 정리",
      "다음 단계 계획",
    ],
  },
];

const YouthResetSection = () => {
  const navigate = useNavigate();

  return (
    <section id="youth-reset" className="bg-foreground text-background py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* 헤더 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[10px] font-mono tracking-[0.25em] text-background/30 uppercase mb-4">
              Youth Reset Program
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-background leading-tight">
              42일의 설계
            </h2>
          </div>
          <p className="text-background/40 text-sm leading-relaxed max-w-xs md:text-right">
            2주 집중 코칭으로 시작해<br />
            6주차까지 습관으로 이어집니다
          </p>
        </div>

        {/* 타임라인 연결 — 데스크톱 */}
        <div className="hidden md:grid grid-cols-3 mb-10 relative">
          {/* 연결선 */}
          <div className="absolute top-[7px] left-[16.6%] right-[16.6%] h-px bg-white/15" />
          {phases.map((phase) => (
            <div key={phase.label} className="flex flex-col items-center gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-primary/20 relative z-10" />
              <span className="text-[10px] font-mono tracking-[0.2em] text-background/35 uppercase">
                {phase.day}
              </span>
            </div>
          ))}
        </div>

        {/* 페이즈 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {phases.map((phase, i) => (
            <div
              key={phase.label}
              className="bg-foreground p-7 md:p-8 flex flex-col hover:bg-white/[0.04] transition-colors duration-200"
            >
              {/* 모바일용 DAY 표시 */}
              <p className="md:hidden text-[10px] font-mono tracking-[0.2em] text-background/35 uppercase mb-5">
                {phase.day}
              </p>

              {/* 페이즈 레이블 — 대형 장식 텍스트 */}
              <div className="relative mb-6 overflow-hidden">
                <span className="absolute -top-2 -left-1 text-[64px] md:text-[72px] font-black leading-none text-background/[0.05] select-none pointer-events-none">
                  {phase.label}
                </span>
                <div className="relative z-10 pt-8">
                  <h3 className="text-xl font-bold text-background">{phase.title}</h3>
                  <p className="text-xs text-primary font-semibold mt-1">{phase.sub}</p>
                </div>
              </div>

              {/* 설명 */}
              <p className="text-xs text-background/35 mb-5 font-mono tracking-wide">
                {phase.desc}
              </p>

              {/* 포인트 리스트 */}
              <ul className="space-y-2.5 mt-auto">
                {phase.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-background/50 leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-10 pt-10 border-t border-white/10">
          <div className="space-y-1">
            <p className="text-background/50 text-sm">
              기수별 모집 · 28일 완주 · 중간 참여는 3일차까지
            </p>
            <p className="text-background/25 text-xs">
              1:1 집중 코칭이 포함된 오프라인 과정은 연 몇 차례 따로 공지합니다
            </p>
          </div>
          <button
            onClick={() => navigate("/youth-reset")}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold hover:bg-primary/90 transition-colors shrink-0"
          >
            청춘리셋 자세히 보기 <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default YouthResetSection;
