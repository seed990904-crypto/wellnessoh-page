import { CartItem } from "@/context/CartContext";

const MALL_ID = import.meta.env.VITE_CAFE24_MALL_ID as string;

// 장바구니 → 카페24 결제 페이지로 이동
export function checkoutWithCafe24(items: CartItem[]) {
  const validItems = items.filter((i) => i.cafe24ProductNo);
  if (!MALL_ID || validItems.length === 0) return;

  if (validItems.length === 1) {
    const item = validItems[0];
    window.location.href =
      `https://${MALL_ID}.cafe24.com/product/detail.html?product_no=${item.cafe24ProductNo}`;
  } else {
    const first = validItems[0];
    const others = validItems.slice(1).map((i) => i.name).join(", ");
    const confirmed = window.confirm(
      `카페24는 한 번에 한 상품씩 결제합니다.\n` +
      `먼저 [${first.name}]을 결제 페이지로 이동합니다.\n` +
      (others ? `나머지 상품(${others})은 이후 별도 구매해주세요.` : "")
    );
    if (!confirmed) return;
    window.location.href =
      `https://${MALL_ID}.cafe24.com/product/detail.html?product_no=${first.cafe24ProductNo}`;
  }
}

// 바로구매 (단일 상품, 상품 페이지에서 사용)
export function buyNowWithCafe24(productNo: number, qty = 1) {
  if (!MALL_ID) return;
  window.location.href =
    `https://${MALL_ID}.cafe24.com/product/detail.html?product_no=${productNo}`;
}
