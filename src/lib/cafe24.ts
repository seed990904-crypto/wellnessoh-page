const MALL_ID = import.meta.env.VITE_CAFE24_MALL_ID as string;

function productUrl(productNo: number) {
  return `https://${MALL_ID}.cafe24.com/product/detail.html?product_no=${productNo}`;
}

export function buyNowWithCafe24(productNo: number, qty = 1) {
  if (!MALL_ID) return;
  void qty;
  window.open(productUrl(productNo), '_blank');
}
