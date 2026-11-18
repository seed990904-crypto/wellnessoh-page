import { useEffect, useState } from "react";
import { X } from "lucide-react";

const BF_URL = "https://smartstore.naver.com/call2life";
const SESSION_KEY = "black-friday-2026-popup-closed";

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
      style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div
        className="relative overflow-hidden rounded-3xl shadow-2xl"
        style={{ maxWidth: 340, width: "100%" }}
      >
        {/* 닫기 */}
        <button
          onClick={close}
          className="absolute top-3.5 right-3.5 z-20 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors"
          aria-label="닫기"
        >
          <X className="w-3.5 h-3.5 text-white" />
        </button>

        {/* 이미지 — 제품 사진 아래에서 크롭 */}
        <div style={{ height: 420, overflow: "hidden", position: "relative" }}>
          <img
            src="/black-friday-2026.png"
            alt="Black Friday 2026 최대 33% 할인"
            style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "top" }}
          />

          {/* CTA 오버레이 */}
          <div
            className="absolute bottom-0 left-0 right-0 px-5 pb-5"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 60%, transparent)" }}
          >
            <a
              href={BF_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="block w-full text-center rounded-full text-sm font-bold py-3.5 mb-3 transition-all duration-200 hover:scale-[1.02] active:scale-100"
              style={{
                background: "linear-gradient(135deg, #1a1aff 0%, #4d4dff 50%, #1a1aff 100%)",
                color: "#ffffff",
                boxShadow: "0 4px 20px rgba(100,100,255,0.45)",
              }}
            >
              블랙프라이데이 혜택 보기 →
            </a>
            <button
              onClick={close}
              className="block w-full text-center text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              오늘은 닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
