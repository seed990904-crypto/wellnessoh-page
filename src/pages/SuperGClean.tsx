import { Leaf, Clock, Recycle } from "lucide-react";
import ProductPage from "@/components/ProductPage";
import { ProductConfig } from "@/components/PurchaseSection";
import productImg from "@/assets/product-super-gclean.png";

const product: ProductConfig = {
  id: "super-gclean",
  cafe24ProductNo: 11,
  image: productImg,
  brand: "청춘리셋",
  name: "슈퍼지클린",
  engName: "SUPER G.CLEAN",
  tags: ["900일 자연배양 생효소", "장 상태 개선", "2시간의 마법"],
  unitPrice: 27000,
  freeShippingThreshold: 45000,
  shippingFee: 3000,
  origin: "국산",
  manufacturer: "(주)효소세상",
};

const SuperGClean = () => (
  <ProductPage
    product={product}
    tagline="2시간의 마법, 몸을 리셋하다. 900일 자연배양 생효소로 장 환경을 정화하는 클렌징 솔루션."
    features={[
      {
        icon: Leaf,
        title: "900일 자연배양 생효소",
        desc: "900일간 정성껏 배양한 생효소가 장 속 유해물질을 가수분해하고 배출을 돕습니다.",
      },
      {
        icon: Clock,
        title: "2시간 안에 가벼워지는 속",
        desc: "섭취 후 약 2시간 이내에 장 상태 개선 효과를 체감할 수 있는 빠른 작용 솔루션입니다.",
      },
      {
        icon: Recycle,
        title: "노폐물 가수분해 및 배출",
        desc: "장 내 쌓인 노폐물을 분해하고 배출하여 가볍고 쾌적한 장 환경을 만들어줍니다.",
      },
    ]}
    activeCornerstones={["03", "04"]}
    forWho={[
      "속이 자주 더부룩하거나 소화가 불편한 분",
      "배변이 불규칙하고 장이 무겁게 느껴지는 분",
      "대사가 느려지고 체중 관리가 힘든 분",
    ]}
    howToUse="하루 1포, 아침 공복에 물 150~200ml와 함께 섭취하세요. 처음 섭취 시 반 포부터 시작하여 몸 상태에 맞게 조절하세요."
    detailImages={[
      "/super-gclean-detail-1.png",
      "/super-gclean-detail-2.png",
      "/super-gclean-detail-3.png",
    ]}
  />
);

export default SuperGClean;
