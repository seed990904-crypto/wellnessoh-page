import { Sprout, Sparkles, Zap } from "lucide-react";
import ProductPage from "@/components/ProductPage";
import { ProductConfig } from "@/components/PurchaseSection";
import productImg from "@/assets/product-super-greens.png";

const product: ProductConfig = {
  id: "super-greens",
  // cafe24ProductNo: 미등록 — 카페24 등록 후 숫자 입력
  image: productImg,
  brand: "청춘리셋",
  name: "슈퍼그린",
  engName: "SUPER GREENS",
  tags: ["유기농 엽록소 블렌드", "세포 디톡스", "항산화"],
  unitPrice: 150000,
  freeShippingThreshold: 0,
  shippingFee: 0,
  origin: "미국",
  manufacturer: "텐액스랩스",
};

const SuperGreens = () => (
  <ProductPage
    product={product}
    tagline="식물의 혈액으로 마시는 초록빛 청춘 디톡스. 유기농 엽록소로 세포를 깨끗하게 리셋합니다."
    features={[
      {
        icon: Sprout,
        title: "유기농 엽록소 블렌드",
        desc: "식물의 혈액이라 불리는 엽록소를 유기농으로 농축하여 청춘 디톡스를 실현합니다.",
      },
      {
        icon: Sparkles,
        title: "체내 세포 디톡스 및 항산화",
        desc: "세포 수준의 독소를 제거하고 산화 스트레스로부터 세포를 보호합니다.",
      },
      {
        icon: Zap,
        title: "초록빛 청춘 에너지",
        desc: "다양한 녹색 식물의 정수를 담아 활력과 젊음을 지원합니다.",
      },
    ]}
    activeCornerstones={["01", "03"]}
    forWho={[
      "세포 수준의 디톡스와 항산화가 필요한 분",
      "집중력과 뇌 기능 향상을 원하는 분",
      "만성 피로와 에너지 저하를 느끼는 분",
    ]}
    howToUse="하루 1스쿱을 물이나 주스 200ml에 잘 혼합하여 섭취하세요. 식전 또는 공복 섭취 시 효과적입니다."
    legalDisclosure={{
      ingredients:
        "유기농 엽록소 블렌드(밀잎·보리잎·스피루리나·클로렐라 등, 미국산), 프리바이오틱스 복합물, 이산화규소 — 예시 표시이며 실제 전성분·함량은 포장 라벨을 참조하세요.",
      cautions: [
        "밀·보리 성분이 포함되어 있어 곡물 알레르기가 있는 분은 섭취 전 확인하세요.",
        "혈액응고 억제제(와파린 등)를 복용 중이라면 섭취 전 반드시 전문의와 상담하세요 (비타민 K 함유).",
        "갑상선 질환자는 섭취 전 전문의와 상담하세요 (해조류 성분에 요오드 포함).",
        "임산부, 수유부는 섭취 전 전문의와 상담하세요.",
      ],
    }}
  />
);

export default SuperGreens;
