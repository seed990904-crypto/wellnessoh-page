import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const phases = [
  {
    badge: "WEEKS 1-2 : REBOOT",
    title: "리부트 (회복) : 호르몬 및 대사 리셋",
    points: [
      "체내 독소 배출 및 염증 완화",
      "인슐린 저항성 개선 및 렙틴 호르몬 활성화",
      "신체 에너지 대사 전환 (포도당 → 지방 대사)",
    ],
  },
  {
    badge: "WEEKS 3-4 : IMPACT",
    title: "임팩트 (강화) : 면역 시스템 리셋",
    points: [
      "면역 조절 활성화 및 당사슬 안테나 회복",
      "뇌기능 활성화 및 장내 마이크로바이옴 개선",
      "알러지 증상 회복 및 신체 활력 극대화",
    ],
  },
  {
    badge: "WEEKS 5-6 : MAINTAIN",
    title: "메인테인 (유지) : 노화 진행 리셋",
    points: [
      "바이오해킹 효과 유지 및 건강한 세포 자생력 강화",
      "호르몬, 대사 기능의 완벽한 균형 회복",
      "더 나은 집중력, 업무 및 운동 능력 향상",
    ],
  },
];

const YouthResetSection = () => (
  <section id="youth-reset" className="bg-background py-24 md:py-32">
    <div className="container max-w-6xl">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="font-mono text-xs tracking-[0.2em] text-primary/70 uppercase mb-3">
          YOUTH RESET PROGRAM
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-5">
          6주간의 완벽한 생체 재건축, 청춘리셋
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          단순한 대증요법이 아닌 '루트케어(근본치료)'를 통해 신체의 자연치유력을
          극대화하는 웰니스 아키텍트의 1:1 밀착 솔루션입니다.
        </p>
      </div>

      {/* Timeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 items-stretch">
        {phases.map((phase, i) => (
          <div key={phase.badge} className="flex items-stretch">
            {/* Card */}
            <div className="flex-1 bg-muted/50 border border-border/60 rounded-xl p-6 md:p-7 flex flex-col">
              {/* Badge */}
              <span className="inline-block self-start font-mono text-[11px] tracking-wider font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                {phase.badge}
              </span>

              <h3 className="text-base md:text-lg font-bold text-foreground mb-5 leading-snug">
                {phase.title}
              </h3>

              <ul className="space-y-3 flex-1">
                {phase.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow connector (desktop only, not after last) */}
            {i < phases.length - 1 && (
              <div className="hidden md:flex items-center justify-center w-8 shrink-0">
                <ArrowRight className="w-5 h-5 text-muted-foreground/40" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <Button
          size="lg"
          className="rounded-full px-10 py-4 h-auto text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
        >
          청춘리셋 다음 기수 대기자 등록하기
        </Button>
      </div>
    </div>
  </section>
);

export default YouthResetSection;
