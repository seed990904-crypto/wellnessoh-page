import { Flame, ShieldCheck, Activity } from "lucide-react";
import ProductPage from "@/components/ProductPage";
import { ProductConfig } from "@/components/PurchaseSection";
import productImg from "@/assets/product-better-salt.jpg";

const product: ProductConfig = {
  id: "better-salt",
  // cafe24ProductNo: 미등록 — 카페24 등록 후 숫자 입력
  image: productImg,
  brand: "청춘리셋",
  name: "베러솔트",
  engName: "BETTER SALT",
  tags: ["40종 활성 미네랄", "1200도 열처리", "알칼리 소금"],
  unitPrice: 88000,
  freeShippingThreshold: 0,
  shippingFee: 0,
  origin: "국산 (전라남도 신안군)",
  manufacturer: "(주)효소세상",
};

const BetterSalt = () => (
  <ProductPage
    product={product}
    tagline="0.9%의 신비, 청춘을 위한 완벽한 밸런스. 신안 천일염의 정수를 담은 활성 미네랄 소금."
    features={[
      {
        icon: Flame,
        title: "1200도 열처리 40종 활성 미네랄",
        desc: "고온 열처리로 불순물을 제거하고 40가지 미네랄을 활성화하여 체내 흡수율을 높입니다.",
      },
      {
        icon: ShieldCheck,
        title: "유해물질 0% 알칼리 소금",
        desc: "중금속과 미세플라스틱을 완전히 제거한 청결한 알칼리 소금으로 몸의 pH 균형을 잡습니다.",
      },
      {
        icon: Activity,
        title: "0.9% 생명의 기초 밸런스",
        desc: "인체 혈액과 동일한 0.9% 미네랄 농도로 세포의 항상성을 유지합니다.",
      },
    ]}
    activeCornerstones={["02", "04"]}
    forWho={[
      "일상에서 미네랄 보충이 필요한 분",
      "체내 pH 균형과 알칼리화를 원하는 분",
      "깨끗하고 건강한 소금으로 식생활을 바꾸고 싶은 분",
    ]}
    howToUse="요리 시 일반 소금 대신 동량으로 사용하세요. 나트륨 일일 권장량 이내로 섭취하며, 음식 완성 후 첨가하면 미네랄 활성을 유지할 수 있습니다."
  />
);

export default BetterSalt;
