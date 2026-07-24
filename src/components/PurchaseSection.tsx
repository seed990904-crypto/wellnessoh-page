import { useState } from "react";
import { ShoppingCart, Zap, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { buyNowWithCafe24 } from "@/lib/cafe24";

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
}

const PurchaseSection = ({ product }: { product: ProductConfig }) => {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart, openCart } = useCart();

  const productTotal = product.unitPrice * qty;
  const isFree = product.freeShippingThreshold === 0 || productTotal >= product.freeShippingThreshold;
  const shipping = isFree ? 0 : product.shippingFee;
  const finalTotal = productTotal + shipping;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      cafe24ProductNo: product.cafe24ProductNo,
      name: product.name,
      engName: product.engName,
      brand: product.brand,
      price: product.unitPrice,
      image: product.image,
      qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    openCart();
  };

  return (
    <div className="border rounded-2xl shadow-md px-6 py-8 bg-white">

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
      <div className="flex items-baseline gap-2 mb-5">
        <span className="text-xs text-muted-foreground">판매가</span>
        <span className="text-3xl font-bold text-foreground">
          {product.unitPrice.toLocaleString()}
        </span>
        <span className="text-lg font-semibold text-foreground">원</span>
      </div>

      <hr className="mb-4" />

      {/* 배송 / 제조사 정보 */}
      <div className="space-y-2.5 text-sm mb-5">
        <div className="flex justify-between items-start">
          <span className="text-muted-foreground shrink-0">배송비</span>
          <span className="text-right font-medium">
            {product.freeShippingThreshold === 0 ? (
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
        <button
          onClick={() => product.cafe24ProductNo && buyNowWithCafe24(product.cafe24ProductNo, qty)}
          disabled={!product.cafe24ProductNo}
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary text-primary-foreground py-3.5 text-sm font-bold hover:brightness-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <Zap size={16} />
          {product.cafe24ProductNo ? "바로 구매하기" : "스토어 등록 준비 중"}
        </button>

        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center gap-2 w-full rounded-xl border border-primary text-primary py-3.5 text-sm font-semibold hover:bg-primary/5 transition-all"
        >
          {added ? (
            <>
              <Check size={16} className="text-primary" />
              장바구니에 담겼습니다
            </>
          ) : (
            <>
              <ShoppingCart size={16} />
              장바구니 담기
            </>
          )}
        </button>
      </div>

      <p className="mt-5 text-xs text-muted-foreground text-center">
        도서산간 지역은 추가 배송비가 발생할 수 있습니다.
      </p>
    </div>
  );
};

export default PurchaseSection;
