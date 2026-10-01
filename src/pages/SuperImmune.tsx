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
  tags: [],
  unitPrice: 160000,
  freeShippingThreshold: 0,
  shippingFee: 0,
  origin: "미국",
  manufacturer: "라이벌 랩스",
};

const SuperImmune = () => (
  <ProductPage
    product={product}
    tagline="출시 준비 중입니다."
    features={[]}
    activeCornerstones={["01", "02"]}
    forWho={[
      "환절기마다 컨디션 관리가 신경 쓰이는 분",
      "장 건강과 피부 건강을 함께 챙기고 싶은 분",
      "부모님께 드릴 제품을 직접 확인하고 고르는 분",
    ]}
    howToUse="1일 2회, 1회 1캡슐을 물과 함께 섭취하십시오."
    legalDisclosure={{
      ingredients: "",
      cautions: [
        "알로에·효모 등 원료에 알레르기가 있으신 분은 섭취하지 마십시오.",
        "질병 치료 중이거나 약물을 복용 중이신 분은 의사와 상의하십시오.",
      ],
    }}
    comingSoon
  />
);

export default SuperImmune;
