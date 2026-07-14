import { useState } from "react";
import { ShoppingCart, Zap } from "lucide-react";

const UNIT_PRICE = 27000;
const FREE_SHIPPING_THRESHOLD = 45000;
const SHIPPING_FEE = 3000;
const PURCHASE_URL = "https://youthreset.kr/product/?idx=5";

const PurchaseSection = () => {
  const [qty, setQty] = useState(1);

  const productTotal = UNIT_PRICE * qty;
  const shipping = productTotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const finalTotal = productTotal + shipping;

  return (
    <div className="border rounded-2xl shadow-md px-6 py-8 bg-white">

      {/* 상품명 */}
      <p className="text-xs text-muted-foreground mb-1 font-medium tracking-wide">청춘리셋</p>
      <h2 className="text-lg font-bold text-foreground leading-snug mb-3">
        슈퍼지클린 <span className="whitespace-nowrap">SUPER G.CLEAN</span>
      </h2>

      {/* 특징 태그 */}
      <div className="flex flex-wrap gap-2 mb-5">
        {["900일 자연배양 생효소", "장 상태 개선", "2시간의 마법"].map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 가격 */}
      <div className="flex items-baseline gap-2 mb-5">
        <span className="text-xs text-muted-foreground">판매가</span>
        <span className="text-3xl font-bold text-foreground">
          {UNIT_PRICE.toLocaleString()}
        </span>
        <span className="text-lg font-semibold text-foreground">원</span>
      </div>

      <hr className="mb-4" />

      {/* 배송 / 제조사 정보 */}
      <div className="space-y-2.5 text-sm mb-5">
        <div className="flex justify-between items-start">
          <span className="text-muted-foreground shrink-0">배송비</span>
          <span className="text-right font-medium">
            {productTotal >= FREE_SHIPPING_THRESHOLD ? (
              <span className="text-primary font-semibold">무료배송</span>
            ) : (
              <span>
                3,000원
                <span className="block text-xs text-muted-foreground font-normal">
                  {FREE_SHIPPING_THRESHOLD.toLocaleString()}원 이상 무료
                </span>
              </span>
            )}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground shrink-0">원산지</span>
          <span className="text-right">국산 / (주)효소세상</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground shrink-0">결제</span>
          <span>선결제 · 착불</span>
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
        <span className="text-sm font-medium text-muted-foreground">총 결제금액</span>
        <div className="text-right">
          <span className="text-2xl font-bold text-foreground">
            {finalTotal.toLocaleString()}원
          </span>
          {shipping === 0 && (
            <span className="block text-xs text-primary font-medium">배송비 무료</span>
          )}
        </div>
      </div>

      {/* 구매 버튼 */}
      <div className="space-y-2.5">
        <a
          href={PURCHASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary text-primary-foreground py-3.5 text-sm font-bold hover:brightness-90 transition-all"
        >
          <Zap size={16} />
          바로 구매하기
        </a>
        <a
          href={PURCHASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full rounded-xl border border-primary text-primary py-3.5 text-sm font-semibold hover:bg-primary/5 transition-all"
        >
          <ShoppingCart size={16} />
          장바구니 담기
        </a>
        <a
          href={PURCHASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full rounded-xl text-white py-3.5 text-sm font-bold hover:brightness-90 transition-all"
          style={{ backgroundColor: "#03c75a" }}
        >
          <span className="font-extrabold text-base leading-none">N</span>
          네이버페이 구매
        </a>
      </div>

      <p className="mt-5 text-xs text-muted-foreground text-center">
        도서산간 지역은 추가 배송비가 발생할 수 있습니다.
      </p>
    </div>
  );
};

export default PurchaseSection;
