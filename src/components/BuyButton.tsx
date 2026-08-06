import { cn } from "@/lib/utils";
import { mallProductUrl, PRODUCT_NO, type ProductSlug } from "@/config/mall";

const sizeClass = {
  sm:      "h-9 px-3 text-sm",
  default: "h-10 px-4 py-2 text-sm",
  lg:      "h-11 px-8 text-base",
} as const;

interface BuyButtonProps {
  product: ProductSlug;
  size?: keyof typeof sizeClass;
  label?: string;
  className?: string;
}

export function BuyButton({
  product,
  size = "default",
  label = "구매하기",
  className,
}: BuyButtonProps) {
  const no = PRODUCT_NO[product];

  // 미등록 — 깨진 링크 방지
  if (!no) return null;

  // 출시 예정 배지
  if (no === "COMING_SOON") {
    return (
      <span
        aria-disabled="true"
        aria-label="출시 예정 제품"
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-sans font-semibold",
          "bg-muted text-muted-foreground cursor-not-allowed select-none",
          sizeClass[size],
          className,
        )}
      >
        출시 예정
      </span>
    );
  }

  // 구매 링크
  return (
    <a
      href={mallProductUrl(no)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — 카페24 쇼핑몰로 이동`}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-sans font-semibold",
        "bg-primary text-white",
        "hover:bg-primary/90 transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        "whitespace-nowrap",
        sizeClass[size],
        className,
      )}
    >
      {label}
    </a>
  );
}
