import ComingSoonProductPage from "@/components/ComingSoonProductPage";

const SuperLongeVita = () => (
  <ComingSoonProductPage
    product={{
      slug: "super-longe-vita",
      name: "슈퍼롱제비타",
      engName: "SUPER LONGEVITA",
      brand: "청춘리셋",
      tagline: "세포 수명을 늦추는 항노화 솔루션. 노화의 속도를 늦추고 젊음의 지속 시간을 설계합니다.",
      teaser: [
        "세포 수준에서 작동하는 텔로미어 보호 및 항산화 복합 포뮬라",
        "NAD+ 전구체·레스베라트롤·아스타잔틴 등 검증된 장수 연구 성분 기반",
        "4대 코너스톤 전반에 걸친 통합 항노화 지원",
      ],
      activeCornerstones: ["01", "02", "03", "04"],
      // tallyUrl: "https://tally.so/embed/XXXXX?alignLeft=1&hideTitle=1",
    }}
  />
);

export default SuperLongeVita;
