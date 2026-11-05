import { Link } from "react-router-dom";

const cornerstones = [
  {
    num: "01",
    name: "면역",
    desc: "외부 자극에 무너지지 않는\n몸의 통신망을 설계합니다.",
    path: "/products/super-immune",
  },
  {
    num: "02",
    name: "영양과 항산화",
    desc: "세포가 살아있으려면\n채워야 할 것이 있습니다.",
    path: "/products/super-greens",
  },
  {
    num: "03",
    name: "장과 뇌",
    desc: "소화 리듬이 돌아오면\n집중력과 수면이 따라옵니다.",
    path: "/products/super-zyme",
  },
  {
    num: "04",
    name: "정화와 재생",
    desc: "비워야 채울 수 있습니다.\n모든 루틴의 출발점입니다.",
    path: "/products/super-gclean",
  },
];

const ScienceSection = () => {
  return (
    <section className="bg-background border-y border-border py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* 헤더 */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-14">
          <div>
            <p className="font-mono-label mb-3">THE CORNERSTONES</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              4대 코너스톤
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            가장 약한 기둥이 몸 전체를 흔듭니다
          </p>
        </div>

        {/* 기둥 — 데스크톱: 4열 / 모바일: 2×2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border border border-border rounded-2xl overflow-hidden">
          {cornerstones.map((cs) => (
            <Link
              key={cs.num}
              to={cs.path}
              className="group relative flex flex-col justify-between p-6 md:p-8 min-h-[260px] md:min-h-[300px] hover:bg-muted/40 transition-colors duration-200 overflow-hidden"
            >
              {/* 배경 장식 숫자 */}
              <span
                aria-hidden
                className="pointer-events-none select-none absolute -bottom-4 -right-2 text-[110px] md:text-[130px] font-black leading-none text-foreground/[0.04] group-hover:text-foreground/[0.07] transition-colors duration-200"
              >
                {cs.num}
              </span>

              {/* 상단: 번호 레이블 + 키워드 */}
              <div>
                <p className="text-[10px] font-mono tracking-[0.25em] text-muted-foreground/40 mb-5">
                  {cs.num}
                </p>
                <h3 className="text-base md:text-lg font-bold text-foreground leading-none whitespace-nowrap group-hover:text-primary transition-colors duration-200">
                  {cs.name}
                </h3>
              </div>

              {/* 하단: 설명 + 화살표 */}
              <div className="relative">
                <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                  {cs.desc}
                </p>
                <span className="text-[11px] font-medium text-muted-foreground/40 group-hover:text-primary transition-colors duration-200">
                  자세히 보기 →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ScienceSection;
