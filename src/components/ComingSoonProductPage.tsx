import { useEffect } from "react";
import { Bell } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export interface ComingSoonProductConfig {
  slug: string;
  name: string;
  engName: string;
  brand: string;
  tagline: string;
  teaser: string[];
  activeCornerstones: string[];
  /** Tally 폼 URL — 준비되면 입력. 없으면 placeholder 표시. */
  tallyUrl?: string;
}

const ComingSoonProductPage = ({ product }: { product: ComingSoonProductConfig }) => {
  useSEO({
    title: `${product.name} (출시 예정) — ${product.engName}`,
    description: product.tagline,
    url: `/products/${product.slug}`,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main style={{ paddingTop: "80px" }}>
        <div className="max-w-[760px] mx-auto px-4 md:px-8 py-16">

          {/* 뱃지 */}
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground bg-muted/60 rounded-full px-3 py-1 mb-6">
            Coming Soon
          </span>

          {/* 헤더 */}
          <p className="text-xs text-muted-foreground font-medium tracking-wide mb-1">{product.brand}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 leading-tight">
            {product.name}
          </h1>
          <p className="text-base text-muted-foreground font-medium mb-2">{product.engName}</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-lg">
            {product.tagline}
          </p>

          {/* 예정 내용 */}
          <div className="bg-muted/20 rounded-2xl border border-border/40 p-6 mb-12">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              이런 솔루션을 준비하고 있습니다
            </p>
            <ul className="space-y-3">
              {product.teaser.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground leading-relaxed">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] font-bold mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 출시 알림 신청 — Tally 자리 */}
          <section className="border border-dashed border-border rounded-2xl p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Bell className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-base font-bold text-foreground mb-2">출시 알림 신청</h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-sm mx-auto">
              출시 소식을 가장 먼저 받아보세요. 신청자에게는 얼리버드 혜택을 제공할 예정입니다.
            </p>

            {product.tallyUrl ? (
              /* Tally 폼 embed — iframe 방식 */
              <iframe
                src={product.tallyUrl}
                width="100%"
                height="320"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title={`${product.name} 출시 알림 신청`}
                className="rounded-xl"
              />
            ) : (
              /* Tally URL 미설정 시 placeholder */
              <div className="bg-muted/30 rounded-xl px-6 py-8 text-center">
                <p className="text-xs text-muted-foreground mb-3">
                  [Tally 폼 자리 — <code className="bg-muted px-1 rounded text-[10px]">tallyUrl</code> prop에 Tally 임베드 URL을 입력하면 폼이 표시됩니다]
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
                >
                  <Bell size={15} />
                  임시: 문의로 알림 신청
                </a>
              </div>
            )}
          </section>

          {/* 법정 고지 */}
          <p className="mt-10 text-xs text-muted-foreground text-center leading-relaxed">
            ※ 이 제품은 현재 개발 단계이며, 출시 전 구성·성분·가격은 변경될 수 있습니다.<br />
            건강기능식품 법정 표시사항은 출시 시 제품 페이지에 게재됩니다.
          </p>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoonProductPage;
