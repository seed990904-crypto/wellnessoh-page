import { RotateCcw, Clock, FlaskConical } from "lucide-react";
import ProductPage from "@/components/ProductPage";
import { ProductConfig } from "@/components/PurchaseSection";
import productImg from "@/assets/product-super-zyme.jpg";

const product: ProductConfig = {
  id: "super-zyme",
  // cafe24ProductNo: 미등록 — 카페24 등록 후 숫자 입력
  image: productImg,
  brand: "청춘리셋",
  name: "슈퍼자임",
  engName: "SUPER ZYME",
  tags: ["간헐적 단식 효율", "오토파지 촉진", "17가지 천연 초본"],
  unitPrice: 75000,
  freeShippingThreshold: 0,
  shippingFee: 0,
  origin: "미국",
  manufacturer: "텐액스랩스",
};

const SuperZyme = () => (
  <ProductPage
    product={product}
    tagline="오토파지를 깨우는 마이크로바이옴 발효 솔루션. 청춘을 되찾는 세포 자가청소 프로그램."
    features={[
      {
        icon: RotateCcw,
        title: "오토파지(Autophagy) 촉진",
        desc: "세포 자가청소 기전인 오토파지를 활성화하여 노화된 세포를 갱신합니다.",
      },
      {
        icon: Clock,
        title: "간헐적 단식 효율 극대화",
        desc: "단식 중 영양 공백을 채우며 단식의 효과를 최대한 끌어냅니다.",
      },
      {
        icon: FlaskConical,
        title: "17가지 천연 초본 발효 솔루션",
        desc: "자연에서 엄선한 17가지 초본 식물을 발효해 마이크로바이옴을 최적화합니다.",
      },
    ]}
    activeCornerstones={["03", "04"]}
    forWho={[
      "간헐적 단식을 실천하거나 시작하려는 분",
      "세포 자가청소(오토파지) 효율을 높이고 싶은 분",
      "장내 마이크로바이옴을 최적화하고 싶은 분",
    ]}
    howToUse="하루 2캡슐, 단식 기간 중 또는 식전에 물과 함께 섭취하세요. 간헐적 단식과 병행 시 효과가 배가됩니다."
    legalDisclosure={{
      ingredients:
        "17종 천연 초본 발효 복합물(미국산), 브로멜라인, 파파인, 유산균(Bacillus coagulans), 이산화규소, 식물성 캡슐 — 예시 표시이며 실제 전성분·함량은 포장 라벨을 참조하세요.",
      cautions: [
        "파인애플·파파야 알레르기가 있는 분은 섭취 전 주의하세요 (브로멜라인·파파인 함유).",
        "처음 섭취 시 소화기 반응이 있을 수 있으므로 소량부터 시작하세요.",
        "임산부, 수유부는 섭취 전 전문의와 상담하세요.",
        "의약품을 복용 중인 경우 전문가와 상담 후 섭취하세요.",
      ],
    }}
  />
);

export default SuperZyme;
