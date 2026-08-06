export const MALL_BASE = "https://call2life2026.cafe24.com";

export type ProductSlug =
  | "super-gclean"
  | "super-immune"
  | "super-greens"
  | "super-zyme"
  | "better-salt"
  | "super-longe-vita"
  | "core-routine";

/** 슬러그 → cafe24 product_no 매핑.
 *  ""            = 아직 미등록 (BuyButton이 아무것도 렌더하지 않음)
 *  "COMING_SOON" = 출시 예정 배지 표시
 *  숫자 문자열   = 실제 상품 페이지로 링크
 */
export const PRODUCT_NO: Record<ProductSlug, string> = {
  "super-gclean":     "11",
  "super-immune":     "",
  "super-greens":     "",
  "super-zyme":       "",
  "better-salt":      "",
  "super-longe-vita": "COMING_SOON",
  "core-routine":     "COMING_SOON",
};

export function mallProductUrl(productNo: string): string {
  return `${MALL_BASE}/product/detail.html?product_no=${productNo}`;
}
