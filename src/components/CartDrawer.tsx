import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { checkoutWithCafe24 } from "@/lib/cafe24";

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeFromCart, updateQty, totalPrice, shippingFee } = useCart();
  const finalTotal = totalPrice + shippingFee;

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent side="right" className="w-full sm:w-[420px] flex flex-col p-0">
        {/* Header */}
        <SheetHeader className="px-6 py-5 border-b">
          <SheetTitle className="flex items-center gap-2 text-base font-bold">
            <ShoppingBag className="w-5 h-5 text-primary" />
            장바구니
            {items.length > 0 && (
              <span className="text-xs font-normal text-muted-foreground">
                ({items.length}종)
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-6">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <ShoppingBag className="w-7 h-7 text-muted-foreground/40" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">장바구니가 비어있습니다</p>
                <p className="text-sm text-muted-foreground">제품을 담아보세요</p>
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 px-6 py-5">
                  {/* Image */}
                  <div className="w-20 h-20 rounded-xl bg-muted/40 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-muted-foreground mb-0.5">{item.brand}</p>
                    <p className="text-sm font-semibold text-foreground leading-snug mb-1">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground/60 font-mono mb-3">
                      {item.engName}
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Qty controls */}
                      <div className="flex items-center border border-border rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-semibold border-x border-border h-7 flex items-center justify-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-foreground">
                          {(item.price * item.qty).toLocaleString()}원
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 text-muted-foreground/40 hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer — 합계 + 결제 */}
        {items.length > 0 && (
          <div className="border-t bg-background px-6 py-6 space-y-4">
            {/* 가격 요약 */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>상품 합계</span>
                <span>{totalPrice.toLocaleString()}원</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>배송비</span>
                <span>
                  {shippingFee === 0 ? (
                    <span className="text-primary font-medium">무료</span>
                  ) : (
                    `${shippingFee.toLocaleString()}원`
                  )}
                </span>
              </div>
              {shippingFee > 0 && (
                <p className="text-xs text-muted-foreground/60">
                  45,000원 이상 구매 시 무료배송
                </p>
              )}
            </div>

            <div className="flex justify-between items-center pt-3 border-t">
              <span className="font-semibold text-foreground">총 결제금액</span>
              <div className="text-right">
                <span className="text-xl font-bold text-foreground">
                  {finalTotal.toLocaleString()}원
                </span>
              </div>
            </div>

            {/* 미등록 상품 안내 */}
            {items.some((i) => !i.cafe24ProductNo) && (
              <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2.5 leading-relaxed">
                일부 상품이 아직 스토어에 등록되지 않았습니다.{" "}
                <span className="font-semibold">슈퍼지클린</span>만 현재 결제 가능합니다.
              </p>
            )}

            {/* 결제 버튼 */}
            <button
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl py-4 text-sm font-bold hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              onClick={() => checkoutWithCafe24(items)}
              disabled={items.every((i) => !i.cafe24ProductNo)}
            >
              결제하기 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
