// 블로그 글 → 관련 제품 (BlogPost.tsx 에서 사용)
// C1 면역 → super-immune
// C2 항산화·영양 → super-greens
// C3 장뇌축 → super-gclean (+ super-zyme)
// C4 대사 → super-zyme (+ super-gclean)
export const blogToProducts: Record<string, string[]> = {
  // ── C1 면역 ──────────────────────────────────────
  "acemannan":                    ["super-immune"],
  "acemannan-quality-guide":      ["super-immune"],
  "acemannan-vs-betaglucan":      ["super-immune"],
  "nk-cell-immune-routine":       ["super-immune"],
  "glycan-antenna":               ["super-immune"],
  "food-additives-immunity":      ["super-immune"],

  // ── C2 항산화·영양 ───────────────────────────────
  "synthetic-vs-natural-vitamin": ["super-greens"],
  "polyphenol-foods":             ["super-greens"],
  "mitochondria-nutrition":       ["super-greens"],
  "protein-nutrient-density":     ["super-greens"],
  "complete-protein-micronutrients": ["super-greens"],

  // ── C3 장뇌축 ────────────────────────────────────
  "gut-brain-axis":               ["super-gclean"],
  "scfa-gut-health":              ["super-gclean"],
  "dementia-family-immune-diet":  ["super-gclean"],
  "emulsifier-gut-barrier":       ["super-gclean"],
  "brain-fog-gut-axis":           ["super-gclean"],
  "glyphosate-microbiome":        ["super-gclean"],
  "microbiome-beginner-guide":    ["super-gclean"],
  "child-gut-window":             ["super-gclean"],
  "children-not-little-adults":   ["super-gclean"],
  "gluten-gliadin-gut":           ["super-gclean", "super-zyme"],
  "family-table-reset":           ["super-gclean"],
  "atopy-gut-skin":               ["super-gclean"],

  // ── C4 대사 ──────────────────────────────────────
  "refined-sugar-blood-glucose":  ["super-zyme"],
  "autophagy-routine":            ["super-zyme"],
  "intermittent-fasting-guide":   ["super-zyme", "super-gclean"],
  "coq10-carnitine-metabolism":   ["super-zyme"],
  "hormone-metabolic-reset":      ["super-zyme"],

  // ── 앵커 (전체 개요) ─────────────────────────────
  "4-cornerstones-wellness":      [],
  "youth-reset-masterplan":       [],
};

// 제품 → 관련 블로그 글 (ProductPage.tsx 에서 사용, 최대 3개 추천)
export const productToPosts: Record<string, string[]> = {
  "super-immune": [
    "acemannan",
    "glycan-antenna",
    "nk-cell-immune-routine",
  ],
  "super-greens": [
    "mitochondria-nutrition",
    "protein-nutrient-density",
    "polyphenol-foods",
  ],
  "super-gclean": [
    "gut-brain-axis",
    "emulsifier-gut-barrier",
    "microbiome-beginner-guide",
  ],
  "super-zyme": [
    "intermittent-fasting-guide",
    "autophagy-routine",
    "refined-sugar-blood-glucose",
  ],
  "better-salt": [],
};
