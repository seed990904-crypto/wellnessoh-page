import { useEffect } from "react";
import { Instagram } from "lucide-react";

const reels = [
  "https://www.instagram.com/reel/Deq5X2mB-SI/",
  "https://www.instagram.com/reel/DWi0lRtAY5c/",
  "https://www.instagram.com/reel/DebtKp6B1WK/",
  "https://www.instagram.com/reel/DegnRdbBiEH/",
  "https://www.instagram.com/reel/DeZGzs-BrvQ/",
  "https://www.instagram.com/reel/Dd0_KOhygck/",
  "https://www.instagram.com/reel/DdqxfXhBGne/",
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const ZOOM        = 0.65;
const EMBED_W     = 326;
const HEADER_PX   = 110;   // 헤더 원본 높이 (프로필 + 음악 행)

// 표시 크기 계산
const embedDisplayW = Math.round(EMBED_W * ZOOM);   // 212px
const CARD_W        = 196;                           // 컨테이너 너비 (좌우 각 8px 클립)
const CARD_H        = 300;                           // 컨테이너 높이
const sideShift     = -Math.round((embedDisplayW - CARD_W) / 2); // -8px (수평 센터링)

const ReelsSection = () => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    const existing = document.getElementById("instagram-embed-script");
    if (existing) return;
    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const headerClip = Math.round(HEADER_PX * ZOOM); // 71px

  return (
    <section className="bg-foreground py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* 섹션 헤더 */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-mono tracking-[0.22em] text-background/30 uppercase mb-3">
              Instagram Reels
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-background leading-tight">
              웰니스 현장을 있는 그대로 짧게 담았습니다.
            </h2>
          </div>
          <a
            href="https://www.instagram.com/wellness_architect.oh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-background/40 hover:text-background transition-colors shrink-0"
          >
            <Instagram className="w-4 h-4" />
            @wellness_architect.oh
          </a>
        </div>

        {/* 릴스 가로 스크롤 */}
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:-mx-12 md:px-12">
          {reels.map((url) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 snap-start block group"
              style={{ width: `${CARD_W}px` }}
            >
              <div
                style={{
                  width: `${CARD_W}px`,
                  height: `${CARD_H}px`,
                  overflow: "hidden",
                  borderRadius: "14px",
                  position: "relative",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                className="group-hover:scale-[1.03] group-hover:shadow-2xl"
              >
                {/* 사방 균일 클립: 상단 헤더 제거 + 좌우 센터링 */}
                <div style={{
                  marginTop: `-${headerClip}px`,
                  marginLeft: `${sideShift}px`,
                }}>
                  <div style={{ zoom: ZOOM }}>
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink={url}
                      data-instgrm-version="14"
                      style={{
                        background: "#111",
                        border: 0,
                        borderRadius: 0,
                        boxShadow: "none",
                        margin: 0,
                        padding: 0,
                        width: `${EMBED_W}px`,
                        minWidth: `${EMBED_W}px`,
                        maxWidth: `${EMBED_W}px`,
                      }}
                    />
                  </div>
                </div>

                {/* 하단 그라디언트 + 계정명 */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0, left: 0, right: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                    padding: "36px 10px 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    pointerEvents: "none",
                  }}
                >
                  <Instagram size={10} color="rgba(255,255,255,0.65)" />
                  <span style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                  }}>
                    @wellness_architect.oh
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReelsSection;
