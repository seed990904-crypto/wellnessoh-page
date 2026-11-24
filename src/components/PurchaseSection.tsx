import { useState } from "react";
import { Zap, RefreshCw, Check } from "lucide-react";
import { buyNowWithCafe24 } from "@/lib/cafe24";
import { DEFAULT_SUBSCRIPTION_PLANS, type SubscriptionPlan } from "@/config/subscriptionPlans";

export type { SubscriptionPlan };

export interface ProductConfig {
  id: string;
  cafe24ProductNo?: number;
  brand: string;
  name: string;
  engName: string;
  image: string;
  tags: string[];
  unitPrice: number;
  freeShippingThreshold: number;
  shippingFee: number;
  origin: string;
  manufacturer: string;
  subscriptionPlans?: SubscriptionPlan[];
}

const PurchaseSection = ({ product }: { product: ProductConfig }) => {
  const plans = product.subscriptionPlans ?? DEFAULT_SUBSCRIPTION_PLANS;
  const hasSubscription = plans.length > 0;
  const defaultPlan = plans.find(p => p.badge === "인기") ?? plans[0];

  const [qty, setQty] = useState(1);
  const [purchaseType, setPurchaseType] = useState<"once" | "subscribe">("once");
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan>(defaultPlan);

  const unitPrice =
    purchaseType === "subscribe"
      ? Math.floor(product.unitPrice * (1 - selectedPlan.discountPercent / 100))
      : product.unitPrice;

  const productTotal = unitPrice * qty;
  const isFree =
    purchaseType === "subscribe" ||
    product.freeShippingThreshold === 0 ||
    productTotal >= product.freeShippingThreshold;
  const shipping = isFree ? 0 : product.shippingFee;
  const finalTotal = productTotal + shipping;

  return (
    <div className="border rounded-2xl shadow-md px-6 py-8 bg-white">

      {/* 구매 방식 토글 */}
      {hasSubscription && (
        <div className="flex rounded-xl border border-border overflow-hidden mb-5">
          <button
            onClick={() => setPurchaseType("once")}
            className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
              purchaseType === "once"
                ? "bg-foreground text-background"
                : "bg-background text-muted-foreground hover:bg-muted"
            }`}
          >
            1회 구매
          </button>
          <button
            onClick={() => setPurchaseType("subscribe")}
            className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
              purchaseType === "subscribe"
                ? "bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground hover:bg-muted"
            }`}
          >
            정기구독
            <span className={`ml-1 text-xs font-bold ${purchaseType === "subscribe" ? "text-primary-foreground/70" : "text-primary"}`}>
              최대 {Math.max(...plans.map(p => p.discountPercent))}% 할인
            </span>
          </button>
        </div>
      )}

      {/* 정기구독 플랜 선택 */}
      {purchaseType === "subscribe" && (
        <div className="space-y-2 mb-5">
          {plans.map((plan) => {
            const planPrice = Math.floor(product.unitPrice * (1 - plan.discountPercent / 100));
            const saving = product.unitPrice - planPrice;
            const isSelected = selectedPlan.months === plan.months;
            return (
              <button
                key={plan.months}
                onClick={() => setSelectedPlan(plan)}
                className={`w-full flex items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${
                  isSelected
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border hover:bg-muted/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    isSelected ? "border-primary" : "border-muted-foreground/30"
                  }`}>
                    {isSelected && <div className="w-2 h-2 rounded-full bg-primary" />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-tight">{plan.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      월 {planPrice.toLocaleString()}원 · 월 {saving.toLocaleString()}원 절약
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
                  {plan.badge && (
                    <span className="text-[10px] font-bold text-primary bg-primary/10 rounded-full px-2 py-0.5">
                      {plan.badge}
                    </span>
                  )}
                  <span className={`text-sm font-bold ${isSelected ? "text-primary" : "text-muted-foreground"}`}>
                    -{plan.discountPercent}%
                  </span>
                </div>
              </button>
            );
          })}

          {/* 구독 혜택 */}
          <div className="rounded-xl bg-muted/40 px-4 py-3 mt-1">
            <ul className="space-y-1">
              {["매달 자동 배송 · 무료배송", "언제든지 플랜 변경·해지 가능", "정기결제는 신용카드만 가능"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check size={11} className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 상품명 */}
      <p className="text-xs text-muted-foreground mb-1 font-medium tracking-wide">
        {product.brand}
      </p>
      <h2 className="text-lg font-bold text-foreground leading-snug mb-3">
        {product.name} <span className="whitespace-nowrap">{product.engName}</span>
      </h2>

      {/* 특징 태그 */}
      <div className="flex flex-wrap gap-2 mb-5">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 가격 */}
      {purchaseType === "subscribe" && (
        <p className="text-sm text-muted-foreground line-through mb-0.5">
          {product.unitPrice.toLocaleString()}원
        </p>
      )}
      <div className="flex items-baseline gap-2 mb-5">
        <span className="text-xs text-muted-foreground">
          {purchaseType === "subscribe" ? `구독가 (${selectedPlan.label})` : "판매가"}
        </span>
        <span className={`text-3xl font-bold ${purchaseType === "subscribe" ? "text-primary" : "text-foreground"}`}>
          {unitPrice.toLocaleString()}
        </span>
        <span className="text-lg font-semibold text-foreground">원</span>
        {purchaseType === "subscribe" && (
          <span className="text-xs font-bold text-primary bg-primary/10 rounded-full px-2 py-0.5">
            -{selectedPlan.discountPercent}%
          </span>
        )}
      </div>

      <hr className="mb-4" />

      {/* 배송 / 제조사 정보 */}
      <div className="space-y-2.5 text-sm mb-5">
        <div className="flex justify-between items-start">
          <span className="text-muted-foreground shrink-0">배송비</span>
          <span className="text-right font-medium">
            {purchaseType === "subscribe" || product.freeShippingThreshold === 0 ? (
              <span className="text-primary font-semibold">무료배송</span>
            ) : productTotal >= product.freeShippingThreshold ? (
              <span className="text-primary font-semibold">무료배송</span>
            ) : (
              <span>
                {product.shippingFee.toLocaleString()}원
                <span className="block text-xs text-muted-foreground font-normal">
                  {product.freeShippingThreshold.toLocaleString()}원 이상 무료
                </span>
              </span>
            )}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground shrink-0">원산지</span>
          <span className="text-right">{product.origin} / {product.manufacturer}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground shrink-0">결제</span>
          <span>{purchaseType === "subscribe" ? "정기결제 (카드)" : "선결제 · 착불"}</span>
        </div>
      </div>

      <hr className="mb-4" />

      {/* 수량 */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium">수량</span>
        <div className="flex items-center gap-0 border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-9 h-9 flex items-center justify-center text-lg font-medium hover:bg-muted transition-colors"
          >
            −
          </button>
          <span className="w-10 text-center text-sm font-semibold border-x border-border h-9 flex items-center justify-center">
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="w-9 h-9 flex items-center justify-center text-lg font-medium hover:bg-muted transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* 합계 */}
      <div className="flex justify-between items-center bg-muted/50 rounded-xl px-4 py-3 mb-6">
        <span className="text-sm font-medium text-muted-foreground">
          {purchaseType === "subscribe" ? "월 결제금액" : "총 결제금액"}
        </span>
        <div className="text-right">
          <span className={`text-2xl font-bold ${purchaseType === "subscribe" ? "text-primary" : "text-foreground"}`}>
            {finalTotal.toLocaleString()}원
          </span>
          <span className="block text-xs text-primary font-medium">배송비 무료</span>
        </div>
      </div>

      {/* 구매 버튼 */}
      {purchaseType === "subscribe" ? (
        <button
          onClick={() => product.cafe24ProductNo && buyNowWithCafe24(product.cafe24ProductNo, qty)}
          disabled={!product.cafe24ProductNo}
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary text-primary-foreground py-3.5 text-sm font-bold hover:brightness-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <RefreshCw size={16} />
          {product.cafe24ProductNo
            ? `${selectedPlan.months}개월 구독 신청 (${selectedPlan.discountPercent}% 할인)`
            : "정기구독 준비 중"}
        </button>
      ) : (
        <button
          onClick={() => product.cafe24ProductNo && buyNowWithCafe24(product.cafe24ProductNo, qty)}
          disabled={!product.cafe24ProductNo}
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary text-primary-foreground py-3.5 text-sm font-bold hover:brightness-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <Zap size={16} />
          {product.cafe24ProductNo ? "구매하기" : "스토어 등록 준비 중"}
        </button>
      )}

      <p className="mt-4 text-xs text-muted-foreground text-center leading-relaxed">
        {purchaseType === "subscribe"
          ? `카페24 주문서에서 배송주기·횟수를 선택 플랜에 맞게 설정해주세요.`
          : "도서산간 지역은 추가 배송비가 발생할 수 있습니다."}
      </p>
    </div>
  );
};

export default PurchaseSection;
