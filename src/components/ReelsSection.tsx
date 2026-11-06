import { Instagram, Play } from "lucide-react";

const reels = [
  { url: "https://www.instagram.com/reel/Deq5X2mB-SI/", label: "소금이 약이 됩니다" },
  { url: "https://www.instagram.com/reel/DWi0lRtAY5c/", label: "치매 어머니의 회복" },
  { url: "https://www.instagram.com/reel/DebtKp6B1WK/", label: "어르신과 밥심" },
  { url: "https://www.instagram.com/reel/DegnRdbBiEH/", label: "다리 힘이 뇌를 지킵니다" },
  { url: "https://www.instagram.com/reel/DeZGzs-BrvQ/", label: "약봉지를 열어보세요" },
  { url: "https://www.instagram.com/reel/Dd0_KOhygck/", label: "7cm가 1cm로" },
  { url: "https://www.instagram.com/reel/DdqxfXhBGne/", label: "면역 원료 4가지" },
];

// 카드마다 미묘하게 다른 그라디언트
const gradients = [
  "from-[#0d2b1a] via-[#122b1f] to-[#071a10]",
  "from-[#1a1a2e] via-[#16213e] to-[#0f0f1a]",
  "from-[#1a0d2b] via-[#1a1228] to-[#0d0714]",
  "from-[#0d1a2b] via-[#0f2033] to-[#071020]",
  "from-[#1a2b0d] via-[#1a2f10] to-[#0d1a07]",
  "from-[#2b1a0d] via-[#2a1e10] to-[#1a0d07]",
  "from-[#0d2b1a] via-[#102e1e] to-[#071a0f]",
];

const ReelsSection = () => {
  return (
    <section className="bg-foreground py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* 헤더 */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] font-mono tracking-[0.25em] text-white/30 uppercase mb-3">
              Instagram Reels
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              현장을 짧게 담았습니다.
            </h2>
          </div>
          <a
            href="https://www.instagram.com/wellness_architect.oh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs text-white/30 hover:text-white/70 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            @wellness_architect.oh
          </a>
        </div>

        {/* 릴스 가로 스크롤 */}
        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:-mx-12 md:px-12">
          {reels.map((reel, i) => (
            <a
              key={reel.url}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 snap-start group"
              style={{ width: 160 }}
            >
              {/* 9:16 카드 */}
              <div
                className={`relative bg-gradient-to-b ${gradients[i % gradients.length]} rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.03] group-hover:brightness-110`}
                style={{ width: 160, height: 285 }}
              >
                {/* 상단 노이즈 텍스처 느낌 */}
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* 상단 인스타그램 아이콘 */}
                <div className="absolute top-4 left-4">
                  <Instagram className="w-4 h-4 text-white/40" />
                </div>

                {/* 릴스 번호 */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-white/20 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* 중앙 플레이 버튼 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 group-hover:bg-white/20 group-hover:scale-110">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>

                {/* 하단 그라디언트 + 라벨 */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pt-16 pb-4 px-4">
                  <p className="text-white/80 text-[11px] font-medium leading-tight line-clamp-2">
                    {reel.label}
                  </p>
                  <p className="text-white/30 text-[9px] mt-1 tracking-wide">
                    @wellness_architect.oh
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 모바일 인스타 링크 */}
        <div className="mt-6 sm:hidden text-center">
          <a
            href="https://www.instagram.com/wellness_architect.oh/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            @wellness_architect.oh
          </a>
        </div>

      </div>
    </section>
  );
};

export default ReelsSection;
