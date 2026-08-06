import ComingSoonProductPage from "@/components/ComingSoonProductPage";

const CoreRoutine = () => (
  <ComingSoonProductPage
    product={{
      slug: "core-routine",
      name: "코어루틴",
      engName: "CORE ROUTINE",
      brand: "청춘리셋",
      tagline: "4대 코너스톤을 하나로. 바이오해킹의 핵심을 하루 루틴으로 완성하는 통합 패키지.",
      teaser: [
        "C1~C4 코너스톤 각각에 대응하는 4종 제품을 월 단위로 구성한 큐레이션 패키지",
        "개인 상태에 맞춘 조합 가이드와 루틴 가이드북 포함 예정",
        "단품 대비 합리적인 구성으로 지속적인 웰니스 실천을 지원",
      ],
      activeCornerstones: ["01", "02", "03", "04"],
      // tallyUrl: "https://tally.so/embed/XXXXX?alignLeft=1&hideTitle=1",
    }}
  />
);

export default CoreRoutine;
