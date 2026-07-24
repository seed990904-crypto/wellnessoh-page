import { Network, Droplets, ShieldCheck } from "lucide-react";
import ProductPage from "@/components/ProductPage";
import { ProductConfig } from "@/components/PurchaseSection";
import productImg from "@/assets/product-super-immune.jpg";

const product: ProductConfig = {
  id: "super-immune",
  // cafe24ProductNo: 미등록 — 카페24 등록 후 숫자 입력
  image: productImg,
  brand: "청춘리셋",
  name: "슈퍼이뮨",
  engName: "SUPER IMMUNE",
  tags: ["세포 통신망 리셋", "에이스매넌 & 초유", "면역 조절 서포트"],
  unitPrice: 160000,
  freeShippingThreshold: 0,
  shippingFee: 0,
  origin: "미국",
  manufacturer: "텐액스랩스",
};

const SuperImmune = () => (
  <ProductPage
    product={product}
    tagline="세포의 대화가 시작되는 면역 조절 서포트. 당사슬 복원으로 몸의 방어 체계를 근본부터 리셋합니다."
    features={[
      {
        icon: Network,
        title: "세포 통신망(당사슬) 리셋",
        desc: "손상된 세포 간 신호 체계를 복원하여 면역 반응을 정상화합니다.",
      },
      {
        icon: Droplets,
        title: "에이스매넌(Acemannan) 함유",
        desc: "알로에 베라에서 추출한 핵심 성분으로 면역세포 활성화를 돕습니다.",
      },
      {
        icon: ShieldCheck,
        title: "초유(Colostrum) 블렌드",
        desc: "성장인자와 면역 글로불린이 풍부한 초유로 세포 방어력을 강화합니다.",
      },
    ]}
    activeCornerstones={["01", "02"]}
    forWho={[
      "면역력이 약하고 잦은 감기·바이러스에 노출되는 분",
      "세포 노화가 빠르고 만성 피로를 느끼는 분",
      "만성 염증과 자가면역 문제가 있는 분",
    ]}
    howToUse="하루 2~4캡슐, 식사와 함께 충분한 물과 섭취하세요. 면역이 많이 저하된 경우 4캡슐로 시작하여 상태에 따라 조절하세요."
  />
);

export default SuperImmune;
