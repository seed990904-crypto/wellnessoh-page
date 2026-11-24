export interface SubscriptionPlan {
  months: number;
  discountPercent: number;
  label: string;
  badge?: string;
}

export const DEFAULT_SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  { months: 1, discountPercent: 10, label: "1개월 플랜" },
  { months: 3, discountPercent: 17, label: "3개월 플랜", badge: "인기" },
  { months: 6, discountPercent: 25, label: "6개월 플랜", badge: "최대 할인" },
];
