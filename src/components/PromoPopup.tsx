import { useEffect, useState } from "react";
import { X } from "lucide-react";

const LANDING_URL = "https://superimmune-premier.vercel.app/go/";
const SESSION_KEY = "superimmune-popup-closed";
const DEADLINE = "11.11(수) 밤 11시 59분";

const PromoPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div
        className="relative w-full overflow-hidden rounded-3xl shadow-2xl bg-white"
        style={{ maxWidth: 340 }}
      >
        {/* 닫기 */}
        <button
          onClick={close}
          className="absolute top-3.5 right-3.5 z-20 w-7 h-7 rounded-full bg-black/25 backdrop-blur-sm flex items-center justify-center hover:bg-black/40 transition-colors"
          aria-label="닫기"
        >
          <X className="w-3.5 h-3.5 text-white" />
        </button>

        {/* 상단 영상 영역 */}
        <div className="relative overflow-hidden" style={{ height: 220 }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.75) blur(1px)", transform: "scale(1.05)" }}
          >
            <source src="/super-immune-promo.mp4" type="video/mp4" />
          </video>
          {/* 하단 그라디언트만 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          {/* 배지 + 타이틀 */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              <span className="text-[9px] font-mono tracking-[0.3em] text-white/70 uppercase">
                Early Bird Event
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white leading-tight tracking-tight">
              슈퍼이뮨<br />
              <span className="text-lg font-medium text-white/80">얼리버드 마감 임박</span>
            </h2>
          </div>
        </div>

        {/* 하단 콘텐츠 — 밝은 배경 */}
        <div className="bg-white px-5 pt-5 pb-5">

          {/* 마감 배너 */}
          <div className="flex items-center justify-between bg-red-50 border border-red-100 rounded-xl px-4 py-2.5 mb-4">
            <span className="text-xs text-red-600 font-semibold">⏰ 마감</span>
            <span className="text-xs font-bold text-red-700">{DEADLINE}</span>
          </div>

          {/* 핵심 혜택 */}
          <div className="mb-5">
            {/* 할인율 강조 */}
            <div className="flex items-baseline gap-1.5 mb-3">
              <span className="text-4xl font-black text-foreground">33%</span>
              <span className="text-base font-semibold text-muted-foreground">할인 적용</span>
            </div>

            {/* 증정 혜택 */}
            <div className="space-y-2">
              {[
                "슈퍼지클린 무료 증정",
                "베러솔트 30포 무료 증정",
                "보틀 무료 증정 (9만원 상당)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-primary font-bold text-sm">+</span>
                  <span className="text-sm text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={LANDING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="block w-full text-center rounded-full text-sm font-bold py-3.5 mb-3 transition-all duration-200 hover:scale-[1.02] active:scale-100"
            style={{
              background: "linear-gradient(135deg, #b8860b 0%, #f0c040 50%, #b8860b 100%)",
              color: "#1a0f00",
              boxShadow: "0 4px 20px rgba(240,192,64,0.35)",
            }}
          >
            얼리버드 혜택 보기 →
          </a>
          <button
            onClick={close}
            className="block w-full text-center text-xs text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors"
          >
            오늘은 닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
