import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const phases = [
  {
    badge: "WEEKS 1–2",
    label: "REBOOT",
    title: "리부트",
    sub: "호르몬 & 대사 리셋",
    points: [
      "체내 독소 배출 및 염증 완화",
      "인슐린 저항성 개선 및 렙틴 호르몬 활성화",
      "에너지 대사 전환 (포도당 → 지방 대사)",
    ],
  },
  {
    badge: "WEEKS 3–4",
    label: "IMPACT",
    title: "임팩트",
    sub: "면역 시스템 리셋",
    points: [
      "면역 조절 활성화 및 당사슬 안테나 회복",
      "뇌기능 활성화 및 장내 마이크로바이옴 개선",
      "알러지 증상 회복 및 신체 활력 극대화",
    ],
  },
  {
    badge: "WEEKS 5–6",
    label: "MAINTAIN",
    title: "메인테인",
    sub: "노화 진행 리셋",
    points: [
      "바이오해킹 효과 유지 및 세포 자생력 강화",
      "호르몬·대사 기능의 완벽한 균형 회복",
      "집중력·업무·운동 능력 향상",
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
            루트케어(근본치료)를 통해 신체의 자연치유력을 극대화하는
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
