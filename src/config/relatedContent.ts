/**
 * 블로그 ↔ 제품 상호 연결 매핑.
 * 슬러그는 실제 WordPress 포스트 슬러그로 채워주세요.
 * 코너스톤(C1~C4) 같은 유형끼리 우선 연결.
 */

// 블로그 글 → 관련 제품 (BlogPost.tsx 에서 사용)
export const blogToProducts: Record<string, string[]> = {
  // 예시 — 실제 글 슬러그로 교체하세요 (C1: 면역/당사슬 계열)
  "acemannan-glycan-immunity": ["super-immune", "super-greens"],
};

// 제품 → 관련 블로그 글 (ProductPage.tsx 에서 사용)
export const productToPosts: Record<string, string[]> = {
  // 예시 — 실제 글 슬러그로 교체하세요 (C1: super-immune)
  "super-immune": ["acemannan-glycan-immunity"],
};
